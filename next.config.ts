import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
      {
        source: "/sitemap-blogs.xml",
        destination: "/sitemap-blogs",
      },
      {
        source: "/sitemap-index.xml",
        destination: "/sitemap-index",
      },
      {
        source: "/sitemap-products.xml",
        destination: "/sitemap-products",
      },
      {
        source: "/sitemap-services.xml",
        destination: "/sitemap-services",
      },
      {
        source: "/sitemap-categories.xml",
        destination: "/sitemap-categories",
      },
      {
        source: "/sitemap-videos.xml",
        destination: "/sitemap-videos",
      },
      {
        source: "/rss.xml",
        destination: "/rss",
      },
    ];
  },

  compiler: {
    ...(process.env.NODE_ENV === "production" && {
      removeConsole: {
        exclude: ["warn", "error"],
      },
    }),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ppe-server-production.up.railway.app",
        // pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/di5tcxmot/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
