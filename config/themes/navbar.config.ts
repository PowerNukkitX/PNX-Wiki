/*
* PowerNukkitX Wiki Project
* Config File - Themes config (Navbar)
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

import type { Navbar } from "@docusaurus/theme-common";

const navbar: Omit<Navbar, "style" | "hideOnScroll"> = {
    title: 'PNX Wiki',
    logo: {
      alt: 'PowerNukkitX Logo',
      src: 'images/PNX_LOGO_sm.png',
    },
    items: [
      /*
      {
        type: 'docSidebar',
        sidebarId: 'product',
        position: 'left',
        label: 'Docs',
      },*/
      {to: '/blog', label: 'Blog', position: 'left'},
      {to: '/misc', label: 'Misc', position: 'left'},
      /*
      {
        type: 'docSidebar',
        sidebarId: 'community_misc_sidebar',
        position: 'left',
        label: 'Misc',
      },
      {
        type: 'docsVersionDropdown',
        position: 'right',
        docsPluginID: 'PowerNukkitX'
      },*/
      {
        type: 'localeDropdown',
        position: 'right',
        dropdownItemsAfter: [
          {
            to: 'https://github.com/PowerNukkitX/PNX-Wiki',
            label: '💖 Help us translate',
          },
        ],
      },
      {
        href: 'https://github.com/PowerNukkitX',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
    ],
  };

export default navbar;