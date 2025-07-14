export default function AboutPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-16 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light-gold dark:text-dark-gold mb-4">
            About Escapegineers
          </h1>
          <p className="font-body text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Where engineering meets adventure
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 font-body text-light-muted dark:text-dark-muted">
              <p>
                Escapegineers is a student-led project born out of the Purdue EPICS 
                (Engineering Projects In Community Service) program. We&apos;re a 
                multidisciplinary team of Purdue engineers with a shared passion for 
                creativity, problem-solving, and community impact.
              </p>
              <p>
                Our mission? To design and build immersive escape room experiences that 
                challenge your mind while showcasing the exciting world of engineering. 
                Each puzzle in our escape room is crafted using principles from various 
                engineering fields. Through our escape room, you&apos;ll experience the 
                thrill of hands-on engineering in action.
              </p>
              <p>
                At its core, Escapegineering is about learning through play, inspiring 
                curiosity, and making engineering accessible and fun for everyone. 
                We&apos;re proud to bring this unique experience to life through the 
                EPICS program, where service learning meets real-world design.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-12 text-center border border-light-border dark:border-dark-border">
            <div className="w-24 h-24 bg-light-gold/20 dark:bg-dark-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📸</span>
            </div>
            <p className="font-body text-light-muted dark:text-dark-muted">
              Team photo will be added here
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-light-hover dark:bg-dark-hover rounded-lg p-8 mb-16 border border-light-border dark:border-dark-border">
          <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-light-gold dark:bg-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Innovation
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted">
                We bring creative engineering solutions to every puzzle and challenge
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-gold dark:bg-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Collaboration
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted">
                Teamwork is at the heart of both engineering and escape rooms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-light-gold dark:bg-dark-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-2">
                Learning
              </h3>
              <p className="font-body text-light-muted dark:text-dark-muted">
                Every experience is an opportunity to discover and grow
              </p>
            </div>
          </div>
        </div>

        {/* EPICS Program Info */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold mb-6">
            Proudly Part of Purdue EPICS
          </h2>
          <p className="font-body text-light-muted dark:text-dark-muted max-w-3xl mx-auto">
            The Engineering Projects In Community Service (EPICS) program connects 
            students with real-world projects that benefit the community. Through 
            Escapegineers, we&apos;re combining our engineering education with 
            creative problem-solving to create memorable experiences for everyone.
          </p>
          <div className="mt-8">
            <span className="font-heading text-2xl text-light-gold dark:text-dark-gold">Boiler Up! 🚂</span>
          </div>
        </div>
      </div>
    </div>
  )
} 