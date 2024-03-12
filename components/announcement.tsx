import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Separator } from "./ui/separator";

export function Announcement() {
  return (
    <Link
      href='https://www.mosespace.com'
      target='_blank'
      className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'
    >
      🎉 <Separator className='mx-2 h-4' orientation='vertical' />{" "}
      <span className='sm:hidden'>We have jus launched</span>
      <span className='hidden sm:inline'>
        We have just been launchd on the market
      </span>
      <ArrowRightIcon className='ml-1 h-4 w-4' />
    </Link>
  );
}
