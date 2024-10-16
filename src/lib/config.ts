import { NavItem } from "./types";

export const siteConfig = {
  name: "Makje | Mark Jay Lunas",
  url: "https://www.makje.com",
  description:
    "Makje's portfolio: Your gateway to cutting-edge web development. Explore a collection of projects demonstrating technical expertise and a commitment to crafting exceptional digital experiences.",
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
