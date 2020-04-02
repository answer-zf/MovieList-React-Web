const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 插件：每次发布，删除之前发布的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// css 抽离 webpack4中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    // 配置入口节点
    app: path.join(__dirname, './src/main.js'),
    vendors: ['jquery'] // 把需要抽离的第三方包名称，放到该数组中
  },
  output: { path: path.join(__dirname, './dist'), filename: 'js/bundle.js' },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          //打包第三方类库
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2,
          filename: 'js/vendors.js'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(png|gif|jpg|bmp)$/,
        use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' // 优化扩展名及图片存储位置
      }
    ]
  }
}
