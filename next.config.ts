import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "172.20.10.3",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    unoptimized: true, // Recommended for static/easier deployments on Vercel or similar
  },
};

export default nextConfig;
