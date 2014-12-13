@echo off

set "cdir=%~dp0"
set "cdir=%cdir:~0,-1%"
for %%i in ("%cdir%") do set "parentfoldername=%%~nxi"
for /f %%a in ('dir /b html_*^|find /c /v "" ') do set /a nextversion=%%a+1

set exportfolder=html_%parentfoldername%_%date:~0,5%_ver%nextversion%

echo.
echo New folder: %exportfolder%
echo.

mkdir %exportfolder%

xcopy js %exportfolder%\js\ /H /E
xcopy css %exportfolder%\css\ /H /E
xcopy *.html %exportfolder%

del %exportfolder%\css\default\mixins.less
del %exportfolder%\css\common.less

rmdir /S /Q %exportfolder%\css\modules
rmdir /S /Q %exportfolder%\css\pages

cd %exportfolder%
"C:\Program Files\WinRAR\WinRAR.exe" a -afzip -r %exportfolder%.zip *

pause