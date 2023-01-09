const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en", "cz"],
    localePath: path.resolve("./public/locales"),
    // Dev mode
    reloadOnPrerender: true,
  },
};
