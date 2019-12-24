const merge = require('webpack-merge')
const common = require('./webpack.prod.common.js')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge.smart(common, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})
