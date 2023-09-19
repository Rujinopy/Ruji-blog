const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    domains: ['https://scontent.fbkk8-4.fna.fbcdn.net'],
  }
})

module.exports = withNextra()
