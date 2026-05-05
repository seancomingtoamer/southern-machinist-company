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
  Hammer,
  Phone,
  MapPin,
  Disc,
  Anchor,
  Flame,
  Crosshair,
  Recycle,
  Truck,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { SpecialtyCrossLinks } from "@/components/specialty-cross-links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS_STREET, ADDRESS_CITY_STATE_ZIP } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Heavy Equipment Attachment Repair | Bushings, Lugs, Bore Welding | Lawrenceville, GA",
  description: "Bushing replacement, cylinder lug repair, bore welding, and line boring for scrap yards, demolition contractors, and equipment fleets across the Southeast. 30+ years of machining. Lawrenceville, GA.",
  keywords: ["heavy equipment repair", "bushing replacement", "cylinder lug repair", "bore welding", "line boring", "attachment repair", "excavator repair", "grapple repair", "scrap yard equipment repair", "demolition equipment repair", "Atlanta heavy equipment machine shop"],
  openGraph: {
    title: "Heavy Equipment Attachment Repair | Southern Machinist Company",
    description: "Bushings, cylinder lugs, bore welding, and line boring for the equipment that runs the Southeast.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Machinist Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Equipment Attachment Repair | Southern Machinist Company",
    description: "Bushings, lugs, bore welding, line boring. Lawrenceville, GA.",
  },
  alternates: { canonical: "/heavy-equipment-repair" },
}

const services = [
  {
    icon: Disc,
    title: "Bushing Replacement",
    desc: "Worn bushings and pins pulled, bores brought back to spec, new bushings pressed in. Excavator booms, grapples, demolition shears, loaders.",
  },
  {
    icon: Anchor,
    title: "Cylinder Lug Repair",
    desc: "Cracked or torn cylinder lugs and ear mounts cut out, rebuilt, and re-bored straight. Get your hydraulic cylinders back in service without replacing the whole unit.",
  },
  {
    icon: Flame,
    title: "Bore Welding & Machining",
    desc: "Egged-out and oversized bores welded back, then machined to factory tolerance. Pin bores, hinge bores, structural bores — any size we can fit on the table.",
  },
  {
    icon: Crosshair,
    title: "Line Boring & Alignment",
    desc: "Multi-bore housings cut on the same centerline so pins drop in clean and stay there. In-shop line boring on bucket linkages, stick assemblies, and articulated joints.",
  },
]

const supportingCapabilities = [
  {
    icon: Cog,
    title: "General Machining",
    desc: "CNC milling, CNC turning, and manual machining for custom parts, replacement components, and one-off jobs. Same shop, same standards.",
  },
  {
    icon: Hammer,
    title: "Custom Fabrication",
    desc: "Heavy plate work, mounts, brackets, and bushing housings built from scratch when off-the-shelf isn't an option.",
  },
]

const trustStats = [
  { value: "30+", label: "Years on Big Iron", icon: Clock },
  { value: "±0.001\"", label: "Bore Tolerance", icon: Target },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
  { value: "5-Day", label: "Turnaround", icon: Award },
]

const industries = [
  { icon: Recycle, label: "Scrap & Recycling Yards" },
  { icon: Hammer, label: "Demolition Contractors" },
  { icon: Wrench, label: "Grapple & Attachment Dealers" },
  { icon: Truck, label: "Excavator Fleets" },
  { icon: Cog, label: "Equipment Rental" },
  { icon: Factory, label: "Transfer Stations" },
  { icon: Disc, label: "Industrial Operators" },
]

const processSteps = [
  {
    step: "01",
    title: "Drop Off or Send Photos",
    desc: "Bring the attachment to the shop in Lawrenceville, or send photos and measurements if you can't haul it in.",
  },
  {
    step: "02",
    title: "Assess & Quote",
    desc: "We measure the damage, scope the repair, and quote the work — usually back to you within 24 hours.",
  },
  {
    step: "03",
    title: "Repair In-House",
    desc: "Bushings pressed, bores welded, lugs rebuilt, line boring done on the same bench. No subcontracting out.",
  },
  {
    step: "04",
    title: "Back to Service",
    desc: "Tolerance verified, hardware tested, and the iron goes back to work. Most jobs turn around in 5 days.",
  },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Heavy Equipment Attachment Repair",
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
  "areaServed": "Southeast United States",
  "description": "Bushing replacement, cylinder lug repair, bore welding, and line boring for heavy equipment attachments.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Heavy Equipment Attachment Repair",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
    })),
  },
}

export default function HeavyEquipmentRepairPage() {
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
            Heavy Equipment Repair · Southeast
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Bushings. Lugs. Bores.{" "}
            <span className="text-orange-500">Built Back to Spec.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Heavy equipment attachment repair for scrap yards, demolition crews, and equipment fleets across the Southeast. 30+ years of machining experience, in our shop in Lawrenceville, GA.
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
            <Badge variant="outline" className="mb-4">What We Repair</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Heavy Equipment <span className="text-orange-500">Attachment Repair</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-2xl mx-auto text-lg">
              The big jobs other shops won&apos;t take. Bushings, cylinder lugs, bore welding, and line boring — done in-house, done right.
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
              Built for the <span className="text-orange-500">Heavy Hitters</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              The crews who put real hours on their iron and need it back in service yesterday.
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
              From Worn Out to <span className="text-orange-500">Back in Service</span>
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

      {/* ===== ABOUT / THE CRAFTSMAN ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden border border-slate-700 aspect-[4/3]">
              <Image
                src="/shop/ai-craftsman-welder.jpg"
                alt="Master machinist welding a heavy equipment component at Southern Machinist Company"
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
              <Badge variant="outline" className="mb-4">The Craftsman</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Three Decades. <span className="text-orange-500">One Bench.</span> One Standard.
              </h2>
              <div className="mt-6 space-y-4 text-steel-300 leading-relaxed">
                <p>
                  Southern Machinist Company was built on the equipment that doesn&apos;t quit — excavators, grapples, demolition shears, loaders. Over 30 years of pulling worn bushings, welding up egged-out bores, and putting cylinder lugs back together so the iron goes back to work.
                </p>
                <p>
                  When a bore is out of spec, you don&apos;t need a new attachment — you need someone who can bring it back. That&apos;s the work. No shortcuts, no excuses, and the drawing&apos;s tolerance is what ships.
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
              Send us photos, measurements, or just describe the damage. Quote back within 24 hours.
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

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Got a Busted Bore? Let&apos;s Fix It.
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            Quote within 24 hours. Drop the iron at the shop in Lawrenceville, or call and we&apos;ll talk it through.
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

      <SpecialtyCrossLinks currentSlug="heavy-equipment-repair" />

      <Footer />
    </main>
  )
}
