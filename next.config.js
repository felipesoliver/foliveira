const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  reactStrictMode: true,
  svgrOptions: {
    titleProp: true,
    icon: true,
  },
};

module.exports = withSvgr(nextConfig);
