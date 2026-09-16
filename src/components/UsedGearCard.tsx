import { TinFrame } from './ui/TinFrame';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { BannerButton } from './ui/BannerButton';
import { useCart } from '../state/CartContext';
import type { UsedGearItem } from '../data/usedGear';

const CONDITION_COLOR: Record<string, string> = {
  'Like New': 'var(--forest)',
  Good: 'var(--mustard)',
  Fair: 'var(--rust)',
};

export function UsedGearCard({ item }: { item: UsedGearItem }) {
  const { addToCart } = useCart();
  const savings = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

  return (
    <TinFrame shadow="lg">
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', width: '100%' }}>
        <div className="notch" style={{ position: 'absolute', inset: 8, border: '1.5px dashed rgba(36,26,16,.35)', pointerEvents: 'none' }} />
        <ImagePlaceholder label={item.imagePlaceholderAlt} />
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', background: CONDITION_COLOR[item.condition], color: 'var(--cream)', padding: '5px 10px', borderRadius: 12 }}>
            {item.condition}
          </span>
          <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', background: 'var(--parchment)', border: '1.5px solid var(--ink)', padding: '4px 10px', borderRadius: 12 }}>
            Quality-checked
          </span>
        </div>
        <div className="card-kicker">{item.category}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{item.name}</div>
        <p style={{ fontSize: 13, opacity: 0.75 }}>{item.conditionNote}</p>
        <p style={{ fontSize: 14 }}>{item.description}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 20 }}>${item.price.toFixed(2)}</span>
          <span style={{ fontSize: 13, opacity: 0.5, textDecoration: 'line-through' }}>${item.originalPrice.toFixed(2)}</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--forest)' }}>{savings}% off new</span>
        </div>
        <BannerButton fill background="var(--forest)" color="var(--cream)" onClick={() => addToCart(item.id)} style={{ marginTop: 6 }}>
          Add to cart
        </BannerButton>
      </div>
    </TinFrame>
  );
}
