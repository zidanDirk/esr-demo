module.exports = {
    webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
      
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
  
      
      return config;
    },
};