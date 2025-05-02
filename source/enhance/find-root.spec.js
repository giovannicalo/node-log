const findRoot = require("./find-root");

jest.mock("fs", () => {
	return {
		existsSync(path) {
			return /^(?:\/|\\)foo(?:\/|\\)package.json$/v.test(path);
		}
	};
});

it("should find the root directory of a Node project", () => {
	expect(findRoot("/foo/bar/index.js")).toMatch(/(?:\/|\\)foo(?:\/|\\)/v);
});

it("should find nothing when not a Node project", () => {
	expect(findRoot("/bar/foo/index.js")).toBe("");
});
