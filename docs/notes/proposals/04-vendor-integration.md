# 提案 04：vigorX777 技能集的 vendor 接入计划

> 状态：Draft，供 PR 内讨论。合并前不会改动 `docs/notes/2026-04-23-init-plan.md`，也不会实际接入任何 submodule。

## 1. 背景

mentor 已确定：vigorX777（GitHub [@vigorX777](https://github.com/vigorX777)）的多个工具作为本项目执行层参考，以 **git submodule 形式引入到 `.claude/vendor/`**，符合全局 CLAUDE.md 中"项目级 skills via submodule"的约束。

这位作者的仓库线路正好是一条完整的中文内容运营自动化链路（抓取 → 评分 → 沉淀 → 生产 → 发布），与 improve_suggestion 第 12.2 节的 4 个能力模块一一对应。

本 PR 的目标是**讨论接入计划**——先接哪几个、怎么接、谁管密钥、license 怎么处理。本 PR 不真正做 submodule add。

## 2. 需要立刻回应的 3 个风险

### 2.1 License 空缺（强风险）

**所有候选仓库的 license 字段都是 null**。GitHub 默认语义：未声明 license 等同"保留所有权利"，严格来说不允许修改、分发或派生。

我们的 vendor submodule 属于 **"链接使用 + 本地运行"**，通常不构成违规（只要不对外分发），但：

- 内部二次开发（加 patch / 改 prompt）就处于灰色地带。
- 将来若要把 MediaOperator 开源，会因依赖无 license 而连带无法合规开源。

**建议的处理顺序**：

1. intern 调研每个仓库 README / Issue / 公众号"懂点儿AI"，看作者是否在其他地方声明了 license（例如 MIT / Apache-2.0）。
2. 若没有明确说明，**由 intern 通过 Issue / 私信向作者确认**，请求声明 license。这是一次很好的开源协作练习。
3. 在 license 明确之前，所有 submodule 只做"对比阅读 + 学习参考"，**不做 fork 修改，不进入生产流水线**。
4. 如果 60 天内无法获得 license 答复，退回到"能力模块抽象 + 自研最小实现"方案。

### 2.2 Submodule 形态 vs Claude plugin 形态（中风险）

快速探查发现：

| 仓库 | 形态 | 说明 |
|---|---|---|
| `ai-daily-digest` | Claude Skill（有 `SKILL.md`） | TypeScript，自带 scripts |
| `content-collector-skill` | Claude Skill（有 `SKILL.md` + `.env.example`） | Python，需要 API 凭据 |
| `md2wechat-skill` | **Claude Code Plugin**（有 `.claude-plugin/`） | 理论上可通过插件市场装，也可作为 submodule |

`md2wechat-skill` 是 **完整 Claude Code 插件**，不是纯 skill。submodule 形态和插件市场装的功能一致，但：

- **submodule 方式**：对依赖路径可控，Git 历史可追溯，可以 pin 到特定 commit。
- **插件市场方式**：与你们现有的 marketplace 机制（`.agents/claude/` 下的 marketplace 声明）一致。

**建议**：三个核心仓库全部走 submodule 路线（理由：需要 pin commit + 可能需要本地 patch），但要在 intern 调研阶段确认 `md2wechat-skill` 如果被上游删除，你是否还能本地可用。

### 2.3 API 密钥与凭据（中风险）

`content-collector-skill` 的 `.env.example` 表示它需要至少：

- 飞书应用凭据（用于写入飞书文档）
- 社交媒体平台凭据（具体哪些待调研）

`md2wechat-skill` 几乎肯定需要：

- 微信公众号开发者凭据（AppID / AppSecret）

**建议**：

- 第一阶段所有密钥**由 mentor 持有**，intern 看不到原文。
- 密钥注入通过 `.env.local`（已在 .gitignore 里）或 macOS keychain。
- 在 `docs/notes/ops/credentials.md`（文档不含密钥，只描述谁有）做权责登记。

## 3. Phase 1 接入清单（3 个核心）

与 PR #2 的主阵地决策（公众号 + 小红书 + 抖音）对齐。

| 顺序 | 仓库 | 能力模块 | 接入动机 | 预期 vendor 路径 |
|---|---|---|---|---|
| 1 | `ai-daily-digest` | 信息采集 + 评分 | 直接自动化 PR #3 的监控库 L1/L2 日常扫描 | `.claude/vendor/ai-daily-digest/` |
| 2 | `content-collector-skill` | 内容整理 + 入库 | 把扫描结果落到 PR #3 选定的飞书多维表 | `.claude/vendor/content-collector-skill/` |
| 3 | `md2wechat-skill` | 分发（公众号） | 公众号一键排版 + 草稿箱上传，对应 PR #2 周三发布动作 | `.claude/vendor/md2wechat-skill/` |

**接入顺序的理由**：上游先于下游。先通信息进来、再通落盘、最后通发布。每一步接完都能单独验证价值，不会因为下游没接通而白做。

## 4. Phase 1 暂不接入，Phase 2 再评估

| 仓库 | 推迟理由 |
|---|---|
| `x-ai-topic-selector` | X 不是第一阶段主阵地 |
| `x-tweet-writer` | 同上，且第一阶段长文拆分手工完成 |
| `wechat-article-formatter` | 与 `md2wechat-skill` 功能重叠，作 fallback |
| `ppt-svg-generator` | Phase 2 做栏目可视化切片再评估 |
| `bilibili-subtitle` | 视频监控优先级低于文字社区 |
| `web-collector` | `ai-daily-digest` 已覆盖通用采集场景 |
| `feishu-favorites` | 飞书素材池由 `content-collector-skill` 主导，重复 |
| `doc-image-sync` | 配图管线 Phase 2 再说 |
| `skill-control-panel` | 运维层，等有 ≥ 3 个 skill 后再装 |

## 5. intern 的调研任务（合并后 1 周内交）

交付形式：在此 PR 评论区回应，或新开一个调研结果 PR（推荐）。

### 5.1 License & 作者沟通（最高优先级）

- [ ] T1 通读 3 个核心仓库的 README、SKILL.md、公众号"懂点儿AI"相关文章，摘出作者对使用授权的任何表述。
- [ ] T2 若无明确声明，代表项目在 GitHub 上向作者提 Issue 请求声明 license（模板可由 mentor 提供）。
- [ ] T3 调研作者在 X、即刻等其他平台的发言，判断其对商用使用的态度。

### 5.2 依赖与凭据调研

- [ ] T4 列出 3 个核心仓库各自的 **运行时依赖**（Node 版本 / Python 版本 / 包列表）与 **API 凭据需求**。
- [ ] T5 列出若启用全链路，需要申请的外部账号（微信公众号开发者、飞书开放平台、各社交平台等）及申请门槛。

### 5.3 集成技术路径

- [ ] T6 本地先在 `~/Workspace/tmp/` 单独 `git clone` 每个仓库，跑通 README 最小示例，记录踩坑。
- [ ] T7 评估 `md2wechat-skill` 作为 plugin 直接通过 marketplace 装的可行性，对比 submodule 方式。
- [ ] T8 `content-collector-skill` 的飞书多维表 schema 是否与 PR #3 的字段对齐？如不一致，报告差异。

### 5.4 风险与替代

- [ ] T9 如果作者不回复 license 请求，每个能力模块的"自研最小实现"需要多少工作量？（不用真做，给出工时估算。）

## 6. 目录结构提案

```
.claude/vendor/
├── ai-daily-digest/              # submodule
├── content-collector-skill/      # submodule
└── md2wechat-skill/              # submodule
.claude/skills/                    # 指向 vendor 的 SKILL.md 符号链接
├── ai-daily-digest -> ../vendor/ai-daily-digest/SKILL.md
├── content-collector-skill -> ../vendor/content-collector-skill/SKILL.md
└── md2wechat-skill -> ../vendor/md2wechat-skill/SKILL.md
```

注：当前项目 `.claude` 是指向 `.agents/claude/` 的 symlink，所以实际路径是 `.agents/claude/vendor/`。intern 需要在 T6 里验证这条路径是否影响 skill 发现。

## 7. 讨论点

- [ ] **Q1 License 策略** 在作者回复前，是否允许"只读参考、不投入生产"？还是完全不 clone 直到 license 明确？
- [ ] **Q2 接入顺序** 1 → 2 → 3 的顺序是否合理？还是先接发布层（md2wechat）拿快速验证，再补上游？
- [ ] **Q3 Phase 2 候选** Phase 2 最想先上的是 `x-ai-topic-selector` 还是 `ppt-svg-generator`？
- [ ] **Q4 凭据分发边界** intern 是否需要拿到部分凭据做集成测试？如果完全隔离，mentor 是否愿意在测试窗口代跑？
- [ ] **Q5 作者协作** 是否考虑更积极地与作者建立联系（例如引用其文章、提 PR 修 bug），推动 license 声明与社区关系？

## 8. 合并后的下一步

- intern 按第 5 章 9 项任务出调研结果（建议新开一个 PR，保留讨论痕迹）。
- license 明确后，另开实施 PR 做真正的 `git submodule add`。
- v1 实施 PR 合并后，第 8 章附录写入"工具层能力映射"，但**只写能力模块抽象**（采集 / 整理 / 选题 / 分发），具体仓库名只在附录脚注出现，保证日后替换工具不影响方案正文。

## 9. 本 PR 不做什么

- 不执行任何 `git submodule add`。
- 不 clone、fork 或 download 候选仓库到本地。
- 不写入任何密钥或 API 凭据。
- 不改 v0。
