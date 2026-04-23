---
name: python-use-uv
enabled: true
event: bash
action: block
conditions:
  - field: command
    operator: regex_match
    pattern: (^|[;&|])\s*(python|python3)(\s|$)
  - field: command
    operator: not_contains
    pattern: uv run
  - field: command
    operator: not_contains
    pattern: uvx
---

🚫 **Direct `python` / `python3` invocation blocked.**

This project standardizes on [uv](https://github.com/astral-sh/uv) for Python execution and dependency management.

Use `uv run` instead:

    python script.py        → uv run python script.py
    python -m pytest        → uv run pytest
    python -m http.server   → uv run python -m http.server

Ad-hoc tool runs can use `uvx <tool>` (no project venv needed).

To bypass for a one-off case, put the command on a separate line so `uv run` or `uvx` appears in the same bash invocation.
