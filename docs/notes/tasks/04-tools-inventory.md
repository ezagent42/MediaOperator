# 任务 04：补充工具列表

> 这是一个**可执行任务清单**，合并条件是 @sweetcoisy 完成 T1–T8。mentor 为 `@allenwoods`（兼 Player-Coach）。
>
> 本任务不改 `docs/notes/2026-04-23-init-plan.md`。产出落在 `docs/notes/tools/`。

## 背景

- mentor 已拍板：vigorX777（GitHub [@vigorX777](https://github.com/vigorX777)）的工具以 **git submodule 形式引入 `.claude/vendor/`**。
- Phase 1 接入 3 个核心仓库：`ai-daily-digest` / `content-collector-skill` / `md2wechat-skill`。
- 参考文档：[`docs/notes/improve_suggestion.md`](../improve_suggestion.md) 第 12 章（工具层抽象为 4 个能力模块：信息采集 / 内容整理 / 选题推荐 / 分发与复盘）。

**已知风险**：所有 vigorX777 候选仓库的 GitHub license 字段为 **null**（未声明授权）。在作者澄清前，二次修改处于灰色地带。

## 交付目标

合并后，mentor 拿到一份可以直接拍板"买不买 / 接不接"的工具盘点表：

- 每个工具的能力、成本、依赖、许可状态清清楚楚
- 每个能力模块都至少有 1 个非 vigorX777 的替代方案
- 凭据清单到位，知道每项要找谁申请
- license 处理路径明确

## 任务清单

### vigorX777 深度调研（核心 3 仓库）

- [ ] **T1** 深度调研 `vigorX777/ai-daily-digest`
  - 产出：`docs/notes/tools/vendor-ai-daily-digest.md`
  - 必填字段：
    - 功能描述（一句话）+ 典型工作流
    - 运行时依赖（Node 版本、包列表、外部服务）
    - API 凭据需求（RSS？OpenAI？其他？）
    - 最近 commit 时间 + 活跃度判断
    - README / SKILL.md 关键指令（如何跑一次 demo）
    - **在本机 `~/Workspace/tmp/ai-daily-digest/` 独立 clone 并跑一次最小示例**，截图或贴日志证据
    - 踩坑记录
    - license 现状（仓库、文件头注释、作者公众号文章里有无声明）
  - 与 improve_suggestion 12.2 的对应关系（属于 4 个能力模块中的哪个）

- [ ] **T2** 深度调研 `vigorX777/content-collector-skill`
  - 产出：`docs/notes/tools/vendor-content-collector.md`
  - 同 T1 字段
  - 特别关注：**飞书多维表集成方式**（对比 PR #3 的 T8 字段，如不兼容需在 PR #3 里调字段）

- [ ] **T3** 深度调研 `vigorX777/md2wechat-skill`
  - 产出：`docs/notes/tools/vendor-md2wechat.md`
  - 同 T1 字段
  - 特别关注：**这是一个 Claude Code Plugin**（有 `.claude-plugin/` 目录），submodule 方式 vs 插件市场装的差异，建议哪种接入

### vigorX777 轻量调研（其他 6 仓库）

- [ ] **T4** 其他仓库盘点
  - 产出：`docs/notes/tools/vendor-others.md`
  - 覆盖：`x-ai-topic-selector` / `x-tweet-writer` / `wechat-article-formatter` / `ppt-svg-generator` / `bilibili-subtitle` / `web-collector` / `feishu-favorites` / `doc-image-sync` / `skill-control-panel`
  - 每个只写：一句话功能、相关度评分（1-5）、Phase 2 是否值得接、替代了 Phase 1 哪个工具（如有）
  - 给出 Phase 2 候选优先级排序

### 能力模块的替代方案

- [ ] **T5** 非 vigorX777 替代方案
  - 产出：`docs/notes/tools/alternatives.md`
  - 4 个能力模块每个给 ≥ 1 个替代方案：
    - 信息采集：RSSHub / Feedbin / Inoreader / 自建 playwright 脚本
    - 内容整理：飞书多维表 + 飞书机器人 / Notion API / Airtable
    - 选题推荐：简单评分表 + Claude 直接聊 / 自建 prompt
    - 分发与复盘：秀米 + 公众号图文助手 / 讯飞语音 / 自研
  - 每个替代方案给：成本、学习曲线、和 vigorX777 对应工具的差异

### 凭据与成本

- [ ] **T6** 凭据需求清单
  - 产出：`docs/notes/tools/credentials.md`
  - 列出启用全链路所需的所有外部账号：
    - 微信公众号开发者（AppID / AppSecret）
    - 飞书开放平台（app id / app secret / 权限范围）
    - 各社交平台 API（X / Reddit 等；第一阶段可标注 "Phase 2"）
    - LLM API（OpenAI / Anthropic / 国内厂商）
  - 每项：申请门槛、审核周期、年费估算、谁负责申请

### License 处理

- [ ] **T7** License Issue 模板
  - 产出：`docs/notes/tools/license-issue-template.md`
  - 一份可以直接复制提到 vigorX777 三个仓库 Issues 里的模板
  - 内容：介绍自己、说明使用场景、询问 license 意向（推荐 MIT/Apache-2.0/CC-BY）、表达愿意贡献 PR
  - @allenwoods 审过后，@sweetcoisy 在 3 个核心仓库各提一个 Issue

### 回退方案

- [ ] **T8** 回退方案工时估算
  - 产出：`docs/notes/tools/fallback-plan.md`
  - 如果作者 60 天内不回复 license 请求，每个能力模块"自研最小实现"的工时估算
  - 每项给出：P0 最小可用（MVP）工时、P1 完整功能工时、推荐的优先实现顺序

## 交付物清单汇总

- `docs/notes/tools/vendor-ai-daily-digest.md`
- `docs/notes/tools/vendor-content-collector.md`
- `docs/notes/tools/vendor-md2wechat.md`
- `docs/notes/tools/vendor-others.md`
- `docs/notes/tools/alternatives.md`
- `docs/notes/tools/credentials.md`
- `docs/notes/tools/license-issue-template.md`
- `docs/notes/tools/fallback-plan.md`
- `docs/notes/tools/README.md`（索引 + 一页纸总结）

## 角色分工

| 环节 | DRI（@allenwoods） | Player-Coach（@allenwoods） | IC（@sweetcoisy） |
|---|---|---|---|
| 调研方向与取舍 | A | C | C |
| 实际 clone / 跑 demo | I | I | R |
| license issue 模板 | A | C | R |
| 凭据申请推动 | R | C | C |
| 最终接入决定 | A | C | I |

## 交付方式

- 在本 PR 分支 `chore/proposal-vendor-integration` 上直接 push commit
- commit message 格式：`docs(tools): T1 ai-daily-digest deep dive`
- 本 PR 不做任何 `git submodule add`（那是 license 确认后的另一个实施 PR）

## 评审节奏

- T1 完成 1 个仓库的字段模板后即 @allenwoods 审（字段对了，后面 2 个仓库就省力）
- T7 license 模板 @allenwoods 审完再发 Issue（避免语气/用词不对冒犯作者）
- 全部 T 完成 → 终审 → Ready for review → 合并

## 讨论点

- [ ] **Q1 Clone 权限** license 未明前是否允许在本机 `~/Workspace/tmp/` 做只读 clone 跑 demo？推荐"允许只读 + 不 fork / 不改代码"
- [ ] **Q2 接入顺序** 1→2→3（上游到下游）还是反向（先发布拿快速验证）？
- [ ] **Q3 Phase 2 首选** `x-ai-topic-selector`（选题推荐）还是 `ppt-svg-generator`（可视化切片）？
- [ ] **Q4 凭据共享** @sweetcoisy 是否需要拿到部分测试凭据？还是 mentor 测试窗口代跑？
- [ ] **Q5 作者合作** 是否主动给作者仓库提 PR 修 bug / 贡献 theme，推动 license 与社区关系？
- [ ] **Q6 替代方案深度** T5 每个模块 1 个替代是否够？还是要出"方案 A / B / C"对比表？

## 本 PR 不做什么

- 不执行 `git submodule add`
- 不 fork / 修改候选仓库
- 不写入密钥或凭据
- 不改 v0 方案文件
- 不讨论栏目 / 受众 / 监控库（→ PR #1 / #2 / #3）
