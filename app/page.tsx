import React from "react"
import Image from "next/image"
import {
  Wrench,
  Cog,
  Ruler,
  Factory,
  ShieldCheck,
  Gauge,
  Clock,
  Target,
  Award,
  Users,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  DollarSign,
  Hammer,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { QuoteCalculator } from "@/components/quote-calculator"
import { QuoteForm } from "@/components/quote-form"
import { ApplyForm } from "@/components/apply-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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

const trustStats = [
  { value: "30+", label: "Years of Experience", icon: Clock },
  { value: "±0.001\"", label: "Precision Tolerance", icon: Target },
  { value: "100%", label: "Quality Inspected", icon: Award },
  { value: "24hr", label: "Quote Turnaround", icon: Gauge },
]

const equipmentImages = [
  { src: "/shop/equipment.jpg", alt: "CNC Machine" },
  { src: "/shop/equi.jpg", alt: "Shop Floor Equipment" },
  { src: "/shop/IMG_0219.jpg", alt: "Machining in Progress" },
  { src: "/shop/IMG_0236.jpg", alt: "Precision Work" },
  { src: "/shop/IMG_0237.jpg", alt: "Manufacturing Setup" },
  { src: "/shop/IMG_0238.jpg", alt: "Quality Equipment" },
]

const portfolioImages = [
  { src: "/shop/drawing.jpg", alt: "Engineering Drawing" },
  { src: "/shop/Pops Client Product.PNG", alt: "Custom Machined Part" },
  { src: "/shop/client 2.PNG", alt: "Client Project" },
  { src: "/shop/client 3.PNG", alt: "Precision Component" },
]

const apprenticePerks = [
  { icon: GraduationCap, title: "Hands-On Training", desc: "Learn on real machines, real jobs, real deadlines — not a classroom simulation." },
  { icon: DollarSign, title: "Earn While You Learn", desc: "Paid from day one. Your skills grow, your pay grows. Simple." },
  { icon: Users, title: "Mentorship", desc: "Work directly alongside a master machinist with 30+ years of experience." },
  { icon: Wrench, title: "Full Trade Skills", desc: "CNC programming, manual machining, blueprint reading, measurement, and quality control." },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        {/* Steel texture */}
        <div className="absolute inset-0 steel-texture opacity-50" />
        {/* Orange accent glow */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 text-sm px-4 py-1.5">
            Now Hiring Apprentices
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Precision Machining.{" "}
            <span className="text-orange-500">Built to Print.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            30+ years of CNC and manual machining expertise. From blueprint to finished part — aluminum, steel, stainless, and beyond. Atlanta, GA.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-8 py-6 glow-orange">
              <a href="#quote">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <a href="#careers">
                Apply to Join Our Team
                <ChevronRight className="w-5 h-5" />
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
              Full-Service <span className="text-orange-500">Machine Shop</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              From single prototypes to production runs. If it can be machined, we can build it.
            </p>
          </div>

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

      {/* ===== ABOUT / THE CRAFTSMAN ===== */}
      <section id="about" className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
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

            {/* Story */}
            <div>
              <Badge variant="outline" className="mb-4">The Craftsman</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Built on <span className="text-orange-500">Precision</span> and Pride
              </h2>
              <div className="mt-6 space-y-4 text-steel-300 leading-relaxed">
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
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <a href="#quote">
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="text-orange-400 hover:text-orange-300">
                  <a href="#careers">
                    Join Our Team
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EQUIPMENT GALLERY ===== */}
      <section id="equipment" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Our Shop</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              The <span className="text-orange-500">Equipment</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              CNC mills, CNC lathes, manual machines, and precision measurement tools. The right equipment for every job.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {equipmentImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-lg border border-slate-700 group ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO / WORK ===== */}
      <section className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              From Blueprint to <span className="text-orange-500">Finished Part</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              Engineering drawings, precision components, and finished products — the work speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-lg border border-slate-700 group aspect-square"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-white bg-navy-900/80 px-2 py-1 rounded">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPRENTICESHIP / CAREERS ===== */}
      <section id="careers" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <Badge className="mb-4">Now Hiring</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Learn a Trade <span className="text-orange-500">That Pays</span>
              </h2>
              <p className="mt-4 text-steel-300 text-lg leading-relaxed">
                No experience needed — just a willingness to learn. Our apprenticeship program teaches you CNC machining, manual machining, blueprint reading, and quality control from a master craftsman with 30+ years in the trade.
              </p>
              <p className="mt-3 text-steel-400 leading-relaxed">
                This isn&apos;t a classroom. You&apos;ll learn by doing — real machines, real parts, real deadlines. Paid from day one. Limited spots available.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {apprenticePerks.map((perk) => (
                  <div key={perk.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                      <perk.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                        {perk.title}
                      </h4>
                      <p className="text-steel-400 text-xs leading-relaxed mt-0.5">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide mb-1">
                  Apply for the Apprenticeship
                </h3>
                <p className="text-steel-400 text-sm mb-6">
                  Takes 2 minutes. We&apos;ll review and get back to you.
                </p>
                <ApplyForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section id="quote" className="py-20 sm:py-28 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">Get Started</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Get Your <span className="text-orange-500">Quote</span>
            </h2>
            <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
              Use our instant estimator for a ballpark price, or fill out the detailed form for an exact quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Calculator */}
            <div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-orange-400" />
                Instant Estimate
              </h3>
              <QuoteCalculator />
            </div>

            {/* Detailed Form */}
            <div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-400" />
                Detailed Quote Request
              </h3>
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 sm:p-8">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
            Ready to Get Your Parts Made?
          </h2>
          <p className="mt-3 text-orange-100 text-lg">
            From blueprint to finished part. We respond to every quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-black text-base px-8">
              <a href="#quote">
                Start Your Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-base px-8">
              <a href="#careers">
                Join the Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
