import React from "react"
import Image from "next/image"
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
  Fence,
  KeyRound,
  Hammer,
  ShieldCheck,
  Ruler,
  Building2,
  Truck,
  HardHat,
  Building,
  Home,
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
  title: "Custom Gate Fabrication & Installation | Atlanta Property Managers & Commercial Sites",
  description: "Custom gate design, fabrication, hardware, and installation for property managers, commercial property owners, restaurants, and industrial sites across metro Atlanta. 30+ years of metalwork. Lawrenceville, GA.",
  keywords: ["custom gate fabrication", "commercial gate Atlanta", "industrial gate fabrication", "gate repair Atlanta", "property management gates", "swing gate fabrication", "slide gate fabrication", "gate hardware installation", "custom metal gates Atlanta", "Lawrenceville gate fabricator"],
  openGraph: {
    title: "Custom Gate Fabrication | Southern Machinist Company",
    description: "Custom gate design, fabrication, hardware, and installation for property managers and commercial sites in metro Atlanta.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Machinist Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gate Fabrication | Southern Machinist Company",
    description: "Custom gates, repairs, hardware, and installation for metro Atlanta commercial properties.",
  },
  alternates: { canonical: "/custom-gate-fabrication" },
}

const services = [
  {
    icon: Fence,
    title: "Custom Gate Design & Build",
    desc: "Swing gates, slide gates, double gates, walk-thru gates. Designed to your opening, your security spec, and your aesthetic — built in steel, aluminum, or wrought-iron style.",
  },
  {
    icon: Hammer,
    title: "Gate Repair & Restoration",
    desc: "Cracked welds, broken hinges, sagging frames, dented panels. We bring damaged gates back to working order — usually faster and cheaper than full replacement.",
  },
  {
    icon: KeyRound,
    title: "Hardware & Operators",
    desc: "Hinges, latches, drop rods, locks, and keypad operators sourced and installed. Compatible with most automated gate systems and access controls.",
  },
  {
    icon: ShieldCheck,
    title: "Installation & Setup",
    desc: "Local install across metro Atlanta. Posts set, gates hung, hardware tuned, automation tested. We don&apos;t leave until it swings clean.",
  },
]

const supportingCapabilities = [
  {
    icon: Wrench,
    title: "Custom Metal Fabrication",
    desc: "Decorative panels, security cages, fence sections, bollards, and one-off metalwork to match the gate or stand alone.",
  },
  {
    icon: Ruler,
    title: "On-Site Measurement",
    desc: "We come measure your opening, posts, and surroundings before quoting. Saves rework and surprises on install day.",
  },
]

const trustStats = [
  { value: "30+", label: "Years of Metalwork", icon: Clock },
  { value: "Built", label: "To Last", icon: Target },
  { value: "Local", label: "Install & Repair", icon: Award },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
]

const gateTypes = [
  {
    title: "Swing Gates",
    desc: "Single or double swing for driveways, side yards, and pedestrian access.",
  },
  {
    title: "Slide Gates",
    desc: "Cantilever and rolling slide gates where space is tight or vehicles need clearance.",
  },
  {
    title: "Security Gates",
    desc: "Heavy-gauge gates with secure hardware for industrial, storage, and high-traffic sites.",
  },
  {
    title: "Decorative Gates",
    desc: "Wrought-iron style and ornamental gates for storefronts, entrances, and curb appeal.",
  },
  {
    title: "Walk-Thru Gates",
    desc: "Pedestrian gates and access points alongside main gates or as standalone entrances.",
  },
  {
    title: "Repair & Retrofit",
    desc: "Match existing gate styles, replace damaged sections, retrofit hardware on older gates.",
  },
]

const industries = [
  { icon: Building2, label: "Property Managers" },
  { icon: Building, label: "Commercial Property" },
  { icon: Store, label: "Restaurants & Retail" },
  { icon: Factory, label: "Industrial Sites" },
  { icon: Truck, label: "Logistics & Yards" },
  { icon: HardHat, label: "GCs & Builders" },
  { icon: Home, label: "Estate & Residential" },
  { icon: Cog, label: "Storage Facilities" },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Gate Fabrication and Installation",
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
  "description": "Custom gate design, fabrication, repair, hardware, and installation for property managers, commercial sites, and industrial operators.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Custom Gate Fabrication",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
    })),
  },
}

export default function CustomGateFabricationPage() {
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
            Custom Gate Fab · Metro Atlanta
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Gates Built to{" "}
            <span className="text-orange-500">Hang Straight.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Custom gate design, fabrication, hardware, and installation for property managers, commercial property owners, and industrial sites. Built to last, installed to fit. Lawrenceville, GA.
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
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Gates, Hardware, <span className="text-orange-500">Install.</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-2xl mx-auto text-lg">
              Design, build, repair, and hang. End to end, in our shop and on your property.
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

      {/* ===== GATE TYPES ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Gate Types</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Built for the <span className="text-orange-500">Opening</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              Whatever the application, we&apos;ve built one before. Or we&apos;ll build one now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gateTypes.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-xl border border-slate-700 bg-slate-800/30"
              >
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2">
                  {g.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Who We Serve</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Property &amp; <span className="text-orange-500">Commercial</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              The people responsible for keeping the gate working, year after year.
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

      {/* ===== ABOUT ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden border border-slate-700 aspect-[4/3]">
              <Image
                src="/shop/ai-craftsman-welder.jpg"
                alt="Master craftsman welding metalwork at Southern Machinist Company"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge>30+ Years</Badge>
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-4">The Shop</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Three Decades of <span className="text-orange-500">Metalwork.</span>
              </h2>
              <div className="mt-6 space-y-4 text-steel-300 leading-relaxed">
                <p>
                  A gate is a hinge problem, a frame problem, and a finish problem — all at once. Solve any one and skip the others, and it&apos;ll sag inside a year. Build it right, and it swings clean for decades.
                </p>
                <p>
                  Same craftsman who&apos;s been welding heavy iron for 30 years builds the gates. Square frames, true welds, hardware that doesn&apos;t bind. Built to last.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
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
              Send us measurements, photos, or just describe the opening — we&apos;ll come measure if needed. Quote back within 24 hours.
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
            Got a Gate Problem? Let&apos;s Solve It.
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            New build, repair, or hardware swap. Quote within 24 hours. Local install across metro Atlanta.
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

      <SpecialtyCrossLinks currentSlug="custom-gate-fabrication" />

      <Footer />
    </main>
  )
}
