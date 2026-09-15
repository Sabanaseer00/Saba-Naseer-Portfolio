import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <p className="kicker">03 — Projects</p>
          <h2>Selected work</h2>
          <p>Three projects, three different problems — a systems project, a product project, and a machine-learning project.</p>
        </div>

        <div className="project-list">
          {projects.map((p) => (
            <article className="project-row" key={p.name}>
              <div className="project-meta">
                <h3>{p.name}</h3>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-status">{p.status}</p>
              </div>
              <div className="project-detail">
                <p>{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .project-list {
          border-top: 1px solid var(--border-soft);
        }
        .project-row {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          padding: 44px 0;
          border-bottom: 1px solid var(--border-soft);
        }
        .project-meta h3 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 10px;
        }
        .project-tagline {
          color: var(--text);
          font-size: 14px;
          margin: 0 0 8px;
        }
        .project-status {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          margin: 0;
        }
        .project-detail p {
          color: var(--text-dim);
          font-size: 15px;
          margin: 0 0 20px;
          max-width: 560px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .project-tech span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-dim);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 3px;
        }
        .project-link {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--accent-dim);
          padding-bottom: 2px;
        }
        .project-link:hover {
          color: var(--accent);
        }
        @media (max-width: 720px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}
