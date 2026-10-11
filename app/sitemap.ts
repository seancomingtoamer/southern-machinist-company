import type { MetadataRoute } from "next"

const BASE = "https://southernmachinistcompany.com"
const PATHS = ["", "/services", "/about", "/careers", "/prototype-small-batch-manufacturing", "/heavy-equipment-repair",
  "/commercial-kitchen-fabrication", "/custom-gate-fabrication", "/mobile-welding-repair"]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: BASE + p, lastModified: new Date() }))
}
