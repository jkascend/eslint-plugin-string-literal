/**
 * @fileoverview Identifies all string literals.
 * @author no-string-literal
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Identifies all targeted JSX attributes.",
            category: "",
            recommended: false
        },
        fixable: null,
        schema: [
            {
                properties: {
                    targetJsxAttributes: {
                        type: "array"
                    }
                }
            }
        ]
    },

    create: context => {
        let jsxAttributes = []
        if (context.options && context.options.length > 0) {
            jsxAttributes = context.options[0].targetJsxAttributes
        }

        return {
            "JSXAttribute": node => {
                if (jsxAttributes &&
                    Array.isArray(jsxAttributes) &&
                    jsxAttributes.indexOf(node.name.name) !== -1) {
                    context.report(node, "Target JSX literal identified.");
                }
            }
        };
    }
};
