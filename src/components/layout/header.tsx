"use client";

import { routesConfig } from "@/lib/config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Icons } from "../ui/icons";
import Link from "../ui/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const onClose = () => setIsMenuOpen(false);

  return (
    <Navbar
      shouldHideOnScroll
      disableAnimation
      isBordered
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="text-foreground">
            <Icons.logo />
            <p className="font-bold text-inherit ml-2">makje</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 font-light text-sm"
        justify="end"
      >
        {routesConfig.mainNav.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.href === pathname}
          >
            <Link color="foreground" href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {routesConfig.mainNav.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.href === pathname}
          >
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={onClose}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
