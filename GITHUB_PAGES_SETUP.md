# GitHub Pages Setup Guide

## Your Portfolio URL Should Be:
**https://priyasanna.github.io/Portfolio1/**

## Troubleshooting 404 Error

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/priyasanna/Portfolio1
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, you have two options:

#### Option A: GitHub Actions (Recommended)
- Select **"GitHub Actions"** as the source
- The workflow will automatically deploy
- Wait 1-2 minutes for deployment

#### Option B: Deploy from a branch (Alternative)
- Select **"Deploy from a branch"**
- Branch: **main**
- Folder: **/ (root)**
- Click **Save**

### Step 2: Check Workflow Status

1. Go to the **Actions** tab in your repository
2. Check if the workflow ran successfully
3. If it failed, check the error message

### Step 3: Wait for Deployment

- First deployment can take 5-10 minutes
- After enabling, wait a few minutes
- Refresh the page: https://priyasanna.github.io/Portfolio1/

### Step 4: Verify Repository Settings

- Make sure your repository is **public** (or you have GitHub Pro/Team)
- Private repos on free accounts have limited GitHub Pages access

### Step 5: Clear Browser Cache

- Try accessing in incognito/private mode
- Or clear your browser cache

## Common Issues:

1. **404 Error**: GitHub Pages not enabled or workflow failed
2. **Site not updating**: Wait a few minutes after pushing changes
3. **Wrong URL**: Make sure you're using: `https://priyasanna.github.io/Portfolio1/`

## Need Help?

If you're still getting 404:
1. Check the Actions tab for workflow errors
2. Verify Settings → Pages is configured
3. Make sure index.html is in the root directory (it is!)

