var BeepPlugin = require('webpack-beep-plugin');

module.exports = {
    entry: {
        'browser-jasmine-testing': './src/browser-jasmine-testing.js',
        'lib/ReactHelpers': './helpers/ReactHelpers.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [/src/, /helpers/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: [/lib\/jasmine.*\.js/, /source-map-support/], loader: 'raw-loader'},
            { test: /\.css$/,loader: 'style-loader!css-loader'},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
        }
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new BeepPlugin()
    ]
};
