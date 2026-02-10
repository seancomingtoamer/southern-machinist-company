import React from "react"
import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const barlow = Barlow({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Southern Machinist Company | Precision CNC Machining & Apprenticeships | Atlanta',
  description: 'Precision CNC machining with 30+ years of expertise. Custom parts, prototypes, and production runs in aluminum, steel, stainless, and more. Now hiring apprentices. Atlanta, GA area.',
  keywords: ['CNC machining', 'precision machining', 'machinist apprenticeship', 'Atlanta machining', 'custom parts', 'CNC milling', 'CNC turning', 'prototype machining', 'production runs', 'machine shop Atlanta'],
  openGraph: {
    title: 'Southern Machinist Company | Precision CNC Machining',
    description: '30+ years of precision machining expertise. Custom parts from blueprint to finished product. Now hiring apprentices.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Southern Machinist Company',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Southern Machinist Company',
    description: 'Precision CNC machining. 30+ years. Atlanta, GA.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E3FDG2QFJQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E3FDG2QFJQ');`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Southern Machinist Company",
              "description": "Precision CNC machining with 30+ years of expertise. Custom parts, prototypes, and production runs.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "areaServed": "Atlanta metropolitan area",
              "priceRange": "$$",
              "knowsAbout": ["CNC Machining", "Precision Manufacturing", "Prototyping", "Custom Parts"]
            })
          }}
        />
      </head>
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
