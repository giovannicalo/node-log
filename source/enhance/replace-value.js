const replaceValue = (key, value) => {
	if (typeof value === "bigint") {
		return `${String(value)}n`;
	}
	return value;
};

module.exports = replaceValue;
