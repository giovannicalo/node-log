const chalk = require("chalk");

const enhance = require("./enhance");

module.exports = ({ color, level, message, values }) => {
	console.log(`[${
		chalk.magenta(new Date().toISOString())
	}] [${
		chalk[color](level)
	}] ${message.replace(
		/\{\{(?<placeholder>.+?)\}\}/gu,
		enhance(values)
	)}`);
};
