import { NavItem } from "./types";

export const siteConfig = {
  name: "Makje",
  url: "https://www.makje.com",
  description:
    "Welcome to Makje's portfolio - a showcase of innovative web development projects, technical skills, and a testament to a lifelong passion for coding. Dive in to explore my journey and expertise in the realm of web development.",
  links: {
    github: "https://github.com/markjaylunas",
    linkedIn: "https://www.linkedin.com/in/markjaylunas",
    email: "mailto:markjay.lunas@gmail.com",
  },
};

export type SiteConfig = typeof siteConfig;

type RoutesConfig = {
  mainNav: NavItem[];
};

export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/#projects", // todo: create projects page
    },
    {
      title: "Contact",
      href: "/#footer", // todo: create contacts page
    },
  ],
};

export const PROJECTS_LINKS = {
  stream: {
    website: "https://stream.makje.com",
    repo: "https://github.com/markjaylunas/stream-makje",
  },
  mathdojo: {
    website: "https://mathdojo.makje.com",
    repo: "https://github.com/markjaylunas/mathdojo",
  },
};
