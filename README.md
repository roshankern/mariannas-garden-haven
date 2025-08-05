# Marianna's Garden Haven

A modern, responsive portfolio website for Marianna Krejci-Papa - Artist, educator, and lover of beautiful things. Featuring handcrafted jewelry, teaching expertise, and creative inspiration.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Interactive Elements**: Engaging animations and hover effects
- **Portfolio Showcase**: Beautiful display of artistic work and creations
- **Professional Presentation**: Clean, elegant design reflecting artistry and craftsmanship

## Development

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd mariannas-garden-haven
```

2. Install dependencies:
```bash
# Using bun (recommended)
bun install

# Using npm
npm install

# Using yarn
yarn install
```

3. Start the development server:
```bash
# Using bun
bun run dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
# Using bun
bun run build

# Using npm
npm run build

# Using yarn
yarn build
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── MkpDesigns.tsx  # Designs showcase
│   ├── MkpLoves.tsx    # Favorites/Loves
│   ├── MkpTeaches.tsx  # Teaching portfolio
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is private and proprietary to Marianna Krejci-Papa.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8f2d2b73-d063-4201-a8a0-ba9a39075aa4) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
