# TypeScript by Example

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**The essential skill for modern software development**

[Live Demo](https://typescript-by-example.vercel.app) | [Official TypeScript Docs](https://www.typescriptlang.org/docs/)

</div>

---

## About

TypeScript by Example is an interactive learning platform that teaches TypeScript through hands-on, runnable examples. Each example is self-contained and focused on a single concept, making it easy to understand and apply TypeScript in your projects.

Inspired by [Go by Example](https://gobyexample.com), this project aims to provide practical, real-world examples that help developers master TypeScript - from basic syntax to advanced patterns used by companies like Google, Microsoft, Airbnb, and Slack.

## Why TypeScript?

- **Eliminate Runtime Errors** - Catch bugs at compile time, not in production
- **AI-Ready Development** - Better AI code completions with rich type information
- **Enterprise Scale** - Confidently refactor large codebases with type safety
- **Superior IDE Support** - IntelliSense, autocomplete, and powerful refactoring tools
- **Industry Standard** - Used by 78% of JavaScript developers worldwide

## Features

- **50+ Practical Examples** across multiple categories
- **Syntax Highlighting** with Shiki for beautiful code display
- **Copy to Clipboard** - Easily copy code snippets
- **Dark/Light Mode** - System preference detection
- **Responsive Design** - Works on all devices
- **Fast Performance** - Static site generation with Next.js
- **Keyboard Accessible** - Full keyboard navigation support

## Categories

### Core TypeScript
- **Basics** - Variables, functions, objects, arrays
- **Types** - Generics, unions, type guards, utility types
- **Async** - Promises, async/await, error handling
- **Patterns** - Builder, factory, singleton, observer

### Frontend
- **React** - Hooks, components, state management
- **Next.js** - App router, server components, API routes
- **Angular** - Components, services, dependency injection

### Backend
- **Node.js** - File system, HTTP server, environment variables
- **Express** - REST APIs, middleware, validation
- **NestJS** - Controllers, modules, decorators

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Daudsaid/typescript-by-example.git

# Navigate to the project
cd typescript-by-example

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── [category]/[slug]/   # Dynamic example pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Homepage
├── components/
│   ├── CodeBlock.tsx        # Syntax highlighted code
│   ├── Header.tsx           # Top navigation bar
│   ├── Sidebar.tsx          # Category navigation
│   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   └── LayoutWrapper.tsx    # Layout wrapper component
├── content/
│   └── examples.ts          # All example content
└── lib/
    ├── preferences.tsx      # User preferences context
    └── sidebar-context.tsx  # Sidebar state management
```

## Adding Examples

Edit `src/content/examples.ts` to add new examples:

```typescript
{
  slug: "example-slug",
  title: "Example Title",
  description: "Brief description of the example",
  code: `// Your TypeScript code here
const greeting: string = "Hello, TypeScript!";
console.log(greeting);`,
  runCommand: "npx ts-node examples/greeting.ts"
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Highlighting**: [Shiki](https://shiki.matsu.io/)
- **Fonts**: [Geist](https://vercel.com/font)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [Go by Example](https://gobyexample.com)
- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com/)

---

<div align="center">

**Made with TypeScript**

[Report Bug](https://github.com/Daudsaid/typescript-by-example/issues) | [Request Feature](https://github.com/Daudsaid/typescript-by-example/issues)

</div>
