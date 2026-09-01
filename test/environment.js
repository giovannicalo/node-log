const { TestEnvironment } = require("jest-environment-node");

class ColorEnvironment extends TestEnvironment {

	handleTestEvent({ name, test }) { // eslint-disable-line class-methods-use-this
		if (name === "test_done") {
			delete process.env.FORCE_COLOR;
		} else if (name === "test_start") {
			process.env.FORCE_COLOR = test.name.includes("colors are not supported") ? "0" : "1";
		}
	}

}

module.exports = ColorEnvironment;
