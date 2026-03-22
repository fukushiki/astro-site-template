export type SocialKey = 'github' | 'x' | 'zenn' | 'qiita' | 'devto';

type SocialSetting = {
  enabled: boolean;
  url: string;
};

type AboutProfile = {
  name: string;
  role: string;
  bio: string[];
  socials: Record<SocialKey, SocialSetting>;
  contactTitle: string;
  contactEmail: string;
  contactX: string;
  contactXUrl: string;
};

export const aboutConfig: Record<'ja' | 'en', AboutProfile> = {
  ja: {
    name: 'Sample User',
    role: 'Sample Engineer',
    bio: [
      'このページはプロフィールページのサンプルです。',
      '文言・リンク・活動履歴はすべてダミーデータです。'
    ],
    socials: {
      github: { enabled: true, url: 'https://github.com/' },
      x: { enabled: true, url: 'https://x.com/' },
      zenn: { enabled: true, url: 'https://zenn.dev/' },
      qiita: { enabled: true, url: 'https://qiita.com/' },
      devto: { enabled: false, url: 'https://dev.to/' }
    },
    contactTitle: 'Contact',
    contactEmail: 'sample@example.com',
    contactX: '@sample_user',
    contactXUrl: 'https://x.com/'
  },
  en: {
    name: 'Sample User',
    role: 'Sample Engineer',
    bio: [
      'This page is a sample profile for this starter project.',
      'All profile texts, links, and activity items are dummy data.'
    ],
    socials: {
      github: { enabled: true, url: 'https://github.com/' },
      x: { enabled: true, url: 'https://x.com/' },
      zenn: { enabled: false, url: 'https://zenn.dev/' },
      qiita: { enabled: false, url: 'https://qiita.com/' },
      devto: { enabled: true, url: 'https://dev.to/' }
    },
    contactTitle: 'Contact',
    contactEmail: 'sample@example.com',
    contactX: '@sample_user',
    contactXUrl: 'https://x.com/'
  }
};
