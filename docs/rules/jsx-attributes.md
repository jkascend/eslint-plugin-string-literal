# Identifies provided JSX attributes. (jsx-attributes)

Provided with a set of target JSX attributes, this rule will identify all the attributes with a string literal as their value..


## Rule Details

Examples of **incorrect** code for this rule:

```js
// jsx-attributes: [targetJsxAttributes: ["targAttr"]]
<a targAttr="foo">bar</a>

```

Examples of **correct** code for this rule:

```js
// jsx-attributes: [targetJsxAttributes: ["notTarg"]]
<a targAttr="foo">bar</a>
<a notTarg={options}>bar</a>

```

## When Not To Use It

Any time you are not trying to identify specific JSX attributes with string literal values in your code.
