const chalk = require("chalk");

const log = require(".");

it("should print an info message in the correct format when colors are supported", () => {
	chalk.level = 1;
	console.log = jest.fn((message) => {
		expect(message).toMatch(
			/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mINFO {3}\u001B\[39m\] Foo \u001B\[33m42\u001B\[39m/u // eslint-disable-line no-control-regex
		);
	});
	log.info`Foo ${42}`;
});

it("should print an info message in the correct format when colors are not supported", () => {
	chalk.level = 0;
	console.log = jest.fn((message) => {
		expect(message).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO {3}\] Foo 42/u);
	});
	log.info`Foo ${42}`;
});
