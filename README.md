

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


```javascript
new ExtractTextWebpack({
      filename: '[name].css',     // 这里有点问题，加载路径之后，字体文件载入错误？
      allChunks: true
    })

    // 暂未解决问题
```

