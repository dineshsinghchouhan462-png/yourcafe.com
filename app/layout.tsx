import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Lazy Barn Cafe | Jodhpur",
  description:
    "The Lazy Barn Cafe, Jodhpur — calm ambience, premium food, trusted café experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f6f3] text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
