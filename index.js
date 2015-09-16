module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  ecmaFeatures: {
    "modules": true,
    "arrowFunctions": true,
    "classes": true,
    "destructuring": true,
    "jsx": true,
    "blockBindings": true,
  },
  rules: {
    "vars-on-top":[0],
    "brace-style": [2, "1tbs"],
    "comma-style": [2, "last"],
    "indent": [2, 2],
    "no-extend-native": [0],
    "no-multiple-empty-lines": [2, {"max": 1}],
    "space-before-function-paren": [2, "always"],
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "no-extra-strict": [0],
    "prefer-const": [2],
    "comma-dangle": [2, "always-multiline"],
  }
};
