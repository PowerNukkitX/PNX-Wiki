![Header](./static/img/icon/PowerNukkitX.png)

<h1 align="center">📖 PowerNukkitX Docs</h1>

<p align="center">
<a href="https://discord.gg/BcPhZCVJHJ"><img src="https://img.shields.io/discord/944227466912870410?color=7289da&logo=discord&logoColor=white&style=flat-square" alt="Discord"></a>
<a href="/README.md"><img src="https://img.shields.io/badge/English-Click%20me-purple?style=flat-square" alt="English"></a>
<a href="/blob/zh-hans/README.md"><img src="https://img.shields.io/badge/简体中文-Click%20me-purple?style=flat-square" alt="简体中文"></a>
<a href="/LICENSE"><img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg?style=flat-square" alt="License: AGPL v3"></a>
<a href="/CHANGELOG.md"><img src="https://img.shields.io/badge/ChangeLog-blue?style=flat-square" alt="ChangeLog"></a>
<a href="https://www.powernukkitx.com/doc/en-us/faq/common.html"><img src="https://img.shields.io/badge/FAQ-blue?style=flat-square" alt="FAQ"></a>
<a href="https://doc.powernukkitx.cn"><img src="https://img.shields.io/badge/PNX-DOC-blue?style=flat-square" alt="PNX-Wiki"></a>
<a href="https://search.maven.org/search?q=g:%22cn.powernukkitx%22%20AND%20a:%22powernukkitx%22"><img src="https://img.shields.io/maven-central/v/cn.powernukkitx/powernukkitx.svg?label=Maven%20Central&style=flat-square" alt="Maven Central"></a>
<a href="https://www.jitpack.io/#PowerNukkitX/PowerNukkitX"><img src="https://www.jitpack.io/v/PowerNukkitX/PowerNukkitX.svg" alt="JitPack"></a>
</p>

### This documentation was built with [Docusaurus 3](https://docusaurus.io/).

This is a community maintained documentation for PowerNukkitX. If you see any errors or want to add something, please follow the contribution guide below.

If you have any questions that are not answered here, feel free to join the [PowerNukkitX Discord](https://discord.gg/BcPhZCVJHJ) or [PowerNukkitX QQ](https://jq.qq.com/?_wv=1027&k=6rm3gbUI) and ask them there!

## Local Development
To run a local development server, you first need to install the dependencies:

- Node.js Version >= 18.x
- [pnpm](https://pnpm.io/installation)

```bash
pnpm install
```

```bash
pnpm run start
#preview other language
pnpm run start --locale zh-CN
```

### 🏳️ Add support Language

See: https://docusaurus.io/zh-CN/docs/i18n/git

Use `docusaurus write-translations` to generate the translation files.

```bash
pnpm run write-translations --locale [language]
```

## License

 * [AGPL-V3](/LICENSE)
 * [CC-NC-BY-SA-4.0](/LICENSE-docs)