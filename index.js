/* eslint-disable quote-props */
module.exports = {
  extends: [
    "eslint-config-airbnb",
    "plugin:lodash/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  plugins: ["lodash", "flowtype", "import", "prettier"],
  rules: {
    "lodash/prefer-lodash-method": [2, {ignoreObjects: ["wrapper", "component"]}],
    "lodash/import-scope": [2, "member"],
    "max-len": [2, 100, 2, {ignorePattern: "(^import)|(^} from)"}],
    "import/no-extraneous-dependencies": [2, {devDependencies: true}],
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

    "flowtype/boolean-style": [1, "boolean"],
    "flowtype/define-flow-type": 1,
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
    "flowtype/type-id-match": [1, "^([A-Z][a-z0-9]+)+"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 2,

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
