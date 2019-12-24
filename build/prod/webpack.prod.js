const merge = require('webpack-merge')
const common = require('./webpack.prod.common.js')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge.smart(common, {
  plugins: [
    new CompressionPlugin({
      filename: (info) => {
        return info.path
      },
      minRatio: 1000
    })
  ]
})
