// GA4 event helper. gtag is loaded in app/layout.tsx (G-E3FDG2QFJQ); this is a no-op if it isn't there.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params)
  }
}

// UTM tags + Google Ads click id from the landing URL, so each quote request says where it came from.
export function adSource(): Record<string, string> {
  if (typeof window === "undefined") return {}
  const q = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"]) {
    const v = q.get(k)
    if (v) out[k] = v
  }
  return out
}
