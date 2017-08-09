# Identifies all string literals. (no-string-literal)

Created because I needed to identify any string literals in my client for localization purposes.


## Rule Details

This rule aims to identify all string literals.

Examples of **incorrect** code for this rule:

```js

var foo = "bar";

```

Examples of **correct** code for this rule:

```js

const foo = resources.bar;

```

## When Not To Use It

Any time you want to have string literals in your project.
