import navbar from "./config/themes/navbar.config";
import footer from "./config/themes/footer.config";
import docs_config from "./config/themes/docs.config";

const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PowerNukkitX Documentation",
  tagline: "Official Docs for PowerNukkitX",
  favicon: "img/icon/favicon.ico",
  url: "https://wiki.powernukkitx.com",
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName: "PowerNukkitX",
  projectName: "Docs",
  trailingSlash: false,
  staticDirectories: ['static'],
  themes: ['@docusaurus/theme-live-codeblock'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },

  // Plugins
  plugins: ["docusaurus-plugin-sass"],

  scripts: [
    {
      src: "/js/wiki-version.js",
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebar.ts'),
          editUrl: 'https://github.com/PowerNukkitX/PNX-Wiki/edit/main/',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
            showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [{ name: 'keywords', content: 'powernukkitx, documentation, pnx, docs, minecraft, server, servers, software, bedrock, pe' }],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: navbar,
      footer: footer,
      docs: docs_config,
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

export default config;
