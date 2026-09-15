export const projects = [
  {
    name: 'WorkTrack',
    tagline: 'Final Year Project — employee monitoring & productivity system',
    description:
      'A full-stack system with three parts working together: a React admin panel for managers, a Node.js/Express/MongoDB API, and an Electron.js desktop agent that tracks activity, screenshots, and work hours on employee machines. Includes a site-blocking Chrome extension and a hosts-file tamper watcher. Deployed with the backend on Railway and the frontend on Vercel.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Electron.js'],
    github: 'https://github.com/Sabanaseer00',
    status: 'In final documentation stage',
  },
  {
    name: 'ChatSphere',
    tagline: 'Real-time chat app, built to a production standard',
    description:
      'A WhatsApp-style real-time chat application on the MERN stack. Covers auth, live typing and online status, group chats with read-only history after leaving, media and voice sharing with a gallery view, emoji reactions, delivery ticks, scheduled "time-capsule" messages, and a conversation quality score. Built as a portfolio piece to a recruiter-facing standard, not a tutorial clone.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/Sabanaseer00',
    status: 'Actively building — voice mood filters and translation features in progress',
  },
  {
    name: 'Fake Review Detection',
    tagline: 'Semester project — ML-based review classifier',
    description:
      'A Streamlit web app that classifies product reviews as genuine or fake using a LightGBM model trained on NLP features — tokenization, TF-IDF, and sentiment analysis. Built end-to-end from data preprocessing to a usable web interface.',
    tech: ['Python', 'Streamlit', 'LightGBM', 'NLP'],
    github: 'https://github.com/Sabanaseer00',
    status: 'Complete',
  },
]
