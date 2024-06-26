---
title: 硬件压缩加速
description: 硬件压缩加速是PNX提供的可选功能，它可以在现代CPU上利用硬件指令集来加速数据压缩
keywords: [ pnx, documentation, introduction, doc, powernukkitx, compression, acceleration, hardware, simd, cpu, instruction set, avx512, avx2, avx, sse4.2, sse4.1, ssse3, sse3, sse2, sse, sve, neon ]
---

# 硬件压缩加速

硬件压缩加速是PNX提供的可选功能，它可以在现代CPU上利用硬件指令集来加速数据压缩.

## 为什么？

PNX适用于大型服务器，很多PNX服务端同时承载数十名甚至上百名玩家，这就意味着每个玩家都会产生大量的数据，
由于基岩版的要求，这些数据需要被压缩后才能发送给玩家.  
同时，当玩家跑图时，产生的大量地图数据也需要进行频繁的压缩和解压缩.  
这些需要压缩或解压缩的数据将会占用大量的CPU资源，使用硬件压缩和解压缩加速，能够使得性能大幅提升.

## 什么CPU能开启此功能？

如果您的CPU能开启硬件加速压缩，PNX将会在启动时进行提示.

当您的CPU支持下列指令集中的一个或多个时，将可以开启硬件加速压缩，支持的指令集越多越高级，性能提升越大：

| 指令集    | 说明        |
|--------|-----------|
| AVX512 | Intel/AMD |
| AVX2   | Intel/AMD |
| AVX    | Intel/AMD |
| SSE4.2 | Intel/AMD |
| SSE4.1 | Intel/AMD |
| SSSE3  | Intel/AMD |
| SSE3   | Intel/AMD |
| SSE2   | Intel/AMD |
| SSE    | Intel/AMD |
| SVE    | ARMv8.2+  |
| NEON   | ARMv7+    |

## 如何开启？

在`nukkit.yml`配置文件中，将`network`中的`zlib-provider`字段改为`3`即可，例如：

```yaml
network:
  zlib-provider: 3 
```