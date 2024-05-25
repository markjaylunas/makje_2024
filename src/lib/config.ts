import { NavItem } from "./types";

export const siteConfig = {
  name: "Makje",
  url: "https://www.makje.com",
  description:
    "Welcome to Makje's portfolio - a showcase of innovative web development projects, technical skills, and a testament to a lifelong passion for coding. Dive in to explore my journey and expertise in the realm of web development.",
  links: {
    github: "https://github.com/markjaylunas",
  },
};

export type SiteConfig = typeof siteConfig;

type RoutesConfig = {
  mainNav: NavItem[];
};

// const navItems = ["Home", "About", "Work", "Projects", "Contact"];
export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const API_BASE_URL = `${process.env.CONSUMET_API_BASE_URL}/meta/anilist`;
