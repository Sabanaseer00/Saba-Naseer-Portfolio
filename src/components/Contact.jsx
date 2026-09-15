import { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      console.error(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
      )
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container contact-inner">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="kicker">04 — Contact</p>
          <h2>Let's talk about something worth building</h2>
          <p>
            Open to internships, junior full-stack roles, and freelance work. The form
            below sends straight to my inbox.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What are you working on?"
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="form-note form-note-ok">Sent. I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="form-note form-note-err">
              Couldn't send that — check the EmailJS setup in the README, or email me
              directly.
            </p>
          )}
        </form>
      </div>

      <style>{`
        .contact-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 480px;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-dim);
        }
        .contact-form input,
        .contact-form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 3px;
          padding: 12px 14px;
          resize: vertical;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--accent-dim);
          outline: none;
        }
        .contact-form button {
          align-self: flex-start;
          border: none;
        }
        .form-note {
          font-size: 14px;
          margin: 0;
        }
        .form-note-ok {
          color: var(--accent);
        }
        .form-note-err {
          color: #e08585;
        }
        @media (max-width: 860px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  )
}