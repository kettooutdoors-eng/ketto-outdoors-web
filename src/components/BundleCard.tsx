import { Link } from 'react-router-dom';
import { TinFrame } from './ui/TinFrame';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { PillSeal } from './ui/Seal';
import { BannerButton } from './ui/BannerButton';
import type { Bundle } from '../data/types';
import { formatPrice } from '../lib/format';

export function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <TinFrame shadow="lg" innerClassName="card-lift">
      <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', width: '100%' }}>
        <ImagePlaceholder label={bundle.imagePlaceholderAlt} />
        <PillSeal>{bundle.components.length}-piece kit</PillSeal>
        <Link to={`/kits/${bundle.slug}`} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: '#1c1c1a' }}>
          {bundle.name}
        </Link>
        <p style={{ fontSize: 14, margin: 0 }}>{bundle.tagline}</p>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22 }}>{formatPrice(bundle.price)}</div>
        <BannerButton to={`/kits/${bundle.slug}`} fill background="var(--forest)" color="var(--cream)" style={{ marginTop: 'auto' }}>
          View the kit
        </BannerButton>
      </div>
    </TinFrame>
  );
}
