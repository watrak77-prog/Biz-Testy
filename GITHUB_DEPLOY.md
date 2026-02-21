# Simple GitHub Deployment Guide

Since your local environment is not set up, we can use GitHub's powerful "Actions" to build and host your presentation for free.

## 1. Create a Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g., `car-costs-presentation`)
3. Keep it **Public** (required for free GitHub Pages)
4. Click **Create repository**

## 2. Upload Files
1. In your new repository, click **"uploading an existing file"**.
2. Drag and drop **all files and folders** from your `biz-main` folder into the GitHub window.
   - *Note: Don't upload the `node_modules` folder if it exists.*
3. Click **Commit changes**.

## 3. Enable GitHub Pages
1. Go to **Settings** (top tab) -> **Pages** (left menu).
2. Under **Build and deployment**, change the **Source** to **GitHub Actions**.

## 4. That's it!
Once you've done this, the GitHub Action I created in your project will automatically start building. You can see the progress in the **Actions** tab. Once it finishes, your site will be live at:
`https://[username].github.io/car-costs-presentation/`

> [!IMPORTANT]
> Because you are deploying to a subfolder (the repo name), I have updated `vite.config.js` to handle this correctly.
