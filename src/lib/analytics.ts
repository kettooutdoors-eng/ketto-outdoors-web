// Set this once you have a GA4 property: Google Analytics > Admin > Data Streams > your
// web stream > Measurement ID (looks like "G-XXXXXXXXXX"). Leave empty and analytics stays
// fully off — no script loads, nothing is tracked.
export const GA_MEASUREMENT_ID = '';

const CONSENT_KEY = 'ketto-cookie-consent';

export type ConsentChoice = 'accepted' | 'declined';

export function getStoredConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* ignore */
  }
  if (choice === 'accepted') initAnalytics();
}

/** Only actually loads GA4 if the visitor has previously accepted the cookie banner
 *  (and GA_MEASUREMENT_ID is set — it isn't yet, so this is fully inert either way). */
export function initAnalyticsIfConsented() {
  if (getStoredConsent() === 'accepted') initAnalytics();
}

function initAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof document === 'undefined') return;
  if (document.getElementById('ga4-script')) return;

  const loader = document.createElement('script');
  loader.id = 'ga4-script';
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(loader);

  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA_MEASUREMENT_ID);
}
