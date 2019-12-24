const merge = require('webpack-merge')
const common = require('../webpack.common.js')
const path = require('path')
const {
  HashedModuleIdsPlugin,
  DefinePlugin
} = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const devMode = process.env.NODE_ENV !== 'production'

let plugins = [
  new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `./index.html`,
    inlineSource: '.css$'
  }),
  new HtmlWebpackInlineSourcePlugin(),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : 'static/css/[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : 'static/css/[id].[hash].css'
  }),
  new HashedModuleIdsPlugin(),
  new CleanWebpackPlugin()
]

const optimization = {
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name (module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm.${packageName.replace('@', '')}`
        }
      }
    }
  },
  minimizer: [
    new UglifyJsPlugin(),
    new OptimizeCSSAssetsPlugin({})
  ]
}

module.exports = merge.smart({
  mode: 'production',
  devtool: 'source-map',
  watch: false,
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    filename: 'js/[name]-[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: '/'
  },
  optimization,
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader
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
            spriteFilename: svgPath => 'static/img/sprite-[hash].svg'
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
          name: 'static/assets/[name]-[hash].[ext]'
        }
      }]
    }]
  }
}, common, {
  plugins
})
