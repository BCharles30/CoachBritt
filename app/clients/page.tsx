import Link from "next/link"
import ReviewSection from "@/components/review-section"

export default function ClientBookingPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#181818]">
      <header className="border-b border-black/5 bg-[#faf8f4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-[#b88a2a]">Coach</div>
              <div className="text-3xl font-semibold italic tracking-wide">Britt</div>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-black/60 transition hover:text-[#b88a2a]"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,42,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(184,138,42,0.12),transparent_28%)]" />
        
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">
            Recurring Client Portal
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Welcome Back
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/70">
            Thank you for being a valued client. Choose your session type below to book your next coaching session.
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* 1:1 60min Session */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-left shadow-sm transition hover:shadow-md">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b88a2a]">Option 1</div>
              <h3 className="mt-3 text-xl font-semibold">1:1 Coaching</h3>
              <p className="mt-2 text-sm text-black/60">60-minute session</p>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Personalized strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Accountability check-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Mindset coaching</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/60min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[#b88a2a] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book 60 Min
              </a>
            </div>

            {/* Coach Britt Method - 2 Hour */}
            <div className="rounded-[2rem] border-2 border-[#b88a2a] bg-white p-8 text-left shadow-sm transition hover:shadow-md">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b88a2a]">Option 2</div>
              <h3 className="mt-3 text-xl font-semibold">The Coach Britt Method</h3>
              <p className="mt-2 text-sm text-black/60">2-hour deep dive session</p>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Comprehensive strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Business systems review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Full transformation plan</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[#181818] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book 2 Hours
              </a>
            </div>

            {/* Power Session - 30 Min */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 text-left shadow-sm transition hover:shadow-md">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b88a2a]">Option 3</div>
              <h3 className="mt-3 text-xl font-semibold">Power Session</h3>
              <p className="mt-2 text-sm text-black/60">30-minute focused session</p>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Quick wins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Targeted problem-solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                  <span>Immediate action steps</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/coachbrittbiz/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[#b88a2a] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book 30 Min
              </a>
            </div>
          </div>

          <p className="mt-12 text-sm text-black/50">
            Need to reschedule? You can manage your booking directly through your Calendly confirmation email.
          </p>
        </div>

        <ReviewSection />
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-black/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <span className="uppercase tracking-[0.28em] text-[#b88a2a]">Coach</span>{" "}
            <span className="text-lg font-semibold italic text-[#181818]">Britt</span>
          </div>
          <p>Build the Systems. Master the Mindset. Scale the Business.</p>
        </div>
      </footer>
    </div>
  )
}
