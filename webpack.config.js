const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpack = require('extract-text-webpack-plugin')    // 抽离css样式

module.exports = {
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',  // 追踪js中错误和警告
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".js", ".vue"],   // 自动解析确定的扩展
    alias: {
      root: join(__dirname, 'node_modules')
    }    // 相当于路径别名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpack.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '测试'
    }), // 生成html
    new webpack.HotModuleReplacementPlugin()   // 热加载
  ],
  devServer: {
    contentBase: './dist',
    hot: true,   // 热加载
    host: '127.0.0.1'
  }
}