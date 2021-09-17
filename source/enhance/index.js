const { inspect } = require("util");

const chalk = require("chalk");

const enhanceError = require("./error");
const replaceValue = require("./replace-value");

const enhance = (value) => {
	if (chalk.level) {
		if (value instanceof Error) {
			return enhanceError(value);
		} else if (typeof value === "string") {
			return chalk.green(value);
		} else {
			return inspect(value, {
				colors: true,
				sorted: true
			});
		}
	} else if (value instanceof Error) {
		return value.stack.replace(/ {4}/gu, "\t");
	} else if (typeof value === "object") {
		return JSON.stringify(value, replaceValue, "\t");
	} else {
		return value;
	}
};

module.exports = enhance;
