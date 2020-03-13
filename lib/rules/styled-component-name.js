/**
 * @fileoverview Checks Styled Component Names
 * @author Murray Jack
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const html5 = import("html5.json")

const Html5Elements = [
    "Button",
    "Header"
]

const testHtmlElement = (name) => {
	return Html5Elements.filter(e => e === name).length > 0  
}

module.exports = {
    meta: {
        docs: {
            description: "Checks Styled Component Names",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            JSXOpeningElement: function (node) {

                const nodeType = node.name.name

                // mut be an upper case thing
                const firstChar = nodeType[0]

                if (firstChar === firstChar.toUpperCase()) {
                    const parts = nodeType.split(/(?=[A-Z])/);

                    // the last bit must be a HTML5 element
                    const lastBit = parts[parts.length - 1]
                    const result = testHtmlElement(lastBit)

                    if (!testHtmlElement(lastBit)) {
                        context.report(node, "The last portion styled component must be a HTML5 Element");
                    }

                    // the first bit cannot be a HTML5Element
                    if (parts.length > 1) {
                        if (testHtmlElement(parts[0])) {
                            context.report(node, "The first portion of the styled component cannot be an HTML5 Element");
                        }

                    }
                }
            }

        };
    }
};
