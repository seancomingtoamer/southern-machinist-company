import { Anchor, Utensils, Fence, type LucideIcon } from "lucide-react"

export interface Specialty {
  slug: string
  href: string
  title: string
  shortTitle: string
  navLabel: string
  blurb: string
  icon: LucideIcon
}

export const specialties: Specialty[] = [
  {
    slug: "heavy-equipment-repair",
    href: "/heavy-equipment-repair",
    title: "Heavy Equipment Attachment Repair",
    shortTitle: "Heavy Equipment Repair",
    navLabel: "Heavy Equipment",
    blurb:
      "Bushing replacement, cylinder lug repair, bore welding, and line boring for excavators, grapples, and demolition attachments.",
    icon: Anchor,
  },
  {
    slug: "commercial-kitchen-fabrication",
    href: "/commercial-kitchen-fabrication",
    title: "Commercial Kitchen Fabrication",
    shortTitle: "Kitchen Fabrication",
    navLabel: "Kitchen Fab",
    blurb:
      "Custom stainless prep tables, hood components, equipment fabrication, and repairs for metro Atlanta restaurants and food service.",
    icon: Utensils,
  },
  {
    slug: "custom-gate-fabrication",
    href: "/custom-gate-fabrication",
    title: "Custom Gate Fabrication",
    shortTitle: "Custom Gates",
    navLabel: "Custom Gates",
    blurb:
      "Custom gate design, fabrication, hardware, and installation for property managers, commercial sites, and industrial operators.",
    icon: Fence,
  },
]

export function getSibling(currentSlug: string): Specialty[] {
  return specialties.filter((s) => s.slug !== currentSlug)
}
