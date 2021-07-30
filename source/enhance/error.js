const { existsSync, readFileSync } = require("fs");

const chalk = require("chalk");

const findRoot = require("./find-root");

const rootDirectory = findRoot(require.main.filename);

const enhanceError = ({ message, name, stack }) => {
	const enhancedStack = (stack || "").split("\n").slice(1).reduce((trace, item, index) => {
		const match = item.match(
			/^\s*at\s(?:(?<method>.+)\s\()?(?:(?<path>.+?)(?::(?<line>\d+):(?<column>\d+))?)\)?$/u
		);
		if (match) {
			const { groups: { column, line, method, path } } = match;
			if (existsSync(path)) {
				const code = readFileSync(path, "utf-8").split("\n").slice(line - 1, line)[0]; // TODO: Make asynchronous
				return `${
					trace
				}${
					index ? "\n" : ""
				}  ${
					method || "<unknown>"
				}\n  ${
					chalk.gray(path.replace(rootDirectory, "").replaceAll("\\", "/"))
				}:${
					chalk.yellowBright(line)
				}:${
					chalk.yellowBright(column)
				}${
					code ? `\n  ${
						chalk.redBright(code.replace(/^\s*/u, ""))
					}\n  ${
						chalk.cyanBright([...new Array(
							column - code.match(/^\s*/u)[0].length - 1
						).fill(" "), "^"].join(""))
					}` : ""
				}`;
			}
		}
		return trace;
	}, "");
	return `${
		chalk.yellowBright(name)
	}: ${
		message
	}${
		enhancedStack ? `\n${
			enhancedStack
		}` : ""
	}`;
};

module.exports = enhanceError;
