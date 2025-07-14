import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors">
      {/* Hero Section - Full width with clean background */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-hover dark:from-dark-hover to-light-gold/20 dark:to-dark-gold/20">
          <div className="absolute inset-0 bg-light-text/5 dark:bg-dark-bg/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-6">
            Can your crew beat the clock?
          </h1>
          <p className="font-body text-xl md:text-2xl text-light-muted dark:text-dark-muted mb-8 max-w-3xl mx-auto">
            Experience the ultimate Purdue-inspired escape room adventure. Test your engineering skills, solve challenging puzzles, and discover if you have what it takes to escape before time runs out.
          </p>
          <Link
            href="/book"
            className="inline-block bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-12 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text text-center mb-16">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* College Crews & Clubs */}
            <div className="text-center">
              <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 mb-6 h-64 flex items-center justify-center border border-light-border dark:border-dark-border">
                <div className="w-24 h-24 bg-light-gold/20 dark:bg-dark-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                College Crews & Clubs
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted leading-relaxed">
                Pull your roommates, campus club, or Friday night crew together and take on an escape challenge built for legends. Whether you&apos;re looking to pregame with puzzles or settle dorm rivalries once and for all, our rooms offer the perfect mix of chaos, pressure, and bragging rights. Plus, you can track your time and compete for the leaderboard — Boiler Up.
              </p>
            </div>

            {/* Engineers & Puzzle Pros */}
            <div className="text-center">
              <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 mb-6 h-64 flex items-center justify-center border border-light-border dark:border-dark-border">
                <div className="w-24 h-24 bg-light-gold/20 dark:bg-dark-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">⚙️</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                Engineers & Puzzle Pros
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted leading-relaxed">
                Built for minds that love systems, logic, and a little stress. If you see riddles as warm-ups and teamwork as a design challenge, you&apos;ll love our rooms. Perfect for engineering students, puzzle hunters, and escape room veterans looking for thoughtful, layered game design that rewards creativity and precision.
              </p>
            </div>

            {/* Families & Game Night Fans */}
            <div className="text-center">
              <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 mb-6 h-64 flex items-center justify-center border border-light-border dark:border-dark-border">
                <div className="w-24 h-24 bg-light-gold/20 dark:bg-dark-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍👩‍👧</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                Families & Game Night Fans
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted leading-relaxed">
                Every age. Every role. Every laugh. Whether it&apos;s your weekend family outing or a special celebration, our escape rooms turn group problem-solving into a shared memory. With rooms designed to include everyone — from teens to grandparents — you&apos;ll leave with inside jokes and a story to tell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-light-hover dark:bg-dark-hover border-y border-light-border dark:border-dark-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="font-body text-light-muted dark:text-dark-muted">
              <span className="text-light-gold dark:text-dark-gold text-2xl">★★★★★</span>
              <p className="text-sm mt-1">Reviews Coming Soon</p>
            </div>
            <div className="font-body text-light-muted dark:text-dark-muted">
              <span className="text-light-gold dark:text-dark-gold font-bold text-2xl">#1</span>
              <p className="text-sm mt-1">Ranked Escape Room</p>
            </div>
            <div className="font-body text-light-muted dark:text-dark-muted">
              <span className="text-light-gold dark:text-dark-gold font-bold text-2xl">250+</span>
              <p className="text-sm mt-1">Future Players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Room */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text text-center mb-16">
            Our Escape Room
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="bg-light-card dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-light-border dark:border-dark-border">
                {/* Image placeholder */}
                <div className="h-64 bg-gradient-to-br from-light-hover dark:from-dark-hover to-light-gold/20 dark:to-dark-gold/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-light-gold/20 dark:bg-dark-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🔧</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text mb-2">
                    Mung Chang&apos;s Office
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-light-gold/20 dark:bg-dark-gold/20 text-light-gold dark:text-dark-gold px-3 py-1 rounded-full text-sm font-semibold">
                      Medium
                    </span>
                    <span className="text-light-muted dark:text-dark-muted text-sm">3-5 players</span>
                    <span className="text-light-muted dark:text-dark-muted text-sm">60 min</span>
                  </div>
                  <p className="font-body text-light-muted dark:text-dark-muted mb-6 leading-relaxed">
                    Step into Professor Mung Chang&apos;s mysterious office and solve engineering puzzles to escape before time runs out.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-2xl font-bold text-light-text dark:text-dark-text">$5</span>
                    <Link
                      href="/book"
                      className="bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-6 py-2 rounded-lg transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say Section */}
      <section className="py-20 px-4 bg-light-hover dark:bg-dark-hover">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-16">
            What People Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 shadow-lg border border-light-border dark:border-dark-border">
              <div className="font-body text-xl text-light-muted dark:text-dark-muted italic mb-6 leading-relaxed">
                &ldquo;Reviews and testimonials will appear here once we have active players. 
                Be among the first to experience our escape room!&rdquo;
              </div>
              <p className="font-body text-light-gold dark:text-dark-gold font-semibold">- Future Escapegineers</p>
            </div>
            {/* Placeholder for review platform logos */}
            <div className="mt-8 flex justify-center items-center gap-8 opacity-50">
              <div className="text-light-muted dark:text-dark-muted text-sm">Google Reviews</div>
              <div className="text-light-muted dark:text-dark-muted text-sm">•</div>
              <div className="text-light-muted dark:text-dark-muted text-sm">Yelp</div>
              <div className="text-light-muted dark:text-dark-muted text-sm">•</div>
              <div className="text-light-muted dark:text-dark-muted text-sm">TripAdvisor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
            Fastest Teams This Week
          </h2>
          <p className="font-body text-xl text-light-muted dark:text-dark-muted mb-8">
            Think you can beat the best? Check out today&apos;s top escape teams!
          </p>
          <Link
            href="/leaderboard"
            className="inline-block bg-light-text dark:bg-dark-text hover:bg-light-text/80 dark:hover:bg-dark-text/80 text-light-bg dark:text-dark-bg font-body px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See the Leaderboard →
          </Link>
        </div>
      </section>

      {/* Call to Action Footer Strip */}
      <section className="py-16 px-4 bg-light-gold dark:bg-dark-gold">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to escape the ordinary?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your adventure today and discover what makes Escapegineers the ultimate engineering challenge.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white hover:bg-light-hover text-light-text font-body px-12 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
} 