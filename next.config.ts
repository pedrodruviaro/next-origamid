import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.origamid.online",
        port: "",
        pathname: "/imagens/**",
      },
    ],
  },
}

export default nextConfig
