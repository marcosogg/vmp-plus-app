import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/utilties/providers";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata: Metadata = {
  title: "Vendor Management App",
  description: "A vendor management application."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Authentication is temporarily disabled for development purposes.
  // TODO: Re-enable authentication checks before deploying to production.

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Providers
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
