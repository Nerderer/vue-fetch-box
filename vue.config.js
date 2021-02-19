const path = require('path')

module.exports = {
  filenameHashing: false,
  outputDir: 'demo',
  configureWebpack: {
    entry: {
      app: path.join(__dirname, 'demo-src', 'main.js')
    }
  }
}
