import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { SHIPPING_RETURNS_CONTENT } from '../data/legal';

export default function ShippingReturns() {
  return (
    <div>
      <PageHero eyebrow={SHIPPING_RETURNS_CONTENT.eyebrow} heading={SHIPPING_RETURNS_CONTENT.heading} lastUpdated={SHIPPING_RETURNS_CONTENT.lastUpdated} />
      <LegalSections sections={SHIPPING_RETURNS_CONTENT.sections} />
    </div>
  );
}
