module.exports = {

  /* --- ECMAScript code validity ----------------------------------------------------------------------------------- */
  "array-callback-return": "error",
  "constructor-super": "error",
  "getter-return": "error",
  "no-class-assign": "error",
  "no-const-assign": "error",
  "no-constructor-return": "error",
  "no-import-assign": "error",
  "no-invalid-regexp": "error",
  "no-new-native-nonconstructor": "error",
  "no-new-symbol": "error",
  "no-obj-calls": "error",
  "no-promise-executor-return": "error",
  "no-setter-return": "error",
  "no-this-before-super": "error",
  "no-undef": "error",
  "no-unreachable": "error",
  "no-delete-var": "error",


  /* --- Algorithmic errors preventing ------------------------------------------------------------------------------ */
  "for-direction": "error",
  "no-async-promise-executor": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-dupe-args": "error",
  "no-dupe-class-members": "error",
  "no-dupe-else-if": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty-character-class": "error",
  "no-empty-pattern": "error",
  "no-ex-assign": "error",
  "no-fallthrough": "error",
  "no-func-assign": "error",
  "no-inner-declarations": "error",
  "no-irregular-whitespace": [
    "error",
    {
      skipStrings: true,
      skipTemplates: true,
      skipComments: true,
      skipRegExps: true
    }
  ],
  "no-loss-of-precision": "error",
  "no-misleading-character-class": "error",
  "no-prototype-builtins": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unsafe-optional-chaining": "error",
  "no-use-before-define": [ "error", { functions: false } ],
  "require-atomic-updates": "error",
  "use-isnan": "error",
  "valid-typeof": "error",
  "guard-for-in": "error",
  "no-case-declarations": "error",
  "no-global-assign": "error",
  "no-loop-func": "error",
  "no-shadow": "error",
  "no-shadow-restricted-names": "error",
  "operator-assignment": [ "error", "never" ],
  "prefer-object-has-own": [ "error" ],
  "radix": "error",
  "require-unicode-regexp": "error",
  "yoda": "error",


  /* --- Must not be in production building ------------------------------------------------------------------------- */
  "no-debugger": "error",
  "no-console": "error",


  /* --- Prevention of the confusing / Stupid errors ---------------------------------------------------------------- */
  "no-constant-binary-expression": "error",
  "no-self-assign": "error",
  "no-self-compare": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "error",
  "no-unexpected-multiline": "error",
  "class-methods-use-this": "warn",
  "consistent-return": "warn",
  "default-case-last": "error",
  "default-param-last": "error",
  "func-names": [ "error", "always" ],
  "func-style": [ "error", "declaration", { allowArrowFunctions: true } ],
  "new-cap": [ "error", { capIsNew: false } ],
  "no-array-constructor": "error",
  "no-bitwise": "error",
  "@stylistic/no-confusing-arrow": [ "error", { allowParens: true } ],
  "no-div-regex": "error",
  "no-extend-native": "error",
  "no-extra-boolean-cast": "error",
  "no-implicit-coercion": "error",
  "no-implicit-globals": "error",
  "no-invalid-this": "error",
  "no-mixed-operators": "error",
  "no-multi-assign": "error",
  "no-negated-condition": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-param-reassign": "error",
  "no-regex-spaces": "error",
  "no-return-assign": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-undefined": "error",
  "no-underscore-dangle": "warn",
  "no-unused-expressions": "error",
  "no-useless-escape": "error",
  "no-useless-rename": "error",
  "no-useless-return": "error",
  "no-void": "error",
  "prefer-numeric-literals": "error",
  "prefer-promise-reject-errors": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "require-await": "error",
  "require-yield": "error",
  "symbol-description": "error",


  /* --- Elimination of useless code -------------------------------------------------------------------------------- */
  "no-useless-backreference": "error",
  "arrow-body-style": [ "warn", "as-needed" ],
  "no-else-return": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "@stylistic/no-extra-semi": "error",
  "no-new-wrappers": "error",
  "no-object-constructor": "error",
  "no-undef-init": "error",
  "no-unneeded-ternary": "error",
  "no-useless-call": "error",
  "no-useless-catch": "error",
  "no-useless-computed-key": "error",
  "no-useless-concat": "error",
  "no-useless-constructor": "error",
  "object-shorthand": [
    "warn",
    "always",
    {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }
  ],
  "@stylistic/no-extra-parens": [
    "warn",
    "all",
    {
      "nestedBinaryExpressions": false,
      "enforceForArrowConditionals": false
    }
  ],


  /* --- Unification of equivalent writings ------------------------------------------------------------------------- */
  "curly": "error",
  "dot-notation": "warn",
  "no-floating-decimal": "error",
  "one-var": [ "error", "never" ],
  "one-var-declaration-per-line": [ "error", "initializations" ],
  "prefer-object-spread": "error",
  "prefer-regex-literals": [ "error", { disallowRedundantWrapping: true } ],
  "prefer-template": "error",
  "quote-props": [ "error", "as-needed" ],
  "@stylistic/array-bracket-newline": [ "warn", "consistent" ],
  "@stylistic/array-bracket-spacing": [ "warn", "always" ],
  "@stylistic/array-element-newline": [ "warn", "consistent" ],
  "@stylistic/arrow-parens": [ "warn", "always" ],
  "@stylistic/arrow-spacing": [ "warn", { "before": true, "after": true } ],
  "@stylistic/block-spacing": [ "warn", "always" ],
  "@stylistic/brace-style": [ "warn", "1tbs", { allowSingleLine: true } ],
  "@stylistic/comma-dangle": [ "warn", "never" ],
  "@stylistic/comma-spacing": [ "warn", { "before": false, "after": true } ],
  "@stylistic/comma-style": [　"error",　"last"　],
  "@stylistic/computed-property-spacing": [　"warn",　"never"　],
  "@stylistic/dot-location": [ "warn", "object" ],
  "@stylistic/function-call-argument-newline": [ "warn", "consistent" ],
  "@stylistic/function-call-spacing": "warn",
  "@stylistic/function-paren-newline": [ "warn", "consistent" ],
  "@stylistic/generator-star-spacing": [ "warn", { "before": true, "after": false } ],
  "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
  "@stylistic/key-spacing": [
    "warn",
    {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict"
    }
  ],
  "@stylistic/keyword-spacing": [
    "warn",
    {
      "before": true,
      "after": true
    }
  ],

  "logical-assignment-operators": [ "warn", "never" ],
  "@stylistic/max-statements-per-line": [ "warn", { max: 2 } ],
  "@stylistic/new-parens": "error",
  "@stylistic/newline-per-chained-call": [ "warn", { ignoreChainWithDepth: 2 } ],
  "no-whitespace-before-property": "warn",
  "object-curly-newline": [ "warn", { consistent: true } ],
  "object-curly-spacing": [ "warn", "always" ],
  "object-property-newline": [ "warn", { allowAllPropertiesOnSameLine: true } ],
  "quotes": [ "error", "double", { avoidEscape: true } ],
  "rest-spread-spacing": [ "warn", "never" ],
  "semi": "error",
  "semi-spacing": "warn",
  "semi-style": "warn",
  "space-before-blocks": "warn",
  "space-before-function-paren": [ "warn", { "anonymous": "always", "named": "never", "asyncArrow": "always" } ],
  "space-in-parens": [ "warn", "never" ],
  "space-infix-ops": "warn",
  "space-unary-ops": "warn",
  "switch-colon-spacing": "warn",
  "template-curly-spacing": [ "warn", "always" ],
  "template-tag-spacing": [ "warn", "never" ],
  "wrap-iife": [ "error", "inside" ],
  "yield-star-spacing": "warn",


  /* --- Neatness --------------------------------------------------------------------------------------------------- */
  "@stylistic/lines-around-comment": [
    "warn",
    { "beforeBlockComment": true }
  ],

  "@stylistic/lines-between-class-members": [
    "warn",
    {
      enforce: [
        { blankLine: "always", prev: "field", next: "method" },
        { blankLine: "always", prev: "method", next: "method" },
        { blankLine: "always", prev: "method", next: "field" }
      ]
    }
  ],

  "@stylistic/max-len": [
    "warn",
    {
      code: 130,
      ignoreUrls: true,
      ignorePattern: "^\\s{4}\"[@~]?[\\w/:.-]+\";\\s*$"
    }
  ],

  "no-duplicate-imports": "error",
  "no-unused-private-class-members": "error",
  "no-unused-vars": [
    "error",
    { destructuredArrayIgnorePattern: "^_" }
  ],
  "capitalized-comments": "warn",
  "grouped-accessor-pairs": [ "warn", "getBeforeSet" ],
  "id-denylist": [
    "error",
    "args",
    "argv",
    "array",
    "brsr",
    "data",
    "list",
    "prop",
    "props",
    "string"
  ],
  "id-length": [
    "error",
    {
      min: 4,
      properties: "never",
      /* Case is matters */
      exceptions: [
        "add",
        "id",
        "ID",
        "key",
        "Pug",
        "pug",
        "Vue",
        "vue"
      ]
    }
  ],
  "max-classes-per-file": "error",
  "max-depth": [ "warn", 3 ],
  "max-nested-callbacks": [ "error", 2 ],
  "max-params": [ "error", 3 ],
  "multiline-comment-style": [ "warn", "bare-block" ],
  "no-empty": "error",
  "no-empty-function": "error",
  "no-empty-static-block": "warn",
  "no-inline-comments": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-magic-numbers": [
    "error",
    {
      "enforceConst": true,
      "ignore": [
        -1,
        0,
        0.5,
        1,
        2,
        10,
        100
      ]
    }
  ],
  "no-nested-ternary": "error",
  "no-warning-comments": "warn",
  "prefer-named-capture-group": "error",
  "spaced-comment": [ "warn", "always", { "block": { "markers": [ "!" ], "balanced": true } } ],
  "no-mixed-spaces-and-tabs": "warn",
  "no-multi-spaces": "warn",
  "no-multiple-empty-lines": [
    "warn",
    {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }
  ],


  /* --- Preventing of deprecated or not recommended functionality -------------------------------------------------- */
  "eqeqeq": [ "error", "always" ],
  "no-alert": "error",
  "no-caller": "error",
  "no-eq-null": "error",
  "no-eval": "error",
  "no-implied-eval": "error",
  "no-iterator": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-proto": "error",
  "no-script-url": "error",
  "no-var": "error",
  "no-with": "error",
  "strict": "error",


  /* --- Other ------------------------------------------------------------------------------------------------------ */
  "no-await-in-loop": "error",
  "prefer-arrow-callback": "warn",
  "prefer-const": "error",
  "@stylistic/eol-last": [　"warn"　],
  "unicode-bom": "error"


  /* --- Experimental ----------------------------------------------------------------------------------------------- */
}
