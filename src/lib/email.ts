import nodemailer from 'nodemailer'
import { BookingData, Room, TimeSlot } from './types'

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'escapegineers@gmail.com',
    pass: process.env.EMAIL_PASSWORD || '', // App password for Gmail
  },
})

// Email templates
export const createBookingConfirmationEmail = (
  booking: BookingData,
  room: Room,
  timeSlot: TimeSlot
) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const subject = `Booking Confirmation - ${room.title} - ${formatDate(booking.date)}`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
      <style>
        body { font-family: Inter, system-ui, Arial, sans-serif; line-height: 1.6; color: #333; }
        h1, h2, h3 { font-family: Oswald, system-ui, Arial, sans-serif; font-weight: 600; letter-spacing: 0.03em; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #C29A3A; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #ddd; }
        .booking-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; color: #666; }
        .button { background: #C29A3A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0; }
        .location { background: #e8f4f8; padding: 15px; border-radius: 6px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmed</h1>
          <p>Your escape room adventure awaits</p>
        </div>
        
        <div class="content">
          <h2>Hello ${booking.customerName}!</h2>
          <p>Your booking for <strong>${room.title}</strong> has been confirmed. Get ready for an exciting engineering challenge!</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="detail-value">${booking.id}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Room:</span>
              <span class="detail-value">${room.title}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${formatDate(booking.date)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${formatTime(timeSlot.startTime)} - ${formatTime(timeSlot.endTime)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration:</span>
              <span class="detail-value">${room.duration} minutes</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Group Size:</span>
              <span class="detail-value">${booking.playerCount} players</span>
            </div>
            ${booking.teamName ? `
            <div class="detail-row">
              <span class="detail-label">Team Name:</span>
              <span class="detail-value">${booking.teamName}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Total Paid:</span>
              <span class="detail-value">$${booking.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <div class="location">
            <h3>Location &amp; Check-in</h3>
            <p><strong>Engineering Science & Technology Building</strong><br>
            723 W Michigan St<br>
            Indianapolis, IN 46202</p>
            <p><strong>Important:</strong> Please arrive 15 minutes early for check-in and briefing.</p>
          </div>
          
          <h3>What to Expect</h3>
          <ul>
            <li>Engineering-themed puzzles and challenges</li>
            <li>Team-based problem solving</li>
            <li>Learn while you play</li>
            <li>Compete for the leaderboard</li>
          </ul>
          
          <h3>What to Bring</h3>
          <ul>
            <li>Comfortable clothing and closed-toe shoes</li>
            <li>Your team spirit and problem-solving mindset</li>
            <li>This confirmation email (digital or printed)</li>
          </ul>
          
          <p>Questions? Contact us at <a href="mailto:escapegineers@gmail.com">escapegineers@gmail.com</a></p>
        </div>
        
        <div class="footer">
          <p>Thank you for choosing Escapegineers!</p>
          <p>Thank you for choosing Escapegineers.</p>
          <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}

export const createAdminNotificationEmail = (
  booking: BookingData,
  room: Room,
  timeSlot: TimeSlot
) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  const subject = `New Booking: ${booking.customerName} - ${formatDate(booking.date)}`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
      <style>
        body { font-family: Inter, system-ui, Arial, sans-serif; line-height: 1.6; color: #333; }
        h1, h2, h3 { font-family: Oswald, system-ui, Arial, sans-serif; font-weight: 600; letter-spacing: 0.03em; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #121212; color: #D4AF37; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #ddd; }
        .booking-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin: 8px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; color: #666; }
        .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 6px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Booking Alert</h1>
          <p>Admin Notification</p>
        </div>
        
        <div class="content">
          <div class="urgent">
            <strong>Action required:</strong> New booking received and confirmed. Please prepare for the session.
          </div>
          
          <div class="booking-details">
            <h3>Booking Information</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="detail-value">${booking.id}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Customer:</span>
              <span class="detail-value">${booking.customerName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${booking.customerEmail}</span>
            </div>
            ${booking.teamName ? `
            <div class="detail-row">
              <span class="detail-label">Team Name:</span>
              <span class="detail-value">${booking.teamName}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Room:</span>
              <span class="detail-value">${room.title}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${formatDate(booking.date)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${formatTime(timeSlot.startTime)} - ${formatTime(timeSlot.endTime)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Group Size:</span>
              <span class="detail-value">${booking.playerCount} players</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Amount Paid:</span>
              <span class="detail-value">$${booking.totalAmount.toFixed(2)}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment ID:</span>
              <span class="detail-value">${booking.paymentIntentId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Booked At:</span>
              <span class="detail-value">${new Date(booking.createdAt).toLocaleString()}</span>
            </div>
          </div>
          
          <h3>Preparation Checklist</h3>
          <ul>
            <li>Room setup and reset</li>
            <li>Equipment check</li>
            <li>Briefing materials ready</li>
            <li>Emergency procedures reviewed</li>
          </ul>
          
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Add to calendar/schedule</li>
            <li>Prepare room for ${booking.playerCount} players</li>
            <li>Review any special requirements</li>
          </ul>
        </div>
        
        <div class="footer">
          <p>Escapegineers Admin System</p>
          <p><small>This is an automated notification from the booking system.</small></p>
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}

export const createContactFormEmail = (formData: {
  name: string
  email: string
  message: string
}) => {
  const subject = `Contact Form: Message from ${formData.name}`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet" />
      <style>
        body { font-family: Inter, system-ui, Arial, sans-serif; line-height: 1.6; color: #333; }
        h1, h2, h3 { font-family: Oswald, system-ui, Arial, sans-serif; font-weight: 600; letter-spacing: 0.03em; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #121212; color: #D4AF37; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #ddd; }
        .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C29A3A; }
        .contact-info { background: #e8f4f8; padding: 15px; border-radius: 6px; margin: 15px 0; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Contact Form Message</h1>
          <p>New message from website</p>
        </div>
        
        <div class="content">
          <div class="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="message-box">
            <h3>Message</h3>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p><strong>Reply to:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        </div>
        
        <div class="footer">
          <p>Escapegineers Contact System</p>
          <p><small>This message was sent through the contact form on your website.</small></p>
        </div>
      </div>
    </body>
    </html>
  `

  return { subject, html }
}

// Send email function
export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `"Escapegineers" <${process.env.EMAIL_USER || 'escapegineers@gmail.com'}>`,
      to,
      subject,
      html,
    })
    
    console.log('Email sent successfully:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
} 