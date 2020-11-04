const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    "output": {
      "filename": "js/app.js"
    },
    "module": {
      "rules": [
        {
          "use": {
            "loader": "babel-loader",
            "options": {
              "presets": [
                "babel-preset-env",
                "babel-preset-react"
              ]
            }
          },
          "exclude": /node_modules/,
          "test": /\.js$/
          
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        }
      ]
    },
    "entry": {
      index: ['babel-polyfill', './js/index.js']
    },
    "plugins": [
      new CopyPlugin({
        patterns: [
          { from: 'index.html', to: '' },
          { from: 'css', to: 'css' },
        ],
      }),
    ],
    "devServer": {
      contentBase: path.join(__dirname, 'dist'),
      port: 9000
    }
  };