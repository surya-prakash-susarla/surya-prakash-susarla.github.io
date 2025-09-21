# AGENTS.md: Personal Blog Project Guidelines

This document provides guidelines and context for AI agents working on the personal blog project.

## Project Overview

The goal is to create a clean, professional, and fast personal blog using Eleventy (11ty).

## Requirements

### Layout
- **Header:** A title bar at the top with the text "Surya Susarla".
- **Subtitle:** "Dev log - About" with "About" linking to the about page.
- **Two-Column Layout:**
    - **Left Sidebar:** Lists all blog posts. Independently scrollable.
    - **Main Content Area:** Displays the content of the selected page or post. Independently scrollable.
- **Default View:** The main content area should display an "About" page by default.

### Styling
- **Theme:** Low-profile and professional.
- **Background:** Off-white.
- **Font:** Sans-serif.
- **Page Title:** "Surya's Log".
- **Left Nav Width:** Narrower than default, currently `1fr 5fr` in media query for wide screens.
- **Separator:** A subtle separator between the left nav and main content.

### Content
- **Posts:** Blog posts are stored in the `posts/` directory.
- **Pages:** The "About" page is `index.md`.

## Commands

- `npm start`: Runs the local development server.
- `npm run build`: Builds the static site for deployment (outputs to `docs/`).

## Project Structure Hints

- **11ty Configuration:** `.eleventy.js` for build settings, output directory (`docs/`), and layout directory (`layouts/`).
- **Layouts:** `layouts/base.njk` defines the main HTML structure.
- **Styles:** `css/style.css` contains global styles.
- **Content:** `index.md` (About page), `posts/*.md` (blog posts).
- **Agent Instructions:** `agent.md` (this file) is for agent-specific instructions and is excluded from the build via `.eleventyignore`.

## Handling Uncertainty

If any requirements are ambiguous or unclear, please ask clarifying questions or propose a plan before proceeding. Avoid making assumptions.
