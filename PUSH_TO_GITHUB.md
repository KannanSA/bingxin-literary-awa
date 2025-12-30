# 🚀 Quick Start: Push to GitHub

## Fast Track (Copy & Paste These Commands)

### 1. Check Git Status
```bash
git status
```

### 2. Stage All Changes
```bash
git add .
```

### 3. Commit Your Work
```bash
git commit -m "Initial commit: Bingxin Literary Conference website"
```

### 4. Check Current Remote (if any)
```bash
git remote -v
```

### 5A. Add Remote (if none exists)
Replace `YOUR_USERNAME` and `REPO_NAME` with your values:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### 5B. Update Remote (if already exists)
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### 6. Push to GitHub
```bash
git push -u origin main
```

Or if your branch is `master`:
```bash
git push -u origin master
```

---

## Already Have Git Setup?

If you just need to push updates:

```bash
git add .
git commit -m "Your commit message here"
git push
```

---

## Common Issues & Fixes

### "fatal: not a git repository"
```bash
git init
```

### "Repository not found" or "Permission denied"
- Check repository URL is correct
- Verify you have access to the repository
- Use Personal Access Token instead of password

### "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

### Need to see your remote URL?
```bash
git remote get-url origin
```

---

## What Gets Pushed?

✅ **Included:**
- All source code (src/)
- Configuration files
- README.md and documentation
- package.json
- index.html

❌ **Excluded (per .gitignore):**
- node_modules/
- dist/
- .env files
- Log files
- Editor config

---

## Next Steps After Pushing

1. ✅ Verify files on GitHub.com
2. 📖 Read DEPLOYMENT.md for hosting options
3. 🌐 Deploy to Vercel/Netlify/GitHub Pages
4. 🎉 Share your live site!

---

**Need detailed instructions?** See `GITHUB_PUSH_GUIDE.md`

**Ready to deploy?** See `DEPLOYMENT.md`
