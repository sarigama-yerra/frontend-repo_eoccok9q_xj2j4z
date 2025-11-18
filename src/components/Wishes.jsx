import React, { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Wishes() {
  const [wishes, setWishes] = useState([])
  const [form, setForm] = useState({ name: '', relation: '', message: '', is_public: true })
  const [status, setStatus] = useState('idle')

  const canSubmit = useMemo(() => form.message.trim().length > 1, [form])

  useEffect(() => {
    fetch(`${API_BASE}/api/wishes`)
      .then(res => res.json())
      .then(setWishes)
      .catch(() => {})
  }, [])

  const submitWish = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    try {
      setStatus('submitting')
      const res = await fetch(`${API_BASE}/api/wishes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setForm({ name: '', relation: '', message: '', is_public: true })
      const newList = await fetch(`${API_BASE}/api/wishes`).then(r => r.json())
      setWishes(newList)
      setStatus('success')
      setTimeout(()=> setStatus('idle'), 1500)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Leave a Birthday Wish</h2>
          <p className="mt-2 text-slate-600">Share your love and blessings. Messages marked public will appear below.</p>

          <form onSubmit={submitWish} className="mt-6 space-y-4 bg-white rounded-2xl p-6 border border-pink-100 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Your Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border-slate-200 focus:border-pink-400 focus:ring-pink-200" placeholder="e.g. Sophia" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Relation</label>
                <input value={form.relation} onChange={e=>setForm({...form, relation:e.target.value})} className="mt-1 w-full rounded-lg border-slate-200 focus:border-pink-400 focus:ring-pink-200" placeholder="Friend, Cousin, Classmate..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-lg border-slate-200 focus:border-pink-400 focus:ring-pink-200" rows={4} placeholder="Write your sweet message..." />
            </div>
            <div className="flex items-center gap-2">
              <input id="is_public" type="checkbox" checked={form.is_public} onChange={e=>setForm({...form, is_public:e.target.checked})} />
              <label htmlFor="is_public" className="text-sm text-slate-700">Show this message publicly</label>
            </div>
            <button disabled={!canSubmit || status==='submitting'} className="inline-flex items-center justify-center rounded-lg bg-pink-600 text-white font-semibold px-5 py-2.5 shadow hover:bg-pink-500 disabled:opacity-60">
              {status==='submitting' ? 'Sending...' : 'Send Wish'}
            </button>
            {status==='success' && <p className="text-green-600 text-sm">Thanks! Your wish has been added.</p>}
            {status==='error' && <p className="text-rose-600 text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Public Wishes</h3>
          <div className="grid gap-4">
            {wishes.length === 0 && (
              <div className="text-slate-500 bg-rose-50 border border-rose-100 rounded-xl p-4">No wishes yet. Be the first to write one!</div>
            )}
            {wishes.map((w)=> (
              <div key={w.id} className="bg-white rounded-xl p-5 border border-pink-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-slate-800">{w.name || 'Someone'}</div>
                  {w.relation && <div className="text-xs text-slate-500">{w.relation}</div>}
                </div>
                <p className="mt-2 text-slate-700">{w.message}</p>
                {w.created_at && <div className="mt-2 text-xs text-slate-400">{new Date(w.created_at).toLocaleString()}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}