const path = require('path');

module.exports = ({ config }) => {
  // default resolver for node_modules
  config.resolve.modules = [path.resolve(__dirname, '..', 'components'), 'node_modules'];

  // custom resolvers for aliases
  config.resolve.alias = {
    '@': path.resolve(__dirname, '..'),
  };

  config.resolve.fallback = { util: false, assert: false, path: require.resolve('path-browserify') };

  // (s)css modules config
  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    include: path.resolve(__dirname, '..'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  });

  config.resolve.roots = [path.resolve(__dirname, '../public')];

  return config;
};
