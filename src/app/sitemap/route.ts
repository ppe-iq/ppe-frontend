import { NextResponse } from "next/server";

const BASE = process.env.SITE_URL ?? "https://ppe-iq.com";

function formatEntry(url: string, lastmod?: string) {
  return `
  <url>
    <loc>${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

export async function GET() {
  const now = new Date().toISOString();

  const urls = [
    `${BASE}/`,
    `${BASE}/categories`,
    `${BASE}/services`,
    `${BASE}/training`,
    `${BASE}/videos`,
    `${BASE}/blogs`,
    `${BASE}/products`,
    `${BASE}/feedback`,
    `${BASE}/company/about`,
    `${BASE}/company/news-events`,
    `${BASE}/company/contact`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((u) => formatEntry(u, now)).join("\n")}
  </urlset>`;

  return new NextResponse(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
