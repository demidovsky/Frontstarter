@echo off
for /F "eol=" %%i in (modules.txt) do @echo %%i && copy _blank_.less %%i.less
pause