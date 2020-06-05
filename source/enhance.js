const { inspect } = require("util");

const chalk = require("chalk");
const PrettyError = require("pretty-error");

const prettyError = new PrettyError();

module.exports = (values) => {
	return (match, placeholder) => {
		const value = values[placeholder];
		if (chalk.level) {
			if (value instanceof Error) {
				return prettyError.render(value);
			} else if (typeof value === "string") {
				return chalk.green(value);
			} else {
				return inspect(value, { colors: true });
			}
		} else if (value instanceof Error) {
			return value.stack;
		} else if (typeof value === "object") {
			return JSON.stringify(value, null, "\t");
		} else {
			return value;
		}
	};
};
