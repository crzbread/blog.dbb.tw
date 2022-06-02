// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "千層麵很好吃",
  tagline: "肥宅整天待在家維護世界和平",
  url: "https://dbb.tw",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "crzbread", // Usually your GitHub org/user name.
  projectName: "dbb.tw", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/notes",
        },
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  scripts: ["../js/commentbox.js"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "千層麵很好吃",
        logo: {
          alt: "一個B",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "筆記",
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: "light",
        links: [],
        copyright: ` © ${new Date().getFullYear()} DBB , Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-WHDX88F", // GTM Container ID
      },
    ],
  ],
};

module.exports = config;
