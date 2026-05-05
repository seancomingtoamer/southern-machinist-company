"use client"

import React, { useState } from "react"
import { Calculator, ChevronRight, ChevronLeft, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

const WEBHOOK_URL = "https://seanpro.app.n8n.cloud/webhook/smc-quote-request"

type Step = 1 | 2 | 3 | 4 | 5 | 6

interface CalcState {
  material: string
  complexity: string
  quantity: string
  tolerance: string
  timeline: string
  email: string
  name: string
}

const materials = [
  { value: "Aluminum", label: "Aluminum", multiplier: 1.0, icon: "Al" },
  { value: "Steel", label: "Steel", multiplier: 1.2, icon: "Fe" },
  { value: "Stainless Steel", label: "Stainless Steel", multiplier: 1.8, icon: "SS" },
  { value: "Brass", label: "Brass", multiplier: 1.4, icon: "Cu" },
  { value: "Titanium", label: "Titanium", multiplier: 3.0, icon: "Ti" },
  { value: "Plastic", label: "Plastic / Delrin", multiplier: 0.8, icon: "PL" },
]

const complexities = [
  { value: "simple", label: "Simple", desc: "Basic shapes, few features", multiplier: 1.0 },
  { value: "moderate", label: "Moderate", desc: "Multiple features, some precision work", multiplier: 1.8 },
  { value: "complex", label: "Complex", desc: "Tight tolerances, multi-axis, intricate geometry", multiplier: 3.0 },
]

const tolerances = [
  { value: "standard", label: "Standard (±0.010\")", multiplier: 1.0 },
  { value: "precision", label: "Precision (±0.005\")", multiplier: 1.3 },
  { value: "tight", label: "Tight (±0.001\")", multiplier: 1.8 },
]

const timelines = [
  { value: "standard", label: "Standard (2-3 weeks)", multiplier: 1.0 },
  { value: "rush", label: "Rush (1 week)", multiplier: 1.5 },
  { value: "urgent", label: "Urgent (3 days)", multiplier: 2.0 },
]

function calculateEstimate(state: CalcState): { low: number; high: number; timeline: string } {
  const mat = materials.find((m) => m.value === state.material)
  const comp = complexities.find((c) => c.value === state.complexity)
  const tol = tolerances.find((t) => t.value === state.tolerance)
  const time = timelines.find((t) => t.value === state.timeline)

  const basePrice = 75 // base per-part setup
  const qty = Math.max(1, parseInt(state.quantity) || 1)

  const matMult = mat?.multiplier ?? 1
  const compMult = comp?.multiplier ?? 1
  const tolMult = tol?.multiplier ?? 1
  const timeMult = time?.multiplier ?? 1

  const perPart = basePrice * matMult * compMult * tolMult * timeMult
  const setupFee = 150 * compMult

  // Volume discount
  const volumeDiscount = qty >= 100 ? 0.7 : qty >= 50 ? 0.8 : qty >= 10 ? 0.9 : 1.0

  const totalLow = Math.round((setupFee + perPart * qty * volumeDiscount) * 0.85)
  const totalHigh = Math.round((setupFee + perPart * qty * volumeDiscount) * 1.15)

  const timelineLabel = time?.label.match(/\((.+)\)/)?.[1] ?? "2-3 weeks"

  return { low: totalLow, high: totalHigh, timeline: timelineLabel }
}

export function QuoteCalculator() {
  const [step, setStep] = useState<Step>(1)
  const [state, setState] = useState<CalcState>({
    material: "",
    complexity: "",
    quantity: "1",
    tolerance: "",
    timeline: "",
    email: "",
    name: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  const estimate = calculateEstimate(state)
  const canProceed: Record<number, boolean> = {
    1: !!state.material,
    2: !!state.complexity,
    3: !!state.quantity && parseInt(state.quantity) > 0,
    4: !!state.tolerance,
    5: !!state.timeline,
    6: !!state.email && !!state.name,
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          description: `Quote Calculator Lead - ${state.complexity} ${state.material} part, qty ${state.quantity}, ${tolerances.find(t => t.value === state.tolerance)?.label}, ${timelines.find(t => t.value === state.timeline)?.label}`,
          material: state.material,
          quantity: state.quantity,
          priority: state.timeline === "urgent" ? "Urgent" : state.timeline === "rush" ? "High" : "Normal",
          drawing_notes: `Estimated range: $${estimate.low} - $${estimate.high}. Complexity: ${state.complexity}. Tolerance: ${state.tolerance}. Timeline: ${state.timeline}.`,
          source: "calculator",
        }),
      })
      if (res.ok) {
        setSubmitted(true)
        toast({ title: "Estimate Sent!", description: "Check your email for next steps." })
      } else {
        throw new Error("fail")
      }
    } catch {
      toast({ title: "Error", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-orange-400" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Estimate Sent!</h3>
        <div className="text-3xl font-heading font-bold text-orange-400 mb-3">
          ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
        </div>
        <p className="text-steel-300 max-w-md mx-auto">
          We&apos;ll follow up with a detailed quote based on your exact specifications. Expect to hear from us within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-navy-700/50 px-6 py-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-orange-400" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
              Project Quote Estimator
            </h3>
          </div>
          <div className="text-sm text-steel-400">
            Step {step} of 6
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-500 rounded-full"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 min-h-[280px]">
        {/* Step 1: Material */}
        {step === 1 && (
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">What material do you need?</h4>
            <p className="text-steel-400 text-sm mb-5">Select the primary material for your part.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {materials.map((mat) => (
                <button
                  key={mat.value}
                  onClick={() => setState({ ...state, material: mat.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    state.material === mat.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-xs font-mono text-orange-400 mb-1">{mat.icon}</div>
                  <div className="text-sm font-semibold text-white">{mat.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Complexity */}
        {step === 2 && (
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">How complex is your part?</h4>
            <p className="text-steel-400 text-sm mb-5">This helps us estimate machining time.</p>
            <div className="grid grid-cols-1 gap-3">
              {complexities.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setState({ ...state, complexity: c.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    state.complexity === c.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-base font-semibold text-white">{c.label}</div>
                  <div className="text-sm text-steel-400 mt-0.5">{c.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Quantity */}
        {step === 3 && (
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">How many parts?</h4>
            <p className="text-steel-400 text-sm mb-5">Volume discounts kick in at 10, 50, and 100+ parts.</p>
            <div className="max-w-xs">
              <Input
                type="number"
                min="1"
                value={state.quantity}
                onChange={(e) => setState({ ...state, quantity: e.target.value })}
                className="text-2xl h-14 text-center font-bold"
                autoFocus
              />
            </div>
            <div className="flex gap-2 mt-4">
              {[1, 5, 10, 25, 50, 100].map((qty) => (
                <button
                  key={qty}
                  onClick={() => setState({ ...state, quantity: String(qty) })}
                  className={`px-3 py-1.5 rounded text-sm font-semibold transition-all ${
                    state.quantity === String(qty)
                      ? "bg-orange-500 text-white"
                      : "bg-slate-700 text-steel-300 hover:bg-slate-600"
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Tolerance */}
        {step === 4 && (
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">What tolerance do you need?</h4>
            <p className="text-steel-400 text-sm mb-5">Tighter tolerances require more precision work.</p>
            <div className="grid grid-cols-1 gap-3">
              {tolerances.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setState({ ...state, tolerance: t.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    state.tolerance === t.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-base font-semibold text-white">{t.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Timeline */}
        {step === 5 && (
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-1">When do you need it?</h4>
            <p className="text-steel-400 text-sm mb-5">Rush jobs get priority scheduling.</p>
            <div className="grid grid-cols-1 gap-3">
              {timelines.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setState({ ...state, timeline: t.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    state.timeline === t.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
                  }`}
                >
                  <div className="text-base font-semibold text-white">{t.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Capture Lead */}
        {step === 6 && (
          <div>
            <div className="text-center mb-6">
              <div className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-2">Your Estimated Range</div>
              <div className="text-4xl sm:text-5xl font-heading font-bold text-white">
                ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
              </div>
              <div className="text-steel-400 mt-2">
                Estimated delivery: {estimate.timeline}
              </div>
            </div>
            <div className="section-divider mb-6" />
            <p className="text-steel-300 text-center mb-5 text-sm">
              Want an exact quote? Drop your info and we&apos;ll get back to you within 24 hours with a detailed breakdown.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div>
                <label className="block text-sm font-semibold text-steel-200 mb-1.5">Name *</label>
                <Input
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-steel-200 mb-1.5">Email *</label>
                <Input
                  type="email"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="px-6 py-4 border-t border-slate-700 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep((step - 1) as Step)}
          disabled={step === 1}
          className="text-steel-300"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>

        {step < 6 ? (
          <Button
            onClick={() => setStep((step + 1) as Step)}
            disabled={!canProceed[step]}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed[6] || loading}
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Get My Exact Quote
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
