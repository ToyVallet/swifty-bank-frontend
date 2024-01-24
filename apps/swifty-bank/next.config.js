const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin({
  identifier: ({ hash }) => `swifty_bank_${hash}`,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@swifty/ui'],
};

module.exports = withVanillaExtract(nextConfig);
