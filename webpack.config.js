var BeepPlugin = require('webpack-beep-plugin');

module.exports = {
    entry: './helpers/ReactHelpers.js',
    output: {
        filename: 'lib/ReactHelpers.js',
        libraryTarget: 'umd'
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
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react/lib/ReactTestUtils.js': 'react/lib/ReactTestUtils.js',

        jquery: true,
        lodash: true
    },
    resolve: {
        alias: {
        }
    },
    node: {
//        global: false,
        fs: "empty"
    },
    plugins: [
        new BeepPlugin()
    ]
};
