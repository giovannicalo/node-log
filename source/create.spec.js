let create = null;

beforeEach(() => {
	jest.resetAllMocks();
	jest.resetModules();
	jest.spyOn(console, "log").mockImplementation();
	create = require("./create"); // eslint-disable-line n/global-require
});

it("should create a log function and print a message in the correct format when colors are supported", () => {
	create("foo", "cyan")`Bar ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		// eslint-disable-next-line no-control-regex
		/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mFOO {4}\u001B\[39m\] Bar \u001B\[33m42\u001B\[39m/v
	));
});

it("should create a log function and print a message in the correct format when colors are not supported", () => {
	create("foo", "cyan")`Bar ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[FOO {4}\] Bar 42/v
	));
});
