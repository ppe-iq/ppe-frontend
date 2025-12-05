import { NextResponse } from "next/server";

const BASE = process.env.SITE_URL ?? "https://ppe-iq.com";

export async function GET() {
  const products = [
    { slug: "at-400", updatedAt: "2025-04-01" },
    { slug: "rt-300", updatedAt: "2025-03-20" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${products
      .map(
        (p) => `
      <url>
        <loc>${BASE}/products/${p.slug}</loc>
        <lastmod>${p.updatedAt}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
      </url>`,
      )
      .join("\n")}
  </urlset>`;

  return new NextResponse(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
