

```javascript
new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
      // filename: 'assets/js/vendors.js',
    chunks: chunks,
    minChunks: 2
})

// 将公共的js, css 进行单独打包
// chunks 提取哪些模块的共有部分
// 避免重复打包，使得单个页面的js, css太大
```