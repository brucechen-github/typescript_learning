const HtmlWebpackPlugin = require('html-webpack-plugin')
 
module.exports = {
	    entry: './src/index.ts',
	    output: {
		            filename: 'app.js'
		        },
	    resolve: {
		            extensions: ['.js', '.jsx', '.ts', '.tsx']
		        },
	    module: {
		            rules: [
				                {
							                test: /\.tsx?$/,
							                use: [{
										                    loader: 'ts-loader'
										                }],
							                exclude: /node_modules/
							            }
				            ]
		        },
	    plugins: [
		            new HtmlWebpackPlugin({
				                template: './src/tpl/index.html'
				            })
		        ],
	    optimization: {
		            splitChunks: {
				                chunks: 'all'
				            }
		        }
}
