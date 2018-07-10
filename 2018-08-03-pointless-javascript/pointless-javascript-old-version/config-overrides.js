module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.module.rules = [
    {
      test: /\.txt$/,
      use: 'raw-loader'
    },
    ...config.module.rules]
  console.log(config.module.rules);
  return config;
}
