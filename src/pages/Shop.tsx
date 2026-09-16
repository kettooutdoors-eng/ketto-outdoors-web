import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { BannerButton } from '../components/ui/BannerButton';
import { ALL_SHOP_ITEMS, FILTER_DIFFICULTIES, FILTER_TYPES, FILTER_FISH, FILTER_SORTS, SHOP_META } from '../data/shop';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Shop() {
  useDocumentMeta(SHOP_META.title, SHOP_META.description, '/shop');
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || 'All difficulties');
  const [type, setType] = useState('All types');
  const [fish, setFish] = useState(searchParams.get('fish') || 'All fish');
  const [sort, setSort] = useState('Featured');

  const items = useMemo(() => {
    let list = ALL_SHOP_ITEMS.filter((item) => {
      if (query && !`${item.name} ${item.kicker} ${item.type}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (difficulty !== 'All difficulties' && item.difficultyLabel !== difficulty) return false;
      if (type !== 'All types' && item.type !== type) return false;
      // Species-agnostic items (empty species[]) always pass a fish filter —
      // they're not wrong for that species, just not specific to it.
      if (fish !== 'All fish' && item.species.length > 0 && !item.species.includes(fish)) return false;
      return true;
    });
    list = list.slice();
    switch (sort) {
      case 'Price: Low to High':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'Difficulty: Easiest First':
        list.sort((a, b) => a.difficultyScore - b.difficultyScore);
        break;
      case 'Difficulty: Hardest First':
        list.sort((a, b) => b.difficultyScore - a.difficultyScore);
        break;
      case 'Name: A–Z':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [query, difficulty, type, fish, sort]);

  return (
    <div>
      <div style={{ background: 'var(--hero-band)', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)', padding: '56px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 44, letterSpacing: '-0.03em' }}>Every Piece of Gear We Make</h1>
        <p style={{ margin: '14px auto 0', maxWidth: '56ch', fontSize: 15, opacity: 0.8 }}>
          Every lure and combo below is hand-picked before it ships. Difficulty scores show how much technique it takes to fish well.
        </p>
      </div>

      <div style={{ padding: '32px 40px 0', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <input
          type="text"
          name="q"
          aria-label="Search gear"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search gear..."
          style={{ padding: '10px 14px', border: '2px solid var(--forest)', fontSize: 14, minWidth: 220 }}
        />
        <select aria-label="Filter by difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={{ padding: '10px 12px', border: '2px solid var(--forest)', fontSize: 13, fontWeight: 700, background: 'var(--cream)' }}>
          {FILTER_DIFFICULTIES.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
        <select aria-label="Filter by type" value={type} onChange={(e) => setType(e.target.value)} style={{ padding: '10px 12px', border: '2px solid var(--forest)', fontSize: 13, fontWeight: 700, background: 'var(--cream)' }}>
          {FILTER_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <select aria-label="Filter by target fish" value={fish} onChange={(e) => setFish(e.target.value)} style={{ padding: '10px 12px', border: '2px solid var(--forest)', fontSize: 13, fontWeight: 700, background: 'var(--cream)' }}>
          {FILTER_FISH.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
        <select aria-label="Sort by" value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '10px 12px', border: '2px solid var(--forest)', fontSize: 13, fontWeight: 700, background: 'var(--cream)' }}>
          {FILTER_SORTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {items.length > 0 ? (
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '32px 40px 56px' }}>
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '64px 40px' }}>
          <h2 style={{ fontSize: 24 }}>Sorry, we don't have anything for that quite yet!</h2>
          <p style={{ maxWidth: '48ch', margin: '12px auto 0', opacity: 0.8 }}>
            We asked the fish what they'd like to see next, but they just stared at us. Try a different filter in the meantime.
          </p>
          <BannerButton href="mailto:KettoOutdoors@gmail.com?subject=Lure%20request" style={{ marginTop: 20, display: 'inline-flex' }}>
            Contact us &amp; request a lure
          </BannerButton>
        </div>
      )}

      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.85 }}>Ketto Outdoors — Beginner guide</div>
        <h2 style={{ fontSize: 36, letterSpacing: '-0.03em', marginTop: 10 }}>NOT SURE WHICH ONE TO PICK?</h2>
        <BannerButton to="/new-to-fishing" background="var(--rust)" color="var(--cream)" style={{ marginTop: 20, display: 'inline-flex' }}>
          See how to start
        </BannerButton>
        <p style={{ marginTop: 18, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/biting-now" style={{ fontSize: 13, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline' }}>
            Or see what's biting right now →
          </Link>
          <Link to="/gear-by-state" style={{ fontSize: 13, fontWeight: 700, color: 'var(--cream)', textDecoration: 'underline' }}>
            Or find gear for your state →
          </Link>
        </p>
      </div>
    </div>
  );
}
