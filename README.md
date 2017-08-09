# eslint-plugin-string-literal

Identifies string literals.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-string-literal`:

```
$ npm install eslint-plugin-string-literal --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-string-literal` globally.

## Usage

Add `string-literal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "string-literal"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "string-literal/rule-name": 2
    }
}
```
