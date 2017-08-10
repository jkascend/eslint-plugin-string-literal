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
                    && node.value !== ""
                    && node.parent.type !== "JSXAttribute") {
                    context.report(node, "Identified string literal.");
                }
            }
        };
    }
};
