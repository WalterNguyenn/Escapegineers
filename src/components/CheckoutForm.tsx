'use client'

import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe'
import { Room, TimeSlot } from '@/lib/types'
import { calculateTotalPrice, formatPrice } from '@/lib/booking-utils'
import { format, parseISO } from 'date-fns'

interface CheckoutFormProps {
  room: Room
  date: string
  timeSlot: TimeSlot
  onBookingComplete: (bookingData: any) => void
}

// Inner form component that uses Stripe hooks
function CheckoutFormInner({ room, date, timeSlot, onBookingComplete }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  
  const [playerCount, setPlayerCount] = useState(room.minPlayers)
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [teamName, setTeamName] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const totalPrice = calculateTotalPrice(room, playerCount)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!stripe || !elements) {
      return
    }

    setProcessing(true)
    setError(null)

    try {
      // Confirm payment
      const { error: paymentError, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      })

      if (paymentError) {
        setError(paymentError.message || 'Payment failed')
        setProcessing(false)
        return
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Save booking data
        const bookingData = {
          roomId: room.id,
          date,
          timeSlot: timeSlot.id,
          playerCount,
          customerName,
          customerEmail,
          teamName: teamName || undefined,
          totalAmount: totalPrice,
          paymentIntentId: paymentIntent.id,
          status: 'confirmed' as const
        }

        const response = await fetch('/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        })

        if (response.ok) {
          const result = await response.json()
          onBookingComplete(result.booking)
        } else {
          setError('Booking confirmation failed')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setProcessing(false)
    }
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
          Complete Your Booking
        </h2>
        <p className="font-body text-light-muted dark:text-dark-muted">
          Enter your details and payment information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Summary */}
        <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
          <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-4">
            Booking Summary
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Room:</span>
              <span className="font-body text-light-text dark:text-dark-text font-semibold">{room.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Date:</span>
              <span className="font-body text-light-text dark:text-dark-text">{format(parseISO(date), 'EEEE, MMMM d, yyyy')}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Time:</span>
              <span className="font-body text-light-text dark:text-dark-text">{formatTimeSlot(timeSlot)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Duration:</span>
              <span className="font-body text-light-text dark:text-dark-text">{room.duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Players:</span>
              <span className="font-body text-light-text dark:text-dark-text">{playerCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-light-muted dark:text-dark-muted">Price per person:</span>
              <span className="font-body text-light-text dark:text-dark-text">{formatPrice(room.price)}</span>
            </div>
            <hr className="border-light-border dark:border-dark-border" />
            <div className="flex justify-between">
              <span className="font-body text-light-text dark:text-dark-text font-semibold">Total:</span>
              <span className="font-body text-light-gold dark:text-dark-gold font-bold text-lg">{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-light-card dark:bg-dark-surface rounded-lg p-6 border border-light-border dark:border-dark-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Player Count */}
            <div>
              <label className="block font-body text-light-text dark:text-dark-text mb-2">
                Number of Players *
              </label>
              <select
                value={playerCount}
                onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
              >
                {Array.from({ length: room.maxPlayers - room.minPlayers + 1 }, (_, i) => room.minPlayers + i).map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? 'player' : 'players'}
                  </option>
                ))}
              </select>
            </div>

            {/* Customer Name */}
            <div>
              <label className="block font-body text-light-text dark:text-dark-text mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Customer Email */}
            <div>
              <label className="block font-body text-light-text dark:text-dark-text mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Team Name (Optional) */}
            <div>
              <label className="block font-body text-light-text dark:text-dark-text mb-2">
                Team Name (Optional)
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
                placeholder="Enter a team name (optional)"
              />
            </div>

            {/* Payment Element */}
            <div>
              <label className="block font-body text-light-text dark:text-dark-text mb-2">
                Payment Information *
              </label>
              <div className="p-4 bg-light-hover dark:bg-dark-hover rounded-lg border border-light-border dark:border-dark-border">
                <PaymentElement />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="font-body text-red-600 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!stripe || processing}
              className={`
                w-full py-4 px-6 rounded-lg font-body font-semibold text-lg transition-colors
                ${processing
                  ? 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
                  : 'bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white'
                }
              `}
            >
              {processing ? 'Processing...' : `Complete Booking - ${formatPrice(totalPrice)}`}
            </button>

            {/* Stripe Badge */}
            <div className="text-center">
              <p className="font-body text-xs text-light-muted dark:text-dark-muted">
                🔒 Secured by Stripe
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Main component that handles payment intent creation and Elements wrapper
export default function CheckoutForm({ room, date, timeSlot, onBookingComplete }: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [playerCount, setPlayerCount] = useState(room.minPlayers)

  const totalPrice = calculateTotalPrice(room, playerCount)

  // Create payment intent when component mounts
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalPrice * 100, // Convert to cents
            currency: 'usd',
            metadata: {
              roomId: room.id,
              date,
              timeSlot: timeSlot.id,
              playerCount: playerCount.toString(),
              customerEmail: ''
            }
          }),
        })

        const result = await response.json()
        
        if (result.error) {
          setError(result.error)
        } else {
          setClientSecret(result.clientSecret)
        }
      } catch (err) {
        setError('Failed to initialize payment')
      } finally {
        setLoading(false)
      }
    }

    createPaymentIntent()
  }, [room.id, date, timeSlot.id, playerCount, totalPrice])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-light-gold dark:border-dark-gold mx-auto mb-4"></div>
        <p className="font-body text-light-muted dark:text-dark-muted">Initializing payment...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="font-heading text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
            Payment Setup Error
          </h3>
          <p className="font-body text-red-600 dark:text-red-400 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-12">
        <p className="font-body text-light-muted dark:text-dark-muted">Setting up payment...</p>
      </div>
    )
  }

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutFormInner
        room={room}
        date={date}
        timeSlot={timeSlot}
        onBookingComplete={onBookingComplete}
      />
    </Elements>
  )
} 