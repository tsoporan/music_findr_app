const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: ['@babel/polyfill', './src/index.tsx'],

  // Enable source maps for debugging
  devtool: 'source-map',

  devServer: {
    contentBase: './dist'
  },

  resolve: {
    // Add .ts and .tsx as resolvable extensions
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(t|j)sx?$/,
        loader: 'awesome-typescript-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css'
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
