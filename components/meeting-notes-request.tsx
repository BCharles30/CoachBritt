"use client"

import { useState } from "react"

export default function MeetingNotesRequest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    session_date: "",
    session_type: "",
    notes: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/meeting-notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
      } else {
        setStatus("success")
        setForm({ name: "", email: "", session_date: "", session_type: "", notes: "" })
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section className="border-t border-black/5 bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">Client Services</p>
          <h2 className="mt-4 text-3xl font-semibold">Request Meeting Notes</h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-black/60">
            Need a recap of your session? Fill out the form below and your meeting notes will be sent to your email.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-10 rounded-[2rem] border border-[#b88a2a]/30 bg-[#faf8f4] p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#b88a2a]/10">
              <svg className="h-7 w-7 text-[#b88a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Request Submitted!</h3>
            <p className="mt-2 text-black/60">Your meeting notes request has been received. Coach Britt will send your notes to your email shortly.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-[#b88a2a] px-6 py-2 text-sm font-medium text-[#b88a2a] transition hover:bg-[#b88a2a] hover:text-white"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 rounded-[2rem] border border-black/5 bg-[#faf8f4] p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black/70">
                  Full Name <span className="text-[#b88a2a]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black/70">
                  Email Address <span className="text-[#b88a2a]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                />
              </div>

              <div>
                <label htmlFor="session_date" className="block text-sm font-medium text-black/70">
                  Session Date <span className="text-[#b88a2a]">*</span>
                </label>
                <input
                  id="session_date"
                  name="session_date"
                  type="date"
                  required
                  value={form.session_date}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                />
              </div>

              <div>
                <label htmlFor="session_type" className="block text-sm font-medium text-black/70">
                  Session Type <span className="text-[#b88a2a]">*</span>
                </label>
                <select
                  id="session_type"
                  name="session_type"
                  required
                  value={form.session_type}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                >
                  <option value="">Select session type</option>
                  <option value="1:1 Coaching (60 min)">1:1 Coaching (60 min)</option>
                  <option value="The Coach Britt Method (2 hr)">The Coach Britt Method (2 hr)</option>
                  <option value="Power Session (30 min)">Power Session (30 min)</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="notes" className="block text-sm font-medium text-black/70">
                Anything specific you would like included?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                placeholder="e.g. action items, specific topics discussed, goals set..."
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-500">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-[#b88a2a] py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
