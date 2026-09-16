import { Link } from 'react-router-dom';
import { TinFrame } from './ui/TinFrame';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { PillSeal } from './ui/Seal';
import { BannerButton } from './ui/BannerButton';
import type { Bundle } from '../data/types';

export function BundleCard({ bundle }: { bundle: Bundle }) {
  return (
    <TinFrame shadow="lg">
      <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', width: '100%' }}>
        <div className="notch" style={{ position: 'absolute', inset: 8, border: '1.5px dashed rgba(36,26,16,.35)', pointerEvents: 'none' }} />
        <ImagePlaceholder label={bundle.imagePlaceholderAlt} />
        <PillSeal rotate={-2}>{bundle.components.length}-piece kit</PillSeal>
        <Link to={`/kits/${bundle.slug}`} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: '#1c1c1a' }}>
          {bundle.name}
        </Link>
        <p style={{ fontSize: 14, margin: 0 }}>{bundle.tagline}</p>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22 }}>${bundle.price.toFixed(2)}</div>
        <BannerButton to={`/kits/${bundle.slug}`} fill background="var(--forest)" color="var(--cream)">
          View the kit
        </BannerButton>
      </div>
    </TinFrame>
  );
}
