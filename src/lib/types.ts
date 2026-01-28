export interface Example {
  slug: string;
  title: string;
  description: string;
  code: string;
  runCommand?: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  docsUrl?: string;
  examples: Example[];
}

export interface NavigationItem {
  category: string;
  categorySlug: string;
  examples: {
    slug: string;
    title: string;
  }[];
}
