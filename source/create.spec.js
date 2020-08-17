const chalk = require("chalk");

const create = require("./create");

it("should create a log function and print a message in the correct format when colors are supported", () => {
	chalk.level = 1;
	console.log = jest.fn((message) => {
		expect(message).toMatch(
			/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mFOO {4}\u001B\[39m\] Bar \u001B\[33m42\u001B\[39m/u // eslint-disable-line no-control-regex
		);
	});
	create("foo", "cyan")`Bar ${42}`;
});

it("should create a log function and print a message in the correct format when colors are not supported", () => {
	chalk.level = 0;
	console.log = jest.fn((message) => {
		expect(message).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[FOO {4}\] Bar 42/u);
	});
	create("foo", "cyan")`Bar ${42}`;
});
