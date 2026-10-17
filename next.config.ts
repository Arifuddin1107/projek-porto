import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Recommended for static/easier deployments on Vercel or similar
  },
};

export default nextConfig;
