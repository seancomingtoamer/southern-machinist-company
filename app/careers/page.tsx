import React from "react"
import type { Metadata } from "next"
import {
  Wrench,
  Users,
  GraduationCap,
  DollarSign,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ApplyForm } from "@/components/apply-form"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Careers | Machinist Apprenticeship | Southern Machinist Company",
  description: "Now hiring apprentices. Learn CNC machining, manual machining, blueprint reading, and quality control from a master craftsman with 30+ years in the trade. Paid from day one. Lawrenceville, GA.",
  alternates: { canonical: "/careers" },
}

const apprenticePerks = [
  { icon: GraduationCap, title: "Hands-On Training", desc: "Learn on real machines, real jobs, real deadlines — not a classroom simulation." },
  { icon: DollarSign, title: "Earn While You Learn", desc: "Paid from day one. Your skills grow, your pay grows. Simple." },
  { icon: Users, title: "Mentorship", desc: "Work directly alongside a master machinist with 30+ years of experience." },
  { icon: Wrench, title: "Full Trade Skills", desc: "CNC programming, manual machining, blueprint reading, measurement, and quality control." },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 steel-texture opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Now Hiring</Badge>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tight">
            Learn a Trade <span className="text-orange-500">That Pays</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed">
            No experience needed — just a willingness to learn. Paid from day one. Limited spots.
          </p>
        </div>
      </section>

      {/* ===== APPRENTICESHIP ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-steel-300 text-lg leading-relaxed">
                Our apprenticeship program teaches you CNC machining, manual machining, blueprint reading, and quality control from a master craftsman with 30+ years in the trade.
              </p>
              <p className="mt-3 text-steel-400 leading-relaxed">
                This isn&apos;t a classroom. You&apos;ll learn by doing — real machines, real parts, real deadlines.
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

      <Footer />
    </main>
  )
}
