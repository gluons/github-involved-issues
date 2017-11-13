import { resolve } from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
	entry: resolve(__dirname, './src/main.ts'),
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: false,
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};

export default config;
