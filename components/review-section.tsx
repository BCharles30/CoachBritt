'use client'

import { useState, useEffect } from 'react'

interface Review {
  id: string
  name: string
  rating: number
  message: string
  created_at: string
}

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={onChange ? 'button' : 'button'}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={onChange ? 'cursor-pointer' : 'cursor-default'}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
        >
          <svg
            className={`h-7 w-7 transition-colors ${
              star <= (hovered || value) ? 'text-[#b88a2a]' : 'text-black/20'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then(setReviews)
      .catch(() => {})
  }, [submitted])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!rating) { setError('Please select a star rating.'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, message }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
      } else {
        setSubmitted(true)
        setName('')
        setRating(0)
        setMessage('')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="border-t border-black/5 bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b88a2a]">Share Your Experience</p>
          <h2 className="mt-4 text-3xl font-semibold">Leave a Review</h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-black/60">
            Your feedback means the world and helps other women find the support they need.
          </p>
        </div>

        {/* Review Form */}
        <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-black/5 bg-[#faf8f5] p-8 shadow-sm">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#b88a2a]/10">
                <svg className="h-7 w-7 text-[#b88a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Thank You!</h3>
              <p className="mt-2 text-black/60">Your review has been submitted successfully.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-[#b88a2a] px-6 py-2 text-sm font-medium text-[#b88a2a] transition hover:bg-[#b88a2a] hover:text-white"
              >
                Leave Another Review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah M."
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Rating</label>
                <StarRating value={rating} onChange={setRating} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Your Review</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Share how coaching has impacted your business..."
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b88a2a] focus:ring-1 focus:ring-[#b88a2a]"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[#b88a2a] py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          )}
        </div>

        {/* Existing Reviews */}
        {reviews.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center text-xl font-semibold">What Clients Are Saying</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <div key={review.id} className="rounded-[2rem] border border-black/5 bg-[#faf8f5] p-6 shadow-sm">
                  <StarRating value={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-black/70">&ldquo;{review.message}&rdquo;</p>
                  <p className="mt-4 text-sm font-medium text-[#b88a2a]">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
