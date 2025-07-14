export default function Footer() {
  return (
    <footer className="bg-light-text dark:bg-dark-bg border-t border-light-border dark:border-dark-border text-white dark:text-dark-text">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-light-gold dark:text-dark-gold mb-4">
              Escapegineers
            </h3>
            <p className="font-body text-white/70 dark:text-dark-muted mb-4">
              A student-led project from Purdue EPICS. Experience engineering 
              through immersive escape room challenges that test your problem-solving 
              skills and teamwork.
            </p>
            <p className="font-body text-light-gold dark:text-dark-gold">Boiler Up! 🚂</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-light-gold dark:text-dark-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/book" className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="/about" className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-light-gold dark:text-dark-gold mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="font-body text-white/70 dark:text-dark-muted">
                📧 escapegineers@gmail.com
              </p>
              <p className="font-body text-white/70 dark:text-dark-muted">
                📍 Indianapolis, IN
              </p>
              <p className="font-body text-white/70 dark:text-dark-muted">
                🕒 Mon-Fri: 12 PM - 7 PM
              </p>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/escapegineers?igsh=MTdjczg1ZHp1cnRvZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/70 dark:text-dark-muted hover:text-light-gold dark:hover:text-dark-gold transition-colors"
                >
                  📱 @escapegineers
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-dark-border mt-8 pt-8 text-center">
          <p className="font-body text-white/70 dark:text-dark-muted">
            © 2024 Escapegineers. A Purdue EPICS Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 