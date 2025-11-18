import React, { useEffect, useState } from 'react'

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now()
  const seconds = Math.max(0, Math.floor((total / 1000) % 60))
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60))
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24))
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)))
  return { total, days, hours, minutes, seconds }
}

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Countdown to the Big Day</h2>
          <p className="mt-2 text-slate-600">We can’t wait to celebrate together!</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{label:'Days',value:timeLeft.days},{label:'Hours',value:timeLeft.hours},{label:'Minutes',value:timeLeft.minutes},{label:'Seconds',value:timeLeft.seconds}].map((item)=> (
            <div key={item.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow border border-pink-100 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-pink-600 tracking-tight">{String(item.value).padStart(2,'0')}</div>
              <div className="mt-1 text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}