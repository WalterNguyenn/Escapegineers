import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
let stripePromise: Promise<any> | null = null

if (publishableKey && publishableKey !== 'pk_test_placeholder') {
  stripePromise = loadStripe(publishableKey)
} else {
  console.warn('Stripe publishable key is not configured. Payment functionality will be disabled.')
}

export { stripePromise }

export const STRIPE_CONFIG = {
  publishableKey: publishableKey || '',
  secretKey: process.env.STRIPE_SECRET_KEY || ''
}

export interface PaymentIntentData {
  amount: number // in cents
  currency: string
  metadata: {
    roomId: string
    date: string
    timeSlot: string
    playerCount: string
    customerEmail: string
  }
} 