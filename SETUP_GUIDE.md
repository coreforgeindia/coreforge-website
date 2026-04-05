# CoreForge Website - Setup Guide

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the website.

---

## Website Structure

### Pages
- `Home` (`/`)
- `About` (`/about`)
- `Services` (`/services`)
- `Products` (`/products`)
- `Company` (`/company`)
- `Contact` (`/contact`)
- `FAQ` (`/faqs`)
- `Privacy Policy` (`/privacy`)
- `Terms & Conditions` (`/terms`)

### Components
- `Navbar`
- `Footer`
- `CookieConsent`
- `TestimonialsSection`
- `AboutSection`

---

## Contact + Quotation Setup

This project uses a Google Apps Script Web App for form submissions.

### Sheet
Use this spreadsheet:

`https://docs.google.com/spreadsheets/d/1kZKPslOLyuH9cm4Pc1UJYn77e3PwySRV31-7S6R1MDk/edit?gid=0#gid=0`

### Script File
Paste this script into the Apps Script project bound to that sheet:

[APPS_SCRIPT_CONTACT_QUOTE.gs](./APPS_SCRIPT_CONTACT_QUOTE.gs)

### What It Does
- stores contact form submissions
- stores quotation form submissions
- sends acknowledgement email to the user
- sends company copy to `fgdhanush@gmail.com` and `coreforge.in@gmail.com`
- records `mailToLeadSent`, `mailToCompanySent`, `mailStatus`, and `mailError`
- supports retrying failed mails with `resendPendingEmails()`

### Deploy
1. Open the Apps Script project from the sheet.
2. Replace the code with `APPS_SCRIPT_CONTACT_QUOTE.gs`.
3. Click `Deploy` > `New deployment`.
4. Select `Web app`.
5. Execute as: `Me`.
6. Who has access: `Anyone`.
7. Copy the full `Web app URL`.

### Environment Variable
Add the copied URL to `.env`:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=YOUR_CONTACT_WEB_APP_URL
```

### Recommended Trigger
Add a time-driven trigger in Apps Script:
- Function: `resendPendingEmails`
- Frequency: every 5 or 10 minutes

This retries rows where mail delivery failed.

---

## Lead Capture + Cookie Tracking Setup

This project can log cookie choices and lead events into a separate Google Sheet.

### Sheet
Use this spreadsheet:

`https://docs.google.com/spreadsheets/d/1fQRinv2IqgCF02eajIz3sAqfDUf3rQm4vHKxtoS5tmY/edit?gid=0#gid=0`

### Script File
Paste this script into the Apps Script project bound to that sheet:

[APPS_SCRIPT_LEADS_COOKIES.gs](./APPS_SCRIPT_LEADS_COOKIES.gs)

### What It Captures
- cookie preference
- session ID
- current page
- referrer
- UTM source, medium, campaign
- browser and language
- screen width and height
- time on page
- form name
- lead name and lead email
- metadata JSON

### Deploy
1. Open the Apps Script project from the leads sheet.
2. Replace the code with `APPS_SCRIPT_LEADS_COOKIES.gs`.
3. Click `Deploy` > `New deployment`.
4. Select `Web app`.
5. Execute as: `Me`.
6. Who has access: `Anyone`.
7. Copy the full `Web app URL`.

### Environment Variable
Add the copied URL to `.env`:

```env
VITE_LEADS_APPS_SCRIPT_URL=YOUR_LEADS_WEB_APP_URL
```

---

## Environment File

Create a `.env` file in the project root:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=YOUR_CONTACT_WEB_APP_URL
VITE_LEADS_APPS_SCRIPT_URL=YOUR_LEADS_WEB_APP_URL
```

Example template is already available in:

[.env.example](./.env.example)

Restart the dev server after changing `.env`.

---

## Google Analytics 4

GA4 is already installed in `index.html`.

- Tracking ID: `G-ZVM42PGC2D`

### Tracks
- page visits
- engagement
- traffic sources
- conversions you define in GA4

---

## Google Search Console

### Verification File
This file is already placed in `public`:

[googlec727f387b79a758f.html](./public/googlec727f387b79a758f.html)

### Sitemap
This sitemap is already placed in `public`:

[sitemap.xml](./public/sitemap.xml)

Submit this in Search Console:

`https://coreforgeindia.info/sitemap.xml`

### Robots
This file is already placed in `public`:

[robots.txt](./public/robots.txt)

---

## Cookie Consent

Cookie consent is handled by:

[CookieConsent.jsx](./src/components/CookieConsent.jsx)

When users choose a cookie option, the site can log:
- `cookie_accept`
- `cookie_essential`

---

## Contact + Quote Events

The site currently sends these lead events:
- `contact_submit`
- `quote_submit`
- `cookie_accept`
- `cookie_essential`

Tracking helper file:

[tracking.js](./src/utils/tracking.js)

---

## Building for Production

```bash
npm run build
```

```bash
npm run preview
```

---

## Support

- Email: `coreforge.in@gmail.com`
- Phone: `+91 93808 41227`
- LinkedIn: `https://www.linkedin.com/company/coreforge-india/`
- Instagram: `https://www.instagram.com/core.forge.in/`

---

## Important Notes

1. Use the `Web app URL`, not the `Deployment ID`.
2. Contact and quotation forms share the same Apps Script endpoint.
3. Lead capture/cookie logging uses a separate Apps Script endpoint.
4. Restart Vite after editing `.env`.
5. For live production, deploy again after changing Apps Script code.

---

## Next Steps

1. Deploy the contact/quotation Apps Script.
2. Deploy the leads/cookies Apps Script.
3. Fill both URLs in `.env`.
4. Test contact form submission.
5. Test quotation form submission.
6. Check the sheet rows and email delivery status.
7. Submit sitemap in Google Search Console.
