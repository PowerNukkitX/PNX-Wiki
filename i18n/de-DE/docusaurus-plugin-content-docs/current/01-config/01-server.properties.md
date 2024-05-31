---
title: Server.properties
description: PowerNukkitX server.properties configuration documentation
keywords: [pnx, documentation, server-properties, doc, powernukkitx, server, properties, config, configuration, settings, motd, sub-motd, server-port, server-ip, view-distance, white-list, achievements, announce-player-achievements, spawn-protection, max-players, allow-flight, spawn-animals, spawn-mobs, gamemode, force-gamemode, hardcore, pvp, difficulty, generator-settings, level-name, level-seed, allow-nether, allow-the_end, use-terra, enable-custom-item, enable-query, enable-rcon, rcon.password, auto-save, force-resources, xbox-auth]
---

# Einführung: server.properties

## motd=PowerNukkitX Server
Das MOTD, welches dem Client in der Serverliste angezeigt wird.
## sub-motd=https://v2.powernukkitx.com
Der angezeigte Text, über den Spielern im Pausemenü angezeigt wird.
## server-port=19132
Der Port, auf welchem der Server zu erreichen ist.
## server-ip=0.0.0.0
Die vom Server genutzte IP-Adresse (default 0.0.0.0)
## view-distance=12
Die maximale vom Server festgelegte Sichtweite.
## white-list=off
Aktiviert oder deaktiviert die Whitelist (off/on)
## achievements=on
Aktiviert oder deaktiviert Erfolge (off/on）
## announce-player-achievements=on
Aktiviert oder deaktiviert Erfolgsnachrichten im Chat (off/on）
## spawn-protection=16
Der Radius vom Spawn aus, an welchem Spieler vor Angriffen geschützt sind.
## max-players=20
Die maximale Anzahl an Spielern, welche den Server betreten kann.
## allow-flight=off
Entscheidet, ob Fliegen auf dem Server erlaubt ist (Nukkits eigenes Anti-Cheat) (off/on)
## spawn-animals=on
Entscheidet, ob Tiere generiert werden sollen (aktuell nicht relevant) (off/on)
## spawn-mobs=on
Entscheidet, ob Monster generiert werden sollen (aktuell nicht relevant) (off/on)
## gamemode=0
Standardmäßiger Spielmodus
- 0: Überlebensmodus
- 1: Kreativmodus
- 2: Abenteuermodus
- 3: Zuschauermodus
## force-gamemode=off
Entscheidet, ob Spieler bei jedem Beitritt zurück in den standardmäßigen Spielmodus versetzt werden sollen (off/on)
## hardcore=off
Aktiviert den Hardcore-Modus (Tod bedeutet Ban) (off/on)
## pvp=on
Entscheidet, ob PVP aktiviert sein soll (off/on)
## difficulty=1
Schwierigkeitsgrad von Welten：
- 0: Friedlich
- 1: Einfach
- 2: Normal
- 3: Schwer
## level-name=world
Der Name der Hauptwelt, in welcher Spieler landen, wenn sie zum ersten Mal den Server betreten
## level-seed=
Der Seed der Hauptwelt
## allow-nether=on
Entscheidet, ob der Nether geöffnet sein soll (aktuell nicht relevant) (off/on)
## allow-the_end=on
Entscheidet, ob das End geöffnet sein soll (aktuell nicht relevant) (off/on)
## use-terra=on
Entscheidet, ob der Terra-Generator aktiviert sein soll (off/on)
## enable-query=on
Entscheidet, ob der Protokollserver-Listener Serverinformationen anzeigen soll (off/on)
## enable-rcon=off
Entscheidet, ob die Fernsteuerung des Servers aktiviert sein soll (off/on)
## rcon.password=iMDhjOTcxN
Passwort der Fernsteuerung
## auto-save=on
Entscheidet, ob die Welt automatisch gespeichert werden soll (off/on)
## force-resources=off
Forciere den Nutzen der Ressourcenpakete des Servers (off/on)
## force-resources-allow-client-packs=off
Wenn `force-resources` aktiviert ist, erlaubt diese Konfiguration den Spielern ihre eigene Ressourcenpakete zeitgleich zu verwenden. (off/on)
## xbox-auth=on
Aktiviert die Xbox-Online-Verifizierung (Diese Funktion kann nicht authentifizierte Spieler davon abhalten, den Server zu betreten) (off/on)
## check-login-time=off
Überprüft die Loginzeit des Clients. Dies kann die Wahrscheinlichkeit bösartiger Angriffe verringern, kann aber auch einige Spieler daran hindern, sich mit dem Server zu verbinden. (off/on)
## disable-auto-bug-report=off
Deaktiviert das Hochladen automatischer Fehlermeldungen an die Sentry-Plattform (off/on)
## allow-shaded=off
Entscheidet, ob shaded-Pakete verwendet werden können, um den Server zu starten (off/on)
## server-authoritative-movement=server-auth
Entscheidet, ob der Server oder der Client die Bewegungen verifiziert (server-auth/client-auth)
## network-encryption=on
Aktiviert die Netzwerkverschlüsselung (off/on)