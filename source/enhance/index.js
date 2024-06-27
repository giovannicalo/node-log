const { inspect } = require("util");

const chalk = require("chalk");

const enhanceError = require("./error");
const replaceValue = require("./replace-value");

const enhance = (value) => {
	if (chalk.level) {
		if (value instanceof Error) {
			return enhanceError(value);
		}
		if (typeof value === "string") {
			return chalk.green(value);
		}
		return inspect(value, {
			colors: true,
			sorted: true
		});
	}
	if (value instanceof Error) {
		return value.stack.replaceAll(/ {4}/gu, "\t");
	}
	if (typeof value === "object") {
		return JSON.stringify(value, replaceValue, "\t");
	}
	return value;
};

module.exports = enhance;
