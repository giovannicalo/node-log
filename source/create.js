const write = require("./write");

module.exports = (level, color) => {
	const formattedLevel = level.toUpperCase().padEnd(7);
	return (message, values) => {
		write({
			color,
			level: formattedLevel,
			message,
			values
		});
	};
};
