# 任务 03：补充重点监控对象

> 这是一个**可执行任务清单**，合并条件是 @sweetcoisy 完成 T1–T8。mentor 为 `@allenwoods`（兼 Player-Coach）。
>
> 本任务不改 `docs/notes/2026-04-23-init-plan.md`。产出落在 `docs/notes/monitoring/`，**全部使用 markdown 或 CSV 格式**（项目规则：交付物必须机器友好，不使用飞书多维表 / Notion 等 SaaS 锁定载体）。

## 背景

- 参考文档：[`docs/notes/improve_suggestion.md`](../improve_suggestion.md) 第 10–11 章已给出 **17 个英文种子**和一套 5 层分层模型 + 评分规则。
- **中文种子库完全空白**——这是 @sweetcoisy 在本阶段独立拿下的第一块实操任务。
- 主阵地是公众号 + 小红书，所以中文监控库优先级高于英文。

## 交付目标

合并后，每周一上午 @sweetcoisy 只要打开仓库里的监控库 CSV/markdown 文件、看一眼本周新增素材，就知道"可以写什么"。mentor 也能一眼判断"我们监控的对象是否贴合 AI-native 组织方向"。所有数据都在 git 里，可 diff、可脚本读取、可自动化。

## 任务清单

### 中文种子库（主要工作量）

- [ ] **T1** 中文 L1 官方发布层（≥ 8 个）
  - 产出：`docs/notes/monitoring/seeds-cn-l1-official.md`
  - 覆盖主流厂商官方渠道（建议：通义、智谱、月之暗面、DeepSeek、百川、阶跃、字节豆包、百度心响等；最终由 intern 调研后挑选）
  - 每来源填完整字段（见下方 2.3 节字段模板）
  - 每来源贴 1 条最近发布链接，用于相关性验证

- [ ] **T2** 中文 L2 深度作者层（≥ 8 个）
  - 产出：`docs/notes/monitoring/seeds-cn-l2-authors.md`
  - 涵盖公众号号主 + 小红书博主 + 独立 newsletter
  - 每来源说明"为什么它对 AI-native 组织这个方向相关"

- [ ] **T3** 中文 L3 社区层（≥ 5 个）
  - 产出：`docs/notes/monitoring/seeds-cn-l3-community.md`
  - 建议覆盖：即刻相关圈子、知乎相关话题、B 站 AI 技术 UP 评论区、小红书话题标签
  - 重点：**抓反对意见和用户真实表达**，不只是抓好评

- [ ] **T4** 中文 L4 竞品层（3–5 个）
  - 产出：`docs/notes/monitoring/seeds-cn-l4-competitors.md`
  - 国内 Agent / AI-native 方向竞品
  - 每家填：官网更新日志、创始人/核心成员社媒、典型产品主张 3 条
  - @sweetcoisy 先提 5 个候选，mentor 评审定终

### 英文种子验证

- [ ] **T5** 验证英文种子库
  - 产出：`docs/notes/monitoring/seeds-en-validation.md`
  - 逐个访问 improve_suggestion 附录 A 的 12 个英文来源
  - 记录：是否可正常访问、最近一条内容日期、近期内容与 AI-native 组织方向的相关度（1–5 分）、是否建议从种子库剔除或降级
  - 增补建议：若发现有明显遗漏（例：a16z、LangChain、Cognition 相关来源），提 2–3 个增补候选

### 评分规则试跑

- [ ] **T6** 10 条素材试打分
  - 产出：`docs/notes/monitoring/scoring-trial.md`
  - 从 T1–T4 收集的中文来源里随机抽 5 条 + 从英文来源抽 5 条，每条按 improve_suggestion 11.4 的 4 维度打分（相关性 / 时效性 / 可转内容性 / 原创增量空间）
  - 记录：打分时的主观难点、是否觉得规则合理、建议的规则调整

### 归属映射 & 总表

- [ ] **T7** 来源 → 栏目归属映射
  - 产出：`docs/notes/monitoring/source-to-column.md`
  - 每个 A 级来源标注：最适合喂给哪个栏目（周观察 / DRI 拆题 / 5 signal 三选一或多选）
  - 帮助选题会上快速定位素材来源

- [ ] **T8** 监控库总表（CSV 格式）
  - 产出：`docs/notes/monitoring/sources.csv`（UTF-8，含表头，LF 换行）
  - 列定义（严格按顺序，不要随意加列）：
    ```csv
    source_id,name,layer,type,channel,url,topic,priority,update_freq,owner,last_reviewed,candidate_topics,selected_this_week,score_relevance,score_timeliness,score_convertible,score_novelty,score_total,notes
    ```
  - 同时再生成一份 `docs/notes/monitoring/sources.md` —— 把 CSV 的内容渲染成 markdown 表（方便在 GitHub UI 上直接看）
  - 维护约定：CSV 是权威源，`sources.md` 是衍生视图；后续如果接入自动化，只读/写 CSV
  - 视图需求通过 git + CSV 工具实现（`csvkit` / `mlr` / `qsv` 等），不要做 3 个"看板"

## 字段模板（T1–T4 统一使用）

```markdown
### <来源名称>
- 层级：L1 / L2 / L3 / L4
- 类型：官方 / 作者 / 社区 / 竞品
- 渠道：公众号 / 小红书 / 官网 / RSS / …
- 监控主题：理念 / 方法 / 案例 / 竞品 / signal（可多选）
- 优先级：A / B / C
- 建议更新频率：每日 / 每周 / 实时
- 推荐理由（1–2 句）：
- 最近一条内容链接：
- 相关性评分（1–5）：
- 可转内容栏目归属：周观察 / DRI 拆题 / 5 signal
```

## 角色分工

| 环节 | DRI（@allenwoods） | Player-Coach（@allenwoods） | IC（@sweetcoisy） |
|---|---|---|---|
| 种子库调研 | C | C | R |
| 竞品清单终审 | A | C | R |
| 评分规则调整 | A | C | R |
| 总表 schema | C | A | R |

## 交付方式

- 在本 PR 分支 `docs/proposal-monitoring-library` 上直接 push commit
- commit message 格式：`docs(monitoring): T1 Chinese L1 official seeds draft`

## 评审节奏

- T1 完成 1 个来源后就 @allenwoods 审一下字段模板是否够用（先把模板定好，后面 20+ 来源才省力）
- 每 2 个 T 同步一次
- 全部 T 完成 → 终审 → Ready for review → 合并

## 讨论点

- [ ] **Q1 竞品清单** @sweetcoisy 先提 5 个国内竞品候选，mentor 评审
- [ ] **Q2 社区层范围** L3 是否把微信社群 / 飞书群也算入，还是只包括公开社区？
- [ ] **Q3 评分门槛** 16 分门槛对 signal 类素材是否偏严？试跑后由 @sweetcoisy 提建议
- [ ] **Q4 每日扫描** 上午 + 下午两轮对 @sweetcoisy 是否可承受？或改为"一天 1 轮 + 机器人推送"？
- [ ] **Q5 增补来源** T5 里发现的增补候选是否进第一版种子库？

## 本 PR 不做什么

- 不改 v0 方案文件
- 不 clone / 接入任何工具仓库（→ PR #4）
- 不写栏目样稿（→ PR #1）
- 不细化受众（→ PR #2）
