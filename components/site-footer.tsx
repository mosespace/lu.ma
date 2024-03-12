import Link from "next/link";
import { Instagram, MessageCircle, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className='py-4 md:px-8 md:py-0 border-t border-border/40 bg-zinc/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container p-8 flex flex-col gap-1 md:gap-0 md:flex-row justify-between max-w-screen-xl items-center'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by
          <Link
            href='https://mosespace.com'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            &nbsp;mosespace
          </Link>
          . The source code is available on&nbsp;
          <Link
            href='https://github.com/mosespace/lu.ma'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </Link>
          .
        </p>
        <ul className='text-sm text-balance flex flex-col gap-2'>
          <div className='space-x-3'>
            <Link href='/'>What's New</Link>
            <Link href='/'>Explore</Link>
            <Link href='/'>Pricing</Link>
            <Link href='/'>Help</Link>
          </div>
          <div className='flex items-center text-muted-foreground space-x-2'>
            <Link href=''>
              <MessageCircle className='w-5 h-5' />
            </Link>
            <Link href=''>
              <Twitter className='w-5 h-5' />
            </Link>
            <Link href=''>
              <Instagram className='w-5 h-5' />
            </Link>
            <span className=''>Follow us every-where...</span>
          </div>
        </ul>
      </div>
    </footer>
  );
}
