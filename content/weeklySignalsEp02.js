export const weeklySignalsEp02 = {
  issue: 'EP02',
  title: 'Agent 开始进入组织主流程',
  kicker: 'Weekly Signals · EP02',
  date: '2026-05',
  lead: '这周值得看的变化，不是又多了几个聊天助手，而是 agent 正在变成可配置、可审计、可分工的工作系统。',
  thesis: 'Agent 正在从个人效率工具变成组织可编排的工作单元。',
  signals: [
    {
      number: '01',
      domain: 'anthropic.com',
      title: 'Anthropic 推出 10 个金融 agent 模板',
      fact: 'Anthropic 发布了 10 个面向金融服务的 agent 模板，覆盖 pitchbook、会议准备、市场研究、财报审阅、模型构建、估值复核、总账对账、月结、报表审计、KYC 审查等场景。',
      judgment: '垂直行业 agent 会先从高价值、强流程、强审计的岗位切入。',
      body: [
        '这件事值得看，不只是因为金融行业愿意付费，而是因为它把 agent 做成了岗位工作流模板。每个模板都不是一个聊天入口，而是由 skills、connectors、subagents 组合而成，能接入数据、分配子任务，并把结果交给人复核。',
        '这个变化会把企业 AI 的讨论从“哪个模型更强”拉回到“哪类岗位可以被流程化”。金融场景天然有清晰输入、固定产出、明确责任和审计要求，所以它会比泛办公场景更早形成可复制模板。',
        '对 AI-native 组织来说，这个方向很清楚：未来沉淀的不是一堆 prompt，而是一套套可以复用的岗位工作流。真正有价值的资产，是谁来判断、哪些数据能接入、哪一步交给 agent、哪一步必须人工签字。'
      ],
      action: '把团队内部重复任务拆成“任务目标 + 输入数据 + 执行步骤 + 审核点”四层，再判断哪些可以先做成 agent 模板。不要先追求全自动，先追求可复用、可复核、可交接。'
    },
    {
      number: '02',
      domain: 'microsoft.com',
      title: 'Microsoft 把人机协作分成 4 种模式',
      fact: 'Microsoft 在官方博客中，把人机协作分成 Author、Editor、Director、Orchestrator 四种模式：从人自己做、AI 辅助，到人设定目标、多 agent 并行执行。',
      judgment: '组织真正要升级的不是工具栈，而是工作分配方式。',
      body: [
        '很多团队现在还停留在 Author 或 Editor 模式：人做主要工作，AI 做辅助或初稿。但当任务进入 Director 和 Orchestrator 模式，管理问题就变了。团队需要定义任务边界、验收标准、异常升级机制，以及人什么时候介入。',
        '这也是 AI-native 组织和普通 AI 使用者的分水岭。普通团队会问“员工有没有用 AI”，更成熟的团队会问“这件事应该由人主导、AI 辅助，还是由人设目标、agent 执行”。',
        '对内容生产尤其明显。日更 signal 可以先让 agent 做收集和初筛；周观察需要人判断主线；平台改写可以半自动；最终发布和选题方向仍然需要人工负责。不同任务不能混在一个 prompt 里解决。'
      ],
      action: '下次复盘 AI 使用情况时，不只问“用了什么工具”，要按四种协作模式给团队任务分类，并为每类任务写清输入、输出、验收人和失败处理方式。'
    },
    {
      number: '03',
      domain: 'openai.com',
      title: 'OpenAI 把 workspace agent 纳入管理后台',
      fact: 'OpenAI 在 ChatGPT Business release notes 中更新了全局 admin console：新增 Analytics 和 Agents 区域。管理员可以查看 workspace agents、连接应用、memory files、schedules、运行次数和 analytics。',
      judgment: 'agent 一旦进入组织，就必须被当成可管理对象，而不是普通功能入口。',
      body: [
        '这说明企业 agent 的基础设施正在从创建 agent 进入管理 agent。当一个组织里有多个 agent 连接不同应用、文件、日程和数据源，真正的风险不是某个 agent 写错一句话，而是没人知道有哪些 agent 在运行、连接了什么、做过哪些动作。',
        '过去 prompt 可以散落在个人文档里，但 agent 不行。agent 会定时运行、调用工具、读取文件、写入结果，如果没有 inventory，组织就无法判断它是否还有效、是否越权、是否被重复建设。',
        '这对我们设计内容 agent 也有直接启发：每个 agent 都要有 owner、用途、输入源、输出位置、运行频率、审核方式和版本记录。否则后面数据回流时，根本不知道是哪一个环节影响了结果。'
      ],
      action: '即使在早期，也要给每个 agent 建一张登记表：owner、用途、连接数据、运行频率、权限范围、最后复核时间。先用简单表格也可以，但不能没有。'
    },
    {
      number: '04',
      domain: 'ibm.com',
      title: 'IBM 强调新的 AI operating model',
      fact: 'IBM 在 Think 2026 发布中强调，企业 AI 的下一阶段需要 agent orchestration、实时数据、自动化、混合云和治理共同组成新的 operating model。',
      judgment: 'AI 项目会从单点试验进入运行系统阶段。',
      body: [
        '过去很多企业 AI 项目失败，不一定是模型能力不够，而是缺少支撑它运行的系统：数据不能实时连接，流程不能闭环，权限和审计没有跟上，agent 之间也无法协同。',
        '“operating model”这个词很重要。它说明 AI 不再只是一个工具采购问题，而是组织如何重新安排数据、流程、岗位、治理和责任的问题。没有 operating model，agent 很容易变成一堆看起来很聪明、但无法稳定交付的 demo。',
        '对内容系统来说同理。日更、周更、分发、数据回流不能是几段孤立 prompt，而应该是一套运行系统：每天收集什么、谁来评分、哪类内容进入哪个栏目、什么数据触发模板迭代，都要有规则。'
      ],
      action: '做 AI 方案时，至少同时画出四张图：agent 分工图、数据流图、人工审核图、异常处理图。只画“生成链路”不够，因为真正出问题的往往是权限、交接和例外处理。'
    },
    {
      number: '05',
      domain: 'coder.com',
      title: 'Coder Agents 把开发 agent 放进自托管基础设施',
      fact: 'Coder 发布 Coder Agents beta，主打在自托管基础设施上运行 AI 开发 workflow，并提供模型、prompt、MCP、skills 和隔离 workspace 的集中控制。',
      judgment: '开发者 agent 会从个人生产力工具，变成平台团队要管理的基础设施。',
      body: [
        '如果每个开发者都用不同 agent、不同模型、不同 prompt、不同权限，团队很快会遇到碎片化问题：难审计、难复现、难治理，也难把好的 workflow 沉淀成组织资产。',
        'Coder 的信号在于：agent 不只是 IDE 里的插件，而可能成为平台工程的一部分。企业会希望控制 agent 在哪里运行、能访问哪些 repo、能调用哪些工具、执行过程如何隔离，以及失败后怎么追踪。',
        '这对内容团队也成立。内容 agent 不能只跑在个人聊天窗口里，否则模板、数据源、评分标准和历史版本都沉淀不下来。真正可复制的内容生产系统，必须把执行环境和工作流资产化。'
      ],
      action: '开发团队要尽早区分两件事：模型可以多样，但执行环境、权限边界、日志和工作流模板应该统一。内容团队也应采用同样原则。'
    },
    {
      number: '06',
      domain: 'servicenow.com',
      title: 'ServiceNow 把企业动作层开放给任意 agent',
      fact: 'ServiceNow 在 Knowledge 2026 发布 Action Fabric，让 Claude、Copilot 或企业自建 agent 通过 MCP Server 调用 ServiceNow 的流程、审批、目录和业务规则，并进入 AI Control Tower 的治理链路。',
      judgment: '企业 agent 的关键战场不是“能不能读数据”，而是“能不能安全执行动作”。',
      body: [
        '很多 agent 现在只停在查询和建议层，因为一旦进入执行层，就会碰到权限、审批、日志、身份和异常处理。ServiceNow 的信号在于，它把 agent 接进企业已有的 system of action，让 agent 的动作被流程规则、角色权限和审计轨迹包住。',
        '这会改变 agent 的价值判断。一个只能回答问题的 agent 是知识入口；一个能在正确权限下触发流程的 agent，才开始接近组织劳动力。前者提升个人效率，后者改变流程结构。',
        '但动作层也最容易出风险。如果没有审批节点和回滚机制，agent 越能执行，组织风险越高。所以 AI-native 组织需要把“可执行动作”拆成不同等级，而不是简单地问 agent 能不能自动化。'
      ],
      action: '整理团队现有高频动作入口，把每个动作标注为“只读 / 可建议 / 可执行 / 必须审批”，再决定哪些动作可以交给 agent。先做低风险动作，再逐步开放高影响动作。'
    },
    {
      number: '07',
      domain: 'openai.com',
      title: 'OpenAI 让 Enterprise EKM 工作区支持 workspace agents',
      fact: 'OpenAI 在 ChatGPT Enterprise & Edu release notes 中更新：符合条件的 Enterprise Key Management 工作区现在可以使用 workspace agents，支持模板创建、连接工具、添加 skills/files/MCP servers、定时运行、Slack 使用、版本历史和 analytics。',
      judgment: '当 agent 进入企业，安全控制会从附加项变成上线前提。',
      body: [
        'EKM 工作区支持 workspace agents 的意义，不只是功能扩展，而是说明企业客户希望 agent 在更严格的数据控制、密钥管理和管理员开关下运行。未来 agent 能不能落地，往往不取决于 demo 有多惊艳，而取决于它能否进入企业已有的安全和合规边界。',
        '这也提醒我们，agent 的“能力设计”和“安全设计”不能分开做。只要 agent 会连接工具、读取文件、定时运行或进入 Slack，它就已经不再是一次性内容生成，而是组织系统中的长期执行单元。',
        '对于内容生产系统，后续如果接入真实数据、账号、发布平台和反馈指标，也要先区分哪些数据可以自动读取，哪些数据只能摘要化进入模型，哪些动作必须人工确认。'
      ],
      action: '为内部 agent 设定上线门槛：是否需要密钥管理、是否连接外部应用、是否能定时运行、是否保留版本历史和执行记录。没有达到门槛的 agent，只允许做草稿和建议。'
    },
    {
      number: '08',
      domain: 'okta.com',
      title: 'Okta 把 AI agent 当成独立身份来管理',
      fact: 'Okta 发布 secure agentic enterprise blueprint，并宣布 Okta for AI Agents 于 2026 年 4 月 30 日 GA，核心问题是：组织里有哪些 agent、它们能连接什么、它们能做什么。',
      judgment: 'agent 治理的第一步不是评估模型，而是给 agent 一个可追踪身份。',
      body: [
        '人类员工有账号、角色、权限、入职和离职流程，但 agent 往往没有。问题在于，agent 可以代表人访问系统、调用工具、触发流程，如果没有独立身份，组织就很难判断责任归属、权限边界和异常来源。',
        '当 agent 数量变多，身份问题会变得非常实际：某个结果是谁生成的、基于哪个权限拿到的数据、代表哪个业务 owner 执行、什么时候应该停用。没有身份，就没有治理。',
        '这会推动 agent inventory 从“内容登记表”升级为“身份与权限管理对象”。对我们自己的内容 agent，也应避免出现“一个万能 agent 做所有事”的设计，而是按角色拆成采集、评分、写作、改写、发布、复盘。'
      ],
      action: '给每个 agent 建立身份字段：agent owner、业务角色、授权范围、可访问系统、可执行动作、停用条件。角色越清楚，后续越容易做评分和责任追踪。'
    },
    {
      number: '09',
      domain: 'cloud.google.com',
      title: 'Google 把 agent 开发拆成构建、扩展和治理三层',
      fact: 'Google Cloud 的 Gemini Enterprise Agent Platform 将自身定位为面向企业 agent 的统一平台，强调 build、scale、govern 和 optimize，并支持用 Agent Development Kit（ADK）构建生产级 agent。',
      judgment: 'agent 开发正在从 prompt 工程，变成完整的软件工程生命周期。',
      body: [
        '这条 signal 对内容团队同样重要。只要 agent 要稳定参与工作流，就必须经过开发、部署、监控、评估、权限和版本管理。也就是说，未来内容生产 agent 也不能只是一段 prompt，而应该有输入规范、运行环境、输出验收、评分反馈和版本迭代。',
        '“build / scale / govern”可以直接变成内容 agent 的设计框架。Build 是把栏目模板、受众画像、评分标准写清楚；Scale 是让多个栏目和多个平台能批量运行；Govern 是让来源、判断、人工审核和数据反馈能被追踪。',
        '如果没有这三层，内容 agent 很容易停留在“偶尔生成一篇还不错的稿子”。但我们要做的是每周稳定分发，所以更重要的是可重复、可比较、可迭代。'
      ],
      action: '把自己的内容 agent 也按 Build / Scale / Govern 拆：先写清模板和技能，再定义批量运行方式，最后补评分、日志和人工审核。每个环节都要能留下版本记录。'
    },
    {
      number: '10',
      domain: 'github.com',
      title: 'GitHub Copilot coding agent 进入 PR 工作流',
      fact: 'GitHub 文档显示，Copilot coding agent 可以从 issue、Pull Request、VS Code 和 GitHub 页面被分配任务，在后台修改代码并创建 PR，同时受分支、权限、Actions、审查和安全扫描等机制约束。',
      judgment: '代码 agent 的主入口会从编辑器移动到团队协作流。',
      body: [
        '这件事的关键不是 agent 会写代码，而是它被放进了软件团队已经熟悉的 issue、branch、commit、PR review 和 CI/CD 流程里。agent 不再只是个人旁边的助手，而是一个可以被分配任务、提交变更、接受 review 的协作者。',
        '这给内容生产一个很好的参照：不要把内容 agent 想成“直接发一篇文章”的黑盒，而要把它放进一个类似 PR 的流程。选题是 issue，母稿是 branch，改写是 commit，审核是 review，发布后数据是 merge 后的反馈。',
        '只有这样，后续才能知道一篇内容为什么表现好：是信号选得好，标题改写有效，平台模板匹配，还是发布时机影响。没有版本链路，数据反馈就只能停留在结果层。'
      ],
      action: '把内容生产也设计成 PR-like 流程：每次生成都留下版本、修改原因、审核意见、发布结果和数据反馈。先让流程可追踪，再谈自动优化。'
    }
  ],
  watchList: [
    '行业 agent 模板如何从 demo 变成可复用工作流。',
    '企业如何管理越来越多的 workspace agents。',
    '开发者 agent 如何从个人插件变成团队基础设施。',
    '企业如何给 agent 建立身份、权限、动作和数据反馈闭环。'
  ],
  sources: [
    ['Anthropic｜10 个金融服务 agent 模板', 'https://www.anthropic.com/news/finance-agents', 'anthropic.com'],
    ['Microsoft｜Frontier Firms 与四种人机协作模式', 'https://blogs.microsoft.com/blog/2026/05/05/how-frontier-firms-are-rebuilding-the-operating-model-for-the-age-of-ai/', 'microsoft.com'],
    ['OpenAI｜ChatGPT Business 管理后台 Agents 区域', 'https://help.openai.com/en/articles/11391654-chatgpt-team-release-notes', 'openai.com'],
    ['IBM｜AI operating model 与 multi-agent orchestration', 'https://newsroom.ibm.com/2026-05-05-think-2026-ibm-delivers-the-blueprint-for-the-ai-operating-model-as-the-ai-divide-widens', 'ibm.com'],
    ['Coder｜Coder Agents beta', 'https://coder.com/blog/introducing-coder-agents', 'coder.com'],
    ['ServiceNow｜Action Fabric 与 MCP Server', 'https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-opens-its-full-system-of-action-to-every-AI-Agent-in-the-enterprise/default.aspx', 'servicenow.com'],
    ['OpenAI｜Enterprise EKM 工作区支持 workspace agents', 'https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes', 'openai.com'],
    ['Okta｜Secure agentic enterprise blueprint', 'https://www.okta.com/newsroom/press-releases/showcase-2026/', 'okta.com'],
    ['Google Cloud｜Gemini Enterprise Agent Platform', 'https://cloud.google.com/products/agent-builder', 'cloud.google.com'],
    ['GitHub｜Copilot coding agent 文档', 'https://docs.github.com/en/copilot/concepts/coding-agent/about-copilot-coding-agent', 'github.com']
  ]
};
