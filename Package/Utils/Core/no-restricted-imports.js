module.exports = {

  // https://regex101.com/r/rH3hcL/2
  buildAllowedModulesRegularExpression:

      (
        {
          allowedAtMarkAliasedImports = [],
          allowedNodeModules = []
        }
      ) =>
          [
            "^",
            ...allowedAtMarkAliasedImports.length > 0 ? [ `(?!@(${ allowedAtMarkAliasedImports.join("|") }))` ] : [],
            ...allowedNodeModules.length > 0 ? [ `(?!(${ allowedNodeModules.join("|") })$)` ] : [],
            "@{0,1}[\\w+]"
          ].
              join("")

};
