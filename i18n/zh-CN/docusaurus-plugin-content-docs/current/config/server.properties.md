sidebar_position: 1
title: server.properties
description: PowerNukkitX 服务器配置文件说明文档
keywords: [pnx, documentation, introduction, doc, powernukkitx, server-properties, doc, powernukkitx, server, properties, config, configuration, settings, motd, sub-motd, server-port, server-ip, view-distance, white-list, achievements, announce-player-achievements, spawn-protection, max-players, allow-flight, spawn-animals, spawn-mobs, gamemode, force-gamemode, hardcore, pvp, difficulty, generator-settings, level-name, level-seed, allow-nether, allow-the_end, use-terra, enable-custom-item, enable-query, enable-rcon, rcon.password, auto-save, force-resources, xbox-auth]
---

# server.properties 介绍

## motd=PowerNukkitX 服务器
在客户端用户界面中显示的文本。

## sub-motd=https://powernukkitx.cn
当按下 ESC 键时在右上角菜单中显示的名称。

:::warning[Sub-Motd 和 Motd]
`sub-motd` 和 `motd` 字段在 PowerNukkitX 的最新版本中不再支持。
:::

## server-port=19132
服务器端口。

## server-ip=0.0.0.0
服务器使用的 IP 地址（默认为 0.0.0.0）。

## view-distance=10
服务器限制的最大视距（建议为 4 到 6）。

## white-list=off
启用服务器白名单（off/on）。

## achievements=on
启用成就系统（off/on）。

## announce-player-achievements=on
玩家获得成就时显示通知消息（off/on）。

## spawn-protection=16
生成保护区域的范围。

## max-players=20
最大玩家数量。

## allow-flight=off
允许飞行（Nukkit 的反作弊功能）（off/on）。

## spawn-animals=on
生成动物（目前无效）（off/on）。

## spawn-mobs=on
生成怪物（目前无效）（off/on）。

## gamemode=0
默认游戏模式：
- 0：生存模式
- 1：创造模式
- 2：冒险模式
- 3：观察者模式

## force-gamemode=off
在连接到服务器时强制玩家使用默认游戏模式（off/on）。

## hardcore=off
启用极限模式（死亡会导致封禁）（off/on）。

## pvp=on
启用 PVP（off/on）。

## difficulty=1
世界难度：
- 0：和平模式
- 1：简单模式
- 2：普通模式
- 3：困难模式

## generator-settings=
世界生成器设置。

## level-name=world
主世界地图的名称。

## level-seed=
主世界地图的种子。

## allow-nether=on
启用地狱（off/on）。

## allow-the_end=on
启用末地（off/on）。

## use-terra=on
启用 Terra Epic World（off/on）。

## enable-custom-item=off
启用自定义物品（off/on）。

## enable-query=on
启用服务器查询协议以显示服务器信息（off/on）。

## enable-rcon=off
启用服务器远程控制协议（off/on）。

## rcon.password=iMDhjOTcxN
远程控制协议的密码。

## auto-save=on
世界自动保存（off/on）。

## force-resources=off
强制使用服务器资源包（off/on）。

## xbox-auth=on
启用 Xbox 在线验证（此功能可能会阻止未列入名单的玩家进入服务器）（off/on）。
