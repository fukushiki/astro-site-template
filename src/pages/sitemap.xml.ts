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
    return new Response('Site URL is required to generate sitemap.', { status: 500 });
  }

  const baseUrl = site.toString().replace(/\/$/, '');
  const posts = await getCollection('blog');
  const staticUrls = ['/', '/ja/', '/en/', '/ja/blog/', '/en/blog/'];
  const postUrls = posts.map((post) => `/${post.data.lang}/blog/${toRouteKey(post.id, post.slug)}/`);

  const uniqueUrls = [...new Set([...staticUrls, ...postUrls])];
  const body = uniqueUrls
    .map((path) => `<url><loc>${xmlEscape(`${baseUrl}${path}`)}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
