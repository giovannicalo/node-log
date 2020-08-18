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
