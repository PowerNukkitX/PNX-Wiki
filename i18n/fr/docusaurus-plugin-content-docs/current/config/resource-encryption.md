---
sidebar_position: 3
title: Chiffrement du pack de ressources
description: Chiffrez votre pack de ressources pour PowerNukkitX
keywords: [pnx, documentation, introduction, doc, powernukkitx, power, nukkit, nukkitx, chiffrement, pack, ressources, resource, encryption]
---

# Chiffrement du pack de ressources

Le chiffrement du pack de ressources signifie que PowerNukkitX vous permet d'utiliser le pack de ressources que vous avez chiffré. Vous devez simplement configurer une clé de 32 caractères pour votre pack de ressources selon le tutoriel ci-dessous afin de permettre au client du joueur de le charger normalement.

Veuillez noter que le chiffrement du pack de ressources ne peut pas empêcher complètement les personnes mal intentionnées de voler votre pack de ressources, car il s'agit d'un chiffrement symétrique par clé `AES`.

Juste 3 étapes, suivez-les et commencez !

## 1. Chiffrer mon pack de ressources

Sur certains sites non gérés par PowerNukkitX ([encryptmypack](https://encryptmypack.com)), vous pouvez facilement chiffrer votre pack de ressources.

Quelques précautions :
- Le pack de ressources doit se terminer par `.mcpack`
- Le répertoire racine du fichier mcpack ne doit pas être imbriqué avec des dossiers. Le fichier `manifest.json` doit être visible dans le répertoire racine du pack de ressources.
- **PowerNukkitX ne contient aucune logique de chiffrement et de déchiffrement, mais envoie simplement des clés de 32 caractères au client selon votre configuration (c'est très important)**

## 2. Configurer votre clé

Le fichier portant le même nom que le pack de ressources doit avoir l'extension `.key`. Le contenu est la clé de 32 caractères correspondant au pack de ressources.

Exemple : Il y a deux fichiers dans le dossier `resource_packs`.

| Nom du fichier      | Description  |
|---------------------|--------------|
| x1.mcpack           | Un pack de ressources nommé `x1` |
| x1.mcpack.key       | Il s'agit de la clé du pack de ressources `x1.mcpack` |

## 3. Redémarrer le serveur pour l'activer

PowerNukkitX ne chargera les fichiers dans `resource_packs` qu'au démarrage, vous devez donc le redémarrer pour que cela prenne effet.