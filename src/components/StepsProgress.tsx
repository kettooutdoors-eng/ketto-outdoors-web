import { useEffect, useRef } from 'react';

interface Step {
  title: string;
  body: string;
}

const IDLE = { background: 'var(--parchment)', color: 'var(--forest)', borderColor: 'rgba(36,26,16,.35)' };
const ACTIVE = { background: 'var(--rust)', color: 'var(--parchment)', borderColor: 'var(--rust)' };
const PASSED = { background: 'var(--forest)', color: 'var(--parchment)', borderColor: 'var(--forest)' };

/**
 * The Home page "Three Steps" section with a scroll-linked progress track:
 * the connecting line fills and each badge highlights as it scrolls through
 * its third of the section, matching the original design reference.
 */
export function StepsProgress({ steps }: { steps: Step[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!section || !track || !fill) return;

    const applyBadge = (i: number, palette: typeof IDLE, scale: number) => {
      const badge = badgeRefs.current[i];
      if (!badge) return;
      badge.style.background = palette.background;
      badge.style.color = palette.color;
      badge.style.borderColor = palette.borderColor;
      badge.style.transform = `scale(${scale})`;
    };

    const positionTrack = () => {
      const firstBadge = badgeRefs.current[0];
      const lastBadge = badgeRefs.current[badgeRefs.current.length - 1];
      if (!firstBadge || !lastBadge || !track.parentElement) return;
      const gridRect = track.parentElement.getBoundingClientRect();
      const r1 = firstBadge.getBoundingClientRect();
      const r2 = lastBadge.getBoundingClientRect();
      track.style.left = `${r1.left + r1.width / 2 - gridRect.left}px`;
      track.style.right = `${gridRect.right - (r2.left + r2.width / 2)}px`;
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const atBottom = window.scrollY + vh >= document.documentElement.scrollHeight - 2;
      const raw = atBottom ? 1 : (vh - rect.top) / (rect.height + vh);
      const progress = Math.min(1, Math.max(0, raw));

      let active = -1;
      if (progress >= 0.2 && progress < 0.4) active = 0;
      else if (progress >= 0.4 && progress < 0.6) active = 1;
      else if (progress >= 0.6 && progress < 0.8) active = 2;

      // Fills continuously from step 1's badge to the last badge across the
      // 0.2-0.8 scroll window, holding full past it and empty before it.
      const fillPct = Math.min(1, Math.max(0, (progress - 0.2) / 0.6)) * 100;
      fill.style.width = `${progress < 0.2 ? 0 : progress >= 0.8 ? 100 : fillPct}%`;

      steps.forEach((_, i) => {
        const col = colRefs.current[i];
        const passed = progress >= 0.2 + (i + 1) * 0.2;
        if (active === -1 && progress < 0.2) {
          if (col) {
            col.style.opacity = '1';
            col.style.transform = 'scale(1)';
          }
          applyBadge(i, IDLE, 1);
        } else if (i === active) {
          if (col) {
            col.style.opacity = '1';
            col.style.transform = 'scale(1.04)';
          }
          applyBadge(i, ACTIVE, 1.15);
        } else {
          if (col) {
            col.style.opacity = passed || progress >= 0.8 ? '1' : '0.4';
            col.style.transform = 'scale(1)';
          }
          applyBadge(i, passed ? PASSED : IDLE, 1);
        }
      });
    };

    positionTrack();
    window.addEventListener('resize', positionTrack);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      fill.style.width = '100%';
      steps.forEach((_, i) => {
        const col = colRefs.current[i];
        if (col) col.style.opacity = '1';
        applyBadge(i, PASSED, 1);
      });
      return () => window.removeEventListener('resize', positionTrack);
    }

    colRefs.current.forEach((col) => {
      if (col) col.style.transition = 'opacity .3s ease, transform .3s ease';
    });
    badgeRefs.current.forEach((badge) => {
      if (badge) badge.style.transition = 'background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease';
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('resize', positionTrack);
      window.removeEventListener('scroll', onScroll);
    };
  }, [steps]);

  return (
    <div ref={sectionRef} className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 32, position: 'relative' }}>
      <div ref={trackRef} style={{ position: 'absolute', top: 15, left: '16.66%', right: '16.66%', height: 2, background: 'rgba(27,67,50,.15)', zIndex: 0 }}>
        <div ref={fillRef} style={{ height: '100%', width: '0%', background: 'var(--rust)' }} />
      </div>
      {steps.map((s, i) => (
        <div
          key={s.title}
          ref={(el) => {
            colRefs.current[i] = el;
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}
        >
          <div
            ref={(el) => {
              badgeRefs.current[i] = el;
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              border: `2px solid ${IDLE.borderColor}`,
              color: IDLE.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 13,
              background: IDLE.background,
            }}
          >
            {i + 1}
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>{s.title}</div>
          <p style={{ fontSize: 14 }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
