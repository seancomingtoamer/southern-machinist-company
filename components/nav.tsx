"use client"

import React, { useState } from "react"
import { Menu, X, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Equipment", href: "#equipment" },
  { label: "Careers", href: "#careers" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
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
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="lg">
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-700/50">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-base font-semibold uppercase tracking-wider text-steel-300 hover:text-orange-400 transition-colors py-2 px-2"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2" onClick={() => setOpen(false)}>
                <a href="#quote">Get a Quote</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
