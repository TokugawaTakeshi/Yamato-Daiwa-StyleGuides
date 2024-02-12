module.exports = {

  files: [
    "*.jsx",
    "*.tsx"
  ],

  "parserOptions": {
    ecmaFeatures: { jsx: true }
  },

  rules: {

    "@stylistic/jsx-child-element-spacing": [ "error" ],
    "@stylistic/jsx-closing-bracket-location": [ "warn" ],
    "@stylistic/jsx-closing-tag-location": [ "warn" ],
    "@stylistic/jsx-curly-brace-presence": [ "warn" ],
    "@stylistic/jsx-curly-newline": [ "warn" ],
    "@stylistic/jsx-curly-spacing": [ "warn", { when: "always" } ],
    "@stylistic/jsx-equals-spacing": [ "warn" ],
    "@stylistic/jsx-first-prop-new-line": [ "warn", "multiline" ],
    "@stylistic/jsx-indent": [ "warn", 2, ],
    "@stylistic/jsx-indent-props": [ "warn", 2 ],
    "@stylistic/jsx-max-props-per-line": [ "warn" ],
    "@stylistic/jsx-one-expression-per-line": [ "warn" ],
    "@stylistic/jsx-props-no-multi-spaces": [ "warn" ],
    "@stylistic/jsx-quotes": [ "error" ],
    "@stylistic/jsx-self-closing-comp": [ "error" ],
    "@stylistic/jsx-tag-spacing": [ "warn" ],
    "@stylistic/jsx-wrap-multilines": [ "warn" ],

    "react/button-has-type": [ "error" ]

  }

};
