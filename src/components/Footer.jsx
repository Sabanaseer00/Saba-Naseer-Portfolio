export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Saba Naseer</p>
        <div className="footer-links">
          <a href="https://github.com/Sabanaseer00" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/saba-naseer-0407362b6" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-faint);
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-links a:hover {
          color: var(--text-dim);
        }
      `}</style>
    </footer>
  )
}