// Optional third-party form endpoint (e.g. a Formspree form URL: https://formspree.io/f/xxxxxxxx).
// Create a free account at formspree.io (or any service that accepts a JSON POST and emails you),
// make a form, and paste its endpoint here — submissions will then reach your inbox directly.
// Leave empty and every submission still gets saved locally as a fallback, but only on that
// visitor's own device — you won't see it.
export const LEAD_FORM_ENDPOINT = '';

// 'upgrade-credit' is PHASE 2 (see src/data/upgradeCredit.ts) — not reachable live yet,
// but kept in the union so the page still typechecks while it's built ahead of launch.
export type LeadType = 'newsletter' | 'stock-notify' | 'contact' | 'trade-in' | 'upgrade-credit';

interface LeadPayload {
  type: LeadType;
  email: string;
  [key: string]: string;
}

export async function submitLead(payload: LeadPayload) {
  saveLocalLead(payload);

  if (!LEAD_FORM_ENDPOINT) return;
  try {
    await fetch(LEAD_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Local copy above is still saved — nothing further to do if the network call fails.
  }
}

function saveLocalLead(payload: LeadPayload) {
  try {
    const list = JSON.parse(localStorage.getItem('ketto-leads') || '[]');
    list.push({ ...payload, date: new Date().toISOString() });
    localStorage.setItem('ketto-leads', JSON.stringify(list));
  } catch {
    /* ignore */
  }
}
