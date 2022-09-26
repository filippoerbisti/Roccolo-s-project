// Creating i18n.js (exports with module)

const i18nConfig = {
    locales: ['default', 'en', 'it', 'de', 'fr'], // Array with the languages that you want to use
    defaultLocale: 'default', // Default language of your website
    pages: {
      '*': ['common', 'meta'], // Namespaces that you want to import per page
    },
  };

  module.exports = i18nConfig;