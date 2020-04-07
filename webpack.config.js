const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: { path: path.join(__dirname, './dist'), filename: 'bundle.js' },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]-[local]-[hash:5]' },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|gif|jpg|bmp)$/, use: 'url-loader?limit=5000' },
    ],
  },
}
