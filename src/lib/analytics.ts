// Set this once you have a GA4 property: Google Analytics > Admin > Data Streams > your
// web stream > Measurement ID (looks like "G-XXXXXXXXXX"). Leave empty and analytics stays
// fully off — no script loads, nothing is tracked.
export const GA_MEASUREMENT_ID = '';

export function initAnalytics() {
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
