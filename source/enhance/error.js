const { existsSync, readFileSync } = require("fs");
const { styleText } = require("util");

const findRoot = require("./find-root");

const rootDirectory = findRoot(require.main.filename);

const enhanceError = ({ message, name, stack }) => {
	const enhancedStack = (stack || "").split("\n").slice(1).reduce((trace, item, index) => {
		const match = item.match(
			/^\s*at\s(?:(?<method>.+)\s\()?(?:(?<path>.+?)(?::(?<line>\d+):(?<column>\d+))?)\)?$/v
		);
		if (match) {
			const { groups: { column, line, method, path } } = match;
			if (existsSync(path)) {
				const code = readFileSync(path, "utf8").split("\n").slice(line - 1, line)[0];
				return `${
					trace
				}${
					index ? "\n" : ""
				}  ${
					method || "<unknown>"
				}\n  ${
					styleText("gray", path.replace(rootDirectory, "").replaceAll("\\", "/"))
				}:${
					styleText("yellowBright", line)
				}:${
					styleText("yellowBright", column)
				}${
					code ? `\n  ${
						styleText("redBright", code.replace(/^\s*/v, ""))
					}\n  ${
						styleText("cyanBright", [...new Array(
							column - code.match(/^\s*/v)[0].length - 1
						).fill(" "), "^"].join(""))
					}` : ""
				}`;
			}
		}
		return trace;
	}, "");
	return `${
		styleText("yellowBright", name)
	}: ${
		message
	}${
		enhancedStack ? `\n${
			enhancedStack
		}` : ""
	}`;
};

module.exports = enhanceError;
