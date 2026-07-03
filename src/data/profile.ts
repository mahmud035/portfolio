export interface EducationItem {
  degree: string;
  institution: string;
}

export interface Profile {
  /** Full legal/display name shown in the Hero heading. */
  displayName: string;
  /** Short brand shown in the navbar and footer. */
  brandName: string;
  /** Pipe-delimited headline, stored as parts rendered with separators. */
  headlineParts: string[];
  /** One-line positioning statement. */
  tagline: string;
  /** Compact hero "proof" chips — concrete evidence shown above the fold. */
  proofPoints: string[];
  location: string;
  email: string;
  /** Human-readable phone number for display. */
  phoneDisplay: string;
  /** `tel:` href form of the phone number. */
  phoneHref: string;
  githubUrl: string;
  linkedinUrl: string;
  /** Public path to the headshot; Hero falls back to initials if missing. */
  headshotSrc: string;
  headshotAlt: string;
  /** Initials shown when the headshot is unavailable. */
  initials: string;
  /** Public path to the downloadable CV. */
  cvSrc: string;
  cvFileName: string;
  /** Hosted résumé link (Google Drive) — opened in a new tab. */
  cvUrl: string;
  /** About-section paragraph(s). */
  about: string[];
  /** "Currently building" line — rendered as a subtle callout, not a card. */
  currentlyBuilding: string;
  education: EducationItem[];
}

export const profile: Profile = {
  displayName: 'Md. Mahamudul Hasan Pavel',
  brandName: 'Mahmud',
  headlineParts: [
    'Full-Stack Developer',
    '2+ years',
    'React · TypeScript · Node · MongoDB',
    'AI-native',
  ],
  tagline:
    'I build, ship, and operate live production systems across commerce and AI — now building real-time.',
  proofPoints: [
    'Live UK e-commerce',
    '$0-infra AI app',
    'Docker + CI/CD',
    'Zero-downtime migration',
    'Solo-built & operated', // ← or 'Lighthouse 100 · A11y/SEO'
  ],
  location: 'Gopalganj, Dhaka, Bangladesh',
  email: 'mahamudulhasan4148@gmail.com',
  phoneDisplay: '+88 01986-870460',
  phoneHref: 'tel:+8801986870460',
  githubUrl: 'https://github.com/mahmud035',
  linkedinUrl: 'https://www.linkedin.com/in/mahmud035/',
  headshotSrc: '/mahmud.png',
  headshotAlt: 'Md. Mahamudul Hasan',
  initials: 'MH',
  cvSrc: '/Md-Mahamudul-Hasan-Resume.pdf',
  cvFileName: 'Md-Mahamudul-Hasan-Resume.pdf',
  cvUrl:
    'https://drive.google.com/file/d/1XUTioVsxcvO6owju9ZU1BeOAOqpSm4kj/view?usp=sharing',
  about: [
    'Full-stack developer with 2+ years building and shipping production-grade, type-safe web applications — working independently and with small teams. End-to-end work across React 19 / TypeScript frontends and feature-driven Express / MongoDB APIs, with real payment integrations, AI features, and Docker/CI deployment.',
  ],
  currentlyBuilding:
    'Currently building two flagship products: an AI support/knowledge SaaS (RAG over MongoDB Atlas Vector Search + Gemini) and a real-time live-auction platform (Socket.io + Redis).',
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution:
        'Gopalganj Science & Technology University (GSTU), Gopalganj, Bangladesh',
    },
  ],
};
