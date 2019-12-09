const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('./package.json');

const webpackConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'docs')
    },
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]---[hash:base64:5]'
                            },
                            importLoaders: 1,
                            localsConvention: 'camelCase'
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    }
};

module.exports = {
    title: `React Table v${pkg.version}`,
    sections: [
        {
            name: 'React Table',
            components: [
                path.resolve(__dirname, `src/Table.js`),
                path.resolve(__dirname, `src/Pagination.js`)
            ],
            sections: [
                {
                    name: 'Basic',
                    sections: [
                        {
                            name: '',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/BasicTable.md'
                            )
                        },
                        {
                            name: 'Hoverable',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/Hoverable.md'
                            )
                        },
                        {
                            name: 'Scrollable',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/Scrollable.md'
                            )
                        },
                        {
                            name: 'FixedHeader',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/FixedHeader.md'
                            )
                        }
                    ]
                },
                {
                    name: 'Status',
                    sections: [
                        {
                            name: 'Loading',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/LoadingTable.md'
                            )
                        },
                        {
                            name: 'Empty',
                            sections: [
                                {
                                    name: 'Empty Status - Default',
                                    content: path.resolve(
                                        __dirname,
                                        'styleguide/examples/EmptyData.md'
                                    )
                                },
                                {
                                    name: 'Empty status - Customized',
                                    content: path.resolve(
                                        __dirname,
                                        'styleguide/examples/CustomizedEmptyData.md'
                                    )
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Theme',
                    sections: [
                        {
                            name: 'Light Theme',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/LightThemeTable.md'
                            )
                        },
                        {
                            name: 'Dark Theme',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/DarkThemeTable.md'
                            )
                        },
                        {
                            name: 'Customize Theme color',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/CustomizedThemeColorTable.md'
                            )
                        }
                    ]
                },
                {
                    name: 'Customize Cell',
                    sections: [
                        {
                            name: 'Customize Body Cell',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/CustomizedTableBodyCell.md'
                            )
                        },
                        {
                            name: 'Customize Header Cell',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/CustomizedTableHeaderCell.md'
                            )
                        }
                    ]
                },
                {
                    name: 'Sorting Table',
                    content: path.resolve(
                        __dirname,
                        'styleguide/examples/Sortable.md'
                    )
                },
                {
                    name: 'Pagination',
                    sections: [
                        {
                            name: 'Pagination table',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/Pagination.md'
                            )
                        },
                        {
                            name: 'Customize Pagination',
                            content: path.resolve(
                                __dirname,
                                'styleguide/examples/CustomizedPagination.md'
                            )
                        }
                    ]
                }
            ]
        }
    ],
    require: [
        '@babel/polyfill',
        path.resolve(__dirname, 'styleguide/setup.js'),
        path.resolve(__dirname, 'styleguide/styles.css')
    ],
    serverPort: 8080,
    exampleMode: 'expand',
    usageMode: 'expand',
    showSidebar: true,
    styleguideComponents: {
        StyleGuideRenderer: path.join(
            __dirname,
            'styleguide/components/StyleGuideRenderer.jsx'
        ),
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper.jsx')
    },
    styleguideDir: 'docs/',
    webpackConfig: webpackConfig
};
