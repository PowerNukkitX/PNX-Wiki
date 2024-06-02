# Proxy Konfiguration
Verwenden Sie einen Proxy, können Sie Spieler schnell zwischen vielen Servern verschieben,
was besonders wichtig für die Einrichtung eines Netzwerks ist. Die beliebteste Proxy-Software ist derzeit [WaterdogPE](https://github.com/WaterdogPE/WaterdogPE).
PNX hat dafür eine angepasste Version erstellt: [WaterdogPE-PNX](https://github.com/PowerNukkitX/WaterdogPE-PNX).
![waterdogpe](/img/docs/05-proxy-config-waterdogpe.png)
Im folgenden erklären wir Ihnen, wie man WaterdogPE mit PowerNukkitX verwendet.
## Verwendung

Um PowerNukkitX mit WaterdogPE zu verwenden, müssen Sie für jeden Unterserver in der Server-Konfiguration (`nukkit.yml`) die Einstellung `waterdogpe` auf `true` setzen.

:::note[]
Bevor Sie einen Spieler auf einen anderen Server verschieben, sollten Sie ein Plugin verwenden, welches alle Inventare eines Spielers schließt. Andernfalls werden Spieler nicht mehr in der Lage sein, Inventare auf einem anderen Server zu öffnen.
:::
