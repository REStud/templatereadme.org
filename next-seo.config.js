export default {
  defaultTitle: 'templatereadme.org',
  description: `Use templatereadme.org's markdown editor and templates to easily create a README for your replication package`,
  additionalMetaTags: [
    {
      property: 'keywords',
      content: 'readme, easiest, create, markdown',
    },
    {
      name: 'theme_color',
      content: '#10B981',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/icon-96x96.png',
      sizes: '96x96',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://templatereadme.org/',
    title: 'templatereadme.org',
    description: `Use templatereadme.org markdown editor and templates to easily create a README for your replication package`,
    images: [
      {
        url: 'https://templatereadme.org/readme.png',
        width: 375,
        height: 375,
        alt: 'Og Image Alt',
      },
    ],
    site_name: 'templatereadme.org',
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: '@korenmiklos',
    cardType: 'summary',
  },
}
