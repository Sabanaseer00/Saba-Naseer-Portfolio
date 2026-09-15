import { useEffect, useRef, useState } from 'react'

const LINES = [
  { prompt: '$ whoami', output: 'saba-naseer' },
  { prompt: '$ cat role.txt', output: 'Software Engineer — MERN & Electron.js' },
  { prompt: '$ ls current-focus/', output: 'chatsphere.git   worktrack-fyp.git' },
]

export default function Hero() {
  const [rendered, setRendered] = useState([])
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (started.current) return
    started.current = true

    if (prefersReduced) {
      setRendered(LINES)
      return
    }

    let lineIndex = 0
    let charIndex = 0
    let buffer = []

    function tick() {
      if (lineIndex >= LINES.length) return
      const current = LINES[lineIndex]
      const full = current.prompt

      if (charIndex <= full.length) {
        buffer[lineIndex] = { prompt: full.slice(0, charIndex), output: null }
        setRendered([...buffer])
        charIndex++
        setTimeout(tick, 22)
      } else {
        buffer[lineIndex] = { prompt: full, output: current.output }
        setRendered([...buffer])
        lineIndex++
        charIndex = 0
        setTimeout(tick, 260)
      }
    }
    tick()
  }, [])

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Software Engineer</p>
          <h1>Saba Naseer</h1>
          <p className="hero-tagline">I build products that hold up under real use.</p>
          <p className="hero-sub">
            BS Software Engineering graduate from GC University Faisalabad, working
            across React, Node.js/Express, MongoDB and Electron.js. Currently building a
            real-time chat platform and an employee productivity system from the ground
            up.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="terminal-title">saba@dev — zsh</span>
          </div>
          <div className="terminal-body">
            {rendered.map((line, i) => (
              <div className="terminal-line" key={i}>
                <span className="terminal-prompt">{line.prompt}</span>
                {line.output && <div className="terminal-output">{line.output}</div>}
              </div>
            ))}
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 88px;
          padding-bottom: 96px;
          border-bottom: 1px solid var(--border-soft);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent);
          margin: 0 0 20px;
        }
        .hero-copy h1 {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 76px);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .hero-tagline {
          font-family: var(--font-display);
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 500;
          color: var(--text-dim);
          margin: 0 0 24px;
        }
        .hero-sub {
          color: var(--text-dim);
          font-size: 16px;
          max-width: 480px;
          margin: 0 0 36px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
        }
        .hero-terminal {
          background: var(--bg-terminal);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-r { background: #4a4d54; }
        .dot-y { background: #4a4d54; }
        .dot-g { background: #4a4d54; }
        .terminal-title {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-faint);
          margin-left: 8px;
        }
        .terminal-body {
          padding: 24px 20px;
          font-family: var(--font-mono);
          font-size: 14px;
          min-height: 200px;
        }
        .terminal-line {
          margin-bottom: 14px;
        }
        .terminal-prompt {
          color: var(--text);
        }
        .terminal-output {
          color: var(--accent);
          margin-top: 6px;
          padding-left: 4px;
        }
        .terminal-cursor {
          display: inline-block;
          width: 7px;
          height: 15px;
          background: var(--accent);
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-terminal {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}