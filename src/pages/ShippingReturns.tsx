import { PageHero } from '../components/ui/PageHero';
import { LegalSections } from '../components/ui/LegalSections';
import { SHIPPING_RETURNS_CONTENT } from '../data/legal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ShippingReturns() {
  useDocumentMeta(SHIPPING_RETURNS_CONTENT.meta.title, SHIPPING_RETURNS_CONTENT.meta.description, '/shipping-returns');
  return (
    <div>
      <PageHero eyebrow={SHIPPING_RETURNS_CONTENT.eyebrow} heading={SHIPPING_RETURNS_CONTENT.heading} lastUpdated={SHIPPING_RETURNS_CONTENT.lastUpdated} />
      <LegalSections sections={SHIPPING_RETURNS_CONTENT.sections} />
    </div>
  );
}
