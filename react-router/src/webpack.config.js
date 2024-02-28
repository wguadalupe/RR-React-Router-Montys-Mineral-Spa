module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
          exclude: /bootstrap.min.css$/, // Exclude source maps for Bootstrap CSS
        },
      ],
    },
  };
  