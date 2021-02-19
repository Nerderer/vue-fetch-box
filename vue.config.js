const path = require('path')

module.exports = {
  filenameHashing: false,
  outputDir: 'demo',
  publicPath: '',
  configureWebpack: {
    entry: {
      app: path.join(__dirname, 'demo-src', 'main.js')
    }
  }
}
