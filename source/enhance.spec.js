const chalk = require("chalk");

const enhance = require("./enhance");

it("should enhance an array when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: [1, "foo"] })(null, "foo")).toBe("[\n\t1,\n\t\"foo\"\n]");
});

it("should enhance an error when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: new Error("Foo") })(null, "foo")).toMatch(/^Error: Foo/u);
});

it("should enhance an error when colors are supported", () => {
	chalk.level = 1;
	expect(enhance({ error: new Error("Foo") })(null, "error")).toMatch(
		/^ {2}\u001B\[0m\u001B\[97m\u001B\[41mError\u001B\[0m\u001B\[90m:\u001B\[0m\u001B\[37m \u001B\[0m\u001B\[97mFoo\u001B\[0m/u // eslint-disable-line no-control-regex
	);
});

it("should enhance a number when colors are supported", () => {
	chalk.level = 1;
	expect(enhance({ foo: 42 })(null, "foo")).toBe("\u001B[33m42\u001B[39m");
});

it("should enhance an object when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: { bar: 1 } })(null, "foo")).toBe("{\n\t\"bar\": 1\n}");
});

it("should enhance a string when colors are supported", () => {
	chalk.level = 1;
	expect(enhance({ foo: "bar" })(null, "foo")).toBe("\u001B[32mbar\u001B[39m");
});

it("should enhance null when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: null })(null, "foo")).toBe("null");
});

it("should not enhance a string when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: "bar" })(null, "foo")).toBe("bar");
});

it("should not enhance undefined when colors are not supported", () => {
	chalk.level = 0;
	expect(enhance({ foo: void 0 })(null, "foo")).toBe(void 0);
});
