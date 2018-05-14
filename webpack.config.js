const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    module: {
        loaders: [
          {
          test: /\.less$/,
          loader: ['style-loader','css-loader', 'less-loader']
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react'],
                plugins: ['transform-object-rest-spread']
            }
          }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
};
