import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
	omit: {
		user: {
			password: true,
		},
	},
});

export const users = async () => {
	return await prisma.user.findMany();
};

export const addUser = async (name: string, password: string) => {
	const user = await prisma.user.create({
		data: { name, password, isAdmin: false },
	});
	return user;
};

export const getUserById = async (id: string) => {
	return await prisma.user.findUnique({ where: { id } });
};

export const getUserByName = async (name: string) => {
	return await prisma.user.findUnique({
		where: { name },
		omit: { password: false },
	});
};

export const addAdmin = async (name: string, password: string) => {
	return await prisma.user.create({
		data: { name, password, isAdmin: true },
	});
};

export const getAdminUsers = async () => {
	return await prisma.user.findMany({ where: { isAdmin: true } });
};
