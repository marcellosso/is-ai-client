import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'AI or Human',
  description:
    'AI or Human is a game where the player has to choose wether the provided image was created by an AI or by a Human.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aiorhumangame.com/',
    siteName: 'AIorHuman',
    images: {
      url: 'https://aiorhumangame.com/_next/image?url=%2Fassets%2Fai-or-human-logo.png&w=640&q=100',
      width: 850,
      height: 650,
      alt: 'Logo of AI or Human website',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  },
  twitter: {
    handle: '@marcellosso',
    site: '@aiorhuman',
    cardType: 'summary_large_image',
  },
};

export default config;
