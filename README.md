# MediaOperator

运营自动化 Python 仓库。

## Structure

- `docs/`: 项目文档与方案记录
- `src/mediaoperator/`: Python 源码
- `tests/`: 测试目录
- `.agents/`: 智能体配置目录
- `.claude`: 指向 `.agents/claude` 的 Claude Code 配置入口

## Development

```bash
python -m pip install -e .
mediaoperator
```

## Claude Code 协作者指引

### 启动方式

推荐用项目自带的 launcher：

```bash
./media-operator.sh
```

它做四件事：加载 `~/.zshrc` 补齐 PATH、可选加载 `media-operator.local.sh`（每人私有，gitignore）与 `.mcp.env`（MCP 密钥）、在 tmux 里起一个可 SSH 断线重连的会话、提供「标准 / worktree 隔离 / 远程遥控」三种模式。需要 `tmux` 与 `claude` 已安装。

权限模式**不硬编码**：默认走 `.agents/claude/settings.json` 里的 `defaultMode`。临时覆盖可前置环境变量：

```bash
CLAUDE_PERMISSION_MODE=acceptEdits ./media-operator.sh
```

### 插件配置（团队共用）

插件清单静态声明在 `.agents/claude/settings.json`（通过 `.claude` symlink 暴露）。**要编辑配置请改 `.agents/claude/settings.json` 真文件**，不要改 symlink。

当前启用的 project-scope 插件（均来自各自上游官方仓库）：

| 插件 | marketplace (upstream) | 作用 |
| --- | --- | --- |
| `commit-commands` | `anthropics/claude-plugins-official` | 统一 commit / PR 工作流 |
| `code-review` | 同上 | PR 代码审查 |
| `superpowers` | 同上 | TDD、systematic debugging、写/执 plan 等工程纪律 |
| `context7` | 同上 | 第三方库文档实时查询 |
| `remember` | 同上 | 跨 session 项目知识沉淀 |
| `agent-browser` | `vercel-labs/agent-browser` | 浏览器自动化（抓社媒榜单、发内容） |
| `positioning-statement` | `deanpeters/Product-Manager-Skills` (marketplace `pm-skills`) | 内容 / 品牌定位话术 |

### 首次 clone 后

1. 确保本机装了 `claude` CLI 与 `tmux`：`npm install -g @anthropic-ai/claude-code && brew install tmux`。
2. `./media-operator.sh`。
3. 首次启动会提示信任三个 marketplace（`claude-plugins-official` / `agent-browser` / `pm-skills`），选信任。
4. Claude Code 自动下载并启用上述插件；需要刷新时在会话内跑 `/reload-plugins`。
5. 个人偏好类插件（LSP、`impeccable`、`frontend-design` 等）请自行装到用户级（`--scope user`），**不要**提交到本仓库。
6. 如需个人本地覆盖（代理 / API base URL 等），创建 `media-operator.local.sh`（已 gitignore）；MCP 密钥写入 `.mcp.env`（同 gitignore）。
