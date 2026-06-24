# aboutmarkmansour.com

Source for my personal site and blog: **[aboutmarkmansour.com](https://aboutmarkmansour.com)**.

I'm Mark Mansour, an engineering leader. This is where I write about engineering, leadership, and the occasional side project.

## Stack

- [Astro](https://astro.build/) — static site output
- [Tailwind CSS](https://tailwindcss.com/)
- MDX blog with content collections, RSS feed, and sitemap
- Built on the [AstroWind](https://github.com/arthelokyo/astrowind) template
- Deployed to GitHub Pages via GitHub Actions

## Develop

Requires Node `>=22.12`.

```bash
npm install
npm run dev        # serve at http://localhost:4321
```

## Build

```bash
npm run build      # output to ./dist
npm run preview    # preview the production build locally
```

## Quality checks

```bash
npm run check      # astro check + eslint + prettier
npm run fix        # auto-fix eslint + prettier
```

## Where things live

- `src/data/post/` — blog posts (Markdown / MDX)
- `src/config.yaml` — site metadata, navigation, and theme settings
- `src/pages/` — routes (home, blog, RSS)
- `src/components/` — layout and UI components

## License

Site content © Mark Mansour. The underlying template is [AstroWind](https://github.com/arthelokyo/astrowind), released under the MIT License — see [LICENSE.md](./LICENSE.md).
