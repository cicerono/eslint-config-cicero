/* eslint-disable quote-props */
module.exports = {
  extends: [
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        singleQuote: false,
        trailingComma: "all",
        bracketSpacing: false,
        jsxBracketSameLine: false,
        parser: "flow",
      },
    ],

  },
};
