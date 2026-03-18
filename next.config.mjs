/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/work",
        destination: "/",
        permanent: false,
      },
      {
        source: "/insights",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;