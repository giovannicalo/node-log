const create = require("./create");

module.exports = {
	error: create("error", "red"),
	info: create("info", "cyan"),
	warning: create("warning", "yellow")
};
