const { i18n } = require('./next-i18next.config')
const nextConfig = {
    env: {
        APP_NAME: 'PayPatrol',
    },
    i18n,
    reactStrictMode: true,
}

module.exports = nextConfig