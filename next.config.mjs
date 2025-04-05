/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        pathname: "/uploads/**",
        protocol: "http",
        port: "1337",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
