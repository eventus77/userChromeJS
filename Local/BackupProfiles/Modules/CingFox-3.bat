::2016.11.23

:pcxFirefox
::複製PcxFirefox主程序
cls

::从批处理所在位置到Mozilla Firefox文件夹，共跨了5层
set BackDir3=..\..\..\..\..

::清理Firefox文件下的tmp文件
del /s /q %BackDir3%\firefox\*.tmp

::複製firefox到臨時文件夾
xcopy "%BackDir3%\firefox" %TempFolder%\firefox\  /s /y /i

::複製便携模块tmemutil.ini到firefox主程序文件夹
xcopy "%TempFolder%\Software\run\tmemutil.ini" %TempFolder%\firefox\  /s /y /i

:CingFox-2
::需要刪除的项
del %TempFolder%\Software\GFW\goagent\  /s /q
del %TempFolder%\Software\GFW\IP-Update\  /s /q
del %TempFolder%\Software\GFW\Shadowsocks\  /s /q
del %TempFolder%\Software\Other\QT-Check\  /s /q
del %TempFolder%\Software\GFW\psiphon\psiphon3.exe.orig  /s /q
del %TempFolder%\Profiles\iMacros\  /s /q
del %TempFolder%\Profiles\bookmarks.html  /s /q
del %TempFolder%\Profiles\places.sqlite  /s /q
del %TempFolder%\Profiles\cookies.sqlite  /s /q
del %TempFolder%\Profiles\permissions.sqlite  /s /q
del %TempFolder%\Profiles\content-prefs.sqlite  /s /q
del %TempFolder%\Profiles\logins.json  /s /q
del %TempFolder%\Profiles\readItLater.sqlite  /s /q
del %TempFolder%\Profiles\chrome\Local\InformEnter.Ijson  /s /q

::一些脚本文件单独打包
xcopy "%TempFolder%\Profiles\chrome\xul\localMark_0.6.1.uc.xul" %TempFolder%\Optional\Profiles\chrome\xul\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\SougouDeskPic.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\QR.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\SubScript\videos_skipAd.uc.js" %TempFolder%\Optional\Profiles\chrome\SubScript\  /s /y /i
xcopy "%TempFolder%\Profiles\chrome\Local\_user.js" %TempFolder%\Optional\Profiles\chrome\Local\  /s /y /i
xcopy "%TempFolder%\Profiles\extensions\uMatrix@raymondhill.net.xpi" %TempFolder%\Optional\Profiles\extensions\  /s /y /i
xcopy "%TempFolder%\Software\GFW" %TempFolder%\Optional\Software\GFW\  /s /y /i
xcopy "%TempFolder%\Software\Image" %TempFolder%\Optional\Software\Image\  /s /y /i
xcopy "%TempFolder%\Software\Other" %TempFolder%\Optional\Software\Other\  /s /y /i
del %TempFolder%\Profiles\chrome\xul\localMark_0.6.1.uc.xul /s /q
del %TempFolder%\Profiles\chrome\SubScript\SougouDeskPic.uc.js  /s /q
del %TempFolder%\Profiles\chrome\SubScript\QR.uc.js  /s /q
del %TempFolder%\Profiles\chrome\SubScript\videos_skipAd.uc.js  /s /q
del %TempFolder%\Profiles\chrome\Local\_user.js  /s /q
del %TempFolder%\Profiles\extensions\uMatrix@raymondhill.net.xpi  /s /q
del %TempFolder%\Software\GFW\  /s /q
del %TempFolder%\Software\Image\  /s /q
del %TempFolder%\Software\Other\  /s /q

::給套一個主文件夾CingFox
xcopy "%TempFolder%\firefox" %TempFolder%\CingFox\firefox\ /s /y /i
xcopy "%TempFolder%\Profiles" %TempFolder%\CingFox\Profiles\ /s /y /i
xcopy "%TempFolder%\Plugins" %TempFolder%\CingFox\Plugins\ /s /y /i
xcopy "%TempFolder%\Software" %TempFolder%\CingFox\Software\ /s /y /i