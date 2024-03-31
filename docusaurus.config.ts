// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import navbar from "./config/themes/navbar.config";
import footer from "./config/themes/footer.config";
import docs_config from "./config/themes/docs.config";
import type * as Preset from "@docusaurus/preset-classic";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PowerNukkitX Documentation",
  tagline: "Official Docs for PowerNukkitX",
  favicon: "img/icon/favicon.ico",
  url: "https://wiki.powernukkitx.com",
  baseUrl: "/",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: "PowerNukkitX",
  projectName: "Docs",
  trailingSlash: false,
  staticDirectories: ['static'],

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

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        docsRouteBasePath: ["docs"],
        docsDir: ["docs"],
        docsPluginIdForPreferredVersion: "product",
        searchContextByPaths: [
          {
            label: {
              en: "PNX2.0 Document",
              zh: "PNX2.0 文档",
            },
            path: "docs",
          },
        ],
        hideSearchBarWithNoSearchContext: true,
      },
    ],
  ],

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebar.ts'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mcserversoft/documentation/edit/main/',
        },
        blog: false,
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
        respectPrefersColorScheme: false,
      },
      image: "img/misc/og-social-card.jpg",
      navbar: navbar,
      footer: footer,
      docs: docs_config,
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: [
          "batch",
          "bash",
          "git",
          "java",
          "javastacktrace",
          "kotlin",
          "groovy",
          "log",
          "toml",
          "properties",
        ],
      },
    },
};

export default config;
