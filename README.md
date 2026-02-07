# Cumulus Website

A modern, professional business website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🚀 Fast performance with Next.js 16+
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first responsive layout
- ⚡ Optimized for conversions

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Navigate to the project directory:
```bash
cd cumulus-site
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown) with your browser to see the website.

The site auto-updates as you edit files in the `src/` directory.

### Build for Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
cumulus-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Customization

Edit the following files to customize your website:

- `src/app/page.tsx` - Homepage content and layout
- `tailwind.config.ts` - Change colors, fonts, and other design tokens
- `src/app/layout.tsx` - Update metadata and global layout

## Deployment

The easiest way to deploy is on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

Or deploy manually to any hosting provider that supports Node.js.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT
