export default function Home() {
  return (
    <main className="min-h-screen bg-boiler text-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-heading text-6xl font-bold text-goldplus mb-8">
            Escapegineers
          </h1>
          <p className="font-body text-xl text-foundry mb-12 max-w-2xl mx-auto">
            Welcome to the ultimate Purdue-inspired escape room experience. 
            Test your engineering skills and solve challenging puzzles in this 
            immersive adventure.
          </p>
          <div className="space-y-4">
            <button className="bg-magenta hover:bg-magenta/80 text-white font-body px-8 py-3 rounded-lg transition-colors">
              Start Adventure
            </button>
            <div className="text-foundry">
              <p className="font-body">Boiler Up! 🚂</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 