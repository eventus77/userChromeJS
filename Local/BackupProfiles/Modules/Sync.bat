::2016.02.09

:Sync
cls
echo.
echo  *** ͬ��һЩܛ�����O���ļ� ***
echo.
echo  1. Foxmail�^�V����163.com, qq.com
echo  2. ProcessLaso�O��
echo  3. PicPick�O��
echo  4. ͬ��FastCopy-M�O��
echo  5. ͬ��Shadowsocks-Pac�O��
echo  6. ͬ��xmp�O��
echo  7. ͬ��CCleaner�O��
echo.
echo  ���������������
pause>nul
cls

rem �O�Â��·���Լ��R�r�ļ��A
cd /d %~dp0

::�O���ļ�����λ��
::������������λ�õ�Profiles�ļ��У�������4��
set dir1=..\..\..\..
set dir2=D:\My Documents\GitHub\Customization

::ͬ��Foxmail Filter
taskkill /f /t /im foxmail.exe
xcopy "%dir2%\Foxmail-Filter\163.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupontjoy@163.com\Filter\1.fter" /s /y /i
xcopy "%dir2%\Foxmail-Filter\qq.com\1.fter" "%dir1%\..\..\Tencent\Foxmail\Storage\dupontjoy@qq.com\Filter\1.fter"  /s /y /i
start "" "%dir1%\..\..\Tencent\Foxmail\Storage\..\foxmail.exe" /min

::ͬ��ProcessLaso�O��
taskkill /f /t /im ProcessGovernor.exe
taskkill /f /t /im ProcessLasso.exe
xcopy "%dir2%\ProcessLaso\prolasso.ini" "%dir1%\..\..\System Tools\ProcessLassoPortable\prolasso.ini"  /s /y /i
start "" "%dir1%\..\..\System Tools\ProcessLassoPortable\ProcessGovernor.exe" "/logfolder=%dir1%\..\..\System Tools\ProcessLassoPortable" "/configfolder=%dir1%\..\..\System Tools\ProcessLassoPortable"
start "" "%dir1%\..\..\System Tools\ProcessLassoPortable\ProcessLasso.exe" "/logfolder=%dir1%\..\..\System Tools\ProcessLassoPortable" "/configfolder=%dir1%\..\..\System Tools\ProcessLassoPortable"

::ͬ��PicPick�O��
taskkill /f /t /im picpick.exe
xcopy "%dir2%\PicPick\picpick.ini" "%dir1%\..\Software\Image\PicPick\picpick.ini"  /s /y /i
start "" "%dir1%\..\Software\Image\PicPick\picpick.exe"

::ͬ��FastCopy-M�O��
xcopy "%dir2%\FastCopy-M\FastCopy2.ini" "%dir1%\..\..\FastCopy-M\FastCopy2.ini"  /s /y /i

::ͬ��Shadowsocks-Pac�O��
xcopy "%dir2%\Rules\Shadowsocks\pac.txt" "%dir1%\..\..\CingFox\Software\GFW\Shadowsocks\pac.txt"  /s /y /i
xcopy "%dir2%\Rules\Shadowsocks\user-rule.txt" "%dir1%\..\..\CingFox\Software\GFW\Shadowsocks\user-rule.txt"  /s /y /i

::ͬ��XMP�O��
xcopy "%dir2%\Thunder\xmp.ini" "%dir1%\..\..\Thunder Network\Thunder\Program\xmp.ini"  /s /y /i

::ͬ��CCleaner�O��
xcopy "%dir2%\CCleaner\ccleaner.ini" "%dir1%\..\..\System Tools\CCleaner\ccleaner.ini" /s /y /i