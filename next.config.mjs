import nodeExternals from 'webpack-node-externals';
import path from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [nodeExternals({
        allowlist: [/^webpack\/runtime/]
      })];
    }

    // Add support for node: URIs
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        crypto: path.resolve('node_modules/crypto-browserify')
      }
    };

    return config;
  }
};

export default nextConfig;
