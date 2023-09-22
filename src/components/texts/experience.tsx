export type ExperienceType = {
  position_title: string;
  company_name: string;
  dates: string;
  location: string;
  technologies: string[];
  highlights: string[];
}[];

// @TODO see if Linkedin has a API to call this information
// @TODO Date objects instead of string (make sortable)
// @TODO add company link & images
export const experience: ExperienceType = [
  {
    position_title: 'Software Engineer',
    company_name: 'Built Technologies',
    dates: 'Nov 2022 - Jul 2023 • 9 mos',
    location: 'Nashville, Tennessee, United States • Remote',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'single-spa',
      'NodeJS',
      'Python',
      'NestJS',
      'Redux',
      'Redis',
      'Docker',
      'AWS ecosystem',
      'Jest',
      'Pytest',
      'Microservices',
      'SaaS',
      'Jira',
      'Postman API',
      'Datadog',
      'Scrum',
      'HTML',
      'SCSS',
      'MySQL',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'TDD',
      'Confluence'
    ],
    highlights: [
      'Worked at a fast-paced FinTech startup, engineering a new SaaS product feature involving real-time updates and data-driven insights, like risk alerts and project tracking, prompting >25% product upsell opportunity.',
      'Executed full-stack software engineering tasks, encompassing the development of 5+ frontend web pages, 25+ app features, and corresponding backend services, bootstrapping projects from ground up.',
      'Contributed to pre-release software testing efforts achieving test coverage of >90% of all project repositories, created CI/CD processes, and participated in approx. 4 code peer-reviews weekly.'
    ]
  },
  {
    position_title: 'Full Stack Software Developer',
    company_name: 'One Stop Inc.',
    dates: 'Jun 2020 - Oct 2022 • 2 yrs 6 mos',
    location: 'Grand Rapids, Michigan, United States • Remote',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'NodeJS',
      'Python',
      'Django',
      'Django REST Framework',
      'Redis',
      'MobX',
      'Pytest',
      'Sentry',
      'Software Development Life Cycle (SDLC)',
      'HTML',
      'CSS',
      'PostgreSQL',
      'Git'
    ],
    highlights: [
      'Spearheaded a high-visibility, large-scale software development pipeline project to streamline workflows between diverse business departments, an effort that generated major interest with executive stakeholders.',
      'Functioned as core developer for the internal warehouse system and backup developer for the public-facing website, developing a combined 30+ front-end UI features, 15+ backend APIs, and 10+ data models.',
      'Collaborated across teams to ideate on project development, specifications, and design aggregation concepts within a dynamic, cross-functional team, driving successful project outcomes.'
    ]
  },
  {
    position_title: 'Software Engineer (Intern)',
    company_name: 'Electronic Arts (EA)',
    dates: 'May 2019 - Aug 2019 • 4 mos',
    location: 'Austin, Texas Area • On-site',
    technologies: ['React', 'Flask', 'JavaScript', 'NodeJS', 'HTML', 'CSS', 'Git'],
    highlights: [
      'Created and presented a proof-of-concept (PoC) for the development of a web application used to perform text data analytics, which gained approval as a long-term software development initiative.',
      'Gained recognition as one of 14 project submissions out of 1,400 that were selected for the company’s science fair for exhibiting innovative software development vision.'
    ]
  }
];
