---
sidebar_position: 5
title: Configuration du Proxy
description: Avec un proxy, transférez rapidement les joueurs entre plusieurs serveurs, ce qui est particulièrement important pour configurer un groupe de serveurs. Dans l'édition Bedrock, le proxy le plus populaire actuellement est WaterdogPe.
keywords: [pnx, documentation, introduction, doc, powernukkitx, proxy, configuration, waterdogpe, transfert, joueur, serveur, groupe, bedrock, édition]
---

# Configuration du Proxy
Avec un proxy, transférez rapidement les joueurs entre plusieurs serveurs, ce qui est particulièrement important pour configurer un groupe de serveurs. Dans l'édition Bedrock, le proxy le plus populaire actuellement est [WaterdogPe](https://github.com/WaterdogPE/WaterdogPE). PNX a réalisé une version adaptée pour lui : [WaterdogPe-PNX](https://github.com/PowerNukkitX/WaterdogPE-PNX).
![waterdogpe](/docs/waterdogpe001.png)  
Ensuite, nous expliquons comment utiliser WaterdogPE dans PNX.
## Tutoriel d'Utilisation

Vous devez seulement ajuster le fichier `nukkit.yml` dans chaque sous-serveur PNX en définissant `waterdogpe=true` pour utiliser WaterdogPE.

## Remarque
1. Avant de préparer le transfert d'un joueur, vous devriez utiliser un plugin pour fermer tous les inventaires du joueur. Sinon, le joueur ne pourra pas ouvrir son inventaire sur un autre serveur.