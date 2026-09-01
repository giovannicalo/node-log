const { inspect, styleText } = require("util");

const enhanceError = require("./error");
const replaceValue = require("./replace-value");

const hasColors = styleText("green", "").includes("\u001B");

const enhance = (value) => {
	if (hasColors) {
		if (value instanceof Error) {
			return enhanceError(value);
		}
		if (typeof value === "string") {
			return styleText("green", value);
		}
		return inspect(value, {
			colors: true,
			sorted: true
		});
	}
	if (value instanceof Error) {
		return value.stack.replaceAll(/ {4}/gv, "\t");
	}
	if (typeof value === "object") {
		return JSON.stringify(value, replaceValue, "\t");
	}
	return value;
};

module.exports = enhance;
