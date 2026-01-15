// @ts-check
const {themes} = require('prism-react-renderer');

module.exports = {
  title: 'One Space Design System',
  tagline: 'One Space Design System',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'osm-docs',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    ['classic', {
      docs: { sidebarPath: require.resolve('./sidebars.js'), routeBasePath: '/' },
      theme: { customCss: require.resolve('./src/css/custom.css') },
    }],
  ],
  themeConfig: {
    navbar: { title: 'One Space Design System' },
    docs: { sidebar: { hideable: true } },
    prism: { additionalLanguages: ['swift'], theme: themes.github, darkTheme: themes.dracula },
  },
};
