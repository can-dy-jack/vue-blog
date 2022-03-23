// const { defineConfig } = require('@vue/cli-service')
const hljs = require('highlight.js');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/vue-blog/': '/',
  outputDir: 'docs',
  configureWebpack: {
    module: {
      rules: [{
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              highlight: function (str, lang) {
                let codeColor;
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    codeColor = hljs.highlight(str,{ language: lang }).value;
                  } catch (__) {
                    codeColor = str;
                  }
                }
                if(lang === "") lang = "plaintext"
                return `<div class="lang-head"><span>${lang}</span><i class="fas fa-copy"></i></div><div class="code-box">${codeColor}</div>`; 
              },
            },
          },
        ],
      },],
    }
  }
}