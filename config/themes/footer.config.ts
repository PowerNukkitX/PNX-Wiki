// @ts-ignore
import type {Footer} from "@docusaurus/theme-common";

const footer: Footer = {
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
                    label: 'Guide',
                    href: 'https://github.com/PowerNukkitX/PowerNukkitX/blob/master/CONTRIBUTING.md',
                },
                {
                    label: 'Donate',
                    to: 'https://www.patreon.com/coolloong',
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
    copyright: `2019 - ${new Date().getFullYear()} © PowerNukkitX.`,
};

export default footer;