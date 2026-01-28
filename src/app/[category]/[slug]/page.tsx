import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { CodeBlock, CodeSettings } from "@/components";
import { getExample, getCategory, categories } from "@/content/examples";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const example = getExample(category, slug);

  if (!example) {
    return { title: "Not Found" };
  }

  return {
    title: example.title,
    description: example.description,
  };
}

export async function generateStaticParams() {
  const paths: Array<{ category: string; slug: string }> = [];

  for (const category of categories) {
    for (const example of category.examples) {
      paths.push({
        category: category.slug,
        slug: example.slug,
      });
    }
  }

  return paths;
}

const categoryColors: Record<string, string> = {
  basics: "from-blue-500 to-cyan-500",
  types: "from-purple-500 to-pink-500",
  async: "from-orange-500 to-yellow-500",
  node: "from-green-500 to-emerald-500",
  backend: "from-red-500 to-rose-500",
  patterns: "from-indigo-500 to-violet-500",
  react: "from-cyan-400 to-blue-500",
  nextjs: "from-gray-700 to-gray-900",
  angular: "from-red-500 to-red-700",
  express: "from-gray-600 to-gray-800",
  nestjs: "from-red-600 to-pink-600",
};

export default async function ExamplePage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const example = getExample(categorySlug, slug);
  const category = getCategory(categorySlug);

  if (!example || !category) {
    notFound();
  }

  const gradient = categoryColors[categorySlug] || categoryColors.basics;

  // Find previous and next examples
  const allExamples: Array<{
    categorySlug: string;
    slug: string;
    title: string;
    category: string;
  }> = [];

  for (const cat of categories) {
    for (const ex of cat.examples) {
      allExamples.push({
        categorySlug: cat.slug,
        slug: ex.slug,
        title: ex.title,
        category: cat.title,
      });
    }
  }

  const currentIndex = allExamples.findIndex(
    (e) => e.categorySlug === categorySlug && e.slug === slug
  );
  const prevExample = currentIndex > 0 ? allExamples[currentIndex - 1] : null;
  const nextExample =
    currentIndex < allExamples.length - 1 ? allExamples[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="text-zinc-300 dark:text-zinc-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
              {category.title}
            </span>
          </li>
          <li className="text-zinc-300 dark:text-zinc-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              {example.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-sm">
              {example.title.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {example.title}
            </h1>
          </div>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {example.description}
        </p>
      </header>

      {/* Code settings toggle */}
      <section className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Code
          </h2>
          <CodeSettings />
        </div>
      </section>

      {/* Code block */}
      <section className="mb-8">
        <CodeBlock code={example.code} language="typescript" />
      </section>

      {/* Run command */}
      {example.runCommand && (
        <section className="mb-12">
          <div className="p-5 rounded-xl bg-linear-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Run this example locally
              </h3>
            </div>
            <div className="bg-zinc-900 dark:bg-black rounded-lg p-4 font-mono text-sm text-zinc-100 overflow-x-auto">
              <span className="text-emerald-400">$</span> {example.runCommand}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="flex items-stretch gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        {prevExample ? (
          <Link
            href={`/${prevExample.categorySlug}/${prevExample.slug}`}
            className="group flex-1 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </div>
            <div className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {prevExample.title}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {prevExample.category}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextExample ? (
          <Link
            href={`/${nextExample.categorySlug}/${nextExample.slug}`}
            className="group flex-1 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-1">
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {nextExample.title}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {nextExample.category}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </div>
  );
}
