"use client";

import Link from "next/link";
import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

export function FormConfirmation() {
  const formData: any = useSelector(
    (state: any) => state.creatingEvent.formData
  );

  const event_url = process.env.NEXT_PUBLIC_EVENT_URL as string;
  return (
    <div className='min-h-screen py-8 w-full flex flex-col items-center justify-center'>
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-bold text-2xl'>Congratulations</h2>
      </div>
      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        <div className='w-full relative'>
          <div className='flex w-full gap-8'>
            <div className='h-[19rem] flex flex-col justify-between w-full max-w-[20rem]'>
              <Image
                width={1080}
                height={1080}
                alt='lu.ma'
                src={formData?.photo || "/side-img.svg"}
                className='object-cover rounded-xl w-full h-full'
              />
              <h2 className='font-bold text-lg uppercase mt-2'>
                {formData?.name}
              </h2>
            </div>

            <div className='flex-col w-full flex justify-between'>
              <div className='space-y-3'>
                <h2 className='font-bold text-lg text-orangeB'>
                  Event Published
                </h2>
                <p className='line-clamp-5'>{formData?.description}</p>
              </div>

              <div className='flex items-center justify-between text-gray-800 border border-gray-800 bg-white max-w-sm font-mono text-sm py-3 px-4 w-full mt-4 rounded-lg'>
                <div className='flex gap-1'>
                  <span>$</span>
                  <span>{`${formData?.slug}/${event_url}`}</span>
                </div>
                <span className='flex text-gray-800 cursor-pointer w-5 h-5 hover:text-gray-400 duration-200'>
                  <Copy className='size-4' />
                </span>
              </div>

              <div className='w-full mt-4'>
                <h1 className='font-semibold mb-2'>
                  See your event live on our handles! 😲
                </h1>
                <ul className='mb-4 items-center flex md:order-1 md:mb-0'>
                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      aria-label='Twitter'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5 text-orangeB'
                      >
                        <path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z'></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      aria-label='Instagram'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5 text-orangeB'
                      >
                        <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
                        <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
                        <path d='M16.5 7.5l0 .01'></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      aria-label='Facebook'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5 text-orangeB'
                      >
                        <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      aria-label='RSS'
                      href='#'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5 text-orangeB'
                      >
                        <path d='M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0'></path>
                        <path d='M4 4a16 16 0 0 1 16 16'></path>
                        <path d='M4 11a9 9 0 0 1 9 9'></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      aria-label='Github'
                      href='https://github.com/onwidget/tailnext'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='h-5 w-5 text-orangeB'
                      >
                        <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='flex gap-2 items-center'>
                <Button variant='outline' className='w-full'>
                  Go to home
                </Button>
                <Button className='w-full'>View live event</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
