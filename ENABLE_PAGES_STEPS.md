# How to Enable GitHub Pages - Step by Step

## Quick Steps (Takes 2 minutes!)

### Step 1: Open Your Repository
1. Go to: **https://github.com/priyasanna/Portfolio1**
2. Make sure you're logged into your GitHub account

### Step 2: Go to Settings
1. Click the **"Settings"** tab at the top of your repository
   - It's in the horizontal menu: Code | Issues | Pull requests | Actions | Projects | Wiki | Security | Insights | **Settings**
   - Click on **Settings**

### Step 3: Navigate to Pages
1. In the left sidebar, scroll down and click **"Pages"**
   - It's under the "Code and automation" section
   - Look for the "Pages" option in the left menu

### Step 4: Configure Source
You'll see a section called **"Build and deployment"**

**Option A - GitHub Actions (Recommended):**
1. Under **"Source"**, click the dropdown
2. Select **"GitHub Actions"**
3. That's it! The workflow will automatically deploy

**Option B - Deploy from a branch (If Option A doesn't work):**
1. Under **"Source"**, click the dropdown
2. Select **"Deploy from a branch"**
3. Under **"Branch"**, select **"main"**
4. Under **"Folder"**, select **"/ (root)"**
5. Click **"Save"**

### Step 5: Wait for Deployment
1. After saving, you'll see a message: "Your site is ready to be published" or "Your site is live at..."
2. Wait 2-5 minutes for the first deployment
3. You can check progress in the **"Actions"** tab

### Step 6: Access Your Portfolio
Your portfolio will be live at:
**https://priyasanna.github.io/Portfolio1/**

## Visual Guide

```
Repository Page
    ↓
Click "Settings" (top menu)
    ↓
Click "Pages" (left sidebar)
    ↓
Select "GitHub Actions" or "Deploy from a branch"
    ↓
If "Deploy from a branch": Select "main" and "/ (root)"
    ↓
Click "Save"
    ↓
Wait 2-5 minutes
    ↓
Visit: https://priyasanna.github.io/Portfolio1/
```

## Troubleshooting

**If you don't see "Pages" in Settings:**
- Make sure you're the repository owner or have admin access
- The repository must exist and you must be logged in

**If the site still shows 404:**
- Wait 5-10 minutes (first deployment takes longer)
- Check the "Actions" tab for any errors
- Make sure the workflow completed successfully

**If "GitHub Actions" option is not available:**
- Use "Deploy from a branch" instead
- Select "main" branch and "/ (root)" folder

## Need Help?

If you're stuck at any step, let me know which step you're on and I'll help you!

