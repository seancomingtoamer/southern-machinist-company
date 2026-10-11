import React from "react"
import type { Metadata } from "next"
import {
  Lightbulb,
  Boxes,
  PenTool,
  Ruler,
  Layers,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { PrototypeQuoteForm } from "@/components/prototype-quote-form"
import { SpecialtyCrossLinks } from "@/components/specialty-cross-links"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS_STREET, ADDRESS_CITY_STATE_ZIP } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Prototype & Small-Batch Manufacturing | CNC Machining | Atlanta, GA",
  description: "Turn your idea, sketch, or CAD file into real machined parts. Prototypes and small production runs in aluminum, steel, stainless, and plastic. NDA before you share files. Lawrenceville, GA, serving metro Atlanta.",
  keywords: ["prototype machining", "small batch manufacturing", "prototype machine shop Atlanta", "low volume CNC machining", "product prototyping Atlanta", "custom parts for inventors", "short run production", "CNC prototype Lawrenceville GA"],
  alternates: { canonical: "https://southernmachinistcompany.com/prototype-small-batch-manufacturing" },
  openGraph: {
    title: "Prototype & Small-Batch Manufacturing | Southern Machinist Company",
    description: "From a sketch or CAD file to machined parts in your hand. NDA before you share files.",
    type: "website",
    locale: "en_US",
    siteName: "Southern Machinist Company",
  },
}

const services = [
  {
    icon: Lightbulb,
    title: "Prototype Machining",
    desc: "One to ten parts to prove your design works. CNC milling, CNC turning, and manual machining in aluminum, steel, stainless, brass, and plastics.",
  },
  {
    icon: Boxes,
    title: "Small-Batch Production",
    desc: "Once the prototype is right, we run short batches with the same setup and the same standard, part after part. Volume pricing on 10+ parts.",
  },
  {
    icon: PenTool,
    title: "CAD & Shop Drawings",
    desc: "Only have a sketch or a working mock-up? We can build the 3D model and 2D drawings so your design can be quoted and made.",
  },
  {
    icon: Ruler,
    title: "Design for Manufacturing",
    desc: "We look at your design with a machinist's eye and suggest changes that cut cost and time, before money gets spent on parts.",
  },
  {
    icon: Layers,
    title: "Finishing & Hardware",
    desc: "We coordinate anodizing, black oxide, and coatings with finishing partners, and source bearings, springs, and fasteners.",
  },
  {
    icon: Wrench,
    title: "Assembly & Test Fit",
    desc: "We put the parts together, check that everything moves and fits, and tell you what we'd change for the next round.",
  },
]

const builders = [
  "Inventors & First-Time Founders",
  "Product Designers & Engineers",
  "Startups Building a First Run",
  "Small Manufacturers Needing Overflow",
  "Replacement Parts No Longer Made",
  "Custom Tools, Jigs & Fixtures",
]

const steps = [
  { num: "01", title: "Tell Us the Idea", desc: "Fill out the form or call. Ask for our NDA and it comes first, before you send a single file." },
  { num: "02", title: "Review & Quote", desc: "We reach out within 24 hours, go over the design, and line up material and finishing. Once the details are confirmed, you get a clear, accurate quote." },
  { num: "03", title: "First Article", desc: "We make the first part or set, inspect it, and you get it in hand to test." },
  { num: "04", title: "Refine & Run", desc: "Adjust what needs adjusting, then we make your small batch, from a handful to a few hundred." },
]

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Prototype and small-batch manufacturing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Southern Machinist Company",
    "telephone": "+1-404-590-4534",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "743 Winer Industrial Way",
      "addressLocality": "Lawrenceville",
      "addressRegion": "GA",
      "postalCode": "30046",
      "addressCountry": "US",
    },
  },
  "areaServed": "Atlanta metropolitan area",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prototype & Small-Batch Services",
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.title, "description": s.desc },
    })),
  },
}

export default function PrototypeSmallBatchPage() {
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
            Prototypes · Small Batches · Atlanta
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Your Idea.{" "}
            <span className="text-orange-500">Real Parts.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            Prototype and small-batch manufacturing for inventors, startups, and engineers. From a sketch or CAD file to machined parts in your hand, with 30+ years of machining behind every one. In our shop in Lawrenceville, GA.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 glow-orange">
              <a href="#quote">
                Start My Project
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

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "NDA", label: "Before Files" },
              { value: "1-500", label: "Parts" },
              { value: "24hr", label: "First Response" },
              { value: "30+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl sm:text-4xl font-black text-orange-500">{stat.value}</div>
                <div className="mt-1 text-sm text-steel-400 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 sm:py-28 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              From Concept to <span className="text-orange-500">First Run</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-2xl mx-auto text-lg">
              Big factories won&apos;t touch a 10-part order. Overseas shops make you wait weeks and you can&apos;t walk in the door. We&apos;re a real machine shop down the road that builds your parts and talks you through it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-6 sm:p-8 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-orange-500/50 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <s.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-steel-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE BUILD FOR ===== */}
      <section className="py-20 sm:py-24 bg-navy-800/30 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Who We Build For</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Builders With <span className="text-orange-500">Something to Make</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {builders.map((b) => (
              <div
                key={b}
                className="p-5 rounded-lg border border-slate-700 bg-slate-800/40 font-heading text-lg font-bold text-white uppercase tracking-wide"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 sm:py-28 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Four Steps. <span className="text-orange-500">No Runaround.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="p-6 rounded-xl border border-slate-700 bg-slate-800/30">
                <div className="font-heading text-5xl font-black text-orange-500/80">{step.num}</div>
                <h3 className="mt-3 font-heading text-xl font-bold text-white uppercase tracking-wide">{step.title}</h3>
                <p className="mt-2 text-steel-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NDA ===== */}
      <section className="py-16 sm:py-20 bg-navy-800/30 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Your Idea <span className="text-orange-500">Stays Yours</span>
          </h2>
          <p className="mt-4 text-steel-300 text-lg leading-relaxed">
            We sign an NDA before you share files, ours or yours. We never show, reuse, or sell your design, and we don&apos;t name clients without permission.
          </p>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section id="quote" className="py-20 sm:py-28 border-t border-slate-700/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Get Started</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Start Your <span className="text-orange-500">Prototype</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              Tell us what you&apos;re building. We&apos;ll reach out within 24 hours to talk it through.
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
              <PrototypeQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Got an Idea? Let&apos;s Build It.
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            We reach out within 24 hours. Send a sketch, a CAD file, or just call and talk it through.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-black text-base px-8">
              <a href="#quote">
                Start Your Project
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

      <SpecialtyCrossLinks currentSlug="prototype-small-batch-manufacturing" />

      <Footer />
    </main>
  )
}
