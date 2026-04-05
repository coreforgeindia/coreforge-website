# Apps Script Setup

## 1. Contact + Quote Script

Use [APPS_SCRIPT_CONTACT_QUOTE.gs](/abs/path/not-applicable) as the code for the sheet:
`https://docs.google.com/spreadsheets/d/1kZKPslOLyuH9cm4Pc1UJYn77e3PwySRV31-7S6R1MDk/edit?gid=0#gid=0`

Sheet columns handled automatically:
- `timestamp`
- `formType`
- `name`
- `email`
- `phone`
- `service`
- `message`
- `details`
- `sourcePage`
- `mailToLeadSent`
- `mailToLeadSentAt`
- `mailToCompanySent`
- `mailToCompanySentAt`
- `mailStatus`
- `mailError`
- `payloadJson`

What it does:
- saves each contact/quotation row
- sends acknowledgement mail to the user
- sends company copy to `fgdhanush@gmail.com, coreforge.in@gmail.com`
- checks previous rows with `mailStatus`
- resends only rows where mail was not fully sent

Manual trigger you can add:
- Function name: `resendPendingEmails`
- Trigger type: time-driven, every 5 or 10 minutes

Deploy:
1. Open Apps Script from that sheet.
2. Replace default code with `APPS_SCRIPT_CONTACT_QUOTE.gs`.
3. Deploy as Web App.
4. Execute as: `Me`
5. Who has access: `Anyone`
6. Copy the Web App URL into `VITE_GOOGLE_APPS_SCRIPT_URL`

## 2. Leads + Cookies Script

Use [APPS_SCRIPT_LEADS_COOKIES.gs](/abs/path/not-applicable) for:
`https://docs.google.com/spreadsheets/d/1fQRinv2IqgCF02eajIz3sAqfDUf3rQm4vHKxtoS5tmY/edit?gid=0#gid=0`

Suggested event types:
- `cookie_accept`
- `cookie_essential`
- `page_view`
- `quote_submit`
- `contact_submit`

Deploy it the same way as another Web App and keep its Web App URL separately, for example:
- `VITE_LEADS_APPS_SCRIPT_URL`

## 4. Environment file

Create `.env` in the project root using:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/CONTACT_SCRIPT_DEPLOYMENT_ID/exec
VITE_LEADS_APPS_SCRIPT_URL=https://script.google.com/macros/s/LEADS_SCRIPT_DEPLOYMENT_ID/exec
```

## 3. Frontend Payload Examples

Contact:

```json
{
  "formType": "contact",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Need a business website",
  "sourcePage": "/contact"
}
```

Quotation:

```json
{
  "formType": "quotation",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "service": "Website Development",
  "details": "Need a quotation for a lead generation website",
  "sourcePage": "/contact#quote"
}
```

Lead/cookie:

```json
{
  "eventType": "cookie_accept",
  "sessionId": "cf_123456",
  "cookiePreference": "analytics",
  "page": "/",
  "referrer": "https://google.com",
  "utmSource": "google",
  "utmMedium": "organic",
  "utmCampaign": "",
  "deviceType": "mobile",
  "browser": "Chrome",
  "language": "en-IN",
  "screenWidth": 375,
  "screenHeight": 812,
  "timeOnPage": 18,
  "formName": "",
  "leadEmail": "",
  "leadName": "",
  "metadata": {
    "note": "custom extra fields here"
  }
}
```
