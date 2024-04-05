// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// Themes Config
import navbar from "./config/themes/navbar.config";
import footer from "./config/themes/footer.config";
import docs_config from "./config/themes/docs.config";
import type * as Preset from "@docusaurus/preset-classic";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PowerNukkitX Wiki",
  tagline: "Feature-rich, highly customizable third-party server software for Minecraft: Bedrock Edition.",
  favicon: "img/icon/favicon.ico",

  // Set the production url of your site here
  url: "https://wiki.powernukkitx.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PowerNukkitX", // Usually your GitHub org/user name.
  projectName: "PNX-Wiki", // Usually your repo name.
  staticDirectories: ['static'],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
      "classic",
      {
        docs: {
          id: "product",
          sidebarPath: "./config/sidebar/pnx_wiki.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PowerNukkitX/PNX-Wiki/tree/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PowerNukkitX/PNX-Wiki/tree/master/",
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // PowerNukkitX Wiki Social card
      image: "img/misc/og-social-card.jpg",
      // Configuration files are located in the path /config/themes
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
