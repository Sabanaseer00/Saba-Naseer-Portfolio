const GROUPS = [
  {
    label: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Vite'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'REST API design', 'JWT auth'],
  },
  {
    label: 'Data',
    items: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
  },
  {
    label: 'Desktop',
    items: ['Electron.js', 'Chrome extensions'],
  },
  {
    label: 'Tooling',
    items: ['Git / GitHub', 'Railway', 'Vercel', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <p className="kicker">02 — Skills</p>
          <h2>What I actually work with</h2>
        </div>

        <div className="skills-grid">
          {GROUPS.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 32px;
          border-top: 1px solid var(--border-soft);
          padding-top: 40px;
        }
        .skill-group h3 {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          color: var(--accent);
          margin: 0 0 16px;
        }
        .skill-group ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .skill-group li {
          font-size: 15px;
          color: var(--text);
          padding: 8px 0;
          border-bottom: 1px solid var(--border-soft);
        }
        .skill-group li:last-child {
          border-bottom: none;
        }
        @media (max-width: 720px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
