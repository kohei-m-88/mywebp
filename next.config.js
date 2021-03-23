const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  experimental: {
    modern: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: ['images.prismic.io'],
  },

  prismic: {
    // you can provide your link resolver function directly
    linkResolver: function(doc) {
      return '/'
    }
  }
})
