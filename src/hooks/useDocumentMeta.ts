import { useEffect } from 'react';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SITE_NAME = 'Ketto Outdoors';
// TODO: switch to the real domain (e.g. https://www.kettooutdoors.com) once it's registered
// and pointed at the site — kettooutdoors.com doesn't resolve yet, so these tags target the
// actual live URL in the meantime so link previews and canonical tags aren't broken.
export const SITE_URL = 'https://kettooutdoors-eng.github.io/ketto-outdoors-web';

/** Sets document title, meta description, canonical URL, and OG/Twitter tags for the current route. */
export function useDocumentMeta(title: string, description: string, path = '', noIndex = false) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noIndex ? 'noindex,follow' : 'index,follow');
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', `${SITE_URL}${path}`);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertCanonical(`${SITE_URL}${path}`);
  }, [title, description, path, noIndex]);
}
