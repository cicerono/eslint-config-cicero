/* eslint-disable quote-props */

module.exports = {
  extends: ["plugin:lodash/recommended"],
  plugins: ["lodash"],
  rules: {
    "lodash/prefer-lodash-method": [2, {ignoreObjects: ["wrapper", "component"]}],
    "lodash/import-scope": [2, "member"],
  },
};
