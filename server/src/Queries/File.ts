import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const files = async () => {
	return await prisma.file.findMany();
};

export const addFile = async (name: string, userId: string, path: string) => {
	return await prisma.file.create({
		data: { name, userId, path, hash: "hash" },
	});
};

export const getFileById = async (id: string) => {
	return await prisma.file.findUnique({ where: { id } });
};
