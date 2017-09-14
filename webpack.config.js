const path = require('path')
const webpack = require('webpack')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpack = require('extract-text-webpack-plugin')    // 抽离css样式
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

const entries = {}
const chunks = []
glob.sync('./src/pages/**/index.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/index.js')[0]
  entries[chunk] = path
  chunks.push(chunk)
})

console.log(entries)
console.log(chunks)

const config = {
  entry: entries,
  devtool: '#eval-source-map',  // 追踪js中错误和警告
  output: {
    filename: 'assets/js/[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".js", ".vue"],   // 自动解析确定的扩展
    alias: {
      root: __dirname + '/node_modules'
    }    // 相当于路径别名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextWebpack.extract({
              use: 'css-loader',
              fallback: 'style-loader'
            }),
            postcss: ExtractTextWebpack.extract({
              use: ['css-loader', 'postcss-loader'],
              fallback: 'style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpack.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CommonsChunkPlugin({
      name: 'vendors',
      filename: 'assets/js/vendors.js',
      chunks: chunks,
      minChunks: chunks.length
    }),
    new webpack.HotModuleReplacementPlugin(),   // 热加载
    new ExtractTextWebpack({
      filename: 'assets/css/[name].css',
      allChunks: true
    })
  ],
  devServer: {
    hot: true,   // 热加载
    host: '127.0.0.1',
    port: 8000
  }
}

glob.sync('./src/pages/**/*.html').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/index.html')[0]
  const filename = chunk + '.html'
  const htmlConf = {
    filename: filename,
    template: path,
    inject: 'body',
    hash: process.env.NODE_ENV === 'production',
    chunks: ['vendors', chunk]
  }
  config.plugins.push(new HtmlWebpackPlugin(htmlConf))
})

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}