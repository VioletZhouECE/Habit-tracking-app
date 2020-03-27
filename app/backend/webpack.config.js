var path = require("path")
var nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        path: path.resolve(__dirname + "/app.js")
    },
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + "/public")
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react", "@babel/preset-env",]
            },
          }
        }
      ]
    },

    externals: [nodeExternals()],
    mode: 'development'
  };