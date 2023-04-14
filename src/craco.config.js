const glob = require('glob-all');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.jsx'],
  whitelistPatterns: [/^bg-/, /^text-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  safelist: {
    standard: [/^bg-/, /^text-/],
    deep: [/^fade-/],
  },
  keyframes: true,
  fontFace: true,
  variables: true,
  rejected: true,
  blocklist: ['foo'],
  extractors: [
    {
      extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      extensions: ['html', 'jsx'],
    },
  ],
});

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
    },
  },
};
