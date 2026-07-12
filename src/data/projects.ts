export type ProjectLinkType = 'live' | 'code' | 'Case Study' | 'Docs';

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
      'Node',
      'Express 5',
      'MongoDB',
      'TanStack Query v5',
      'Tailwind v4',
      'Square',
      'Vercel',
      'Railway',
    ],
    bullets: [
      `Architected a provider-agnostic payment layer that absorbed two processor migrations (Stripe → Mollie → Square) with zero schema changes, containing a forced shutdown to a 4-day driver swap — storefront never down.`,
      `Built and operate the entire three-service platform solo — an Express / MongoDB API plus a React storefront and admin dashboard — with subdomain-scoped HTTP-only-cookie auth, guest checkout, and real production orders.`,
      `Engineered idempotent payment processing with retrying MongoDB transactions, an in-transaction PAID re-check, and a send-then-mark email pattern to prevent duplicate charges and confirmation emails under webhook replay.`,
      `Enforced a feature-driven architecture across all three codebases with frontend types mirroring API responses, so any contract change breaks at TypeScript compile time rather than in production.`,
      `Achieved Lighthouse Accessibility 100, SEO 100, and Best Practices 100 across storefront routes, with desktop Core Web Vitals in Google’s “Good” range (LCP 1.94s, INP 88ms, CLS 0.04).`,
    ],
    links: [
      { type: 'live', href: 'https://halalaura.co.uk' },
      { type: 'Case Study', href: 'https://github.com/mahmud035/halal-aura' },
    ],
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
      `Shipped a full-stack AI app end-to-end — React + Express / MongoDB API — that turns Bengali YouTube cooking videos into editable, structured recipes via Google Gemini, for a real non-technical user on a $0 inference budget.`,
      `Designed a fault-tolerant asynchronous job pipeline (fire-and-forget + client polling) with wall-clock timeouts, status-gated race guards, and startup orphan-recovery, so a hung or rate-limited AI call can never crash the server.`,
      `Anchored the system on a single Zod schema serving four consumers (AI response, Mongoose model, API envelope, and client type), so backend changes break the frontend at compile time, not runtime.`,
      `Owned split-origin deployment: multi-stage Docker image → GitHub Actions → GHCR → self-hosted box behind a Cloudflare Tunnel, with auto-deploying CI/CD, an atomic daily-budget guard, and per-IP rate limiting.`,
    ],
    links: [
      { type: 'live', href: 'https://recipe-note-app.vercel.app' },
      { type: 'code', href: 'https://github.com/mahmud035/recipe-note' },
      { type: 'Docs', href: 'https://github.com/mahmud035/devops-lab' },
    ],
  },
  {
    name: 'Mini ERP',
    subtitle: 'Role-Based Inventory & Sales Management',
    tech: [
      'React 19',
      'TypeScript',
      'Express 5',
      'MongoDB',
      'TanStack Query v5',
      'Socket.IO',
      'Zod',
      'Tailwind v4',
      'Vercel',
      'Railway',
    ],
    bullets: [
      `Engineered a fully DB-driven RBAC layer resolved per request behind a single authorization guard with zero hardcoded role names, so editing a role's permission set takes effect on the user's next request — no re-login, no redeploy.`,
      `Made multi-line sales transactional and race-safe with a Mongoose session and a guarded atomic stock decrement per item, so two sales racing for the last unit resolve all-or-nothing with server-computed totals — a failed line rolls the entire sale back, never a phantom decrement.`,
      `Solved first-party cookie auth across two different-origin deployments (Vercel + Railway) with a same-origin /api/* proxy and a single-flight refresh interceptor that queues concurrent 401s and replays each once — then authenticated the WebSocket, which can't ride that proxy, with an in-memory access token: one auth model, two transports.`,
      `Delivered real-time low-stock alerts over Socket.IO scoped to a permission-gated room only product:update holders join, with the broadcast isolated from the committing sale transaction so a socket failure can never delay or roll back a sale.`,
    ],
    links: [
      { type: 'live', href: 'https://mini-erp-client-app.vercel.app' },
      { type: 'code', href: 'https://github.com/mahmud035/mini-erp-client' },
    ],
  },
  {
    name: 'Aston CS Research Portal',
    subtitle: 'Research Discovery Platform',
    tech: [
      'React 19',
      'TypeScript',
      'Express 5',
      'MongoDB',
      'TanStack Query v5',
      'Zod',
    ],
    bullets: [
      `Modeled co-authorship as an interactive force-directed collaboration graph over a computed aggregation — deduping mirror author-pairs by a sorted canonical key and weighting each edge by shared-publication count.`,
      `Structured a feature-driven full-stack architecture mirroring frontend features 1:1 to backend modules with a shared typed API contract, so any response-shape change breaks TypeScript at compile time, not runtime.`,
      `Wired debounced keyword search spanning faculty and publications in a single round-trip, with case-insensitive backend matching, Zod-validated params, and highlighted matches showing why each result surfaced.`,
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
