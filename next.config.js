module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    output: "standalone",
    swcMinify: true,
    api: {
      bodyParser: {
        sizeLimit: "1mb",
      },
    },
    images: {
      domains: [
        "api.fostech.vn",
        "d25k1955sgf0bb.cloudfront.net",
        "thegolfhousevietnam.com",
        "flagcdn.com",
        "hrms-lio.fostech.vn",
      ],
    },
    env: {
      // Biến môi trường
      API_URL: "https://api.fostech.vn/api/60939744ac969b4078488026",
      ACCESS_TOKEN: "7d7fea98483f31af4ac3cdd9db2e4a93",
      PROVINCE_API_URL: "https://vn-public-apis.fpo.vn",
    },
  };
  return nextConfig;
};
