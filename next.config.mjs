/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
  images: {
    domains: ["127.0.0.1", "localhost"], // Allow images from 127.0.0.1 (localhost)
  },
};

export default nextConfig;
