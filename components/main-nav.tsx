import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='flex items-center space-x-2'>
        <img
          src='/logo2.svg'
          alt='desishub-events'
          width={400}
          height={400}
          className='h-6 w-6 fill-white hidden dark:block'
        />
        <Image
          src='/logo2.svg'
          alt='desishub-events'
          width={400}
          height={400}
          className='mix-blend-difference block h-6 w-6 dark:hidden'
        />
        {/* <Icons.logo /> */}
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className='flex gap-6'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
