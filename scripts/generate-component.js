const path = require('path');
const fs = require('fs');
const Loader = require('./_loader');

const { startLoader, stopLoader } = Loader.createLoader();

const componentName = process.argv[2];
const destination = process.argv[3];

const destinationDirectoryPath = path.resolve(__dirname, `../src/${destination}/`);
const destinationNewDirectoryPath = path.join(destinationDirectoryPath, componentName);
const createFilePath = (filename) => path.join(destinationNewDirectoryPath, filename);

const filePrefixes = ['.tsx', '.styled.ts', '.types.ts'];

main();

async function main() {
	startLoader();
	await sleep(500);
	checkDir(destinationDirectoryPath);
	createComponentFiles();
	stopLoader();
}

function checkDir(path) {
	if (fs.existsSync(path)) return;

	fs.mkdirSync(path);
}

function createComponentFiles() {
	if (!componentName) return;

	fs.mkdirSync(path.join(destinationNewDirectoryPath));

	for (const prefix of filePrefixes) {
		const filePath = path.join(__dirname, prefix);
		fs.writeFileSync(createFilePath(`${componentName}${prefix}`), '');
	}

	console.log(`\nComponent ${componentName} created`);
}

function createComponentIndexFile() {
	if (!componentName) return;

	fs.writeFileSync(createFilePath('index.ts'), '');

	console.log(`Component ${componentName} index.ts created`);
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
