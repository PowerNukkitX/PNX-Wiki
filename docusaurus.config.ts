// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// Themes Config
import navbar from "./config/themes/navbar.config";
import footer from "./config/themes/footer.config";
import docs_config from "./config/themes/docs.config";
import {themes} from "prism-react-renderer";

const theme = themes.vsDark;
const darkTheme = themes.jettwaveDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "PowerNukkitX Docs",
    tagline: "Official Docs for PowerNukkitX Server Software",
    favicon: "img/logo/PNX_LOGO_sm.png",
    url: "https://docs.powernukkitx.com",
    baseUrl: "/",
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    organizationName: "PowerNukkitX",
    projectName: "Docs",
    trailingSlash: false,
    staticDirectories: ['static'],
    themes: ['@saucelabs/theme-github-codeblock'],
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr", "zh-CN"],
        localeConfigs: {
            en: {
                htmlLang: "en-US",
                label: 'English',
            },
            fr: {
                htmlLang: "fr-FR",
                label: 'Français',
            },
            "zh-CN": {
                htmlLang: "zh-CN",
                label: '简体中文',
            },
        },
    },
    // Plugins
    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                toExtensions: ['html']
            }
        ],
        'docusaurus-plugin-sass',
    ],
    presets: [
        /** @type {import('@docusaurus/preset-classic').Options} */
        [
            '@docusaurus/preset-classic',
            ({
                docs: {
                    routeBasePath: '/docs',
                    sidebarPath: require.resolve('./sidebar.ts'),
                    editUrl: 'https://github.com/PowerNukkitX/PNX-Wiki/tree/master/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editLocalizedFiles: true,
                    editCurrentVersion: true,
                    versions: {
                        current: {
                            label: 'v2',
                        },
                    },
                    lastVersion: 'current',
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
        metadata: [{
            name: 'keywords',
            content: 'powernukkitx, documentation, pnx, docs, minecraft, server, software, bedrock, pe, be'
        }],
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        navbar: navbar,
        footer: footer,
        docs: docs_config,
        prism: {
            theme: theme,
            darkTheme: darkTheme,
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
                "yaml",
                "properties",
            ],
        },
    },
};

export default config;
