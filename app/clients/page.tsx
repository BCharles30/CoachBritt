import Link from "next/link"

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

        {/* Google Review Section */}
        <div className="relative border-t border-black/5 bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">Share Your Experience</p>
            <h2 className="mt-4 text-3xl font-semibold">Leave a Google Review</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-black/60">
              Your feedback means the world and helps other women find the support they need. If coaching has made a difference in your business, please take a moment to share your experience.
            </p>

            {/* Star display */}
            <div className="mt-6 flex justify-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="h-7 w-7 text-[#b88a2a]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#b88a2a] px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Write a Google Review
            </a>

            <p className="mt-4 text-xs text-black/40">
              Takes less than 2 minutes — and it makes a big difference.
            </p>
          </div>
        </div>
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
