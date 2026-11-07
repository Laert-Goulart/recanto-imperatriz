import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // A antiga página de hospedagem foi substituída pela página de temporada
    return [{ source: '/hospedagem', destination: '/temporada', permanent: true }];
  },
};

export default nextConfig;
