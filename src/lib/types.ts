import { IconKeys } from "@/components/ui/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type TechStack = {
  title: string;
  icon: IconKeys;
  colors: number[][];
}[];

export type MainTechStack = {
  title: string;
  icon: IconKeys;
}[];
