export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luciano Silva',
    jobTitle: 'Product Designer & Front-end Developer',
    url: 'https://luux.vercel.app',
    sameAs: [
      'https://github.com/emnesty',
      'https://www.linkedin.com/in/lucianoclecio/',
      'https://www.instagram.com/luux.design',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Ambev Tech',
      url: 'https://www.ambevtech.com.br/',
    },
    knowsAbout: [
      'Product Design',
      'UX Design',
      'UI Design',
      'Front-end Development',
      'React',
      'Next.js',
      'TypeScript',
      'Design Systems',
      'User Experience',
      'User Interface',
    ],
    description:
      'Product Designer and Front-end Developer creating exceptional digital experiences. Specialized in UX/UI Design, React, Next.js, and Design Systems.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
