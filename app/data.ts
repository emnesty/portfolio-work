type Project = {
  name: string
  description: {
    'en-US': string
    'pt-BR': string
  }
  link: string
  video?: string
  image?: string
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
    name: 'Zoe Bank App',
    description: {
      'en-US':
        'App developed for a Brazilian Fintech, focused on digital banking services.',
      'pt-BR':
        'Aplicativo desenvolvido para uma Fintech Brasileira, com foco em serviços bancários digitais.',
    },
    link: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=164%3A5136&node-id=164-10424&viewport=-1386%2C-1191%2C0.37&t=90o2onU2XjNNtFBT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=164%3A10424',
    image: '/cases-ui/ZoeBank.png',
    id: 'project1',
  },
  {
    name: 'GlobalSCM Pay App',
    description: {
      'en-US':
        'Project created for a Brazilian fintech, with several created and functional flows.',
      'pt-BR':
        'Projeto criado para uma fintech brasileira, com diversos fluxos criados e funcionais.',
    },
    link: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=8%3A1780&node-id=8-25039&viewport=309%2C1574%2C0.15&t=ztXOu2sylxUFSZYF-1&scaling=contain&content-scaling=fixed&starting-point-node-id=8%3A25039',
    image: '/cases-ui/SCM Pay.png',
    id: 'project2',
  },
  {
    name: 'Carango Landing Page',
    description: {
      'en-US':
        'Landing page developed in Figma for a large portal selling new and used cars in northeastern Brazil.',
      'pt-BR':
        'Página desenvolvida no figma para um grande portal de venda de carros novos e usados do nordeste do Brasil.',
    },
    link: 'https://www.figma.com/proto/EfI3d9lCop91NRK4cegxU3/Luciano-Silva---Portf%C3%B3lio?page-id=0%3A1&node-id=1-809&viewport=369%2C1000%2C0.33&t=Hmg74TIEmQ5ZyuDy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A809',
    image: '/cases-ui/Carango.png',
    id: 'project3',
  },
  {
    name: 'Wigla Pix',
    description: {
      'en-US':
        'WiglaPay is the newest payment gateway for international payments with Pix. With WiglaPay.',
      'pt-BR':
        'WiglaPay é o mais novo gateway de pagamento para o pagamento internacional com Pix.',
    },
    link: 'https://www.wigla.com.br/',
    image: '/cases-ui/WiglaPix.png',
    id: 'project4',
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
    company: 'Freelancer',
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
      'en-US': 'Improving user experience in a complex system with 170+ pages',
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
