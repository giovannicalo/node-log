const replaceValue = require("./replace-value");

it("should convert a bigint into a string", () => {
	expect(replaceValue("foo", 42n)).toBe("42n");
});

it("should return anything other than a bigint as is", () => {
	expect(replaceValue("foo", [42, "bar"])).toEqual([42, "bar"]);
	expect(replaceValue("foo", true)).toBe(true);
	expect(replaceValue("foo", 42)).toBe(42);
	expect(replaceValue("foo", { bar: 42 })).toEqual({ bar: 42 });
	expect(replaceValue("foo", "bar")).toBe("bar");
	expect(replaceValue("foo", void 0)).toBe(void 0);
});
