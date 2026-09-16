import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { COOKIE_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Cookies() {
  useDocumentMeta(COOKIE_CONTENT.meta.title, COOKIE_CONTENT.meta.description, '/cookies');
  return (
    <div>
      <PageHero eyebrow={COOKIE_CONTENT.eyebrow} heading={COOKIE_CONTENT.heading} lastUpdated={COOKIE_CONTENT.lastUpdated} />
      <LegalSections sections={COOKIE_CONTENT.sections} />
    </div>
  );
}
