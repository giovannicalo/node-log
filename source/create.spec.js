const chalk = require("chalk");

const create = require("./create");

beforeEach(() => {
	jest.resetAllMocks();
	jest.spyOn(console, "log").mockImplementation();
});

it("should create a log function and print a message in the correct format when colors are supported", () => {
	chalk.level = 1;
	create("foo", "cyan")`Bar ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(
		// eslint-disable-next-line no-control-regex
		expect.stringMatching(/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mFOO {4}\u001B\[39m\] Bar \u001B\[33m42\u001B\[39m/u)
	);
});

it("should create a log function and print a message in the correct format when colors are not supported", () => {
	chalk.level = 0;
	create("foo", "cyan")`Bar ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(
		expect.stringMatching(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[FOO {4}\] Bar 42/u)
	);
});
