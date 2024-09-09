/* eslint-disable */
const path = require('path');
const fs = require('fs');
const Loader = require('./_loader');

const { startLoader, stopLoader } = Loader.createLoader();

const destinationDirectoryPath = path.resolve(__dirname, `../src/icons/`);
const createFilePath = (filename) => path.join(destinationDirectoryPath, filename);

main();

async function main() {
	// fs.writeFileSync(createFilePath('index.ts'), '');
	const filenames = await getIconsNames();
	console.log(filenames);
	const templateImports = createImportsTemplate(filenames);
	const templateExports = createExportTemplate(filenames);

	fs.writeFileSync(
		createFilePath('index.ts'),
		`
	 ${templateImports}

	 ${templateExports}
	`
	);
}

async function getIconsNames() {
	return new Promise((resolve) => {
		fs.readdir(destinationDirectoryPath, (error, data) => {
			error && console.log(error);
			resolve(data.filter((filename) => filename !== 'index.ts'));
		});
	});
}

const createImportsTemplate = (filenames) =>
	filenames
		.reduce((acc, filename) => {
			return (acc += `import ${createIconComponentName(filename)} from './${filename}';\r\n`);
		}, ``)
		.trim();

const createExportTemplate = (filenames) => `
 export {
 ${filenames
		.reduce((acc, filename, i) => {
			return (acc += `${createIconComponentName(filename)}${i === filenames.length - 1 ? '\r\n' : ',\r\n'}`);
		}, '')
		.trim()}
 };
`;

const createIconComponentName = (filename) => {
	const iconName = filename.split('.')[0];
	const parts = iconName.split('-');
	return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
};
