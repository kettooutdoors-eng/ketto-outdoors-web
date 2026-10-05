export const WELCOME_CODE = 'WELCOME15';
export const WELCOME_PERCENT = 15;

const DISMISSED_KEY = 'ketto-welcome-dismissed';
const CLAIMED_KEY = 'ketto-welcome-code';
const SNOOZE_DAYS = 30;

export function getClaimedCode(): string | null {
  try {
    return localStorage.getItem(CLAIMED_KEY);
  } catch {
    return null;
  }
}

export function setClaimedCode() {
  try {
    localStorage.setItem(CLAIMED_KEY, WELCOME_CODE);
  } catch {
    /* ignore */
  }
}

/** True if the visitor already claimed the offer, or closed the pop-up recently. */
export function shouldSkipWelcome(): boolean {
  try {
    if (localStorage.getItem(CLAIMED_KEY)) return true;
    const dismissed = Number(localStorage.getItem(DISMISSED_KEY) || 0);
    return dismissed > 0 && Date.now() - dismissed < SNOOZE_DAYS * 86400000;
  } catch {
    return false;
  }
}

export function snoozeWelcome() {
  try {
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}
