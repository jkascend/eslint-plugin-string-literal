/**
 * @fileoverview Identifies JSX attributes that have string literal values.
 * @author Justin Kambic
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Identifies all targeted JSX attributes with string literal values.",
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
        if (context.options &&
            context.options.length > 0 &&
            Array.isArray(context.options[0].targetJsxAttributes)) {
            jsxAttributes = context.options[0].targetJsxAttributes
        }

        return {
            "JSXAttribute": node => {
                if (node.value.type === "Literal" &&
                    jsxAttributes.indexOf(node.name.name) !== -1) {

                    context.report(node, "Target JSX literal identified.");
                }
            }
        };
    }
};
