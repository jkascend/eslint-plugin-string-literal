/**
 * @fileoverview Identifies targeted JSX attributes that have string literal values.
 * @author Justin Kambic
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-attributes"),

RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester(
    {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    }
);

ruleTester.run("jsx-attribute", rule, {
    valid: [
        {
            code: "<Foo bar={options} />",
            options: [{targetJsxAttributes: ["foo"]}],
        },
        {
            code: "<Foo bar={options} />",
        },
        {
            code: '<Foo bar={options} />',
            options: [{targetJsxAttributes: ["bar"]}],
        },
        {
            code: '<Foo bar="not targeted" />',
            options: [{targetJsxAttributes: ["something", "else"]}],
        }
    ],

    invalid: [
        {
            code: '<Foo bar="string literal" />',
            options: [{targetJsxAttributes: ["bar"]}],
            errors: [{
                message: "Target JSX literal identified.",
                type: "JSXAttribute",
            }]
        }
    ]
});
