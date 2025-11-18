import React from 'react'
import { Sparkles } from 'lucide-react'

export default function About({ name }) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-2 bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 rounded-3xl blur opacity-70" />
          <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-pink-100">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <Sparkles className="text-pink-500" />
              About {name}
            </h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li><span className="font-medium text-slate-800">Personality:</span> Radiant, kind-hearted, and full of joy</li>
              <li><span className="font-medium text-slate-800">Hobbies:</span> Baking treats, capturing moments, cozy reading sessions</li>
              <li><span className="font-medium text-slate-800">Achievements:</span> Always lifting others up, shining in everything she does</li>
              <li><span className="font-medium text-slate-800">Why she’s special:</span> Her smile brightens every room and every heart</li>
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">A little about the birthday girl</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Today is all about celebrating the incredible person you are. May your year overflow with love, laughter, and magical memories.
          </p>
        </div>
      </div>
    </section>
  )
}