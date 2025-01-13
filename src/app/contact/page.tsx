import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <main>
      <div style={{ minHeight: "140vh" }}>
        <h1>Contact</h1>
      </div>

      <div id="form" style={{ background: "red", padding: "1rem" }}>
        my form
      </div>
    </main>
  )
}
