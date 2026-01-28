"use client";

import { usePreferences } from "@/lib/preferences";

export function CodeSettings() {
  const { preferences, togglePreference, setPreference } = usePreferences();

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      {/* Line Numbers Toggle */}
      <button
        onClick={() => togglePreference("showLineNumbers")}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
          preferences.showLineNumbers
            ? "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
            : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        <span>Line numbers</span>
      </button>

      {/* Word Wrap Toggle */}
      <button
        onClick={() => togglePreference("wordWrap")}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
          preferences.wordWrap
            ? "bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
            : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a4 4 0 014 4v2a4 4 0 01-4 4H3M3 10V6a2 2 0 012-2h14a2 2 0 012 2v4M3 10v4" />
        </svg>
        <span>Wrap</span>
      </button>

      {/* Font Size Selector */}
      <div className="inline-flex items-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
        {(["sm", "base", "lg"] as const).map((size) => (
          <button
            key={size}
            onClick={() => setPreference("fontSize", size)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              preferences.fontSize === size
                ? "bg-blue-600 text-white"
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            {size === "sm" ? "S" : size === "base" ? "M" : "L"}
          </button>
        ))}
      </div>
    </div>
  );
}
