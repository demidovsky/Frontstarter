@echo off
for /F "eol=" %%i in (pages.txt) do @echo %%i && copy /-Y _blank_.php %%i.php
pause