import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../data/products';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import { PillSeal } from '../components/ui/Seal';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { StockLabel } from '../components/ui/Misc';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../state/CartContext';
import { useInventory } from '../state/InventoryContext';
import { ALL_SHOP_ITEMS } from '../data/shop';
import NotFound from './NotFound';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;
  const { addToCart } = useCart();
  const { get } = useInventory();
  const [selectedColor, setSelectedColor] = useState<string | null>(product?.colorOptions?.[0] ?? null);
  const [selectedSize, setSelectedSize] = useState<string | null>(product?.sizeOptions?.[0] ?? null);

  if (!product) return <NotFound />;

  const qty = get(product.id);
  const inStock = qty > 0;
  const needsSelection = (product.colorOptions && !selectedColor) || (product.sizeOptions && !selectedSize);

  return (
    <div>
      <div style={{ padding: '18px 40px 0', fontSize: 12, opacity: 0.65 }}>
        <Link to="/shop" style={{ color: 'var(--ink)' }}>
          Shop
        </Link>{' '}
        / {product.name}
      </div>

      <div style={{ padding: '24px 40px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="grid-2">
        <div>
          <ImagePlaceholder label={product.imagePlaceholderAlt} height={420} rotate={-1} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card-kicker">{product.kicker}</div>
          {product.difficulty && <PillSeal rotate={-2}>{`Difficulty: ${product.difficulty.label} (${product.difficulty.number}/${product.difficulty.outOf})`}</PillSeal>}
          <h1 style={{ fontSize: 38 }}>{product.displayNameFull}</h1>
          {product.targetSpecies && <div style={{ fontSize: 13, opacity: 0.75 }}>Target species: {product.targetSpecies}</div>}
          {product.bestFor && <div style={{ fontSize: 13, opacity: 0.75 }}>Best for: {product.bestFor}</div>}

          <p style={{ fontSize: 15, lineHeight: 1.6 }}>{product.shortDescription}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 28 }}>${product.price.toFixed(2)}</span>
            <StockLabel qty={qty} />
          </div>

          {product.colorOptions && (
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kicker)', fontWeight: 700, marginBottom: 8 }}>Color</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {product.colorOptions.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    style={{
                      padding: '8px 14px',
                      fontSize: 13,
                      fontWeight: 700,
                      border: `2px solid ${selectedColor === c ? 'var(--rust)' : 'var(--ink)'}`,
                      background: selectedColor === c ? 'var(--rust)' : 'var(--cream)',
                      color: selectedColor === c ? 'var(--cream)' : 'var(--ink)',
                      cursor: 'pointer',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizeOptions && (
            <div>
              <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--kicker)', fontWeight: 700, marginBottom: 8 }}>Size</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {product.sizeOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '8px 14px',
                      fontSize: 13,
                      fontWeight: 700,
                      border: `2px solid ${selectedSize === s ? 'var(--rust)' : 'var(--ink)'}`,
                      background: selectedSize === s ? 'var(--rust)' : 'var(--cream)',
                      color: selectedSize === s ? 'var(--cream)' : 'var(--ink)',
                      cursor: 'pointer',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <BannerButton
            fill
            background={inStock && !needsSelection ? 'var(--forest)' : 'rgba(36,26,16,.3)'}
            color="var(--cream)"
            onClick={() => inStock && !needsSelection && addToCart(product.id)}
            style={{ marginTop: 6, opacity: inStock ? 1 : 0.6, cursor: inStock && !needsSelection ? 'pointer' : 'not-allowed' }}
          >
            {!inStock ? 'Out of stock' : needsSelection ? 'Select options' : 'Add to cart'}
          </BannerButton>

          <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 12, opacity: 0.7 }}>
            {product.trustBadges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* How to fish it */}
      {product.howToFish && (
        <div style={{ background: 'var(--hero-band)', borderTop: '4px solid var(--ink)', borderBottom: '4px solid var(--ink)', padding: '48px 40px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 30, textAlign: 'center', marginBottom: 24 }}>How to fish it</div>
          <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {product.howToFish.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    border: '2px solid var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 12,
                    background: 'var(--parchment)',
                  }}
                >
                  {i + 1}
                </div>
                <p style={{ fontSize: 14 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Long description + specs */}
      <div style={{ padding: '48px 40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40 }} className="grid-2">
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, marginBottom: 12 }}>The details</div>
          <p style={{ fontSize: 14, lineHeight: 1.7 }}>{product.longDescription}</p>

          {product.buildDetails && (
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {product.buildDetails.map((b) => (
                <div key={b.part}>
                  <div style={{ fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>{b.part}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>{b.title}</div>
                  <p style={{ fontSize: 13, marginTop: 4 }}>{b.description}</p>
                </div>
              ))}
            </div>
          )}

          {product.depthChart && (
            <div style={{ marginTop: 28 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, marginBottom: 10 }}>Dive depth</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {product.depthChart.map((d) => (
                  <div
                    key={d.depth}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      background: d.highlight ? 'var(--rust)' : 'var(--hero-band)',
                      color: d.highlight ? 'var(--cream)' : 'var(--ink)',
                      fontWeight: d.highlight ? 700 : 400,
                      fontSize: 13,
                    }}
                  >
                    <span>{d.depth}</span>
                    <span>{d.note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {Object.keys(product.specs).length > 0 && (
          <TinFrame shadow="sm">
            <div style={{ padding: 24, width: '100%' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Specs</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, borderBottom: '1px solid rgba(36,26,16,.12)', paddingBottom: 8 }}>
                    <span style={{ textTransform: 'capitalize', opacity: 0.65 }}>{k.replace(/([A-Z])/g, ' $1')}</span>
                    <span style={{ fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </TinFrame>
        )}
      </div>

      {/* Related products */}
      {product.relatedProducts.length > 0 && (
        <div style={{ padding: '0 40px 56px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24, marginBottom: 20, textAlign: 'center' }}>You might also like</div>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28 }}>
            {product.relatedProducts.map((rp) => {
              const shopItem = ALL_SHOP_ITEMS.find((s) => s.id === rp.id);
              return shopItem ? <ProductCard key={rp.id} item={shopItem} /> : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
