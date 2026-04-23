---
name: pip-use-uv
enabled: true
event: bash
action: block
conditions:
  - field: command
    operator: regex_match
    pattern: (^|[;&|])\s*(pip|pip3)(\s|$)|(^|[;&|])\s*(python|python3)\s+-m\s+pip(\s|$)
---

🚫 **Direct `pip` / `pip3` / `python -m pip` blocked.**

This project uses [uv](https://github.com/astral-sh/uv) for package management. uv is 10–100× faster and resolves lockfiles deterministically.

    pip install foo          → uv pip install foo   (or: uv add foo)
    pip install -r req.txt   → uv pip install -r req.txt
    pip freeze               → uv pip freeze
    pip uninstall foo        → uv pip uninstall foo  (or: uv remove foo)

For project dependencies, prefer `uv add <pkg>` — it updates `pyproject.toml` and the lockfile atomically.
