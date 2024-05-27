var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: black; 
border-radius: 3px 0 0 3px; 
padding: 2px 2px 1px 10px; 
background: #00DC82
`
var styleTitle2 = `
font-style: oblique;
font-size:20px;
font-weight: 400;
color: white; 
border-radius: 0 3px 3px 0; 
padding: 2px 10px 1px 10px; 
background: #212121
`

var styleContent = `
color: rgb(30,152,255);
`

var styleCopyinfo = `
color: #8b8b8b;
`

/* 内容代码 */
/* 这不是彩蛋代码，真的不是哦 ;-) */
var title1 = '✨ PowerNukkitX'
var title2 = 'SUS ඞ'
var content = `
🏡 Website: https://www.powernukkitx.com
🏡 Discord: https://discord.gg/BcPhZCVJHJ
🏡 QQ Group: https://jq.qq.com/?_wv=1027&k=6rm3gbUI
🏡 Wiki: https://wiki.powernukkitx.com
🏡 Github: https://github.com/PowerNukkitX 
🔧 Version：PNX Wiki-0.0.1

Click to have a surprise / 点该链接有惊喜 https://rmc.ink/funny 
`
var copyinfo = `
2019 - 2024 © PowerNukkitX
Powered By Docusaurus
`

console.log(`%c${title1} %c${title2} 
%c${content} %c${copyinfo}` , styleTitle1, styleTitle2, styleContent,styleCopyinfo)