import { stat } from "node:fs/promises";
import path from "node:path";
import { Glob } from "bun";
import { getFilesPath } from "../Queries/File";

export async function upload(file: File, path: string) {
	const filePath = `${process.env.FILE_PATH}/files${path}${file.name}`;
	const res = await Bun.write(filePath, file, { createPath: true });
	if (res) {
		return filePath;
	}
}

export async function getFile(path: string) {
	return Bun.file(path);
}

/**
 * Scans the given folder path for directories only.
 * @param path - The path of the folder to scan.
 * @returns An array of directory paths, with backslashes replaced by forward slashes.
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

export async function getFolderItems(path: string) {
	return await getFilesPath(path);
}
