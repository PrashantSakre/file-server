export async function upload(fileName: string, file: any, path: string) {
	const filePath = `${process.env.FILE_PATH}/files/${path}${fileName}`;
	const res = await Bun.write(filePath, file, { createPath: true });
	if (res) {
		return await Bun.file(filePath);
	}
}

export async function getFile(
	path: string | undefined,
	fileName: string | undefined,
) {
	const filePath = `${process.env.FILE_PATH}/files/${path}${fileName}`;
	return await Bun.file(filePath);
}
