/* config-overrides.js */
module.exports = function override(config, env) {
    config.module.rules[1].oneOf.unshift({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: /node_modules\/facelogy/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [
                require.resolve('babel-preset-react-app')
            ]
        }
    })
    return config;
  }