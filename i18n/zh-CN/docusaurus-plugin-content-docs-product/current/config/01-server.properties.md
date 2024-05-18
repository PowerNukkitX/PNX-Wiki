# server.properties配置介绍  

## motd=PowerNukkitX Server
在服务器在线人数及延迟界面显示的 Motd 文字
## sub-motd=https://v2.powernukkitx.com
当按下暂停（ESC）时右侧菜单顶部显示的名称
## server-port=19132
服务器启用的端口
## server-ip=0.0.0.0
服务器启用的 IP 地址（一般保持 0.0.0.0）
## view-distance=12
服务器限制的最大视距
## white-list=off
是否开启服务器白名单（off/on）
## achievements=on
是否开启成就系统（off/on）
## announce-player-achievements=on
当玩家获得成就是否发送提示信息（off/on）
## spawn-protection=16
出生点保护范围
## max-players=20
最大玩家数量
## allow-flight=off
是否允许飞行（Nukkit 自带的防飞行反作弊）（off/on）
## spawn-animals=on
是否生成动物（当前无效）（off/on）
## spawn-mobs=on
是否生成怪物（当前无效）（off/on）
## gamemode=0
默认游戏模式
- 0: 生存模式　
- 1: 创造模式　
- 2: 冒险模式　
- 3: 旁观模式
## force-gamemode=off
玩家加入服务器时是否设置为默认游戏模式（off/on）
## hardcore=off
启用极限模式（死亡即 Ban）（off/on）
## pvp=on
启用 PVP（off/on）
## difficulty=1
世界难度：
- 0: 和平
- 1: 简单
- 2: 普通
- 3: 困难
## level-name=world
主世界地图名称
## level-seed=
主世界地图种子
## allow-nether=on
是否开启下界世界 (当前无效) (OFF关闭　ON开启)
## allow-the_end=on
是否开启末地世界 (当前无效) (OFF关闭　ON开启)
## use-terra=on
是否启用Terra史诗世界(OFF关闭　ON开启)
## enable-custom-item=off
是否启用自定义物品(OFF关闭　ON开启)
## enable-query=on
是否启用协议服务器监听器以显示服务器信息(OFF关闭　ON开启)
## enable-rcon=off
是否启用服务器远程控制协议(OFF关闭　ON开启)
## rcon.password=iMDhjOTcxN
远程控制协议密码
## auto-save=on
自动保存世界（off/on）
## force-resources=off
强制使用服务器的资源包（off/on）
## force-resources-allow-client-packs=off
在打开`force-resources`时允许客户端使用自己的资源包，必须开启`force-resources`才会生效
## xbox-auth=on
启用 Xbox 在线验证（该功能可防止未登陆的玩家进入服务器）（off/on）
## check-login-time=on
是否检查客户端的登录时间，这可以减少恶意攻击的可能性，不过可能导致部分玩家无法连接至服务器（off/on）
## disable-auto-bug-report=off
关闭自动上传错误报告到Sentry平台 (off/on）
## allow-shaded=off
是否允许使用shaded包启动服务器（off/on）
## server-authoritative-movement=server-auth
服务器移动验证模式（client-auth/server-auth）
## network-encryption=on
是否启用网络加密（off/on）