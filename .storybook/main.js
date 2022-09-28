module.exports = {
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    babelModeV7: true,
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs
    config.resolve.fallback = {
      crypto: false,
      fs: false,
      path: false,
      'react-router': false,
    };
    return config;
  },
};
