---
title: Kompressionsbeschleunigung
description: Hardware Kompressionsbeschleunigung ist eine optionale Funktion von PNX, die die Datenkompression durch die Verwendung von Hardware SIMD auf modernen CPUs beschleunigen kann.
keywords: [pnx, documentation, introduction, doc, powernukkitx, compression, acceleration, hardware, simd, cpu, instruction set, avx512, avx2, avx, sse4.2, sse4.1, ssse3, sse3, sse2, sse, sve, neon]
---

# Hardware Kompressionsbeschleunigung

Hardware Kompressionsbeschleunigung ist eine optionale Funktion von PNX, die die Datenkompression durch die Verwendung von Hardware SIMD auf modernen CPUs beschleunigen kann.

## Why?

PNX ist für große Server geeignet. Auf vielen PNX-Servern spielen Dutzende oder sogar Hunderte von Spielern gleichzeitig, was bedeutet, dass jeder Spieler eine große Menge an Daten erzeugt. Aufgrund der Anforderungen der Bedrock-Version müssen diese Daten komprimiert werden, bevor sie an die Spieler gesendet werden können.
Gleichzeitig müssen beim generieren von Welten durch den Spieler eine große Anzahl von Chunks erzeugt werden, die ebenfalls häufig komprimiert und dekomprimiert werden müssen.  
Diese Daten, die komprimiert oder dekomprimiert werden müssen, verbrauchen eine Menge CPU-Ressourcen. Die Verwendung von Hardware-Komprimierung und Dekomprimierungsbeschleunigung kann die Leistung erheblich verbessern.

## Welche CPU kann das?

Wenn Ihre CPU die hardwarebeschleunigte Komprimierung aktivieren kann, werden Sie beim Starten von PNX darüber benachrichtigt.

Wenn Ihre CPU einen oder mehrere der folgenden Befehlssätze unterstützt, kann die hardwarebeschleunigte Komprimierung aktiviert werden. Je mehr Befehlssätze unterstützt werden, desto fortschrittlicher ist die Komprimierung und desto größer ist die Leistungssteigerung:

| Befehlssätze    | Erklärung |
|-----------------|-----------|
| AVX512          | Intel/AMD |
| AVX2            | Intel/AMD |
| AVX             | Intel/AMD |
| SSE4.2          | Intel/AMD |
| SSE4.1          | Intel/AMD |
| SSSE3           | Intel/AMD |
| SSE3            | Intel/AMD |
| SSE2            | Intel/AMD |
| SSE             | Intel/AMD |
| SVE             | ARMv8.2+  |
| NEON            | ARMv7+    |

## Wie kann man sie verwenden?

Editieren Sie die Konfigurationsdatei `nukkit.yml`.  
Setzen Sie `zlib-provider` in `network` zu `3`.  
Hier ist ein Beispiel:

```yaml
network:
  zlib-provider: 3 
```