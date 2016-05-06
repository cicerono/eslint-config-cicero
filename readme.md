# Cicero eslint-config

## Install

```
 $ npm i --save-dev eslint-config-cicero
```
## Usage
Extend in your local config.

#### Strict
```json
{
  "extends": "cicero",
}
```

#### Regular

```json
{
  "extends": "cicero/base",
}
```

### With lint-filter
Extend strict in .eslintrc and regular in .eslintsloppyrc and then use lint-filter with .eslintrc.

Run this on to lint:
```
eslint -c .eslintsloppyrc .
eslint $(lint-filter list-files) -f checkstyle | lint-filter
```

The reason that .eslintrc contains strict is to make editors lint those rules as well.
