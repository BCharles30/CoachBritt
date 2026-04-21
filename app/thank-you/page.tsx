import Link from "next/link"

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1jeIGNVxH-k6whrpfniaWrjDWMoR1ugH_"

export const metadata = {
  title: "Thank You | Coach Britt",
  description: "Thank you for your purchase! Download your guide below.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-[#181818]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-black/5 bg-white px-6 py-4 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Coach <span className="text-[#b88a2a]">Britt</span>
        </Link>
        <Link href="/" className="text-sm text-black/50 transition hover:text-[#b88a2a]">
          Back to Home
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        {/* Checkmark */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#b88a2a]/10">
          <svg className="h-10 w-10 text-[#b88a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">Payment Confirmed</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Thank You for Your Purchase!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/60">
          You now have access to <strong>The Scalable Offer Launch Guide</strong>. Click the button below to download your guide and start building your scalable offer today.
        </p>

        {/* Download Button */}
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#b88a2a] px-10 py-4 text-base font-medium text-white transition hover:opacity-90"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Download Your Guide
        </a>

        <p className="mt-4 text-xs text-black/40">
          Save the link or bookmark this page for future access.
        </p>

        {/* Divider */}
        <div className="my-16 border-t border-black/5" />

        {/* What's Next */}
        <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-left shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#b88a2a]">What&apos;s Next</p>
          <h2 className="mt-3 text-2xl font-semibold">Ready to go deeper?</h2>
          <p className="mt-4 leading-relaxed text-black/60">
            The guide gives you the strategy — coaching gives you the support, accountability, and systems to scale. If you&apos;re ready to work together, book your session below.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-black/70">
            {["1:1 Coaching & Personalized Strategy", "Systems & Structure That Scale", "Accountability to Keep You Moving", "Support Every Step of the Way"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/coachbrittbiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#181818] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Book a Call
            </a>
            <Link
              href="/clients"
              className="rounded-full border border-[#b88a2a] px-7 py-3 text-sm font-medium text-[#b88a2a] transition hover:bg-[#b88a2a] hover:text-white"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/5 bg-white py-8 text-center text-sm text-black/40">
        <p>Build the Systems. Master the Mindset. Scale the Business.</p>
        <p className="mt-1">© {new Date().getFullYear()} Coach Britt. All rights reserved.</p>
      </footer>
    </div>
  )
}
