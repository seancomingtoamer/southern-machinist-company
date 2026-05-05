"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, Wrench, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { specialties } from "@/lib/specialties"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-orange-500 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-lg font-bold text-white leading-tight tracking-wide uppercase">
                Southern Machinist
              </div>
              <div className="font-heading text-xs text-orange-400 tracking-[0.2em] uppercase">
                Company
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {specialties.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="font-heading text-sm font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors"
              >
                {s.navLabel}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Button asChild size="lg">
              <Link href="/#quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile: phone + menu */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="w-10 h-10 rounded bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center text-orange-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              className="text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-slate-700/50">
            <div className="flex flex-col gap-1 pt-4">
              <div className="px-2 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Specialties
              </div>
              {specialties.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-base font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors py-2 px-2"
                >
                  {s.navLabel}
                </Link>
              ))}
              <div className="h-px bg-slate-700/50 my-2" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-base font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors py-2 px-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PHONE_HREF}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-heading text-base font-bold uppercase tracking-wider text-orange-400 py-2 px-2"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <Button asChild className="mt-2" onClick={() => setOpen(false)}>
                <Link href="/#quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
