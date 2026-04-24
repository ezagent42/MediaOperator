# 任务 02：细化目标群体与核心信息

> 这是一个**可执行任务清单**，合并条件是 @sweetcoisy 完成 T1–T8。mentor 为 `@allenwoods`（同时兼任 Player-Coach）。
>
> 本任务不改 `docs/notes/2026-04-23-init-plan.md`。产出落在 `docs/notes/audience/`、`docs/notes/messaging/`、`docs/notes/glossary.md`、`docs/notes/phase1-kpi.md`。

## 背景

- mentor 已拍板：
  - **主目标**：吸引认同 AI-native 组织理念的客户与合作方
  - **次目标**：认同该工作方式的未来员工与生态参与者
  - **主阵地**：公众号 + 小红书 + 抖音
  - **第一批栏目**：AI-native 组织周观察 / 一个 DRI 会怎么拆这个问题 / 这周值得看的 5 个 signal
- 参考文档：[`docs/notes/improve_suggestion.md`](../improve_suggestion.md) 第 2 章（项目背景与阶段目标）、第 3 章（核心信息翻译）

本任务要回答："我们每写一篇内容，脑子里想的那个具体的人长什么样。"

## 交付目标

合并后，栏目每期选题会上的"这期给谁看"**一句话就能回答**。写手写标题时，直接能对照到某一类受众的关注话题。

## 任务清单

### 受众画像（每层一个可操作文档）

- [ ] **T1** A 层：核心客户方
  - 产出：`docs/notes/audience/persona-a-client.md`
  - 必填字段：典型职位、典型组织规模、日常阅读的 3 个平台、最关注的 5 个话题、典型痛点 3 条、典型反对意见 2 条、判断内容"值不值得看完"的 3 个信号
  - 至少 2 个具体画像样本（不必真实，虚构人物但结构完整）

- [ ] **T2** B 层：合作方 / 生态共建
  - 产出：`docs/notes/audience/persona-b-partner.md`
  - 同 T1 字段结构

- [ ] **T3** C 层：潜在员工 / 贡献者
  - 产出：`docs/notes/audience/persona-c-talent.md`
  - 同 T1 字段结构

- [ ] **T4** D 层：行业观察者（轻量版）
  - 产出：`docs/notes/audience/persona-d-observer.md`
  - 只需：是谁、为什么重要、怎么让他们"有机"遇到我们的内容（不做主动投放）

### 选题喂料

- [ ] **T5** 每类受众的 5 个典型问题
  - 产出：`docs/notes/audience/typical-questions.md`
  - 每层 5 个问题，配 1 个示例回答角度（用于未来选题会）

### 核心信息

- [ ] **T6** 对外核心信息
  - 产出：`docs/notes/messaging/core-messaging.md`
  - 内含：
    - 内部术语 → 对外表达 对照表（至少 4 对，参考 improve_suggestion 3.1）
    - 3–5 个"内容主张"候选句（一句话，用于所有内容的总纲；mentor 从中拍板一条或合成新句）
    - 3 条"对外表达原则"（例：不卖关子 / 不讲抽象定义 / 先给判断再给依据）

### 术语表 & KPI

- [ ] **T7** 术语表 v0.1
  - 产出：`docs/notes/glossary.md`
  - 8–12 个关键术语，每个包含：定义、使用场景、使用注意（例：对外不直接用）、英文对应（若有）
  - 候选术语：AI-native 组织 / 协作拓扑 / 信息网络中心 / DRI / Player-Coach / IC / agent workflow / context engineering / 原创增量 / signal / 阵地

- [ ] **T8** 第一阶段 KPI 数字化
  - 产出：`docs/notes/phase1-kpi.md`
  - 把 improve_suggestion 2.1(3) 的 5 条交付目标填成具体数字（例：8 周后累计阅读人数、关注人数、候选人沉淀数、商务对话次数）
  - 每个数字给出"最低达成 / 目标 / 惊喜"三档

## 角色分工（此 PR 内采用）

| 环节 | DRI（@allenwoods） | Player-Coach（@allenwoods） | IC（@sweetcoisy） |
|---|---|---|---|
| 任务清单定义 | A | C | I |
| 画像字段与样本 | C | A | R |
| 核心信息候选 | C | A | R |
| 术语表 | C | A | R |
| KPI 数字 | A | C | R |

（R = Responsible 执行；A = Accountable 拍板；C = Consulted；I = Informed）

Player-Coach 暂由 mentor（@allenwoods）兼任；@sweetcoisy 为 IC（IC-运营）。

## 交付方式

- 在本 PR 分支 `docs/proposal-phase1-positioning` 上直接 push commit
- commit message 格式：`docs(audience): T1 persona A draft`

## 评审节奏

- T1 完成即可 @allenwoods 初审（画像字段结构最重要，第一版对了后面 3 份就省力）
- 每 2 个 T 同步一次进度
- 全部 T 完成 → mentor 终审 → Ready for review → 合并

## 讨论点

- [ ] **Q1 画像粒度** 画像样本是用真实熟人（更准但不便分享）还是纯虚构？
- [ ] **Q2 D 层定位** 行业观察者（记者/分析师/投资人）在第一阶段完全不做，还是保留有机触达空间？
- [ ] **Q3 术语表选择** 上面 11 个候选术语哪些先入 v0.1？@sweetcoisy 提出 8 个意向，mentor 拍板
- [ ] **Q4 KPI 分档** "最低 / 目标 / 惊喜" 的数字由 @sweetcoisy 先提，还是 mentor 直接给？
- [ ] **Q5 内容主张** @sweetcoisy 先起 5 条候选，mentor 评完后合成终稿

## 本 PR 不做什么

- 不改 v0 方案文件
- 不涉及渠道发布节奏（栏目样稿在 PR #1）
- 不涉及监控库（PR #3）
- 不涉及工具调研（PR #4）
