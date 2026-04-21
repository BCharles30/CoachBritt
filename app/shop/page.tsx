const CHECKOUT_URL = "https://www.paypal.com/ncp/payment/YWZGHA7ZWPV58";
const COACHING_URL = "https://coachbritt.xyz/clients";

export default function CoachBrittProductPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#181818]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex flex-col">
            <div className="text-sm uppercase tracking-[0.35em] text-[#b88a2a]">Coach</div>
            <div className="text-3xl font-semibold italic tracking-wide">Britt</div>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="/#about" className="transition hover:text-[#b88a2a]">About</a>
            <a href="/#services" className="transition hover:text-[#b88a2a]">Services</a>
            <a href="/#contact" className="transition hover:text-[#b88a2a]">Contact</a>
            <a href="/clients" className="transition hover:text-[#b88a2a]">Client Portal</a>
            <a href="/shop" className="text-[#b88a2a]">The Scalable Offer Guide</a>
          </nav>
          <a
            href="https://calendly.com/coachbrittbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#b88a2a] px-5 py-2 text-sm font-medium text-[#b88a2a] transition hover:bg-[#b88a2a] hover:text-white"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">
          Coach Britt Digital Product
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          The Scalable Offer Launch Guide
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
          Build the systems. Master the mindset. Scale your business.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/60">
          Turn your idea into a structured, sellable offer with a clear launch strategy that actually converts.
        </p>
        <div className="mt-10">
          <p className="text-5xl font-semibold">$27</p>
          <a
            href={CHECKOUT_URL}
            className="mt-6 inline-block rounded-full bg-[#181818] px-10 py-4 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Included</p>
          <h2 className="mt-4 text-3xl font-semibold">What You Get</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Step-by-step offer creation framework",
              "Launch strategy + marketing plan",
              "Buyer journey breakdown",
              "Launch calendar + planning tools",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-[#faf8f4] p-5 text-sm text-black/70">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Is This You?</p>
          <h2 className="mt-4 text-3xl font-semibold">This is for you if...</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "You don't know what to sell",
              "You have ideas but no structure",
              "You're posting but not converting",
              "You want a real system to scale",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#b88a2a]/20 bg-white p-5 text-sm text-black/70">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#b88a2a]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#181818] py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-semibold">Stop guessing. Start building.</h2>
          <p className="mt-4 text-white/70">
            Get the clarity and structure your business needs.
          </p>
          <a
            href={CHECKOUT_URL}
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-sm font-medium text-[#181818] transition hover:opacity-90"
          >
            Buy the Guide &ndash; $27
          </a>
        </div>
      </section>

      {/* Upsell */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Ready for more?</p>
          <h2 className="mt-4 text-4xl font-semibold">Work Directly With Coach Britt</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
            The guide gives you the strategy. Coaching gives you the execution, accountability, and systems to actually scale.
          </p>
          <a
            href={COACHING_URL}
            className="mt-8 inline-block rounded-full bg-[#181818] px-10 py-4 text-sm font-medium text-white transition hover:opacity-90"
          >
            Work With Coach Britt
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#faf8f4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-black/60 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <span className="uppercase tracking-[0.28em] text-[#b88a2a]">Coach</span>{" "}
            <span className="text-lg font-semibold italic text-[#181818]">Britt</span>
          </div>
          <p>Build the Systems. Master the Mindset. Scale the Business.</p>
        </div>
      </footer>
    </div>
  );
}
