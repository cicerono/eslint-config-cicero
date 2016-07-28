module.exports = {
  "extends": ["eslint-config-airbnb", "plugin:lodash/recommended", "plugin:import/errors", "plugin:import/warnings"],
  "plugins": ["lodash"],
  "globals": {
    "__DEV__": false,
    "__TEST__": false,
    "__RELEASE__": false,
    "API_PREFIX": false,
    "exports": false,
    "fixtures": false,
    "LOG_LEVEL": false,
    "sinon": false,
    "SLOW_TEST_TIMEOUT": false,
    "TestUtils": false,
    "expect": false
  },
  "ecmaFeatures": {
    "templateStrings": true
  },
  "rules": {
    "lodash/prefer-lodash-method": [2, {"except": ["find"]}],
    "max-len": [2, 100, 2, {"ignorePattern": "(^import)|(^} from)"}],
    "no-multiple-empty-lines": [2, {"max": 1, "maxBOF": 0, "maxEOF": 0}],
    "object-curly-spacing": [2, "never"],
    "quotes": [2, "double"],
    "react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": [2, {"ignoreCase": true}],
    "react/jsx-sort-prop-types": [2, { "callbacksLast": true, "ignoreCase": true, "requiredFirst": false }],

    "arrow-body-style": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "no-case-declarations": 0,
    "no-else-return": 0,
    "react/jsx-no-bind": 0,
    "react/prefer-es6-class": 0,

    "prefer-template": 0,
  }
}
