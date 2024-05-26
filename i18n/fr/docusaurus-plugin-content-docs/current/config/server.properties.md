---
sidebar_position: 1
title: server.properties
description: PowerNukkitX server.properties configuration documentation
keywords: [pnx, documentation, introduction, doc, powernukkitx, server-properties, doc, powernukkitx, server, properties, config, configuration, settings, motd, sub-motd, server-port, server-ip, view-distance, white-list, achievements, announce-player-achievements, spawn-protection, max-players, allow-flight, spawn-animals, spawn-mobs, gamemode, force-gamemode, hardcore, pvp, difficulty, generator-settings, level-name, level-seed, allow-nether, allow-the_end, use-terra, enable-custom-item, enable-query, enable-rcon, rcon.password, auto-save, force-resources, xbox-auth]
---

# server.properties Introduction

## motd=PowerNukkitX Server
Texte affiché dans l'interface utilisateur du client.

## sub-motd=https://powernukkitx.cn
Le nom affiché en haut du menu de droite lorsque la touche ÉCHAP est enfoncée.

:::warning[Sub-Motd et Motd]
Les champs `sub-motd` et `motd` ne sont pas supportés dans les dernières versions de PowerNukkitX.
:::

## server-port=19132
Port du serveur.

## server-ip=0.0.0.0
Adresse IP utilisée par le serveur (par défaut 0.0.0.0).

## view-distance=10
Distance de vue maximale limitée par le serveur (4 à 6 recommandée).

## white-list=off
Activer la liste blanche du serveur (off/on).

## achievements=on
Activer le système de succès (off/on).

## announce-player-achievements=on
Afficher un message de notification lorsque les joueurs obtiennent des succès (off/on).

## spawn-protection=16
Portée de protection de la zone de spawn.

## max-players=20
Nombre maximal de joueurs.

## allow-flight=off
Autoriser le vol (anti-vol et anti-triche de Nukkit) (off/on).

## spawn-animals=on
Générer des animaux (actuellement invalide) (off/on).

## spawn-mobs=on
Générer des monstres (actuellement invalide) (off/on).

## gamemode=0
Mode de jeu par défaut :
- 0 : Mode Survie
- 1 : Mode Créatif
- 2 : Mode Aventure
- 3 : Mode Spectateur

## force-gamemode=off
Forcer les joueurs à utiliser le mode de jeu par défaut lors de la connexion au serveur (off/on).

## hardcore=off
Activer le mode hardcore (la mort entraîne un bannissement) (off/on).

## pvp=on
Activer le PVP (off/on).

## difficulty=1
Difficulté du monde :
- 0 : Paisible
- 1 : Facile
- 2 : Normal
- 3 : Difficile

## generator-settings=
Paramètres du générateur de monde.

## level-name=world
Nom de la carte du monde principal.

## level-seed=
Graine de la carte du monde principal.

## allow-nether=on
Activer le Nether (off/on).

## allow-the_end=on
Activer l'End (off/on).

## use-terra=on
Activer Terra Epic World (off/on).

## enable-custom-item=off
Activer les objets personnalisés (off/on).

## enable-query=on
Activer l'écoute du protocole serveur pour afficher les informations du serveur (off/on).

## enable-rcon=off
Activer le protocole de contrôle à distance du serveur (off/on).

## rcon.password=iMDhjOTcxN
Mot de passe du protocole de contrôle à distance.

## auto-save=on
Sauvegarde automatique du monde (off/on).

## force-resources=off
Forcer l'utilisation du pack de ressources du serveur (off/on).

## xbox-auth=on
Activer la vérification en ligne Xbox (cette fonction peut empêcher les joueurs non répertoriés d'entrer sur le serveur) (off/on).
