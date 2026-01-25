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

**Never push directly to main.** All work goes through PRs for review.

### Starting new work

1. Ensure on main and up-to-date: `git checkout main && git pull`
2. Create a feature branch: `git checkout -b <feature-name>`
3. Do the work, commit incrementally
4. When done:
   - Push branch: `git push -u origin <branch-name>`
   - Create PR: `gh pr create --title "type: description" --body "..."`
5. User reviews the PR and merges

### Tools

- **gh CLI** is required for PR creation (`brew install gh && gh auth login`)
- Use `gh pr view` to check PR status
- Use `gh pr merge` if asked to merge from CLI

### If already on a feature branch with uncommitted changes

Finish current work first:
- Commit remaining changes
- Push and create PR
- After merge, switch to main, pull, then start new branch

### Branch naming

Use descriptive prefixes: `post/topic-name`, `fix/issue-description`, `feature/what-it-does`

### Keep PRs small

Make focused, reviewable changes. If a task is large, break it into multiple PRs.

## Conventions

- Always run `npm run build` after content/style changes
- Post titles should include date in format "Title - DD MMM YYYY"
- Keep the single layout pattern - all pages use base.njk

### Build output must be committed

Running `npm run build` regenerates the entire `docs/` folder. This includes:
- HTML files for all pages and posts
- Copied CSS files
- Navigation regeneration (post order may change)

**Always commit `docs/` changes along with source changes.** GitHub Pages serves from `docs/`, so uncommitted build output means the live site won't match your changes. After building, check `git status` and include all `docs/` modifications in your commit.

## Development Utilities

Dev-related bash scripts, helper utilities, and AI prompt templates belong in `ai_gen/`. This keeps the main project clean while preserving useful automation.

Examples of what goes in `ai_gen/`:
- Build/deploy helper scripts
- Test utilities
- Prompt templates for common tasks
- Any throwaway or experimental scripts
