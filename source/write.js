const chalk = require("chalk");

const enhance = require("./enhance");

module.exports = ({ color, level, strings, values }) => {
	console.log(`[${
		chalk.magenta(new Date().toISOString())
	}] [${
		chalk[color](level)
	}] ${strings.reduce((message, string, index) => {
		return `${
			message
		}${
			string
		}${
			index < strings.length - 1 ? enhance(values[index]) : ""
		}`;
	}, "")}`);
};
