const merge = require('webpack-merge')
const common = require('../webpack.common.js')
const path = require('path')
const {
  HotModuleReplacementPlugin,
  DefinePlugin
} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge.smart({
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:9091/'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader'
      ]
    }, {
      test: /\.svg$/,
      include: [
        path.resolve('./src/assets/icons')
      ],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: true,
            spriteFilename: svgPath => 'sprite.svg'
          }
        },
        'svgo-loader'
      ]
    }, {
      test: /.(ttf|otf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
      exclude: /assets\/icons/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: `./index.html`,
      inlineSource: '.css$'
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 9091,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  }
}, common)
