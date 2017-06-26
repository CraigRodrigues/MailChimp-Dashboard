var path = require('path')
var webpack = require('webpack')
var env = process.env.NODE_ENV

let plugins = [ new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }) ]
let devtool = 'source-map'

if (env === 'production') {
  devtool = 'cheap-module-source-map'
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin(
      { beautify: false,
        mangle: true,
        compress: true,
        comments: false
      }
    ),
    new webpack.LoaderOptionsPlugin(
      {
        minimize: true,
        debug: false
      }
    )
  ])
}

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].css' } },
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: [
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: plugins
}
