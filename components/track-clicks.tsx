"use client"

import { useEffect } from "react"
import { track } from "@/lib/track"

// Mount once in app/layout.tsx. Sends "phone_click" / "email_click" to GA4 for every tel: / mailto: link
// on every page, so we don't have to edit each link.
export default function TrackClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest("a")
      const href = a?.getAttribute("href") || ""
      if (href.startsWith("tel:")) track("phone_click", { page_path: location.pathname })
      else if (href.startsWith("mailto:")) track("email_click", { page_path: location.pathname })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])
  return null
}
