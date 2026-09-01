let log = null;

beforeEach(() => {
	jest.resetAllMocks();
	jest.resetModules();
	jest.spyOn(console, "log").mockImplementation();
	log = require("."); // eslint-disable-line n/global-require
});

it("should print an info message in the correct format when colors are supported", () => {
	log.info`Foo ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		// eslint-disable-next-line no-control-regex
		/^\[\u001B\[35m\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\u001B\[39m\] \[\u001B\[36mINFO {3}\u001B\[39m\] Foo \u001B\[33m42\u001B\[39m/v
	));
});

it("should print an info message in the correct format when colors are not supported", () => {
	log.info`Foo ${42}`;
	expect(console.log).toHaveBeenCalledTimes(1);
	expect(console.log).toHaveBeenCalledWith(expect.stringMatching(
		/^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\] \[INFO {3}\] Foo 42/v
	));
});
