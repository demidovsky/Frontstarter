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
xcopy img %exportfolder%\img\ /H /E
xcopy fonts %exportfolder%\fonts\ /H /E
xcopy *.html %exportfolder%

del %exportfolder%\index.html

rmdir /S /Q %exportfolder%\css\libs
rmdir /S /Q %exportfolder%\css\modules
rmdir /S /Q %exportfolder%\js\libs
rmdir /S /Q %exportfolder%\js\modules

cd %exportfolder%
"C:\Program Files\WinRAR\WinRAR.exe" a -afzip -r %exportfolder%.zip *

pause