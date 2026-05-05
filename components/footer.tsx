import React from "react"
import { Wrench, Phone, MapPin } from "lucide-react"
import { PHONE_DISPLAY, PHONE_HREF, ADDRESS_STREET, ADDRESS_CITY_STATE_ZIP } from "@/lib/contact"

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-orange-500 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                  Southern Machinist
                </div>
                <div className="font-heading text-xs text-orange-400 tracking-[0.2em] uppercase">
                  Company
                </div>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed">
              Precision CNC machining with 30+ years of expertise.
              From blueprint to finished part.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", href: "/#services" },
                { label: "About", href: "/#about" },
                { label: "Equipment", href: "/#equipment" },
                { label: "Get a Quote", href: "/#quote" },
                { label: "Careers", href: "/#careers" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-steel-400 hover:text-orange-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Visit / Call */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">
              Visit / Call
            </h4>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors text-sm font-semibold mb-3"
            >
              <Phone className="w-4 h-4 text-orange-400 shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <div className="flex items-start gap-2 text-steel-400 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <div>{ADDRESS_STREET}</div>
                <div>{ADDRESS_CITY_STATE_ZIP}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-600">
          <p>&copy; {new Date().getFullYear()} Southern Machinist Company. All rights reserved.</p>
          <p>Precision. Craftsmanship. Legacy.</p>
        </div>
      </div>
    </footer>
  )
}
