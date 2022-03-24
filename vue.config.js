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
                let language = (lang && hljs.getLanguage(lang)) ? lang : 'plaintext';
                if(!lang) lang = 'plaintext';
                let codeColor = hljs.highlight(str,{ language }).value;
                if(!codeColor) codeColor = str.replace(/</g,'&#60;').replace(/>/g,'&#62;');
                return `<div class="lang-head"><span><i class="fas fa-code"></i> ${lang}</span><i class="fas fa-copy"></i></div><div class="code-box">${codeColor}</div>`; 
              },
              langPrefix: 'language-'
            },
          },
        ],
      },],
    }
  }
}