---
layout: base.njk
title: Agent.sh — Instant LLM Ops On Any Shell
tags: posts
date: 2025-09-20
---

# Agent.sh — Instant LLM Ops On Any Shell

I’ve always wanted a way to drop onto a random Linux box—fresh Arch VM, prod bastion, whatever—and get LLM superpowers without installing half the internet first. Agent.sh is the answer: a single Bash script that spins up a REPL, proxies an OpenAI-compatible chat endpoint, and can execute shell commands (with my approval) on demand. No daemons, no Python runtimes, no magical background services—just curl, jq, and the terminal.

Grab the code here: [github.com/surya-prakash-susarla/agent_sh](https://github.com/surya-prakash-susarla/agent_sh)

## Why build it?

Setting up Arch from scratch reminded me how much context-switching it takes to go hunt down obscure flags or man pages. I wanted the model to do the reasoning and let me simply approve the commands. That meant:

- **Zero-runtime footprint.** Pure Bash + standard utilities so it runs anywhere.
- **Explicit control.** The model must ask before launching anything, and I get to approve/deny.
- **Multi-turn tool loops.** The agent should chain commands (run → inspect output → run more) without losing context.
- **No persistent services.** Just download the script and go.

## Architecture in one shot

Everything lives under `src/` with a tiny bashly config generating the CLI:

| Layer | What it does | File(s) |
|-------|--------------|---------|
| **CLI Scaffolding** | `bashly.yml` + `build.sh` emit the final `dist/agent` binary. | `bashly.yml`, `build.sh`, `dist/agent` |
| **Entry Point** | Prints the resolved config and enters the REPL. | `src/root_command.sh` |
| **System Instruction** | Long-form prompt that tells the LLM how to behave (tool JSON format, network-safety rules). | `src/lib/instructions.sh` |
| **REPL Loop** | Handles user input, displays labeled blocks, logs history, and mediates tool approvals. | `src/lib/repl.sh` |
| **Network Layer** | Posts `.agent_conversation` to the endpoint, parses tool calls vs. assistant replies, propagates API errors. | `src/lib/network.sh` |
| **Logging Helpers** | Debug output gating (`--debug` flag). | `src/lib/logging.sh` |

Conversation state is just a JSON lines file (`.agent_conversation`). Each turn gets appended as `{role, content}` (system/user/assistant/tool). That history is sent back to the LLM every time so the model remembers previous turns.

## Tool calls, done right

Originally the loop would re-run the same command if the model tried a multi-step flow. I fixed that by structuring the response from `get_response()` as a typed JSON object:

```json
{
  "type": "tool",
  "assistant_message": { ... raw LLM message ... },
  "command": "git log -n 5 --oneline"
}
```

Whenever `type` is `tool`, the REPL records the assistant’s request, prints a `[Tool Request]` block, asks for approval, and only after the command finishes does it append a `tool` message with stdout/stderr. The loop keeps running until the model sends a normal assistant reply (`type: "assistant"`).

The REPL output is now much cleaner:

```
[User]
> can you run git log -n 5 --oneline?

[Tool Request]
  git log -n 5 --oneline
[Approval] Run this command? (y/n) y

[Assistant]
  ab367ff test: Add comprehensive denial and approval tests
  fd7a639 test: Implement comprehensive test suite for tool use
  ...
```

That formatting makes long sessions easier to follow, especially when the agent fires multiple commands back-to-back.

## Web lookups without tears

I added a prompt section telling the model how to use `curl`/`wget` safely:

- Always run with `-s`, `--fail`, and timeouts.
- Prefer plain text or JSON endpoints (DuckDuckGo Lite, Wikipedia API, etc.).
- No binary downloads unless the user explicitly asks.
- Summarize the result and cite the URL.
- Report failures instead of retrying blindly.

This keeps the shell script lightweight—no complicated HTML parsing—and the model still fetches whatever docs it needs.

## Tests you can trust

Everything is exercised via shell scripts under `tests/`:

- `test_conversation.sh` verifies normal chat and memory.
- `test_tool_use.sh` covers command execution and approval.
- `test_simple_denial.sh`, `test_multi_denial.sh`, `test_recursive_approval.sh` walk through denial/approval edge cases.

Each script now reads `AGENT_ENDPOINT` and `AGENT_MODEL` from the environment, so you can point the suite at any endpoint without editing code:

```bash
export AGENT_ENDPOINT="http://demo-llm.local:11434"
export AGENT_MODEL="gpt-oss:20b"
bash run_tests.sh
```

Logs drop into `outputs/*.log` so you can review exactly what happened.

## Shipping it

To make this actually usable by other people:

1. The built binary (`dist/agent`) is versioned in git.
2. Releases (e.g., [v1.0.0](https://github.com/surya-prakash-susarla/agent_sh/releases/tag/v1.0.0)) include the binary as a downloadable asset.
3. The README now has an onboarding checklist (Download → Configure → Run) plus embedded transcripts of real sessions.
4. Everything’s MIT-licensed.

The end result: download a single file, point it at your OpenAI-compatible server, and you instantly have an LLM shell sidekick.

## What’s next?

Stuff I’d love to explore:

- Optional helper functions for common web APIs (DuckDuckGo, package search, etc.).
- Alternative tool types (`git`, `apt`, `systemctl`) routed to specific helper scripts.
- Maybe a persistent memory layer for long-running projects.

But even as-is, Agent.sh already solves my day-one VM setup pain. Drop the binary onto a fresh Arch box, set the endpoint, and let the LLM sweat the details while you stay in control.

Grab it here: [github.com/surya-prakash-susarla/agent_sh](https://github.com/surya-prakash-susarla/agent_sh)
