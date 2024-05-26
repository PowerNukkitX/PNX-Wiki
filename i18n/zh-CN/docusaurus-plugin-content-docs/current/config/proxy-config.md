---
sidebar_position: 5
title: 代理配置
description: 使用代理，快速在多个服务器之间转移玩家，这对设置一组服务器尤为重要。在基岩版中，目前最流行的代理是 WaterdogPe。
keywords: [pnx，文档，介绍，文档，powernukkitx，代理，配置，waterdogpe，转移，玩家，服务器，组，基岩，版]
---

# 代理配置
使用代理，快速在多个服务器之间转移玩家，这对设置一组服务器尤为重要。在基岩版中，
目前最流行的代理是 [WaterdogPe](https://github.com/WaterdogPE/WaterdogPE)。
PNX 为其制作了适配版本：[WaterdogPe-PNX](https://github.com/PowerNukkitX/WaterdogPE-PNX)。
![waterdogpe](/docs/waterdogpe001.png)  
接下来，我们介绍如何在 PNX 中使用 WaterdogPE。
## 使用教程

您只需要在每个 PNX 子服务器中调整 `nukkit.yml`，将 `waterdogpe=true` 设置为使用 WaterdogPE。

## 注意事项
1. 在准备转移玩家之前，您应该使用插件关闭玩家的所有存储。
   否则，玩家将无法在另一台服务器上打开其存储。