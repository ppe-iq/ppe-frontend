// app/sitemap-index.xml/route.ts
import { NextResponse } from "next/server";

const BASE_URL = process.env.SITE_URL ?? "https://ppe-iq.com";

export async function GET() {
  const now = new Date().toISOString();

  const submaps = [
    `${BASE_URL}/sitemap.xml`, // main pages
    `${BASE_URL}/sitemap-blogs.xml`,
    `${BASE_URL}/sitemap-videos.xml`,
    `${BASE_URL}/sitemap-products.xml`,
    `${BASE_URL}/sitemap-services.xml`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${submaps
      .map(
        (url) => `
        <sitemap>
          <loc>${url}</loc>
          <lastmod>${now}</lastmod>
        </sitemap>`,
      )
      .join("\n")}
  </sitemapindex>`;

  return new NextResponse(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
