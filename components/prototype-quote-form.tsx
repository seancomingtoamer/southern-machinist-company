"use client"

import React, { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { adSource, track } from "@/lib/track"
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact"

// Same webhook + field names as QuoteForm, so the existing n8n flow handles it. Extras go in drawing_notes.
const WEBHOOK_URL = "https://seanpro.app.n8n.cloud/webhook/smc-quote-request"

const projectTypes = ["Prototype (1-10 parts)", "Small batch (10-500 parts)", "Prototype, then small batch", "Not sure yet"]
const stages = ["Idea / sketch only", "Have a 3D CAD model", "Have CAD + 2D drawings", "Have a part to copy or improve"]

export function PrototypeQuoteForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const nda = formData.get("nda") === "on"
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      description: formData.get("description"),
      job_type: `Prototype / Small Batch: ${formData.get("project_type")}`,
      quantity: formData.get("quantity"),
      priority: "Normal",
      drawing_notes: [
        `Stage: ${formData.get("stage")}`,
        `Material: ${formData.get("material") || "not sure"}`,
        `Files link: ${formData.get("files_link") || "none"}`,
        `Wants NDA first: ${nda ? "YES" : "no"}`,
      ].join(" | "),
      source_page: window.location.pathname,
      ...adSource(),
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        track("generate_lead", { form: "prototype_quote", project_type: String(formData.get("project_type")), nda_requested: nda })
        setSubmitted(true)
        toast({ title: "Request Sent", description: "We'll reach out within 24 hours." })
      } else {
        throw new Error("Failed to submit")
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please try again or call us at ${PHONE_DISPLAY}.`,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-orange-400" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Got It. We&apos;re On It.</h3>
        <p className="text-steel-300 max-w-md mx-auto">
          We&apos;ll reach out within 24 hours to go over your project. Your detailed quote follows once we&apos;ve confirmed the specs, material, and finishing. If you asked for an NDA, it comes first, before you send any files.
          Need us sooner? Call <a href={PHONE_HREF} className="text-orange-400 font-bold">{PHONE_DISPLAY}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Name *</label>
          <Input name="name" placeholder="Your full name" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Email *</label>
          <Input name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Phone</label>
          <Input name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Company</label>
          <Input name="company" placeholder="Company name (optional)" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Project Type *</label>
          <Select name="project_type" required>
            <SelectTrigger>
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Where Are You At? *</label>
          <Select name="stage" required>
            <SelectTrigger>
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              {stages.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Quantity *</label>
          <Input name="quantity" placeholder="e.g. 1, then 25" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Material</label>
          <Input name="material" placeholder="Aluminum, steel, stainless, plastic, not sure" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">What Are You Building? *</label>
        <Textarea
          name="description"
          placeholder="A few lines is fine. You don't need to share anything confidential here."
          required
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">Link to Drawings or CAD</label>
        <Input name="files_link" placeholder="Optional: Google Drive / Dropbox link. Or check the NDA box and send files after." />
      </div>

      <label className="flex items-start gap-3 text-steel-300 cursor-pointer">
        <input type="checkbox" name="nda" className="mt-1 h-5 w-5 accent-orange-500" />
        <span>
          Send me an NDA before I share files. <span className="text-steel-400">(We&apos;ll also sign yours.)</span>
        </span>
      </label>

      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Get My Prototype Quote
          </>
        )}
      </Button>
    </form>
  )
}
