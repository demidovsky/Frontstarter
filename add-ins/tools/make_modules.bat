@echo off
for /F "eol=" %%i in (make_modules.txt) do @echo %%i && copy blank.less %%i.less
pause