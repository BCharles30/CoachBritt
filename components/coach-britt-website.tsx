export default function CoachBrittWebsite() {
  const profileImage = "/images/coach-britt-profile.png";

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#181818]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-[#b88a2a]">Coach</div>
            <div className="text-3xl font-semibold italic tracking-wide">Britt</div>
          </div>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-[#b88a2a]">About</a>
            <a href="#services" className="transition hover:text-[#b88a2a]">Services</a>
            <a href="#contact" className="transition hover:text-[#b88a2a]">Contact</a>
            <a href="/clients" className="transition hover:text-[#b88a2a]">Client Portal</a>
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

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,138,42,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(184,138,42,0.12),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">
                Business Coaching for Women
              </p>
              <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-6xl">
                Build the Systems. Master the Mindset. Scale the Business.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
                Coach Britt helps women move from overwhelmed and inconsistent to structured,
                confident, and ready to grow with clear systems, intentional strategy, and a mindset built for success.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/coachbrittbiz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#181818] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Work With Me
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-[#181818]/15 px-7 py-3 text-sm font-medium transition hover:border-[#b88a2a] hover:text-[#b88a2a]"
                >
                  Explore Services
                </a>
                <a
                  href="/clients"
                  className="rounded-full border border-[#b88a2a] px-7 py-3 text-sm font-medium text-[#b88a2a] transition hover:bg-[#b88a2a] hover:text-white"
                >
                  Existing Clients
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#b88a2a]/10 blur-2xl" />
                <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-[#b88a2a]/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#b88a2a]/20 bg-white p-3 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                  <img src={profileImage} alt="Coach Britt at work" className="h-[520px] w-full rounded-[1.5rem] object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">About Coach Britt</p>
              <h2 className="mt-4 text-4xl font-semibold">Support for women who are ready to build with intention.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                Whether you are just starting out or trying to grow what you have already built, you do not need more chaos.
                You need structure, clarity, and confidence. Coach Britt combines practical business systems with mindset coaching
                to help women create businesses that feel aligned, sustainable, and scalable.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-3xl">01</div>
                <h3 className="mt-4 text-xl font-semibold">Build Systems</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  Create workflows, routines, and structure that support real business growth.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-3xl">02</div>
                <h3 className="mt-4 text-xl font-semibold">Master Mindset</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  Shift from self-doubt and inconsistency into confidence and purposeful action.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:col-span-2">
                <div className="text-3xl">03</div>
                <h3 className="mt-4 text-xl font-semibold">Scale the Business</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  Move toward growth with a strong foundation, better decisions, and a plan that fits your vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Ways to Work Together</p>
              <h2 className="mt-4 text-4xl font-semibold">Coaching designed to help you move forward with clarity.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border border-black/5 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold">1:1 Coaching</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">
                  Personalized support for women who want strategy, accountability, and a clear path to growth.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-black/75">
                  <li>• Business clarity and goal mapping</li>
                  <li>• Systems and workflow development</li>
                  <li>• Mindset and confidence coaching</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-[#b88a2a]/20 bg-[#faf8f4] p-8 shadow-sm">
                <div className="inline-flex rounded-full bg-[#b88a2a] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  Signature Offer
                </div>
                <h3 className="mt-5 text-2xl font-semibold">The Coach Britt Method</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">
                  A transformational framework to help you organize your business, strengthen your mindset, and build for scale.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-black/75">
                  <li>• Systems audit and action plan</li>
                  <li>• Mindset reset and growth routines</li>
                  <li>• Scalable strategy implementation</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-black/5 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold">Power Sessions</h3>
                <p className="mt-4 text-sm leading-7 text-black/65">
                  Intensive strategy sessions for women who need clarity fast and want practical next steps.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-black/75">
                  <li>• Focused problem solving</li>
                  <li>• Growth planning</li>
                  <li>• Immediate action roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Who This Is For</p>
            <h2 className="mt-4 text-4xl font-semibold">For the woman who is called to more and ready to build with excellence.</h2>
            <p className="mt-6 text-lg leading-8 text-black/70">
              You have the vision. Now it is time to create the structure, discipline, and belief to carry it forward.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 rounded-[2rem] bg-[#faf8f4] p-8 ring-1 ring-black/5 lg:grid-cols-[1fr_1fr] lg:p-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b88a2a]">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold">Ready to work with Coach Britt?</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-black/70">
                Start the conversation and take the next step toward building a business with stronger systems, a resilient mindset, and room to scale.
              </p>
            </div>
            <form className="grid gap-4">
              <input className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]" placeholder="Your Name" />
              <input className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]" placeholder="Email Address" />
              <input className="rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]" placeholder="Business Stage" />
              <textarea className="min-h-[140px] rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#b88a2a]" placeholder="Tell me about your goals" />
              <button className="rounded-full bg-[#181818] px-7 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
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
  );
}
