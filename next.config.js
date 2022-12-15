module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    swcMinify: true,
    images: {
      domains: [
        "api.fostech.vn",
        "d25k1955sgf0bb.cloudfront.net",
        "alba-web-holding.herokuapp.com",
        "flagcdn.com",
      ],
    },
    env: {
      // Biến môi trường
    },
  };
  return nextConfig;
};
