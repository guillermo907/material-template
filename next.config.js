/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://jsonplaceholder.typicode.com/",
      },
    ],
  },
};

module.exports = nextConfig;
