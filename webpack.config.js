const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  mode: 'development',
  devServer: {
    port: 3002,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'vanillaButton',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'vanillaButton' },
      exposes: { './JsButton': './src/index.js' },
      shared: {
        ...deps,
        'windowed-observable': {
          singleton: true,
          strictVersion: true,
          eager: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
