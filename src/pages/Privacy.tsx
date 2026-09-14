import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { PRIVACY_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Privacy() {
  useDocumentMeta(PRIVACY_CONTENT.meta.title, PRIVACY_CONTENT.meta.description, '/privacy');
  return (
    <div>
      <PageHero eyebrow={PRIVACY_CONTENT.eyebrow} heading={PRIVACY_CONTENT.heading} lastUpdated={PRIVACY_CONTENT.lastUpdated} />
      <LegalSections sections={PRIVACY_CONTENT.sections} />
    </div>
  );
}
