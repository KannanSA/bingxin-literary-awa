# 🌐 Deployment Guide

Once your code is on GitHub, you can deploy this website to make it publicly accessible. Here are several free hosting options:

## Option 1: Vercel (Recommended - Easiest)

Vercel offers the simplest deployment for Vite/React projects.

### Steps:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"
7. Your site is live in ~2 minutes! 🎉

**Advantages:**
- Automatic deployments on git push
- Free SSL certificate
- CDN with global edge network
- Zero configuration needed

## Option 2: Netlify

Another excellent option with drag-and-drop deployment.

### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Advantages:**
- Simple interface
- Form handling capabilities
- Free SSL
- Continuous deployment

## Option 3: GitHub Pages

Host directly from your GitHub repository for free.

### Steps:

1. Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

2. Install gh-pages package:

```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:

```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: "Deploy from branch"
   - Branch: "gh-pages" → "/(root)"

Your site will be at: `https://your-username.github.io/your-repo-name/`

**Advantages:**
- Free with GitHub
- No external service needed
- Good for documentation sites

## Option 4: Cloudflare Pages

Fast, global CDN hosting.

### Steps:

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up and connect GitHub
3. Select your repository
4. Configure build:
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy

**Advantages:**
- Excellent performance
- Unlimited bandwidth
- DDoS protection
- Free SSL

## Option 5: Render

Simple deployment with good free tier.

### Steps:

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Static Site"
4. Connect repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Create Static Site

**Advantages:**
- Simple setup
- Auto-deploys on push
- Free SSL

## Recommended Choice

**For this project, we recommend Vercel** because:
- ✅ Zero configuration needed
- ✅ Fastest deployment time
- ✅ Excellent performance for React apps
- ✅ Automatic HTTPS
- ✅ Preview deployments for PRs
- ✅ Easy custom domain setup

## After Deployment

Once deployed, you can:

1. **Add a custom domain**: Most platforms support custom domains for free
2. **Share the link**: Your conference website is now live!
3. **Monitor analytics**: Add Google Analytics or Vercel Analytics
4. **Enable automatic deployments**: Push to GitHub → Auto-deploy

## Environment Variables

This project doesn't currently use environment variables, but if you need them in the future:

- Never commit `.env` files to GitHub
- Add environment variables in your hosting platform's dashboard
- Prefix with `VITE_` to expose to the client (e.g., `VITE_API_KEY`)

## Performance Tips

Your site is already optimized, but you can enhance it further:

- ✅ Images are optimized
- ✅ Code splitting is handled by Vite
- ✅ Lighthouse score should be 90+
- Consider adding lazy loading for images if needed

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/pages)

---

Happy deploying! 🚀
