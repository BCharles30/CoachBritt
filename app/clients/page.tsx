"use client"

import { useState } from "react"
import Link from "next/link"
import MeetingNotesRequest from "@/components/meeting-notes-request"

const LEGACY_CLIENTS = ["ciara dickinson"]

export default function ClientPortalPage() {
  const [showNotesForm, setShowNotesForm] = useState(false)
  const [legacyFirstName, setLegacyFirstName] = useState("")
  const [legacyLastName, setLegacyLastName] = useState("")
  const [legacyVerified, setLegacyVerified] = useState(false)
  const [legacyError, setLegacyError] = useState(false)
  const [legacyFormOpen, setLegacyFormOpen] = useState(false)

  const verifyLegacyClient = () => {
    const fullName = `${legacyFirstName.trim()} ${legacyLastName.trim()}`.toLowerCase()
    if (LEGACY_CLIENTS.includes(fullName)) {
      setLegacyVerified(true)
      setLegacyError(false)
      setTimeout(() => document.getElementById("legacy-section")?.scrollIntoView({ behavior: "smooth" }), 100)
    } else {
      setLegacyError(true)
    }
  }

  return (
    <div className="min-h-screen text-[#f7efe7]" style={{ background: "#2d1f1a", fontFamily: "Arial, sans-serif" }}>
      <header className="border-b border-white/10 bg-[#2d1f1a]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/">
            <span className="text-xl font-bold tracking-wide text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Coach Britt</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#d8b89f] transition hover:text-[#b88746]">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8 space-y-8">

        {/* Welcome Banner */}
        <div className="rounded-[2rem] border border-white/10 p-8 shadow-2xl" style={{ background: "rgba(255,250,245,0.07)" }}>
          <h1 className="mb-3 text-3xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Welcome Back</h1>
          <p className="mb-6 max-w-2xl text-[#d8b89f]">
            Private access for current coaching clients. Book your next session, check in weekly, or request your session notes below.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#packages" className="rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Book a Session
            </a>
            <a
              href="https://tally.so/r/LZEXzl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-[#f7efe7] transition hover:border-[#b88746] hover:text-[#b88746]"
            >
              Weekly Check-In
            </a>
            <button
              onClick={() => {
                setShowNotesForm(true)
                setTimeout(() => document.getElementById("notes-form")?.scrollIntoView({ behavior: "smooth" }), 100)
              }}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-[#f7efe7] transition hover:border-[#b88746] hover:text-[#b88746]"
            >
              Request Session Notes
            </button>
          </div>
        </div>

        {/* Package Session Booking */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]">Current Clients</p>
          <h2 className="mb-2 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Book Your Package Session</h2>
          <p className="mb-6 text-sm text-[#d8b89f]">Select your active coaching package below to schedule your next session.</p>
          <div className="grid gap-5 md:grid-cols-3">

            {/* Foundation */}
            <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.06)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]">Foundation</p>
              <h3 className="mb-1 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>$197<span className="text-base font-normal text-[#d8b89f]">/mo</span></h3>
              <ul className="mb-6 mt-4 space-y-2 text-sm text-[#d8b89f]">
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> 2x Monthly 1:1 Coaching</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Email Support</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Business Systems Review</li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-full border border-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-[#b88746] transition hover:bg-[#b88746] hover:text-[#1a0f0a]"
              >
                Book Foundation Session
              </a>
            </div>

            {/* Growth */}
            <div className="flex flex-col rounded-[1.75rem] border-2 border-[#b88746] p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(184,135,70,0.12)" }}>
              <div className="mb-2 inline-block self-start rounded-full bg-[#b88746] px-3 py-1 text-xs font-bold text-[#1a0f0a]">Most Popular</div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]">Growth</p>
              <h3 className="mb-1 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>$297<span className="text-base font-normal text-[#d8b89f]">/mo</span></h3>
              <ul className="mb-6 mt-4 space-y-2 text-sm text-[#d8b89f]">
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> 4x Monthly 1:1 Coaching</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Priority Voxer Access</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Launch Strategy Support</li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/growth"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-full bg-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-[#1a0f0a] transition hover:opacity-90"
              >
                Book Growth Session
              </a>
            </div>

            {/* Scale */}
            <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.06)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]">Scale</p>
              <h3 className="mb-1 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>$497<span className="text-base font-normal text-[#d8b89f]">/mo</span></h3>
              <ul className="mb-6 mt-4 space-y-2 text-sm text-[#d8b89f]">
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Weekly 1:1 Coaching</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> Full Business Audit</li>
                <li className="flex items-center gap-2"><span className="text-[#b88746]">&#10003;</span> VIP Voxer + Email Access</li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/scale"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block rounded-full border border-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-[#b88746] transition hover:bg-[#b88746] hover:text-[#1a0f0a]"
              >
                Book Scale Session
              </a>
            </div>

          </div>
        </div>

        {/* Legacy Clients Only — gated by name verification */}
        <div className="rounded-[2rem] border border-[#b88746]/40 p-8" style={{ background: "rgba(184,135,70,0.08)" }}>
          {/* Gate Header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="mb-1 inline-block rounded-full border border-[#b88746]/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#b88746]">
                Legacy Clients Only
              </div>
              <h2 className="mt-2 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Legacy Client Access</h2>
              <p className="mt-1 text-sm text-[#d8b89f]">This section is reserved for legacy coaching clients. Please verify your identity to continue.</p>
            </div>
          </div>

          {/* Verification Form */}
          {!legacyVerified && (
            <div>
              {!legacyFormOpen ? (
                <button
                  onClick={() => setLegacyFormOpen(true)}
                  className="rounded-full border border-[#b88746] px-6 py-3 text-sm font-bold text-[#b88746] transition hover:bg-[#b88746] hover:text-[#1a0f0a]"
                >
                  I am a Legacy Client
                </button>
              ) : (
                <div className="max-w-sm space-y-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={legacyFirstName}
                    onChange={(e) => setLegacyFirstName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#f7efe7] placeholder-[#a08060] outline-none focus:border-[#b88746]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={legacyLastName}
                    onChange={(e) => setLegacyLastName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-[#f7efe7] placeholder-[#a08060] outline-none focus:border-[#b88746]"
                    onKeyDown={(e) => e.key === "Enter" && verifyLegacyClient()}
                  />
                  {legacyError && (
                    <p className="text-sm text-red-400">Name not found. Please check your spelling or contact Coach Britt.</p>
                  )}
                  <button
                    onClick={verifyLegacyClient}
                    className="rounded-full bg-[#b88746] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Verify Access
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Legacy Content — only shown after verification */}
          {legacyVerified && (
          <div id="legacy-section" className="mt-6">
            <h3 className="mb-1 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Tier Business Review</h3>
            <p className="mb-5 text-sm text-[#d8b89f]">An exclusive deep-dive review of your business tier, progress, and next level strategy.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 p-5" style={{ background: "rgba(255,250,245,0.05)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#b88746]">Phase 1</p>
              <p className="font-semibold text-[#f7efe7]">Business Audit</p>
              <p className="mt-1 text-sm text-[#d8b89f]">Full review of your systems, offers, and revenue structure.</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 p-5" style={{ background: "rgba(255,250,245,0.05)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#b88746]">Phase 2</p>
              <p className="font-semibold text-[#f7efe7]">Growth Strategy</p>
              <p className="mt-1 text-sm text-[#d8b89f]">Customized roadmap for scaling to your next income tier.</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 p-5" style={{ background: "rgba(255,250,245,0.05)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#b88746]">Phase 3</p>
              <p className="font-semibold text-[#f7efe7]">Execution Plan</p>
              <p className="mt-1 text-sm text-[#d8b89f]">Step-by-step action items and accountability framework.</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://calendly.com/coachbrittbiz/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#b88746] px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              Book Your Tier Review
            </a>
          </div>

          {/* Book Your Session — Legacy Only */}
          <div className="mt-10 border-t border-white/10 pt-8" id="booking">
            <h3 className="mb-1 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Book Your Session</h3>
            <p className="mb-6 text-sm text-[#d8b89f]">Choose the session type that matches your coaching arrangement.</p>
            <div className="grid gap-5 md:grid-cols-3">

              {/* 1:1 60min */}
              <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.05)" }}>
                <h4 className="mb-1 text-lg font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>1:1 Coaching</h4>
                <p className="mb-4 text-sm text-[#d8b89f]">60-minute session</p>
                <ul className="mb-6 space-y-1.5 text-sm text-[#d8b89f]">
                  <li>• Personalized strategy</li>
                  <li>• Accountability check-in</li>
                  <li>• Mindset coaching</li>
                </ul>
                <a href="https://calendly.com/coachbrittbiz/60min" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full bg-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-white transition hover:opacity-90">
                  Book 60 Min
                </a>
              </div>

              {/* Coach Britt Method */}
              <div className="flex flex-col rounded-[1.75rem] border border-[#b88746]/50 p-6 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(184,135,70,0.1)" }}>
                <h4 className="mb-1 text-lg font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>The Coach Britt Method</h4>
                <p className="mb-4 text-sm text-[#d8b89f]">2-hour deep dive</p>
                <ul className="mb-6 space-y-1.5 text-sm text-[#d8b89f]">
                  <li>• Comprehensive strategy</li>
                  <li>• Business systems review</li>
                  <li>• Full transformation plan</li>
                </ul>
                <a href="https://calendly.com/coachbrittbiz/new-meeting" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full border border-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-[#b88746] transition hover:bg-[#b88746] hover:text-[#1a0f0a]">
                  Book 2 Hours
                </a>
              </div>

              {/* Power Session */}
              <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.05)" }}>
                <h4 className="mb-1 text-lg font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Power Session</h4>
                <p className="mb-4 text-sm text-[#d8b89f]">30-minute focused session</p>
                <ul className="mb-6 space-y-1.5 text-sm text-[#d8b89f]">
                  <li>• Quick wins</li>
                  <li>• Targeted problem-solving</li>
                  <li>• Immediate action steps</li>
                </ul>
                <a href="https://calendly.com/coachbrittbiz/15min" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full bg-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-white transition hover:opacity-90">
                  Book 30 Min
                </a>
              </div>

            </div>
          </div>
          </div>
          )}
        </div>

        {/* Upgrade & Support */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[#b88746]/60 p-7" style={{ background: "rgba(184,135,70,0.12)" }}>
            <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Upgrade Your Coaching</h3>
            <p className="mb-4 text-sm text-[#d8b89f]">Ready to move to a higher tier? Apply for a new coaching package.</p>
            <a href="https://tally.so/r/A768Vo" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Apply Now
            </a>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 p-7" style={{ background: "rgba(255,250,245,0.06)" }}>
            <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Support</h3>
            <p className="mb-4 text-sm text-[#d8b89f]">Have a question between sessions? Reach out directly.</p>
            <a href="mailto:thecoachbrittmethod@gmail.com" className="inline-block rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Email Coach Britt
            </a>
          </div>
        </div>

        {/* Session Notes Form — revealed when button clicked */}
        {showNotesForm && (
          <div id="notes-form">
            <MeetingNotesRequest />
          </div>
        )}

      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#d8b89f]">
        <p>© 2026 Coach Britt. Build the systems. Master the mindset. Scale the business.</p>
      </footer>
    </div>
  )
}
