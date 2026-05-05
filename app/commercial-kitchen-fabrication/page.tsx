import React from "react"
import type { Metadata } from "next"
import {
  Wrench,
  Cog,
  Factory,
  Gauge,
  Clock,
  Target,
  Award,
  ArrowRight,
  Phone,
  MapPin,
  Utensils,
  ChefHat,
  Soup,
  Refrigerator,
  Flame,
  Hammer,
  Building2,
  Coffee,
  HardHat,
  Store,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { SpecialtyCrossLinks } from "@/components/specialty-cross-links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS_STREET, ADDRESS_CITY_STATE_ZIP } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Commercial Kitchen Fabrication | Stainless Prep Tables & Custom Equipment | Atlanta",
  description: "Custom stainless steel prep tables, hood components, kitchen equipment, and repairs for metro Atlanta restaurants, kitchen designers, and food service operators. 30+ years of fabrication experience. Lawrenceville, GA.",
  keywords: ["commercial kitchen fabrication", "stainless steel fabrication Atlanta", "custom prep tables", "restaurant equipment fabrication", "hood components", "kitchen equipment repair", "food service fabrication", "kitchen designer fabrication", "Atlanta restaurant fabrication"],
  openGraph: {
    title: "Commercial Kitchen Fabrication | Southern Machinist Company",
    description: "Stainless prep tables, hood components, custom kitchen equipment, and repairs for metro Atlanta food service.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Machinist Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Kitchen Fabrication | Southern Machinist Company",
    description: "Stainless fabrication and repairs for metro Atlanta restaurants and kitchen designers.",
  },
  alternates: { canonical: "/commercial-kitchen-fabrication" },
}

const services = [
  {
    icon: Soup,
    title: "Custom Prep Tables",
    desc: "Stainless prep tables, work tables, and sink assemblies built to fit your line. Drawers, undershelves, and casters specced to your kitchen, not a catalog SKU.",
  },
  {
    icon: ChefHat,
    title: "Hood & Ventilation Components",
    desc: "Hood liners, transitions, end caps, and replacement panels fabricated to match what's already in your kitchen. Repairs and retrofits included.",
  },
  {
    icon: Refrigerator,
    title: "Custom Equipment Builds",
    desc: "Specialty stations, dish drop-offs, ice bins, mobile carts, and one-off equipment built from sketches, drawings, or a walkthrough of your space.",
  },
  {
    icon: Flame,
    title: "Equipment Repair & Retrofit",
    desc: "Bring it in or send measurements. Cracked welds, broken legs, dented panels, and torn corners repaired so the inspector signs off.",
  },
]

const supportingCapabilities = [
  {
    icon: Wrench,
    title: "Stainless Welding",
    desc: "TIG welding for food-safe stainless construction. Clean welds, ground smooth, sanitary finish — built to pass health inspection.",
  },
  {
    icon: Hammer,
    title: "Sheet Metal Forming",
    desc: "Bending, forming, and seaming stainless and aluminum to match existing equipment dimensions or new specs.",
  },
]

const trustStats = [
  { value: "30+", label: "Years Fabricating", icon: Clock },
  { value: "Food-Safe", label: "Stainless Welds", icon: Target },
  { value: "Custom", label: "To Your Line", icon: Award },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
]

const industries = [
  { icon: Utensils, label: "Restaurants & Bars" },
  { icon: Coffee, label: "Cafés & Coffee Shops" },
  { icon: ChefHat, label: "Kitchen Designers" },
  { icon: Store, label: "Food Service Groups" },
  { icon: Factory, label: "Commissaries" },
  { icon: Building2, label: "Hotels & Hospitality" },
  { icon: HardHat, label: "GCs & Build-Outs" },
  { icon: Soup, label: "Catering Operators" },
]

const processSteps = [
  {
    step: "01",
    title: "Walk the Line",
    desc: "Send drawings, photos, or have us walk your kitchen. We measure what's there and what needs to fit.",
  },
  {
    step: "02",
    title: "Spec & Quote",
    desc: "Detailed quote with materials, gauge, dimensions, finish, and timeline — usually back to you within 24 hours.",
  },
  {
    step: "03",
    title: "Fabricate",
    desc: "Built in our shop in Lawrenceville. Stainless welds ground smooth, edges deburred, finish to spec.",
  },
  {
    step: "04",
    title: "Deliver & Set",
    desc: "Local delivery across metro Atlanta. We can drop it, level it, and verify fit on site.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Kitchen Fabrication",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Southern Machinist Company",
    "telephone": PHONE_DISPLAY,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS_STREET,
      "addressLocality": "Lawrenceville",
      "addressRegion": "GA",
      "postalCode": "30046",
      "addressCountry": "US",
    },
  },
  "areaServed": "Metro Atlanta",
  "description": "Custom stainless prep tables, hood components, kitchen equipment fabrication, and repairs for restaurants and food service operators.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Kitchen Fabrication",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
    })),
  },
}

export default function CommercialKitchenFabricationPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 steel-texture opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 text-sm px-4 py-1.5">
            Commercial Kitchen Fab · Metro Atlanta
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Stainless Built{" "}
            <span className="text-orange-500">For Your Line.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Custom prep tables, hood components, equipment fabrication, and repairs for metro Atlanta restaurants, kitchen designers, and food service operators. 30+ years of fabrication, in our shop in Lawrenceville, GA.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 glow-orange">
              <a href="#quote">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <a href={PHONE_HREF}>
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="relative bg-navy-800/50 border-y border-slate-700/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="font-heading text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-steel-400 mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">What We Build</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Kitchen <span className="text-orange-500">Fabrication</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-2xl mx-auto text-lg">
              Custom-built stainless that fits your space, your line, and your menu — not a catalog SKU.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 sm:p-8 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-orange-500/50 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-steel-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-slate-700/50">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-orange-400 mb-6">
              Also in the shop
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {supportingCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex gap-4 p-5 rounded-xl border border-slate-700/50 bg-slate-800/20"
                >
                  <div className="w-11 h-11 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    <cap.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white uppercase tracking-wide mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-steel-400 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Who We Serve</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Metro Atlanta <span className="text-orange-500">Food Service</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              From single-location restaurants to multi-unit groups and the people designing their kitchens.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                  <ind.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div className="font-heading text-sm font-bold text-white uppercase tracking-wide leading-tight">
                  {ind.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              From Walkthrough to <span className="text-orange-500">Working Line</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl border border-slate-700 bg-slate-800/30"
              >
                <div className="font-heading text-3xl font-black text-orange-400 mb-3">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">The Shop</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Built to <span className="text-orange-500">Pass Inspection.</span>
          </h2>
          <div className="mt-6 space-y-4 text-steel-300 leading-relaxed text-left sm:text-center">
            <p>
              When the inspector walks through, the welds need to be smooth, the edges deburred, the corners sealed. Catalog equipment cuts corners. Custom fab is what gets you signed off the first time.
            </p>
            <p>
              Three decades of metalwork, now applied to stainless food-service builds. Same craftsman, same standards. We measure twice, weld once, and grind it clean.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <a href="#quote">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300">
              <a href={PHONE_HREF}>
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section id="quote" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Get Started</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Get Your <span className="text-orange-500">Quote</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              Send us drawings, photos, or measurements — or just tell us what you need built. We respond within 24 hours.
            </p>
            <div className="mt-6">
              <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300 text-base">
                <a href={PHONE_HREF}>
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Need a Table That Actually Fits?
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            Quote within 24 hours. Local delivery across metro Atlanta.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-black text-base px-8">
              <a href="#quote">
                Start Your Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-base px-8">
              <a href={PHONE_HREF}>
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/90 text-sm">
            <MapPin className="w-4 h-4" />
            {ADDRESS_STREET}, {ADDRESS_CITY_STATE_ZIP}
          </div>
        </div>
      </section>

      <SpecialtyCrossLinks currentSlug="commercial-kitchen-fabrication" />

      <Footer />
    </main>
  )
}
