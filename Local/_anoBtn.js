
//2015.07.19 16:00 統一黑白系圖標
//2015.06.06 12:00 精簡並換一些圖標
//2015.05.31 18:00 加入更新IP批處理
//2015.05.08 09:00 加入SumatraPDF
//2015.05.03 14:00 調整菜單順序，加入Win8.1優化批處理
//2015.04.27 09:00 加入GoGo Tester
//2015.03.29 20:00 Software和 Plugins分離出配置文件夾
//2015.03.26 12:00 加入ReRe，Winmaster
//2015.03.25 20:00 加入DnsJumper, FastStone Capture
//2015.03.06 15:00 修改快捷方式，把文字改爲繁體
//2015.02.09 20:00 添加清理垃圾緑色版
//2015.01.26 21:00 更新備份模塊

/**********************************************************************************
 *此處爲按鈕設置
 *************************************************************************************/
var anobtnset = {
//※必須設置按鈕放在哪個id之前，alltabs-button，back-button等
intags: "tabbrowser-tabs",

//※必須設置按鈕圖標，像素59x27（默認大小）
image: "data:image/png;base64,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",//背景（相濟茶）文字（白鼠: 220:221:221）

//菜單彈出方向，不設置就默認,參考 https://developer.mozilla.org/en-US/docs/XUL/PopupGuide/Positioning
position: "",
};

/**********************************************************************************
 *child:[  ]内爲當前菜單的下一級菜單配置,支持多級
 *text 爲运行參数，如果无需參数，直接删除text属性
 *exec 爲打開路径，可以是任意文件和文件夹，支持相对路径，相对於配置文件夹；
 *【文件夹】不支持直接“\\”開头的相对路径，需要用【Services.dirsvc.get("ProfD", Ci.nsILocalFile).path】開头
 *oncommand 可以用function(){}；
 *小書簽可以用oncommand:function(){
gBrowser.loadURI("javascript:内容")
 }；
 *-------------------------------
 *除了以上属性外，可以自定义添加其他属性，如果快捷键accesskey等
 *-------------------------------
 *{}, 爲分隔条
 *-------------------------------
 *如果設置了id属性，会尝试获取此id并移動，如果在瀏覧器中没有找到此id，則创建此id
 *************************************************************************************/
 
//下面添加菜單
var anomenu = [{
label: "長期維護",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABaElEQVQ4jX3Sz0vUURQF8M/MYDWRCS2arIgiIZEEXQQSSBFBm6BFC4kKIkjEQCmFaGUUGSoo9GNqkVNBm6AW0a6/I/p7WnzPyJcnduDC495zzn3vvkuFAXTQwDk8xTZ6+JR4gjP2wDV8wU28xlt0Y3YAJ3EbP8Jt1MUtvMQ3/MVHvMd3HCsaLeMPbqHZTx7CBkZxKTGSm1zH/prBqTynm5uAE9jCUNHtCn7iaC3XxDPciKYDd/CwEJ/FemZSYiHmc7gLm7hQIxzBm5AapRqLuIzJaG2rptxHBx9wP10WMJ7aAF6pfud4tHoYLrqM52n38Eu1FzCFtRgN9w26GCsMJvAVv7GE05gOdzKcMbyDx5gpDPZlBs/TcQMrMe5jJlrnM4zDdqOh2sSDaosT7ma0YD5RJ+2FZo2/g0G8wCza/xG38SDcwbI4hEeqN19VfWc70UluLZxya3fQwkWs4rNq73s5r6bWqgv+AYBxON0vXviZAAAAAElFTkSuQmCC",
child: [
{
label: "火狐範 首頁",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('http://www.firefoxfan.com/')",
image: "http://www.firefoxfan.com/favicon.ico"
},
{
label: "火狐範 可用IP",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('http://www.firefoxfan.com/firefox-gaogent/goagent-ip.html')",
image: "http://www.firefoxfan.com/favicon.ico"
},
{},
{
label: "CingFox 發佈頁",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('http://bbs.kafan.cn/thread-1792671-1-1.html')",
image: "http://bbs.kafan.cn/favicon.ico"
},
{
label: "淸 GitHub腳本備份",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('https://github.com/dupontjoy/userChromeJS')",
image: "https://assets-cdn.github.com/favicon.ico"
}, ]
},{},{
label: '備份批處理',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVQ4jc2Quw2EMBBEX0ZEE9ThCsgp42LqIKYOQro5icDRVXCXDNay+GQLEfAkS/7szKwXbqQDvpWryxm8gLkiaFbtiQUYtP+XjGoWL26AD9BWdNCqtrGXPbAW0m0XqzSJCRgr0ndGaRIbEDNJFvsWpUlEIDhDew5OEKQ5uFt6CfbEN+7PXpNrucTDDPzQSvihnoZWWrmhXuMHem9Lmy9WtnwAAAAASUVORK5CYII=",
child: [{
label: "備份批處理",
tooltiptext: "1. 備份Profiles\n2. CingFox製作\n3. 備份Plugins和Software文件夾\n4. 提取32位Flash插件\n5. 備份詞典和user.js到GitHub",
exec: Services.dirsvc.get("UChrm", Ci.nsILocalFile).path + "\\local\\BackupProfiles\\Backup_7z.bat",
}, ]
},{},{
label: '外部打開',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAcUlEQVQ4jbXTvQmFQBBF4S+wCMNXgh1oRfZmblsiYqCBBr7FnxHZCxMt9+yZhSVDfliC8yn5AQV6DBgxJaU/wNN+NeZ9LgFnBsdyvVuEAWnZW4O0DF0UUNoerr0wCxlUd4UI4PZGNF8B8cMoIPvnOc0KNDA9zZlUdtUAAAAASUVORK5CYII=",
child: [
{
label: "在IE中打開",
text: "%u",
exec: "C:\\Program Files\\Internet Explorer\\iexplore.exe",
},
{
label: "在Chrome中打開",
text: "%u",
exec: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
},]
},{},{
label: '軟件列表',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVQ4jWNgoBL4TwSmrQGDD7QRiWlnwMCBrQQw7Q0YOECxswfO3wBrBTGdpowsywAAAABJRU5ErkJggg==",
child: [{
label: 'GFW工具',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADIElEQVQ4jXXP3WtaZxwH8B9UyonnzJko6lHj8aVuiqWwiy0J8RiNMS9W43vBLHFksFAIo7AUBtvtdlcGvck2mrXp1pqk9eBrXezM2plubecoBLb78sChf8Z3F0kxg/WBLzzwwOf7fYiIaM1K2isBcqz7Sdo4yZvuG36SrgTIsWYlLZ2cM9fHNFfvhvmXu2GBbctD7KasZbthgd0J8WxrcojthgVWnhLY1uQQ25ni2d0w//L6mOZqgegMfe0n8XZIOHqY86BbeBfVBRGttAsPC1600i7cn7NgP+/Fz3kv9mYtaKSdaGbc+D7IH33hJ5GuuUjqrrzD/vnsPfz9aQDdkhv99Qs4uuzD01UPOstevPjEj/6qB62cHYcf+fF82YXKvIF96SeJrvlJqmdH2UHJjoMPRTQu2dBZdmE/Z0Q7a0ItJ6GdNqGdHEElbkIjZUNz9i3cCmlPABdJ+xmRdVZceHb5Al6s+fCk5EZ76Rz6H/vwZ8mNRtqG3ooPT4tO/JqxoZGSsDdvZhuvFyizOlbPimhfktBeHEEzaYCSsqN50YDWgh73Zg2oJ0TUpnko0zrsxSz4QRYGQDNpZn+tnkNvyYlWwY3nJS+eLblQT4h4XPTi94KE7qIVtYQDhzkneik7ypHhAbAb4dmDxAiqMR0qCStacQPqUQE7ET1qcRG1iIB7QQ47URPqET2UIIfvPjh7DHzlJ6k+b2CP8nY00k78UXTjSd6B6pwZB3kPemk7OnELlAUbehkJvy3aoESNuBkTBwvKspbVZnTYm7OgNq1DLSygPKWHMmNCJcjhvsyjPG2CEhKgyFrckXXYnBoZLFBiw+ww60AvY4cyY0I360EvZUMnbj7VbEUlasQvGTd6KRtuh/Vs/TWwPckxRdaiGjrWlagRlcn/b1aiRihBDt+OcQOgEh1myowJ3RP9v83Hfz79Vl2w48eY4Rj4PECOG+9r+ltj3KtyZFgtT5xVt8c16g1Zr5aDnPrThEbdHOfUWxG9uj2hUbfGNepm6O1X30xw/bUAOchMxBet5FsZpfNFBwVyp5J8Qy6O0vmklXxmIv5f9JS03spk0uoAAAAASUVORK5CYII=",
child: [
{
label: "Goagent",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\Goagent\\local\\goagent.exe",
},{},
{
label: "更新proxy.ini",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\IP-Update\\更新IP.bat",
},{},
{
label: "打開Goagent文件夾",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\Goagent\\local",
},{},
{
label: "GoGo Tester",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\GoGoTester\\GoGo Tester.exe",
},{},
{
label: "Shadowsocks",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\Shadowsocks\\Shadowsocks.exe",
},{},
{
label: "Freegate",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\Freegate\\fg.exe",
},{},
{
label: "Psiphon",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\GFW\\psiphon\\psiphon3.exe",
},
]
},
/*{
label: '系統優化',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDklEQVQ4jZXOsUsyARzG8ecveDcH/whvuJcGQTgEoeWGaO6oSYcoKgxsuJCGKKGzDsqxhpaO1rCWDgfhEAcX4UJBEtySOGr/vos3Bb01fPlNz4efJGUlrUgq/6KVxU6StN7r9eK3tzd+Wq/XiyWtp8DmbDajUCiwvLz83wqFArPZDEmbKbA9nU4plUocHh6ytbX17S2VSkynUyRtp8DuZDLBsizK5TK1Wu3ba1kWk8kESbspsD8ej8nn8ziOw+XlJY7j0Gq1+Pz8pNFo4DgOV1dXOI5DPp9nPB4jaT8FDuI4xjRNfN8nSRKenp64v7/n4+OD29tbnp+feX9/5/z8HNM0ieMYSQcp4A6HQ3K5HLZt8/j4SJIkjEYjXl5eGI1GJEnCw8MDtm2Ty+UYDodIclPgaDAYYBgG1WoVz/OIooiTkxMsy+Ls7IwoivA8j2q1imEYDAYDJB2lwHG/3yeOY9rtNkEQcHd3h2EYGIaBaZoEQUAQBLTbbeI4pt/vI+k4BRpRFOG6LvP5nL29Per1OmtraywtLbGxsUG9XmdnZ4f5fI7rukRRhKRGCnjdbpdisUgYhtzc3LC6uvql6+trwjCkWCzS7XaR5KXARafTIZPJUKlU8H2fbDb7Jd/3qVQqZDIZOp0Oki5S4LTZbL6GYchPazabr5JOU8BevNP6Rd5iJ0n6I8mQ9PcXGYud/gF//OGff/Oi9wAAAABJRU5ErkJggg==",
child: []
},*/
 {
label: '其它軟件',
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwUlEQVQ4jZ3Tv08aYRwG8PdPabqbhmiiqO8dhNkF4sIRcMFBatJGFnFWF4emRq+hQ5uIwOCJcWEyOkBPoyWpkzFKXNSXE1G50+SbA58OtPaHR9Lrk3yG9/s868uYQyT13COpYt6nXi741MsFSRXzknrucdo6JpA2pgPLYo4viThfEvHAspgLpI1px3Fo+6Iv/KWWVHQxE9FFKlo2ZsPFq7PojqFFdmvJyG4tGd0xtHDx6ixaNmYjukgpuphRyrWp0PZFH4t9vdmfOLEfX5+28FOi2vrj7XSbOLEfYwc3FRarmJSoAolTl6pArGISU/ZMGj8C4i6NHwHKnklstGTR2CEw9s2lQ2C0ZBELblkU3gf+R3DLIjZStChYApyEyh3d+pGiRcy/2iB/zoTvBzlrQso0MfzpFv0frtGvXoN/voWUaULO/tr5cib8qw1icr5J/g0bTwodPPeAl2+P8eLNMYazD0/337dyvkmM5y2SN4G/SetteN438OpdA1xrP+vlTYDnLWLezD0NaoB37blBraNb583cExtaudN5wW5LGy24wQt2e2jlTme9i6JnIF2fHPhYT7mSrk/2Loqef/6h3fIdt9x6jwguSQ8AAAAASUVORK5CYII=",
child: [
{
label: "SumatraPDF",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Plugins\\SumatraPDF.exe",
},{},{
label: "PicPick",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\Other\\PicPick\\PicPick.exe",
},{},{
label: "ScreenToGif",
exec: Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\..\\Software\\Other\\ScreenToGif.exe",
},]
},]
}, {},
{
label:"常用功能",
image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVQ4jWNgGCzgP5l4EIFRLwwGMIScOvgAAMPmMc89jdNcAAAAAElFTkSuQmCC",
child:[
{
label: "打开文件",
oncommand: "BrowserOpenFileWindow();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVQ4jc2TIQ7CQBBFe6iKymaDrOglSLCEO1TUIZpWrMVxAVA1YDE4ktWtILRd9tuPAQJhW9gqJnlu5s2I+R4AGmMOWuvQG1MAuFjPqWpFAM54ABikPifLkHmZEQCllBRCfOVN8CAuIu5PO+pOs7m0vfQKgtTnbDWlMYZt07kJ4iLi9rih1tfB7VZBXmasztXg1l6BqhW79rdBqyBJEqfhD4EQ4g8EY3gKbNiara/8mgkXgTVUTqfbBE4pvNcNewXq3i7Rq+4AAAAASUVORK5CYII="
//chrome://browser/skin/places/query.png
},{
label:"安全模式",
oncommand:"safeModeRestart();",
image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAYAAADphp8SAAAA+ElEQVQ4jZ2RsWoCQRCGPxArm0AaS18hjyD4AkL6NCkD6W1SBZ9ACIE0gTQ+QcA+WEiihNsZEAQR7jX+FN7Fi+ztaQZ+WHZ2vpn5FxKhjK6cpYx3LWin3iZDzkRGLiOXc/9fSP8XstdWRu88yIK2jI8C8CDjsTi/nQcy7sopKuD9ZIHhqZCejHVR6JX7csVPfXHRDHJeK0UxUC5jnIYEBkcFcZCzU8ZVHLKiUzH48FNTWn88OmimKa2YN6PI41zGk4znaC5wGzN4WwNKaa2Mbp3Bx7qRc12bD7yUBg8bul5qRUfOJgEbIGOeBDlBxndDs1nTWqfJmfwARR6yNNqQ6gIAAAAASUVORK5CYII="
//chrome://mozapps/skin/extensions/alerticon-warning.png
},
{},
{
label:"权限管理",
oncommand:"getBrowser().selectedTab = getBrowser().addTab ('about:permissions')",
image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4jb2RMWrDQBBFB58ipAoBY9dpcgUhreZXkq9j2IDZyoWPEFBjq0wtBCs3qnwGoQ2pLMUkuNsUjkwcK1GQIR9+M/z/ltkhalGRyqHRMjaZrE0ma6NlXKRy2JY9U6nlqNRya7IH+9WllttSy1En4PDyafloLeNuQCbrXwC7fwBcvEIyHf/0iSaZjjsBRIdLPOfzxKxne7Oe7V/yefqnCxDRQAgxAbCKoujRfmq5XMbMHAshJkQ0aG06jnPDzDkAC8AGQbCrqsrWdW3DMHxr5syce553e1Jm5msARRNqrJSySin7fQ6gcF336ggA8NQS6vKqKd/3KFsA1vf9O2LmRV8AMy+ImTcXADbEzK99AQDePwAYFoz1UsLQGwAAAABJRU5ErkJggg=="
//chrome://mozapps/skin/passwordmgr/key.png
},{
label : "证书管理",
oncommand: function () {
window.open('chrome://pippki/content/certManager.xul', 'mozilla:certmanager', 'chrome,resizable=yes,all,width=600,height=400');
},
image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVQ4jcWSqw7CMBSG93y1yGZvMLHUV6Ga6YkmhHdoFkIHZqllQRAwMyMQxLJNcAnIH1fBEN0m9ifHHPHlOxfPmzyMMYwpjzGGoekADmWDUBqE0uBQNv0BVGgQrkC4AhW6P8CPUgvwo9T2kyTp1F9AXlSgQoMKjbyo+hlc6yeCOEP7+KC+vxFKg1v7cjcI4gyEKyz0EcvNCYQrhNK4G8zmKzv/7yKdDNa7c+cK2/3F3WBILGDUK0+eLwDMbVc5IMVkAAAAAElFTkSuQmCC"
//chrome://mozapps/skin/extensions/category-dictionaries.png
},{
label : "密码管理",
oncommand: function () {
window.open('chrome://passwordmgr/content/passwordManager.xul', 'Toolkit:PasswordManager', 'chrome,resizable=yes');
},
image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWP49u3bf0oww7dv3/47OTlhxfjkYPL0MwDZ2XgNIMbfBA3A5yKKDSAYBjQ3gGA6GBxeICYKiUpIxLhokBhACQYASZecRxjAXUYAAAAASUVORK5CYII="
},{
label: "Cookies管理",
oncommand: function () {
window.open('chrome://browser/content/preferences/cookies.xul', 'Browser:Cookies', 'chrome,resizable=yes');
},
image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jaWTP2sUURTFXxGSzi+Q+BHUQnSZ95SkHdh2miyMe+9JYZPNksZiTQimFCz8RzJ3ujBPsJ2vIGyRIrFM8ZgupU0iDhn02rgblt11BQ+c8v4e591zjTHGbByYpY601rrH0b1n0nqYSut+R1prGwdmySwSZdEbFnvDudMpi2soc+/+DhB7QmIHlLt9lmivm9kXLNEe5W6fxA5I7EnnbevOXMDMl3OnLE+UD9uK/qYy8zWAKwBDIuolSbJ8CxDXTA1/XFf0Ouq91xCC1nWtdV1rCEG99wrgLE3TVWOMMd3M7rJE/W5mdymzL+no6Ws8Ty/LstR5KstSmfk8juOV2whib1jcN37V/l4UxcQAgClIURTKzNtTf4D+poYQFgJCCApgaEjsgHP3mcQNWdwFg341TbMQ0DSNAqgN5e4HiRtybj+R2GNs8c9ZgJFHqutaAVz9U4RZGkdgcV8mVnnYVu/9QoD3XomoZ0a3QB8e3eWjxw/S9+sRtroXi9YI4Gscxysz25mm6SqAM++9VlU1LlJVVeq9V2Y+HxdpnpIkWQaww8ynzHz9x6cAdiaq/L/6DbRoFO5cdXo+AAAAAElFTkSuQmCC"
},{},{
label: "错误控制台",
oncommand: "toJavaScriptConsole();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVQ4jaWT0QnAIBBDs9dboUs5VQewe51fFim21ksgv48kEMkVUIFIugqIrIC4AUc5tzwFdKUBVgJ7A0khKQ/oGiEr4GuFv0mWCbYAsw2edUZ/VkglcADOmS77zQ2WT6Il/QiZvAAAAABJRU5ErkJggg=="
},{
label: "故障排除",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('about:support')",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jZWTv2siQRTH34zZrPtDd7JRg8IiyB7YmCZVqitTWoUUIlcGsU5xhYRDLFIEi/wpB4EjXWTezC52V6aUFEcIxxUSgsi7xt1MTHNXfJvhfT+89533gIiYFqKfCjFKKpWLf5EWYqSC4IyIGGgh+ijEZyJimdJGI1KuO0DbnqJlTdF1z+fNZt2sScLwJAmCU0iFGGWPPw4PPeU4NxJghQC0pVflONe3cWznECEuIalULnKzZc0QgLBQWCDAOjNLgJXk/BEBCC3rLoO8AyjHuUEAwp2dn7pWO9C+P0SAtQRYqXK5l4ZhhJw/IAApx7l6B0gbjUgCrLBQWOha7SBrUfv+UJXLvTybMIwk50+SsZf7OK7mAOW6g027a+37QzNMMzwslb7mY3lePwegZU2NsNbK9wdpoxEhY0vJ2O9Zp7NnmhGAVLE4eQPY9tQMTJXLvXmzWUfG/kjOf81brSDLxACM3wCue26as5Znnc7evNUKzEwyiDZHmDebdQR4lZw/pmEYmTMr3x/kgGr1E3L+jIwtk3Z7f/sbrxGAkPOHNAwjY+a18v3BxrxAAFKuO/6wB3h87KBl3SEASc6ftrZwjZw/IwDh7u73+dGRlQO0scq3cWwrx7mSAC8fVpmxpXLdcWbeHOE3UEFwloThiXko93FcVZ73RRaLE1UsTrTn9ZN2e9+s0UJ0danUBSJiSRCcJkJc/o+0EF0iYn8BuVi9441UyUkAAAAASUVORK5CYII="
},{
label: "关于about",
oncommand: "gBrowser.selectedTab = gBrowser.addTab('about:about');",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAtElEQVQ4jd1TsQ2EMAzMHjRsBgv8BEzDHkjWN7SZIVToKaxI9rX+CvSEBJDo/qTrzpfYPjuXQERaAATAEpKItKl+AzPXquopRGuG2ap+2rEZZqMQTVU9M9e5Yn69P4fClN24mKryzkRVfTcuB/GKgonfeqYQs6+VDKp+MgrRRKR1ACjX8xWbYTYA5AAURWc/qPrJANifGBSHeGawDfHxGtcg5VJ4K0i/Uc6l8VaUHx/Tk3P+AlfnolljYUMNAAAAAElFTkSuQmCC"//chrome://global/skin/icons/information-16.png
},
{},
{
label: "遥测数据",
oncommand: "getBrowser().selectedTab = getBrowser().addTab ('about:telemetry')",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4jaWT0Q2AIAxEOwuu4xb90yHQDXSWSjqM7nJ+SQhCrHDJ/ZDcS0mvNK4Kq6mkbgAzI5eIvN6YGUREkzrfBACASZ2fdcALICJVPwrXjlkHFAFfE6Th34A8nLv6BUs4AmoTHOfWB7BATFvIIU09SCHtRQpu+V2kx7HKwS1dt1A8JqtL+Rs/6HojeMztlwAAAABJRU5ErkJggg=="
//chrome://browser/skin/Geolocation-16.png
},
{
label:"代码速记",
oncommand: "Scratchpad.openScratchpad();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVQ4ja2SvUrEQBSFL7KFlW1SpvINJpN7zgNoYacidoG7D+ArLCLsFrZ5BxG0mMLS0lTbrW+Ryk6LsUkkaNzEnwMHhoHv486PHC0e4tTKUP4sMLP4OSGEL3tm9j8CAFckXwAcfwhCCKM1s6iqFyQjyQjgFcDJ5Anquo7OuRTAcych+TZJUFVVLMsyisjMe5/0JWJm8bv24aZpIskbVT3tJABWgxfbBcASwNo5l5K8A3Dfrufe+70xeDUEA1gDuNwKq+piC7x97CzLdknOfwWLyA7JJ+99QvIMwO1PYMnzfL99no33PhGRWQsvR+H27Oe9T7JxzqWqejgJbgUHABqSjwCui6LgGPMOxkxvJUAHypcAAAAASUVORK5CYII="
}
]
},{},
{
label: "書簽管理",
oncommand: "PlacesCommandHook.showPlacesOrganizer('AllBookmarks');",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABS0lEQVQ4jY1SzUoCURi9IL5CVJuEKAoShNk5ejnnPEQEQgQiGESrgt4gaC0qhSHVoh96ETe+SJt2peBt802MMlNz4YO55/vOz3cZ53KOpIGkYDXIm8s8ANYlBZILkgtJoV6vrxUWIDky5zeS7/Z9V9T9wNznjUZjF8Aeybmk4L3fzyO1SA5JTrP2Jnmb4CSnJIcAWqtxk/qSNGk2mxuJQBzHm5Imkr7TsyRHLiEB6AKoRVFUzlsviqIygBqArhmF3wQkn5xzpQLPVCL5kk6wJenTgP5/bJJ9S/0Rx/Gmc8457301tdd5HlnSRTLnva8uNQGcmUCvgPtpVvPGBC7/SHAlKQC4zmq+msChJaqQ7JPsAagYdmQzz1kJHqx5THJMcpZ6lxnJewAndh9nJeis/FBB0qPVEg6gnbdjx5J0JG0nuPd+B0Cb5HiV/AOStMNZrdTkSAAAAABJRU5ErkJggg=="
}, {},{
label: "打開選項",
oncommand: "openPreferences();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4jY2SP0sDQRDFr1UEUTRW+Q7iieGO7N57z8I/WJvSxlJrQS2sbSz9BulESGUEQRtbGwULrdKJaCEE03g2k3DGu1wWlllm5/dm9rFBMGIB2JPUIvkpqQVgd1T9YNVqtQWSbUlpzj4vFSB5JSkl+QKgUa/XZwDskPyRlAJYLBs7lfTqnJs3wU1JPcvf92Mcx5V/ApIurUsjk/u2iW4sPli8yBN4N4G5TG7gAcnnOI4rdn7Le/+HpDSKotkcgZ5zbimKogkT6P6BkySJMp2SIp+SJNmwuusi+LQIDsNwmuSj1R2Wws65FQBTYRhOAtiS9GR1d0EQBAGA5SIYwFHeZyJ5672v9k1r2sVZEUzyi2SXZBvAwbDrHUmp975K8tlcP+7DANaL/BieYN97X5V0MjZsAtsF71wrhbMiJJskOxZXx2V/AYbjyhDulDKPAAAAAElFTkSuQmCC"
}, {},{
label: "附加組件",
oncommand: "BrowserOpenAddonsMgr();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfElEQVQ4jc2SSwqFQAwE+14KSWWn1/YqosfwrRzEEeNv8RqyCZki3RnpSwFDRCwRsQBD1q+0Dq2V9SVJZtYB034oK2Ays05PHm8hZT13b69m5e5tsXPkq/J5klcFyEJMAa83uKo/BNw5I9AUwMuPNAvogfkBYAT6u9Yr/QBtWNOEJkNI4gAAAABJRU5ErkJggg=="
}, {},{
label: "關於瀏覧器",
oncommand: "openAboutDialog();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKUlEQVQ4jY3TS0qDQRAE4C+J0ZVuRXxeQVyLG0lOoCB4EkWiN4gHUEFFBRcKIm68h89tFHxeQMHF9C/JmAQLZjPTVT1TU00nBlHDMZ7wHesp9mpR0xWj2MYbbrGDNaxjF3d4RzNq/5DPg7yGcZTazkuYwAY+cNYuUg3VVyxlxAXMZ0Ir0agZXHW8ROd2cgUH2EM5E2lEwxrJnJu4Yo6xWDmmcY8jaEkmdUMdi132S3G7FnxJTucYwKVkbqXL+WZwewpUcYWLEOsp0JKMKmUF/QTKOCye0MvEfgIzeBAm1vGM5ayoIgXmVKcHZWxp+8YhyekJDGfd5jCbkVelNP4GqcAUriVzJnWGpxznW/iURbnAiDRM7/G+fSlxDenPH/UZpgLFOJ/45zj/ADriSwEdnrkgAAAAAElFTkSuQmCC"
}, {},{
label: "重啓瀏覧器",
oncommand: "Services.appinfo.invalidateCachesOnRestart() || Application.restart();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVQ4jX1Su0pDQRC9hVjEVysBX8FCiKTZIsgumznnH2wikUQR9EsEwVrBwkrBXoPGSvATJIrxFcR8gkVAr81svIk3LizsnnmdOTNRNOSUSqUVknG4AA6H+fYdEVkDcEKyrYF7JL/0fSEii6mBJOdI1pNVScZq8wDeNMmniCz3BXvvZ0g+a1BbRLadc7P5fH40+BSLxUmSx5qkKyJLyep1NVxaayf+a5HkkRba6vWswa/GmCnFqgBaoQXFRgDsA/gmGfcYADhVYFsrVAY1EJFpADcJ/KBHCcA7ydh7P6P/B2V0q4kdyQ/F7kgeACgnE3RJxkGwMDIR2Q2CDU5G8fIwBvfqtJMQLAbwQnJV8d82ggZB1SBqyq0ow5r+j0OCda3wZIzJKFYm2dR2moGuMSZD8lH9N5I6XCVWdTxt/oVCYQzAufpd9xmdc7nEqrZEZNNam42iKLLWZknWwl6QbDvncn8qiMg8ycaQ/sNteO8X0nf0N1EVwBmAjjLq6H8jzf8HTUH5xYEpCK8AAAAASUVORK5CYII="
},{}, {
id: "appmenu-quit",
label: "退出瀏覧器",
class: "menuitem-iconic",
oncommand: "Application.quit();",
image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtElEQVQ4jY2ST0gUYRjGn9m1Yb/d+WZ3/u/MzsqMMy4uC0ogDawEkuDBhCCQlAg9SBety4aXooiQPRh0bUnKQ38gKOlkFpGEWmQEJRsVKaXW6qpdlDp0mC4aW2L1Xj543uf3vu/3fh/w92gEcB5A9T98O6O5uTnEcdxkJBLxo9Fo4X85DcBZAPt6enpCyWTyhWmaK5Zl3drKtwMYAEB2kISQBCFkihDygxAymcvlZNd1p13XLafT6eGuri6ZEPKJEPKdEHLHMIxwJR+klN6RZbkcj8eXPc8rjI6OxhzHeeo4Trm2tvZaoVAINzQ03Nc07bMoil8ppRd/0ZIkHRZFcS2RSCy2tLTc3djYUFpbWyO2bT+3LKvsuu51AJidnU17nvfEMIwFQRCWFEXZu13ghqZp5bq6uuLY2Fj91hJjyWRyxjTNck1Nzc3tZoODgwcty/qoquqaJEkX0NTURGVZnlFVdbWxsfHqtnFgYIDquv5SEIRv1dXVt7d13/f3ZDKZcUVRVlVVvQfP80xZlouyLK+n0+nTlYvp7u4+lc1mp/r7+49U6qlUaliSpHVN0ybQ29urKYryShCEdcMw8pXGYrHIbm5uxn3fD/z21pp2SxCEdV3XH8D3/SrTNMcppSuxWOxxR0dHcLdPAgCZTCYei8WKlNKy4zhXAADZbPYMx3Gr4XB4mef5k38rwHHcpUgksszz/Ep7e/tRAMDIyIiTSCResyy7yLLsQiAQOAGA/YONVlVVDYZCoS8sy352XffR3Nxc9Fe2r6/vWDQaXQoEAgvBYLDEMMxDAOcA9APIA5gOBoPLDMMsqqr6Pp/PH9gxXi6XO67r+hsAJQAlhmFWAaxtnSWGYUq2bc8MDQ0d2vWOExMT+9va2i7btv2M5/l3lNIPoii+TaVSk52dnUPz8/P1lf6fdmi4VMHjbpAAAAAASUVORK5CYII="
},]