var _ = require("lodash");
var defaults = _.cloneDeep(require("./defaults"));

module.exports = _.defaultsDeep({
  parser: "babel-eslint",
  plugins: [],
  ecmaFeatures: {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "destructuring": true,
    "modules": true,
  },
  rules: {
    "brace-style": [2, "1tbs"],
    "comma-dangle": [2, "always-multiline"],
    "comma-style": [2, "last"],
    "default-case": [2],
    "dot-location": [2, "property"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": [2, 100, 2, {"ignorePattern": "(^import)|(^} from)"}],
    "new-cap": [2, { "capIsNewExceptions": ["List", "Map", "OrderedMap"] }],
    "no-dupe-keys": [2],
    "no-extend-native": [0],
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-undef": [2],
    "no-underscore-dangle": [0],
    "no-unused-vars": [2],
    "no-var": [2],
    "one-var": [2, "never"],
    "prefer-const": [2],
    "radix": [2],
    "semi": [2, "always"],
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "vars-on-top": [0],
  }
}, defaults);
