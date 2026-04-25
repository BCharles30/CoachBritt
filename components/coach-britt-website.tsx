"use client";
import { useState, useEffect } from "react";

export default function CoachBrittWebsite() {
  const profileImage = "/images/coach-britt-profile.png";
  const [menuOpen, setMenuOpen] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const openApplication = () => {
    setApplicationOpen(true);
    setTimeout(() => {
      document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "tally-form-submit-done") {
        setApplicationSubmitted(true);
        setTimeout(() => {
          document.getElementById("next-steps")?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2d1f1a]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>

      {/* Announcement Bar */}
      <div className="bg-[#2d1f1a] py-2.5 text-center text-sm tracking-wide text-[#f7efe7]">
        Digital product available now — build your business foundation before you scale.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-[#d8b89f] bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-xl font-bold tracking-wide text-[#5a3f35]">Coach Britt</a>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" style={{ fontFamily: "Arial, sans-serif" }}>
            <a href="/shop" className="text-[#2d1f1a] transition hover:text-[#c98f7a]">Digital Product</a>
            <a href="#pathway" className="text-[#2d1f1a] transition hover:text-[#c98f7a]">How It Works</a>
            <a href="#coaching" className="text-[#2d1f1a] transition hover:text-[#c98f7a]">Coaching</a>
            <a href="/clients" className="text-[#2d1f1a] transition hover:text-[#c98f7a]">Client Portal</a>
            <a href="/shop" className="rounded-full bg-[#2d1f1a] px-5 py-2.5 text-[#f7efe7] transition hover:bg-[#5a3f35]">Get the Guide</a>
          </nav>
          <button
            className="flex flex-col gap-1.5 p-1 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#2d1f1a] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#2d1f1a] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#2d1f1a] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#d8b89f] bg-white px-6 py-4 md:hidden" style={{ fontFamily: "Arial, sans-serif" }}>
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a href="/shop" onClick={() => setMenuOpen(false)} className="py-2 transition hover:text-[#c98f7a]">Digital Product</a>
              <a href="#pathway" onClick={() => setMenuOpen(false)} className="py-2 transition hover:text-[#c98f7a]">How It Works</a>
              <a href="#coaching" onClick={() => setMenuOpen(false)} className="py-2 transition hover:text-[#c98f7a]">Coaching</a>
              <a href="/clients" onClick={() => setMenuOpen(false)} className="py-2 transition hover:text-[#c98f7a]">Client Portal</a>
              <a href="/shop" onClick={() => setMenuOpen(false)} className="mt-2 inline-block rounded-full bg-[#2d1f1a] px-5 py-2.5 text-center text-[#f7efe7]">Get the Guide</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">

        {/* Hero */}
        <section className="mx-auto max-w-6xl grid items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]" style={{ fontFamily: "Arial, sans-serif" }}>
              Build the systems. Master the mindset. Scale the business.
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-none text-[#2d1f1a] md:text-6xl" style={{ lineHeight: "0.96" }}>
              Your business needs more than motivation. It needs a system.
            </h1>
            <p className="mb-7 max-w-xl text-lg leading-relaxed text-[#5a3f35]">
              Coach Britt helps women entrepreneurs organize their ideas, strengthen their mindset, and build simple business systems that make growth feel clear, focused, and doable.
            </p>
            <div className="mb-6 flex flex-wrap gap-3">
              <a href="/shop" className="rounded-full bg-[#2d1f1a] px-6 py-3.5 text-sm font-bold text-[#f7efe7] shadow-lg transition hover:bg-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                Start with the Digital Product
              </a>
              <a href="#coaching" className="rounded-full border-2 border-[#2d1f1a] px-6 py-3.5 text-sm font-bold text-[#2d1f1a] transition hover:bg-[#2d1f1a] hover:text-[#f7efe7]" style={{ fontFamily: "Arial, sans-serif" }}>
                Work with Coach Britt
              </a>
              <a href="/clients" className="rounded-full border-2 border-[#b88746] px-6 py-3.5 text-sm font-bold text-[#b88746] transition hover:bg-[#b88746] hover:text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                Existing Clients
              </a>
            </div>
            <p className="text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
              Perfect for new business owners, service providers, and women ready to stop guessing and start building.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-[#d8b89f]/30">
            <img src={profileImage} alt="Coach Britt standing confidently" className="h-full w-full object-cover object-top" style={{ minHeight: "520px" }} />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 mb-16">
              <div className="overflow-hidden rounded-[2rem] border border-[#d8b89f]/30 shadow-xl bg-[#f7efe7]" style={{ minHeight: "480px" }}>
                <img src={profileImage} alt="Coach Britt working in her office" className="h-full w-full object-cover object-top" style={{ minHeight: "480px" }} />
              </div>
              <div>
                <h2 className="text-4xl font-bold leading-tight text-[#2d1f1a] md:text-5xl">
                  Designed for the woman who knows she is called to build more.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  This site leads with your digital product as the affordable first step, then naturally guides serious clients into your coaching offers.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Clarity", desc: "Help clients understand what they sell, who they serve, and what makes their business valuable." },
                { title: "Systems", desc: "Introduce simple structures for content, client flow, offers, payments, and follow-up." },
                { title: "Mindset", desc: "Support confidence, consistency, discipline, and the belief needed to keep showing up." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-[#d8b89f]/40 bg-white p-8 shadow-sm">
                  <h3 className="mb-3 text-2xl font-bold text-[#5a3f35]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathway */}
        <section id="pathway" className="bg-[#fffaf5] py-20">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-4xl font-bold text-[#2d1f1a] md:text-5xl">A simple path from digital product to coaching client.</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
              The redesign makes your site feel intentional: learn first, build trust, then invite them into your signature coaching offer.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Buy the guide", desc: "They purchase the digital product and get an immediate win with business clarity." },
                { step: "2", title: "Apply the system", desc: "They start organizing their business, but may realize they want accountability and direction." },
                { step: "3", title: "Work with Coach Britt", desc: "They move into coaching when they are ready for personalized strategy and support." },
              ].map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-[#d8b89f]/40 bg-white p-8 shadow-sm text-left">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2d1f1a] text-sm font-bold text-[#f7efe7]" style={{ fontFamily: "Arial, sans-serif" }}>{item.step}</div>
                  <h3 className="mb-3 text-2xl font-bold text-[#5a3f35]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Pricing */}
        <section id="coaching" className="py-20" style={{ background: "linear-gradient(180deg, #f7efe7, #fffaf5)" }}>
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-4xl font-bold text-[#2d1f1a] md:text-5xl">Ready for more support?</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
              Your coaching offers feel like the premium transformation after the digital product.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Foundation */}
              <div className="flex flex-col justify-between rounded-[1.75rem] border border-[#d8b89f]/40 bg-white p-8 shadow-sm" style={{ minHeight: "480px" }}>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-[#5a3f35]">Foundation</h3>
                  <p className="mb-4 text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>For the woman who needs structure, clarity, and monthly direction.</p>
                  <div className="mb-1 text-4xl font-bold text-[#2d1f1a]">$197<span className="text-lg">/mo</span></div>
                  <p className="mb-5 text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>12-month coaching commitment</p>
                  <ul className="space-y-2 text-left text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>
                    <li>• Monthly strategy call</li>
                    <li>• Business systems roadmap</li>
                    <li>• Mindset and goal check-in</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <button onClick={openApplication} className="mt-8 block w-full rounded-full border-2 border-[#2d1f1a] px-6 py-3 text-center text-sm font-bold text-[#2d1f1a] transition hover:bg-[#2d1f1a] hover:text-[#f7efe7]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Work with Coach Britt
                </button>
              </div>
              {/* Growth - Popular */}
              <div className="relative flex flex-col justify-between rounded-[1.75rem] border-2 border-[#b88746] bg-white p-8 shadow-lg md:scale-[1.03]" style={{ minHeight: "480px" }}>
                <div className="absolute -top-4 left-7 rounded-full bg-[#b88746] px-4 py-1.5 text-xs font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>Best Next Step</div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-[#5a3f35]">Growth</h3>
                  <p className="mb-4 text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>For the client who wants deeper accountability and consistent implementation.</p>
                  <div className="mb-1 text-4xl font-bold text-[#2d1f1a]">$297<span className="text-lg">/mo</span></div>
                  <p className="mb-5 text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>12-month coaching commitment</p>
                  <ul className="space-y-2 text-left text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>
                    <li>• Two strategy calls per month</li>
                    <li>• Offer and pricing refinement</li>
                    <li>• Content and visibility planning</li>
                    <li>• Systems setup support</li>
                    <li>• Priority email support</li>
                  </ul>
                </div>
                <button onClick={openApplication} className="mt-8 block w-full rounded-full bg-[#2d1f1a] px-6 py-3 text-center text-sm font-bold text-[#f7efe7] transition hover:bg-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Apply for Coaching
                </button>
              </div>
              {/* Scale */}
              <div className="flex flex-col justify-between rounded-[1.75rem] border border-[#d8b89f]/40 bg-white p-8 shadow-sm" style={{ minHeight: "480px" }}>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-[#5a3f35]">Scale</h3>
                  <p className="mb-4 text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>For the woman ready for high-touch guidance, structure, and strategy.</p>
                  <div className="mb-1 text-4xl font-bold text-[#2d1f1a]">$497<span className="text-lg">/mo</span></div>
                  <p className="mb-5 text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>12-month coaching commitment</p>
                  <ul className="space-y-2 text-left text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>
                    <li>• Weekly coaching support</li>
                    <li>• Full business systems audit</li>
                    <li>• Launch and sales planning</li>
                    <li>• Client journey development</li>
                    <li>• Voice note or Voxer-style support</li>
                  </ul>
                </div>
                <button onClick={openApplication} className="mt-8 block w-full rounded-full border-2 border-[#2d1f1a] px-6 py-3 text-center text-sm font-bold text-[#2d1f1a] transition hover:bg-[#2d1f1a] hover:text-[#f7efe7]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Apply for Coaching
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Application - only shown when user clicks apply */}
        {applicationOpen && <section id="application" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]" style={{ fontFamily: "Arial, sans-serif" }}>Coaching Application</p>
              <h2 className="mb-4 text-4xl font-bold text-[#2d1f1a] md:text-5xl">Apply to Work with Coach Britt</h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                This application helps determine which coaching tier fits your goals, business stage, and level of support needed.
              </p>
            </div>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#d8b89f]/40 bg-white shadow-sm">
              <iframe
                src="https://tally.so/r/A768Vo"
                width="100%"
                height="900"
                frameBorder={0}
                title="Coaching Application Form"
              />
              <div className="border-t border-[#d8b89f]/40 px-8 py-8 text-center">
                <p className="mb-4 text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>Already submitted your application?</p>
                <a href="https://calendly.com/coachbrittbiz/30min" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2d1f1a] px-6 py-3 text-sm font-bold text-[#f7efe7] transition hover:bg-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Book Your 30-Minute Call
                </a>
              </div>
            </div>
          </div>
        </section>

        }

        {/* Next Steps - only shown after application submitted */}
        {applicationSubmitted && (
        <section id="next-steps" className="bg-[#fffaf5] py-20">
          <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]" style={{ fontFamily: "Arial, sans-serif" }}>Next Steps</p>
            <h2 className="mb-4 text-4xl font-bold text-[#2d1f1a] md:text-5xl">Your application has been received</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
              {"You're one step closer to building a structured, scalable business. The next step is to book your call so we can map out exactly what you need."}
            </p>
            <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-[#d8b89f]/40 bg-white p-8 text-left shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-[#5a3f35]">What to expect on your call:</h3>
              <ul className="mb-6 space-y-2 text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• {"We'll review your current business structure"}</li>
                <li>• {"Identify what's holding you back"}</li>
                <li>• Create a clear plan for your next level</li>
              </ul>
              <h3 className="mb-3 text-xl font-bold text-[#5a3f35]">Come prepared with:</h3>
              <ul className="mb-6 space-y-2 text-sm text-[#654d43]" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• Your current offer (or idea)</li>
                <li>• Your biggest challenge right now</li>
                <li>• Your goals for the next 3-6 months</li>
              </ul>
              <p className="mb-6 text-sm text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                {"This call is for women who are serious about building a real business—not just thinking about it."}
              </p>
              <div className="text-center">
                <a href="https://calendly.com/coachbrittbiz/30min" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2d1f1a] px-6 py-3 text-sm font-bold text-[#f7efe7] transition hover:bg-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Book Your Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* CTA */}
        <section className="bg-[#5a3f35] py-20">
          <div className="mx-auto max-w-6xl grid items-center gap-10 px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
            <div>
              <h2 className="mb-5 text-4xl font-bold leading-none text-[#f7efe7] md:text-5xl">Start with clarity. Grow with strategy.</h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#f7efe7]/80" style={{ fontFamily: "Arial, sans-serif" }}>
                Your digital product gives clients a low-pressure way to experience your coaching style, while your coaching offers create the long-term transformation.
              </p>
              <a href="/shop" className="rounded-full bg-[#2d1f1a] px-7 py-3.5 text-sm font-bold text-[#f7efe7] transition hover:opacity-90" style={{ fontFamily: "Arial, sans-serif" }}>
                Get the Digital Product
              </a>
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl" style={{ maxHeight: "420px" }}>
              <img src={profileImage} alt="Coach Britt brand photo" className="h-full w-full object-cover object-top" style={{ height: "420px" }} />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[2rem] bg-[#f7efe7] p-8 ring-1 ring-[#d8b89f]/40 lg:grid-cols-2 lg:p-12">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-[#b88746]" style={{ fontFamily: "Arial, sans-serif" }}>Contact</p>
                <h2 className="mb-5 text-4xl font-bold text-[#2d1f1a]">Ready to work with Coach Britt?</h2>
                <p className="text-lg leading-relaxed text-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Start the conversation and take the next step toward building a business with stronger systems, a resilient mindset, and room to scale.
                </p>
              </div>
              <form action="mailto:thecoachbrittmethod@gmail.com" method="POST" encType="text/plain" className="grid gap-4">
                <input name="Name" className="rounded-2xl border border-[#d8b89f]/50 bg-[#fffaf5] px-5 py-4 text-[#2d1f1a] outline-none transition focus:border-[#b88746] focus:ring-2 focus:ring-[#b88746]/20" placeholder="Your Name" style={{ fontFamily: "Arial, sans-serif" }} />
                <input name="Email" type="email" className="rounded-2xl border border-[#d8b89f]/50 bg-[#fffaf5] px-5 py-4 text-[#2d1f1a] outline-none transition focus:border-[#b88746] focus:ring-2 focus:ring-[#b88746]/20" placeholder="Email Address" style={{ fontFamily: "Arial, sans-serif" }} />
                <input name="Business Stage" className="rounded-2xl border border-[#d8b89f]/50 bg-[#fffaf5] px-5 py-4 text-[#2d1f1a] outline-none transition focus:border-[#b88746] focus:ring-2 focus:ring-[#b88746]/20" placeholder="Business Stage" style={{ fontFamily: "Arial, sans-serif" }} />
                <textarea name="Message" className="min-h-[140px] rounded-2xl border border-[#d8b89f]/50 bg-[#fffaf5] px-5 py-4 text-[#2d1f1a] outline-none transition focus:border-[#b88746] focus:ring-2 focus:ring-[#b88746]/20" placeholder="Tell me about your goals" style={{ fontFamily: "Arial, sans-serif" }} />
                <button type="submit" className="rounded-full bg-[#2d1f1a] px-7 py-3 text-sm font-bold text-[#f7efe7] transition hover:bg-[#5a3f35]" style={{ fontFamily: "Arial, sans-serif" }}>
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d1f1a] px-6 py-8 text-center text-sm text-[#d8b89f]" style={{ fontFamily: "Arial, sans-serif" }}>
        <p>© 2026 Coach Britt. Build the systems. Master the mindset. Scale the business.</p>
        <a href="mailto:thecoachbrittmethod@gmail.com" className="mt-2 block transition hover:text-[#b88746]">thecoachbrittmethod@gmail.com</a>
      </footer>
    </div>
  );
}
