---
sidebar_position: 5
title: Proxy Configuration
description: With proxy, fast transfer player between multiple servers, which is especially important for setting a group of servers. In Bedrock Edition, the most popular proxy currently is WaterdogPe.
keywords: [pnx, documentation, introduction, doc, powernukkitx, proxy, configuration, waterdogpe, transfer, player, server, group, bedrock, edition]
---

# Proxy Configuration
With proxy, fast transfer player between multiple servers,
which is especially important for setting a group of servers. In Bedrock Edition,
the most popular proxy currently is [WaterdogPe](https://github.com/WaterdogPE/WaterdogPE).
PNX has made a adaptation version for it: [WaterdogPe-PNX](https://github.com/PowerNukkitX/WaterdogPE-PNX).
![waterdogpe](/docs/waterdogpe001.png)  
Next, we introduce how to use WaterdogPE in PNX.
## Usage Tutorial

You only need to adjust the `nukkit.yml` in each PNX sub-server by setting `waterdogpe=true` to use WaterdogPE.

## Notice
1. Before you prepare to transfer a player, you should use a plugin to close all inventories for the player.
   Otherwise, the player will not be able to open its inventory on another server.