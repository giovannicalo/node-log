const { existsSync } = require("fs");
const { dirname, join } = require("path");

const findRoot = (file) => {
	const directory = dirname(file);
	if (existsSync(join(directory, "package.json"))) {
		return join(directory, "/");
	} else if (directory !== file) {
		return findRoot(directory);
	} else {
		return "";
	}
};

module.exports = findRoot;
