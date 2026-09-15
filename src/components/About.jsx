export default function About() {
  return (
    <section id="about">
      <div className="container about-inner">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="kicker">01 — About</p>
          <h2>Grounded in the fundamentals, curious about the edges</h2>
        </div>
        <div className="about-body">
          <p>
            I'm a Software Engineering graduate from GC University Faisalabad, and I
            build production-shaped software alongside my formal coursework.
            Most of my work sits in the MERN stack — React on the front, Node.js and
            Express underneath, MongoDB holding the data — with Electron.js when a
            project needs to live on the desktop instead of the browser.
          </p>
          <p>
            My final year project, WorkTrack, is a full employee-monitoring and
            productivity system: an admin panel, a REST API, and a desktop agent that
            actually watches activity and enforces policy in real time. Alongside it,
            I'm building ChatSphere, a real-time chat app with the kind of small,
            deliberate details — read receipts, scheduled messages, mood-aware themes —
            that separate a demo from a product.
          </p>
          <p>
            I like the parts of engineering that don't show up in a feature list: fixing
            an auth bug that only appears in production, untangling a deployment across
            two hosts, getting a diagram to actually match the system it describes.
          </p>
        </div>
      </div>

      <style>{`
        .about-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
        }
        .about-body p {
          color: var(--text-dim);
          font-size: 16px;
          margin: 0 0 20px;
          max-width: 620px;
        }
        .about-body p:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 860px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  )
}