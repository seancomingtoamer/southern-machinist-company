import React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Wrench,
  Cog,
  Factory,
  ShieldCheck,
  Gauge,
  ArrowRight,
  Hammer,
  Phone,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Services | CNC Milling, Turning, Manual Machining & More | Southern Machinist Company",
  description: "Full-service machine shop in Lawrenceville, GA. CNC milling, CNC turning, manual machining, prototypes, production runs, and quality inspection. 30+ years of expertise.",
  alternates: { canonical: "/services" },
}

const services = [
  {
    icon: Cog,
    title: "CNC Milling",
    desc: "3-axis and multi-axis milling for complex geometries. Aluminum, steel, stainless, brass, and exotic alloys.",
  },
  {
    icon: Wrench,
    title: "CNC Turning",
    desc: "Precision lathe work for shafts, fittings, bushings, and round parts. Tight tolerances, consistent results.",
  },
  {
    icon: Hammer,
    title: "Manual Machining",
    desc: "Old-school craftsmanship for one-offs, repairs, and jobs that need a machinist's touch — not just a program.",
  },
  {
    icon: Factory,
    title: "Prototypes",
    desc: "From concept to first article fast. We work from your drawings, CAD files, or even a sketch on a napkin.",
  },
  {
    icon: Gauge,
    title: "Production Runs",
    desc: "Short and medium production runs with consistent quality. Volume pricing on 10+ parts.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    desc: "Every part measured and verified before it ships. Precision to ±0.001\" when you need it.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 steel-texture opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">What We Do</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Full-Service <span className="text-orange-500">Machine Shop</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            From single prototypes to production runs. If it can be machined, we can build it.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-orange-500/50 hover:bg-slate-800/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Ready to Get Your Parts Made?
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            We respond to every quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-black text-base px-8">
              <Link href="/#quote">
                Start Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-base px-8">
              <a href={PHONE_HREF}>
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
