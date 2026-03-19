'use client'

import { useState } from 'react'
import { BookingStep, Room, TimeSlot, BookingData } from '@/lib/types'
import { AVAILABLE_ROOMS } from '@/lib/booking-utils'
import BookingProgress from './BookingProgress'
import RoomSelect from './RoomSelect'
import TimeSlotPicker from './TimeSlotPicker'
import CheckoutForm from './CheckoutForm'
import ConfirmationScreen from './ConfirmationScreen'

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1)
  const [bookingData, setBookingData] = useState<BookingStep>({ step: 1 })
  const [completedBooking, setCompletedBooking] = useState<BookingData | null>(null)

  const handleRoomSelect = (room: Room) => {
    setBookingData(prev => ({ ...prev, room, step: 2 }))
    setCurrentStep(2)
  }

  const handleDateSelect = (date: string) => {
    setBookingData(prev => ({ ...prev, date }))
  }

  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    setBookingData(prev => ({ ...prev, timeSlot, step: 3 }))
    setCurrentStep(3)
  }

  const handleBookingComplete = (booking: BookingData) => {
    setCompletedBooking(booking)
    setCurrentStep(4)
  }

  const handleBackToStep = (step: 1 | 2 | 3) => {
    setCurrentStep(step)
    setBookingData(prev => ({ ...prev, step }))
  }

  const canProceedToStep2 = bookingData.room !== undefined
  const canProceedToStep3 = canProceedToStep2 && bookingData.date && bookingData.timeSlot

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-8 transition-colors">
      <div className="container mx-auto px-4">
        {/* Progress Bar - Hide on confirmation screen */}
        {currentStep !== 4 && (
          <BookingProgress currentStep={currentStep} totalSteps={3} />
        )}

        {/* Step Content */}
        <div className="max-w-6xl mx-auto">
          {currentStep === 1 && (
            <div>
              {!AVAILABLE_ROOMS.some((r) => r.available) && (
                <div className="mb-8 rounded-lg border border-light-border bg-light-card p-5 text-center dark:border-dark-border dark:bg-dark-surface">
                  <p className="font-body text-light-text dark:text-dark-text">
                    Online booking is opening soon. Rooms will be{' '}
                    <strong className="font-semibold text-light-gold dark:text-dark-gold">free</strong> when we
                    launch.
                  </p>
                </div>
              )}
              <RoomSelect
                rooms={AVAILABLE_ROOMS}
                selectedRoom={bookingData.room}
                onRoomSelect={handleRoomSelect}
              />
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <div></div>
                <button
                  onClick={() => bookingData.room && handleRoomSelect(bookingData.room)}
                  disabled={!canProceedToStep2}
                  className={`
                    px-8 py-3 rounded-lg font-body font-semibold transition-colors
                    ${canProceedToStep2
                      ? 'bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white'
                      : 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
                    }
                  `}
                >
                  Continue to Date & Time
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && bookingData.room && (
            <div>
              <TimeSlotPicker
                room={bookingData.room}
                selectedDate={bookingData.date}
                selectedTimeSlot={bookingData.timeSlot}
                onDateSelect={handleDateSelect}
                onTimeSlotSelect={handleTimeSlotSelect}
              />
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => handleBackToStep(1)}
                  className="px-8 py-3 rounded-lg font-body font-semibold bg-light-hover hover:bg-light-hover/80 dark:bg-dark-hover dark:hover:bg-dark-hover/80 text-light-text dark:text-dark-text border border-light-border dark:border-dark-border transition-colors"
                >
                  Back to Room Selection
                </button>
                <button
                  onClick={() => bookingData.timeSlot && handleTimeSlotSelect(bookingData.timeSlot)}
                  disabled={!canProceedToStep3}
                  className={`
                    px-8 py-3 rounded-lg font-body font-semibold transition-colors
                    ${canProceedToStep3
                      ? 'bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white'
                      : 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
                    }
                  `}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && bookingData.room && bookingData.date && bookingData.timeSlot && (
            <div>
              <CheckoutForm
                room={bookingData.room}
                date={bookingData.date}
                timeSlot={bookingData.timeSlot}
                onBookingComplete={handleBookingComplete}
              />
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => handleBackToStep(2)}
                  className="px-8 py-3 rounded-lg font-body font-semibold bg-light-hover hover:bg-light-hover/80 dark:bg-dark-hover dark:hover:bg-dark-hover/80 text-light-text dark:text-dark-text border border-light-border dark:border-dark-border transition-colors"
                >
                  Back to Date & Time
                </button>
                <div></div>
              </div>
            </div>
          )}

          {currentStep === 4 && completedBooking && bookingData.room && bookingData.timeSlot && (
            <ConfirmationScreen
              booking={completedBooking}
              room={bookingData.room}
              timeSlot={bookingData.timeSlot}
            />
          )}
        </div>

      </div>
    </div>
  )
} 