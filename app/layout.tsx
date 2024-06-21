import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Providers from "@/providers/providers";
import SiteFooter from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Luma · Delightful Events Start Here",
  description:
    "From beautiful event pages to effortless invites and ticketing, Luma is all you need to host a memorable event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <Providers>
          <div vaul-drawer-wrapper=''>
            <div className='relative flex min-h-screen flex-col'>
              {/* <SiteHeader /> */}
              <main className='flex-1'>{children}</main>
              {/* <SiteFooter /> */}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
