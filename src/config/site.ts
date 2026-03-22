import { iconConfig } from './icons';

export const siteConfig = {
  siteUrl: 'https://fukushiki.dev',
  brandName: 'fukushiki.dev',
  defaultTitle: 'fukushiki.dev',
  defaultDescription: 'Bilingual personal site and blog built with Astro.',
  defaultOgImage: '/profile.svg',
  footerStackText: 'Astro + Markdown + Content Collections',
  profileImageSrc: iconConfig.profileImageSrc
} as const;
