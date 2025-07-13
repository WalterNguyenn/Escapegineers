export default function Footer() {
  return (
    <footer className="bg-boiler border-t border-foundry text-ivory">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-goldplus mb-4">
              Escapegineers
            </h3>
            <p className="font-body text-foundry mb-4">
              The ultimate Purdue-inspired escape room experience. 
              Test your engineering skills and solve challenging puzzles.
            </p>
            <p className="font-body text-goldplus">Boiler Up! 🚂</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-goldplus mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/book" className="font-body text-foundry hover:text-goldplus transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="font-body text-foundry hover:text-goldplus transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="/about" className="font-body text-foundry hover:text-goldplus transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="font-body text-foundry hover:text-goldplus transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-goldplus mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="font-body text-foundry">
                📧 info@escapegineers.com
              </p>
              <p className="font-body text-foundry">
                📞 (765) 555-0123
              </p>
              <p className="font-body text-foundry">
                📍 West Lafayette, IN
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foundry mt-8 pt-8 text-center">
          <p className="font-body text-foundry">
            © 2024 Escapegineers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 