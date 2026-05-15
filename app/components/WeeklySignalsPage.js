import Link from 'next/link';

function Favicon({ domain, alt = '' }) {
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={alt || `${domain} logo`}
      loading="lazy"
    />
  );
}

export function WeeklySignalsPage({ issue }) {
  return (
    <main className="page">
      <section className="site-nav" aria-label="站点栏目">
        <Link className="brand" href="/">MediaOperator</Link>
        <nav>
          <Link href="/columns/weekly-signals/ep02/">Weekly Signals</Link>
          <Link href="/columns/organization-weekly/ep01/">组织周观察</Link>
          <Link href="/columns/dri-breakdown/ep01/">DRI 拆解</Link>
        </nav>
      </section>

      <section className="hero">
        <div className="hero-main">
          <div>
            <span className="eyebrow">{issue.kicker}</span>
            <h1>{issue.title}</h1>
            <p className="lead">{issue.lead}</p>
          </div>
          <div className="hero-meta">
            <span className="pill">10 个 signal</span>
            <span className="pill">AI-native 组织</span>
            <span className="pill">Agent workflows</span>
            <span className="pill">{issue.date}</span>
          </div>
        </div>
      </section>

      <section className="section-title" aria-labelledby="signals-title">
        <h2 id="signals-title">10 个 Signal</h2>
        <p>共同趋势：{issue.thesis}</p>
      </section>

      <section className="signals" aria-label="ten signal cards">
        {issue.signals.map((signal) => (
          <article className="signal-card" key={signal.number}>
            <div className="card-head">
              <span className="num">{signal.number}</span>
              <Favicon domain={signal.domain} alt={`${signal.domain} logo`} />
            </div>
            <h3>{signal.title}</h3>
            <p>{signal.fact}</p>
            <div className="judgment">我们的判断：{signal.judgment}</div>
            {signal.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="action">执行建议：{signal.action}</div>
          </article>
        ))}
      </section>

      <section className="closing">
        <h2>本周我们在看什么</h2>
        <p>本周的 10 个 signal 都指向同一个方向：agent 正在进入组织主流程。它们共同说明，agent 的下一步不是更像聊天助手，而是更像组织里的可调度工作单元。</p>
        <ol>
          {issue.watchList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <div className="sources">
          {issue.sources.map(([label, href, domain]) => (
            <a className="source-link" href={href} target="_blank" rel="noreferrer" key={href}>
              <Favicon domain={domain} alt={`${domain} logo`} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
