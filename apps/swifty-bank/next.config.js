const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  identifier: ({ hash }) => `swifty_bank_${hash}`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@swifty/ui"],
};

module.exports = withVanillaExtract({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  ...nextConfig,
});
