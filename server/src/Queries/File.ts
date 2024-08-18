import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const files = async () => {
	return await prisma.file.findMany();
};

export const directoryFiles = async (directory: string) => {
	return await prisma.file.findMany({ where: { directory } });
};

export const getFilesPath = async (directory: string) => {
	return await prisma.file.findMany({ where: { directory } });
};

export const addFile = async (
	name: string,
	userId: string,
	path: string,
	type: string,
	directory: string,
	hash: string,
) => {
	return await prisma.file.create({
		data: { name, type, userId, path, hash, directory },
	});
};

export const getFileById = async (id: string) => {
	return await prisma.file.findUnique({ where: { id } });
};
