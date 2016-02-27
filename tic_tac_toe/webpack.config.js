module.exports = {
  entry: {
    ticTacToe: './script/GameScripts.jsx',
    hello: [
      './script/HelloReact.jsx',
      './script/helloworld.js',
      'webpack-dev-server/client?http://localhost:8080'
    ]
  },

  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'public/app-bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node-modules/,
        loader: 'babel',
        presets: ['es2015', 'react']
      }
    ]
  }
};
