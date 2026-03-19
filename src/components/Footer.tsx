export default function Footer() {
  return (
    <footer className="border-t border-light-border bg-light-text text-white dark:border-dark-border dark:bg-dark-bg dark:text-dark-text">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-2 font-heading text-xl font-bold text-light-gold dark:text-dark-gold md:text-2xl">
              Escapegineers{' '}
              <span className="text-base font-normal text-white/70 dark:text-dark-muted">[noun]</span>
            </h3>
            <p className="font-body text-sm italic text-white/60 dark:text-dark-muted">
              Pronunciation: es-cape-juh-neers
            </p>
            <p className="mt-4 font-heading text-sm font-semibold text-light-gold dark:text-dark-gold">
              Definition
            </p>
            <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-white/70 dark:text-dark-muted">
              A team of engineers who design, build, and manage escape room experiences—using
              engineering principles, technical problem-solving, and creative design to craft
              interactive, puzzle-based challenges for participants.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-light-gold dark:text-dark-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/book"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="/leaderboard"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold text-light-gold dark:text-dark-gold">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="font-body text-white/70 dark:text-dark-muted">escapegineers@gmail.com</p>
              <p className="font-body text-white/70 dark:text-dark-muted">Indianapolis, IN</p>
              <p className="font-body text-white/70 dark:text-dark-muted">Mon–Fri: 12 PM – 7 PM</p>
              <div className="mt-4">
                <a
                  href="https://www.instagram.com/escapegineers?igsh=MTdjczg1ZHp1cnRvZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/70 transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  @escapegineers on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center dark:border-dark-border">
          <p className="font-body text-white/70 dark:text-dark-muted">
            © 2026 Escapegineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
