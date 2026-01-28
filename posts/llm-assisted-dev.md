---
layout: base.njk
title: Building This Blog With LLM Agents - 27 Jan 2026
tags: posts
date: 2026-01-27
---

# Building This Blog With LLM Agents

This blog has been built and maintained almost entirely through conversations with LLM agents. I wanted to document how that's been going—what works, what doesn't, and some observations along the way.

## The Setup

The [first post](/posts/setting-up-this-blog/) covers the initial detour: I wanted a simple static site but refused to give CLI tools access to my personal Mac. That led me down a rabbit hole of Hyper-V, GPU passthrough, and eventually just running Gemini CLI in an Ubuntu VM. The site itself—Eleventy, Nunjucks templates, plain CSS—was scaffolded through that conversation.

## Recent Work: Claude Code

More recently I've been using [Claude Code](https://claude.ai/code), Anthropic's CLI agent. The workflow is different from web-based chat. It has direct access to the filesystem, can read and edit files, run commands, and create git branches and PRs. Here's what we built in a single session:

### Feature 1: Month-grouped navigation

The nav sidebar was a flat list of posts. I wanted Medium-style groupings—subtle month headers with posts nested underneath.

The agent:
1. Explored the codebase (template, CSS, Eleventy config)
2. Proposed adding a `date` field to frontmatter instead of parsing dates from titles
3. Asked clarifying questions (what about posts without dates? newest-first or oldest-first?)
4. Implemented the changes across 4 files
5. Built, committed, pushed, and created a PR

The whole thing took one conversation. I reviewed the PR, merged it, and the agent cleaned up the branch.

### Feature 2: Post footer with publication date

I wanted a subtle footer showing when each post was published—a partial-width divider with the date centered below.

Same flow: exploration, implementation, PR. But this one had a couple of interesting moments.

**The timezone bug.** The first build showed "20 Sep 2025" for a post dated September 21st. JavaScript's `getDate()` was interpreting the UTC date in local time, shifting it back a day. The agent caught this in testing and fixed it by switching to `getUTCDate()`.

**The script location debate.** The agent created a helper script to scaffold new posts with auto-filled dates. It put it in `ai_gen/`—a directory I'd designated for throwaway scripts and gitignored. I asked: "wait, if I depend on this but it's not in git, a clone would break." We moved it to `scripts/` instead.

Both of these were things I would've caught in code review, but the agent surfaced them during implementation. The conversation felt collaborative rather than just "generate code, hope it works."

## The Instructions File

Claude Code reads a `CLAUDE.md` file from the repo root—think of it as onboarding docs for the agent. Mine covers:

- **Project context**: Tech stack, directory structure, key files
- **Git workflow**: Never push to main, always use PRs, branch naming conventions
- **Commands**: How to build, run dev server, create issues
- **Conventions**: Build output must be committed, post title format, single layout pattern
- **Backlog**: Use GitHub Issues, check `gh issue list` at session start

The file is about 130 lines. Not exhaustive, but enough to establish the ground rules.

### How It's Holding Up

**What's working:**
- The PR workflow is respected consistently. Every change goes through a branch and PR—no direct pushes to main.
- The agent runs `npm run build` after changes and commits the `docs/` output without being reminded.
- It checks `gh issue list` when I mention the backlog and uses `Closes #N` in PR descriptions.
- Branch naming follows the conventions (`feature/`, `post/`, `fix/`).

**What needed reinforcement:**
- The `ai_gen/` section said it was for "throwaway scripts"—but that was ambiguous. When the agent put a useful script there, I had to clarify that important tooling should go somewhere tracked. The instructions were technically followed but the intent was missed.
- The file mentioned committing build output, but didn't explicitly say "check git status after building." Minor, but I've seen the agent occasionally miss untracked files.

**What I might add:**
- Explicit note about checking `.gitignore` before creating new directories
- A section on testing changes locally before committing
- Maybe examples of good vs bad commit messages

The instructions file isn't magic—it's context. The agent still makes judgment calls, and sometimes those need correction. But it dramatically reduces the "wait, that's not how we do things here" moments. Starting a session cold, the agent already knows this is an Eleventy site, that PRs are required, and that the nav auto-generates from the posts collection. That baseline matters.

## What Works Well

**Exploration before implementation.** The agent reads files, understands existing patterns, and proposes changes that fit the codebase style. It's not just dumping generic code.

**The PR workflow.** Having the agent create branches and PRs means I review changes the same way I would from a human contributor. The diff is right there. I can request changes or merge.

**Catching its own mistakes.** The timezone bug wasn't something I pointed out—the agent tested the build, noticed the date was wrong, and fixed it before I saw it.

**Asking good questions.** Instead of assuming, it asked about the post without a date and about sort order. Small things, but they matter.

## What Requires Attention

**Gitignore awareness.** The agent didn't check whether `ai_gen/` was tracked before putting important code there. I had to catch that.

**Scope creep potential.** Agents are eager to help. If you're not specific, they might add features you didn't ask for. Being clear about what you want (and don't want) matters.

**Still need to review.** The code is generally good, but I wouldn't merge without looking. It's a tool, not a replacement for judgment.

## Observations

The dynamic that works best: I describe what I want at a high level, the agent proposes an approach and asks questions, I approve or redirect, it implements, I review the PR. It's not that different from working with a junior developer who happens to type very fast and never gets tired.

The agents are getting better at knowing when to ask versus when to proceed. Early on, I'd get implementations that missed the point. Now there's more back-and-forth upfront, which saves time overall.

I'm curious how this scales. A blog is simple—clear file structure, fast feedback loops, low stakes. Larger codebases with more context, more conventions, more ways to break things? That's the real test.

For now, though, it's been useful. This post itself was drafted by the same agent that built the features it's describing. Meta, but fitting.

