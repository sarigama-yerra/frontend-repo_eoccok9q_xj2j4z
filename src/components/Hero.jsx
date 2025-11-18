import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ name }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="inline-flex items-center gap-2 text-pink-600 font-medium bg-pink-50 rounded-full px-4 py-1.5 shadow-sm">
            ✨ It's celebration time!
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Happy Birthday, <span className="text-pink-600">{name}</span>!
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl">
            Wishing you a day filled with laughter, sweet moments, and all the sparkle you deserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50 p-2 shadow-xl">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.25),transparent_60%)]" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
              alt="Birthday girl"
              className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/70 shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-white rounded-xl px-3 py-1 text-pink-600 text-sm font-semibold shadow">
              💖 Birthday Star
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}