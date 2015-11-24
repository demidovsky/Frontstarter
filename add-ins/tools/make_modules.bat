@echo off
for /F "eol=" %%i in (modules.txt) do @echo %%i && copy blank.less %%i.less
pause