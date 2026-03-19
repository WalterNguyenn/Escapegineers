'use client'

import { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { BookingData, Room, TimeSlot } from '@/lib/types'
import { formatPrice, generateCalendarFile } from '@/lib/booking-utils'

interface ConfirmationScreenProps {
  booking: BookingData
  room: Room
  timeSlot: TimeSlot
}

export default function ConfirmationScreen({ booking, room, timeSlot }: ConfirmationScreenProps) {
  const [calendarDownloaded, setCalendarDownloaded] = useState(false)

  const formatTimeSlot = (timeSlot: TimeSlot) => {
    const start = format(parseISO(`2000-01-01T${timeSlot.startTime}`), 'h:mm a')
    const end = format(parseISO(`2000-01-01T${timeSlot.endTime}`), 'h:mm a')
    return `${start} - ${end}`
  }

  const handleCalendarDownload = () => {
    const calendarContent = generateCalendarFile({
      room,
      date: booking.date,
      timeSlot,
      customerName: booking.customerName,
      teamName: booking.teamName
    })

    const blob = new Blob([calendarContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `escapegineers-booking-${booking.date}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    setCalendarDownloaded(true)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Success Header */}
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-4xl font-bold text-light-text dark:text-dark-text mb-2">
          Booking confirmed
        </h1>
        <p className="font-body text-light-muted dark:text-dark-muted text-lg">
          Your escape room booking has been confirmed. Get ready for an amazing adventure!
        </p>
      </div>

      {/* Booking Details Card */}
      <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 border border-light-border dark:border-dark-border">
        <h2 className="font-heading text-2xl font-bold text-light-gold dark:text-dark-gold mb-6">
          Your Booking Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Room
              </h3>
              <p className="font-body text-lg text-light-text dark:text-dark-text font-semibold">
                {room.title}
              </p>
            </div>
            
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Date & Time
              </h3>
              <p className="font-body text-lg text-light-text dark:text-dark-text">
                {format(parseISO(booking.date), 'EEEE, MMMM d, yyyy')}
              </p>
              <p className="font-body text-light-text dark:text-dark-text">
                {formatTimeSlot(timeSlot)}
              </p>
            </div>
            
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Duration
              </h3>
              <p className="font-body text-lg text-light-text dark:text-dark-text">
                {room.duration} minutes
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Player Details
              </h3>
              <p className="font-body text-lg text-light-text dark:text-dark-text">
                {booking.customerName}
              </p>
              <p className="font-body text-light-muted dark:text-dark-muted">
                {booking.customerEmail}
              </p>
              {booking.teamName && (
                <p className="font-body text-light-text dark:text-dark-text">
                  Team: {booking.teamName}
                </p>
              )}
            </div>
            
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Group Size
              </h3>
              <p className="font-body text-lg text-light-text dark:text-dark-text">
                {booking.playerCount} {booking.playerCount === 1 ? 'player' : 'players'}
              </p>
            </div>
            
            <div>
              <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide">
                Total Paid
              </h3>
              <p className="font-body text-2xl text-light-gold dark:text-dark-gold font-bold">
                {formatPrice(booking.totalAmount)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Booking ID */}
        <div className="mt-6 pt-6 border-t border-light-border dark:border-dark-border">
          <h3 className="font-body text-sm font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wide mb-2">
            Booking ID
          </h3>
          <p className="font-mono text-light-text dark:text-dark-text bg-light-hover dark:bg-dark-hover px-3 py-2 rounded inline-block">
            {booking.id}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={handleCalendarDownload}
          className="bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-6 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{calendarDownloaded ? 'Calendar Downloaded!' : 'Add to Calendar'}</span>
        </button>
        
        <a
          href="/"
          className="bg-light-hover hover:bg-light-hover/80 dark:bg-dark-hover dark:hover:bg-dark-hover/80 text-light-text dark:text-dark-text font-body px-6 py-4 rounded-lg transition-colors text-center border border-light-border dark:border-dark-border"
        >
          Back to Home
        </a>
      </div>

      {/* Location & Contact Info */}
      <div className="bg-light-hover dark:bg-dark-hover rounded-lg p-6 border border-light-border dark:border-dark-border">
        <h3 className="font-heading text-lg font-semibold text-light-text dark:text-dark-text mb-4">
          Location & Check-in Information
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 text-light-gold dark:text-dark-gold mt-0.5">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-body text-light-text dark:text-dark-text">
                Engineering Science & Technology Building<br />
                723 W Michigan St<br />
                Indianapolis, IN 46202
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 text-light-gold dark:text-dark-gold mt-0.5">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-body text-light-text dark:text-dark-text">
                Please arrive 15 minutes early for check-in
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 text-light-gold dark:text-dark-gold mt-0.5">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="font-body text-light-text dark:text-dark-text">
                Questions? Contact us at{' '}
                <a href="mailto:escapegineers@gmail.com" className="text-light-gold dark:text-dark-gold hover:underline">
                  escapegineers@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Teaser */}
      <div className="rounded-lg border border-light-gold/30 bg-light-hover p-6 dark:border-dark-gold/30 dark:bg-dark-hover">
        <div className="text-center">
          <h3 className="font-heading text-xl font-bold text-light-text dark:text-dark-text mb-2">
            Think You Can Make the Top 5?
          </h3>
          <p className="font-body text-light-muted dark:text-dark-muted mb-4">
            Your escape time will be recorded and added to our leaderboard. 
            {booking.teamName ? ` Team ${booking.teamName}` : booking.customerName}, 
            are you ready to set a new record?
          </p>
          <a
            href="/leaderboard"
            className="inline-block bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-6 py-3 rounded-lg transition-colors"
          >
            View Current Leaderboard
          </a>
        </div>
      </div>
    </div>
  )
} 