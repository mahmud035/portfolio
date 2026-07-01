export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Skills {
  /** Tier 1 — "What I use", grouped, full-emphasis chips. */
  primary: SkillGroup[];
  /** Tier 2 — "Also worked with", visually subordinate chips. */
  secondary: string[];
}

export const skills: Skills = {
  primary: [
    {
      category: 'Frontend',
      items: [
        'React 19',
        'TypeScript',
        'TanStack Query v5',
        'React Hook Form',
        'Zod',
        'Tailwind CSS v4',
        'Shadcn UI',
        'Axios',
        'Vite',
        'Framer Motion',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express 5',
        'MongoDB',
        'Mongoose',
        'REST APIs',
        'JWT (HTTP-only cookies)',
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        'Docker',
        'GitHub Actions (CI/CD)',
        'Git',
        'Vercel',
        'Railway',
        'MongoDB Atlas',
        'Postman',
        'Figma',
        'Linux',
      ],
    },
    {
      category: 'AI & Payments',
      items: ['Google Gemini', 'Mollie', 'Cloudinary'],
    },
    {
      category: 'Testing',
      items: ['Vitest', 'React Testing Library'],
    },
  ],
  secondary: [
    'Stripe',
    'GraphQL',
    'Redux Toolkit',
    'Zustand',
    'Next.js',
    'Prisma',
    'Supabase',
  ],
};
