var path = require('path');
var webpack = require('webpack');
var BeepPlugin = require('webpack-beep-plugin');
var _ = require('lodash');

module.exports = {
    entry: './boot.js',
    output: {
        filename: 'tests.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: path.resolve('./node_modules/babel-loader'),
                include: [/specs/,'./boot.js', /ReactHelpers/],
                query: {
                    presets: ['es2015', path.resolve('./node_modules/babel-preset-react')]
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
    devtool: '#inline-source-map',
    resolve: {
        alias: {
            RH: path.resolve('../helpers/ReactHelpers'),
            'react/lib/ReactTestUtils.js': path.resolve('./node_modules/react/lib/ReactTestUtils.js'),
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            'simple-monads': path.resolve('./node_modules/simple-monads')
        }
    },
    node: {
        fs: "empty"
    },
    plugins: [
        new BeepPlugin(),
        new webpack.ProvidePlugin({
            RH: 'RH'
        })
    ]
};
