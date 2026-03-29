import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@personality-ai/ui/globals.css";
import { cn } from "@personality-ai/ui/lib/utils";
import { Toaster } from "@personality-ai/ui/components/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Personality AI",
  description: "A chatbot that talks like a specific person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="h-full w-full bg-[#212121]">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
