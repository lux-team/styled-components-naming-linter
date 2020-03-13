# eslint-plugin-lux-linter

The LUX Linters

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lux-linter`:

```
$ npm install eslint-plugin-lux-linter --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lux-linter` globally.

## Usage

Add `lux-linter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lux-linter"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lux-linter/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





