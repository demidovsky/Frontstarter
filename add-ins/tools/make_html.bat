@echo off

set "cdir=%~dp0"
set "cdir=%cdir:~0,-1%"
for %%i in ("%cdir%") do set "parentfoldername=%%~nxi"

for /f %%a in ('dir /b *.php') do start http://localhost/%parentfoldername%/%%a?html
