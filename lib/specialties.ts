import { Anchor, Utensils, Fence, Flame, type LucideIcon } from "lucide-react"

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
  {
    slug: "mobile-welding-repair",
    href: "/mobile-welding-repair",
    title: "Mobile Welding & Repair",
    shortTitle: "Mobile Welding",
    navLabel: "Mobile Welding",
    blurb:
      "On-site welding and metal repair across metro Atlanta. We roll the truck and trailer to your site for broken trailers, equipment, gates, and structural work.",
    icon: Flame,
  },
]

export function getSibling(currentSlug: string): Specialty[] {
  return specialties.filter((s) => s.slug !== currentSlug)
}
