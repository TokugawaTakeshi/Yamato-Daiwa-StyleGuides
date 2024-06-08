const ECMA_ScriptBasicRules = require("./../ECMA_ScriptBasicRules");


module.exports = {

  "files": [ "*.ts", "*.tsx" ],

  "rules": {

    /* ━━━ Type Safety ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
    "@typescript-eslint/consistent-type-assertions": [ "error", { "assertionStyle": "never" } ],

    "@typescript-eslint/no-base-to-string": "error",

    "@typescript-eslint/no-explicit-any": "error",

    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }
    ],

    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    "@typescript-eslint/no-non-null-assertion": "error",

    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    "@typescript-eslint/no-unsafe-argument": "error",

    "@typescript-eslint/no-unsafe-call": "error",

    "@typescript-eslint/no-unsafe-declaration-merging": "error",

    "@typescript-eslint/no-unsafe-member-access": "error",

    "@typescript-eslint/no-unsafe-unary-minus": "error",

    "@typescript-eslint/prefer-return-this-type": "warn",

    "@typescript-eslint/strict-boolean-expressions": "error",

    "@typescript-eslint/typedef": [
      "error",
      {
        "arrayDestructuring": true,
        "arrowParameter": true,
        "memberVariableDeclaration": true,
        "objectDestructuring": true,
        "parameter": true,
        "propertyDeclaration": true,
        "variableDeclaration": true
      }
    ],

    "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

    /* --- Algorithmic errors preventing ---------------------------------------------------------------------------- */
    "@typescript-eslint/no-array-delete": "error",

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",

    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": [ "error", { ignoreDeclarationMerge: true } ],

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      ...ECMA_ScriptBasicRules["no-use-before-define"].slice(0, 1),
      {
        ...ECMA_ScriptBasicRules["no-use-before-define"][1],
        ...{
          "typedefs": false
        }
      }
    ],

    "@typescript-eslint/unbound-method": [ "error", { "ignoreStatic": true } ],


    /* --- Prevention of the confusing / Stupid errors -------------------------------------------------------------- */
    "@typescript-eslint/await-thenable": "error",

    "class-methods-use-this": "off",
    "@typescript-eslint/class-methods-use-this": [
      "error",
      {
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: true
      }
    ],

    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    "@typescript-eslint/no-for-in-array": "error",

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    "@typescript-eslint/no-array-constructor": "error",

    "@typescript-eslint/no-confusing-void-expression": "error",

    "@typescript-eslint/no-duplicate-enum-values": "error",

    "@typescript-eslint/no-duplicate-type-constituents": "error",

    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",

    "@typescript-eslint/no-invalid-void-type": "error",

    "@typescript-eslint/no-meaningless-void-operator": "error",

    "@typescript-eslint/no-misused-new": "error",

    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": { "arguments": false } /* See https://stackoverflow.com/q/78559257/4818123 */
      }
    ],

    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    "@typescript-eslint/no-redundant-type-constituents": "error",

    "@typescript-eslint/no-this-alias": "error",

    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",

    "@typescript-eslint/no-unnecessary-condition": "error",

    "@typescript-eslint/no-unnecessary-type-arguments": "error",

    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    "@typescript-eslint/no-unsafe-enum-comparison": "error",

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",

    "@typescript-eslint/prefer-literal-enum-member": "error",

    "@typescript-eslint/prefer-readonly": "error",

    "@typescript-eslint/require-array-sort-compare": "error",

    "require-await": "off",
    "@typescript-eslint/require-await": "error",

    "@typescript-eslint/restrict-plus-operands": "error",

    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        "allowNumber": true,
        "allowBoolean": true,
        "allowNullish": true
      }
    ],

    "@typescript-eslint/switch-exhaustiveness-check": "error",


    /* --- Elimination of useless code ------------------------------------------------------------------------------- */
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "error",

    "@typescript-eslint/no-extra-non-null-assertion": "error",

    "@typescript-eslint/no-unnecessary-qualifier": "error",

    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    "@typescript-eslint/no-unnecessary-template-expression": "warn",

    "@typescript-eslint/return-await": "error",


    /* --- Neatness ------------------------------------------------------------------------------------------------- */
    "@typescript-eslint/adjacent-overload-signatures": "warn",

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "warn",

    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "default": [

          "signature",

          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "static-initialization",

          "public-abstract-field",
          "protected-abstract-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-static-method",

          "constructor",

          "public-abstract-method",
          "protected-abstract-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          "protected-static-method",
          "private-static-method"
        ]
      }
    ],

    "no-duplicate-imports": "off",
    "import/no-duplicates": "error",

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",

    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      ...ECMA_ScriptBasicRules["no-magic-numbers"].slice(0, 1),
      {
        ...ECMA_ScriptBasicRules["no-magic-numbers"][1],
        ...{
          "ignoreReadonlyClassProperties": true,
          "ignoreEnums": true,
        }
      }
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ECMA_ScriptBasicRules["no-unused-vars"],


    /* --- Unification of equivalent writings ----------------------------------------------------------------------- */
    "@typescript-eslint/array-type": [ "warn", { default: "generic" } ],

    "@typescript-eslint/class-literal-property-style": "warn",

    "@typescript-eslint/consistent-generic-constructors": [ "error", "type-annotation" ],

    "@typescript-eslint/consistent-indexed-object-style": [ "warn", "index-signature" ],

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",

    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ],

    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        allowStaticOnly: true,
        allowWithDecorator: true
      }
    ],

    "@typescript-eslint/no-var-requires": "error",

    "@typescript-eslint/prefer-function-type": "warn",

    "@typescript-eslint/prefer-includes": "warn",

    "@typescript-eslint/prefer-namespace-keyword": "error",

    "@typescript-eslint/prefer-nullish-coalescing": "warn",

    "@typescript-eslint/prefer-optional-chain": "warn",

    "@typescript-eslint/prefer-reduce-type-parameter": "warn",

    "@typescript-eslint/prefer-regexp-exec": "warn",

    "@typescript-eslint/prefer-string-starts-ends-with": "warn",

    "@typescript-eslint/promise-function-async": "error",

    "@stylistic/type-annotation-spacing": "warn",
    "@stylistic/type-generic-spacing": "warn",
    "@stylistic/type-named-tuple-spacing": "warn",

    "@typescript-eslint/unified-signatures": "warn",



    /* --- Fast-and-dirty code prevention --------------------------------------------------------------------------- */
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": { descriptionFormat: "^: TS\\d+\\s" },
        "ts-ignore": { descriptionFormat: "^: TS\\d+\\s" },
        "ts-nocheck": { descriptionFormat: "^: TS\\d+\\s" },
        minimumDescriptionLength: 20
      }
    ],

    "@typescript-eslint/ban-types": "error",

    "@typescript-eslint/explicit-member-accessibility": [ "error", { accessibility: "explicit" } ],

    "@typescript-eslint/no-empty-interface": "error",

    "@typescript-eslint/no-floating-promises": "error",

    "@typescript-eslint/no-useless-empty-export": "error",

    "@typescript-eslint/prefer-enum-initializers": "error",


    /* --- Preventing of deprecated or not recommended functionality ------------------------------------------------ */
    "@typescript-eslint/ban-tslint-comment": "error",

    "@typescript-eslint/method-signature-style": "error",

    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",

    "@typescript-eslint/triple-slash-reference": "error",


    /* --- Other ---------------------------------------------------------------------------------------------------- */
    "@typescript-eslint/consistent-type-exports": [ "error", { fixMixedExportsWithInlineTypeSpecifier: true } ],

    "@typescript-eslint/consistent-type-imports": [ "error" ],

    "@typescript-eslint/no-dynamic-delete": "error",

    "@typescript-eslint/no-require-imports": "error",

    "@typescript-eslint/prefer-for-of": "error",


    /* --- Experimental --------------------------------------------------------------------------------------------- */
    // "@typescript-eslint/prefer-readonly-parameter-types": "warn"

  }
};
