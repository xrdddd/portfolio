# Portfolio site

A static, single-page portfolio (`index.html` + `style.css` + `script.js`) — no build step, ready for GitHub Pages.

## 1. Personalize before you deploy

Search each file for these placeholders and replace them:

| Placeholder | Where | Replace with |
|---|---|---|
| `Your Name` | `index.html` (title, sidebar) | Your name |
| `you@example.com` | `index.html` (contact) | Your email |
| `github.com/yourusername` | `index.html` (contact) | Your GitHub profile |
| `linkedin.com/in/yourusername` | `index.html` (contact) | Your LinkedIn profile |
| `href="#"` in `.entry-links` | `index.html` (project entries) | Real links: IEEE paper, live demos, Hugging Face pages, arXiv paper, repos |

The bio line in `<header class="hero">` and each project's one-line description are drafted from what you gave
me — read through them and adjust anything that doesn't sound like you.

## 2. Deploy with GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a root user site, or any name for a
   project site).
2. Push these three files to the repository root:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish the site at:
   - `https://yourusername.github.io` (if the repo is named `yourusername.github.io`), or
   - `https://yourusername.github.io/YOUR_REPO/` (for any other repo name).

It can take a minute or two for the first deploy to go live.

## 3. Structure

```
index.html   — page content, organized as four numbered catalog sections
style.css    — design tokens, layout, responsive rules (light/dark aware)
script.js    — mobile nav toggle + active-section highlighting (no dependencies)
```

## 4. Notes

- No build tools, frameworks, or external JS dependencies — just static files.
- Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) load from Google Fonts via `<link>` tags in `index.html`.
- Color scheme automatically follows the visitor's OS light/dark preference. To force one theme, set
  `<html data-theme="dark">` (or `"light"`) in `index.html`.
- Add a `LICENSE` file if you want to make the site's code reusable by others (MIT is a common choice for
  portfolio sites).
