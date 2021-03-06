const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //enable CSS optimization only in production mode
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); //instead of 'optimize-css-assets-webpack-plugin'
const TerserWebpackPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = !IS_DEV;


module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
	output : {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: './',
		assetModuleFilename: 'assets/[name][ext]',
	},

	module: {
		rules: [

			{
			test: /\.html$/,
			use: 'html-loader'
			},

			{
				test: /\.css$/,
				use: [
					{
					loader: MiniCssExtractPlugin.loader, //instead of style-loader
					options: {
						publicPath: './'
						},
					},
					'css-loader'
					],
			},

			{
				test: /\.(png|jpg|gif|svg|mp4|webp)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]'
				}
			},

			{
				test: /\.(ttf|woff|woff2|eot|otf)$/,
                type: 'asset/resource',
                generator: {
					filename: 'fonts/[name][ext]'
				}
			},
		],
	},

	plugins:
	[
		new CleanWebpackPlugin(
			{
			cleanStaleWebpackAssets: false
		}
		),

		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			minify: {
				collapseWhitespace: IS_PROD,
			}
		}),

		new MiniCssExtractPlugin(),
	],

	optimization: {
		minimizer: [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin(),
		],
	},

	devServer: {
		port: 3000,
		hot: true,
	}
}
