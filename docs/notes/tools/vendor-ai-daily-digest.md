# T1 深度调研：`vigorX777/ai-daily-digest`

## 1) 功能描述（一句话）+ 典型工作流

- 一句话：从 90+ 技术博客 RSS 并发抓取近时段文章，调用 LLM 完成评分/分类/摘要/翻译，输出结构化 Markdown 日报。
- 典型工作流（5 步）：RSS 抓取 -> 时间过滤 -> AI 评分+分类 -> AI 摘要+翻译 -> 趋势总结与可视化（Mermaid + 关键词统计）。

## 2) 运行时依赖（Node 版本、包列表、外部服务）

- 本机实测运行时：
  - Node.js: `v25.9.0`
  - npx: `11.12.1`
  - 执行器：`npx -y bun scripts/digest.ts ...`（通过 `npx` 拉起 bun）
- 包依赖：
  - 该仓库无 `package.json`，主脚本 `scripts/digest.ts` 基于运行时内置能力（`fetch`、`fs/promises`、`process`）执行。
- 外部服务：
  - RSS 源（脚本内置 92 个 feed，部分会 403/timeout）
  - LLM API（Gemini 或 OpenAI-compatible API）

## 3) API 凭据需求

- 必须二选一：
  - `GEMINI_API_KEY`（Gemini 主通路）
  - `OPENAI_API_KEY`（OpenAI 兼容通路）
- 可选：
  - `OPENAI_API_BASE`（例如 `https://api.deepseek.com/v1`）
  - `OPENAI_MODEL`（例如 `deepseek-chat`）
- 实测结论：
  - 当前环境下 Gemini 通路多次出现 `Unable to connect`；
  - 切换到 DeepSeek（OpenAI-compatible）后可稳定生成中文摘要与评分。

## 4) 最近 commit 时间 + 活跃度判断

- 本地 clone 信息（`origin` 指向 `https://github.com/vigorX777/ai-daily-digest.git`）：
  - 最新提交：`1f484a3f2f101cb0f1a94a35b1a1befe0f672b82`
  - 提交时间：`2026-02-15 23:29:40 +0800`
  - 近 90 天提交数（本地统计）：`7`
- 判断：有近 90 天更新，活跃度中等偏上，可用于 Phase 1 试用。

## 5) README / SKILL.md 关键指令（如何跑一次 demo）

```bash
cd /Users/coisy-/Content_production/AI_demo/ai-daily-digest

# 当前环境建议直接走 DeepSeek（OpenAI-compatible）通路
unset GEMINI_API_KEY
export OPENAI_API_KEY="<your_key>"
export OPENAI_API_BASE="https://api.deepseek.com/v1"
export OPENAI_MODEL="deepseek-chat"

mkdir -p output
set -o pipefail
npx -y bun scripts/digest.ts \
  --hours 24 \
  --top-n 10 \
  --lang zh \
  --output ./output/digest-demo.md \
  2>&1 | tee ./output/demo-run.log
```

## 6) 本机 demo 证据（独立 clone/目录运行 + 日志）

- 运行目录（本次采用已存在本地副本）：`/Users/coisy-/Content_production/AI_demo/ai-daily-digest`
- 原始日志文件：`/Users/coisy-/Content_production/AI_demo/ai-daily-digest/output/demo-run.log`
- 原始产物文件：`/Users/coisy-/Content_production/AI_demo/ai-daily-digest/output/digest-demo.md`
- 已将完整证据上传到本 PR 分支目录：`docs/notes/tools/T1output/`
  - `docs/notes/tools/T1output/demo-run.log`
  - `docs/notes/tools/T1output/digest-demo.md`
- 关键日志摘录：
  - `AI provider: OpenAI-compatible (primary)`
  - `Fallback: https://api.deepseek.com (model=deepseek-chat)`
  - `Fetched 2308 articles from 77 feeds (15 failed)`
  - `Found 14 articles within last 24 hours`
  - `Top 10 articles selected (score range: 18 - 26)`
  - `✅ Done!`
- 结果特征：
  - 已生成中文标题、中文摘要、推荐理由、关键词和分类统计；
  - 输出包含 Top3、分类分布、关键词可视化与分组文章清单。

## 7) 踩坑记录

- 坑 1：Gemini 通路在当前网络环境下报 `Unable to connect`，导致评分/摘要批次失败。
  - 表现：文档出现“全 15/30、摘要近似原标题”的兜底结果。
  - 原因：脚本在 AI 调用失败时有默认回退值（评分 5/5/5，摘要回退标题）。
  - 处理：切换 `OPENAI_API_BASE=https://api.deepseek.com/v1` + `OPENAI_MODEL=deepseek-chat` 后恢复正常。
- 坑 2：部分 RSS 源存在 403/timeout/cert 问题（例如 `utcc.utoronto.ca/~cks` 403）。
  - 影响：抓取成功源数会波动（本次为 77/92），但不阻断主流程。
- 坑 3：报告中的 `<details><summary>` 在部分渲染器显示为原始文本。
  - 处理：已将输出模板改为普通 Markdown 小节标题，提升兼容性。

## 8) license 现状（仓库/文件头/作者公开说明）

- 仓库级：
  - 本地仓库未见 `LICENSE` 文件。
  - GitHub 仓库 license 字段在当前任务背景中标注为 `null`（未声明）。
- 文件头注释：
  - `scripts/digest.ts`、`README.md` 未见明确开源许可证声明。
- 作者公开文章：
  - 本次未检索到明确授权条款文本（待在 T7 模板基础上向作者发 issue 确认）。

结论：在 license 未澄清前，仅建议“只读调研 + 本地试跑”，不建议 fork 后二次分发或改造发布。

## 9) 与 improve_suggestion 12.2 的对应关系

- 主对应模块：`信息采集`（RSS 并发抓取 + 热点源汇总）。
- 次对应模块：`内容整理`（评分、分类、摘要、结构化 Markdown 输出）。
- 非核心覆盖：`选题推荐`有轻度能力（按评分筛选 Top N），但不含团队策略层评分框架。
