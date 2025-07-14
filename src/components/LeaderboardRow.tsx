interface LeaderboardRowProps {
  rank: number
  playerName: string
  score: number
  time: string
  date: string
  room: string
}

export default function LeaderboardRow({
  rank,
  playerName,
  score,
  time,
  date,
  room
}: LeaderboardRowProps) {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-500 text-black'
      case 2:
        return 'bg-gray-400 text-black'
      case 3:
        return 'bg-amber-600 text-white'
      default:
        return 'bg-light-gold dark:bg-dark-gold text-white'
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-light-card dark:bg-dark-surface border-b border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition-colors">
      {/* Rank */}
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-body font-bold text-sm ${getRankColor(rank)}`}>
          {rank}
        </div>
        <div>
          <h4 className="font-body font-semibold text-light-text dark:text-dark-text">{playerName}</h4>
          <p className="font-body text-sm text-light-muted dark:text-dark-muted">{room}</p>
        </div>
      </div>

      {/* Score and Time */}
      <div className="text-right">
        <div className="font-body font-bold text-light-gold dark:text-dark-gold text-lg">
          {score.toLocaleString()} pts
        </div>
        <div className="font-body text-sm text-light-muted dark:text-dark-muted">
          {time} • {date}
        </div>
      </div>
    </div>
  )
} 