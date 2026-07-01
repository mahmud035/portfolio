export type ProjectLinkType = 'live' | 'code';

export interface ProjectLink {
  type: ProjectLinkType;
  href: string;
}

export interface Project {
  name: string;
  subtitle: string;
  tech: string[];
  bullets: string[];
  /** Only present links are rendered — never fabricate a missing URL. */
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: 'Halal Aura',
    subtitle: 'Premium Halal Fragrance E-Commerce (UK)',
    tech: [
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'Zod',
      'TanStack Query v5',
      'Node/Express',
      'Mollie',
      'Mongoose',
      'Vercel',
      'Railway',
    ],
    bullets: [
      'Built and shipped the customer storefront for a live UK e-commerce platform — ~35,000 lines of TypeScript across 25 lazy-loaded pages and 12 feature modules, consuming 90+ REST endpoints.',
      'Engineered a dual cart system: a localStorage guest cart that merges seamlessly into a server-validated authenticated cart on login, with real-time stock checks.',
      'Integrated Mollie payments end-to-end (hosted checkout, webhook reconciliation, payment retry) behind a provider-agnostic payment layer, plus UK postcode address lookup and order tracking.',
      'Secured auth with JWT in HTTP-only cookies and a silent Axios refresh interceptor that queues and retries failed requests; tuned load via route-level code splitting, vendor chunking, and Cloudinary image optimization.',
    ],
    links: [{ type: 'live', href: 'https://halalaura.co.uk' }],
  },
  {
    name: 'রাঁধুনি (Recipe-Note)',
    subtitle: 'AI Recipe Extractor',
    tech: [
      'React 19',
      'TypeScript',
      'Google Gemini',
      'Express 5',
      'Mongoose',
      'Zod',
      'Docker',
      'GitHub Actions',
    ],
    bullets: [
      'Shipped a full-stack app that turns Bengali YouTube cooking videos into editable, structured recipes via Google Gemini — built for a real non-technical user, run end-to-end on a $0 hosting/inference budget.',
      'Designed an asynchronous job pipeline (fire-and-forget + client polling) with wall-clock timeouts, race guards, and orphaned-job recovery so a hung AI call can never crash the server.',
      'Anchored the system on a single Zod schema serving four consumers (AI response, Mongoose model, API envelope, client type) — backend changes break the frontend at compile time, not runtime.',
      'Owned deployment: multi-stage Docker image, GitHub Actions → GHCR → self-hosted box behind a Cloudflare Tunnel, with per-IP rate limiting and a Mongo-persisted daily budget guard.',
    ],
    links: [
      { type: 'live', href: 'https://recipe-note-app.vercel.app' },
      { type: 'code', href: 'https://github.com/mahmud035/recipe-note' },
    ],
  },
  {
    name: 'Aston CS Research Portal',
    subtitle: 'Research Discovery Platform',
    tech: [
      'React',
      'TypeScript',
      'Node/Express',
      'MongoDB',
      'TanStack Query',
      'Zod',
    ],
    bullets: [
      'Built for the Aston University CS department — a research portal to explore faculty, publications, and collaboration networks, with debounced keyword search and highlighted matches across staff and papers.',
      'Implemented an interactive force-directed collaboration graph (weighted co-authorship edges, department clustering, PNG export) over a computed author-pair aggregation.',
      'Followed a strict feature-driven architecture mirroring frontend features 1:1 to backend modules, with Zod request validation and a consistent response envelope.',
    ],
    links: [
      { type: 'live', href: 'https://aston-cs-research-portal.vercel.app/' },
      {
        type: 'code',
        href: 'https://github.com/mahmud035/aston-cs-research-portal',
      },
    ],
  },
];
