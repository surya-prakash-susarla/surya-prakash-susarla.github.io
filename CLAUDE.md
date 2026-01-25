# Project Context

Personal blog and portfolio site for Surya Susarla, hosted at https://surya-prakash-susarla.github.io

## Tech Stack

- **Static Site Generator**: Eleventy (11ty) v3.1.2
- **Templating**: Nunjucks (layouts/base.njk)
- **Hosting**: GitHub Pages serving from `docs/` on main branch
- **Styling**: Plain CSS with responsive grid layout

## Project Structure

```
posts/              # Blog posts (Markdown with YAML front matter)
layouts/base.njk    # Single shared layout - header, nav, main content
css/style.css       # Global styles
docs/               # Generated output (committed to repo for GitHub Pages)
index.md            # Landing/about page
agent.md            # Agent-specific page
ai_gen/             # Dev scripts, AI prompts, and helper utilities
```

## Writing a New Post

1. Create `posts/<slug>.md` with front matter:
   ```markdown
   ---
   layout: base.njk
   title: Post Title - DD MMM YYYY
   tags: posts
   ---
   ```
2. The `tags: posts` is required - the nav is auto-generated from `collections.posts`
3. Build and commit both source and `docs/`

## Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (once per clone) |
| `npm run start` | Local dev server at localhost:8080 with hot reload |
| `npm run build` | Generate static site into `docs/` |

## Key Files

- `.eleventy.js` - Config: outputs to `docs/`, passes through `css/`
- `layouts/base.njk` - Template with header, auto-nav from posts collection, main content area
- `css/style.css` - Responsive grid: stacked on mobile, sidebar nav on desktop (768px+)

## Git Workflow

Before starting any new work, ensure a clean git state:

1. **If on main with no changes**: Create a new feature branch (`git checkout -b <feature-name>`)
2. **If on main with uncommitted changes**: Stash or commit them, then branch
3. **If on a feature branch with changes**: Finish the current work first
   - Commit remaining changes
   - Push and raise a PR if ready
   - Switch to main, pull latest, then create new branch for the next task
4. **Starting fresh work**: Always branch from an up-to-date main

Branch naming: use descriptive names like `post/topic-name`, `fix/issue-description`, `feature/what-it-does`

## Conventions

- Always run `npm run build` after content/style changes
- Commit both source files and `docs/` together
- Post titles should include date in format "Title - DD MMM YYYY"
- Keep the single layout pattern - all pages use base.njk

## Development Utilities

Dev-related bash scripts, helper utilities, and AI prompt templates belong in `ai_gen/`. This keeps the main project clean while preserving useful automation.

Examples of what goes in `ai_gen/`:
- Build/deploy helper scripts
- Test utilities
- Prompt templates for common tasks
- Any throwaway or experimental scripts
