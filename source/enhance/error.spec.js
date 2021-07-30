const chalk = require("chalk");

const enhanceError = require("./error");

it("should enhance an error when colors are not supported", () => {
	chalk.level = 0;
	expect(enhanceError(new TypeError("Foo"))).toMatch(/^TypeError: Foo/u);
});

it("should enhance an error when colors are supported", () => {
	chalk.level = 1;
	expect(enhanceError(new SyntaxError("Bar"))).toMatch(/^\u001B\[93mSyntaxError\u001B\[39m: Bar/u); // eslint-disable-line no-control-regex
});

it("shouldn't break when the stack is malformed", () => {
	chalk.level = 0;
	const error = new Error("Foo");
	error.stack += "\n    foo";
	expect(enhanceError(error)).toMatch(/^Error: Foo/u);
});

it("shouldn't break when the stack is missing", () => {
	chalk.level = 0;
	const error = new Error("Foo");
	delete error.stack;
	expect(enhanceError(error)).toMatch(/^Error: Foo/u);
});

it("shouldn't break when the stack is missing a method name", () => {
	chalk.level = 0;
	const error = new Error("Foo");
	error.stack += `\n    at ${__filename}:1:1`;
	expect(enhanceError(error)).toMatch(/^Error: Foo/u);
});

it("shouldn't break when relevant code can't be found", () => {
	chalk.level = 0;
	const error = new Error("Foo");
	error.stack += `\n    at foo (${__filename}:100:100)`;
	expect(enhanceError(error)).toMatch(/^Error: Foo/u);
});
