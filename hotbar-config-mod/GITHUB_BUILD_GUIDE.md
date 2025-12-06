# GitHub Actions - Automatic Mod Building Guide

This guide will help you build your Minecraft mod automatically using GitHub Actions (FREE and no Java installation needed!)

## Step 1: Create a GitHub Account

If you don't have one already:
1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration steps

## Step 2: Create a New Repository

1. Go to https://github.com/new
2. Repository name: `hotbar-config-mod` (or any name you want)
3. Description: "Minecraft Fabric mod for saving hotbar configurations"
4. Select **Public** (free) or **Private** (if you have a paid account)
5. **DO NOT** check "Add a README file"
6. Click **"Create repository"**

## Step 3: Upload Your Mod Files

You have two options:

### Option A: Using GitHub Website (Easier)

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from `C:\Users\Tomasz\.gemini\antigravity\scratch\hotbar-config-mod\` 
   - Include ALL folders (src, gradle, .github, etc.)
   - Include ALL files (build.gradle, settings.gradle, etc.)
3. Scroll down and click **"Commit changes"**

### Option B: Using Git Command Line

Open PowerShell in the mod folder and run:

```powershell
cd C:\Users\Tomasz\.gemini\antigravity\scratch\hotbar-config-mod
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hotbar-config-mod.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 4: GitHub Actions Will Build Automatically!

After uploading:
1. Go to your repository page
2. Click the **"Actions"** tab at the top
3. You'll see a workflow running (yellow circle = in progress, green checkmark = done)
4. Wait a few minutes for the build to complete

## Step 5: Download Your Compiled Mod

1. Once the workflow shows a **green checkmark** ✅
2. Click on the workflow run
3. Scroll down to **"Artifacts"** section
4. Click **"hotbar-config-mod"** to download the ZIP file
5. Extract the ZIP - inside you'll find `hotbar-config-mod-1.0.0.jar`
6. **This is your mod!** Put it in `.minecraft/mods/` folder

## Troubleshooting

**Issue: "gradlew: Permission denied"**
- This should be fixed by the workflow automatically

**Issue: Build fails**
- Click on the failed workflow
- Click on "Build with Gradle" to see error details
- Share the error with me and I'll help fix it

**Issue: Can't upload files to GitHub**
- Make sure you're uploading the ENTIRE folder structure
- The `.github` folder must be included (enable "Show hidden files" in Windows)

## Future Builds

Whenever you make changes to the code:
1. Upload the changed files to GitHub (or use git commit + push)
2. GitHub Actions will automatically rebuild the mod
3. Download the new JAR from the Artifacts section

**That's it!** No Java installation needed on your computer! 🎉
