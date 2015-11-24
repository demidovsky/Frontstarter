@echo off
chcp 65001 >> \NUL
set /p search="Search for: "
echo.
echo - HTML -
findstr /SNIC:"%search%" *.php
findstr /SNIC:"%search%" templates\*
echo.
echo - CSS -
findstr /SNIC:"%search%" css\*
echo.
echo - JS -
findstr /SNIC:"%search%" js\*
echo.
echo Completed.
pause