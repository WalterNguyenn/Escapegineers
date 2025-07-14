'use client'

import Link from 'next/link'

export default function BookNowFAB() {
  return (
    <Link
      href="/book"
      className="fixed bottom-6 right-6 bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-50 md:hidden transform hover:scale-105"
    >
      Book Now
    </Link>
  )
} 