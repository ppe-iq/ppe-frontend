// app/rss.xml/route.ts
import { NextResponse } from "next/server";

const BASE_URL = process.env.SITE_URL ?? "https://ppe-iq.com";

// Revalidate every 24h if using ISR context
export const revalidate = 86400; // optional, ensures caching if statically generated

export async function GET() {
  // In production, you could fetch posts from your CMS / DB instead
  const posts = [
    {
      title: "Mastering Shaft Alignment: Key Steps for Precision Maintenance",
      slug: "mastering-shaft-alignment",
      publishedAt: "2025-03-15",
      excerpt:
        "Learn essential techniques and tools for achieving accurate shaft alignment and improving machine reliability.",
    },
    {
      title: "Understanding Vibration Analysis for Predictive Maintenance",
      slug: "understanding-vibration-analysis",
      publishedAt: "2025-04-02",
      excerpt:
        "Explore how vibration analysis helps detect machinery faults early, saving time and maintenance costs.",
    },
    {
      title: "Condition Monitoring: Building a Proactive Maintenance Culture",
      slug: "condition-monitoring-proactive-maintenance",
      publishedAt: "2025-04-25",
      excerpt:
        "Discover how implementing condition monitoring can transform maintenance into a proactive reliability strategy.",
    },
  ];

  const items = posts
    .map(
      (p) => `
        <item>
          <title><![CDATA[${p.title}]]></title>
          <link>${BASE_URL}/blogs/${p.slug}</link>
          <guid isPermaLink="true">${BASE_URL}/blogs/${p.slug}</guid>
          <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
          <description><![CDATA[${p.excerpt}]]></description>
        </item>`,
    )
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
      xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title><![CDATA[PPE Blog | Proactive Premium Engineering]]></title>
        <link>${BASE_URL}/blogs</link>
        <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
        <description><![CDATA[Articles, tutorials, and insights from Proactive Premium Engineering]]></description>
        <language>en</language>
        <copyright><![CDATA[© ${new Date().getFullYear()} Proactive Premium Engineering]]></copyright>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(rssFeed.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
