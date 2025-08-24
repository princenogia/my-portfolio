import type React from "react"
import "../app/globals.css"
import type { Metadata } from "next"

// Add metadata export
export const metadata: Metadata = {
  title: "Prince Portfolio",
  description: "Portfolio of Prince, a Full Stack Developer specializing in React Native and web development",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Prince Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Prince, a Full Stack Developer specializing in React Native and web development"
        />
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
