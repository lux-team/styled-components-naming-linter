/**
 * @fileoverview Checks Styled Component Names
 * @author styled-component-name
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/styled-component-name"),

    RuleTester = require("eslint").RuleTester;
    RuleTester.setDefaultConfig({
        parserOptions: {
            ecmaVersion: 6,
            ecmaFeatures: {
                jsx: true,
            },
        }
    });
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("styled-component-name", rule, {

    valid: [
        {
            code: '<Button></Button>'
            // give me some code that won't trigger a warning
        }
    ],

    invalid: [
        {
            code: "<ButtonButton></ButtonButton>",
            errors: [{
                message: "The first portion of the styled component cannot be an HTML5 Element",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
