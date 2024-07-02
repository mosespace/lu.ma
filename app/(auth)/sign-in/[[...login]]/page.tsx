"use client";

import Link from "next/link";
import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function page() {
  const [toastShown, setToastShown] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const error = searchParams.get("error");

    if (error === "OAuthAccountNotLinked" && !toastShown) {
      toast({
        title: "Email already exists",
        description: "An account associated with this email already exists.",
        action: <ToastAction altText='Try again'>Try Again</ToastAction>,
      });

      setToastShown(true);
    }
  }, [searchParams, toastShown]);

  const handleSignIn = async (provider: string) => {
    setLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: "/",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Suspense fallback={<></>}>
      <div
        id='login-popup'
        className='fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 backdrop-blur-md'
      >
        <div className='relative h-full w-full max-w-md p-4 md:h-auto'>
          <div className='relative rounded-lg bg-white shadow'>
            <button
              onClick={() => router.back()}
              type='button'
              className='popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900'
            >
              <svg
                aria-hidden='true'
                className='h-5 w-5'
                fill='#c6c7c7'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close popup</span>
            </button>

            <div className='p-5'>
              <h3 className='mb-0.5 text-2xl font-medium'></h3>
              <p className='mb-4 text-sm font-normal text-gray-800'></p>

              <div className='text-center'>
                <p className='mb-3 text-2xl font-semibold leading-5 text-slate-900'>
                  Login to your account
                </p>
                <p className='mt-2 text-sm leading-4 text-slate-600'>
                  You must be logged in to perform this action.
                </p>
              </div>

              <div className='mt-7 flex flex-col gap-2'>
                <button
                  disabled={loading}
                  onClick={() => handleSignIn("google")}
                  className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  <img
                    src='https://www.svgrepo.com/show/475656/google-color.svg'
                    alt='Google'
                    className='h-[18px] w-[18px] '
                  />
                  Continue with Google
                </button>

                <button
                  disabled={loading}
                  onClick={() => handleSignIn("github")}
                  className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  <img
                    src='https://www.svgrepo.com/show/512317/github-142.svg'
                    alt='GitHub'
                    className='h-[18px] w-[18px] '
                  />
                  Continue with GitHub
                </button>

                <button
                  disabled={loading}
                  onClick={() => handleSignIn("linkedin")}
                  className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  <img
                    src='https://www.svgrepo.com/show/448234/linkedin.svg'
                    alt='Linkedin'
                    className='h-[18px] w-[18px] '
                  />
                  Continue with LinkedIn
                </button>
              </div>

              <div className='flex w-full items-center gap-2 py-6 text-sm text-slate-600'>
                <div className='h-px w-full bg-slate-200'></div>
                OR
                <div className='h-px w-full bg-slate-200'></div>
              </div>

              <div className='mt-6 text-center text-sm text-slate-600'>
                Don't have an account?
                <Link href='/signup' className='font-medium text-[#4285f4]'>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
