import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/prompt-engineering-foundations',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
