"use client"

import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { BookingForm } from "./booking-form"
import dynamic from 'next/dynamic';

// Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="bg-gray-900 border-b border-pink-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-['Cinzel_Decorative']">
          <Link to="/" className="text-white">
            The <span className="text-pink-500">Night</span>Crew
          </Link>
        </h1>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-pink-500 font-['Orbitron']">Home</Link>
          <Link to="/music" className="text-white hover:text-pink-500 font-['Orbitron']">Music</Link>
          <Link to="/events" className="text-white hover:text-pink-500 font-['Orbitron']">Events</Link>
          <Link to="/bar" className="text-white hover:text-pink-500 font-['Orbitron']">Bar</Link>
          <Link to="/night-crew" className="text-white hover:text-pink-500 font-['Orbitron']">Night Crew</Link>
          <Link to="/gallery" className="text-white hover:text-pink-500 font-['Orbitron']">Gallery</Link>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 px-4">
          <Link to="/" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/music" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Music</Link>
          <Link to="/events" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link to="/bar" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Bar</Link>
          <Link to="/night-crew" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Night Crew</Link>
          <Link to="/gallery" className="text-white hover:text-pink-500 font-['Orbitron']" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        </div>
      )}
    </nav>
  )
}

// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-gray-900 border-t border-pink-500 py-4 fixed bottom-0 w-full">
    <div className="container mx-auto px-4 flex justify-center space-x-4">
      <Link to="/social" className="text-white hover:text-pink-500 font-['Orbitron']">Social</Link>
      <Link to="/contact" className="text-white hover:text-pink-500 font-['Orbitron']">Contact Us</Link>
      <Link to="/directions" className="text-white hover:text-pink-500 font-['Orbitron']">Directions</Link>
      <Link to="/reservations" className="text-white hover:text-pink-500 font-['Orbitron']">Reservations</Link>
    </div>
  </footer>
)

// Placeholder Components for Other Pages
const Home: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Welcome to The Night Crew</h2>
      <p className="mt-4 text-lg text-gray-300">Your ultimate nightlife experience awaits!</p>
    </div>
  </section>
)

const Music: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Music</h2>
      <p className="mt-4 text-lg text-gray-300">Discover our latest DJ sets and live performances.</p>
    </div>
  </section>
)

const Events: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Events</h2>
      <p className="mt-4 text-lg text-gray-300">Check out our upcoming events and parties.</p>
    </div>
  </section>
)

const Bar = dynamic(() => import('../pages/bar'), { ssr: false });

const NightCrew: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Night Crew</h2>
      <p className="mt-4 text-lg text-gray-300">Meet the team that makes your nights unforgettable.</p>
    </div>
  </section>
)

const Gallery: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Gallery</h2>
      <p className="mt-4 text-lg text-gray-300">Browse photos from our epic nights.</p>
    </div>
  </section>
)

const Social: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Social</h2>
      <p className="mt-4 text-lg text-gray-300">Follow us on social media for updates and more.</p>
    </div>
  </section>
)

const Contact: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Contact Us</h2>
      <p className="mt-4 text-lg text-gray-300">Get in touch with our team.</p>
    </div>
  </section>
)

const Directions: React.FC = () => (
  <section className="py-16 bg-gray-900/30 text-white min-h-screen">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Directions</h2>
      <p className="mt-4 text-lg text-gray-300">Find your way to The Night Crew.</p>
    </div>
  </section>
)

// Main App Component with Routing
const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/night-crew" element={<NightCrew />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/reservations" element={<BookingForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
)

export default App