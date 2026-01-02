import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "../components/header"
import { ThemeProvider } from "../components/theme-provider"
import { ActiveSectionProvider } from "./active-section-context"
import DynamicBackground from "./dynamic-background"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Biniyam Tafesse - Backend & Frontend Developer",
  description:
    "Professional portfolio showcasing skills in fullstack development, backend engineering, and frontend design.",
  generator: "v0.app",
  keywords: "developer, portfolio, backend, frontend, react, next.js, typescript",
  openGraph: {
    title: "Biniyam Tafesse - Backend & Frontend Developer",
    description: "Professional portfolio showcasing fullstack development expertise",
    url: "https://biniyam.dev",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`font-sans antialiased text-foreground flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <ActiveSectionProvider>
            <DynamicBackground />
            <div className="content-wrapper relative z-10 flex flex-1 flex-col">
              <Header />
              {children}
              <Analytics />
            </div>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
