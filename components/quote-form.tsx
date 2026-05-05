"use client"

import React, { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const WEBHOOK_URL = "https://seanpro.app.n8n.cloud/webhook/smc-quote-request"

const jobTypes = [
  "Bushing Replacement",
  "Cylinder Lug Repair",
  "Bore Welding & Machining",
  "Line Boring & Alignment",
  "General Machining",
  "Custom Fabrication",
  "Other",
]

const priorities = ["Low", "Normal", "High", "Urgent"]

interface QuoteFormProps {
  calculatorData?: {
    jobType: string
    complexity: string
    quantity: string
    tolerance: string
    timeline: string
    estimatedRange: string
  }
}

export function QuoteForm({ calculatorData }: QuoteFormProps) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      description: formData.get("description"),
      job_type: formData.get("job_type"),
      quantity: formData.get("quantity"),
      priority: formData.get("priority"),
      drawing_notes: formData.get("drawing_notes"),
      ...(calculatorData && {
        calculator_complexity: calculatorData.complexity,
        calculator_tolerance: calculatorData.tolerance,
        calculator_timeline: calculatorData.timeline,
        calculator_estimate: calculatorData.estimatedRange,
      }),
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        toast({ title: "Quote Request Sent", description: "We'll get back to you within 24 hours." })
      } else {
        throw new Error("Failed to submit")
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
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
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Quote Request Received</h3>
        <p className="text-steel-300 max-w-md mx-auto">
          We&apos;ve got your request. Our team will review your specs and get back to you within 24 hours with a detailed quote.
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
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">Job Description *</label>
        <Textarea
          name="description"
          placeholder="What needs work? Equipment make/model, attachment type, what failed, bore sizes if you have them..."
          required
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Job Type *</label>
          <Select name="job_type" required defaultValue={calculatorData?.jobType}>
            <SelectTrigger>
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((j) => (
                <SelectItem key={j} value={j}>{j}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Quantity *</label>
          <Input
            name="quantity"
            type="number"
            min="1"
            placeholder="How many components?"
            required
            defaultValue={calculatorData?.quantity}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Priority</label>
          <Select name="priority" defaultValue="Normal">
            <SelectTrigger>
              <SelectValue placeholder="Priority level" />
            </SelectTrigger>
            <SelectContent>
              {priorities.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">Specs / Notes</label>
        <Textarea
          name="drawing_notes"
          placeholder="Bore diameter, bushing OD/ID, tolerances, material, surface finish, certifications needed..."
          rows={3}
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Quote Request
          </>
        )}
      </Button>
    </form>
  )
}
