const replaceValue = (key, value) => {
	if (typeof value === "bigint") {
		return `${String(value)}n`;
	} else {
		return value;
	}
};

module.exports = replaceValue;
