---
title: Verschlüsselung von Ressourcenpaketen
description: Die Verschlüsselung von Ressourcenpaketen ist eine Funktion, die es Ihnen ermöglicht, Ihr Ressourcenpaket zu verschlüsseln und dem Client einen Schlüssel zur Entschlüsselung zur Verfügung zu stellen.
keywords: [pnx, documentation, introduction, doc, powernukkitx, resource, package, encryption, encrypt, key, manifest, mcpack, aes, symmetric, 32, 32-key, 32key]
---
# Verschlüsselung von Ressourcenpaketen

Die Verschlüsselung des Ressourcenpakets bedeutet hier nur, dass PowerNukkitX Sie dabei unterstützt, das von Ihnen verschlüsselte Ressourcenpaket zu verwenden. Sie müssen nur einen 32-Schlüssel für Ihr Ressourcenpaket gemäß der folgenden Anleitung konfigurieren, damit der Spieler-Client normal geladen werden kann.

Bitte beachten Sie, dass die Verschlüsselung von Ressourcenpaketen nicht vollständig verhindern kann, dass Personen mit Ihr Ressourcenpaket stehlen, da es sich um eine symmetrische `AES`-Schlüsselverschlüsselung handelt.

Nur 3 Schritte, bleiben Sie dran und fangen Sie an!

## 1. Verschlüsseln Sie Ihr Ressourcenpaket
Verschlüsselungswerkzeug:
- [EncryptMyPack](https://github.com/AllayMC/EncryptMyPack)

Bedingungen:
- Das Ressourcenpaket endet mit `.mcpack`
- Das Stammverzeichnis der mcpack-Datei kann nicht mit Ordnern verschachtelt werden. Die Datei `manifest.json` muss im Stammverzeichnis des Ressourcenpakets sichtbar sein.

:::caution[]
PowerNukkitX selbst enthält keine Ver- und Entschlüsselungslogik, sondern sendet nur den Schlüssel an den Client entsprechend Ihrer Konfiguration
:::


## 2. Konfigurieren Sie Ihren Schlüssel

Die Datei mit dem gleichen Namen wie das Ressourcenpaket wird mit der Dateierweiterung `.key` benannt. Der Inhalt ist der Schlüssel, der dem Ressourcenpaket entspricht.

Beispiel: Es gibt zwei Dateien im Ordner `resource_packs`.

| Dateiname       | Beschreibung  |
|-----------------|---------------|
| x1.mcpack       | Ein Ressourcenpaket namens `x1` |
| x1.mcpack.key   | Dies ist der Schlüssel des Ressourcenpakets `x1.mcpack` |

## 3. Starten Sie den Server neu, um die Änderungen anzuwenden

PowerNukkitX lädt die Dateien in `resource_packs` nur, wenn der Server startet.