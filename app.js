const weeks = [
  { name: "FOUNDATION", zh: "开口与结构", note: "停止逐句翻译，建立 60 秒答案骨架。" },
  { name: "ANALYTICS", zh: "数据与证据", note: "用清晰英语解释项目、工具和分析过程。" },
  { name: "COLLABORATION", zh: "协作与行为题", note: "用 STAR 讲冲突、反馈、模糊需求与影响力。" },
  { name: "INTERVIEW READY", zh: "镜头与临场", note: "压力追问、反问和完整视频面试模拟。" }
];

const lessons = [
  {
    title: "Tell me about yourself", zh: "自我介绍", goal: "用 60 秒讲清背景、技能和求职动机。", focus: "Present → Past → Future", framework: "PPF",
    question: "Tell me about yourself and why you're interested in this data analyst internship.", hint: "控制在 60–75 秒：现在的定位 → 一个证据 → 为什么是这个岗位。",
    phrases: [["I'm currently completing…", "我目前正在完成……"], ["What drew me to analytics was…", "吸引我进入数据分析的是……"], ["I'm keen to bring…", "我很希望能带来……（澳洲常用）"]],
    sample: `I'm currently completing my master's in business analytics, where I've built a strong foundation in SQL, Python and Tableau. What drew me to analytics was a university project where I turned messy retail data into a dashboard that helped explain a drop in repeat purchases. I enjoyed translating the numbers into a clear business story. I'm now keen to bring that mix of analysis and communication to an internship where I can learn from an experienced Sydney team and contribute from day one.`,
    follow: "What kind of data problems do you most enjoy working on?", reply: "I most enjoy open-ended problems where the first question isn't necessarily the right one. I like clarifying the business goal, exploring the data and then narrowing the analysis to something the team can act on."
  },
  {
    title: "Why this role?", zh: "求职动机", goal: "把公司、岗位和你的能力连成一条线。", focus: "Company → Role → Fit", framework: "CRF",
    question: "Why do you want to work with us as a data analyst intern?", hint: "避免只说公司很有名；给出一个具体业务连接点。",
    phrases: [["What stands out to me is…", "最吸引我的是……"], ["The role lines up with…", "这个岗位与……很契合"], ["I'd value the chance to…", "我很珍惜……的机会"]],
    sample: `What stands out to me is how your team uses customer data to improve everyday decisions, not just produce reports. The role lines up with my experience cleaning datasets, building dashboards and presenting recommendations to non-technical audiences. I'd value the chance to learn your commercial context while contributing the careful analysis and curiosity I've developed through university projects.`,
    follow: "What do you hope to learn in your first three months?", reply: "I'd like to understand how the team defines useful analysis, learn your data standards and become reliable on a small recurring piece of reporting before taking on broader questions."
  },
  {
    title: "Your strongest skill", zh: "优势表达", goal: "用证据证明优势，而不是堆形容词。", focus: "Claim → Proof → Value", framework: "CPV",
    question: "What's your greatest strength as an aspiring data analyst?", hint: "只选一个优势，并用短例子支撑。",
    phrases: [["One strength I bring is…", "我能带来的一个优势是……"], ["A good example would be…", "一个很好的例子是……"], ["That matters because…", "这很重要，因为……"]],
    sample: `One strength I bring is structured curiosity. I don't jump straight into a chart; I first ask what decision the analysis needs to support. In a recent project, that helped my team move from a broad sales question to identifying one customer segment with unusually high churn. That matters because good analysis should reduce uncertainty, not add more information for its own sake.`,
    follow: "How would your teammates describe that strength?", reply: "They'd probably say I ask useful questions early and make complex work easier to follow. I often summarise our next step so everyone leaves with the same understanding."
  },
  {
    title: "A real weakness", zh: "弱点与成长", goal: "诚实说明短板，同时展示可验证的改进。", focus: "Gap → Action → Progress", framework: "GAP",
    question: "What's one area you're currently working to improve?", hint: "不要包装成伪优势；选一个可改善、非致命的短板。",
    phrases: [["An area I'm working on is…", "我正在改善的一点是……"], ["I noticed this when…", "我注意到这一点是在……"], ["To address it, I've started…", "为改善它，我开始……"]],
    sample: `An area I'm working on is speaking too quickly when I'm nervous. I noticed it during a recorded class presentation: my points were accurate, but the pace made them harder to absorb. To address it, I've started rehearsing with a timer, adding deliberate pauses between ideas and recording one answer each day. My delivery is already clearer, especially when I use a simple three-part structure.`,
    follow: "How do you know you're improving?", reply: "I compare weekly recordings and ask one classmate to repeat my main message. If they can summarise it easily and my pace stays steady, I know the practice is working."
  },
  {
    title: "Think before speaking", zh: "争取思考时间", goal: "卡壳时自然停顿，不用嗯啊填满空白。", focus: "Pause → Signpost → Answer", framework: "PSA",
    question: "Tell me about a time you had to learn something quickly.", hint: "先用一句话争取 3 秒，再给出答案路标。",
    phrases: [["That's a great question—let me think for a moment.", "这个问题很好，让我想一下。"], ["There are two parts to my answer.", "我的回答分两部分。"], ["The key point is…", "关键点是……"]],
    sample: `That's a great question—let me think for a moment. A recent example was learning Power BI for a two-week case competition. There were two parts to my approach: I completed a focused tutorial on the features we actually needed, then rebuilt one of my earlier Tableau dashboards for practice. By the deadline, I could produce the report and explain the model to my team. The key lesson was to learn around a real output rather than trying to master everything at once.`,
    follow: "What would you do differently next time?", reply: "I'd ask an experienced user to review the data model earlier. I spent too long polishing visuals before confirming that the relationships were right."
  },
  {
    title: "Walk me through a project", zh: "项目叙述", goal: "把复杂项目讲成一条听得懂的故事线。", focus: "Problem → Process → Payoff", framework: "3P",
    question: "Walk me through a data project you're proud of.", hint: "业务问题占 20%，分析过程 50%，结果与反思 30%。",
    phrases: [["The problem we were trying to solve was…", "我们要解决的问题是……"], ["My specific contribution was…", "我具体负责的是……"], ["The analysis showed that…", "分析显示……"]],
    sample: `The problem we were trying to solve was why an online retailer's repeat purchase rate had fallen. My specific contribution was cleaning six months of transaction data in Python and segmenting customers by recency and frequency. The analysis showed that new customers acquired through one promotion rarely returned after the discount ended. We recommended a targeted second-purchase offer instead of another broad campaign. In our simulation, that approach improved expected retention while using less budget.`,
    follow: "How did you divide the work across the team?", reply: "We agreed on the decision first, then split data preparation, customer analysis and visualisation. I owned preparation but reviewed the assumptions with the teammate building the dashboard."
  },
  {
    title: "Explain your SQL", zh: "SQL 思路", goal: "不用术语轰炸，也能清楚解释查询逻辑。", focus: "Input → Logic → Check", framework: "ILC",
    question: "How would you use SQL to identify our top customers?", hint: "先澄清 top 的定义，再讲查询和验证。",
    phrases: [["First, I'd clarify what ‘top’ means…", "首先我会明确“top”的定义……"], ["I'd join the tables on…", "我会基于……连接表"], ["As a sense check…", "作为合理性检查……"]],
    sample: `First, I'd clarify what “top” means—revenue, profit, order frequency or lifetime value—and over what period. If we use revenue in the last twelve months, I'd join customer and transaction tables on customer ID, filter the date range, aggregate net sales by customer and rank the results. As a sense check, I'd reconcile the total with the finance figure and inspect returns or duplicate transactions before sharing the list.`,
    follow: "What if two customers have the same revenue?", reply: "I'd use a ranking function that matches the business need, such as dense rank if equal performance should share a position, and add profit as a secondary measure if useful."
  },
  {
    title: "Excel under pressure", zh: "Excel 实战", goal: "用业务语言解释你的 Excel 工作流。", focus: "Clean → Analyse → Validate", framework: "CAV",
    question: "How have you used Excel to solve a business problem?", hint: "讲用途和结果，不要只罗列函数名。",
    phrases: [["I used a pivot table to…", "我用数据透视表来……"], ["I checked for exceptions by…", "我通过……检查异常"], ["This reduced the manual work from…", "这把手工作业从……降低到……"]],
    sample: `In a student consulting project, we received weekly sales files in slightly different formats. I used Power Query to standardise the columns, then created a pivot-based report showing product and region trends. I added validation checks for missing IDs and unusually high values before refresh. That turned a repetitive manual task into a process the team could update in a few minutes and made our final analysis easier to audit.`,
    follow: "When would you move beyond Excel?", reply: "I'd move when the data volume, repeatability or collaboration risk becomes too high—for example, when version control is difficult or transformations should run reliably in a database."
  },
  {
    title: "Build a useful dashboard", zh: "仪表盘设计", goal: "从受众和决策出发，而不是从图表出发。", focus: "Audience → Decision → Visual", framework: "ADV",
    question: "What makes a dashboard effective?", hint: "从受众、决策、信息层级和验证四方面说。",
    phrases: [["The audience needs to decide…", "受众需要做的决策是……"], ["I'd keep the first view focused on…", "我会让首屏聚焦于……"], ["I'd test it with end users by…", "我会通过……与终端用户测试"]],
    sample: `An effective dashboard starts with a decision, not a chart. I'd first understand who uses it, how often and what action they take. The first view should show a small number of trusted metrics with clear comparisons, while filters or detail pages support investigation. I'd use consistent definitions, label unusual changes and test a prototype with end users by asking them to answer real questions. If they cannot find the answer quickly, the design needs work.`,
    follow: "How do you avoid overwhelming the user?", reply: "I create a clear hierarchy: headline measures first, drivers second and detail on demand. Anything that doesn't support a likely question is removed or moved deeper."
  },
  {
    title: "Clean messy data", zh: "数据清洗", goal: "有条理地讲清数据质量判断与处理。", focus: "Profile → Decide → Document", framework: "PDD",
    question: "How do you approach a messy dataset?", hint: "不要直接说删除缺失值；先讲业务语境和影响。",
    phrases: [["I'd start by profiling…", "我会先对……做概况分析"], ["The treatment depends on…", "处理方式取决于……"], ["I'd document the assumption that…", "我会记录……这一假设"]],
    sample: `I'd start by profiling the dataset: row counts, types, missingness, uniqueness and ranges. Then I'd connect each issue to the business meaning. A missing delivery date, for example, might mean an open order rather than bad data. The treatment depends on the intended analysis and the cost of being wrong. I'd preserve the raw data, apply reproducible cleaning rules and document assumptions so another analyst can review or rerun the work.`,
    follow: "What would you do with missing values?", reply: "First I'd investigate the pattern and meaning. Depending on the cause, I might flag them, exclude affected rows for a specific measure or impute carefully—but I'd always show the impact."
  },
  {
    title: "Find the right metric", zh: "指标意识", goal: "把业务目标转换成可解释的指标。", focus: "Goal → Behaviour → Metric", framework: "GBM",
    question: "How would you choose a metric for customer engagement?", hint: "先拆业务目标，再判断指标是否会被误用。",
    phrases: [["The metric should reflect…", "这个指标应当反映……"], ["I'd pair it with…", "我会把它与……配合使用"], ["One risk is that…", "一个风险是……"]],
    sample: `I'd first clarify what engaged customers actually do in this product and why that behaviour matters. For a learning app, weekly active users alone may be too broad, so I might use completed learning sessions per active user and pair it with retention. One risk is optimising clicks instead of meaningful progress. I'd therefore validate that the chosen behaviour is associated with the longer-term outcome the business cares about.`,
    follow: "What is a vanity metric?", reply: "It's a number that looks encouraging but doesn't reliably guide a decision—for example, total registrations without activation, retention or an appropriate time comparison."
  },
  {
    title: "Present an insight", zh: "洞察表达", goal: "把发现讲成结论、证据与行动。", focus: "What → So what → Now what", framework: "WSN",
    question: "Tell me about a time your analysis changed a recommendation.", hint: "把分析过程压缩，把决策变化讲具体。",
    phrases: [["The data challenged our assumption that…", "数据挑战了我们原本……的假设"], ["The strongest signal was…", "最强的信号是……"], ["Based on that, we recommended…", "基于此，我们建议……"]],
    sample: `Our initial assumption was that low sales came from weak demand across all students. The data challenged that: interest was high, but conversion dropped sharply at one confusing registration step. The strongest signal was a large exit rate on mobile devices, supported by comments from five user interviews. Based on that, we recommended simplifying the form before spending more on promotion. The project taught me to separate an attractive story from what the evidence actually supports.`,
    follow: "How confident were you in that conclusion?", reply: "Moderately confident. The behavioural pattern was clear, but the sample was limited, so I presented it as the best current explanation and proposed an A/B test to confirm causality."
  },
  {
    title: "Work in a team", zh: "团队协作", goal: "展示你的协作行为，而不是只说 we。", focus: "STAR with your actions", framework: "STAR",
    question: "Tell me about a time you worked effectively in a team.", hint: "明确说清团队目标和你个人做了什么。",
    phrases: [["Our shared goal was…", "我们的共同目标是……"], ["I took responsibility for…", "我负责……"], ["To keep everyone aligned…", "为了让大家保持一致……"]],
    sample: `In a four-person analytics assignment, our shared goal was to produce a recommendation from an unfamiliar public dataset in ten days. I took responsibility for data preparation and set up a short daily check-in so issues surfaced early. When two analyses used different definitions of an active customer, I documented one agreed definition and reran the figures. We submitted on time, and the marker highlighted the consistency of our story.`,
    follow: "What role do you naturally take in teams?", reply: "I often become the person who creates clarity—summarising decisions, checking definitions and making sure quieter teammates have room to contribute."
  },
  {
    title: "Handle disagreement", zh: "处理分歧", goal: "用尊重、证据和共同目标解决意见冲突。", focus: "Listen → Reframe → Test", framework: "LRT",
    question: "Tell me about a disagreement with a teammate.", hint: "重点不是谁赢了，而是你如何推动事情前进。",
    phrases: [["I wanted to understand their concern first.", "我先想理解对方的顾虑。"], ["We agreed the real question was…", "我们认同真正的问题是……"], ["We tested both options against…", "我们用……检验了两个方案"]],
    sample: `A teammate wanted to remove all rows with missing income, while I was concerned that this would bias our customer profile. I first asked why they preferred deletion and learned they were worried about making unsupported assumptions. We agreed the real question was how each option changed the conclusion. We compared results with a missing-value flag and a sensitivity check, then reported the limitation. The evidence helped us reach a better decision without making the disagreement personal.`,
    follow: "What if you still couldn't agree?", reply: "I'd summarise both options, the evidence and the decision risk, then ask the project owner to decide. Once decided, I'd support it unless new evidence emerged."
  },
  {
    title: "Receive feedback", zh: "接受反馈", goal: "证明你能听懂、行动并闭环。", focus: "Hear → Apply → Verify", framework: "HAV",
    question: "Tell me about a piece of feedback that helped you improve.", hint: "选一条让你真正改变工作方式的反馈。",
    phrases: [["The feedback was that…", "反馈是……"], ["My first step was to…", "我的第一步是……"], ["I checked the improvement by…", "我通过……验证改进"]],
    sample: `After a presentation, my tutor said my analysis was sound but I was making the audience work too hard to find the conclusion. I reviewed the recording and saw that I described every chart before stating the message. For the next presentation, I led each section with one takeaway and used the chart only as evidence. I asked the tutor to review it again, and they said the story was much easier to follow. I now use that conclusion-first approach in dashboards as well.`,
    follow: "How do you respond when feedback feels unfair?", reply: "I avoid reacting immediately. I ask for a specific example, reflect on the intended impact and decide what I can test. Even if I disagree with the wording, there may be useful signal in the reaction."
  },
  {
    title: "Manage ambiguity", zh: "应对模糊需求", goal: "把模糊问题转化为可执行的分析任务。", focus: "Clarify → Scope → Confirm", framework: "CSC",
    question: "What would you do if a stakeholder asked you to ‘find something interesting’ in the data?", hint: "展示提问能力，而不是马上打开数据。",
    phrases: [["I'd start by asking what decision…", "我会先问要支持什么决策……"], ["To keep the first pass focused…", "为让第一轮分析保持聚焦……"], ["I'd play back my understanding…", "我会复述我的理解……"]],
    sample: `I'd start by asking what decision or concern prompted the request, who will use the output and what has already been tried. If the stakeholder is unsure, I'd offer two or three possible angles based on the business context. To keep the first pass focused, I'd agree on a short exploratory scope and a check-in point. Before starting, I'd play back my understanding in plain language so we both know what a useful answer would look like.`,
    follow: "What questions would you ask first?", reply: "What decision is coming up, what would change because of the analysis, who is affected, and when is the answer needed? Those usually reveal the real priority."
  },
  {
    title: "Prioritise your workload", zh: "优先级管理", goal: "说明你如何在多项请求中做合理取舍。", focus: "Impact → Urgency → Effort", framework: "IUE",
    question: "How do you prioritise when several stakeholders need analysis at the same time?", hint: "讲透明沟通与确认，不要说“我会全部加班完成”。",
    phrases: [["I'd compare the requests by…", "我会从……比较这些请求"], ["I'd make the trade-off visible.", "我会让取舍透明。"], ["I can deliver a first cut by…", "我可以在……前交付初版"]],
    sample: `I'd compare the requests by decision impact, true deadline, risk and effort rather than simply working in the order they arrived. I'd confirm dependencies and make the trade-off visible to the stakeholders or my manager. If a full analysis cannot be delivered in time, I might offer a reliable first cut for the urgent decision and schedule the deeper work. The key is to reset expectations early, not surprise people at the deadline.`,
    follow: "What if both stakeholders say their work is urgent?", reply: "I'd ask what happens if each item is delayed, identify the decision deadlines and escalate the conflict with a clear recommendation rather than asking my manager to start from scratch."
  },
  {
    title: "Explain to non-technical people", zh: "非技术沟通", goal: "不牺牲准确性的前提下讲人话。", focus: "Context → Meaning → Action", framework: "CMA",
    question: "How would you explain a complex finding to a non-technical stakeholder?", hint: "先说影响，再补方法；用类比但别过度简化。",
    phrases: [["In practical terms, this means…", "实际来说，这意味着……"], ["The important comparison is…", "重要的比较是……"], ["The action I'd suggest is…", "我建议的行动是……"]],
    sample: `I'd begin with the stakeholder's question and the practical meaning, not the method. Instead of saying a model has a high coefficient, I might say customers with this behaviour are much more likely to leave, even after accounting for account age. I'd show one simple comparison, explain the uncertainty honestly and end with the action I suggest. I'd keep technical detail available for questions rather than putting it in the main message.`,
    follow: "How do you check they understood?", reply: "I'd ask what the finding means for their next decision or invite them to explain the takeaway in their own words. Their response shows whether I need to reframe anything."
  },
  {
    title: "Make a mistake", zh: "错误与担当", goal: "不推责地讲清错误、补救和系统性改进。", focus: "Own → Fix → Prevent", framework: "OFP",
    question: "Tell me about a mistake you made.", hint: "选真实但可控的错误，重点讲如何防止再发生。",
    phrases: [["I realised I'd…", "我意识到我……"], ["I let the team know straight away.", "我立刻告知了团队。"], ["To prevent it recurring…", "为了防止再次发生……"]],
    sample: `In a group report, I filtered out cancelled orders but forgot to apply the same rule to the summary table. I noticed the totals didn't reconcile during a final check. I let the team know straight away, corrected the table and checked every chart using the affected measure. To prevent it recurring, I moved the filter into one shared preparation step and added a reconciliation check. We submitted accurate work, and I learned to build controls into the process rather than rely on memory.`,
    follow: "How did the team react?", reply: "They appreciated that I raised it early with a fix and a clear impact assessment. It also prompted us to add a second-person check for the final numbers."
  },
  {
    title: "Clarify the question", zh: "听不懂与澄清", goal: "没听清时依然专业、自信地继续对话。", focus: "Confirm → Narrow → Answer", framework: "CNA",
    question: "How would you respond if an interview question was unclear?", hint: "澄清是分析师能力，不是英语失败。",
    phrases: [["Just to make sure I've understood…", "为了确认我理解正确……"], ["Are you asking about X or Y?", "您问的是 X 还是 Y？"], ["Could you please rephrase the last part?", "可以换一种方式说最后部分吗？"]],
    sample: `I wouldn't guess and answer the wrong question. I'd say, “Just to make sure I've understood, are you asking how I validated the data or how I presented the result?” If I missed the wording, I'd ask them to rephrase the last part. Once they clarify, I'd briefly confirm the scope and answer. In analytics, good clarification is part of doing accurate work, so I see it as a professional habit rather than a weakness.`,
    follow: "Would you worry that clarification looks unprepared?", reply: "Not if it's concise and specific. One clear question shows care; repeatedly asking because I wasn't listening would be different."
  },
  {
    title: "Handle a curveball", zh: "意外问题", goal: "遇到陌生题时用假设和思路展示潜力。", focus: "Assume → Break down → Check", framework: "ABC",
    question: "Estimate how many takeaway coffees are sold in Sydney each weekday.", hint: "数字不重要；说明假设、拆解和检查。",
    phrases: [["I'll make a few assumptions.", "我先做几个假设。"], ["I'd break this into…", "我会把它拆成……"], ["To check whether that's reasonable…", "为了检查是否合理……"]],
    sample: `I'll make a few assumptions and focus on the method. Greater Sydney has roughly five million people. Suppose about sixty per cent are adults active on a typical weekday, and one in four of them buys a takeaway coffee, averaging 1.2 cups. That gives around nine hundred thousand cups. I'd then add purchases by visitors and check the estimate against the number of cafés and plausible sales per café. The exact number matters less than making each assumption visible and easy to challenge.`,
    follow: "Which assumption creates the most uncertainty?", reply: "The purchase rate is probably the biggest driver. I'd test a reasonable low and high range for that assumption and present an interval rather than false precision."
  },
  {
    title: "Case: sales dropped", zh: "业务案例", goal: "用假设树组织开放型分析题。", focus: "Clarify → Hypothesise → Analyse", framework: "CHA",
    question: "Sales fell 15% last month. How would you investigate?", hint: "先验证口径，再拆数量×价格与内部×外部因素。",
    phrases: [["First, I'd validate the comparison.", "首先我会验证比较口径。"], ["I'd segment the change by…", "我会按……拆分变化"], ["The next analysis would depend on…", "下一步分析取决于……"]],
    sample: `First, I'd validate the comparison: same sales definition, complete data, sensible period and any seasonality. Then I'd separate the change into volume and price, and segment it by product, channel, region and customer type to find where the decline is concentrated. I'd consider internal drivers such as stock availability and promotions, alongside external factors. Once I locate the largest contribution, I'd form specific hypotheses and test those rather than exploring every possible cut.`,
    follow: "What would you show the sales manager first?", reply: "A simple waterfall or contribution view showing which segments explain most of the decline, followed by the leading hypothesis and what evidence we need next."
  },
  {
    title: "Case: retention", zh: "留存案例", goal: "区分相关性与因果，提出可验证行动。", focus: "Cohort → Driver → Test", framework: "CDT",
    question: "How would you investigate declining customer retention?", hint: "明确留存定义，用 cohort 避免混淆不同批次用户。",
    phrases: [["I'd define retention as…", "我会把留存定义为……"], ["A cohort view would help…", "同期群视图可以帮助……"], ["I'd treat that as a hypothesis until…", "在……之前我会把它视作假设"]],
    sample: `I'd first define the customer, return event and time window. Then I'd build cohort retention curves by signup period so changes in acquisition mix don't distort the picture. I'd segment the decline by channel, product usage and early experience, while checking for tracking changes. If one behaviour is associated with retention, I'd treat it as a hypothesis until we test an intervention or have stronger causal evidence. The output should identify both the likely driver and the next experiment.`,
    follow: "Why not just compare monthly active users?", reply: "Monthly active users mix new, retained and returning customers, so growth in acquisition can hide weaker retention. Cohorts preserve the customer starting point."
  },
  {
    title: "Case: experiment", zh: "A/B 测试", goal: "用简洁英语说明实验设计和决策风险。", focus: "Hypothesis → Metric → Guardrail", framework: "HMG",
    question: "How would you evaluate a new checkout design?", hint: "提前定义成功指标、护栏指标、样本和分组。",
    phrases: [["Our primary hypothesis is…", "我们的主要假设是……"], ["I'd choose X as the primary metric…", "我会选择 X 作为主要指标……"], ["A guardrail metric would be…", "一个护栏指标会是……"]],
    sample: `Our primary hypothesis is that the simpler design increases completed purchases. I'd randomly assign eligible users to control and treatment, choose checkout conversion as the primary metric and set a guardrail such as refund rate or average order value. Before launch, I'd estimate the required sample and duration, check tracking and agree on the decision rule. I'd also inspect whether the result is consistent across major devices without overreacting to many small segments.`,
    follow: "What if conversion rises but order value falls?", reply: "I'd examine the pre-agreed business trade-off and total value per visitor. It may still be positive, but I wouldn't call the test successful based on conversion alone."
  },
  {
    title: "Culture and inclusion", zh: "澳洲职场文化", goal: "体现尊重、直接沟通与包容协作。", focus: "Respect → Include → Adapt", framework: "RIA",
    question: "How do you contribute to an inclusive team?", hint: "给行为例子，不要只复述价值观。",
    phrases: [["I make space for…", "我会为……留出空间"], ["I try not to assume…", "我尽量不预设……"], ["I'd adapt my communication by…", "我会通过……调整沟通"]],
    sample: `I contribute by making information and discussion easier to access. In group work, I send a short agenda, explain acronyms and leave space before moving on so people who process or speak differently can contribute. I try not to assume silence means agreement. On one project, I invited written input after meetings, and a teammate raised an important data limitation they hadn't felt ready to interrupt with. Inclusive habits improved both the team experience and the quality of our analysis.`,
    follow: "How would you work with a very direct manager?", reply: "I'd focus on the useful signal, confirm priorities and ask for specific examples. I'd also share how I work best once trust is established, while adapting to their concise style."
  },
  {
    title: "Ask smart questions", zh: "高质量反问", goal: "用反问展示判断力、好奇心和岗位匹配。", focus: "Team → Work → Success", framework: "TWS",
    question: "What questions would you like to ask us?", hint: "准备三类问题，避免只问官网能找到的信息。",
    phrases: [["What would success look like…?", "成功的标准会是什么……？"], ["How does the team currently…?", "团队目前如何……？"], ["What tends to distinguish interns who…?", "什么会让优秀实习生脱颖而出？"]],
    sample: `Yes, thank you. First, what would success look like for the intern by the end of the first three months? Second, could you tell me about a recent analysis that changed a team decision and how the analyst worked with stakeholders? Finally, what tends to distinguish interns who grow quickly in this team? Those answers would help me understand both the work and how I could contribute effectively.`,
    follow: "Is there anything else you'd like to know?", reply: "I'd also be interested in how the team reviews analytical work—for example, how assumptions, code and recommendations are checked before they reach a stakeholder."
  },
  {
    title: "Close with confidence", zh: "面试收尾", goal: "简洁总结匹配度，并自然表达兴趣。", focus: "Fit → Evidence → Interest", framework: "FEI",
    question: "Is there anything else you'd like us to know?", hint: "不要重复整段自我介绍；补一个记忆点并表达兴趣。",
    phrases: [["To briefly wrap up…", "简单总结一下……"], ["The thread across my experience is…", "贯穿我经历的主线是……"], ["I'm genuinely excited about…", "我真心期待……"]],
    sample: `To briefly wrap up, the thread across my experience is that I enjoy turning an unclear question into analysis people can understand and use. I've built the technical foundation through SQL, Python and visualisation projects, and I've learned to communicate assumptions rather than hide them. I'm genuinely excited about the chance to develop those skills in a real team and contribute with curiosity, care and a strong learning mindset.`,
    follow: "Why should we choose you?", reply: "I bring solid foundations, evidence that I learn quickly and a communication style focused on clarity. I won't pretend to know everything, but I'll ask good questions, do careful work and improve fast."
  },
  {
    title: "Full mock: recruiter", zh: "招聘官模拟", goal: "连续回答动机、优势和行为题，不中断。", focus: "Warm, concise, specific", framework: "MIX",
    question: "Why are you the right person for this internship?", hint: "这是完整模拟之一：先完成答案，再复盘表情、节奏和结构。",
    phrases: [["The value I can add is…", "我能带来的价值是……"], ["One piece of evidence is…", "一个证据是……"], ["I'm ready to learn…", "我已准备好学习……"]],
    sample: `The value I can add is a combination of analytical foundations and clear, thoughtful communication. One piece of evidence is a retail project where I cleaned transaction data, identified a retention issue and helped turn it into a focused recommendation. I also bring a genuine learning mindset: I ask for feedback, document assumptions and improve my process. I'm ready to learn your business context quickly while being reliable on the details from day one.`,
    follow: "What might be hardest for you in this role?", reply: "Learning the business context and internal data will take time. I'd manage that by asking focused questions, keeping a glossary of definitions and checking my early understanding with the team."
  },
  {
    title: "Full mock: hiring manager", zh: "经理模拟", goal: "在项目、技术与协作题之间灵活切换。", focus: "Depth + judgement", framework: "MIX",
    question: "Describe an analysis you would improve if you did it again.", hint: "展现判断力：说明当时合理、现在会如何做得更好。",
    phrases: [["With hindsight, I would…", "回头看，我会……"], ["The limitation was…", "局限在于……"], ["A stronger approach would be…", "更有力的方法会是……"]],
    sample: `In an early churn project, I spent too much time comparing models before confirming whether the target definition matched the business problem. The final accuracy looked strong, but the result was harder to act on than it should have been. With hindsight, I would involve the stakeholder earlier, define the intervention window and use a baseline before adding complexity. A stronger approach would optimise for a useful decision, not just a technical score.`,
    follow: "How do you balance speed and quality?", reply: "I define what must be correct, what can be approximate and when feedback is needed. I deliver the smallest reliable version early, then deepen it where the decision justifies the effort."
  },
  {
    title: "Final interview day", zh: "毕业面试", goal: "完成五题视频面试，建立属于你的稳定节奏。", focus: "Breathe → Structure → Connect", framework: "YOU",
    question: "Tell us the story of why you want to become a data analyst.", hint: "今天不追求背得完美；让答案真实、清楚、有连接感。",
    phrases: [["The moment it clicked for me was…", "让我真正顿悟的时刻是……"], ["Since then, I've deliberately…", "从那以后，我有意识地……"], ["The analyst I want to become is…", "我想成为的分析师是……"]],
    sample: `The moment it clicked for me was during a project where a simple customer breakdown changed our team's entire recommendation. I realised analytics wasn't only about producing the correct number; it was about asking a useful question and helping people act with more confidence. Since then, I've deliberately built skills in SQL, Python and visualisation while practising how to explain my reasoning. The analyst I want to become is technically careful, commercially curious and easy for stakeholders to trust.`,
    follow: "What will you do next to keep improving?", reply: "I'll keep a weekly recording habit, practise with unfamiliar questions and seek feedback from real people. I also want to deepen one end-to-end project so I can discuss trade-offs with more specificity."
  }
];

const state = {
  selectedDay: Math.min(Number(localStorage.getItem("ss-current-day")) || 1, 30),
  completed: JSON.parse(localStorage.getItem("ss-completed") || "[]"),
  ratings: JSON.parse(localStorage.getItem("ss-ratings") || "{}"),
  step: 0,
  lessonTimer: null,
  lessonSeconds: 1500,
  audioRecorder: null,
  audioStream: null,
  audioChunks: [],
  cameraStream: null,
  videoRecorder: null,
  videoChunks: [],
  boothQuestion: 0,
  boothTimer: null,
  boothSeconds: 90
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const pad = n => String(n).padStart(2, "0");
const currentLesson = () => lessons[state.selectedDay - 1];
const weekIndexFor = day => Math.min(Math.floor((day - 1) / 7), 3);
const weekFor = day => weeks[weekIndexFor(day)];

function saveProgress() {
  localStorage.setItem("ss-current-day", state.selectedDay);
  localStorage.setItem("ss-completed", JSON.stringify(state.completed));
  localStorage.setItem("ss-ratings", JSON.stringify(state.ratings));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function computeStreak() {
  let streak = 0;
  for (let day = 1; day <= 30; day++) {
    if (state.completed.includes(day)) streak += 1;
    else break;
  }
  return streak;
}

function renderDashboard() {
  const lesson = currentLesson();
  const week = weekFor(state.selectedDay);
  $("#rail-progress").textContent = `${state.completed.length} / 30`;
  $("#progress-fill").style.width = `${state.completed.length / 30 * 100}%`;
  $("#streak-count").textContent = computeStreak();
  $("#today-week").textContent = `WEEK ${weekIndexFor(state.selectedDay) + 1} · ${week.name}`;
  $("#today-day").textContent = pad(state.selectedDay);
  $("#today-title").textContent = lesson.title;
  $("#today-goal").textContent = lesson.goal;
  $("#today-chips").innerHTML = `<span>${lesson.framework}</span><span>${lesson.focus}</span><span>Video ready</span>`;
  $("#days-list").innerHTML = lessons.map((item, index) => {
    const day = index + 1;
    return `<button class="day-item ${day === state.selectedDay ? "active" : ""} ${state.completed.includes(day) ? "done" : ""}" data-day="${day}">
      <span class="day-number">${pad(day)}</span><span class="day-label"><strong>${item.title}</strong><small>${item.zh}</small></span><span class="day-check">${state.completed.includes(day) ? "✓" : ""}</span>
    </button>`;
  }).join("");
  const left = 30 - state.completed.length;
  if (state.completed.length >= 30) {
    $("#milestone-label").textContent = "INTERVIEW READY";
    $("#milestone-copy").textContent = "30 天完成。现在让真实面试听见你的能力。";
  } else if (state.completed.length >= 21) {
    $("#milestone-label").textContent = "FINAL MOCK";
    $("#milestone-copy").textContent = `再完成 ${left} 天，进入你的毕业面试。`;
  } else if (state.completed.length >= 7) {
    $("#milestone-label").textContent = "STRONGER STORY";
    $("#milestone-copy").textContent = "下一站：把技术过程讲成业务故事。";
  }
  $$(".day-item").forEach(btn => btn.addEventListener("click", () => openLesson(Number(btn.dataset.day))));
}

function renderRoadmap() {
  $("#roadmap").innerHTML = weeks.map((week, wi) => {
    const start = wi * 7;
    const end = wi === 3 ? 30 : start + 7;
    const days = lessons.slice(start, end).map((lesson, offset) => {
      const day = start + offset + 1;
      return `<button class="road-day ${state.completed.includes(day) ? "done" : ""}" data-day="${day}">
        <span>DAY ${pad(day)}</span><i>${state.completed.includes(day) ? "✓" : "↗"}</i><h3>${lesson.title}</h3><p>${lesson.zh} · ${lesson.framework}</p>
      </button>`;
    }).join("");
    return `<section class="week-block"><div class="week-label"><span>0${wi + 1}</span><h2>${week.name} · ${week.zh}</h2><p>${week.note}</p></div><div class="week-days">${days}</div></section>`;
  }).join("");
  $$(".road-day").forEach(btn => btn.addEventListener("click", () => openLesson(Number(btn.dataset.day))));
}

function showView(name) {
  $$(".view").forEach(view => view.classList.remove("active"));
  $(`#${name}-view`).classList.add("active");
  $$(".nav-link").forEach(btn => btn.classList.toggle("active", btn.dataset.view === name));
  $("#mobile-menu").setAttribute("aria-expanded", "false");
  $(".topnav").classList.remove("open");
  if (name !== "lesson") stopLessonTimer();
  if (name === "roadmap") renderRoadmap();
  if (name === "booth") renderBoothQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLesson(day) {
  state.selectedDay = day;
  state.step = 0;
  state.lessonSeconds = 1500;
  saveProgress();
  renderDashboard();
  renderLesson();
  showView("lesson");
  startLessonTimer();
}

function renderLesson() {
  const lesson = currentLesson();
  const week = weekFor(state.selectedDay);
  $("#lesson-week").textContent = `WEEK ${weekIndexFor(state.selectedDay) + 1} · ${week.name}`;
  $("#lesson-kicker").textContent = lesson.zh;
  $("#lesson-title").textContent = lesson.title;
  $("#lesson-day").textContent = pad(state.selectedDay);
  $("#lesson-step-label").textContent = `STEP ${state.step + 1} OF 5`;
  $("#step-fill").style.width = `${(state.step + 1) * 20}%`;
  $$(".lesson-tabs button").forEach((button, index) => {
    button.classList.toggle("active", index === state.step);
    button.setAttribute("aria-selected", index === state.step);
  });
  $("#prev-step").disabled = state.step === 0;
  $("#next-step").innerHTML = state.step === 4 ? "回到首页 <span>→</span>" : "下一步 <span>→</span>";
  const renders = [renderPhrases, renderFramework, renderSample, renderDialogue, renderPractice];
  $("#lesson-panel").innerHTML = renders[state.step](lesson);
  bindLessonInteractions();
}

function renderPhrases(lesson) {
  return `<div class="panel-grid"><div class="panel-intro"><span class="eyebrow coral">5 MIN · MOUTH WARM-UP</span><h2>先让嘴巴进入<br />英文工作模式。</h2><p>每句听一遍，再跟读三遍。不要追求口音，重点是连贯、重音和自然停顿。</p></div><div class="phrase-list">${lesson.phrases.map((phrase, i) => `<div class="phrase-card"><span>${pad(i + 1)}</span><div><strong>${phrase[0]}</strong><small>${phrase[1]}</small></div><button class="listen-btn" data-speak="${encodeURIComponent(phrase[0])}" aria-label="朗读 ${phrase[0]}">▶</button></div>`).join("")}</div></div>`;
}

function getFramework(lesson) {
  const generic = {
    STAR: [["S", "Situation", "一句交代背景与目标"], ["T", "Task", "明确你需要完成什么"], ["A", "Action", "具体说你做了什么、为何这样做"], ["R", "Result", "量化结果，加一句反思"]],
    "STAR+": [["S", "Situation", "压缩背景，只保留必要信息"], ["T", "Task", "说清约束和你的责任"], ["A", "Action", "突出影响方式与判断"], ["R+", "Result", "结果之后补充为什么有效"]],
    PREP: [["P", "Point", "先给直接观点"], ["R", "Reason", "说明判断依据"], ["E", "Example", "用一个场景证明"], ["P", "Point", "回扣岗位与结论"]]
  };
  return generic[lesson.framework] || [[lesson.framework[0] || "1", "Open", "一句话直接回答，不绕弯"], [lesson.framework[1] || "2", "Build", `按 ${lesson.focus} 展开证据`], [lesson.framework[2] || "3", "Close", "回扣结果、价值或下一步"]];
}

function renderFramework(lesson) {
  const items = getFramework(lesson);
  return `<div class="panel-grid"><div class="panel-intro"><span class="eyebrow coral">5 MIN · ANSWER MAP</span><h2>${lesson.framework} 框架</h2><p>${lesson.focus}。框架不是模板腔，而是紧张时的一条安全绳：先想路标，再说句子。</p></div><div class="framework-flow">${items.map(item => `<div class="framework-item"><b>${item[0]}</b><div><h3>${item[1]}</h3><p>${item[2]}</p></div></div>`).join("")}</div></div>`;
}

function highlightSample(text) {
  const firstStop = text.indexOf(". ");
  if (firstStop < 0) return text;
  return `<mark>${text.slice(0, firstStop + 1)}</mark>${text.slice(firstStop + 1)}`;
}

function renderSample(lesson) {
  return `<div class="panel-grid"><div class="panel-intro"><span class="eyebrow coral">6 MIN · NOTICE & SHADOW</span><h2>听结构，<br />不要背全文。</h2><p>第一遍只听逻辑。第二遍看着文字影子跟读。第三遍关掉文字，用你自己的经历替换细节。</p></div><div class="answer-sheet"><blockquote>“${highlightSample(lesson.sample)}”</blockquote><div class="answer-actions"><button class="primary-btn speak-model">▶ 播放示范</button><button class="secondary-btn stop-speech">停止</button><label class="speed-control">SPEED<select id="speech-rate"><option value="0.8">0.8×</option><option value="0.95" selected>0.95×</option><option value="1.1">1.1×</option></select></label></div></div></div>`;
}

function renderDialogue(lesson) {
  return `<div class="panel-grid"><div class="panel-intro"><span class="eyebrow coral">4 MIN · REAL EXCHANGE</span><h2>听追问，<br />接住对话。</h2><p>点播放听面试官问题，停顿两秒后先自己回答，再展开参考回应。澳洲面试更像专业对话，不是背诵考试。</p><button class="secondary-btn play-dialogue">▶ 播放完整对话</button></div><div class="dialogue"><div class="dialogue-line interviewer"><small>INTERVIEWER</small><p>${lesson.question}</p></div><div class="dialogue-line candidate"><small>YOU</small><p>${lesson.sample}</p></div><div class="dialogue-line interviewer"><small>FOLLOW-UP</small><p>${lesson.follow}</p></div><div class="dialogue-line candidate"><small>YOU · KEEP IT SHORT</small><p>${lesson.reply}</p></div></div></div>`;
}

function renderPractice(lesson) {
  const rating = state.ratings[state.selectedDay] || 0;
  return `<div class="practice-card"><div><span class="eyebrow coral">5 MIN · YOUR TURN</span><h2>现在，轮到你。</h2><p class="practice-question">“${lesson.question}”</p><p style="font-size:12px;line-height:1.7;opacity:.58">${lesson.hint}<br /><br />建议：看镜头旁边一个固定点，吸气，停一秒，再从第一句路标开始。</p></div><div class="recording-console"><button class="audio-btn" id="audio-record" aria-label="开始录音"><i></i></button><strong id="audio-status">TAP TO RECORD</strong><p>录音只保存在此页面，刷新后消失</p><audio id="audio-playback" controls hidden></audio><div class="self-rating" aria-label="自评流畅度">${[1,2,3,4,5].map(n => `<button data-rating="${n}" class="${rating === n ? "selected" : ""}" aria-label="${n} 分">${n}</button>`).join("")}</div><button class="complete-btn" id="complete-day">${state.completed.includes(state.selectedDay) ? "✓ 已完成今日训练" : "完成并打卡"}</button></div></div>`;
}

function speak(text, rate = .95, onend) {
  if (!("speechSynthesis" in window)) return showToast("当前浏览器不支持语音朗读");
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-AU";
  utterance.rate = rate;
  if (onend) utterance.onend = onend;
  speechSynthesis.speak(utterance);
}

function bindLessonInteractions() {
  $$("[data-speak]").forEach(button => button.addEventListener("click", () => speak(decodeURIComponent(button.dataset.speak), .85)));
  $(".speak-model")?.addEventListener("click", () => speak(currentLesson().sample, Number($("#speech-rate").value)));
  $(".stop-speech")?.addEventListener("click", () => speechSynthesis?.cancel());
  $(".play-dialogue")?.addEventListener("click", () => {
    const lesson = currentLesson();
    speak(lesson.question, .92, () => speak(lesson.sample, .92, () => speak(lesson.follow, .92, () => speak(lesson.reply, .92))));
  });
  $("#audio-record")?.addEventListener("click", toggleAudioRecording);
  $$("[data-rating]").forEach(button => button.addEventListener("click", () => {
    state.ratings[state.selectedDay] = Number(button.dataset.rating);
    saveProgress();
    $$("[data-rating]").forEach(b => b.classList.toggle("selected", b === button));
  }));
  $("#complete-day")?.addEventListener("click", () => {
    if (!state.completed.includes(state.selectedDay)) state.completed.push(state.selectedDay);
    state.completed.sort((a,b) => a-b);
    saveProgress();
    renderDashboard();
    $("#complete-day").textContent = "✓ 已完成今日训练";
    showToast("Nice work — 今日训练已完成！");
  });
}

async function toggleAudioRecording() {
  const button = $("#audio-record");
  if (state.audioRecorder?.state === "recording") {
    state.audioRecorder.stop();
    button.classList.remove("recording");
    $("#audio-status").textContent = "PROCESSING…";
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
    showToast("此浏览器不支持录音，请使用最新版 Chrome / Safari");
    return;
  }
  try {
    state.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.audioChunks = [];
    state.audioRecorder = new MediaRecorder(state.audioStream);
    state.audioRecorder.ondataavailable = event => state.audioChunks.push(event.data);
    state.audioRecorder.onstop = () => {
      const audio = $("#audio-playback");
      audio.src = URL.createObjectURL(new Blob(state.audioChunks, { type: state.audioRecorder.mimeType }));
      audio.hidden = false;
      $("#audio-status").textContent = "TAKE READY · 再听一次";
      state.audioStream.getTracks().forEach(track => track.stop());
    };
    state.audioRecorder.start();
    button.classList.add("recording");
    $("#audio-status").textContent = "RECORDING · TAP TO STOP";
  } catch (error) {
    showToast("无法访问麦克风，请检查浏览器权限");
  }
}

function startLessonTimer() {
  stopLessonTimer();
  updateLessonClock();
  state.lessonTimer = setInterval(() => {
    if (state.lessonSeconds > 0) state.lessonSeconds -= 1;
    updateLessonClock();
  }, 1000);
}

function stopLessonTimer() { clearInterval(state.lessonTimer); state.lessonTimer = null; }
function updateLessonClock() { $("#lesson-clock").textContent = `${pad(Math.floor(state.lessonSeconds / 60))}:${pad(state.lessonSeconds % 60)}`; }

const boothQuestions = [
  { q: "Tell me about yourself and why this internship interests you.", hint: "60–75 秒 · Present → Past → Future" },
  { q: "Walk me through a data project you're proud of.", hint: "90 秒 · Problem → Process → Payoff" },
  { q: "Tell me about a time you worked through ambiguity.", hint: "90 秒 · STAR，重点讲你的判断" },
  { q: "How would you investigate a sudden drop in sales?", hint: "90 秒 · Clarify → Segment → Hypothesise" },
  { q: "What questions would you like to ask us?", hint: "60 秒 · Team → Work → Success" }
];

function renderBoothQuestion() {
  const item = boothQuestions[state.boothQuestion];
  $("#booth-q-index").textContent = pad(state.boothQuestion + 1);
  $("#booth-question").textContent = item.q;
  $("#booth-hint").textContent = item.hint;
  $("#prev-question").disabled = state.boothQuestion === 0;
  $("#next-question").disabled = state.boothQuestion === boothQuestions.length - 1;
}

async function enableCamera() {
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
    $("#camera-message").textContent = "当前浏览器不支持摄像头录制。请用最新版 Chrome、Edge 或 Safari。";
    return;
  }
  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    $("#camera-preview").srcObject = state.cameraStream;
    $("#camera-placeholder").hidden = true;
    $("#recorded-video").hidden = true;
    $("#camera-preview").hidden = false;
    $("#record-video").disabled = false;
    $("#camera-message").textContent = "镜头已就绪。深呼吸，准备好再开始。";
  } catch (error) {
    $("#camera-message").textContent = "没有获得摄像头或麦克风权限。你仍可阅读题目进行练习。";
  }
}

function toggleVideoRecording() {
  if (state.videoRecorder?.state === "recording") return stopVideoRecording();
  if (!state.cameraStream) return;
  state.videoChunks = [];
  state.boothSeconds = 90;
  state.videoRecorder = new MediaRecorder(state.cameraStream);
  state.videoRecorder.ondataavailable = event => state.videoChunks.push(event.data);
  state.videoRecorder.onstop = () => {
    const video = $("#recorded-video");
    video.src = URL.createObjectURL(new Blob(state.videoChunks, { type: state.videoRecorder.mimeType }));
    video.hidden = false;
    $("#camera-preview").hidden = true;
    $("#camera-message").textContent = "Take 完成。回看时只检查三件事：结构、停顿、眼神。";
  };
  state.videoRecorder.start();
  $("#record-video").classList.add("recording");
  $("#record-video span").textContent = "STOP ANSWER";
  $("#recording-badge").hidden = false;
  updateBoothTimer();
  state.boothTimer = setInterval(() => {
    state.boothSeconds -= 1;
    updateBoothTimer();
    if (state.boothSeconds <= 0) stopVideoRecording();
  }, 1000);
}

function stopVideoRecording() {
  clearInterval(state.boothTimer);
  if (state.videoRecorder?.state === "recording") state.videoRecorder.stop();
  $("#record-video").classList.remove("recording");
  $("#record-video span").textContent = "RETAKE";
  $("#recording-badge").hidden = true;
}

function updateBoothTimer() { $("#booth-timer").textContent = `${pad(Math.floor(state.boothSeconds / 60))}:${pad(state.boothSeconds % 60)}`; }

function changeBoothQuestion(direction) {
  state.boothQuestion = Math.max(0, Math.min(boothQuestions.length - 1, state.boothQuestion + direction));
  renderBoothQuestion();
  state.boothSeconds = 90;
  updateBoothTimer();
}

document.addEventListener("click", event => {
  const route = event.target.closest("[data-view]");
  if (route) showView(route.dataset.view);
});

$("#start-lesson").addEventListener("click", () => openLesson(state.selectedDay));
$("#prev-step").addEventListener("click", () => { if (state.step > 0) { state.step -= 1; renderLesson(); } });
$("#next-step").addEventListener("click", () => { if (state.step < 4) { state.step += 1; renderLesson(); } else showView("dashboard"); });
$$(".lesson-tabs button").forEach(button => button.addEventListener("click", () => { state.step = Number(button.dataset.step); renderLesson(); }));
$("#mobile-menu").addEventListener("click", () => {
  const open = $(".topnav").classList.toggle("open");
  $("#mobile-menu").setAttribute("aria-expanded", open);
});
$("#enable-camera").addEventListener("click", enableCamera);
$("#record-video").addEventListener("click", toggleVideoRecording);
$("#prev-question").addEventListener("click", () => changeBoothQuestion(-1));
$("#next-question").addEventListener("click", () => changeBoothQuestion(1));

window.addEventListener("beforeunload", () => {
  state.cameraStream?.getTracks().forEach(track => track.stop());
  state.audioStream?.getTracks().forEach(track => track.stop());
});

renderDashboard();
renderRoadmap();
renderBoothQuestion();
