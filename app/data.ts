type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Case = {
  title: {
    'en-US': string
    'pt-BR': string
  }
  description: {
    'en-US': string
    'pt-BR': string
  }
  link: {
    'en-US': string
    'pt-BR': string
  }
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Ambev Tech',
    title: 'Product Designer',
    start: '2022',
    end: 'Present',
    link: 'https://www.ambevtech.com.br/',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2022',
    end: 'present',
    link: 'https://port-henna-nu.vercel.app/',
    id: 'work2',
  },
  {
    company: 'Ambev Tech',
    title: 'Senior Technical Support Analyst',
    start: '2015',
    end: '2022',
    link: 'https://www.ambevtech.com.br/',
    id: 'work3',
  },
]

export const CASES: Case[] = [
  {
    title: {
      'en-US': 'Web System Menu Restructuring',
      'pt-BR': 'Reestruturação de Menu em Sistema Web',
    },
    description: {
      'en-US':
        'Improving user experience in a complex system with 170+ pages',
      'pt-BR':
        'Melhorando a experiência do usuário em um sistema complexo com mais de 170 páginas',
    },
    link: {
      'en-US': '/en-US/cases/menu-restructuring',
      'pt-BR': '/pt-BR/cases/reestruturacao-menu',
    },
    uid: 'case-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/emnesty',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lucianoclecio/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/luux.design',
  },
]

export const EMAIL = 'legostr@gmail.com'
