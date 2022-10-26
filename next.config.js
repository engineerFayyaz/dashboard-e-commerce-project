const headers = require("./headers");
const next_config = {
  images: {
    domains: [process.env.AWS_S3_DOMAIN],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
  env: {
    APP_ENV: process.env.NODE_ENV,
    APP_SSL: process.env.NEXT_PUBLIC_APP_SSL,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ]
  },
};

module.exports = next_config;
