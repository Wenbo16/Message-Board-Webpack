var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    // entry: [
    //   'webpack/hot/dev-server',
    //   'webpack-dev-server/client?http://localhost:8080',
    //   path.resolve(__dirname, 'app/main.js')
    // ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

     // module: {
     //    loaders: [{
     //      test: /\.js?$/,
     //      exclude: /node_modules/,
     //      loader: 'babel-loader'
     //    }, {
     //      test: /\.css?$/,
     //      loader: "style-loader!css-loader"
     //    }]
     //  }
};