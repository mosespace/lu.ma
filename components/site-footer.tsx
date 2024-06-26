"use client";

import { usePathname } from "next/navigation";

const navigation = {
  connect: [
    { name: "Book Meeting", href: "" },
    {
      name: "Twitter",
      href: "https://twitter.com/justansub",
    },
    {
      name: "Github",
      href: "https://www.youtube.com/@SpeedyBrand-SEO",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/speedy-brand-inc/",
    },
  ],
  company: [
    { name: "Blogs", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Affiliate Partner", href: "/" },
    { name: "AI For Enterprise", href: "/" },
  ],
};

const SiteFooter = () => {
  const pathname = usePathname();
  const isDashboardPath = pathname.startsWith("/dashboard");
  const isAuthPath = pathname.startsWith("/(auth))");

  if (isDashboardPath || isAuthPath) {
    return null;
  }
  return (
    <section className='bg-blackB pt-4'>
      <footer
        aria-labelledby='footer-heading'
        className='font-inter px-8 mx-auto w-full max-w-7xl'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-col justify-between lg:flex-row'>
            <div className='space-y-8'>
              <h2 className='font-black text-orangeB text-2xl'>
                Event<span className='font-light'>Yo</span>
              </h2>
              <p className='text-md max-w-xs leading-6 text-white dark:text-gray-300'>
                Not your average component library - build faster, launch
                sooner.
              </p>
              <div className='flex space-x-6 text-sm text-white  dark:text-gray-300'>
                <div>Made with ❤️ by Moses.</div>
              </div>
            </div>
            {/* Navigations */}
            <div className='mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2'>
              <div className='md:mt-0'>
                <h3 className='text-sm font-black leading-6 text-white  dark:text-gray-200'>
                  Connect
                </h3>
                <div className='mt-6 space-y-4'>
                  {navigation.connect.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm leading-6 text-white hover:text-white dark:text-gray-600 hover:dark:text-gray-200'
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <h3 className='text-sm font-black leading-6 text-white dark:text-gray-200'>
                    Company
                  </h3>
                  <div className='mt-6 space-y-4'>
                    {navigation.company.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className='text-sm leading-6 text-white hover:text-white dark:text-gray-600 hover:dark:text-gray-200'
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10'>
            <p className='text-xs leading-5 text-white dark:text-gray-300'>
              &copy; 2024 lu.ma. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default SiteFooter;
