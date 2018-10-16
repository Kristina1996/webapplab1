const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
	'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, '//dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
		  /**{
			test: /\.s?css/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		  },**/
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['css-loader']
					})
			},
			{
				test: /\.(png|jpg)$/i,
				use: [
				{
					loader: 'url-loader',
					options: {
					limit: 300192
					}
				}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'app.css'}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		})
	]
};