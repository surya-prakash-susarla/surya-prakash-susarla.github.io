# Personal Site (surya-prakash-susarla.github.io)

This repo powers my blog and landing page at [surya-prakash-susarla.github.io](https://surya-prakash-susarla.github.io). It is an [Eleventy](https://www.11ty.dev/) project that compiles Markdown posts into a static site inside the `docs/` directory (GitHub Pages serves from `docs/` on the main branch).

## Project Layout

```
css/                    # Global styles (style.css)
docs/                   # Generated site after `npm run build`
layouts/                # Nunjucks layouts (base.njk)
posts/                  # Blog posts (Markdown)
index.md                # About / landing page
agent.md                # Agent-specific page (optional)
package.json            # Scripts and Eleventy dependency
```

## Writing Workflow

1. **Draft the post:** create a new Markdown file in `posts/` with front matter:
   ```markdown
   ---
   layout: base.njk
   title: My Title - DD MMM YYYY
   tags: posts
   ---
   ```

2. **Preview locally:**
   ```bash
   npm install          # once per clone
   npm run start        # eleventy --serve (hot reload)
   ```
   Visit `http://localhost:8080` to preview the site.

3. **Build + commit:**
   ```bash
   npm run build        # generates docs/
   git status           # confirm docs/ has updated HTML
   git add posts/<slug>.md docs/posts/<slug>/ docs/index.html ...
   git commit -m "post: title"
   git push
   ```

4. **Deploy:** GitHub Pages is already configured to serve from `docs/` on the `main` branch. A simple push updates the live site.

### Linking Posts on the Landing Page

`index.md` uses the `base.njk` layout which automatically lists entries tagged `posts`. As long as your new post includes `tags: posts`, Eleventy’s collection will surface it on the root page. If you want custom highlights, you can edit `index.md` and add manual links:

```markdown
- [Agent.sh — Instant LLM Ops On Any Shell](/posts/agent-sh-instant-llm-ops/)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run start` | Run Eleventy in watch/serve mode (default localhost:8080). |
| `npm run build` | Generate the static site into `docs/`. |
| `npm install` | Install project dependencies. |

## Tech Stack References

- [Eleventy](https://www.11ty.dev/) — static site generator
- [Nunjucks](https://mozilla.github.io/nunjucks/) — templating language used by Eleventy layouts
- [GitHub Pages](https://pages.github.com/) — hosting for the generated site
- [Node.js](https://nodejs.org/) — runtime required for Eleventy
- [npm](https://www.npmjs.com/) — package manager used to install dependencies

## Misc Notes

- The `docs/` folder is generated; keep an eye on diffs when committing (GitHub Pages requires it in the repo).
- Styles live in `css/style.css`. Update that file to tweak site-wide visuals.
- For public assets (images, etc.), create a directory (e.g., `assets/`) and copy them via Eleventy passthrough config if needed.

Happy writing!
