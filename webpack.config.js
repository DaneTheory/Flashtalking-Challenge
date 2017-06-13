var path = require('path');
var webpack = require('webpack');
var webpackStats = require('stats-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [ 'webpack/hot/dev-server',
             'webpack-hot-middleware/client?http://localhost:3000',
             './app/app.js'
    ],
    output: {
        path: '/',
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    postcss: [require("precss"), require("autoprefixer")],
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin("styles.css"),
      new webpack.NoErrorsPlugin()
    ],
    resolve: {
              modulesDirectories: [
                      'bower_components',
                      'node_modules'
                  ]
              },
    target: 'web'
}
