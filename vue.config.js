const path = require('path')

module.exports = {
  publicPath: '',
  configureWebpack: {
    entry: {
      app: path.join(__dirname, 'src/demo', 'main.js')
    }
  }
}
