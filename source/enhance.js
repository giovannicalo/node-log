const { inspect } = require("util");

const chalk = require("chalk");
const PrettyError = require("pretty-error");

const prettyError = new PrettyError();

module.exports = (values) => {
	return (match, placeholder) => {
		const value = values[placeholder];
		if (value instanceof Error) {
			return prettyError.render(value);
		} else if (typeof value === "string") {
			return chalk.green(value);
		} else {
			return inspect(value, {
				colors: true
			});
		}
	};
};
