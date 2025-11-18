import React from 'react'

export default function PartyDetails({ date, time, venue, rsvp }) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-t from-white to-amber-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-white border border-amber-200 shadow-xl">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-200 via-amber-200 to-rose-200 blur opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest text-amber-600">You’re invited</div>
                <h2 className="mt-1 text-3xl sm:text-4xl font-bold text-slate-900">Birthday Party Details</h2>
                <p className="mt-2 text-slate-600">Join us for a joyful celebration filled with balloons, sprinkles, and lots of cake!</p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-5 text-center">
                  <div className="text-amber-700 font-semibold">Date</div>
                  <div className="mt-1 text-slate-800">{date}</div>
                </div>
                <div className="rounded-xl bg-pink-50 border border-pink-100 p-5 text-center">
                  <div className="text-pink-700 font-semibold">Time</div>
                  <div className="mt-1 text-slate-800">{time}</div>
                </div>
                <div className="rounded-xl bg-rose-50 border border-rose-100 p-5 text-center">
                  <div className="text-rose-700 font-semibold">Venue</div>
                  <div className="mt-1 text-slate-800">{venue}</div>
                </div>
              </div>

              {rsvp && (
                <div className="mt-8 text-center">
                  <a href={rsvp} className="inline-flex items-center justify-center rounded-xl bg-pink-600 text-white font-semibold px-6 py-3 shadow hover:bg-pink-500">
                    RSVP Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}