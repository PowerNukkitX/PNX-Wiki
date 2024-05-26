sidebar_position: 3
title: 资源包加密
description: 加密您的 PowerNukkitX 资源包
keywords: [pnx, documentation, introduction, doc, powernukkitx, power, nukkit, nukkitx, encryption, pack, resources, resource, encryption]
---

# 资源包加密

资源包加密意味着 PowerNukkitX 允许您使用加密的资源包。您只需按照以下教程为您的资源包设置一个 32 位字符的密钥，以便玩家客户端能够正常加载它。

请注意，资源包的加密无法完全防止恶意人士窃取您的资源包，因为这是一种对称密钥 `AES` 加密。

只需 3 个步骤，跟着做吧！

## 1. 加密我的资源包

在一些由 PowerNukkitX 不管理的网站上（[encryptmypack](https://encryptmypack.com)），您可以轻松地加密您的资源包。

一些注意事项：
- 资源包的文件名必须以 `.mcpack` 结尾
- `.mcpack` 文件的根目录不能嵌套其他文件夹。资源包的根目录必须包含可见的 `manifest.json` 文件。
- **PowerNukkitX 不包含任何加密和解密逻辑，而只是根据您的配置向客户端发送 32 位字符的密钥（这一点非常重要）**

## 2. 配置您的密钥

与资源包同名的文件必须具有 `.key` 扩展名。其内容是与资源包相对应的 32 位字符的密钥。

示例：在 `resource_packs` 文件夹中有两个文件。

| 文件名           | 描述           |
|-----------------|----------------|
| x1.mcpack       | 名为 `x1` 的资源包 |
| x1.mcpack.key   | 这是资源包 `x1.mcpack` 的密钥 |

## 3. 重启服务器以启用

PowerNukkitX 仅在启动时加载 `resource_packs` 中的文件，因此您需要重新启动才能生效。
