const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = env => {
	env = env || {};
	return {
		entry: ['babel-polyfill',"isomorphic-fetch",'./src/index.js'],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: 'imageapi.bundle.js',
			sourceMapFilename: 'imageapi.bundle.map.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,   //rule to apply babel loader to react components 
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.html$/,  //rule for html-webpack-plugin 
					use: [
						{
							loader: "html-loader"
						}
					]
				},{
					test: /\.css$/,              //rules for loading css in components 
  					loader: 'style-loader!css-loader'
				},
				{
					test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
					loader: 'url-loader'
				}
			]
		}, 
		devtool: "#source-map",
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html'	
			}) 
		],
		mode: "development",
		devServer: {
			contentBase: "./dist", 
			historyApiFallback: true 
		}
	}
}
