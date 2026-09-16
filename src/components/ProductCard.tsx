import { Link } from 'react-router-dom';
import { TinFrame } from './ui/TinFrame';
import { ImagePlaceholder } from './ui/ImagePlaceholder';
import { BannerButton } from './ui/BannerButton';
import { useCart } from '../state/CartContext';
import type { ShopCatalogItem } from '../data/shop';

const DIFFICULTY_COLOR: Record<string, string> = {
  Beginner: 'var(--forest)',
  Intermediate: 'var(--mustard)',
  Advanced: 'var(--rust)',
};

// Stock status only shows on the product detail page (see Product.tsx) — cards
// throughout the rest of the site (shop grid, related products, etc.) always
// offer Add to cart regardless of real inventory.
export function ProductCard({ item }: { item: ShopCatalogItem }) {
  const { addToCart } = useCart();

  return (
    <TinFrame shadow="lg">
      <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', width: '100%' }}>
        <div className="notch" style={{ position: 'absolute', inset: 8, border: '1.5px dashed rgba(36,26,16,.35)', pointerEvents: 'none' }} />

        <ImagePlaceholder label={item.name} />

        <div className="card-kicker">{item.kicker}</div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.06em',
              background: 'var(--mustard)',
              color: 'var(--ink)',
              padding: '5px 10px',
              borderRadius: 12,
            }}
          >
            {item.type}
          </span>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '.06em',
              background: DIFFICULTY_COLOR[item.difficultyLabel] || 'var(--forest)',
              color: 'var(--parchment)',
              padding: '5px 10px',
              borderRadius: 12,
            }}
          >
            {item.difficultyLabel} ({item.difficultyScore}/10)
          </span>
        </div>

        <Link to={`/product/${item.id}`} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
          {item.name}
        </Link>
        <div style={{ fontSize: 12, letterSpacing: '.04em', color: 'var(--ink)', opacity: 0.7 }}>Target fish: {item.targetFish}</div>
        <p style={{ fontSize: 14, textWrap: 'pretty' as never }}>{item.description}</p>

        <div style={{ marginTop: 4 }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 18 }}>${item.price.toFixed(2)}</span>
        </div>

        <BannerButton fill background="var(--forest)" color="var(--cream)" onClick={() => addToCart(item.id)} style={{ marginTop: 6 }}>
          Add to cart
        </BannerButton>
      </div>
    </TinFrame>
  );
}
