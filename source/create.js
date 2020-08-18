const write = require("./write");

const create = (level, color) => {
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

module.exports = create;
