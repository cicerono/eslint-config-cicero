/* eslint-disable quote-props */
module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "plugin:lodash/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["lodash", "import"],
  rules: {
    "lodash/prefer-lodash-method": [2, {ignoreObjects: ["wrapper", "component"]}],
    "lodash/import-scope": [2, "member"],
    "max-len": [2, 100, 2, {ignorePattern: "(^import)|(^} from)"}],
    "no-multiple-empty-lines": [2, {max: 1, maxBOF: 0, maxEOF: 0}],
    "object-curly-spacing": [2, "never"],
    quotes: [2, "double"],
    "import/no-extraneous-dependencies": [2, {devDependencies: true}],

    "no-duplicate-imports": [0],
    "import/no-duplicates": [2],

    "arrow-body-style": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-case-declarations": 0,
    "no-else-return": 0,
  },
};
