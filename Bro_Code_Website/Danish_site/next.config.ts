import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ["avatar.iran.liara.run"]
  },
};

export default nextConfig;
