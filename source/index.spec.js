const chalk = require("chalk");

const log = require(".");

beforeEach(() => {
	jest.resetAllMocks();
	jest.spyOn(console, "log").mockImplementation();
});

it("should print an info message in the correct format when colors are supported", () => {
	chalk.level = 1;
	log.info`Foo ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(
		// eslint-disable-next-line no-control-regex
		expect.stringMatching(/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mINFO {3}\u001B\[39m\] Foo \u001B\[33m42\u001B\[39m/u)
	);
});

it("should print an info message in the correct format when colors are not supported", () => {
	chalk.level = 0;
	log.info`Foo ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(
		expect.stringMatching(/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO {3}\] Foo 42/u)
	);
});
