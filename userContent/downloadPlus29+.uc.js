// ==UserScript==
// @name         downloadPlus.uc.js
// @description  从硬盘中删除+下载重命名并可转码+双击复制链接+另存为+保存并打开+完成下载提示音+自动关闭下载产生的空白标签
// @author       w13998686967再次修改整合 (ywzhaiqi、黒仪大螃蟹、Alice0775、紫云飞)
// @include      chrome://browser/content/browser.xul
// @include      chrome://browser/content/places/places.xul
// @include      chrome://mozapps/content/downloads/unknownContentType.xul
// @include      chrome://mozapps/content/downloads/downloads.xul
// @version      2014.11.02 增加多个功能
// @version      2014.06.06 add delay to fix for new userChrome.js
// ==/UserScript==
(function() {

    switch (location.href) {
	    case "chrome://browser/content/browser.xul":
		    setTimeout(function(){
			    downloadsPanel_removeFile();       // 从硬盘中删除
			    downloadSound_Play();              // 下载完成提示音
				downloadFileSize();                // 精确显示文件大小
				autoClose_blankTab();              // 自动关闭下载产生的空白标签
				saveAndOpen_on_main(); 		       // 跟下面的 save_AndOpen 配合使用
				download_dialog_changeName_on_main()// 跟下面的 download_dialog_changeName 配合使用
			}, 200);	
            break;
        case "chrome://mozapps/content/downloads/unknownContentType.xul":
            setTimeout(function(){
			    save_And_Open();                   // 保存并打开
                download_dialog_changeName();      // 下载改名
                download_dialog_saveas();          // 另存为...
				download_dialog_saveTo();          // 保存到...
				download_dialog_showCompleteURL(); // 下载弹出窗口双击链接复制完整链接
				download_dialog_doubleclicksaveL();// 下载弹出窗口双击保存文件项执行下载		
            }, 200);
            break;
		case "chrome://browser/content/places/places.xul":
		    setTimeout(function(){
                downloadsPanel_removeFile();       // 从硬盘中删除(我的足迹)
			}, 200);	
            break;
    }
    
	// 下载完成提示音
	function downloadSound_Play() {
	    var downloadPlaySound = {
        
            DL_START : null,
            DL_DONE : "file:///C:/WINDOWS/Media/chimes.wav",
            DL_CANCEL: null,
            DL_FAILED: null,
            
            
            _list: null,
            init: function sampleDownload_init() {
                XPCOMUtils.defineLazyModuleGetter(window, "Downloads",
                        "resource://gre/modules/Downloads.jsm");
            
            
                window.addEventListener("unload", this, false);
            
                //**** 监视下载
                if (!this._list) {
                  Downloads.getList(Downloads.ALL).then(list => {
                    this._list = list;
                    return this._list.addView(this);
                  }).then(null, Cu.reportError);
                }
            },
            
            uninit: function() {
                window.removeEventListener("unload", this, false);
                if (this._list) {
                  this._list.removeView(this);
                }
            },
            
            onDownloadAdded: function (aDownload) {
                 //**** 开始下载
                if (this.DL_START);
                  this.playSoundFile(this.DL_START);
            },
            
            onDownloadChanged: function (aDownload) {
                //**** 取消下载
                if (aDownload.canceled && this.DL_CANCEL)
                  this.playSoundFile(this.DL_CANCEL)
                //**** 下载失败
                if (aDownload.error && this.DL_FAILED)
                  this.playSoundFile(this.DL_FAILED)
                //**** 完成下载
                if (aDownload.succeeded && this.DL_DONE)
                  this.playSoundFile(this.DL_DONE)
            },
            
            playSoundFile: function(aFilePath) {
                if (!aFilePath)
                  return;
                var ios = Components.classes["@mozilla.org/network/io-service;1"]
                          .createInstance(Components.interfaces["nsIIOService"]);
                try {
                  var uri = ios.newURI(aFilePath, "UTF-8", null);
                } catch(e) {
                  return;
                }
                var file = uri.QueryInterface(Components.interfaces.nsIFileURL).file;
                if (!file.exists())
                  return;
                
                this.play(uri);
            },
            
            play: function(aUri) {
                var sound = Components.classes["@mozilla.org/sound;1"]
                        .createInstance(Components.interfaces["nsISound"]);
                sound.play(aUri);
            },
            
            handleEvent: function(event) {
                switch (event.type) {
                  case "unload":
                    this.uninit();
                    break;
                }
            }
        }
        downloadPlaySound.init();
    }
	
	// 从硬盘中删除
	function downloadsPanel_removeFile() {
	    var removeDownloadfile = {
	    	removeStatus : function (){
	    		var RMBtn = document.querySelector("#removeDownload"),
	    			listbox = document.querySelector("#downloadsListBox") || document.querySelector("#downloadsRichListBox"),
	    			state = listbox.selectedItems[0].getAttribute('state');
	    			RMBtn.setAttribute("disabled","true");
	    		if(state != "0" && state != "4" && state != "5") 
	    			RMBtn.removeAttribute("disabled");
	    	},
	    	
	    	removeMenu : function (){
	    		try{removeDownloadfile.removeStatus();}catch(e){};
	    		if(document.querySelector("#removeDownload")) return;
	    		var menuitem = document.createElement("menuitem"),
	    			rlm = document.querySelector('.downloadRemoveFromHistoryMenuItem');
	    		menuitem.setAttribute("label", rlm.getAttribute("label").indexOf("History") != -1 ? "Delete File" : "\u4ece\u7535\u8111\u786c\u76d8\u4e2d\u79fb\u9664");
	    		menuitem.setAttribute("id","removeDownload");
	    		
	    		menuitem.onclick = function (e){
	    			if(e.target.disabled) return;
	    			var path = "";
	    			if(typeof DownloadsViewItemController != "undefined"){
	    				DownloadsView._dataItems.forEach(function(item){
	    					if(item.downloadGuid == DownloadsView.richListBox.selectedItem.getAttribute("downloadGuid")) {
	    						path = item.file;
	    						if(item.done == false) path += ".part";
	    						return path;
	    					}
	    				});
	    			}else{
	    				DownloadsView = document.getElementById("downloadsRichListBox")._placesView;
	    				var selectedItems = DownloadsView._richlistbox.selectedItems;
	    				path = selectedItems[0]._shell._metaData.filePath;
	    			}
	    			
	    			var file=Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
	    			try{
	    				file.initWithPath(path);
	    			}catch(e){
	    				var fileUrl = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService)
	    								.getProtocolHandler('file').QueryInterface(Components.interfaces.nsIFileProtocolHandler)
	    								.getFileFromURLSpec(path).path;
	    				file.initWithPath(fileUrl);
	    			}
	    			if(file.exists()){file.permissions |= 0666;file.remove(0);}
	    			
	    			if(typeof DownloadsViewItemController != "undefined"){
	    				new DownloadsViewItemController(DownloadsView.richListBox.selectedItem).doCommand("cmd_delete");
	    			}else{
	    				DownloadsView.doCommand("cmd_delete");
	    			}
	    		};
	    		
	    		document.querySelector("#downloadsContextMenu").insertBefore(menuitem, rlm.nextSibling);
	    		removeDownloadfile.removeStatus();
	    	},
        
	    	Start : function(){
	    		document.querySelector("#downloadsContextMenu").addEventListener("popupshowing", this.removeMenu, false);
        
	    	}
	    }
	    if(location != "chrome://browser/content/places/places.xul"){
	    	try{
	    		eval("DownloadsPanel.showPanel = " + DownloadsPanel.showPanel.toString()
	    			.replace(/DownloadsPanel\.\_openPopupIfDataReady\(\)/,"{$&;removeDownloadfile\.Start\(\);}"));
        
	    	}catch(e){
	    		//Components.utils.reportError(e);
	    	}
	    }else{
	    	removeDownloadfile.Start();
	    }
    }
	
	//精确显示文件大小
	function downloadFileSize() {    
        location == "chrome://browser/content/browser.xul" && (DownloadUtils.convertByteUnits =
        function DU_convertByteUnits(aBytes) {
                let unitIndex = 0;
                while ((aBytes >= 999.5) && (unitIndex < 3)) {
                        aBytes /= 1024;
                        unitIndex++;
                }
                return [(aBytes > 0) && (aBytes < 100) && (unitIndex != 0) ? (aBytes < 10 ? (parseInt(aBytes * 100) / 100).toFixed(2) : (parseInt(aBytes * 10) / 10).toFixed(1)): parseInt(aBytes), ['bytes', 'KB', 'MB', 'GB'][unitIndex]];
        });
	}
	
	// 自动关闭下载产生的空白标签
    function autoClose_blankTab() {
        eval("gBrowser.mTabProgressListener = " + gBrowser.mTabProgressListener.toString().replace(/(?=var location)/, '\
            if (aWebProgress.DOMWindow.document.documentURI == "about:blank"\
            && aRequest.QueryInterface(nsIChannel).URI.spec != "about:blank" && aStatus == 0) {\
            aWebProgress.DOMWindow.setTimeout(function() {\
            !aWebProgress.isLoadingDocument && aWebProgress.DOMWindow.close();\
            }, 100);\
            }\
        '));
    }
	
	// 保存并打开
	function save_And_Open() {
	    var saveAndOpen = document.getAnonymousElementByAttribute(document.querySelector("*"), "dlgtype", "extra2");
	    saveAndOpen.parentNode.insertBefore(saveAndOpen,document.documentElement.getButton("accept").nextSibling);
	    saveAndOpen.setAttribute("hidden", "false");
	    saveAndOpen.setAttribute("label", "\u4FDD\u5B58\u5E76\u6253\u5F00");
	    saveAndOpen.setAttribute("oncommand", 'Components.classes["@mozilla.org/browser/browserglue;1"].getService(Components.interfaces.nsIBrowserGlue).getMostRecentBrowserWindow().saveAndOpen.urls.push(dialog.mLauncher.source.asciiSpec);document.querySelector("#save").click();document.documentElement.getButton("accept").disabled=0;document.documentElement.getButton("accept").click()')
    }
	//作用于 main 窗口
	function saveAndOpen_on_main() {
    	Components.utils.import("resource://gre/modules/Downloads.jsm");
    	saveAndOpen = {
    		urls: [],
    		init: function(){
    			Downloads.getList(Downloads.ALL).then(list => {
    				list.addView({
    					onDownloadChanged: function(dl){
    						if(dl.progress == 100 && saveAndOpen.urls.indexOf(dl.source.url)>-1){
    							(new FileUtils.File(dl.target.path)).launch();
    							saveAndOpen.urls[saveAndOpen.urls.indexOf(dl.source.url)] = "";
    						}
    					},
    					onDownloadAdded:  function(){},
    					onDownloadRemoved: function(){},
    				});
    			}).then(null, Cu.reportError);
    		}
    
    	}
    	saveAndOpen.init();
    }
	
    // 下载改名
    function download_dialog_changeName() {
	
	    var rename = true           //true,可改名           false,不可改
        var encodingConvert = true  //true,开启下拉菜单选项 false,关闭下拉菜单选项
        //注:同时关闭改名和下拉菜单会导致下载文件的文件名不显示(非要关闭请默认在28行最前面加//来注释掉该功能)
        if (location != "chrome://mozapps/content/downloads/unknownContentType.xul") return;
        document.querySelector("#mode").addEventListener("select", function() {
            if (dialog.dialogElement("save").selected) {
                if (!document.querySelector("#locationtext")) {
				    if (rename || encodingConvert) {
					    if (encodingConvert) {
				            var orginalString = (opener.localStorage.getItem(dialog.mLauncher.source.spec) ||
                                dialog.mLauncher.source.asciiSpec.substring(dialog.mLauncher.source.asciiSpec.lastIndexOf("/"))).replace(/[\/:*?"<>|]/g, "");
                            opener.localStorage.removeItem(dialog.mLauncher.source.spec)
					    }
					    if (encodingConvert)
                            var locationtext = document.querySelector("#location").parentNode.insertBefore(document.createElement("menulist"), document.querySelector("#location"));
					    else
					        var locationtext = document.querySelector("#location").parentNode.insertBefore(document.createElement("textbox"), document.querySelector("#location"));
                        locationtext.id = "locationtext";
					    if (rename && encodingConvert)
					        locationtext.setAttribute("editable", "true");
                            locationtext.setAttribute("style", "margin-top:-2px;margin-bottom:-3px");
							locationtext.setAttribute("tooltiptext","Ctrl+\u70B9\u51FB\u8F6C\u6362url\u7F16\u7801\n\u5DE6\u952E\u003AUNICODE\n\u53F3\u952E\u003AGB2312");
                            locationtext.addEventListener("click",function(e){
                                if(e.ctrlKey){
                                    if(e.button==0)
                                        this.value = decodeURIComponent(this.value);
                                    if(e.button==2){
                                        e.preventDefault();
                                        converter.charset = "GB2312";
                                        this.value = converter.ConvertToUnicode(unescape(this.value));
                                    }
                                }
                            },false); 
					    if (rename)
						    locationtext.value = dialog.mLauncher.suggestedFileName;
					    if (encodingConvert) {
					        locationtext.addEventListener("command", function (e) {
							    if (rename)
                                    locationtext.value = e.target.value;
                                    document.title = "Opening " + e.target.value;
                            });
					        let menupopup = locationtext.appendChild(document.createElement("menupopup"));
                            let menuitem = menupopup.appendChild(document.createElement("menuitem"));
                            menuitem.value = dialog.mLauncher.suggestedFileName;
                            menuitem.label = "Original: " + menuitem.value;
					        if (!rename)
				        	locationtext.value = menuitem.value;
                            let converter = Components.classes['@mozilla.org/intl/scriptableunicodeconverter']
                                .getService(Components.interfaces.nsIScriptableUnicodeConverter);
				        	function createMenuitem(encoding) {
                                converter.charset = encoding;
                                let menuitem = menupopup.appendChild(document.createElement("menuitem"));
                                menuitem.value = converter.ConvertToUnicode(orginalString).replace(/^"(.+)"$/, "$1");
                                menuitem.label = encoding + ": " + menuitem.value;       
                            }
                            ["GB18030", "BIG5", "Shift-JIS"].forEach(function (item) { createMenuitem(item) });	
                        }
				    }
				}
                document.querySelector("#location").hidden = true;
                document.querySelector("#locationtext").hidden = false;
            } else {
                document.querySelector("#locationtext").hidden = true;
                document.querySelector("#location").hidden = false;
            }
        }, false)
        dialog.dialogElement("save").click();
        window.addEventListener("dialogaccept", function() {
            if ((document.querySelector("#locationtext").value != dialog.mLauncher.suggestedFileName) && dialog.dialogElement("save").selected) {
                var mainwin = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser");
                mainwin.eval("(" + mainwin.internalSave.toString().replace("let ", "").replace("var fpParams", "fileInfo.fileExt=null;fileInfo.fileName=aDefaultFileName;var fpParams") + ")")(dialog.mLauncher.source.asciiSpec, null, document.querySelector("#locationtext").value, null, null, null, null, null, null, mainwin.document, Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch).getBoolPref("browser.download.useDownloadDir"), null);
                document.documentElement.removeAttribute("ondialogaccept");
            }
        }, false);
	}
	//作用于 main 窗口
	function download_dialog_changeName_on_main() {
	    const obsService = Cc['@mozilla.org/observer-service;1'].getService(Ci.nsIObserverService);
        const RESPONSE_TOPIC = 'http-on-examine-response';

        var respObserver = {
            observing: false,
            observe: function (subject, topic, data) {
                try {
                    let channel = subject.QueryInterface(Ci.nsIHttpChannel);
                    let header = channel.contentDispositionHeader;
                    let associatedWindow = channel.notificationCallbacks
                                            .getInterface(Components.interfaces.nsILoadContext)
                                            .associatedWindow;
                    associatedWindow.localStorage.setItem(channel.URI.spec, header.split("=")[1]);
                } catch (ex) { }
            },
            start: function () {
                if (!this.observing) {
                    obsService.addObserver(this, RESPONSE_TOPIC, false);
                    this.observing = true;
                }
            },
            stop: function () {
                if (this.observing) {
                    obsService.removeObserver(this, RESPONSE_TOPIC, false);
                    this.observing = false;
                }
            }
        };

        respObserver.start();
        addEventListener("beforeunload", function () {
            respObserver.stop();
        })
	}
	
	
	// 另存为...
    function download_dialog_saveas() {
        var saveas = document.documentElement.getButton("extra1");
        saveas.setAttribute("hidden", "false");
        saveas.setAttribute("label", "\u53E6\u5B58\u4E3A");
        saveas.setAttribute("oncommand", 'var mainwin = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser"); mainwin.eval("(" + mainwin.internalSave.toString().replace("let ", "").replace("var fpParams", "fileInfo.fileExt=null;fileInfo.fileName=aDefaultFileName;var fpParams") + ")")(dialog.mLauncher.source.asciiSpec, null, (document.querySelector("#locationtext") ? document.querySelector("#locationtext").value : dialog.mLauncher.suggestedFileName), null, null, null, null, null, null, mainwin.document, 0, null);close()');
    }
	
	function download_dialog_saveTo() {
	//目录路径的反斜杠\要双写\\
	//第一次使用要修改路径，否则无法下载
	//如果使用Firefox3.6 + userChromeJS v1.2,则路径中的汉字要转义为\u6C49\u5B57编码类型,否则会出现乱码
	
	    var dir = [
		["C:\\Users\\Administrator\\Desktop", "桌面"],
		["D:\\Download", "Download"],
		["D:\\Syuan的軟件", "Syuan的軟件"],

	    ];
	    var saveTo = document.documentElement._buttons.cancel.parentNode.insertBefore(document.createElement("button"), document.documentElement._buttons.cancel);
	    var saveToMenu = saveTo.appendChild(document.createElement("menupopup"));
	    saveTo.classList.toggle("dialog-button");
	    saveTo.label = "\u4FDD\u5B58\u5230";
	    saveTo.type = "menu";
	    dir.forEach(function (dir) {
	    	var [name, dir] = [dir[1], dir[0]];
	    	var item = saveToMenu.appendChild(document.createElement("menuitem"));
	    	item.setAttribute("label", (name || (dir.match(/[^\\/]+$/) || [dir])[0]));
	    	item.setAttribute("image", "moz-icon:file:///" + dir + "\\");
	    	item.setAttribute("class", "menuitem-iconic");
	    	item.setAttribute("oncommand", 'var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);file.initWithPath("' + dir.replace(/^\./, Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsIFile).path).replace(/\\/g, "\\\\") + "\\\\" + (document.querySelector("#locationtext") ? document.querySelector("#locationtext").value : document.querySelector("#location").value) + '");dialog.mLauncher.saveToDisk(file,1);dialog.onCancel=null;close()');
	    })	
	}
		
	// 下载弹出窗口双击链接复制完整链接
	function download_dialog_showCompleteURL() {
	    var s = document.querySelector("#source");
        s.value = dialog.mLauncher.source.spec;
        s.setAttribute("crop", "center");
        s.setAttribute("tooltiptext", dialog.mLauncher.source.spec);
        s.setAttribute("ondblclick", 'Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(dialog.mLauncher.source.spec)')
    }
	
	// 下载弹出窗口双击保存文件项执行下载
	function download_dialog_doubleclicksaveL() {
        addEventListener("dblclick", function (event) {
            event.target.nodeName === "radio" && document.documentElement.getButton("accept").click()
        }, false)
    }	
})();