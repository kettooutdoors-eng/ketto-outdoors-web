import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { PRIVACY_CONTENT } from '../data/legal';

export default function Privacy() {
  return (
    <div>
      <PageHero eyebrow={PRIVACY_CONTENT.eyebrow} heading={PRIVACY_CONTENT.heading} lastUpdated={PRIVACY_CONTENT.lastUpdated} />
      <LegalSections sections={PRIVACY_CONTENT.sections} />
    </div>
  );
}
