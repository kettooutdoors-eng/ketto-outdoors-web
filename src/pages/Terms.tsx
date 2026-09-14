import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { TERMS_CONTENT } from '../data/legal';

export default function Terms() {
  return (
    <div>
      <PageHero eyebrow={TERMS_CONTENT.eyebrow} heading={TERMS_CONTENT.heading} lastUpdated={TERMS_CONTENT.lastUpdated} />
      <LegalSections sections={TERMS_CONTENT.sections} />
    </div>
  );
}
