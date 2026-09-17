/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 240,
  experimental: {
    useWasmBinary: true,
  },
};

module.exports = nextConfig;
