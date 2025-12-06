# PowerShell script to download and install Java 21
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Java 21 Automatic Installer" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "ERROR: This script needs Administrator privileges!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please right-click this file and select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit 1
}

Write-Host "Downloading Java 21 (Eclipse Temurin)..." -ForegroundColor Green
$downloadUrl = "https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.5%2B11/OpenJDK21U-jdk_x64_windows_hotspot_21.0.5_11.msi"
$installerPath = "$env:TEMP\java21-installer.msi"

try {
    Invoke-WebRequest -Uri $downloadUrl -OutFile $installerPath -UseBasicParsing
    Write-Host "Download complete!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to download Java installer" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""
Write-Host "Installing Java 21..." -ForegroundColor Green
Write-Host "This may take a few minutes. Please wait..." -ForegroundColor Yellow
Write-Host ""

# Install silently with JAVA_HOME setup
$installArgs = "/i `"$installerPath`" /quiet ADDLOCAL=FeatureMain,FeatureEnvironment,FeatureJarFileRunWith,FeatureJavaHome INSTALLDIR=`"C:\Program Files\Eclipse Adoptium\jdk-21.0.5.11-hotspot\`""

try {
    $process = Start-Process "msiexec.exe" -ArgumentList $installArgs -Wait -PassThru
    
    if ($process.ExitCode -eq 0) {
        Write-Host "Java 21 installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "Installation completed with exit code: $($process.ExitCode)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "ERROR: Installation failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    pause
    exit 1
}

# Clean up installer
Remove-Item $installerPath -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Verifying installation..." -ForegroundColor Green

# Refresh environment variables
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
$env:JAVA_HOME = [System.Environment]::GetEnvironmentVariable("JAVA_HOME","Machine")

# Test Java
try {
    $javaVersion = & java -version 2>&1
    Write-Host ""
    Write-Host "Java version:" -ForegroundColor Cyan
    Write-Host $javaVersion -ForegroundColor White
    Write-Host ""
    Write-Host "================================================" -ForegroundColor Green
    Write-Host "  Installation Complete!" -ForegroundColor Green
    Write-Host "================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "IMPORTANT: Please close and reopen your PowerShell/Terminal" -ForegroundColor Yellow
    Write-Host "Then you can run: .\gradlew.bat build" -ForegroundColor Cyan
} catch {
    Write-Host "Java installed but not yet in PATH." -ForegroundColor Yellow
    Write-Host "Please restart your terminal." -ForegroundColor Yellow
}

Write-Host ""
pause
