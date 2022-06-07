// 2 equal ways:

// Creating i18n.js (exports with module)

module.exports = {
    locales: ['en', 'it', 'de', 'fr'], // Array with the languages that you want to use
    defaultLocale: 'en', // Default language of your website
    pages: {
      '*': ['common'], // Namespaces that you want to import per page
      '/': ['home'],
      '/success': ['success'],
      '/privacy-policy': ['policy']
    },
  };


// Creating i18n.json
// {
//   "locales": ["en", "it", "de", "fr"], // Array with the languages that you want to use
//   defaultLocale: "en", // Default language of your website
//   pages: {
//     "*": ["common"] // Namespaces that you want to import per page
//   }
// };