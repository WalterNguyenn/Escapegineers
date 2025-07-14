import { NextRequest, NextResponse } from 'next/server'
import { createContactFormEmail, sendEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Create email content
    const { subject, html } = createContactFormEmail({ name, email, message })
    
    // Send email to admin
    const emailResult = await sendEmail('escapegineers@gmail.com', subject, html)
    
    if (emailResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully'
      })
    } else {
      console.error('Failed to send contact email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 