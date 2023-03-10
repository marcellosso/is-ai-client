import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'AI or Human: Test your abilities,  Artifical Inteligence or Human?',
  description:
    'AI or Human is a game where the player has to choose wether the provided image was created by an Artifical Inteligence or by a Human.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aiorhumangame.com/',
    siteName: 'AIorHuman',
  },
  twitter: {
    handle: '@marcellosso',
    site: '@aiorhuman',
    cardType: 'summary_large_image',
  },
};

export default config;
