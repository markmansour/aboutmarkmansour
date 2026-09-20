import { getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Me', href: 'mailto:mark@stateofflux.com' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/markmansour' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/markmansour' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Contact me: <a class="text-primary underline dark:text-muted" href="mailto:mark@stateofflux.com">mark@stateofflux.com</a> · Made with <a class="underline dark:text-muted" href="https://astro.build">Astro</a>
  `,
};
