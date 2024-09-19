import { createProfileAction, getProfileByUserIdAction } from "@/actions/profiles-actions";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/utilties/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
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
  title: "VMP+ App",
  description: "Vendor Management Platform Plus"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (userId) {
    const profile = await getProfileByUserIdAction(userId);
    if (!profile.data) {
      await createProfileAction({ userId });
    }
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Providers
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
