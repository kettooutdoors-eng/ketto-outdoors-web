import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { TERMS_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Terms() {
  useDocumentMeta(TERMS_CONTENT.meta.title, TERMS_CONTENT.meta.description, '/terms');
  return (
    <div>
      <PageHero eyebrow={TERMS_CONTENT.eyebrow} heading={TERMS_CONTENT.heading} lastUpdated={TERMS_CONTENT.lastUpdated} />
      <LegalSections sections={TERMS_CONTENT.sections} />
    </div>
  );
}
