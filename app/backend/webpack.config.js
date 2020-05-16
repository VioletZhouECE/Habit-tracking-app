//var nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        path: "/Users/zhouchun/time_bank_app_node/app/frontend/static/scripts/home.js"
    },
    
    output: {
        filename: 'bundle.js',
        path: "/Users/zhouchun/time_bank_app_node/app/frontend/public"
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react", ["@babel/preset-env",{
                  "targets": {
                    "esmodules": true
                  }
                }]
              ]},
          }
        }
      ]
    },

    //externals: [nodeExternals()],
    mode: 'development'
  };