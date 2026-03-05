# Shivansh Mehta — Portfolio

A minimalistic, elegant portfolio website showcasing my experience, skills, and biography.

## 🚀 Deploy for Free with GitHub Pages

### Step-by-step:

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository** on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it something like `portfolio` (or `shivansh-mehta.github.io` for a custom domain)
   - Keep it **Public**
   - Do **not** initialize with a README

3. **Push this code to GitHub** (run these in terminal from project folder):
   ```bash
   cd ~/shivansh-portfolio
   git init
   git add .
   git commit -m "Initial commit: portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages**
   - Under "Source," select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

5. **Your site will be live** in ~1 minute at:
   ```
   https://YOUR_USERNAME.github.io/portfolio/
   ```

> 💡 **Pro tip:** If you name the repo `YOUR_USERNAME.github.io`, the site will be at `https://YOUR_USERNAME.github.io/` directly.

## 🔒 Security

- All external links use `rel="noopener"` to prevent reverse tabnapping
- No cookies, tracking, or analytics are collected
- Content Security Policy headers are configured via `_headers` file
- The site is 100% static — no server-side code or database

## 📁 Structure

```
shivansh-portfolio/
├── index.html      # Main HTML
├── styles.css      # All styling + animations
├── script.js       # Interactivity + scroll reveals
├── Photo.jpeg      # Your photo
├── _headers        # Security headers (for Netlify/Cloudflare)
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

## 🌐 Alternative Free Hosting

| Platform | How |
|----------|-----|
| **GitHub Pages** | Push to GitHub, enable Pages in settings |
| **Netlify** | Drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | Import the GitHub repo at [vercel.com/new](https://vercel.com/new) |
| **Cloudflare Pages** | Connect GitHub repo at [dash.cloudflare.com](https://dash.cloudflare.com) |

All of these are **completely free** for static sites.
