import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import { Seal, PillSeal } from '../components/ui/Seal';
import { PriceTag } from '../components/ui/PriceTag';
import { SectionKicker, Reveal } from '../components/ui/Misc';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { useAdmin } from '../state/AdminContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

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
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--hero-band)', minHeight: 468, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '6px solid var(--ink)', borderBottom: '6px solid var(--ink)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(27,67,50,.03), rgba(27,67,50,.14))' }} />
        <svg aria-hidden="true" viewBox="0 0 800 470" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <rect width="800" height="470" fill="#e8dcc0" />
          <circle cx="88" cy="90" r="70" fill="#d99a2c" />
          <path d="M0 270 L120 190 L240 250 L360 170 L480 240 L600 180 L720 245 L800 210 L800 270 Z" fill="#1b4332" opacity=".85" />
          <rect x="0" y="270" width="800" height="200" fill="#3f6e6b" />
          <path d="M0 270 L800 270 L800 300 Q600 282 400 300 T0 285 Z" fill="#4c8481" opacity=".7" />
          <path d="M0 320 Q200 305 400 323 T800 317 L800 470 L0 470 Z" fill="#345c59" opacity=".55" />
          <path d="M0 360 Q200 348 400 362 T800 356 L800 470 L0 470 Z" fill="#2a4c49" opacity=".5" />
          <g stroke="#d7e6dd" strokeWidth="2.5" fill="none" opacity=".55" strokeLinecap="round">
            <path d="M40 300 Q90 296 140 300" />
            <path d="M300 310 Q350 306 400 310" />
            <path d="M560 296 Q610 292 660 296" />
            <path d="M120 340 Q170 336 220 340" />
            <path d="M440 350 Q490 346 540 350" />
            <path d="M660 336 Q710 332 760 336" />
          </g>
          <g transform="translate(190,0)">
            <rect x="470" y="330" width="70" height="14" fill="#8a6a3a" />
            <rect x="474" y="344" width="8" height="30" fill="#6b4f27" />
            <rect x="524" y="344" width="8" height="30" fill="#6b4f27" />
            <path d="M500 300 c-16 0 -28 12 -28 30 c0 20 14 34 14 46 l4 2 l4 -2 c0 -12 14 -26 14 -46 c0 -18 -12 -30 -28 -30 Z" fill="#1b4332" stroke="#241a10" strokeWidth="4.5" />
            <circle cx="500" cy="288" r="13" fill="#e8c98a" stroke="#241a10" strokeWidth="4.5" />
            <path d="M488 282 q12 -14 26 0" fill="none" stroke="#241a10" strokeWidth="4" />
            <path d="M486 372 l-6 34" stroke="#241a10" strokeWidth="6" strokeLinecap="round" />
            <path d="M514 372 l6 34" stroke="#241a10" strokeWidth="6" strokeLinecap="round" />
            <path d="M512 320 l70 -46" stroke="#241a10" strokeWidth="5" strokeLinecap="round" />
            <path d="M582 274 L640 380" stroke="#241a10" strokeWidth="1.5" fill="none" />
            <g transform="translate(560,380)">
              <ellipse cx="80" cy="0" rx="40" ry="6" fill="none" stroke="#d7e6dd" strokeWidth="2" opacity=".6" />
              <ellipse cx="80" cy="0" rx="58" ry="9" fill="none" stroke="#d7e6dd" strokeWidth="2" opacity=".4" />
              <path d="M48 0 C60 -16 84 -18 100 -6 L116 -12 L110 0 L116 12 L100 6 C84 18 60 16 48 0 Z" fill="#c1502e" stroke="#241a10" strokeWidth="4.5" strokeLinejoin="round" />
              <path d="M76 -10 C82 -14 90 -14 94 -8" fill="none" stroke="#241a10" strokeWidth="3" strokeLinecap="round" />
              <circle cx="62" cy="-4" r="2.4" fill="#241a10" />
              <g fill="#d7e6dd" stroke="#241a10" strokeWidth="1.5">
                <path d="M20 -28 q4 -8 10 -6 q-2 8 -10 6 Z" />
                <path d="M2 -34 q4 -6 9 -4 q-2 6 -9 4 Z" />
                <path d="M-14 -20 q4 -7 9 -5 q-2 7 -9 5 Z" />
              </g>
            </g>
          </g>
        </svg>

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
            <div style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--rust)', fontWeight: 700 }}>Fisherman-friendly tackle</div>
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
          <BannerButton to="/shop" background="var(--rust)" color="var(--parchment)" innerStyle={{ padding: '16px 28px 16px 20px', fontSize: 14 }} style={{ filter: 'drop-shadow(4px 4px 0 rgba(36,26,16,.55))', whiteSpace: 'nowrap' }}>
            Shop Gear
          </BannerButton>
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

      {/* Featured Gear */}
      <div style={{ background: 'var(--hero-band)', paddingBottom: 8, borderTop: '4px solid var(--ink)', borderBottom: '4px solid var(--ink)' }}>
        <div style={{ padding: '56px 40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, letterSpacing: '-0.03em' }}>Featured Gear</h2>
          <p style={{ margin: '12px 0 0', fontSize: 14, opacity: 0.7 }}>We surveyed the fish. They didn't answer, but these three get bit the most anyway.</p>
          <div style={{ width: 64, height: 4, background: 'var(--rust)', margin: '16px auto 0' }} />
        </div>
        {isAdmin && (
          <div style={{ textAlign: 'center', paddingBottom: 12, fontSize: 12, color: 'var(--rust)', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            Admin mode — pick featured products below
          </div>
        )}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, padding: '0 40px 56px' }}>
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
                  <ImagePlaceholder label={card.name} />
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
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 32, position: 'relative' }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.title}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Seal size={30} background="var(--parchment)" color="var(--ink)" rotate={0} style={{ border: '2px solid rgba(36,26,16,.35)', boxShadow: 'none' }}>
                  {i + 1}
                </Seal>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>{s.title}</div>
                <p style={{ fontSize: 14 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.9 }}>Ketto Outdoors — Full lineup</div>
          <BannerButton to="/shop" background="var(--rust)" color="var(--cream)" style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,.35))' }} innerStyle={{ padding: '16px 28px 16px 20px' }}>
            Shop all gear
          </BannerButton>
        </div>
      </div>
    </div>
  );
}
