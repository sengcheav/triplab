var config = {
   entry: {trip :'./maintrip.js', main:'./main.js'}, // entry point

   output: {
      path:'./',
      filename: '[name].index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
