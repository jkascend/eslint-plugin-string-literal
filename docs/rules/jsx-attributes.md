# Identifies provided JSX attributes. (jsx-attributes)

Provided with a set of target JSX attributes, this rule will identify them all.


## Rule Details

Examples of **incorrect** code for this rule:

```js
// where targAttr is a targeted JSX attribute
<a targAttr="foo">bar</a>

```

Examples of **correct** code for this rule:

```js
// where targAttri is not targeted
<a targAttr="foo">bar</a>

```

## When Not To Use It

Any time you are not trying to identify JSX attributes in your code.
