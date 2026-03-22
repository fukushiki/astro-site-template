import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const toRouteKey = (id: string, fallbackSlug: string) => {
  const match = id.match(/(.*)\/(ja|en)\.(md|mdx)$/);
  return match ? match[1] : fallbackSlug;
};

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Site URL is required to generate RSS.', { status: 500 });
  }

  const baseUrl = site.toString().replace(/\/$/, '');
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const items = posts
    .map((post) => {
      const link = `${baseUrl}/${post.data.lang}/blog/${toRouteKey(post.id, post.slug)}/`;
      return [
        '<item>',
        `<title>${xmlEscape(post.data.title)}</title>`,
        `<link>${xmlEscape(link)}</link>`,
        `<guid>${xmlEscape(link)}</guid>`,
        `<pubDate>${post.data.pubDate.toUTCString()}</pubDate>`,
        `<description>${xmlEscape(post.data.description)}</description>`,
        '</item>'
      ].join('');
    })
    .join('');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<rss version="2.0"><channel>` +
    `<title>fukushiki.dev</title>` +
    `<link>${xmlEscape(baseUrl)}</link>` +
    `<description>Bilingual blog feed from fukushiki.dev</description>` +
    `${items}` +
    `</channel></rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
