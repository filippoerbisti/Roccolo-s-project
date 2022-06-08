// Creating i18n.js (exports with module)

module.exports = {
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