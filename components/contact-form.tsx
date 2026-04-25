"use client"
import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", businessStage: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", businessStage: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]"
        placeholder="Your Name"
      />
      <input
        required
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]"
        placeholder="Email Address"
      />
      <input
        value={form.businessStage}
        onChange={(e) => setForm({ ...form, businessStage: e.target.value })}
        className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]"
        placeholder="Business Stage"
      />
      <textarea
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="min-h-[140px] rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]"
        placeholder="Tell me about your goals"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[#181818] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit Inquiry"}
      </button>
      {status === "success" && (
        <p className="text-center text-sm font-medium text-green-600">Message sent! I will be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-medium text-red-500">Something went wrong. Please try again or email me directly at thecoachbrittmethod@gmail.com</p>
      )}
    </form>
  )
}
