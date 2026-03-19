'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import LeaderboardRow from '@/components/LeaderboardRow'

export default function LeaderboardPage() {
  const [selectedRoom, setSelectedRoom] = useState('all')

  const rooms = [
    { id: 'all', name: 'All Rooms' },
    { id: 'mung-chang', name: "Mung Chang's Office" }
  ]

  // Empty leaderboard data - ready for future implementation
  const leaderboardData: any[] = []

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-16 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light-gold dark:text-dark-gold mb-4">
            Leaderboard
          </h1>
          <p className="font-body text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Think you can beat the best? Check out today&apos;s top escape teams!
          </p>
        </div>

        {/* Room Filter */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="bg-light-card dark:bg-dark-surface text-light-text dark:text-dark-text border border-light-border dark:border-dark-border rounded-lg px-4 py-2 focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
          >
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-light-card dark:bg-dark-surface rounded-lg overflow-hidden border border-light-border dark:border-dark-border">
          {/* Table Header */}
          <div className="bg-light-hover dark:bg-dark-hover px-6 py-4">
            <div className="grid grid-cols-4 gap-4 font-heading text-light-gold dark:text-dark-gold">
              <div>Rank</div>
              <div>Team Name</div>
              <div>Time</div>
              <div>Date</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-light-border dark:divide-dark-border">
            {leaderboardData.length > 0 ? (
              leaderboardData.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LeaderboardRow {...entry} />
                </motion.div>
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <h3 className="font-heading text-2xl font-bold text-light-gold dark:text-dark-gold mb-4">
                  No Times Yet
                </h3>
                <p className="font-body text-light-muted dark:text-dark-muted mb-8">
                  Be the first to escape and claim your spot on the leaderboard!
                </p>
                <a
                  href="/book"
                  className="inline-block bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-8 py-4 rounded-lg transition-colors"
                >
                  Book Your Escape
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Coming Soon Note */}
        <div className="mt-12 text-center">
          <p className="font-body text-light-muted dark:text-dark-muted italic">
            Leaderboard will be populated once we have active players. 
            Check back after your escape room experience!
          </p>
        </div>
      </div>
    </div>
  )
} 