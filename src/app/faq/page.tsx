import Accordion from '@/components/Accordion'

export default function FAQPage() {
  const faqs = [
    {
      question: "How long is the escape room experience?",
      answer: "Our escape room experience lasts approximately 60 minutes. This includes a brief introduction, the escape room challenge itself, and a debrief session where we discuss the engineering concepts used in the puzzles."
    },
    {
      question: "Are we actually locked in the room?",
      answer: "No, you are never actually locked in! Safety is our top priority. The door remains unlocked at all times, and you can exit whenever you need to. The 'escape' refers to solving the puzzles and completing the challenge within the time limit."
    },
    {
      question: "Can kids participate?",
      answer: "Yes! We welcome participants of all ages. Children under 12 should be accompanied by an adult. Our puzzles are designed to be engaging for different skill levels, making it a great family activity."
    },
    {
      question: "How many people can play at once?",
      answer: "Our escape room is designed for teams of 3-6 players. This size allows for effective collaboration while ensuring everyone can actively participate in solving the engineering puzzles."
    },
    {
      question: "What if we get stuck on a puzzle?",
      answer: "Don't worry! Our game masters are monitoring your progress and will provide hints when needed. We want you to have fun and learn, not get frustrated. Hints are designed to guide you toward the solution without giving it away completely."
    },
    {
      question: "Do we need any special knowledge or skills?",
      answer: "No special engineering knowledge is required! While our puzzles are inspired by engineering principles, they're designed to be solved through logic, teamwork, and creative thinking. We'll explain any relevant concepts during the experience."
    },
    {
      question: "What should we wear?",
      answer: "Wear comfortable clothing and closed-toe shoes. You may need to move around, reach for objects, or crawl through spaces. Avoid loose jewelry or anything that might get caught. Business casual or casual attire works perfectly."
    },
    {
      question: "Can we bring phones or cameras?",
      answer: "For the best experience and to protect the puzzle solutions, personal electronic devices are not allowed in the escape room. We'll provide a secure place to store your belongings. Photos can be taken in our lobby before and after the experience."
    }
  ]

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-16 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light-gold dark:text-dark-gold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers! Find everything you need to know about your Escapegineers experience.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-light-card dark:bg-dark-surface rounded-lg p-8 border border-light-border dark:border-dark-border">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-light-hover dark:bg-dark-hover rounded-lg p-8 max-w-2xl mx-auto border border-light-border dark:border-dark-border">
            <h2 className="font-heading text-2xl font-bold text-light-gold dark:text-dark-gold mb-4">
              Still Have Questions?
            </h2>
            <p className="font-body text-light-muted dark:text-dark-muted mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help!
            </p>
            <div className="space-y-4">
              <a
                href="/contact"
                className="inline-block bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white font-body px-8 py-4 rounded-lg transition-colors mr-4"
              >
                Contact Us
              </a>
              <a
                href="mailto:escapegineers@gmail.com"
                className="inline-block bg-light-text hover:bg-light-text/80 dark:bg-dark-text dark:hover:bg-dark-text/80 text-light-bg dark:text-dark-bg font-body px-8 py-4 rounded-lg transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 