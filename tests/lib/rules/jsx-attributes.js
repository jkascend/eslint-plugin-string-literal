/**
 * @fileoverview Identifies targeted JSX attributes.
 * @author jsx-attributes
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
        }
    ],

    invalid: [
        {
            code: "<Foo bar={options} />",
            options: [{targetJsxAttributes: ["bar"]}],
            errors: [{
                message: "Target JSX literal identified.",
                type: "JSXAttribute",
            }]
        }
    ]
});
