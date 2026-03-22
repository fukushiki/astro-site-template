type TagPalette = {
  bg: string;
  border: string;
  text: string;
};

export const tagConfig: {
  default: TagPalette;
  colors: Record<string, TagPalette>;
} = {
  default: {
    bg: 'var(--tag-bg)',
    border: 'var(--tag-border)',
    text: 'var(--tag-text)'
  },
  colors: {
    astro: {
      bg: '#e8f3ff',
      border: '#9cc8f3',
      text: '#1f4f80'
    },
    multilingual: {
      bg: '#efe8ff',
      border: '#c3b0f1',
      text: '#4c3686'
    },
    sample: {
      bg: '#fff1dc',
      border: '#e5c79a',
      text: '#7a5422'
    },
    qiita: {
      bg: '#e2f6e7',
      border: '#9ed4aa',
      text: '#1f6a37'
    },
    zenn: {
      bg: '#e4f1ff',
      border: '#9dc6f1',
      text: '#1f5f9f'
    },
    devto: {
      bg: '#eeeaff',
      border: '#c1b5f5',
      text: '#4a3b98'
    }
  }
};

export function getTagPalette(tag: string): TagPalette {
  return tagConfig.colors[tag.toLowerCase()] ?? tagConfig.default;
}

