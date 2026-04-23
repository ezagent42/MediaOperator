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

本仓库在 `.agents/claude/settings.json`（通过 `.claude` symlink 暴露）声明了团队统一使用的 Claude Code 插件。要编辑配置请改 **`.agents/claude/settings.json`** 真文件，不要改 symlink。

当前项目启用的插件（均为 project scope）：

| 插件 | marketplace | 作用 |
| --- | --- | --- |
| `agent-setup` | `ezagent42/agent-setup` | 项目级 agent 配置脚手架 |
| `commit-commands` | `anthropics/claude-plugins-official` | 统一 commit / PR 工作流 |
| `code-review` | 同上 | PR 代码审查 |
| `superpowers` | 同上 | TDD、systematic debugging、plan 等工程纪律 |
| `context7` | 同上 | 第三方库文档实时查询 |
| `remember` | 同上 | 跨 session 项目知识沉淀 |

### 首次 clone 后

1. 进入项目目录打开 Claude Code。
2. 首次启动会提示信任 `claude-plugins-official` 与 `agent-setup` 两个 marketplace，选信任。
3. Claude Code 会自动安装并启用上述插件。如需刷新：`/reload-plugins`。
4. 个人偏好类插件（LSP、`impeccable`、`frontend-design` 等）请装到用户级（`--scope user`），不要提交到本仓库。
