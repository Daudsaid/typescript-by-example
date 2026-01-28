"use client";

import { useState, useCallback } from "react";
import { usePreferences } from "@/lib/preferences";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { preferences } = usePreferences();

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [code]);

  const lines = code.split("\n");
  const lineNumberWidth = String(lines.length).length;

  const fontSizeClass = {
    sm: "text-[13px]",
    base: "text-sm",
    lg: "text-base",
  }[preferences.fontSize];

  return (
    <div className="relative group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-linear-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80" />
          </div>
          {/* Language badge */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              {language}
            </span>
            {filename && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {filename}
              </span>
            )}
          </div>
        </div>
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
            copied
              ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 opacity-0 group-hover:opacity-100 focus:opacity-100"
          }`}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative bg-zinc-950 dark:bg-black overflow-x-auto">
        <pre
          className={`p-4 ${fontSizeClass} font-mono leading-relaxed ${
            preferences.wordWrap ? "whitespace-pre-wrap wrap-break-word" : "whitespace-pre"
          }`}
        >
          <code className="text-zinc-100">
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {preferences.showLineNumbers && (
                  <span
                    className="table-cell pr-4 text-right select-none text-zinc-600 dark:text-zinc-500"
                    style={{ width: `${lineNumberWidth + 2}ch` }}
                  >
                    {index + 1}
                  </span>
                )}
                <span className="table-cell">
                  {highlightLine(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightLine(line: string): React.ReactNode {
  const patterns: Array<{ regex: RegExp; className: string }> = [
    // Comments
    { regex: /(\/\/.*$)/g, className: "text-zinc-500 italic" },
    // Strings (double quotes)
    { regex: /("(?:[^"\\]|\\.)*")/g, className: "text-emerald-400" },
    // Strings (single quotes)
    { regex: /('(?:[^'\\]|\\.)*')/g, className: "text-emerald-400" },
    // Template literals
    { regex: /(`[^`]*`)/g, className: "text-emerald-400" },
    // Keywords
    {
      regex:
        /\b(const|let|var|function|return|if|else|for|while|class|interface|type|extends|implements|import|export|from|async|await|new|this|typeof|instanceof|in|of|try|catch|throw|finally|switch|case|break|default|continue|do|void|null|undefined|true|false)\b/g,
      className: "text-purple-400 font-medium",
    },
    // Types and generics
    {
      regex:
        /\b(string|number|boolean|object|any|unknown|never|void|Promise|Array|Map|Set|Record|Partial|Required|Pick|Omit|Readonly|Error|Date)\b/g,
      className: "text-amber-400",
    },
    // Numbers
    { regex: /\b(\d+\.?\d*)\b/g, className: "text-orange-400" },
    // Function calls
    { regex: /\b([a-zA-Z_]\w*)\s*(?=\()/g, className: "text-sky-400" },
  ];

  const matches: Array<{
    start: number;
    end: number;
    text: string;
    className: string;
  }> = [];

  for (const { regex, className } of patterns) {
    const re = new RegExp(regex.source, regex.flags);
    let match;
    while ((match = re.exec(line)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[0],
        className,
      });
    }
  }

  matches.sort((a, b) => a.start - b.start);

  const filteredMatches: typeof matches = [];
  let lastEnd = 0;

  for (const match of matches) {
    if (match.start >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.end;
    }
  }

  let currentIndex = 0;
  const result: React.ReactNode[] = [];

  for (const match of filteredMatches) {
    if (match.start > currentIndex) {
      result.push(line.slice(currentIndex, match.start));
    }

    result.push(
      <span key={`${match.start}-${match.end}`} className={match.className}>
        {match.text}
      </span>
    );

    currentIndex = match.end;
  }

  if (currentIndex < line.length) {
    result.push(line.slice(currentIndex));
  }

  return result.length > 0 ? result : line || " ";
}
