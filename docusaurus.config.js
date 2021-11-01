// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '千層麵很好吃',
  tagline: '肥宅整天待在家維護世界和平',
  url: 'https://dbb.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'crzbread', // Usually your GitHub org/user name.
  projectName: 'my_blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  scripts: [
    "../js/commentbox.js",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '千層麵很好吃',
        logo: {
          alt: '一個B',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '筆記',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          // href: 'https://github.com/facebook/docusaurus',
          // label: 'GitHub',
          // position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            // title: '雜記',
            // items: [
            //   {
            //     label: '筆記',
            //     to: '/docs/intro',
            //   },
            // ],
          },
          {
            // title: 'Community',
            // items: [
            // {
            // label: 'Stack Overflow',
            // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // }
            // ],
          },
          {
            // title: 'More',
            // items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
            //   {
            //     label: 'GitHub',
            //     href: 'https://github.com/facebook/docusaurus',
            //   },
            // ],
          },
        ],
        copyright: ` © ${new Date().getFullYear()} DBB , Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
