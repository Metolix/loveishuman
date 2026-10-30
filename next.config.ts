import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  experimental: { cpus: 1, agentUpgrade: "security" },
};
export default nextConfig;
