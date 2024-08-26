import crypto from "node:crypto";
import fs from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Glob } from "bun";
import { getFilesPath } from "../Queries/File";

/**
 * Generates a hash of a file's content combined with a user-provided string.
 * The hash algorithm defaults to 'sha256' but can be specified by the caller.
 */
export async function hashFile(
	filePath: string,
	user: string,
	algorithm = "sha256",
): Promise<string> {
	return new Promise((resolve, reject) => {
		const hash = crypto.createHash(algorithm);
		const fileStream = fs.createReadStream(filePath);
		hash.update(user);
		fileStream.on("data", (chunk) => hash.update(chunk));
		fileStream.on("end", () => resolve(hash.digest("hex")));
		fileStream.on("error", (err) => reject(err));
	});
}

/**
 * Uploads a file to a specified path, combining the file name with the user's identifier.
 * The file is saved to a directory structure that includes the user's name and the specified path.
 */
export async function upload(file: File, path: string, user: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const filePath = `${process.env.FILE_PATH}/files/${user}${path}${file.name}`;
		Bun.write(filePath, file, { createPath: true })
			.then(() => resolve(filePath))
			.catch((err) => reject(err));
	});
}

export async function getFile(path: string) {
	return Bun.file(path);
}

/**
 * Scans the given folder path for directories only.
 */
export async function scanFolder(path1: string): Promise<string[]> {
	const glob = new Glob("*");

	// Scan the directory for all files and directories.
	const results = await Array.fromAsync(
		glob.scan({ cwd: path1, onlyFiles: false, absolute: true }),
	);

	// Filter out directories and replace backslashes with forward slashes.
	const directories: string[] = [];

	for (const file of results) {
		try {
			const fullPath = path.resolve(file);
			const stats = await stat(fullPath);

			if (stats.isDirectory()) {
				directories.push(file.replace(/\\/g, "/"));
			}
		} catch (err) {
			console.error(`Error checking path: ${file}`, err);
		}
	}

	return directories;
}

/**
 * Retrieves the items (files and directories) from a specified folder path.
 */
export async function getFolderItems(path: string) {
	return await getFilesPath(path);
}
