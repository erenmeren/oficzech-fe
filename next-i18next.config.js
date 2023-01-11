const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
  },
  fallbackLng: {
    default: ["tr"],
  },
  react: { useSuspense: false },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/locales",
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
