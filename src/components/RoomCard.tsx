interface RoomCardProps {
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  duration: string
  players: string
  price: string
  image: string
  available: boolean
}

export default function RoomCard({
  title,
  description,
  difficulty,
  duration,
  players,
  price,
  image,
  available
}: RoomCardProps) {
  const difficultyColors = {
    Easy: 'text-green-400',
    Medium: 'text-yellow-400',
    Hard: 'text-red-400'
  }

  return (
    <div className="bg-light-card dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-light-border dark:border-dark-border">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-light-gold dark:from-dark-gold to-light-gold/60 dark:to-dark-gold/60 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="font-heading text-2xl font-bold text-white text-center px-4">
            {title}
          </h3>
        </div>
        {!available && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-body">
            Booked
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-light-text dark:text-dark-text mb-4 line-clamp-3">
          {description}
        </p>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="font-body text-light-muted dark:text-dark-muted">Difficulty:</span>
            <span className={`font-body font-semibold ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-light-muted dark:text-dark-muted">Duration:</span>
            <span className="font-body text-light-text dark:text-dark-text">{duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-light-muted dark:text-dark-muted">Players:</span>
            <span className="font-body text-light-text dark:text-dark-text">{players}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-light-muted dark:text-dark-muted">Price:</span>
            <span className="font-body text-light-gold dark:text-dark-gold font-semibold">{price}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-body font-semibold transition-colors ${
            available
              ? 'bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white'
              : 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
          }`}
          disabled={!available}
        >
          {available ? 'Book Now' : 'Fully Booked'}
        </button>
      </div>
    </div>
  )
} 