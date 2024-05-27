# 代理配置
通过代理，可以实现多个服务器之间的快速跨服，对群组服的搭建尤为重要.在基岩版中，目前最流行的代理是[WaterdogPe](https://github.com/WaterdogPE/WaterdogPE),
PNX为其专门制作了一个适配版本[WaterdogPe-PNX](https://github.com/PowerNukkitX/WaterdogPE-PNX).  
![waterdogpe](/img/docs/05-proxy-config-waterdogpe.png)  
接下来介绍如何在PNX中使用WaterDogPE.

## 使用教程
你只需要在每个PNX的子服中调整`nukkit.yml`配置中的`waterdogpe=true`,即可使用WaterdogPe.

## 注意事项
1. 当你执行跨服操作之前，你应当通过插件关闭所有玩家的inventory，否则玩家在另一个子服将无法打开inventory.