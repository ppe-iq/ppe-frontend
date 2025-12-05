import { NextResponse } from "next/server";

const BASE = process.env.SITE_URL ?? "https://ppe-iq.com";

export async function GET() {
  const now = new Date();

  const categories = [
    { slug: "vibration-analysis" },
    { slug: "laser-alignment" },
    { slug: "balancing" },
    { slug: "infrared-thermography" },
    { slug: "ultrasound" },
    { slug: "lubrication-management" },
    { slug: "cms-turbo-machinery" },
    { slug: "motion-amplification" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${categories
      .map(
        (c) => `
      <url>
        <loc>${BASE}/categories/${c.slug}</loc>
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
