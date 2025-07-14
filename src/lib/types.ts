export interface Room {
  id: string
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  duration: number // in minutes
  minPlayers: number
  maxPlayers: number
  price: number // price per person
  image: string
  available: boolean
}

export interface TimeSlot {
  id: string
  date: string // ISO date string
  startTime: string // HH:MM format
  endTime: string // HH:MM format
  available: boolean
  maxCapacity: number
  currentBookings: number
}

export interface BookingData {
  id?: string
  roomId: string
  date: string
  timeSlot: string
  playerCount: number
  customerName: string
  customerEmail: string
  teamName?: string
  totalAmount: number
  paymentIntentId?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
}

export interface BookingStep {
  step: 1 | 2 | 3
  room?: Room
  date?: string
  timeSlot?: TimeSlot
  playerCount?: number
  customerName?: string
  customerEmail?: string
  teamName?: string
} 