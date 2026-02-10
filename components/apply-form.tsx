"use client"

import React, { useState } from "react"
import { UserPlus, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const WEBHOOK_URL = "https://seanpro.app.n8n.cloud/webhook/smc-application"

const experienceLevels = [
  "No Experience",
  "Some DIY/Hobby",
  "Vocational Training",
  "Professional Experience",
]

const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Weekends",
  "Flexible",
]

export function ApplyForm() {
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
      experience_level: formData.get("experience_level"),
      availability: formData.get("availability"),
      why_interested: formData.get("why_interested"),
    }

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSubmitted(true)
        toast({ title: "Application Submitted", description: "We'll review it and be in touch soon." })
      } else {
        throw new Error("Failed to submit")
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Application Received</h3>
        <p className="text-steel-300 max-w-md mx-auto">
          Thanks for your interest in becoming a machinist. We&apos;ll review your application and reach out within a few days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Full Name *</label>
          <Input name="name" placeholder="Your full name" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Email *</label>
          <Input name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Phone *</label>
          <Input name="phone" type="tel" placeholder="(555) 123-4567" required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-steel-200 mb-1.5">Experience Level *</label>
          <Select name="experience_level" required>
            <SelectTrigger>
              <SelectValue placeholder="Your experience" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">Availability *</label>
        <Select name="availability" required>
          <SelectTrigger>
            <SelectValue placeholder="When are you available?" />
          </SelectTrigger>
          <SelectContent>
            {availabilityOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-steel-200 mb-1.5">
          Why are you interested in machining? *
        </label>
        <Textarea
          name="why_interested"
          placeholder="Tell us what draws you to the trade, what you hope to learn..."
          required
          rows={4}
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <UserPlus className="w-5 h-5" />
            Submit Application
          </>
        )}
      </Button>
    </form>
  )
}
