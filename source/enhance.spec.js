const chalk = require("chalk");

const enhance = require("./enhance");

chalk.enabled = true;

chalk.level = 1;

it("should enhance a number", () => {
	expect(
		enhance({ foo: 42 })(null, "foo")
	).toBe(
		"\u001B[33m42\u001B[39m"
	);
});

it("should enhance a string", () => {
	expect(
		enhance({ foo: "bar" })(null, "foo")
	).toBe(
		"\u001B[32mbar\u001B[39m"
	);
});
