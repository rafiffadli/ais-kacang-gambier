import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "192.168.100.68",
    "localhost",
    "127.0.0.1",
    "*.local",
  ],
};

export default nextConfig;
