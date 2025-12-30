# 📤 How to Push This Project to GitHub

This guide will help you push your Bingxin Literary Conference website to GitHub.

## Prerequisites

- A GitHub account
- Git installed on your machine (usually pre-installed in development environments)
- Your GitHub credentials or Personal Access Token

## Method 1: Push to a New Repository

### Step 1: Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name it (e.g., `bingxin-literary-conference`)
5. Add a description (optional)
6. **Do NOT initialize with README** (we already have one)
7. Click "Create repository"

### Step 2: Configure Git (if needed)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Check Git Status

```bash
# Check if git is initialized
git status

# If not initialized, initialize it
git init
```

### Step 4: Add Remote Repository

Replace `YOUR_USERNAME` and `REPOSITORY_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
```

If you get an error that the remote already exists, update it:

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
```

### Step 5: Stage All Changes

```bash
git add .
```

### Step 6: Commit Your Changes

```bash
git commit -m "Initial commit: Bingxin Literary Conference website"
```

### Step 7: Push to GitHub

```bash
# Push to main branch
git push -u origin main

# If your default branch is 'master', use:
# git push -u origin master
```

If you get an authentication error, you may need to use a Personal Access Token instead of your password.

## Method 2: Using GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
# Create and push to a new repo in one step
gh repo create bingxin-literary-conference --public --source=. --remote=origin --push
```

## Method 3: Push to an Existing Repository

If you already have a repository:

```bash
# Add remote (if not already added)
git remote add origin https://github.com/YOUR_USERNAME/EXISTING_REPO.git

# Stage and commit
git add .
git commit -m "Update: Bingxin Literary Conference website"

# Push
git push origin main
```

## Authentication with Personal Access Token (PAT)

If you need to use a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Generate and copy the token

When pushing, use:
```bash
git push https://YOUR_TOKEN@github.com/YOUR_USERNAME/REPOSITORY_NAME.git main
```

Or configure credential storage:
```bash
git config --global credential.helper store
```

## Verify Your Push

1. Go to your GitHub repository URL
2. Refresh the page
3. You should see all your files including:
   - README.md
   - src/ folder with components
   - package.json
   - All configuration files

## Next Steps

After pushing to GitHub, you can:

1. **Enable GitHub Pages** to host the site for free
2. **Add collaborators** if working with a team
3. **Set up GitHub Actions** for automatic deployments
4. **Add branch protection rules** to protect your main branch

## 🚀 Deploy with GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select your branch (usually `main`)
4. Select `/root` or `/docs` as the folder
5. Click "Save"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

Note: You may need to update your Vite config for GitHub Pages:

```typescript
// vite.config.ts
export default {
  base: '/REPOSITORY_NAME/',
  // ... other config
}
```

## Troubleshooting

### Problem: "Permission denied"
**Solution**: Check your authentication method (PAT or SSH) and credentials

### Problem: "Repository not found"
**Solution**: Verify the repository URL and that you have access to it

### Problem: "Updates were rejected"
**Solution**: Pull remote changes first: `git pull origin main --rebase`

### Problem: Large files rejected
**Solution**: Check your .gitignore includes node_modules/ and other large directories

## 📚 Additional Resources

- [GitHub Docs: Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Docs: About authentication to GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
- [Git Documentation](https://git-scm.com/doc)

---

Need help? Check the [GitHub Community Forum](https://github.community/)
