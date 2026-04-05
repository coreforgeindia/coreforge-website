const SESSION_KEY = 'coreforge-session-id'
const COOKIE_PREF_KEY = 'coreforge-cookie-preference'

function getSessionId() {
  const existing = localStorage.getItem(SESSION_KEY)
  if (existing) return existing

  const created = `cf_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  localStorage.setItem(SESSION_KEY, created)
  return created
}

export async function trackLeadEvent(eventType, extra = {}) {
  const endpoint = import.meta.env.VITE_LEADS_APPS_SCRIPT_URL
  if (!endpoint) return

  const payload = {
    eventType,
    sessionId: getSessionId(),
    cookiePreference: localStorage.getItem(COOKIE_PREF_KEY) || '',
    page: window.location.pathname + window.location.hash,
    referrer: document.referrer || '',
    utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
    utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
    utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
    deviceType: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
    browser: navigator.userAgent,
    language: navigator.language || '',
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    timeOnPage: Math.round(performance.now() / 1000),
    formName: extra.formName || '',
    leadEmail: extra.leadEmail || '',
    leadName: extra.leadName || '',
    metadata: extra.metadata || {},
  }

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // Tracking failures should never block the user flow.
  }
}
