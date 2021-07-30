const create = require("./create");

module.exports.error = create("error", "red");

module.exports.info = create("info", "cyan");

module.exports.warning = create("warning", "yellow");
