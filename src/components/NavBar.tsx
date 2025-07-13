'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-boiler border-b border-foundry">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold text-goldplus">
            Escapegineers
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="font-body text-ivory hover:text-goldplus transition-colors">
              Home
            </Link>
            <Link href="/book" className="font-body text-ivory hover:text-goldplus transition-colors">
              Book Now
            </Link>
            <Link href="/leaderboard" className="font-body text-ivory hover:text-goldplus transition-colors">
              Leaderboard
            </Link>
            <Link href="/about" className="font-body text-ivory hover:text-goldplus transition-colors">
              About
            </Link>
            <Link href="/faq" className="font-body text-ivory hover:text-goldplus transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="font-body text-ivory hover:text-goldplus transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-foundry">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-body text-ivory hover:text-goldplus transition-colors">
                Home
              </Link>
              <Link href="/book" className="font-body text-ivory hover:text-goldplus transition-colors">
                Book Now
              </Link>
              <Link href="/leaderboard" className="font-body text-ivory hover:text-goldplus transition-colors">
                Leaderboard
              </Link>
              <Link href="/about" className="font-body text-ivory hover:text-goldplus transition-colors">
                About
              </Link>
              <Link href="/faq" className="font-body text-ivory hover:text-goldplus transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="font-body text-ivory hover:text-goldplus transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 