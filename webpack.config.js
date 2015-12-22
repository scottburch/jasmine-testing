var BeepPlugin = require('webpack-beep-plugin');

module.exports = {
    entry: {
        'browser-jasmine-testing': './src/browser-jasmine-testing.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
                query: {
                    presets: ['es2015']
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
    devtool: "#inline-source-map",
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
