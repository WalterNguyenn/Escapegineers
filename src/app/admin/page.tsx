'use client'

import { useState, useEffect } from 'react'
import { BookingData } from '@/lib/types'

export default function AdminPage() {
  const [bookings, setBookings] = useState<BookingData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings')
      if (response.ok) {
        const data = await response.json()
        setBookings(data.bookings)
      } else {
        setError('Failed to fetch bookings')
      }
    } catch (err) {
      setError('Error loading bookings')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-light-gold dark:border-dark-gold mx-auto mb-4"></div>
          <p className="text-light-text dark:text-dark-text">Loading bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-light-gold dark:text-dark-gold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-light-muted dark:text-dark-muted">
            Developer-only access to all booking data
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
            <h3 className="text-sm font-medium text-light-muted dark:text-dark-muted">Total Bookings</h3>
            <p className="text-2xl font-bold text-light-text dark:text-dark-text">{bookings.length}</p>
          </div>
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
            <h3 className="text-sm font-medium text-light-muted dark:text-dark-muted">Confirmed</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {bookings.filter(b => b.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
            <h3 className="text-sm font-medium text-light-muted dark:text-dark-muted">Total Revenue</h3>
            <p className="text-2xl font-bold text-light-gold dark:text-dark-gold">
              ${bookings.reduce((sum, b) => sum + b.totalAmount, 0).toFixed(2)}
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
            <h3 className="text-sm font-medium text-light-muted dark:text-dark-muted">Total Players</h3>
            <p className="text-2xl font-bold text-light-text dark:text-dark-text">
              {bookings.reduce((sum, b) => sum + b.playerCount, 0)}
            </p>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-light-card dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border overflow-hidden">
          <div className="px-6 py-4 border-b border-light-border dark:border-dark-border">
            <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
              All Bookings ({bookings.length})
            </h2>
          </div>

          {error && (
            <div className="px-6 py-4 bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {bookings.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <h3 className="text-lg font-medium text-light-text dark:text-dark-text mb-2">
                No bookings yet
              </h3>
              <p className="text-light-muted dark:text-dark-muted">
                Bookings will appear here as customers make reservations.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-light-hover dark:bg-dark-hover">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Booking ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Team Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Players
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-light-muted dark:text-dark-muted uppercase tracking-wider">
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-border dark:divide-dark-border">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-light-hover dark:hover:bg-dark-hover">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-light-text dark:text-dark-text">
                        {booking.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-light-text dark:text-dark-text">
                          {booking.customerName}
                        </div>
                        <div className="text-sm text-light-muted dark:text-dark-muted">
                          {booking.customerEmail}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text dark:text-dark-text">
                        {booking.teamName || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-light-text dark:text-dark-text">
                          {formatDate(booking.date)}
                        </div>
                        <div className="text-sm text-light-muted dark:text-dark-muted">
                          {formatTime(booking.timeSlot.split('-')[1])} - {formatTime(booking.timeSlot.split('-')[2] || booking.timeSlot.split('-')[1])}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text dark:text-dark-text">
                        {booking.playerCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-light-gold dark:text-dark-gold">
                        ${booking.totalAmount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-muted dark:text-dark-muted">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={fetchBookings}
            className="bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  )
} 