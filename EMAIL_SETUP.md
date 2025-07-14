# Email Configuration Setup

## Overview
The Escapegineers booking system includes email functionality for:
- **Contact Form**: Messages sent to escapegineers@gmail.com
- **Booking Confirmations**: Automatic emails sent to customers after booking
- **Admin Notifications**: Alerts sent to escapegineers@gmail.com for new bookings

## Gmail SMTP Configuration

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Google Account settings → Security
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" as the app
4. Select "Other" as the device and name it "Escapegineers Website"
5. Copy the 16-character app password (format: xxxx xxxx xxxx xxxx)

### Step 3: Update Environment Variables
Replace the placeholder in `.env.local`:

```env
# Email Configuration
EMAIL_USER=escapegineers@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
```

**Important**: Use the 16-character app password, NOT your regular Gmail password.

### Step 4: Test Email Functionality
1. Restart your development server: `npm run dev`
2. Test the contact form at `/contact`
3. Test booking confirmations by completing a booking

## Email Templates

The system includes professional HTML email templates:

### Customer Booking Confirmation
- **Subject**: "Booking Confirmation - [Room] - [Date]"
- **Content**: Booking details, location, what to expect, what to bring
- **Styling**: Professional layout with Escapegineers branding

### Admin Booking Notification
- **Subject**: "New Booking: [Customer] - [Date]"
- **Content**: Full booking details, preparation checklist, action items
- **Styling**: Admin-focused layout with urgent alerts

### Contact Form Messages
- **Subject**: "Contact Form: Message from [Name]"
- **Content**: Contact details and message
- **Styling**: Clean, professional format

## Troubleshooting

### Common Issues

**Email not sending**:
- Check that 2FA is enabled on Gmail account
- Verify app password is correct (16 characters)
- Ensure EMAIL_USER matches the Gmail account that generated the app password
- Check server logs for detailed error messages

**App password not working**:
- Make sure you're using the app password, not your regular Gmail password
- Regenerate the app password if needed
- Verify the Gmail account has 2FA enabled

**Emails going to spam**:
- This is normal for development/testing
- In production, consider using a dedicated email service like SendGrid or AWS SES
- Add SPF/DKIM records to your domain for better deliverability

### Development vs Production

**Development**:
- Uses Gmail SMTP directly
- Emails may go to spam folders
- Suitable for testing and demonstration

**Production Recommendations**:
- Use a dedicated email service (SendGrid, AWS SES, etc.)
- Set up proper DNS records (SPF, DKIM, DMARC)
- Use a dedicated sending domain
- Implement email queuing for better reliability

## Security Notes

- Never commit the app password to version control
- The `.env.local` file is already in `.gitignore`
- Use environment variables for all sensitive data
- Consider using a dedicated email service for production

## Testing Checklist

- [ ] Contact form sends emails to escapegineers@gmail.com
- [ ] Booking confirmations are sent to customers
- [ ] Admin notifications are sent for new bookings
- [ ] Email templates display correctly
- [ ] All emails include proper branding and formatting
- [ ] No sensitive information is exposed in emails 