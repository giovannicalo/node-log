const { readFileSync } = require("fs");
const { dirname, join } = require("path");

const chalk = require("chalk");

const rootDirectory = join(dirname(require.main.filename), "/");

const enhanceError = ({ message, name, stack }) => {
	return `${
		chalk.yellowBright(name)
	}: ${
		message
	}\n${
		stack.split("\n").slice(1).reduce((trace, item, index) => {
			const match = item.match(
				/^\s*at\s(?:(?<method>.+)\s\()?(?:(?<path>.+):(?<line>\d+):(?<column>\d+))?\)?$/u
			);
			if (match) {
				const { groups: { column, line, method, path } } = match;
				if (path && !path.startsWith("internal")) {
					const code = readFileSync(path, "utf-8").split("\n").slice(line - 1, line)[0];// TODO: Make asynchronous
					return `${
						trace
					}${
						index ? "\n" : ""
					}  ${
						method
					}\n  ${
						chalk.gray(path.replace(rootDirectory, ""))
					}:${
						chalk.yellowBright(line)
					}:${
						chalk.yellowBright(column)
					}\n  ${
						chalk.redBright(code.replace(/^\s*/u, ""))
					}\n  ${
						chalk.cyanBright(new Array(column - code.match(/^\s*/u)[0].length - 1).fill(" ").concat(["^"]).join(""))
					}`;
				}
			}
			return trace;
		}, "")
	}`;
};

module.exports = enhanceError;
