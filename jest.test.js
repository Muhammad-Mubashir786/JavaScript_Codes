const { default: TestRunner } = require("jest-runner");
const concatStrings = require(`./concat`);
test("abcdef", () => {
  expect(concatStrings("abc", "def")).toBe("abcdef");
});
