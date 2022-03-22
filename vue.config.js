// const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/nuxt/': '/',
  configureWebpack: {
    module: {
      rules: [{
        test: /.md$/,
        use: [
          { loader: 'html-loader' },
          {
            loader: '@dking/markdown-webpack-loader',
            options: {
              html: true,
              linkify: true,
              typographer: true
            }
          }
        ]
      }]
    }
  }
}
