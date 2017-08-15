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

        const parseOptions = item => {
            if (jsxAttributes.length === 0 &&
                item["targetJsxAttributes"]) {
                jsxAttributes = item.targetJsxAttributes;
            }
        }

        if (context.options &&
            Array.isArray(context.options)) {
            context.options.forEach(parseOptions);
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
