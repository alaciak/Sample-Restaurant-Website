//Konfiguracja Webpack
const ExtractTextPlugin = require("extract-text-webpack-plugin");
require("babel-polyfill");

module.exports = {
  entry : ['babel-polyfill','whatwg-fetch', './js/components/App.jsx'],
    output : {
        path: __dirname+'/',
        filename: 'js/out.js'
    },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: ['css-loader', 'resolve-url-loader', 'sass-loader']
             })
      },
      {
            test: /\.jpg$/,
            loader: 'file-loader',
            query: {
                name: '../img/[name].[ext]'
            }
        }
    ],
  },
  plugins: [
    new ExtractTextPlugin("./css/styles.css")
  ]
};
