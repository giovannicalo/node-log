let write = null;

const parameters = {
	color: "cyan",
	level: "FOO    ",
	strings: ["Foo ", ""],
	values: [42]
};

beforeEach(() => {
	jest.resetAllMocks();
	jest.resetModules();
	jest.spyOn(console, "log").mockImplementation();
	write = require("./write"); // eslint-disable-line n/global-require
});

it("should print a message in the correct format when colors are supported", () => {
	write(parameters);
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		// eslint-disable-next-line no-control-regex
		/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mFOO {4}\u001B\[39m\] Foo \u001B\[33m42\u001B\[39m/v
	));
});

it("should print a message in the correct format when colors are not supported", () => {
	write(parameters);
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[FOO {4}\] Foo 42/v
	));
});
