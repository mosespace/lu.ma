import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

import { buttonVariants } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='container relative'>
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className='font-extrabold text-md:8xl mt-4'>
            Delightful events&nbsp;
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              start here.
            </span>
          </PageHeaderHeading>
          <PageHeaderDescription>
            Set up an event page, invite friends and sell tickets. Host a
            memorable event today. From beautiful event pages to effortless
            invites and ticketing, Luma is all you need to host a memorable
            event.
          </PageHeaderDescription>
          <PageActions>
            <Link href='/create' className={cn(buttonVariants())}>
              Create Your First Event
            </Link>
          </PageActions>
        </PageHeader>
        <div className='relative items-center w-full py-4k pb-12 mx-auto mt-4k max-w-7xl hidden dark:block'>
          <img
            alt=''
            className='relative object-cover w-full rounded lg:rounded-2xl hidden dark:block'
            src='/hero-img.jpg'
          />
        </div>
        <div className='relative items-center w-full py-4k pb-12k mx-auto mt-4k max-w-7xl dark:hidden block'>
          <Image
            alt='Hero Image should go here'
            className='relative object-cover object-top w-full md:h-[60rem] rounded lg:rounded-2xl dark:hidden block'
            width={5260}
            height={3506}
            src='/hero-img2.jpg'
          />
        </div>
      </div>
    </div>
  );
}
