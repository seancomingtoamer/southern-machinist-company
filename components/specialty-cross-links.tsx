import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getSibling } from "@/lib/specialties"

interface SpecialtyCrossLinksProps {
  currentSlug: string
}

export function SpecialtyCrossLinks({ currentSlug }: SpecialtyCrossLinksProps) {
  const siblings = getSibling(currentSlug)

  return (
    <section className="py-20 sm:py-24 bg-navy-800/30 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">More From The Shop</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Other <span className="text-orange-500">Specialties</span>
          </h2>
          <p className="mt-4 text-steel-400 max-w-xl mx-auto text-lg">
            One shop, several specialties. Same craftsman, same standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {siblings.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group p-6 sm:p-8 rounded-xl border border-slate-700 bg-slate-800/30 hover:border-orange-500/50 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <s.icon className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-2">
                {s.shortTitle}
              </h3>
              <p className="text-steel-400 leading-relaxed mb-4">
                {s.blurb}
              </p>
              <span className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-orange-400 group-hover:text-orange-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
