const { override } = require("customize-cra");

module.exports = override((config) => {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    process: require.resolve("process"),
  };

  return config;
});
