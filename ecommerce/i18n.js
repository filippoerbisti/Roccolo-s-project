// Creating i18n.js (exports with module)

const i18nConfig = {
    locales: ['__default', 'en', 'it', 'de', 'fr'], // Array with the languages that you want to use
    defaultLocale: '__default', // Default language of your website
    localesToIgnore: ['__default'],
    pages: {
      '*': ['common'], // Namespaces that you want to import per page
      '/': ['home'],
      '/success': ['success'],
      '/privacy-policy': ['policy'],
      'rgx:^/event': ['event'],
    },
  };

  module.exports = i18nConfig;