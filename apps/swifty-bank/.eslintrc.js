/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@swifty/eslint-config/next.js",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
