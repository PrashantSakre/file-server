export async function generateHash(password: string): Promise<string> {
	return await Bun.password.hash(password);
}

export async function checkHash(
	password: string,
	hash: string,
): Promise<boolean> {
	return Bun.password.verify(password, hash);
}
