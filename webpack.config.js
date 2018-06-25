const mode = 'development';
const path = require('path');

const enabledSourceMap = (mode === 'development');

module.exports = {
  // mode: mode,
  entry: './webroot/js/app.js',
  output: {
    path: path.join(__dirname, 'webroot/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$|\.sass$|\.css$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ]
      }
    ]
  }
};
