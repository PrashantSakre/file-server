export async function upload(file: any, path: string): Promise<any> {
	const filePath = `${process.env.FILE_PATH}/files/${path}${file.name}`;
	const res = await Bun.write(filePath, file, { createPath: true });
	if (res) {
		return filePath;
	}
}

export async function getFile(
	path: string | undefined,
	fileName: string | undefined,
) {
	const filePath = `${process.env.FILE_PATH}/files/${path}${fileName}`;
	return Bun.file(filePath);
}
