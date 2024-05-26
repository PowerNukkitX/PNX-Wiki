---
sidebar_position: 2
title: Accélération matérielle de la compression
description: L'accélération matérielle de la compression est une fonction optionnelle fournie par PNX, qui peut accélérer la compression des données en utilisant le SIMD matériel sur les CPU modernes.
keywords: [pnx, documentation, introduction, doc, powernukkitx, compression, acceleration, hardware, simd, cpu, instruction set, avx512, avx2, avx, sse4.2, sse4.1, ssse3, sse3, sse2, sse, sve, neon]
---

# Accélération matérielle de la compression

L'accélération matérielle de la compression est une fonction optionnelle fournie par PNX, qui peut accélérer la compression des données en utilisant le SIMD matériel sur les CPU modernes.

## Pourquoi ?

PNX est adapté aux grands serveurs. De nombreux serveurs PNX hébergent des dizaines voire des centaines de joueurs en même temps, ce qui signifie que chaque joueur génère une grande quantité de données. En raison des exigences de la version Bedrock, ces données doivent être compressées avant de pouvoir être envoyées aux joueurs.  
De plus, lorsque les joueurs explorent des cartes, une grande quantité de données de cartes générées doit également être compressée et décompressée fréquemment.  
Ces données qui doivent être compressées ou décompressées consommeront beaucoup de ressources CPU. Utiliser l'accélération matérielle de la compression et de la décompression peut grandement améliorer les performances.

## Quels CPU peuvent activer cette fonction ?

Si votre CPU peut activer la compression accélérée par le matériel, PNX vous le signalera au démarrage.

Lorsque votre CPU prend en charge un ou plusieurs des ensembles d'instructions suivants, la compression accélérée par le matériel peut être activée. Plus l'ensemble d'instructions pris en charge est avancé, plus l'amélioration des performances sera importante :

| Ensemble d'instructions | Explication   |
|-------------------------|---------------|
| AVX512                  | Intel/AMD     |
| AVX2                    | Intel/AMD     |
| AVX                     | Intel/AMD     |
| SSE4.2                  | Intel/AMD     |
| SSE4.1                  | Intel/AMD     |
| SSSE3                   | Intel/AMD     |
| SSE3                    | Intel/AMD     |
| SSE2                    | Intel/AMD     |
| SSE                     | Intel/AMD     |
| SVE                     | ARMv8.2+      |
| NEON                    | ARMv7+        |

## Comment l'activer ?

Modifiez le fichier de configuration `nukkit.yml`.  
Définissez `zlib-provider` dans `network` sur `3`.  
Voici un exemple :

```yaml
network:
 # ......
 zlib-provider: 3
```