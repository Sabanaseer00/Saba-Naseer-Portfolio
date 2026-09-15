import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          saba<span>.dev</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download className="btn btn-ghost nav-resume">
            Resume
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .nav-scrolled {
          background: rgba(11, 12, 15, 0.85);
          backdrop-filter: blur(8px);
          border-bottom-color: var(--border-soft);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .nav-logo {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
        }
        .nav-logo span {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a {
          font-size: 14px;
          color: var(--text-dim);
          transition: color 0.15s ease;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        .nav-resume {
          padding: 8px 16px;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav-toggle span {
          width: 20px;
          height: 1.5px;
          background: var(--text);
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 8px 20px 20px;
            background: rgba(11, 12, 15, 0.97);
            border-bottom: 1px solid var(--border-soft);
          }
          .nav-mobile a {
            padding: 12px 0;
            font-size: 15px;
            color: var(--text-dim);
            border-bottom: 1px solid var(--border-soft);
          }
        }
      `}</style>
    </header>
  )
}
