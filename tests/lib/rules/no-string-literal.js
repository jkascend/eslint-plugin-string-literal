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

var ruleTester = new RuleTester(
    {
        parserOptions: {
            ecmaVersion: 6,
            ecmaFeatures: {
                jsx: true
            }
        }
    }
);

ruleTester.run("no-string-literal", rule, {

    valid: [
        {
             code: "const x = 3;"
        },
        {
            code: "const d = () => <div></div>"
        },
        {
            code: "var foo = <div>{bar}</div>"
        },
        {
            code: 'const foo = <div className="class-name">{bar}</div>'
        },
        {
            code: 'import packageName from "a-package";',
            parserOptions: {
                sourceType: "module"
            }
        },
        {
            code: "var foo = ''"
        },
        {
            code: "const onlyFoo = `${onlyBar}`;"
        },
        {
            code: "const jsxHtmlWithIdentifier = <input value={bar} />"
        },
        {
            code: "<div>\n    {foo}\n    <div>\n\t\t{bar}\n\t</div>\n</div>"
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
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        },
        {
            code: "const foo = `some literal with ${bar}`;",
            errors: [{
                message: "Identified template with literal string.",
                type: "TemplateElement"
            }]
        },
        {
            code: 'const jsxHtmlWithLitValue = <input value="bar" />;',
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        },
        {
            code: 'const jsxLi = <li value="bar" />;',
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        },
        {
            code: "<div>\n    foo\n    <div>\n\t\t{bar}\n\t</div>\n</div>",
            errors: [{
                message: "Identified string literal.",
                type: "Literal"
            }]
        }
    ]
});
