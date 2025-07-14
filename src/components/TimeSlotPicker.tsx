'use client'

import { useState, useEffect } from 'react'
import { format, isSameDay, parseISO } from 'date-fns'
import { Room, TimeSlot } from '@/lib/types'
import { getAvailableDates, generateTimeSlots } from '@/lib/booking-utils'

interface TimeSlotPickerProps {
  room: Room
  selectedDate?: string
  selectedTimeSlot?: TimeSlot
  onDateSelect: (date: string) => void
  onTimeSlotSelect: (timeSlot: TimeSlot) => void
}

export default function TimeSlotPicker({ 
  room, 
  selectedDate, 
  selectedTimeSlot, 
  onDateSelect, 
  onTimeSlotSelect 
}: TimeSlotPickerProps) {
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setAvailableDates(getAvailableDates())
  }, [])

  useEffect(() => {
    if (selectedDate) {
      setLoading(true)
      const date = parseISO(selectedDate)
      const slots = generateTimeSlots(date, room.duration)
      setAvailableTimeSlots(slots)
      setLoading(false)
    }
  }, [selectedDate, room.duration])

  const handleDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    onDateSelect(dateStr)
  }

  const formatTimeSlot = (timeSlot: TimeSlot) => {
    const start = format(parseISO(`2000-01-01T${timeSlot.startTime}`), 'h:mm a')
    const end = format(parseISO(`2000-01-01T${timeSlot.endTime}`), 'h:mm a')
    return `${start} - ${end}`
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text mb-2">
          Select Date & Time
        </h2>
        <p className="font-body text-light-muted dark:text-dark-muted">
          Choose when you&apos;d like to experience {room.title}
        </p>
      </div>

      {/* Date Selection */}
      <div>
        <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-4">
          Available Dates
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {availableDates.map((date) => {
            const dateStr = format(date, 'yyyy-MM-dd')
            const isSelected = selectedDate === dateStr
            const isToday = isSameDay(date, new Date())
            
            return (
              <button
                key={dateStr}
                onClick={() => handleDateClick(date)}
                className={`
                  p-3 rounded-lg border-2 transition-all text-center
                  ${isSelected 
                    ? 'border-light-gold dark:border-dark-gold bg-light-gold/10 dark:bg-dark-gold/10' 
                    : 'border-light-border dark:border-dark-border hover:border-light-gold/50 dark:hover:border-dark-gold/50'
                  }
                `}
              >
                <div className="font-body text-xs text-light-muted dark:text-dark-muted">
                  {format(date, 'EEE')}
                </div>
                <div className={`font-body text-lg font-semibold ${
                  isSelected ? 'text-light-gold dark:text-dark-gold' : 'text-light-text dark:text-dark-text'
                }`}>
                  {format(date, 'dd')}
                </div>
                <div className="font-body text-xs text-light-muted dark:text-dark-muted">
                  {format(date, 'MMM')}
                </div>
                {isToday && (
                  <div className="font-body text-xs text-light-gold dark:text-dark-gold font-semibold">
                    Today
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Time Slot Selection */}
      {selectedDate && (
        <div>
          <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-4">
            Available Time Slots
          </h3>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-light-gold dark:border-dark-gold mx-auto"></div>
              <p className="font-body text-light-muted dark:text-dark-muted mt-2">Loading time slots...</p>
            </div>
          ) : availableTimeSlots.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {availableTimeSlots.map((timeSlot) => {
                const isSelected = selectedTimeSlot?.id === timeSlot.id
                const isAvailable = timeSlot.available && timeSlot.currentBookings < timeSlot.maxCapacity
                
                return (
                  <button
                    key={timeSlot.id}
                    onClick={() => isAvailable && onTimeSlotSelect(timeSlot)}
                    disabled={!isAvailable}
                    className={`
                      p-4 rounded-lg border-2 transition-all
                      ${isSelected 
                        ? 'border-light-gold dark:border-dark-gold bg-light-gold/10 dark:bg-dark-gold/10' 
                        : isAvailable
                          ? 'border-light-border dark:border-dark-border hover:border-light-gold/50 dark:hover:border-dark-gold/50'
                          : 'border-light-border dark:border-dark-border opacity-50 cursor-not-allowed'
                      }
                    `}
                  >
                    <div className={`font-body text-sm font-semibold ${
                      isSelected ? 'text-light-gold dark:text-dark-gold' : 'text-light-text dark:text-dark-text'
                    }`}>
                      {formatTimeSlot(timeSlot)}
                    </div>
                    <div className="font-body text-xs text-light-muted dark:text-dark-muted mt-1">
                      {isAvailable ? `${timeSlot.maxCapacity - timeSlot.currentBookings} spots left` : 'Full'}
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📅</div>
              <p className="font-body text-light-muted dark:text-dark-muted">
                No time slots available for this date
              </p>
            </div>
          )}
        </div>
      )}

      {/* Operating Hours Info */}
      <div className="bg-light-hover dark:bg-dark-hover rounded-lg p-4 border border-light-border dark:border-dark-border">
        <h4 className="font-heading text-lg font-semibold text-light-text dark:text-dark-text mb-2">
          Operating Hours
        </h4>
        <p className="font-body text-light-muted dark:text-dark-muted">
          Monday - Friday: 12:00 PM - 7:00 PM<br />
          Saturday - Sunday: Closed
        </p>
        <p className="font-body text-light-muted dark:text-dark-muted text-sm mt-2">
          Sessions are {room.duration} minutes long with 1-hour intervals between bookings.
        </p>
      </div>
    </div>
  )
} 