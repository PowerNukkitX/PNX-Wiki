import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
    style: 'light',
    links: [
      {
        title: 'Getting started',
        items: [
          {
            label: 'Docs',
            to: '/docs',
          },
          {
            label: 'Javadoc',
            href: 'https://javadoc.io/doc/cn.powernukkitx/powernukkitx',
          },
        ],
      },
      {
        title: 'Contribute',
        items: [
          {
            label: 'Donate',
            to: '/',
          },
          {
            label: 'Documentation',
            href: '/',
          },
        ],
      },
      {
        title: 'Resources',
        items: [
          {
            label: 'Changelogs',
            to: '/',
          },
          {
            label: 'Documentation',
            href: '/',
          },
          {
            label: 'Developer API',
            href: '/',
          },
          {
            label: 'API web',
            href: '/',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Website',
            href: 'https://v2.powerNukkitX.com',
          },
          {
            label: 'Github',
            href: 'https://github.com/PowerNukkitX',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/BcPhZCVJHJ',
          },
          {
            label: 'QQ',
            href: 'https://jq.qq.com/?_wv=1027&k=6rm3gbUI',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
        ],
      }
    ],
    copyright: `2019 - ${new Date().getFullYear()} © PowerNukkitX and contributors.`,
  };

export default footer;