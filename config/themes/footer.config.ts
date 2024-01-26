/*
* PowerNukkitX Wiki Project
* Config File - Themes config (Footer)
*
* This source code is licensed under the AGPL-3.0 license found in the
* LICENSE file in the root directory of this source tree.
* If you need to distribute relevant code, please strictly comply with the relevant regulations of the open source license.
*
* Website: https://www.powernukkitx.com
* Github: https://github.com/PowerNukkitX
*
* 2024 © PowerNukkitX
*/

import type { Footer } from "@docusaurus/theme-common";

const footer: Footer = {
    style: 'dark',
    links: [
      {
        title: 'Discover',
        items: [
          {
            label: 'Docs',
            to: '/docs/intro',
          },
          {
            label: 'API',
            to: '/docs/intro',
          },
          {
            label: 'FAQ',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Community',
        items: [
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
          {
            label: 'Changelog',
            to: '/changelog',
          },
          {
            label: 'Javadoc',
            href: 'https://javadoc.io/doc/cn.powernukkitx/powernukkitx',
          },
        ],
      },
      {
        title: 'Legal',
        items: [
          {
            label: 'OSC License',
            to: '/misc/osc-license',
          },
          {
            label: 'Terms',
            to: '/misc/terms',
          },
        ],
      },
    ],
    copyright: `2019 - ${new Date().getFullYear()} © PowerNukkitX`,
  };

export default footer;