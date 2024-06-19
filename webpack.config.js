import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
    },
  },
  // other configurations
};
