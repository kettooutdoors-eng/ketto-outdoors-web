import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import { Seal, PillSeal } from '../components/ui/Seal';
import { PriceTag } from '../components/ui/PriceTag';
import { SectionKicker, Reveal } from '../components/ui/Misc';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { StepsProgress } from '../components/StepsProgress';
import { BundleCard } from '../components/BundleCard';
import { BUNDLES } from '../data/bundles';
import { BITING_NOW_SEASON } from '../data/bitingNow';
import { useAdmin } from '../state/AdminContext';
import { useFeatureFlags } from '../state/FeatureFlagsContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { getProductImageSrc } from '../data/productImages';

const FEATURED_KEY = 'ketto-featured';

interface FeaturedOption {
  key: string;
  name: string;
  kicker: string;
  badge: string;
  sub: string;
  desc: string;
  price: string;
  href: string;
  ctaText: string;
}

const FEATURED_CATALOG: Record<string, FeaturedOption> = {
  'deep-six': { key: 'deep-six', name: 'Deep Six', kicker: 'Best all-around starter lure', badge: 'Difficulty: Beginner (2/10)', sub: 'Target fish: Largemouth & smallmouth bass', desc: 'Just cast it out and reel steadily — it swims itself and bumps off rocks and logs instead of getting stuck. Great first lure.', price: '14.50', href: '/product/deep-six', ctaText: 'View & pick a color' },
  driftworm: { key: 'driftworm', name: 'Driftworm', kicker: 'Simple, slow, and forgiving', badge: 'Difficulty: Beginner (1/10)', sub: 'Target fish: Bass & panfish', desc: 'Rig it and drag it slowly along the bottom. About as simple as fishing gets — a great confidence-builder.', price: '6.50', href: '/product/driftworm', ctaText: 'View' },
  baithooks: { key: 'baithooks', name: 'Baithooks', kicker: 'Sharp, reliable, sized for beginners', badge: 'Difficulty: Beginner (1/10)', sub: 'Any species — pick a hook to match your bait', desc: 'A basic assortment of sized hooks for rigging soft plastics and live bait. Start here if you need hooks for the Driftworm.', price: '4.25', href: '/product/baithooks', ctaText: 'View' },
  'spinning-combo': { key: 'spinning-combo', name: 'Spinning Combo', kicker: 'Everything you need, ready to cast', badge: 'Complete setup — rod & reel', sub: "5'6\" rod, beginner-friendly action", desc: 'A matched spinning rod and reel, spooled and ready. The easiest way to start casting today.', price: '54.99', href: '/product/spinning-combo', ctaText: 'View combo' },
  baitcaster: { key: 'baitcaster', name: 'Baitcaster Combo', kicker: 'For anglers ready to level up', badge: 'Complete setup — rod & reel', sub: 'Baitcasting rod & reel, matched and ready', desc: "A baitcaster combo for more control and casting distance once you've got the basics down.", price: '72.99', href: '/product/baitcaster', ctaText: 'View combo' },
};
const FEATURED_DEFAULT = ['deep-six', 'driftworm', 'baithooks'];

function loadFeatured(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(FEATURED_KEY) || 'null');
    if (Array.isArray(raw) && raw.length === 3 && raw.every((k) => FEATURED_CATALOG[k])) return raw;
  } catch {
    /* ignore */
  }
  return FEATURED_DEFAULT.slice();
}

const WHY_KETTO = [
  { title: 'We teach, other brands only sell', body: "We built an entire beginner's guide — casting, reeling, reading water — because gear without know-how just sits in a drawer.", rotate: -6 },
  { title: 'We match lure to person, not lure to price', body: "Every lure lists the exact species it catches, the angler it's built for, and a real difficulty score — so you buy the right gear for your water.", rotate: 4 },
  { title: 'Every lure earns its spot', body: 'We cast, retrieve, and tune every lure ourselves before it ever reaches the catalog — so it performs the first time you tie it on.', rotate: -4 },
];

const STEPS = [
  { title: 'Pick your fish and fishing spot', body: "Know what you're after and where you'll cast — a pond, lake, or river — so you can pick a lure that actually matches the water." },
  { title: 'Pick one lure to start', body: "You don't need a full box. One good crankbait, or soft plastic with the right setup, matched to your fish and spot, will catch fish in almost any lake or pond." },
  { title: 'Cast, reel, land the fish', body: 'Cast out, reel at the correct pace for the rig you have, and when you feel a sharp tug keep reeling — the hook does the rest.' },
];

export default function Home() {
  useDocumentMeta('Ketto Outdoors — Fishing Gear That Works', "Beginner-friendly lures, combos, and guides. Gear matched to the fish you're after, not just the price tag.", '/');
  const { isAdmin } = useAdmin();
  const { usedGear } = useFeatureFlags();
  const [featured, setFeatured] = useState<string[]>(() => loadFeatured());

  useEffect(() => {
    localStorage.setItem(FEATURED_KEY, JSON.stringify(featured));
  }, [featured]);

  function setSlot(index: number, key: string) {
    setFeatured((prev) => {
      const next = prev.slice();
      next[index] = key;
      return next;
    });
  }

  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--hero-band)', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)' }}>
        <img
          src={`${import.meta.env.BASE_URL}assets/hero-photo.jpg`}
          alt="An angler standing at the water's edge at sunset"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '67% 55%',
            filter: 'sepia(.4) saturate(1.6) contrast(1.08) brightness(.9) hue-rotate(-6deg)',
          }}
        />
        {/* Warm duotone wash to pull the photo into the site's mustard/forest palette */}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--forest)', mixBlendMode: 'color', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 35%, rgba(217,154,44,.25), transparent 60%)', mixBlendMode: 'overlay' }} />
        {/* Film grain, matching the site's body-texture noise */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.5,
            mixBlendMode: 'overlay',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Vignette */}
        <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 140px rgba(20,15,8,.55)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,30,22,.15), rgba(20,30,22,.5))' }} />

        <TinFrame
          background="rgba(247,236,208,.95)"
          shadow="lg"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 2, maxWidth: 846, width: 'calc(100vw - 48px)' }}
          innerStyle={{ padding: '44px 60px', gap: 40, alignItems: 'center', textAlign: 'left', borderLeft: '9px solid var(--rust)', position: 'relative', backdropFilter: 'blur(4px)' }}
          innerClassName="hero-panel"
        >
          <div className="stamp" style={{ position: 'absolute', top: 14, right: 14, width: 64, height: 64, fontSize: 9, lineHeight: 1.3, padding: 6, transform: 'rotate(-8deg)' }}>
            EST.
            <br />
            KETTO
            <br />
            OUTDOORS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 16 }}>
            <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>One confident answer, not fifty opinions</div>
            <h1
              style={{
                fontSize: 58,
                lineHeight: 0.94,
                letterSpacing: '-0.04em',
                color: 'var(--parchment)',
                textShadow: '2px 2px 0 #241a10,4px 4px 0 #241a10,-2px 2px 0 #241a10,2px -2px 0 #241a10,-2px -2px 0 #241a10,6px 6px 0 #c1502e',
              }}
            >
              GEAR THAT
              <br />
              WORKS.
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <BannerButton to="/kits" background="var(--rust)" color="var(--parchment)" innerStyle={{ padding: '16px 28px 16px 20px', fontSize: 14 }} style={{ filter: 'drop-shadow(4px 4px 0 rgba(36,26,16,.55))', whiteSpace: 'nowrap' }}>
              Shop Kits
            </BannerButton>
            <Link to="/shop" style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', opacity: 0.7 }}>
              or browse gear individually
            </Link>
          </div>
        </TinFrame>
      </div>

      {/* Why Ketto */}
      <div style={{ padding: '36px 40px', textAlign: 'center' }}>
        <SectionKicker>Why Ketto</SectionKicker>
        <h2 style={{ fontSize: 27, letterSpacing: '-0.03em', marginTop: 8, maxWidth: '32ch', marginLeft: 'auto', marginRight: 'auto' }}>
          Most tackle brands just sell you gear.
          <br />
          We build fishermen.
        </h2>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24, marginTop: 28, textAlign: 'left', maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
          {WHY_KETTO.map((w, i) => (
            <Reveal key={w.title}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Seal rotate={w.rotate}>{i + 1}</Seal>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>{w.title}</div>
                <p style={{ fontSize: 13, opacity: 0.85 }}>{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Kits — the primary shopping path */}
      <div style={{ background: 'var(--hero-band)', paddingBottom: 56, borderTop: '4px solid var(--ink)', borderBottom: '4px solid var(--ink)' }}>
        <div style={{ padding: '56px 40px 0', textAlign: 'center' }}>
          <div className="card-kicker" style={{ fontSize: 11 }}>One decision, not fifty</div>
          <h2 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 8 }}>Stop Guessing What You Need</h2>
          <p style={{ margin: '12px auto 0', maxWidth: '56ch', fontSize: 14, opacity: 0.75 }}>
            Every kit is matched gear, not a random pile of parts — a rod, hooks, weights, and lures that are all meant to work together, picked by us so you don't have to guess.
          </p>
          <div style={{ width: 64, height: 4, background: 'var(--rust)', margin: '16px auto 0' }} />
        </div>
        {BUNDLES.length > 0 ? (
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, maxWidth: 1080, margin: '36px auto 0', padding: '0 40px' }}>
            {BUNDLES.map((b) => (
              <BundleCard key={b.id} bundle={b} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', opacity: 0.7 }}>Kits coming soon.</p>
        )}
      </div>

      {/* What's Biting Now teaser */}
      <div style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '28px 40px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--mustard)', fontWeight: 700 }}>{BITING_NOW_SEASON} picks</span>{' '}
          <span style={{ fontSize: 15, marginLeft: 8 }}>Don't want to pick at all? See what's biting right now.</span>
        </div>
        <Link
          to="/biting-now"
          style={{ fontSize: 13, fontWeight: 800, color: 'var(--cream)', background: 'var(--rust)', padding: '10px 18px', textDecoration: 'none', flexShrink: 0 }}
        >
          What's Biting Now →
        </Link>
      </div>

      {/* Gear by State teaser */}
      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '28px 40px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--mustard)', fontWeight: 700 }}>New to your state's water?</span>{' '}
          <span style={{ fontSize: 15, marginLeft: 8 }}>Pick your state and see the fish and gear beginners there start with.</span>
        </div>
        <Link
          to="/gear-by-state"
          style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)', background: 'var(--mustard)', padding: '10px 18px', textDecoration: 'none', flexShrink: 0 }}
        >
          Gear for Your State →
        </Link>
      </div>

      {/* Used Gear / Trade-In teaser — paused; see FeatureFlagsContext.usedGear */}
      {(usedGear || isAdmin) && (
        <div style={{ background: 'var(--rust)', color: 'var(--cream)', padding: '28px 40px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink)', fontWeight: 700 }}>
              {usedGear ? 'New: quality-checked used gear' : 'Admin preview — hidden from customers'}
            </span>{' '}
            <span style={{ fontSize: 15, marginLeft: 8 }}>Cheaper than new, or send in gear you're not using for store credit.</span>
          </div>
          <Link
            to="/used-gear"
            style={{ fontSize: 13, fontWeight: 800, color: 'var(--cream)', background: 'var(--ink)', padding: '10px 18px', textDecoration: 'none', flexShrink: 0 }}
          >
            Shop Used Gear →
          </Link>
        </div>
      )}

      {/* Individual gear — secondary path */}
      <div style={{ paddingBottom: 8 }}>
        <div style={{ padding: '56px 40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, letterSpacing: '-0.03em' }}>Already know what you're after?</h2>
          <p style={{ margin: '12px 0 0', fontSize: 14, opacity: 0.7 }}>Shop individual gear piece by piece — these three get picked the most.</p>
        </div>
        {isAdmin && (
          <div style={{ textAlign: 'center', paddingTop: 12, fontSize: 12, color: 'var(--rust)', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            Admin mode — pick featured products below
          </div>
        )}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '28px 40px 56px' }}>
          {featured.map((key, i) => {
            const card = FEATURED_CATALOG[key];
            if (!card) return null;
            return (
              <TinFrame key={i} shadow="lg">
                <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', width: '100%' }}>
                  <div className="notch" style={{ position: 'absolute', inset: 8, border: '1.5px dashed rgba(36,26,16,.35)', pointerEvents: 'none' }} />
                  {isAdmin && (
                    <select
                      value={card.key}
                      onChange={(e) => setSlot(i, e.target.value)}
                      style={{ fontSize: 13, padding: '8px 10px', border: '2px solid var(--forest)', background: 'var(--cream)', color: '#1c1c1a', fontWeight: 700 }}
                    >
                      {Object.values(FEATURED_CATALOG).map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.name}
                        </option>
                      ))}
                    </select>
                  )}
                  <ImagePlaceholder label={card.name} src={getProductImageSrc(card.key)} />
                  <div className="card-kicker">{card.kicker}</div>
                  <PillSeal rotate={-2}>{card.badge}</PillSeal>
                  <Link to={card.href} style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', color: '#1c1c1a' }}>
                    {card.name}
                  </Link>
                  <div style={{ fontSize: 12, letterSpacing: '.04em', color: '#1c1c1a', opacity: 0.7 }}>{card.sub}</div>
                  <p style={{ fontSize: 14 }}>{card.desc}</p>
                  <PriceTag price={card.price} />
                  <div style={{ display: 'flex', gap: 10 }}>
                    <BannerButton to={card.href} fill background="var(--ink)" color="var(--cream)">
                      {card.ctaText}
                    </BannerButton>
                  </div>
                </div>
              </TinFrame>
            );
          })}
        </div>
      </div>

      {/* Three steps */}
      <div style={{ padding: '56px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <SectionKicker>Not sure where to start?</SectionKicker>
          <h2 style={{ fontSize: 44, letterSpacing: '-0.03em', marginTop: 8 }}>Three Steps To Your First Catch</h2>
        </div>
        <StepsProgress steps={STEPS} />
        <p style={{ textAlign: 'center', fontSize: 13, maxWidth: '60ch', margin: '32px auto 0', opacity: 0.8 }}>
          New to fishing? Every Ketto lure is hand-picked so it works right out of the package — no tuning, no guesswork.{' '}
          <Link to="/new-to-fishing" style={{ color: 'var(--rust)', fontWeight: 600 }}>
            Learn the basics →
          </Link>
        </p>
      </div>

      {/* Stop guessing CTA */}
      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '80px 40px', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--rust)' }} />
        <h2 style={{ fontSize: 60, lineHeight: 0.96, letterSpacing: '-0.035em', maxWidth: '20ch' }}>
          STOP GUESSING. START FISHING.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.9 }}>One kit, one price, no guessing</div>
          <BannerButton to="/kits" background="var(--rust)" color="var(--cream)" style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,.35))' }} innerStyle={{ padding: '16px 28px 16px 20px' }}>
            Shop kits
          </BannerButton>
        </div>
      </div>
    </div>
  );
}
