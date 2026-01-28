import Link from "next/link";
import { categories } from "@/content/examples";

const categoryColors: Record<string, { gradient: string; bg: string; text: string; icon: string }> = {
  basics: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    text: "text-blue-600 dark:text-blue-400",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  types: {
    gradient: "from-purple-500 to-pink-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    text: "text-purple-600 dark:text-purple-400",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  async: {
    gradient: "from-orange-500 to-yellow-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-600 dark:text-orange-400",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  patterns: {
    gradient: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    text: "text-indigo-600 dark:text-indigo-400",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  // Frontend frameworks
  react: {
    gradient: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    text: "text-cyan-600 dark:text-cyan-400",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  nextjs: {
    gradient: "from-gray-700 to-gray-900",
    bg: "bg-gray-100 dark:bg-gray-800/50",
    text: "text-gray-700 dark:text-gray-300",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  angular: {
    gradient: "from-red-500 to-red-700",
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-600 dark:text-red-400",
    icon: "M12 2L2 7l1.5 12.5L12 22l8.5-2.5L22 7l-10-5z",
  },
  // Backend frameworks
  node: {
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    text: "text-green-600 dark:text-green-400",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  },
  express: {
    gradient: "from-gray-600 to-gray-800",
    bg: "bg-gray-100 dark:bg-gray-800/50",
    text: "text-gray-600 dark:text-gray-400",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  nestjs: {
    gradient: "from-red-600 to-pink-600",
    bg: "bg-red-50 dark:bg-red-950/30",
    text: "text-red-600 dark:text-red-400",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
};

// Group definitions with intros
const pageGroups = [
  {
    name: "Core TypeScript",
    intro: "Master the fundamentals of TypeScript including variables, types, async programming, and design patterns.",
    categorySlugs: ["basics", "types", "async", "patterns"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Frontend",
    intro: "Build modern, type-safe user interfaces with popular frontend frameworks and libraries.",
    categorySlugs: ["react", "nextjs", "angular"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Backend",
    intro: "Develop robust server-side applications with Node.js and enterprise-grade frameworks.",
    categorySlugs: ["node", "express", "nestjs"],
    color: "from-green-500 to-emerald-500",
  },
];

// Create a map for quick category lookup
const categoryMap = new Map(categories.map((cat) => [cat.slug, cat]));

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16">
      {/* Hero */}
      <div className="mb-16 lg:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3178c6]/10 dark:bg-[#3178c6]/20 text-[#3178c6] dark:text-blue-400 text-sm font-medium mb-6 border border-[#3178c6]/20">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          The Language of Modern Web Development
        </div>
        <h1 className="inline-block px-8 py-4 rounded-2xl bg-[#3178c6] dark:bg-[#235a97] text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight shadow-xl">
          TypeScript{" "}
          <span className="text-white/90">
            by Example
          </span>
        </h1>

        <p className="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
          The essential skill for modern software development
        </p>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-4">
          TypeScript has transformed how we build software. As a typed superset of JavaScript,
          it brings compile-time type checking, enhanced IDE support, and enterprise-grade tooling
          to the world&apos;s most popular programming language.
        </p>

        <p className="text-base text-zinc-500 dark:text-zinc-500 max-w-3xl mx-auto leading-relaxed">
          From startups to Fortune 500 companies, TypeScript powers mission-critical applications
          at Google, Microsoft, Airbnb, Slack, and thousands of other organizations.
          It&apos;s not just a trend — it&apos;s the new standard for professional JavaScript development.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-10 text-sm">
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">{categories.reduce((acc, cat) => acc + cat.examples.length, 0)}+</div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">Practical Examples</div>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">{categories.length}</div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">Topic Categories</div>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">100%</div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">Type Safe Code</div>
          </div>
          <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700 hidden sm:block" />
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">#1</div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1">Most Loved Language</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href="/basics/variables"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3178c6] hover:bg-[#2868a8] text-white font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            Start Learning
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
          >
            Official Documentation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Why TypeScript in Modern Development */}
      <section className="mb-16 lg:mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
            Industry Standard
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Why TypeScript Matters in {new Date().getFullYear()}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            In an era of complex web applications, microservices, and AI-powered tools,
            TypeScript has become the foundation of professional software development.
            Here&apos;s why leading companies and developers choose TypeScript.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Eliminate Runtime Errors */}
          <div className="group p-6 rounded-2xl bg-linear-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-100 dark:border-red-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg mb-5">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              Eliminate Runtime Errors
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Catch bugs before they reach production. TypeScript&apos;s static type checking
              identifies errors at compile time, reducing debugging time by up to 15%.
            </p>
            <div className="text-xs text-red-600 dark:text-red-400 font-medium">
              Studies show 15% fewer bugs in TypeScript codebases
            </div>
          </div>

          {/* AI-Ready Development */}
          <div className="group p-6 rounded-2xl bg-linear-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-100 dark:border-violet-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg mb-5">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              AI-Ready Development
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              AI coding assistants like GitHub Copilot and Claude work dramatically better
              with TypeScript. Type annotations provide crucial context for smarter suggestions.
            </p>
            <div className="text-xs text-violet-600 dark:text-violet-400 font-medium">
              Better AI completions with rich type information
            </div>
          </div>

          {/* Enterprise Scale */}
          <div className="group p-6 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg mb-5">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              Enterprise Scale
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Confidently refactor millions of lines of code. Types serve as contracts
              between teams, making large-scale applications manageable and maintainable.
            </p>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
              Trusted by teams of all sizes worldwide
            </div>
          </div>
        </div>

        {/* Modern Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 block">Faster Development</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">IntelliSense & autocomplete</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 block">Team Productivity</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Self-documenting code</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 block">Rich Ecosystem</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">40M+ type definitions</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 block">Job Market</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Top demanded skill</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Adoption */}
      <section className="mb-16 lg:mb-20 p-8 lg:p-10 rounded-3xl bg-linear-to-br from-[#3178c6]/5 to-[#3178c6]/10 dark:from-[#3178c6]/10 dark:to-[#3178c6]/5 border border-[#3178c6]/20">
        <div className="text-center mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            TypeScript powers the products you use every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Microsoft */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-7 w-auto text-zinc-700 dark:text-zinc-300" viewBox="0 0 23 23" fill="currentColor">
              <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
            </svg>
            <span className="ml-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Microsoft</span>
          </div>

          {/* Google */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-6 w-auto" viewBox="0 0 74 24" fill="none">
              <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
              <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
              <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
              <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
              <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
              <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
            </svg>
          </div>

          {/* Airbnb */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-8 w-auto" viewBox="0 0 102 32" fill="none">
              <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.11-.23a79.59 79.59 0 0 0-3.89-8.03c-1.83-3.38-3.94-6.68-6.16-9.22-1.17-1.33-2.48-2.57-3.96-3.43-1.75-1.01-3.67-1.37-5.37-.86a7.1 7.1 0 0 0-2.96 1.95c-.88.87-1.66 1.89-2.35 2.94-.51.78-.99 1.61-1.44 2.43v.01c-.09.15-.17.3-.25.44-.45.8-.89 1.63-1.33 2.5-1.17 2.32-2.28 4.83-3.33 7.49l-.07.17c-.18.43-.35.85-.52 1.28-.44 1.06-.85 2.11-1.23 3.14a39.8 39.8 0 0 0-.65 1.84c-.42 1.23-.76 2.45-1.01 3.64A9.93 9.93 0 0 0 0 28.87c.33 1.57 1.3 2.71 2.7 3.21a6.55 6.55 0 0 0 2.17.35c.92 0 1.87-.15 2.81-.45a15.26 15.26 0 0 0 4.04-1.89 26.12 26.12 0 0 0 4.34-3.6c1.45-1.4 2.87-2.99 4.25-4.71.3-.37.61-.75.92-1.13.38.44.77.88 1.17 1.31 1.65 1.8 3.41 3.46 5.24 4.93a22.66 22.66 0 0 0 3.86 2.57c1.2.63 2.39 1.05 3.55 1.24a6.8 6.8 0 0 0 1.04.08c.77 0 1.48-.14 2.13-.42 1.34-.58 2.18-1.68 2.45-3.17.32-1.8-.23-4.13-1.59-6.92zm-10.77 1.3c-1.85 2.33-3.72 4.3-5.56 5.86a19.47 19.47 0 0 1-3.24 2.37 10.62 10.62 0 0 1-2.96 1.34c-.81.22-1.6.33-2.35.33a4.26 4.26 0 0 1-1.38-.21c-.7-.25-1.17-.69-1.34-1.31a7.8 7.8 0 0 1 .26-4.03c.23-.86.52-1.76.87-2.68.34-.9.72-1.83 1.13-2.77.15-.35.31-.71.47-1.07l.07-.16a73.28 73.28 0 0 1 3.17-7.01c1.04-2.04 2.14-3.89 3.27-5.5.68-1.01 1.41-1.96 2.13-2.79a12.47 12.47 0 0 1 2.03-1.98c.67-.5 1.29-.76 1.84-.76a2.2 2.2 0 0 1 1.21.36c.6.39 1.18.9 1.74 1.51a28.7 28.7 0 0 1 2.63 3.51c1.12 1.72 2.2 3.58 3.22 5.53a74.82 74.82 0 0 1 2.53 5.38l.07.17c-.01-.01-.02-.01-.02-.01-.11.24-.21.48-.32.72-.66 1.48-1.37 2.87-2.13 4.14a24.03 24.03 0 0 1-2.44 3.42 22.58 22.58 0 0 1-2.92 2.92 17.69 17.69 0 0 1-2.54 1.83c-.44.26-.87.47-1.3.66z" fill="#FF5A5F"/>
              <path d="M50.68 17.62c-1.88 0-3.24 1.53-3.24 3.54 0 2.01 1.32 3.58 3.24 3.58 1.88 0 3.2-1.53 3.2-3.54 0-2.05-1.32-3.58-3.2-3.58zm0 5.48c-1 0-1.68-.84-1.68-1.94 0-1.1.64-1.9 1.64-1.9 1 0 1.68.84 1.68 1.94.04 1.1-.64 1.9-1.64 1.9zm12.98-5.48c-1.88 0-3.24 1.53-3.24 3.54 0 2.01 1.32 3.58 3.24 3.58 1.88 0 3.2-1.53 3.2-3.54 0-2.05-1.32-3.58-3.2-3.58zm0 5.48c-1 0-1.68-.84-1.68-1.94 0-1.1.64-1.9 1.64-1.9 1 0 1.68.84 1.68 1.94.04 1.1-.64 1.9-1.64 1.9zm-6.5-5.28v.64c-.44-.52-1.12-.84-2-.84-1.8 0-3.12 1.53-3.12 3.54 0 1.97 1.32 3.54 3.12 3.54.88 0 1.56-.32 2-.84v.64h1.52v-6.68h-1.52zm-1.72 5.32c-1 0-1.68-.84-1.68-1.94 0-1.1.68-1.9 1.68-1.9s1.64.84 1.64 1.94c.04 1.06-.64 1.9-1.64 1.9zm31.84-3.5v-1.82h-1.56v6.68h1.56V20.9c0-1.1.72-1.58 1.64-1.58.28 0 .56.04.8.12v-1.57a2.04 2.04 0 0 0-.64-.08c-.72 0-1.4.32-1.8 1.02zm-10.04-1.82h-1.52v.64c-.44-.52-1.12-.84-2-.84-1.8 0-3.12 1.53-3.12 3.54 0 1.97 1.32 3.54 3.12 3.54.88 0 1.56-.32 2-.84v.64h1.52v-6.68zm-3.24 5.28c-1 0-1.68-.84-1.68-1.94 0-1.1.68-1.9 1.68-1.9s1.64.84 1.64 1.94c0 1.06-.64 1.9-1.64 1.9zm-6.48-5.28v-2.26h-1.56v2.26h-.96v1.42h.96v3.38c0 1.38.52 1.94 2.04 1.94.44 0 .8-.04 1.16-.16v-1.42c-.2.08-.48.12-.76.12-.56 0-.84-.24-.84-.88V19.2h1.6v-1.42h-1.64zm6.52-.16c-.8 0-1.52.4-1.84 1.06v-.9h-1.52v6.68h1.56v-3.62c0-1.18.6-1.74 1.52-1.74.28 0 .52.04.76.12v-1.52c-.12-.04-.32-.08-.48-.08zm19.8 3.62c0-1.97-1.28-3.54-3.16-3.54-.84 0-1.52.32-1.96.84v-.64h-1.52v6.68h1.56v-3.62c0-1.22.68-1.94 1.68-1.94.96 0 1.56.64 1.56 1.78v3.78h1.56v-3.78c0-.2 0-.4-.04-.56h.32zm5.96-3.46c-.76 0-1.44.28-1.88.84v-.64h-1.52v6.68h1.56v-3.54c0-1.26.64-1.98 1.6-1.98.92 0 1.44.6 1.44 1.7v3.82h1.56v-4.18c-.04-1.7-1.08-2.7-2.76-2.7zm5.4-.2v6.88h1.56v-6.88h-1.56zm.76-2.66c-.56 0-1 .44-1 1s.44 1 1 1 1-.44 1-1-.44-1-1-1zm7.44 2.46c-.8 0-1.52.4-1.84 1.06v-.86h-1.52v6.68h1.56v-3.62c0-1.18.6-1.74 1.52-1.74.88 0 1.36.56 1.36 1.58v3.78h1.56v-4.14c0-1.66-1.04-2.74-2.64-2.74z" fill="currentColor" className="text-zinc-700 dark:text-zinc-300"/>
            </svg>
          </div>

          {/* Slack */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-7 w-auto" viewBox="0 0 54 54" fill="none">
              <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
              <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
              <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
              <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/>
            </svg>
            <span className="ml-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Slack</span>
          </div>

          {/* Stripe */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-8 w-auto" viewBox="0 0 60 25" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M59.64 14.28c0-4.77-2.31-8.54-6.73-8.54-4.44 0-7.12 3.77-7.12 8.5 0 5.61 3.17 8.45 7.71 8.45 2.22 0 3.89-.5 5.16-1.21v-3.73c-1.27.64-2.73 1.03-4.58 1.03-1.81 0-3.42-.64-3.62-2.83h9.12c0-.24.06-1.2.06-1.67zm-9.22-1.78c0-2.1 1.29-2.97 2.47-2.97 1.15 0 2.36.87 2.36 2.97h-4.83zm-11.95-6.76c-1.83 0-3 .86-3.66 1.45l-.24-1.16h-4.1v21.83l4.66-.99.01-5.3c.67.49 1.66 1.18 3.3 1.18 3.33 0 6.37-2.68 6.37-8.58-.01-5.4-3.09-8.43-6.34-8.43zm-1.12 12.97c-1.1 0-1.75-.4-2.2-.89l-.02-7.01c.48-.54 1.15-.92 2.22-.92 1.7 0 2.87 1.9 2.87 4.4 0 2.53-1.15 4.42-2.87 4.42zm-14.35-14.1l4.68-.99V0l-4.68.99v4.62zm0 1.43h4.68v16.31h-4.68V6.04zm-5.28 1.37l-.3-1.37h-4.04v16.31h4.66V10.3c1.1-1.44 2.97-1.17 3.55-.97V5.74c-.6-.23-2.78-.64-3.87 1.67zm-8.93-4.8l-4.55.97-.02 14.93c0 2.76 2.07 4.79 4.83 4.79 1.53 0 2.65-.28 3.26-.61v-3.78c-.6.24-3.54 1.1-3.54-1.66V9.72h3.54V5.74h-3.54l.02-3.13zM3.79 10.04c0-.66.55-1.11 1.46-1.11.92 0 2.33.31 3.25.89V5.98a8.65 8.65 0 0 0-3.25-.6C2.11 5.38 0 7.14 0 9.97c0 4.39 6.04 3.69 6.04 5.58 0 .78-.68 1.04-1.63 1.04-1.41 0-3.21-.58-4.14-1.37v3.92a10.51 10.51 0 0 0 4.14.86c3.23 0 5.45-1.6 5.45-4.47-.02-4.74-6.07-3.89-6.07-5.49z" fill="#635BFF"/>
            </svg>
          </div>

          {/* Shopify */}
          <div className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
            <svg className="h-8 w-auto" viewBox="0 0 109 32" fill="none">
              <path d="M25.82 8.51c-.02-.15-.15-.24-.27-.25-.12-.01-2.68-.05-2.68-.05s-1.79-1.74-1.97-1.92c-.18-.18-.53-.13-.67-.08-.02 0-.37.11-.99.31-.59-1.7-1.63-3.26-3.46-3.26h-.16c-.52-.68-1.16-1-1.71-1-4.24 0-6.27 5.3-6.91 8-.64.2-2.52.78-2.52.78-.79.25-.81.27-.91 1.01-.08.55-2.12 16.36-2.12 16.36l15.95 2.99 8.65-1.87s-4.6-21.85-4.63-22.02zm-6.78-1.87c-.48.15-.99.31-1.55.48v-.34c0-1.04-.14-1.88-.38-2.54.94.12 1.57 1.19 1.93 2.4zm-3.14-.96c.27.62.44 1.51.44 2.73v.17l-3.21.99c.62-2.38 1.78-3.53 2.77-3.89zm-1.12-1.34c.18 0 .36.06.53.18-1.32.62-2.74 2.18-3.33 5.3l-2.54.79c.71-2.4 2.38-6.27 5.34-6.27z" fill="#95BF47"/>
              <path d="M25.55 8.26c-.12-.01-2.68-.05-2.68-.05s-1.79-1.74-1.97-1.92c-.07-.07-.16-.1-.25-.12l-1.2 24.44 8.65-1.87S23.5 6.89 23.48 6.74c-.02-.15-.15-.24-.27-.25-.12-.01-2.68-.05-2.68-.05s-1.79-1.74-1.97-1.92c-.18-.18-.53-.13-.67-.08-.02 0-.37.11-.99.31-.59-1.7-1.63-3.26-3.46-3.26h-.16c-.52-.68-1.16-1-1.71-1-4.24 0-6.27 5.3-6.91 8-.64.2-2.52.78-2.52.78-.79.25-.81.27-.91 1.01-.08.55-2.12 16.36-2.12 16.36l15.95 2.99 8.65-1.87s-4.6-21.85-4.63-22.02z" fill="#5E8E3E"/>
              <path d="M15.32 11.8l-1.27 3.76s-1.11-.59-2.48-.59c-2.01 0-2.11 1.26-2.11 1.58 0 1.73 4.52 2.4 4.52 6.46 0 3.19-2.03 5.25-4.76 5.25-3.28 0-4.96-2.04-4.96-2.04l.88-2.9s1.73 1.48 3.18 1.48c.95 0 1.34-.75 1.34-1.3 0-2.27-3.71-2.37-3.71-6.08 0-3.13 2.25-6.16 6.79-6.16 1.75 0 2.62.5 2.62.5l-.04.04z" fill="#FFF"/>
              <path d="M41.37 14.05c-1.47 0-2.62.44-3.52 1.13l.04-.04-1.42-5.07-.04.01h-3.86l3.6 18.39h4.29l-1.23-6.34c-.48-2.45.95-3.32 2.14-3.32.94 0 1.58.53 1.58 1.68 0 .2-.02.42-.06.67l-1.33 6.71v.6h4.24l1.38-7.04c.08-.4.14-.88.14-1.28 0-3.15-1.67-5.1-4.95-5.1zm14.81 0c-3.88 0-6.47 3.5-6.47 7.4 0 2.51 1.56 5.03 5.02 5.03 3.79 0 6.38-3.4 6.38-7.4-.01-2.32-1.4-5.03-4.93-5.03zm-.82 3.42c1.18 0 1.47 1.02 1.47 1.86 0 1.69-.87 4.73-2.49 4.73-1.15 0-1.48-1-1.48-1.8 0-1.75.88-4.79 2.5-4.79zm17.92-3.42c-2.41 0-3.78 2.13-3.78 2.13h-.05l.22-1.93h-3.8a63.44 63.44 0 0 1-.73 4.89l-1.82 9.33h4.29l.73-3.78c.29-1.45.96-3.7 1.98-3.7.66 0 .9.45.9 1.1 0 .42-.05.94-.14 1.37l-.91 4.61v.4h4.29l.96-4.88c.14-.66.26-1.42.26-1.93 0-1.17-.34-1.98-1-2.49.81-1.12 1.84-1.72 2.92-1.72.66 0 1.14.45 1.14 1.1 0 .42-.05.94-.14 1.37l-.91 4.61v.4h4.29l.96-4.88c.14-.66.26-1.42.26-1.93-.01-2.83-1.69-4.07-4.12-4.07zm11.26 0c-3.88 0-6.47 3.5-6.47 7.4 0 2.51 1.56 5.03 5.02 5.03 3.79 0 6.38-3.4 6.38-7.4-.01-2.32-1.4-5.03-4.93-5.03zm-.82 3.42c1.18 0 1.47 1.02 1.47 1.86 0 1.69-.87 4.73-2.49 4.73-1.15 0-1.48-1-1.48-1.8 0-1.75.88-4.79 2.5-4.79zm14.79-3.42c-2.25 0-3.66 1.99-3.66 1.99h-.05l.2-1.79h-3.82c-.14 1.15-.38 2.89-.62 4.2l-2.56 13.02h4.28l1.01-5.23h.08s.69.46 1.98.46c3.81 0 6.31-3.9 6.31-7.84-.01-2.38-1.05-4.81-3.15-4.81zm-2.36 8.38c-.86 0-1.36-.48-1.36-.48l.55-3.08c.26-1.4.99-2.37 1.93-2.37.99 0 1.32.92 1.32 1.82 0 1.87-.97 4.11-2.44 4.11zM108.35 8.99h-2.84l.04-.19c.15-.82-.29-1.42-1.09-1.42-1.39 0-2.18 1.5-2.18 2.67 0 .83.45 1.42 1.26 1.42.49 0 1.48-.12 2.54-.28l-1.32 6.74c-.99.21-2.13.33-3.1.33-2.77 0-4.57-1.6-4.57-4.4 0-4.39 2.83-7.86 6.93-7.86 2.88 0 4.55 1.75 4.55 4.12-.01.49-.1.87-.22 1.27v-.4z" fill="currentColor" className="text-zinc-700 dark:text-zinc-300"/>
            </svg>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#3178c6]/20 grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">78%</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">of JS developers use TypeScript</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">50M+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">weekly npm downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3178c6] dark:text-blue-400">#1</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">most used language on GitHub</div>
          </div>
        </div>
      </section>

      {/* Grouped Categories */}
      <div className="space-y-16">
        {pageGroups.map((group) => (
          <div key={group.name}>
            {/* Group Header */}
            <div className="mb-8">
              <h2 className={`text-2xl lg:text-3xl font-bold bg-linear-to-r ${group.color} bg-clip-text text-transparent mb-2`}>
                {group.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {group.intro}
              </p>
            </div>

            {/* Categories in this group */}
            <div className="space-y-12">
              {group.categorySlugs.map((slug) => {
                const category = categoryMap.get(slug);
                if (!category) return null;
                const colors = categoryColors[slug] || categoryColors.basics;

                return (
                  <section key={category.slug}>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={colors.icon} />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                              {category.title}
                            </h3>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                              {category.examples.length} examples
                            </span>
                          </div>
                        </div>
                        {category.docsUrl && (
                          <a
                            href={category.docsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm ${colors.text} hover:underline flex items-center gap-1`}
                          >
                            <span>Docs</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-13">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {category.examples.map((example) => (
                        <Link
                          key={example.slug}
                          href={`/${category.slug}/${example.slug}`}
                          className="group relative p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-semibold text-zinc-900 dark:text-zinc-100 group-hover:${colors.text} transition-colors`}>
                                {example.title}
                              </h4>
                              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                                {example.description}
                              </p>
                            </div>
                            <div className={`shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                              <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Getting started */}
      <section className="mt-16 lg:mt-20 p-8 rounded-2xl bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Quick Start
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-1">
              Run the examples locally in seconds
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center">1</span>
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Install TypeScript globally</span>
          </div>
          <div className="bg-zinc-900 dark:bg-black rounded-xl p-4 font-mono text-sm text-zinc-100 overflow-x-auto">
            <code className="text-emerald-400">$</code> <code>npm install -g typescript ts-node</code>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center">2</span>
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Run any example</span>
          </div>
          <div className="bg-zinc-900 dark:bg-black rounded-xl p-4 font-mono text-sm text-zinc-100 overflow-x-auto">
            <code className="text-emerald-400">$</code> <code>npx ts-node basics/variables.ts</code>
          </div>
        </div>
      </section>
    </div>
  );
}
