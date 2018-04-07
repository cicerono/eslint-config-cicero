/* eslint-disable quote-props */
module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "plugin:lodash/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["lodash", "flowtype", "import"],
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

    "flowtype/boolean-style": [1, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [1, "only-multiline"],
    "flowtype/generic-spacing": [1, "never"],
    "flowtype/no-dupe-keys": 2,
    "flowtype/no-weak-types": [
      2,
      {
        any: true,
        Object: true,
        Function: true,
      },
    ],
    "flowtype/require-valid-file-annotation": 1,
    "flowtype/semi": 2,
    "flowtype/space-after-type-colon": [1, "always"],
    "flowtype/space-before-generic-bracket": [1, "never"],
    "flowtype/space-before-type-colon": [1, "never"],
    "flowtype/type-id-match": [1, "^([A-Z][a-z0-9]+)+"],
    "flowtype/union-intersection-spacing": [1, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 2,

    "arrow-body-style": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-case-declarations": 0,
    "no-else-return": 0,
  },
};
