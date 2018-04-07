/* eslint-disable quote-props */
module.exports = {
  extends: [
    "eslint-config-airbnb",
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
    "react/jsx-curly-spacing": [2, "never", {allowMultiline: true}],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": [2, {ignoreCase: true}],
    "react/sort-prop-types": [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
      },
    ],
    "react/sort-comp": [
      2,
      {
        order: [
          "type-annotations",
          "static-methods",
          "lifecycle",
          "/^on.+$/",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "everything-else",
          "/^render.+$/",
          "render",
        ],
      },
    ],

    "no-duplicate-imports": [0],
    "import/no-duplicates": [2],

    "arrow-body-style": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-case-declarations": 0,
    "no-else-return": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 0,
    "react/prefer-es6-class": 0,
  },
};
