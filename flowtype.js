/* eslint-disable quote-props */
module.exports = {
  plugins: ["flowtype"],
  rules: {
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
  },
};
