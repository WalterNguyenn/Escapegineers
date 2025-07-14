import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { PaymentIntentData } from '@/lib/stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey || stripeSecretKey === 'sk_test_placeholder') {
  console.error('STRIPE_SECRET_KEY is not properly configured. Please update .env.local with your actual Stripe secret key.')
}

// Only initialize Stripe if we have a real key
let stripe: Stripe | null = null
if (stripeSecretKey && stripeSecretKey !== 'sk_test_placeholder') {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2025-06-30.basil'
  })
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { 
          error: 'Stripe is not configured. Please add your Stripe secret key to .env.local',
          instructions: 'Update STRIPE_SECRET_KEY in .env.local with your actual Stripe secret key'
        },
        { status: 500 }
      )
    }

    const body: PaymentIntentData = await request.json()
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount,
      currency: body.currency,
      metadata: body.metadata,
      automatic_payment_methods: {
        enabled: true
      }
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
} 