# Materio v0 Registry Setup Guide

This guide walks you through setting up a v0 registry with the Materio design system, so v0 prototypes automatically use Materio's colors, typography, and component styles.

---

## What You'll Get

After setup, when you use v0.dev:
- Components use Materio colors (navy primary, coral secondary, etc.)
- Text renders in Roobert font
- Buttons have 2px radius, no uppercase
- Cards and dialogs use correct background (#fcfbfa)
- Status badges match production colors

---

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- The Roobert font files (Roobert-Regular.woff, Roobert-Medium.woff)

---

## Step 1: Clone the Registry Starter Template

1. Go to: https://github.com/vercel/registry-starter
2. Click **"Use this template"** → **"Create a new repository"**
3. Name it: `materio-registry` (or whatever you prefer)
4. Make it **Private** (contains your design system)
5. Click **Create repository**

---

## Step 2: Clone Your New Repo Locally

```bash
git clone https://github.com/YOUR_USERNAME/materio-registry.git
cd materio-registry
npm install
```

---

## Step 3: Add the Materio Files

### 3a. Replace tokens.css

Copy the contents of `tokens.css` (from this package) to:
```
src/app/tokens.css
```

This maps Materio colors to shadcn CSS variable names.

### 3b. Update globals.css

Copy the contents of `globals.css` (from this package) to:
```
src/app/globals.css
```

This adds:
- Roobert font-face declarations
- Materio component utility classes
- Base typography styles

### 3c. Update tailwind.config.ts

Merge the contents of `tailwind.config.ts` (from this package) with the existing config.

Key additions:
- Materio extended color palette
- Typography scale
- Border radius overrides
- Custom shadows

### 3d. Add Roobert Font Files

1. Create a fonts folder:
   ```bash
   mkdir -p public/fonts
   ```

2. Copy your Roobert font files into it:
   ```
   public/fonts/Roobert-Regular.woff
   public/fonts/Roobert-Medium.woff
   ```

---

## Step 4: Update registry.json

Open `registry.json` in the root of your project.

Find the `baseUrl` field and note that you'll need to update it after deployment:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "materio",
  "baseUrl": "https://YOUR-DEPLOYMENT-URL.vercel.app"
}
```

---

## Step 5: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 to see your registry.

Check that:
- Colors look correct (navy, coral, teal, etc.)
- Roobert font is rendering
- Component previews match Materio style

---

## Step 6: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your `materio-registry` repo
4. Click **Deploy**
5. Wait for deployment to complete
6. Copy your deployment URL (e.g., `materio-registry.vercel.app`)

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## Step 7: Update registry.json with Production URL

1. Open `registry.json`
2. Update `baseUrl` with your Vercel URL:
   ```json
   {
     "baseUrl": "https://materio-registry.vercel.app"
   }
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update baseUrl to production URL"
   git push
   ```

Vercel will automatically redeploy.

---

## Step 8: Use Your Registry in v0

### Method 1: Open in v0 Button

1. Go to your deployed registry (e.g., https://materio-registry.vercel.app)
2. Browse to any component
3. Click **"Open in v0"** button
4. v0 will load with your design system context

### Method 2: Direct Import

In v0.dev chat, you can reference your registry:

```
Use my custom registry at https://materio-registry.vercel.app/r/registry.json
```

---

## Step 9: (Optional) Add to AI Code Editors

To use your Materio registry in Cursor, Windsurf, or other AI editors:

Add this to your MCP config:

```json
{
  "mcpServers": {
    "materio": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "https://materio-registry.vercel.app/r/registry.json"
      }
    }
  }
}
```

---

## Troubleshooting

### Fonts not loading
- Verify font files are in `public/fonts/`
- Check browser Network tab for 404 errors
- Ensure file names match exactly (case-sensitive)

### Colors look wrong
- Clear browser cache
- Check that `tokens.css` is imported in `globals.css`
- Verify CSS variables are being applied (inspect element)

### v0 not using my styles
- Make sure you clicked "Open in v0" from YOUR registry, not the default shadcn
- Check that registry.json baseUrl matches your deployment URL

---

## Files Reference

| File | Purpose |
|------|---------|
| `tokens.css` | CSS variables mapping Materio colors to shadcn names |
| `globals.css` | Font-face, base styles, utility classes |
| `tailwind.config.ts` | Typography scale, border radius, extended palette |
| `public/fonts/` | Roobert font files |
| `registry.json` | Registry metadata and component definitions |

---

## Next Steps

1. **Add custom blocks** — Create starter templates for common Materio screens
2. **Document components** — Add demos showing Materio patterns
3. **Share with team** — Anyone can use "Open in v0" to prototype with Materio styles

---

## Support

If v0 generations don't match Materio:
1. Check that you started from your registry (not default shadcn)
2. Be explicit in prompts: "Use Materio styling with navy primary and coral secondary"
3. Reference specific components: "Use a card-materio container"
