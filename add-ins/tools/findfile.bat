@echo off
set /p search="Search for: "
echo.
echo - HTML -
findstr /SMIC:"%search%" *.php
findstr /SMIC:"%search%" templates\*
echo.
echo - CSS -
findstr /SMIC:"%search%" css\*
echo.
echo - JS -
findstr /SMIC:"%search%" js\*
echo.
echo Completed.
pause