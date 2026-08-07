# Shannon Crandley Portfolio

A dark, engineering-focused personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Bun.

## Local development

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to the files below update the site automatically.

- `app/page.tsx` — Home page
- `app/projects/page.tsx` — Project archive
- `app/globals.css` — Theme, layout, colors, and typography

## Checks

```bash
bun run lint
bun run build
```

## Deployment

Push this repository to GitHub as `shannon-portfolio`, then import it in [Vercel](https://vercel.com/new). Vercel detects Next.js and creates a production deployment automatically.
