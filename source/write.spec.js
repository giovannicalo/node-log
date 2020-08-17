const chalk = require("chalk");

const write = require("./write");

const parameters = {
	color: "cyan",
	level: "FOO    ",
	strings: ["Foo ", ""],
	values: [42]
};

it("should print a message in the correct format when colors are supported", () => {
	chalk.level = 1;
	console.log = jest.fn((message) => {
		expect(message).toMatch(
			/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mFOO {4}\u001B\[39m\] Foo \u001B\[33m42\u001B\[39m/u // eslint-disable-line no-control-regex
		);
	});
	write(parameters);
});

it("should print a message in the correct format when colors are supported", () => {
	chalk.level = 0;
	console.log = jest.fn((message) => {
		expect(message).toMatch(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[FOO {4}\] Foo 42/u);
	});
	write(parameters);
});

