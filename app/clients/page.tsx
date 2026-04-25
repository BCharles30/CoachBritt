import Link from "next/link"
import MeetingNotesRequest from "@/components/meeting-notes-request"

export default function ClientBookingPage() {
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

      <main>
        {/* Welcome Banner */}
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 p-8 shadow-2xl" style={{ background: "rgba(255,250,245,0.07)" }}>
            <h1 className="mb-3 text-3xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Welcome Back</h1>
            <p className="mb-6 max-w-2xl text-[#d8b89f]">
              Private access for current coaching clients. Book your next session, request meeting notes, or get support below.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
                Book a Session
              </a>
              <a href="https://calendly.com/coachbrittbiz/15min" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-[#f7efe7] transition hover:border-[#b88746] hover:text-[#b88746]">
                Book Legacy Session
              </a>
              <a href="https://tally.so/r/LZEXzl" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-[#f7efe7] transition hover:border-[#b88746] hover:text-[#b88746]">
                Weekly Check-In
              </a>
            </div>
          </div>
        </div>

        {/* Session Booking */}
        <div id="booking" className="mx-auto max-w-5xl px-6 pb-12 lg:px-8">
          <h2 className="mb-2 text-2xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif", borderBottom: "1px solid rgba(255,250,245,0.15)", paddingBottom: "8px" }}>Book Your Session</h2>
          <p className="mb-6 text-sm text-[#d8b89f]">Choose the session type that matches your current coaching package.</p>

          <div className="grid gap-5 md:grid-cols-3">
            {/* 1:1 60min */}
            <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.06)" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl" style={{ background: "rgba(216,184,159,0.18)" }}>📅</div>
              <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>1:1 Coaching</h3>
              <p className="mb-1 text-sm text-[#d8b89f]">60-minute session</p>
              <ul className="mb-6 mt-3 space-y-2 text-sm text-[#d8b89f]">
                <li>• Personalized strategy</li>
                <li>• Accountability check-in</li>
                <li>• Mindset coaching</li>
              </ul>
              <a href="https://calendly.com/coachbrittbiz/60min" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full bg-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-white transition hover:opacity-90">
                Book 60 Min
              </a>
            </div>

            {/* Coach Britt Method */}
            <div className="flex flex-col rounded-[1.75rem] border border-[#b88746]/60 p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(184,135,70,0.12)" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl" style={{ background: "rgba(184,135,70,0.25)" }}>⭐</div>
              <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>The Coach Britt Method</h3>
              <p className="mb-1 text-sm text-[#d8b89f]">2-hour deep dive session</p>
              <ul className="mb-6 mt-3 space-y-2 text-sm text-[#d8b89f]">
                <li>• Comprehensive strategy</li>
                <li>• Business systems review</li>
                <li>• Full transformation plan</li>
              </ul>
              <a href="https://calendly.com/coachbrittbiz/new-meeting" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full bg-[#2d1f1a] px-5 py-2.5 text-center text-sm font-bold text-[#f7efe7] transition hover:bg-[#5a3f35]">
                Book 2 Hours
              </a>
            </div>

            {/* Power Session */}
            <div className="flex flex-col rounded-[1.75rem] border border-white/10 p-7 transition hover:-translate-y-1 hover:shadow-xl" style={{ background: "rgba(255,250,245,0.06)" }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] text-2xl" style={{ background: "rgba(216,184,159,0.18)" }}>⚡</div>
              <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Power Session</h3>
              <p className="mb-1 text-sm text-[#d8b89f]">30-minute focused session</p>
              <ul className="mb-6 mt-3 space-y-2 text-sm text-[#d8b89f]">
                <li>• Quick wins</li>
                <li>• Targeted problem-solving</li>
                <li>• Immediate action steps</li>
              </ul>
              <a href="https://calendly.com/coachbrittbiz/15min" target="_blank" rel="noopener noreferrer" className="mt-auto block rounded-full bg-[#b88746] px-5 py-2.5 text-center text-sm font-bold text-white transition hover:opacity-90">
                Book 30 Min
              </a>
            </div>
          </div>

          {/* Upgrade Card */}
          <div className="mt-5 rounded-[1.75rem] border p-7" style={{ borderColor: "rgba(184,135,70,0.6)", background: "rgba(184,135,70,0.12)" }}>
            <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Upgrade Your Coaching</h3>
            <p className="mb-4 text-sm text-[#d8b89f]">Ready to move to a higher tier? Apply for a new coaching package.</p>
            <a href="https://tally.so/r/A768Vo" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Apply Now
            </a>
          </div>

          {/* Support */}
          <div className="mt-5 rounded-[1.75rem] border border-white/10 p-7" style={{ background: "rgba(255,250,245,0.06)" }}>
            <h3 className="mb-2 text-xl font-bold text-[#f7efe7]" style={{ fontFamily: "Georgia, serif" }}>Support</h3>
            <p className="mb-4 text-sm text-[#d8b89f]">Have a question between sessions? Reach out directly.</p>
            <a href="mailto:thecoachbrittmethod@gmail.com" className="inline-block rounded-full bg-[#b88746] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              Email Coach Britt
            </a>
          </div>
        </div>

        {/* Meeting Notes */}
        <MeetingNotesRequest />
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#d8b89f]">
        <p>© 2026 Coach Britt. Build the systems. Master the mindset. Scale the business.</p>
      </footer>
    </div>
  )
}
