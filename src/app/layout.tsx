export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AppStateProvider from "@/providers/state-provider";
// import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { Toaster } from "@/components/ui/toaster";
// import { SocketProvider } from '@/lib/providers/socket-provider';

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteFusion",
  description: "An all-in-one Collaboration and Productivity Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppStateProvider>
            {/* <SupabaseUserProvider> */}
            {/* <SocketProvider> */}
            {children}
            <Toaster />
            {/* </SocketProvider> */}
            {/* </SupabaseUserProvider> */}
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
