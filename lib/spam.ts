// Cheap bot filter for forms that post straight to n8n. Spam gets a fake "success" screen so bots don't retry.
// Pattern seen across the empire sites (Oct 2026): every field filled, free text that is only digits
// ("5791163249") or one random mixed-case word ("VepGKnbkNtWcJWHxYoil"), submitted within seconds.
export const HONEYPOT_NAME = "website"
const MIN_FILL_MS = 3000

export function looksLikeSpam(opts: { honeypot?: FormDataEntryValue | null; startedAt: number; freeText: unknown[] }) {
  if (opts.honeypot && String(opts.honeypot).trim()) return true
  if (Date.now() - opts.startedAt < MIN_FILL_MS) return true
  return opts.freeText.some((v) => {
    const s = String(v ?? "").trim()
    return /^\d{6,}$/.test(s) || (/^[A-Za-z]{12,}$/.test(s) && /[a-z][A-Z]/.test(s))
  })
}
