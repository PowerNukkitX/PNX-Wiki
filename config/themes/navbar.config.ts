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

const navbar: Omit<Navbar, "style"> = {
    hideOnScroll: true,
    title: 'PowerNukkitX Documentation',
    logo: {
      alt: 'PowerNukkitX Logo',
      src: 'img/logo/PNX_LOGO_sm.png',
      href: '/'
    },
    items: [
        {
            to: 'docs',
            position: 'left',
            label: 'Docs',
        },
        //right
        {
            type: 'docsVersionDropdown',
            position: 'right',
        },
        {
        type: 'localeDropdown',
        position: 'right',
        dropdownItemsAfter: [
          {
            to: 'https://github.com/PowerNukkitX/PNX-Wiki/tree/master/i18n',
            label: '💖 Help us translate',
          },
        ],
      },
      {
        href: 'https://github.com/PowerNukkitX/PNX-Wiki',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
    ],
  };

export default navbar;