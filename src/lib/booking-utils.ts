import { Room, TimeSlot } from './types'
import { format, addDays, startOfDay, isAfter, isBefore, parse, addMinutes } from 'date-fns'

export const AVAILABLE_ROOMS: Room[] = [
  {
    id: 'mung-chang-office',
    title: "Mung Chang's Office",
    description:
      "Navigate through Professor Mung Chang's mysterious office filled with engineering puzzles and challenges. Use your problem-solving skills to uncover the secrets hidden within.",
    difficulty: 'Medium',
    duration: 60,
    minPlayers: 3,
    maxPlayers: 5,
    price: 0,
    image: '/images/MungChang1.png',
    available: false,
  },
  {
    id: 'coming-soon-room',
    title: 'Coming Soon',
    description:
      'A new escape room experience is in development. Check back for puzzles, story, and opening details.',
    difficulty: 'Medium',
    duration: 60,
    minPlayers: 3,
    maxPlayers: 5,
    price: 0,
    image: '/images/NewRoom2.png',
    available: false,
  },
]

// Operating hours: Monday-Friday 12 PM - 7 PM
export const OPERATING_HOURS = {
  startHour: 12, // 12 PM
  endHour: 19, // 7 PM
  operatingDays: [1, 2, 3, 4, 5] // Monday to Friday (0 = Sunday)
}

// Generate time slots for a given date
export function generateTimeSlots(date: Date, roomDuration: number): TimeSlot[] {
  const slots: TimeSlot[] = []
  const dayOfWeek = date.getDay()
  
  // Check if it's an operating day
  if (!OPERATING_HOURS.operatingDays.includes(dayOfWeek)) {
    return slots
  }
  
  // Don't allow booking for past dates
  const today = startOfDay(new Date())
  if (isBefore(startOfDay(date), today)) {
    return slots
  }
  
  const dateStr = format(date, 'yyyy-MM-dd')
  
  // Generate slots from 12 PM to 7 PM with 1-hour intervals
  for (let hour = OPERATING_HOURS.startHour; hour < OPERATING_HOURS.endHour; hour++) {
    const startTime = `${hour.toString().padStart(2, '0')}:00`
    const endTime = format(addMinutes(parse(startTime, 'HH:mm', new Date()), roomDuration), 'HH:mm')
    
    // Make sure the session ends before closing time
    const endHour = parseInt(endTime.split(':')[0])
    if (endHour <= OPERATING_HOURS.endHour) {
      slots.push({
        id: `${dateStr}-${startTime}`,
        date: dateStr,
        startTime,
        endTime,
        available: true,
        maxCapacity: 5, // Max players for the room
        currentBookings: 0
      })
    }
  }
  
  return slots
}

// Get available dates for booking (next 30 days)
export function getAvailableDates(): Date[] {
  const dates: Date[] = []
  const today = new Date()
  
  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i)
    const dayOfWeek = date.getDay()
    
    // Only include operating days
    if (OPERATING_HOURS.operatingDays.includes(dayOfWeek)) {
      dates.push(date)
    }
  }
  
  return dates
}

// Calculate total price
export function calculateTotalPrice(room: Room, playerCount: number): number {
  return room.price * playerCount
}

// Format price for display
export function formatPrice(amount: number): string {
  if (amount === 0) return 'Free'
  return `$${amount.toFixed(2)}`
}

// Validate booking data
export function validateBookingData(data: {
  room?: Room
  date?: string
  timeSlot?: TimeSlot
  playerCount?: number
  customerName?: string
  customerEmail?: string
}): string[] {
  const errors: string[] = []
  
  if (!data.room) {
    errors.push('Please select a room')
  }
  
  if (!data.date) {
    errors.push('Please select a date')
  }
  
  if (!data.timeSlot) {
    errors.push('Please select a time slot')
  }
  
  if (!data.playerCount || data.playerCount < (data.room?.minPlayers || 1)) {
    errors.push(`Minimum ${data.room?.minPlayers || 1} players required`)
  }
  
  if (data.playerCount && data.room && data.playerCount > data.room.maxPlayers) {
    errors.push(`Maximum ${data.room.maxPlayers} players allowed`)
  }
  
  if (!data.customerName || data.customerName.trim().length < 2) {
    errors.push('Please enter a valid name')
  }
  
  if (!data.customerEmail || !isValidEmail(data.customerEmail)) {
    errors.push('Please enter a valid email address')
  }
  
  return errors
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Generate calendar file content
export function generateCalendarFile(booking: {
  room: Room
  date: string
  timeSlot: TimeSlot
  customerName: string
  teamName?: string
}): string {
  const startDateTime = new Date(`${booking.date}T${booking.timeSlot.startTime}:00`)
  const endDateTime = new Date(`${booking.date}T${booking.timeSlot.endTime}:00`)
  
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }
  
  const teamInfo = booking.teamName ? ` - Team: ${booking.teamName}` : ''
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Escapegineers//Booking System//EN
BEGIN:VEVENT
UID:${booking.date}-${booking.timeSlot.id}@escapegineers.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDateTime)}
DTEND:${formatDate(endDateTime)}
SUMMARY:Escape Room - ${booking.room.title}
DESCRIPTION:Your escape room booking at Escapegineers\\n\\nRoom: ${booking.room.title}\\nDate: ${booking.date}\\nTime: ${booking.timeSlot.startTime} - ${booking.timeSlot.endTime}\\nPlayer: ${booking.customerName}${teamInfo}\\n\\nLocation: Engineering Science & Technology Building\\n723 W Michigan St\\nIndianapolis, IN 46202\\n\\nContact: escapegineers@gmail.com
LOCATION:Engineering Science & Technology Building, 723 W Michigan St, Indianapolis, IN 46202
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: Escape Room in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`
} 