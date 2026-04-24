# 任务 01：细化栏目执行样稿与操作手册

> 这是一个**可执行任务清单**，合并条件是 intern 完成（或以合理理由跳过）下面列出的 T1–T8。mentor 为 `@allenwoods`（同时兼任 Player-Coach）。
>
> 本任务不改 `docs/notes/2026-04-23-init-plan.md`。所有产出都落在 `docs/notes/columns/` 与 `docs/notes/templates/` 下。

## 背景

- mentor 已拍板 3 个固定栏目：
  1. **AI-native 组织周观察**
  2. **一个 DRI 会怎么拆这个问题**
  3. **这周值得看的 5 个 signal**
- 主阵地：微信公众号 + 小红书，辅助：抖音
- 参考文档：[`docs/notes/improve_suggestion.md`](../improve_suggestion.md) 第 5 章（内容矩阵与栏目）、第 6 章（周产能与流程）

本任务要把栏目从"名字定了"推进到"每周可照着做"。

## 交付目标

合并后 intern 和 mentor 应该**不需要再讨论怎么做栏目**，只需要讨论每一期的具体内容。

## 任务清单

逐条勾选，完成顺序可灵活，但 T1/T2/T3 的样稿建议在 T4/T5/T6 的模板之前写（先感受实际长度，再回头沉淀模板）。

### 样稿（每个栏目一期）

- [ ] **T1** 写《AI-native 组织周观察》第 01 期样稿
  - 选当周（或上周）一个真实 signal 作为切入
  - 结构：signal 描述（200 字内）→ 我们为什么觉得重要（500 字）→ 组织视角的判断（800 字）→ 可带走的一句话
  - 产出：`docs/notes/columns/ai-native-weekly-ep01.md`，长度 1500–2500 字
  - 同步放一版小红书切片在同文件末尾（3–5 张图配文）

- [ ] **T2** 写《一个 DRI 会怎么拆这个问题》第 01 期样稿
  - 选一个真实问题（建议从我们自己近期工作里挑）
  - 结构：问题原貌 → 一个 DRI 会怎么拆（3–5 步） → 每步留下什么可复用清单 → 复盘：哪些地方 agent 能接管
  - 产出：`docs/notes/columns/dri-breakdown-ep01.md`，长度 2000–3500 字

- [ ] **T3** 写《这周值得看的 5 个 signal》第 01 期样稿
  - 5 条 signal，每条：1 行标题 + 50 字点评 + 1 行"这对 AI-native 组织意味着什么"
  - 末尾加"本周我们在看什么"引导关注
  - 产出：`docs/notes/columns/weekly-signals-ep01.md`，小红书 1 图版 + 公众号合辑版各一份

### 模板

- [ ] **T4** 公众号标题模板库
  - 产出：`docs/notes/templates/wechat-title-templates.md`
  - 至少 10 个模板，分组为：判断型 / 方法型 / 反直觉型 / 案例型 / 借势型
  - 每个模板 1–2 个真实化示例

- [ ] **T5** 小红书封面风格指南
  - 产出：`docs/notes/templates/xhs-cover-guide.md`
  - 3 种风格：信息型 / 观点型 / 人物型
  - 每种：1 张 draft 示意图（可手绘或 Figma 导出）、字号约束、配色、排版要点

- [ ] **T6** 抖音口播脚本模板
  - 产出：`docs/notes/templates/douyin-script-templates.md`
  - 2 种结构：观点直给（60 秒） / 三段起承转合（90 秒）
  - 每种配 1 个基于 T1 或 T2 改写的示例脚本

### 质量与节奏

- [ ] **T7** 栏目质量验收标准
  - 产出：`docs/notes/columns/README.md`
  - 每栏目列 5 条"最终能发出去之前必须满足的条件"（例：不搬运、不复述官方文案、至少 1 个原创判断、……）

- [ ] **T8** 下一期预热机制
  - 每期末尾固定有"下周预告"块：1 句话 + 1 个悬念
  - 写进 T7 的 README 里作为硬要求

## 交付方式

- 首选：在本 PR 分支 `docs/proposal-plan-v1-structure` 上直接 push 每个 T 的 commit（commit message 用 `docs(columns): T1 weekly observation sample draft` 这种格式）
- 备选：每个 T 开一个子 PR 合并到本分支，最后本 PR 一次 merge 到 main

## 评审节奏

- T1 完成时即可 @allenwoods 来审，不用等全部做完
- 建议每 2 个 T 同步一次进度，避免走偏回头成本高
- 全部 T 完成 → mentor 终审 → 本 PR 切出 Ready for review → 合并

## 讨论点（mentor 与 intern 在评论区拍板）

- [ ] **Q1 样稿顺序** T1/T2/T3 哪个先写？推荐 T3（5 signal）先，因为它最轻，用来熟悉工作流
- [ ] **Q2 原创判断的"底线"** 哪些素材类型下必须有判断句？例如纯新闻播报是否允许？
- [ ] **Q3 封面工具** 小红书封面用 Figma、Canva、还是 Xiaomi 文档原生？对 intern 的可及性？
- [ ] **Q4 抖音配音** 本人出镜 vs AI 口播，第一阶段默认哪种？
- [ ] **Q5 历史复用** 样稿质量通过后，是否直接在下周作为"第 02 期"发布素材？还是只作为内部样品？

## 本 PR 不做什么

- 不改 v0 方案文件
- 不定 v1 主文件大纲（那是另一份实施 PR，mentor 拍板后可直接落）
- 不涉及监控库补充（→ PR #3）
- 不涉及工具调研（→ PR #4）
