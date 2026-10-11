import { HONEYPOT_NAME } from "@/lib/spam"

// Invisible to people (off-screen, skipped by Tab and screen readers); bots that fill every field fill this too.
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name={HONEYPOT_NAME} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  )
}
