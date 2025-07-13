import RoomCard from '@/components/RoomCard'

const sampleRooms = [
  {
    title: "The Engineering Lab",
    description: "Navigate through a complex engineering laboratory filled with puzzles that test your problem-solving skills. Use your knowledge of physics, chemistry, and mathematics to escape.",
    difficulty: "Medium" as const,
    duration: "60 minutes",
    players: "2-6 players",
    price: "$25/person",
    image: "/rooms/engineering-lab.jpg",
    available: true
  },
  {
    title: "The Boilermaker Challenge",
    description: "The ultimate Purdue-themed escape room! Solve puzzles related to Purdue's history, traditions, and engineering legacy. Perfect for students and alumni.",
    difficulty: "Hard" as const,
    duration: "90 minutes",
    players: "4-8 players",
    price: "$30/person",
    image: "/rooms/boilermaker.jpg",
    available: true
  },
  {
    title: "The Foundry Mystery",
    description: "A beginner-friendly room set in an old foundry. Work together to uncover the secrets hidden within the walls and escape before time runs out.",
    difficulty: "Easy" as const,
    duration: "45 minutes",
    players: "2-4 players",
    price: "$20/person",
    image: "/rooms/foundry.jpg",
    available: false
  }
]

export default function BookPage() {
  return (
    <main className="min-h-screen bg-boiler text-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold text-goldplus mb-4">
            Book Your Adventure
          </h1>
          <p className="font-body text-xl text-foundry max-w-2xl mx-auto">
            Choose from our selection of Purdue-inspired escape rooms and book your next adventure.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleRooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>

        {/* Booking Info */}
        <div className="mt-16 bg-foundry rounded-lg p-8">
          <h2 className="font-heading text-3xl font-bold text-goldplus mb-6 text-center">
            Booking Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-ivory mb-4">
                What to Expect
              </h3>
              <ul className="space-y-2 font-body text-foundry">
                <li>• Arrive 15 minutes before your scheduled time</li>
                <li>• Wear comfortable clothing and closed-toe shoes</li>
                <li>• No phones or electronic devices allowed in rooms</li>
                <li>• All puzzles are designed for teamwork</li>
                <li>• Safety briefing provided before each session</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-ivory mb-4">
                Cancellation Policy
              </h3>
              <ul className="space-y-2 font-body text-foundry">
                <li>• Free cancellation up to 24 hours before</li>
                <li>• 50% refund for cancellations 2-24 hours before</li>
                <li>• No refunds for cancellations within 2 hours</li>
                <li>• Rescheduling available with 24-hour notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 