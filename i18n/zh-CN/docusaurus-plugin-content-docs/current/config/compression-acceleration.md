sidebar_position: 2
title: 压缩硬件加速
description: 压缩硬件加速是 PNX 提供的一个可选功能，它可以利用现代 CPU 上的硬件 SIMD 加速数据压缩。
keywords: [pnx, documentation, introduction, doc, powernukkitx, compression, acceleration, hardware, simd, cpu, instruction set, avx512, avx2, avx, sse4.2, sse4.1, ssse3, sse3, sse2, sse, sve, neon]
---

# 压缩硬件加速

压缩硬件加速是 PNX 提供的一个可选功能，它可以利用现代 CPU 上的硬件 SIMD 加速数据压缩。

## 为什么需要？

PNX 适用于大型服务器。 许多 PNX 服务器同时托管数十甚至数百名玩家，这意味着每个玩家都会生成大量数据。 由于 Bedrock 版本的要求，这些数据必须在发送给玩家之前进行压缩。  
此外，当玩家探索地图时，还必须经常压缩和解压大量生成的地图数据。  
需要压缩或解压的这些数据将消耗大量 CPU 资源。 使用压缩和解压硬件加速可以极大地提高性能。

## 哪些 CPU 可以启用此功能？

如果您的 CPU 可以启用硬件加速的压缩，则 PNX 将在启动时通知您。

当您的 CPU 支持以下任何一个或多个指令集时，可以启用硬件加速的压缩。 支持的指令集越先进，性能改善就越显著：

| 指令集       | 说明         |
|-------------|--------------|
| AVX512      | Intel/AMD    |
| AVX2        | Intel/AMD    |
| AVX         | Intel/AMD    |
| SSE4.2      | Intel/AMD    |
| SSE4.1      | Intel/AMD    |
| SSSE3       | Intel/AMD    |
| SSE3        | Intel/AMD    |
| SSE2        | Intel/AMD    |
| SSE         | Intel/AMD    |
| SVE         | ARMv8.2+     |
| NEON        | ARMv7+       |

## 如何启用？

编辑 `nukkit.yml` 配置文件。  
在 `network` 中将 `zlib-provider` 设置为 `3`。  
以下是一个示例：

```yaml
network:
 # ......
 zlib-provider: 3
```