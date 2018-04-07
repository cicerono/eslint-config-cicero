# Cicero eslint-config

## Setup

There is an interactive setup script that will help you setup and install
dependencies correctly in your project. It will update the .eslintrc file as
well.

```shell
yarn add --dev eslint-config-cicero # or npm i --save-dev eslint-config-cicero

./node_modules/.bin/cicero-lint-setup # Running this should set everything up for you.
```

## Configs

One thing to note is that you probably want to use either `cicero` or `cicero/react`.

### `cicero`

This is the base config, it should be used with all non-react projects. Most of these rules come
from the airbnb base config.

### `cicero/prettier`

This is the prettier config that is closes to our base config. Please use it :v:

### `cicero/flowtype`

Use this if the project uses flowtypes. It has a few rules helpful to getting a consistent
type usage and enabling default eslint rules for the types.

### `cicero/react`

Our config for react projects, mostly based on the airbnb config.

### `cicero/lodash`

Use this if the project uses regular lodash.

### `cicero/lodash-fp`

Use this if the project uses lodash-fp.
