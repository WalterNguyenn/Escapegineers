import LeaderboardRow from '@/components/LeaderboardRow'

const sampleLeaderboard = [
  {
    rank: 1,
    playerName: "BoilerEngineer",
    score: 12500,
    time: "42:15",
    date: "2024-01-15",
    room: "The Boilermaker Challenge"
  },
  {
    rank: 2,
    playerName: "PurduePuzzleMaster",
    score: 11800,
    time: "45:32",
    date: "2024-01-14",
    room: "The Engineering Lab"
  },
  {
    rank: 3,
    playerName: "EscapeArtist2024",
    score: 11200,
    time: "48:07",
    date: "2024-01-13",
    room: "The Boilermaker Challenge"
  },
  {
    rank: 4,
    playerName: "LabRat",
    score: 10800,
    time: "50:23",
    date: "2024-01-12",
    room: "The Engineering Lab"
  },
  {
    rank: 5,
    playerName: "FoundryExplorer",
    score: 10200,
    time: "52:45",
    date: "2024-01-11",
    room: "The Foundry Mystery"
  },
  {
    rank: 6,
    playerName: "PuzzlePro",
    score: 9800,
    time: "55:12",
    date: "2024-01-10",
    room: "The Engineering Lab"
  },
  {
    rank: 7,
    playerName: "EscapeEnthusiast",
    score: 9400,
    time: "57:33",
    date: "2024-01-09",
    room: "The Boilermaker Challenge"
  },
  {
    rank: 8,
    playerName: "RoomRunner",
    score: 9000,
    time: "59:01",
    date: "2024-01-08",
    room: "The Foundry Mystery"
  }
]

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-boiler text-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-goldplus mb-4">
            Leaderboard
          </h1>
          <p className="font-body text-xl text-foundry max-w-2xl mx-auto">
            See who has conquered our escape rooms and achieved the fastest times.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-foundry rounded-lg p-6 text-center">
            <h3 className="font-heading text-2xl font-bold text-goldplus mb-2">
              Total Players
            </h3>
            <p className="font-body text-3xl font-bold text-ivory">1,247</p>
          </div>
          <div className="bg-foundry rounded-lg p-6 text-center">
            <h3 className="font-heading text-2xl font-bold text-goldplus mb-2">
              Escape Rate
            </h3>
            <p className="font-body text-3xl font-bold text-ivory">68%</p>
          </div>
          <div className="bg-foundry rounded-lg p-6 text-center">
            <h3 className="font-heading text-2xl font-bold text-goldplus mb-2">
              Average Time
            </h3>
            <p className="font-body text-3xl font-bold text-ivory">52:30</p>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-foundry rounded-lg overflow-hidden">
          <div className="p-6 border-b border-boiler">
            <h2 className="font-heading text-2xl font-bold text-goldplus">
              Top Performers
            </h2>
          </div>
          
          <div className="divide-y divide-boiler">
            {sampleLeaderboard.map((entry) => (
              <LeaderboardRow key={entry.rank} {...entry} />
            ))}
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-12 bg-foundry rounded-lg p-8">
          <h2 className="font-heading text-3xl font-bold text-goldplus mb-6 text-center">
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-goldplus rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ivory mb-2">
                Speed Demon
              </h3>
              <p className="font-body text-foundry">
                Completed a room in under 30 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ivory mb-2">
                Puzzle Master
              </h3>
              <p className="font-body text-foundry">
                Solved all puzzles without hints
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-foundry rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚂</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ivory mb-2">
                Boiler Up!
              </h3>
              <p className="font-body text-foundry">
                Completed all Purdue-themed rooms
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 