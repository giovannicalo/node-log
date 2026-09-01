const enhanceError = require("./error");

it("should enhance an error when colors are not supported", () => {
	expect(enhanceError(new TypeError("Foo"))).toMatch(/^TypeError: Foo/v);
});

it("should enhance an error when colors are supported", () => {
	expect(enhanceError(new SyntaxError("Bar"))).toMatch(/^\u001B\[93mSyntaxError\u001B\[39m: Bar/v); // eslint-disable-line no-control-regex
});

it("shouldn't break when the stack is malformed", () => {
	const error = new Error("Foo");
	error.stack += "\n    foo";
	expect(enhanceError(error)).toMatch(/^(?:\u001B\[93m)?Error(?:\u001B\[39m)?: Foo/v); // eslint-disable-line no-control-regex
});

it("shouldn't break when the stack is missing", () => {
	const error = new Error("Foo");
	delete error.stack;
	expect(enhanceError(error)).toMatch(/^(?:\u001B\[93m)?Error(?:\u001B\[39m)?: Foo/v); // eslint-disable-line no-control-regex
});

it("shouldn't break when the stack is missing a method name", () => {
	const error = new Error("Foo");
	error.stack += `\n    at ${__filename}:1:1`;
	expect(enhanceError(error)).toMatch(/^(?:\u001B\[93m)?Error(?:\u001B\[39m)?: Foo/v); // eslint-disable-line no-control-regex
});

it("shouldn't break when relevant code can't be found", () => {
	const error = new Error("Foo");
	error.stack += `\n    at foo (${__filename}:100:100)`;
	expect(enhanceError(error)).toMatch(/^(?:\u001B\[93m)?Error(?:\u001B\[39m)?: Foo/v); // eslint-disable-line no-control-regex
});
