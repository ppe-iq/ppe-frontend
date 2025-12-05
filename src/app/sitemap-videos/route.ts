import { NextResponse } from "next/server";

const BASE = process.env.SITE_URL ?? "https://ppe-iq.com";

export async function GET() {
  const videos = [
    {
      slug: "thermal-growth-in-machine-shaft-alignment",
      updatedAt: "2025-03-18",
    },
    {
      slug: "a-proactive-approach-to-maintenance",
      updatedAt: "2025-03-10",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${videos
      .map(
        (v) => `
      <url>
        <loc>${BASE}/videos/${v.slug}</loc>
        <lastmod>${v.updatedAt}</lastmod>
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
