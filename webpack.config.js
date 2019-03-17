const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
