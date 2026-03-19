'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text py-16 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-light-gold dark:text-dark-gold mb-4">
            Contact Us
          </h1>
          <p className="font-body text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Ready to escape? Have questions? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold mb-8">
              Get In Touch
            </h2>

            {/* Contact Details */}
            <div className="mb-8 space-y-6">
              <div className="border-l-2 border-light-gold pl-4 dark:border-dark-gold">
                <h3 className="font-heading mb-1 text-lg font-semibold text-light-text dark:text-dark-text">
                  Location
                </h3>
                <p className="font-body text-light-muted dark:text-dark-muted">
                  Engineering Science &amp; Technology Building
                  <br />
                  723 W Michigan St
                  <br />
                  Indianapolis, IN 46202
                </p>
              </div>

              <div className="border-l-2 border-light-gold pl-4 dark:border-dark-gold">
                <h3 className="font-heading mb-1 text-lg font-semibold text-light-text dark:text-dark-text">
                  Email
                </h3>
                <a
                  href="mailto:escapegineers@gmail.com"
                  className="font-body text-light-muted transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  escapegineers@gmail.com
                </a>
              </div>

              <div className="border-l-2 border-light-gold pl-4 dark:border-dark-gold">
                <h3 className="font-heading mb-1 text-lg font-semibold text-light-text dark:text-dark-text">
                  Hours
                </h3>
                <p className="font-body text-light-muted dark:text-dark-muted">
                  Monday – Friday: 12 PM – 7 PM
                  <br />
                  Saturday – Sunday: Closed
                </p>
              </div>

              <div className="border-l-2 border-light-gold pl-4 dark:border-dark-gold">
                <h3 className="font-heading mb-1 text-lg font-semibold text-light-text dark:text-dark-text">
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/escapegineers?igsh=MTdjczg1ZHp1cnRvZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-light-muted transition-colors hover:text-light-gold dark:text-dark-muted dark:hover:text-dark-gold"
                >
                  @escapegineers on Instagram
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-surface shadow-md">
              <h3 className="font-heading border-b border-light-border dark:border-dark-border bg-light-hover/50 px-4 py-3 text-lg font-semibold text-light-text dark:text-dark-text dark:bg-dark-hover/50">
                Find us
              </h3>
              <iframe
                title="Map — Engineering Science & Technology Building, Indianapolis"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.1762%2C39.7709%2C-86.1711%2C39.7735&layer=mapnik&marker=39.77217,-86.17363"
                className="h-72 w-full min-h-[16rem] border-0 bg-light-hover dark:bg-dark-hover"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="border-t border-light-border dark:border-dark-border px-4 py-3 font-body text-xs text-light-muted dark:text-dark-muted">
                <a
                  href="https://www.openstreetmap.org/?mlat=39.77217&mlon=-86.17363#map=17/39.77217/-86.17363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gold underline decoration-light-gold/40 underline-offset-2 hover:text-light-text dark:text-dark-gold dark:decoration-dark-gold/40 dark:hover:text-dark-text"
                >
                  Open full map
                </a>
                <span className="mx-2 text-light-border dark:text-dark-border">·</span>
                723 W Michigan St, Indianapolis, IN 46202
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold mb-8">
              Send Us a Message
            </h2>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="font-body text-green-600 dark:text-green-400">
                  Message sent successfully. We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="font-body text-red-600 dark:text-red-400">
                  Failed to send message. Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-light-text dark:text-dark-text mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-light-text dark:text-dark-text mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-light-text dark:text-dark-text mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-light-hover dark:bg-dark-hover border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:border-light-gold dark:focus:border-dark-gold transition-colors resize-vertical"
                  placeholder="Tell us about your questions, booking inquiries, or feedback..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-body font-semibold text-lg transition-colors ${
                  isSubmitting
                    ? 'bg-light-muted dark:bg-dark-muted text-light-muted dark:text-dark-muted cursor-not-allowed'
                    : 'bg-light-gold hover:bg-light-gold/80 dark:bg-dark-gold dark:hover:bg-dark-gold/80 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 