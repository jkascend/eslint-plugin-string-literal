# Identifies all string literals. (no-string-literal)

Please describe the origin of the rule here.


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

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
