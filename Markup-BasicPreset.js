module.exports = {

  disallowAttributeConcatenation: true,

  disallowAttributeInterpolation: true,

  disallowDuplicateAttributes: true,

  disallowLegacyMixinCall: true,

  disallowSpecificAttributes: [
    {
      caption: [ "align" ],
      img: [ "align", "border", "hspace", "vspace" ],
      table: [ "align", "bgcolor", "height" ],
      tr: [ "bgcolor" ],
      td: [ "bgcolor", "nowrap", "width" ],
      th: [ "bgcolor", "nowrap", "width" ],
      hr: [ "align", "noshade", "size", "width" ],
      div: [ "align" ],
      h1: [ "align" ],
      h2: [ "align" ],
      h3: [ "align" ],
      h4: [ "align" ],
      h5: [ "align" ],
      h6: [ "align" ],
      p: [ "align" ],
      body: [ "alink", "background", "bgcolor", "link", "text", "vlink" ],
      object: [ "border", "hspace", "vspace" ],
      br: [ "clear" ],
      ul: [ "compact" ],
      ol: [ "compact", "start" ],
      li: [ "type", "value" ],
      script: [ "language" ],
      basefont: [ "size" ],
      font: [ "size" ],
      pre: [ "width" ]
    }
  ],

  disallowSpecificTags: [
    "acronym",
    "applet",
    "basefont",
    "big",
    "blink",
    "center",
    "dir",
    "embed",
    "font",
    "frame",
    "frameset",
    "isindex",
    "noframes",
    "marquee",
    "listing",
    "menu",
    "plaintext",
    "s",
    "strike",
    "tt",
    "u",
    "xmp"
  ],

  disallowStringConcatenation: true,

  requireClassLiteralsBeforeAttributes: true,

  requireClassLiteralsBeforeIdLiterals: true,

  requireIdLiteralsBeforeAttributes: true,

  requireLineFeedAtFileEnd: true,

  requireSpaceAfterCodeOperator: true,

  requireSpecificAttributes: [
    { input: [ "type" ] },
    { img: [ "alt" ] }
  ],

  requireStrictEqualityOperators: true,

  validateAttributeQuoteMarks: "\"",

  validateAttributeSeparator: {
    separator: " ",
    multiLineSeparator: "\n  "
  },

  validateDivTags: true,

  validateExtensions: true,

  validateIndentation: 2,

  validateSelfClosingTags: true,

  validateTemplateString: [ "string", "concatenation" ]
};
