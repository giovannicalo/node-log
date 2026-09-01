const { styleText } = require("util");

const enhance = require("./enhance");

const write = ({ color, level, strings, values }) => {
	console.log(`[${
		styleText("magenta", new Date().toISOString())
	}] [${
		styleText(color, level)
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

module.exports = write;
