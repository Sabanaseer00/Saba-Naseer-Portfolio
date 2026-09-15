# Saba Naseer — Portfolio

React + Vite portfolio with an EmailJS-powered contact form (no backend needed).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Set up the contact form (EmailJS)

1. Go to https://www.emailjs.com and create a free account.
2. **Add a service**: Email Services → Add New Service → connect your Gmail (or
   Outlook). Note the **Service ID** it gives you.
3. **Create a template**: Email Templates → Create New Template. Use these variable
   names in the template body so they match the code:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   Example template body:
   ```
   New message from {{from_name}} ({{from_email}})

   {{message}}
   ```
   Note the **Template ID**.
4. **Get your public key**: Account → General → find your **Public Key**.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:
   ```bash
   cp .env.example .env
   ```
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev` after adding the `.env` file (Vite only reads env files on
   startup).
7. Free plan sends up to 200 emails/month — enough for a portfolio.

## Add your resume

Drop your resume PDF into `public/resume.pdf` — the navbar's "Resume" button already
links to `/resume.pdf`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy it to Vercel, Netlify, or GitHub Pages — same as your
other projects.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js   ← edit project info here
  App.jsx
  index.css
  main.jsx
```

To update project descriptions, GitHub links, or add a live demo link, edit
`src/data/projects.js`.
