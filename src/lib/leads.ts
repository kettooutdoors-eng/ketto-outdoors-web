// Formspree form that emails every submission to KettoOutdoors@gmail.com. Every submission is
// also saved locally as a fallback, but only on that visitor's own device.
export const LEAD_FORM_ENDPOINT = 'https://formspree.io/f/moejqzlr';

// 'upgrade-credit' is PHASE 2 (see src/data/upgradeCredit.ts) — not reachable live yet,
// but kept in the union so the page still typechecks while it's built ahead of launch.
export type LeadType = 'newsletter' | 'stock-notify' | 'contact' | 'trade-in' | 'upgrade-credit' | 'welcome-discount';

const SUBJECTS: Record<LeadType, string> = {
  newsletter: 'Newsletter sign-up',
  'stock-notify': 'Back-in-stock request',
  contact: 'Contact message',
  'trade-in': 'Trade-in request',
  'upgrade-credit': 'Upgrade credit request',
  'welcome-discount': 'Welcome discount sign-up',
};

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
      body: JSON.stringify({ _subject: `Ketto Outdoors — ${SUBJECTS[payload.type]}`, ...payload }),
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
