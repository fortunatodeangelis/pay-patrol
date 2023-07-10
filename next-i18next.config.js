const path = require('path')

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de', 'fr', 'it'],
        localeDetection: false,
    },
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    localePath: path.resolve('./public/locales'),
};