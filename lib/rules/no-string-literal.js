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
            description: "Identifies all string literals.",
            category: "",
            recommended: false
        },
        fixable: null,
        schema: [ ]
    },

    create: function(context) {
        const targetHtmlElements = [
            "input",
            "li"
        ];

        const jsxAttributeShouldFlag = parent => {
            const grandparent = parent.parent;

            return targetHtmlElements.indexOf(grandparent.name.name) >= 0
                && parent.name.name === "value";
        };
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Literal": node => {
                if (typeof node.value === "string"
                    && (node.parent.type !== "JSXAttribute" || jsxAttributeShouldFlag(node.parent))
                    && node.parent.type !== "ImportDeclaration"
                    && node.value !== "") {
                    context.report(node, "Identified string literal.");
                }
            },
            "TemplateElement": node => {
                if (node.value.raw !== "") {
                    context.report(node, "Identified template with literal string.")
                }
            }
        };
    }
};
