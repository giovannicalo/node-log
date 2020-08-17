const write = require("./write");

module.exports = (level, color) => {
	const enhancedLevel = level.toUpperCase().padEnd(7);
	return (strings, ...values) => {
		write({
			color,
			level: enhancedLevel,
			strings,
			values
		});
	};
};
