# Nexora Digital

Responsive agency website built with React, TypeScript, Vite, Tailwind CSS, React Router and Lucide.

## Run locally

```sh
npm install
npm run dev
```

## Email enquiries

The contact form uses EmailJS's browser REST API and does not require a custom backend. To enable it:

1. Create an EmailJS email service and a template.
2. Set the template recipient to `nexoradigitalhub16@gmail.com` in the EmailJS dashboard. Keep it fixed rather than accepting a recipient from the browser.
3. Use these template variables where needed: `from_name`, `from_email`, `reply_to`, `phone`, `service`, and `message`. Set the template's reply-to field to `{{reply_to}}`.
4. Copy `.env.example` to `.env.local` and fill in the EmailJS Service ID, Template ID, and Public Key. These are public client identifiers; do not put a private key or access token in the frontend.
5. Restrict allowed origins in EmailJS to your deployed domain and local development origin. EmailJS account settings should also be configured with appropriate sending limits and spam controls.
6. Restart Vite after setting environment variables and submit a real test enquiry. For Vercel, add the same `VITE_EMAILJS_*` variables to project environment settings and redeploy.

Until all three variables are configured, the form reports that email delivery is unavailable and directs visitors to the displayed email and WhatsApp contacts. The form includes native required-field and email validation, a hidden honeypot, a loading state, duplicate-submit protection, and clear success/error feedback.

## Production build

```sh
npm run build
```
