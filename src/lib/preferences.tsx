"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Preferences {
  showLineNumbers: boolean;
  wordWrap: boolean;
  fontSize: "sm" | "base" | "lg";
  codeTheme: "default" | "high-contrast";
}

interface PreferencesContextType {
  preferences: Preferences;
  setPreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void;
  togglePreference: (key: keyof Pick<Preferences, "showLineNumbers" | "wordWrap">) => void;
}

const defaultPreferences: Preferences = {
  showLineNumbers: true,
  wordWrap: false,
  fontSize: "sm",
  codeTheme: "default",
};

const PreferencesContext = createContext<PreferencesContextType | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("code-preferences");
    if (stored) {
      try {
        setPreferences({ ...defaultPreferences, ...JSON.parse(stored) });
      } catch {
        // Ignore invalid JSON
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("code-preferences", JSON.stringify(preferences));
    }
  }, [preferences, mounted]);

  const setPreference = <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const togglePreference = (key: keyof Pick<Preferences, "showLineNumbers" | "wordWrap">) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PreferencesContext.Provider value={{ preferences, setPreference, togglePreference }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
