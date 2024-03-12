import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-zinc/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container px-8 flex h-14 max-w-screen-xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu />
          </div>
          <nav className='flex items-center'>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
