import { NextRequest, NextResponse } from 'next/server'
import { BookingData } from '@/lib/types'
import { AVAILABLE_ROOMS, generateTimeSlots } from '@/lib/booking-utils'
import { createBookingConfirmationEmail, createAdminNotificationEmail, sendEmail } from '@/lib/email'

// In a real app, this would connect to a database
// For now, we'll simulate saving to storage
const bookings: BookingData[] = []

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json()

    const room = AVAILABLE_ROOMS.find(r => r.id === bookingData.roomId)
    if (!room || !room.available) {
      return NextResponse.json({ error: 'This room is not open for booking yet.' }, { status: 400 })
    }

    const newBooking: BookingData = {
      ...bookingData,
      id: generateBookingId(),
      createdAt: new Date(),
      status: 'confirmed',
    }

    bookings.push(newBooking)

    const timeSlots = generateTimeSlots(new Date(newBooking.date), room.duration)
    const timeSlot = timeSlots.find(ts => ts.id === newBooking.timeSlot)
    
    if (timeSlot) {
      // Send confirmation email to customer
      const customerEmail = createBookingConfirmationEmail(newBooking, room, timeSlot)
      const customerEmailResult = await sendEmail(
        newBooking.customerEmail,
        customerEmail.subject,
        customerEmail.html
      )
      
      if (!customerEmailResult.success) {
        console.error('Failed to send customer confirmation email:', customerEmailResult.error)
      }
      
      // Send notification email to admin
      const adminEmail = createAdminNotificationEmail(newBooking, room, timeSlot)
      const adminEmailResult = await sendEmail(
        'escapegineers@gmail.com',
        adminEmail.subject,
        adminEmail.html
      )
      
      if (!adminEmailResult.success) {
        console.error('Failed to send admin notification email:', adminEmailResult.error)
      }
    }
    
    return NextResponse.json({
      success: true,
      booking: newBooking
    })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const date = url.searchParams.get('date')
    const roomId = url.searchParams.get('roomId')
    
    // Filter bookings by date and room if specified
    let filteredBookings = bookings
    
    if (date) {
      filteredBookings = filteredBookings.filter(booking => booking.date === date)
    }
    
    if (roomId) {
      filteredBookings = filteredBookings.filter(booking => booking.roomId === roomId)
    }
    
    return NextResponse.json({
      bookings: filteredBookings
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

function generateBookingId(): string {
  return 'booking_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
} 