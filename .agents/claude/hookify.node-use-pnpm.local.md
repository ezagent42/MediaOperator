---
name: node-use-pnpm
enabled: true
event: bash
action: block
conditions:
  - field: command
    operator: regex_match
    pattern: (^|[;&|])\s*(npm|yarn)(\s|$)
---

🚫 **Direct `npm` / `yarn` blocked.**

This project (and the broader team workflow) standardizes on [pnpm](https://pnpm.io/) for Node package management — faster installs, strict dependency resolution, disk-efficient content-addressable store.

    npm install              → pnpm install
    npm install foo          → pnpm add foo
    npm install -D foo       → pnpm add -D foo
    npm run <script>         → pnpm <script>    (or: pnpm run <script>)
    yarn                     → pnpm install
    yarn add foo             → pnpm add foo

If a tool shells out to `npm` internally (e.g., `npx`), use `pnpm dlx` or `pnpm exec` instead.
