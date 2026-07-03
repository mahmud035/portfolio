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
        'Tailwind CSS v4',
        'TanStack Query v5',
        'React Hook Form',
        'Axios',
        'Vite',
        'Motion',
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
        'Zod',
      ],
    },
    {
      category: 'Payments / Media / AI',
      items: ['Square', 'Stripe', 'Mollie', 'Cloudinary', 'Google Gemini'],
    },
    {
      category: 'DevOps & Tools',
      items: [
        'Docker',
        'GitHub Actions (CI/CD)',
        'Git',
        'Vercel',
        'Railway',
        'Postman',
        'Figma',
        'Linux',
      ],
    },
    {
      category: 'Testing',
      items: ['Vitest', 'React Testing Library'],
    },
  ],
  secondary: ['PostgreSQL', 'Prisma', 'Python', 'Firebase', 'Supabase'],
};
