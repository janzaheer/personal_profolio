# Zaheer Jan — Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Netlify

1. Push to GitHub
2. Connect the repo to [Netlify](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

Or use Netlify CLI:

```bash
npx netlify-cli deploy --prod --dir=dist
```

## Update Content

All site content is in `src/data/siteData.ts` — update text, skills, experience, and projects there.

To update the resume, replace `public/resume.pdf` with your new file.
