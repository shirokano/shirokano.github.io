export type AchievementsType = {
  projects: {
    title: string;
    description: string;
    link: string;
    icon: string;
    technologies: string[];
  }[];
  certs: {
    title: string;
    description: string;
    date: string;
    id: string;
    link: string;
  }[];
};

// @TODO see if Linkedin has a API to call this information
// @TODO Date objects instead of string (make sortable)
export const achievements: AchievementsType = {
  projects: [
    {
      title: 'BitCoin Terminal App',
      description:
        'A basic implementation of blockchain technology, applying Proof-of-Work (PoW) as its consensus algorithm.',
      link: 'https://github.com/gohls/basic-coin',
      icon: '',
      technologies: ['Java']
    }
  ],
  certs: [
    {
      title: 'Apollo GraphQL - Professional',
      description: 'string',
      date: 'Issued Jul 2023',
      id: 'eecca9ff-d061-4c35-a5ec-72f18295f6a9',
      link: 'https://university.redis.com/certificates/b97b484104384f398c5f46f35ab318a6'
    }
  ]
};
