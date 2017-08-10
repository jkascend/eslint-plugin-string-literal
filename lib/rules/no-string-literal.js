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
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Literal": (node) => {
                if (typeof node.value === "string"
                    && node.parent.type !== "JSXAttribute"
                    && node.parent.type !== "ImportDeclaration") {
                    context.report(node, "Identified string literal.");
                }
            }
        };
    }
};
