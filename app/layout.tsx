import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Re-build Scholars",
  description:
    "Re-build Scholars is a community-driven nonprofit supporting learning recovery and mentorship.",
};

const themeScript = `\n(function () {\n  try {\n    const stored = localStorage.getItem(\"theme\");\n    const prefersDark = window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n    const isDark = stored ? stored === \"dark\" : prefersDark;\n    document.documentElement.classList.toggle(\"dark\", isDark);\n  } catch (e) {}\n})();\n`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--bg)] text-[var(--text)]`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

