const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	//front end entry
	entry: "./src/components/index.js",
	output: {
		//minified output path
    	path: path.resolve('/dist'),
    	filename: 'main.js'
 	 },
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
	        {
		        test: /\.html$/,
		        use: 'html-loader'
	        },
	        {
		        test: /\.css$/,
		        exclude: /node_modules/,
		        use: ['style-loader', 'css-loader'] 
	      	}
		]
	},
	devServer:{
		proxy: {
			'/api': 'http://localhost:3000'
		}
	},
	plugins: [
	    new HtmlWebPackPlugin({
	    	template: path.resolve(__dirname, 'src/public', 'index.html'),
	    	filename: './index.html'
	    })
  ]
};