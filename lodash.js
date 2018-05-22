/* eslint-disable quote-props */

module.exports = {
  extends: ["plugin:lodash/recommended"],
  plugins: ["lodash"],
  rules: {
    "lodash/prefer-lodash-method": [2, {ignoreObjects: ["wrapper", "component"], ignoreMethods: ["isArray"]}],
    "lodash/import-scope": 0,
  },
};
