/**
 * @fileoverview Identifies all string literals.
 * @author no-string-literal
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-string-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-string-literal", rule, {

    valid: [
         {
             code: "const x = 3;",
             parserOptions: {
                 ecmaVersion: 6,
                 jsx: true
             }
         },
        {
            code: "const d = () => <div></div>",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code: "var foo = <div>{bar}</div>",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code: 'const foo = <div className="class-name">{bar}</div>',
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        {
            code: 'import packageName from "a-package";',
            parserOptions: {
                ecmaVersion: 6,
                sourceType: "module"
            }
        },
        {
            code: "var foo = ''"
        }
    ],

    invalid: [
        {
            code: "var myStr = \"a string literal\"",
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        },
        {
            code: "const myDiv = <div>Hello there friend!</div>;",
            parserOptions: {
                ecmaVersion: 6,
                ecmaFeatures: {
                    jsx: true
                }
            },
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        }
    ]
});
