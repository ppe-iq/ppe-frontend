import { NextResponse } from "next/server";

const BASE = process.env.SITE_URL ?? "https://ppe-iq.com";

export async function GET() {
  const now = new Date();

  const services = [
    { slug: "vibration-analysis" },
    { slug: "laser-alignment" },
    { slug: "motion-amplification" },
    { slug: "in-site-balancing" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${services
      .map(
        (s) => `
      <url>
        <loc>${BASE}/services/${s.slug}</loc>
        <lastmod>${now.toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.6</priority>
      </url>`,
      )
      .join("\n")}
  </urlset>`;

  return new NextResponse(xml.trim(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
