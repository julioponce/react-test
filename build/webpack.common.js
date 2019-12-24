const path = require('path')

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

let plugins = [
  new SpriteLoaderPlugin()
]

module.exports = {
  output: {
    path: path.resolve('./public'),
    chunkFilename: 'js/[name]-[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: {
        test: path.resolve(__dirname, 'node_modules')
      },
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1
        }
      },
      'postcss-loader',
      'sass-loader', {
        loader: 'sass-resources-loader',
        options: {
          resources: './src/assets/scss/main.scss'
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'css-loader'
      }]
    }]
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      'utils': path.resolve('./utils')
    },
    modules: [
      'node_modules',
      path.resolve('./src'),
      path.resolve('./')
    ],
    extensions: ['.js', '.css', '.scss', '.svg']
  },
  plugins
}
