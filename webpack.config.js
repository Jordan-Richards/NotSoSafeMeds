const path = require('path');
const { fileURLToPath } = require('url');

const __filename = fileURLToPath(import.meta.url);

module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
    },
  },
  // other configurations
};
