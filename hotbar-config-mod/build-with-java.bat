@echo off
echo ================================================
echo QUICK FIX: Build with temporary JAVA_HOME
echo ================================================
echo.
echo If you know where Java is installed, enter the path below.
echo Example: C:\Program Files\Java\jdk-21
echo Example: C:\Program Files\Eclipse Adoptium\jdk-21.0.1.12-hotspot
echo.
set /p JAVA_PATH="Enter Java installation path (or press Enter to skip): "

if "%JAVA_PATH%"=="" (
    echo No path entered. Exiting...
    pause
    exit /b 1
)

if not exist "%JAVA_PATH%" (
    echo ERROR: Path does not exist: %JAVA_PATH%
    pause
    exit /b 1
)

echo.
echo Setting temporary JAVA_HOME to: %JAVA_PATH%
set JAVA_HOME=%JAVA_PATH%
set PATH=%JAVA_HOME%\bin;%PATH%

echo Testing Java...
java -version
if %errorlevel% neq 0 (
    echo ERROR: Java not found at specified path
    pause
    exit /b 1
)

echo.
echo Java found! Building mod...
echo.
call gradlew.bat build

echo.
echo ================================================
echo Build complete!
echo ================================================
echo Check build\libs\ folder for the mod jar file.
echo.
pause
