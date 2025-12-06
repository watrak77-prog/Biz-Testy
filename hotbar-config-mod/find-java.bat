@echo off
echo Searching for Java installation...
echo.

REM Check common Java installation locations
set JAVA_FOUND=0

REM Check Program Files
if exist "C:\Program Files\Java" (
    echo Found Java folder in C:\Program Files\Java
    dir "C:\Program Files\Java" /b
    echo.
    set JAVA_FOUND=1
)

REM Check Program Files (x86)
if exist "C:\Program Files (x86)\Java" (
    echo Found Java folder in C:\Program Files ^(x86^)\Java
    dir "C:\Program Files (x86)\Java" /b
    echo.
    set JAVA_FOUND=1
)

REM Check Eclipse Adoptium / Temurin
if exist "C:\Program Files\Eclipse Adoptium" (
    echo Found Eclipse Adoptium in C:\Program Files\Eclipse Adoptium
    dir "C:\Program Files\Eclipse Adoptium" /b
    echo.
    set JAVA_FOUND=1
)

REM Check if java is in PATH
where java >nul 2>&1
if %errorlevel% equ 0 (
    echo Java is already in PATH!
    java -version
    echo.
    set JAVA_FOUND=1
) else (
    echo Java is NOT in PATH
    echo.
)

REM Check JAVA_HOME
if defined JAVA_HOME (
    echo JAVA_HOME is set to: %JAVA_HOME%
    echo.
) else (
    echo JAVA_HOME is NOT set
    echo.
)

if %JAVA_FOUND% equ 0 (
    echo No Java installation found in common locations.
    echo Please install Java 21 from: https://adoptium.net/temurin/releases/
)

echo.
echo ============================================
echo INSTRUCTIONS TO SET JAVA_HOME:
echo ============================================
echo 1. Find your Java installation folder from above
echo 2. Copy the full path (e.g., C:\Program Files\Java\jdk-21)
echo 3. Open System Environment Variables:
echo    - Press Windows Key + R
echo    - Type: sysdm.cpl
echo    - Press Enter
echo    - Click "Advanced" tab
echo    - Click "Environment Variables"
echo 4. Under "System Variables", click "New"
echo 5. Variable name: JAVA_HOME
echo 6. Variable value: [paste your Java path]
echo 7. Find "Path" variable, click "Edit"
echo 8. Add new entry: %%JAVA_HOME%%\bin
echo 9. Click OK on all windows
echo 10. RESTART your terminal/command prompt
echo.
pause
