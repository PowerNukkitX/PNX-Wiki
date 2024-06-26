---
title: 资源包加密
description: PowerNukkitX支持你使用加密后的资源包.
keywords: [pnx, documentation, introduction, doc, powernukkitx, resource, package, encryption, encrypt, key, manifest, mcpack, aes, symmetric, 32, 32-key, 32key]
---
# 资源包加密

这里的资源包加密仅代表PowerNukkitX支持你使用经你加密的资源包，你只需要按照下面的教程为你的资源包配置32-key，便可以让玩家客户端正常加载.

请注意：资源包加密并不能完全阻止别有用心之人窃取你的资源包，因为这是`AES`对称密钥加密.

只需3步，跟上步伐，即刻开始！

## 1. 加密我的资源包

可用的加密工具:
- [EncryptMyPack](https://github.com/AllayMC/EncryptMyPack)

一些注意事项：
- 资源包以`.mcpack`结尾
- mcpack文件根目录不能嵌套文件夹，必须点进去就能够看到`manifest.json`
- **PowerNukkitX 本身不包含任何加密和解密逻辑，仅仅只是按照你的配置向客户端发送32-key （这点非常重要）**


## 2. 配置你的密钥

与资源包相同的名字命名一个`.key`拓展名(后缀)的文件，内容是资源包对应的32-key.

例子：在resource_packs文件夹中有这样两个文件

| 文件名             | 说明            |
|-----------------|---------------|
| x1.mcpack         | 一个名字为x1的资源包       |
| x1.mcpack.key           | 这是x1.mcpack资源包的密钥  |

## 3. 重启服务端使其生效

PowerNukkitX只有在启动时才会加载resource_packs中的文件，因此你需要重启以使它生效.

## 其它疑惑

| Q             | A            |
|-----------------|---------------|
| 加密后的资源包还能否被解密         | 可以.但相对于不加密，这已经提高了盗取者的门槛       |
| 是否会影响性能           | 不会.  |