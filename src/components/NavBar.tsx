'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-light-card dark:bg-dark-surface border-b border-light-border dark:border-dark-border shadow-sm transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center text-light-gold dark:text-dark-gold"
          >
            <Image
              src="/images/wordmarklogo.png"
              alt="Escapegineers"
              width={220}
              height={48}
              className="h-9 w-auto max-w-[180px] object-contain sm:h-10 sm:max-w-[240px]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Home
            </Link>
            <Link href="/book" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Book Now
            </Link>
            <Link href="/leaderboard" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Leaderboard
            </Link>
            <Link href="/about" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              About
            </Link>
            <Link href="/faq" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-light-border dark:border-dark-border">
              <Link href="/" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                Home
              </Link>
              <Link href="/book" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                Book Now
              </Link>
              <Link href="/leaderboard" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                Leaderboard
              </Link>
              <Link href="/about" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                About
              </Link>
              <Link href="/faq" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block px-3 py-2 font-body text-light-muted dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 