'use client'

import Image from 'next/image'
import { Room } from '@/lib/types'
import { formatPrice } from '@/lib/booking-utils'

interface RoomSelectProps {
  rooms: Room[]
  selectedRoom?: Room
  onRoomSelect: (room: Room) => void
}

export default function RoomSelect({ rooms, selectedRoom, onRoomSelect }: RoomSelectProps) {
  const getDifficultyColor = (difficulty: Room['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-500'
      case 'Medium':
        return 'text-yellow-500'
      case 'Hard':
        return 'text-red-500'
      default:
        return 'text-light-muted dark:text-dark-muted'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-light-text dark:text-dark-text mb-2">
          Choose Your Adventure
        </h2>
        <p className="font-body text-light-muted dark:text-dark-muted">
          Select the escape room experience you&apos;d like to book
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`
              bg-light-card dark:bg-dark-surface rounded-lg border-2 transition-all cursor-pointer
              ${selectedRoom?.id === room.id 
                ? 'border-light-gold dark:border-dark-gold shadow-lg' 
                : 'border-light-border dark:border-dark-border hover:border-light-gold/50 dark:hover:border-dark-gold/50'
              }
              ${!room.available ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => room.available && onRoomSelect(room)}
          >
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <Image src={room.image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                <h3 className="px-4 text-center font-heading text-xl font-bold text-white">{room.title}</h3>
              </div>
              {!room.available && (
                <div className="absolute right-4 top-4 rounded-full bg-neutral-900/85 px-3 py-1 font-body text-sm text-white">
                  Coming soon
                </div>
              )}
              {selectedRoom?.id === room.id && (
                <div className="absolute top-4 left-4 bg-light-gold dark:bg-dark-gold text-white px-3 py-1 rounded-full text-sm font-body">
                  Selected
                </div>
              )}
            </div>

            {/* Room Details */}
            <div className="p-6">
              <p className="font-body text-light-text dark:text-dark-text mb-4 text-sm line-clamp-3">
                {room.description}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-body text-light-muted dark:text-dark-muted">Difficulty:</span>
                  <span className={`font-body font-semibold ${getDifficultyColor(room.difficulty)}`}>
                    {room.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-light-muted dark:text-dark-muted">Duration:</span>
                  <span className="font-body text-light-text dark:text-dark-text">{room.duration} min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-light-muted dark:text-dark-muted">Players:</span>
                  <span className="font-body text-light-text dark:text-dark-text">{room.minPlayers}-{room.maxPlayers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-light-muted dark:text-dark-muted">Price:</span>
                  <span className="font-body font-semibold text-light-gold dark:text-dark-gold">
                    {room.price === 0 ? 'Free' : `${formatPrice(room.price)}/person`}
                  </span>
                </div>
              </div>

              {/* Select Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  if (room.available) onRoomSelect(room)
                }}
                disabled={!room.available}
                className={`
                  w-full mt-4 py-3 px-4 rounded-lg font-body font-semibold transition-colors
                  ${room.available
                    ? selectedRoom?.id === room.id
                      ? 'bg-light-gold dark:bg-dark-gold text-white'
                      : 'bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text hover:bg-light-gold/20 dark:hover:bg-dark-gold/20'
                    : 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
                  }
                `}
              >
                {!room.available
                  ? 'Coming soon'
                  : selectedRoom?.id === room.id
                    ? 'Selected'
                    : 'Select Room'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {rooms.length === 0 && (
        <div className="py-12 text-center">
          <h3 className="font-heading mb-2 text-2xl font-bold text-light-text dark:text-dark-text">
            No Rooms Available
          </h3>
          <p className="font-body text-light-muted dark:text-dark-muted">
            Check back later for available escape rooms!
          </p>
        </div>
      )}
    </div>
  )
} 