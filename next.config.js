module.exports = {
  images: {
    domains: ["www.google.co.uk"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
