export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  image?: string;       // optional
  links?: { github?: string; demo?: string };
};
