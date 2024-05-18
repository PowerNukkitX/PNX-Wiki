# server.properties Introduction
## motd=PowerNukkitX Server
Motd text displayed on client UI
## sub-motd=https://v2.powernukkitx.com
The name displayed at the top of the right menu when ESC is pressed
## server-port=19132
Server port
## server-ip=0.0.0.0
IP address used by the server (default 0.0.0.0)
## view-distance=12
Maximum viewing distance limited by the server
## white-list=off
Enable server whitelist (off/on）
## achievements=on
Whether to open the achievement system (off/on）
## announce-player-achievements=on
Whether to send a prompt message when player gets achievements (off/on）
## spawn-protection=16
Protection scope of birthplace
## max-players=20
Maximum number of player
## allow-flight=off
Whether flight is allowed (Nukkit's own anti-flight and anti-cheat) (off/on）
## spawn-animals=on
Whether to generate animals (currently invalid) (off/on）
## spawn-mobs=on
Whether to generate monster (currently invalid) (off/on）
## gamemode=0
Default game mode
- 0: Survival mode　
- 1: Creation mode　
- 2: Adventure mode　
- 3: Spectator mode 
## force-gamemode=off
Whether the player is set to the default game mode when joining the server (off/on）
## hardcore=off
Enable limit mode (death means ban) (off/on）
## pvp=on
Enable PVP (off/on）
## difficulty=1
World difficulty：
- 0: peace
- 1: simple
- 2: ordinary
- 3: difficulty
## level-name=world
Name of main world map
## level-seed=
Main World Map Seed
## allow-nether=on
Whether to open the lower world (currently invalid) (off/on)
## allow-the_end=on
Whether to open the end world (currently invalid) (off/on)
## use-terra=on
Whether Terra Epic World is enabled (off/on)
## enable-query=on
Whether to enable protocol server listener to display server information (off/on)
## enable-rcon=off
Whether the server remote control protocol is enabled (off/on)
## rcon.password=iMDhjOTcxN
Remote Control Protocol Password
## auto-save=on
Auto Save World (off/on）
## force-resources=off
Force the use of the server's resource package (off/on）
## force-resources-allow-client-packs=off
When opening `force-resources`, allowing clients to use their own resource packs at the same time requires enabling `force-resources` for the feature to take effect.
## xbox-auth=on
Enable Xbox online verification (this function can prevent unlisted player from entering the server) (off/on）
## check-login-time=off
Check the client's login time.This can reduce the likelihood of malicious attacks, but it may also prevent some players from connecting to the server. (off/on）
## disable-auto-bug-report=off
Disable automatic error report uploads to the Sentry platform. (off/on）
## allow-shaded=off
Whether allow the use of shaded packages to start the server (off/on)
## server-authoritative-movement=server-auth
Server move validation mode (client-auth/server-auth)
## network-encryption=on
Enable network encryption (off/on)