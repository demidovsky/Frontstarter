@echo off
for /F "eol=" %%i in (make_php.txt) do @echo %%i && copy /-Y blank.php %%i.php
pause