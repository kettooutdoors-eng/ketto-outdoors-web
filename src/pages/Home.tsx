import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { TinFrame } from '../components/ui/TinFrame';
import { BannerButton } from '../components/ui/BannerButton';
import { Seal } from '../components/ui/Seal';
import { SectionKicker, Reveal } from '../components/ui/Misc';
import { BundleCard } from '../components/BundleCard';
import { BUNDLES_BY_PRICE } from '../data/bundles';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const WHY_KETTO = [
  'We show you how to use everything, step by step.',
  'Every piece of equipment is matched to the fish you’re after.',
  'We check every piece of equipment before it ships.',
];

export default function Home() {
  useDocumentMeta('Ketto Outdoors | Fishing Gear That Works', 'Simple fishing tackle kits for beginners. Pick a kit and go fishing.', '/');

  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--forest)', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(27,67,50,.1), rgba(27,67,50,.45))' }} />

        <TinFrame
          background="rgba(255,255,255,.96)"
          shadow="lg"
          style={{ position: 'relative', zIndex: 2, maxWidth: 846, width: 'calc(100vw - 48px)', margin: '48px 0' }}
          innerStyle={{ padding: '44px 60px', gap: 40, alignItems: 'center', textAlign: 'left' }}
          innerClassName="hero-panel"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h1 className="hero-in" style={{ fontSize: 52, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--ink)', '--d': '0.15s' } as CSSProperties}>
              Fishing gear,
              <br />
              made simple.
            </h1>
            <p className="hero-in" style={{ fontSize: 15, color: 'var(--ink)', opacity: 0.8, '--d': '0.4s' } as CSSProperties}>We found what works. Here it is.</p>
          </div>
          <div className="hero-in" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', '--d': '0.65s' } as CSSProperties}>
            <BannerButton to="/kits" className="btn-pulse" background="var(--rust)" color="#fff" innerStyle={{ padding: '16px 28px', fontSize: 14 }} style={{ whiteSpace: 'nowrap' }}>
              Shop Kits
            </BannerButton>
          </div>
        </TinFrame>
      </div>

      {/* Why Ketto */}
      <div style={{ padding: '36px 40px', textAlign: 'center' }}>
        <SectionKicker>Why Ketto</SectionKicker>
        <h2 style={{ fontSize: 27, letterSpacing: '-0.03em', marginTop: 8 }}>Made for beginners.</h2>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24, marginTop: 28, textAlign: 'left', maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
          {WHY_KETTO.map((text, i) => (
            <Reveal key={text}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Seal>{i + 1}</Seal>
                <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Kits — the primary shopping path */}
      <div style={{ background: 'var(--sage)', paddingBottom: 56 }}>
        <div style={{ padding: '56px 40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, letterSpacing: '-0.03em' }}>Pick a kit.</h2>
          <p style={{ margin: '12px auto 0', fontSize: 16, opacity: 0.75 }}>Everything inside works together.</p>
          <div style={{ width: 64, height: 4, background: 'var(--rust)', margin: '16px auto 0' }} />
        </div>
        {BUNDLES_BY_PRICE.length > 0 ? (
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28, maxWidth: 1080, margin: '36px auto 0', padding: '0 40px' }}>
            {BUNDLES_BY_PRICE.map((b, i) => (
              <Reveal key={b.id} delay={i * 150} style={{ display: 'flex' }}>
                <BundleCard bundle={b} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', opacity: 0.7 }}>Kits coming soon.</p>
        )}
      </div>

      {/* Gear by State teaser */}
      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '28px 40px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#e8a487', fontWeight: 700 }}>Fishing near you?</span>{' '}
          <span style={{ fontSize: 15, marginLeft: 8 }}>Pick your state to see what to buy.</span>
        </div>
        <Link
          to="/gear-by-state"
          style={{ fontSize: 13, fontWeight: 800, color: 'var(--forest)', background: 'var(--cream)', padding: '10px 18px', textDecoration: 'none', flexShrink: 0 }}
        >
          Pick your state →
        </Link>
      </div>

      {/* Stop guessing CTA */}
      <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '80px 40px', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--rust)' }} />
        <h2 style={{ fontSize: 60, lineHeight: 0.96, letterSpacing: '-0.035em', maxWidth: '20ch' }}>
          STOP GUESSING. START FISHING.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.9 }}>One kit. Nothing to figure out.</div>
          <BannerButton to="/kits" background="var(--rust)" color="#fff" innerStyle={{ padding: '16px 28px' }}>
            Shop kits
          </BannerButton>
        </div>
      </div>
    </div>
  );
}
