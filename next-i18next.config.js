module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uz', 'ru'],
  },
  // Adding this can sometimes help with compatibility issues, especially in older versions.
  // It ensures the locale is always present in the URL path for non-default locales.
  // localePath: require('path').resolve('./public/locales') // Optional, but good practice
};
