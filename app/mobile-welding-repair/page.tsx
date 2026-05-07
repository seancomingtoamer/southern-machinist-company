import React from "react"
import type { Metadata } from "next"
import {
  Truck,
  Flame,
  Hammer,
  Wrench,
  Cog,
  Factory,
  Gauge,
  Clock,
  Award,
  ArrowRight,
  Phone,
  MapPin,
  Building2,
  HardHat,
  Tractor,
  Building,
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
  title: "Mobile Welding & Repair | On-Site Welder | Metro Atlanta",
  description: "Mobile welding repair across metro Atlanta. We roll the truck and trailer to your site for broken trailers, equipment, gates, and structural work. 30+ years experience. Based in Lawrenceville, GA.",
  keywords: ["mobile welding atlanta", "mobile welder near me", "on-site welding repair", "trailer welding repair", "structural welding atlanta", "master welder atlanta", "welding repair metro atlanta", "Lawrenceville welder", "on-site welder", "mobile MIG TIG welder"],
  openGraph: {
    title: "Mobile Welding & Repair | Southern Machinist Company",
    description: "On-site welding repair for trailers, equipment, gates, and structural work across metro Atlanta.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Machinist Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Welding & Repair | Southern Machinist Company",
    description: "On-site welding across metro Atlanta. Trailers, equipment, gates, structural.",
  },
  alternates: { canonical: "/mobile-welding-repair" },
}

const services = [
  {
    icon: Truck,
    title: "On-Site Welding Repair",
    desc: "We roll the truck and trailer to your site. Broken metal that can't be hauled in gets welded right where it sits — driveway, jobsite, yard, farm, or fleet lot.",
  },
  {
    icon: Flame,
    title: "Trailer & Equipment Welding",
    desc: "Cracked frames, broken hitches, snapped mounts, busted gates on trailers and loaders. Hot shot rigs, livestock, RV, dump trailers, equipment haulers — back on the road same week.",
  },
  {
    icon: Hammer,
    title: "Structural Welding",
    desc: "Heavy plate work, beams, brackets, stair stringers, railings, and structural repairs. Built to hold load, ground smooth, and pass inspection.",
  },
  {
    icon: Wrench,
    title: "MIG · TIG · Stick",
    desc: "All standard processes across steel, stainless, aluminum, and cast iron. We bring the right rod and the right rig for the metal in front of us.",
  },
]

const supportingCapabilities = [
  {
    icon: Cog,
    title: "In-Shop Welding & Fab",
    desc: "If it's easier to bring it to us, the shop in Lawrenceville handles bench welding, plate fabrication, and detailed work that needs a controlled environment.",
  },
  {
    icon: Factory,
    title: "Custom Fabrication",
    desc: "Brackets, mounts, plates, and one-off metalwork built to spec on-site or in-shop. Built once, built right.",
  },
]

const trustStats = [
  { value: "30+", label: "Years Welding", icon: Clock },
  { value: "Mobile", label: "Metro Atlanta", icon: Truck },
  { value: "Same-Week", label: "Most Calls", icon: Award },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
]

const industries = [
  { icon: HardHat, label: "GCs & Contractors" },
  { icon: Truck, label: "Trailer Owners & Haulers" },
  { icon: Tractor, label: "Farms & Ag Operations" },
  { icon: Cog, label: "Equipment Fleets" },
  { icon: Building2, label: "Property Managers" },
  { icon: Factory, label: "Industrial Sites" },
  { icon: Building, label: "Commercial Properties" },
  { icon: Store, label: "Restaurants & Retail" },
]

const processSteps = [
  {
    step: "01",
    title: "Call or Send Photos",
    desc: "Tell us what broke and where it is. Photos and a rough location is usually enough for a ballpark.",
  },
  {
    step: "02",
    title: "Quote & Schedule",
    desc: "Quote back within 24 hours with travel + welding time. Most jobs scheduled within the week.",
  },
  {
    step: "03",
    title: "We Roll Out",
    desc: "Truck and trailer arrive with the right rigs, rods, and gas. We work where the iron is.",
  },
  {
    step: "04",
    title: "Welded On-Site",
    desc: "Welds ground clean, work tested where applicable, and you're back in service before we leave.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile Welding and Metal Repair",
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
  "description": "On-site mobile welding and metal repair for trailers, equipment, structural work, gates, and fabrication across metro Atlanta.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mobile Welding & Repair",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
    })),
  },
}

export default function MobileWeldingRepairPage() {
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
            Mobile Welding · Metro Atlanta
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Field Welding.{" "}
            <span className="text-orange-500">Shop Standards.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            On-site welding and metal repair for broken trailers, equipment, gates, and structural work across metro Atlanta. 30+ years of welding experience, rolling out of Lawrenceville, GA.
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
            <Badge variant="outline" className="mb-4">What We Weld</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Welding That <span className="text-orange-500">Comes to You</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-2xl mx-auto text-lg">
              Broken metal that can&apos;t — or shouldn&apos;t — be hauled. We bring the rig to the work.
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
              Anyone With <span className="text-orange-500">Broken Iron</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              If it&apos;s metal and it broke, we&apos;ve probably welded it back. From trailer hitches to structural beams.
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
              From Call to <span className="text-orange-500">Welded</span>
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
          <Badge variant="outline" className="mb-4">The Welder</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            Master Welder. <span className="text-orange-500">Mobile Rig.</span>
          </h2>
          <div className="mt-6 space-y-4 text-steel-300 leading-relaxed text-left sm:text-center">
            <p>
              Three decades of welding everything from trailer frames to structural steel to cast iron repairs. The truck and trailer mean the work doesn&apos;t have to leave your property — saving you tow bills, shop drop-off time, and downtime on equipment that needs to keep working.
            </p>
            <p>
              Same craftsman who runs the shop in Lawrenceville. Same standards on the road as on the bench. Welds clean, welds strong, welds once.
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
              Send photos, location, and a quick description of what broke. Quote back within 24 hours.
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
            Got Broken Metal? We&apos;ll Come to You.
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            Quote within 24 hours. Mobile across metro Atlanta from Lawrenceville.
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

      <SpecialtyCrossLinks currentSlug="mobile-welding-repair" />

      <Footer />
    </main>
  )
}
