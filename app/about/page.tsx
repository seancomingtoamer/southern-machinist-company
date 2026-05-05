import React from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Clock,
  Target,
  Award,
  Gauge,
  ArrowRight,
  Phone,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

export const metadata: Metadata = {
  title: "About | 30+ Years of Precision Machining | Southern Machinist Company",
  description: "Built on precision and pride. Over 30 years of CNC and manual machining expertise in Lawrenceville, GA. From one-off prototypes to production runs, every job ships to spec.",
  alternates: { canonical: "/about" },
}

const trustStats = [
  { value: "30+", label: "Years of Experience", icon: Clock },
  { value: "±0.001\"", label: "Precision Tolerance", icon: Target },
  { value: "100%", label: "Quality Inspected", icon: Award },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 steel-texture opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">The Craftsman</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Built on <span className="text-orange-500">Precision</span> and Pride
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            30+ years of turning raw metal into exactly what the customer ordered.
          </p>
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

      {/* ===== STORY ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden border border-slate-700 aspect-[4/3]">
              <Image
                src="/shop/IMG_0234.jpg"
                alt="The Machine Shop"
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
              <div className="space-y-4 text-steel-300 leading-relaxed text-lg">
                <p>
                  Southern Machinist Company was built the old-fashioned way — one perfect part at a time. Over 30 years of turning raw metal into exactly what the customer ordered. No shortcuts, no excuses.
                </p>
                <p>
                  From one-off prototypes to production runs, every job gets the same attention to detail. Precision isn&apos;t a marketing word here — it&apos;s the standard. When the drawing says ±0.001&quot;, that&apos;s what ships.
                </p>
                <p>
                  Now we&apos;re passing that knowledge forward. Our apprenticeship program puts the next generation of machinists shoulder-to-shoulder with a master craftsman. No classroom theory — real machines, real parts, real skills that pay.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/#quote">
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300">
                  <Link href="/careers">
                    Join Our Team
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Got a Job? Let&apos;s Build It.
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            From blueprint to finished part. Quote within 24 hours.
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
