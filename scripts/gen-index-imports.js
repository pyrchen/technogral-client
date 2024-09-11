/* eslint-disable */
const path = require('path');
const fs = require('fs');
const Loader = require('./_loader');

const { startLoader, stopLoader } = Loader.createLoader();

const destinationDirectoryPath = path.resolve(__dirname, '../src/');
const createIndexFile = (pathIn) => path.join(pathIn, 'index.ts');

const iconsPath = path.join(destinationDirectoryPath, 'icons');
const componentsPath = path.join(destinationDirectoryPath, 'components');
const uikitPath = path.join(destinationDirectoryPath, 'uikit');

(async function main() {
	const fns = [createIconsImports, createComponentsImports, createUikitImports];

	startLoader();

	for (const createFn of fns) {
		const names = await createFn();
		console.log(names);
	}

	stopLoader();
})();

async function createIconsImports() {
	const filenames = await getFilesNames(iconsPath);
	const templateImports = createImportsTemplate(filenames, createIconComponentName, (filename) => `./${filename}`);
	const templateExports = createExportTemplate(filenames, createIconComponentName);

	return new Promise((resolve) => {
		fs.writeFile(createIndexFile(iconsPath), `${templateImports}\r\n${templateExports}`, () => {
			resolve(filenames.map(createIconComponentName));
		});
	});
}

async function createComponentsImports() {
	const filenames = await getFilesNames(componentsPath);
	const templateImports = createImportsTemplate(
		filenames,
		(filename) => filename,
		(filename) => `./${filename}/${filename}`
	);
	const templateExports = createExportTemplate(filenames, (filename) => filename);

	return new Promise((resolve) => {
		fs.writeFile(createIndexFile(componentsPath), `${templateImports}\r\n${templateExports}`, () => {
			resolve(filenames.map((_) => _));
		});
	});
}

async function createUikitImports() {
	const filenames = await getFilesNames(uikitPath);
	const templateImports = createImportsTemplate(
		filenames,
		(_) => _,
		(_) => `./${_}/${_}`
	);
	const templateExports = createExportTemplate(filenames, (_) => _);

	return new Promise((resolve) => {
		fs.writeFile(createIndexFile(uikitPath), `${templateImports}\r\n${templateExports}`, () => {
			resolve(filenames.map((_) => _));
		});
	});
}

async function getFilesNames(folderPath) {
	return new Promise((resolve) => {
		fs.readdir(folderPath, (error, data) => {
			error && console.log(error);
			resolve(data.filter((filename) => filename !== 'index.ts'));
		});
	});
}

const createImportsTemplate = (filenames, importNameFn, pathFromFn) =>
	filenames
		.reduce((acc, filename) => {
			return (acc += `import ${importNameFn(filename)} from '${pathFromFn(filename)}';\r\n`);
		}, ``)
		.trim();

const createExportTemplate = (filenames, exportNameFn) => `
 export {
 ${filenames
		.reduce((acc, filename, i) => {
			return (acc += `${exportNameFn(filename)}${i === filenames.length - 1 ? '\r\n' : ',\r\n'}`);
		}, '')
		.trim()}
 };
`;

const createIconComponentName = (filename) => {
	const iconName = filename.split('.')[0];
	const parts = iconName.split('-');
	return parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
};
