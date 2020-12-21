const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
 entry: './src/index.js',
 externals: [nodeExternals(), 'react'],
 output: {
   filename: 'index.js',
   path: path.resolve(__dirname, 'lib'),
   library: '',
   libraryTarget: 'commonjs'
 },
 plugins: [
   new MiniCssExtractPlugin({
     filename: '[name].css',
     chunkFilename: '[id].css',
     ignoreOrder: false
   }),
   new CleanWebpackPlugin()
 ],
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: ['babel-loader']
     },
     {
       test: /\.(css|pcss)$/i,
       use: [
         {
           loader: MiniCssExtractPlugin.loader,
           options: {}
         },
         {
           loader: 'css-loader',
           options: {
             importLoaders: 1,
             sourceMap: true,
             modules: {
               localIdentName: '[path]__[name]__[local]--[hash:base64:5]'
             }
           }
         },
         {
           loader: 'postcss-loader',
           options: {
             sourceMap: 'inline',
             config: {
               path: path.resolve(__dirname, './config/postcss.config.js')
             }
           }
         }
       ],
       include: path.resolve(__dirname, './src')
     },
     {
       test: /\.(png|jpe?g|gif)$/i,
       use: [
         {
           loader: 'file-loader'
         }
       ]
     },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: 'file-loader'
     }
   ]
 }
}