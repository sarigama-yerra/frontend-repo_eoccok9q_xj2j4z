import React from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import About from './components/About'
import Gallery from './components/Gallery'
import Wishes from './components/Wishes'
import PartyDetails from './components/PartyDetails'

const NAME = 'Name' // Replace with the birthday girl's name
const PARTY_DATE = new Date(new Date().getFullYear(), 11, 25, 18, 0, 0) // Dec 25, 6:00 PM this year

function App() {
  return (
    <div className="min-h-screen font-['Inter',_'system-ui',_'-apple-system',_'Segoe_UI',_Roboto] bg-white text-slate-800">
      {/* Hero with Spline background */}
      <Hero name={NAME} />

      {/* Countdown */}
      <Countdown targetDate={PARTY_DATE} />

      {/* About */}
      <About name={NAME} />

      {/* Gallery */}
      <Gallery />

      {/* Wishes */}
      <Wishes />

      {/* Party Details */}
      <PartyDetails
        date={PARTY_DATE.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        time={PARTY_DATE.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
        venue="123 Party Lane, Celebration City"
        rsvp="#"
      />

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500">
        Made with love • Wishing {NAME} the happiest birthday! 🎂✨
      </footer>
    </div>
  )
}

export default App