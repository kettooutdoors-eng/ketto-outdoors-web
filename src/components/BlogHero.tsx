interface BlogHeroProps {
  category: string;
  height?: number | string;
  rotate?: number;
}

/** Illustrated banner standing in for real blog photography, themed per category. */
export function BlogHero({ category, height = 190, rotate = -1.5 }: BlogHeroProps) {
  return (
    <div
      className="torn"
      style={{
        height,
        background: 'var(--photo-frame)',
        padding: 10,
        transform: `rotate(${rotate}deg)`,
        filter: 'drop-shadow(3px 4px 3px rgba(36,26,16,.35))',
      }}
    >
      <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
        <svg viewBox="0 0 800 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label={HERO_LABELS[category] ?? 'Ketto Outdoors'}>
          {renderScene(category)}
        </svg>
      </div>
    </div>
  );
}

const HERO_LABELS: Record<string, string> = {
  'beginner-guides': 'Illustration of an angler casting from a lake shore at sunset',
  'gear-and-lures': 'Illustration of a crankbait, soft plastic worm, and hook laid out',
  technique: 'Illustration of a rod and reel mid-retrieve with motion lines',
  'where-to-fish': 'Illustration of a dock and weed line along a lake shore',
};

function renderScene(category: string) {
  switch (category) {
    case 'gear-and-lures':
      return <GearScene />;
    case 'technique':
      return <TechniqueScene />;
    case 'where-to-fish':
      return <WhereScene />;
    default:
      return <BeginnerScene />;
  }
}

function SkyAndWater({ waterY = 170 }: { waterY?: number }) {
  return (
    <>
      <rect x={0} y={0} width={800} height={280} style={{ fill: 'var(--hero-band)' }} />
      <circle cx={130} cy={90} r={54} style={{ fill: 'var(--mustard)' }} opacity={0.9} />
      <rect x={0} y={waterY} width={800} height={280 - waterY} style={{ fill: 'var(--forest)' }} opacity={0.85} />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${waterY + 26 + i * 20} Q 40 ${waterY + 16 + i * 20}, 80 ${waterY + 26 + i * 20} T 160 ${waterY + 26 + i * 20} T 240 ${waterY + 26 + i * 20} T 320 ${waterY + 26 + i * 20} T 400 ${waterY + 26 + i * 20} T 480 ${waterY + 26 + i * 20} T 560 ${waterY + 26 + i * 20} T 640 ${waterY + 26 + i * 20} T 720 ${waterY + 26 + i * 20} T 800 ${waterY + 26 + i * 20}`}
          stroke="var(--cream)"
          strokeWidth={2}
          fill="none"
          opacity={0.35}
          style={{ filter: 'url(#rough)' }}
        />
      ))}
    </>
  );
}

function BeginnerScene() {
  return (
    <>
      <SkyAndWater waterY={175} />
      {/* angler silhouette */}
      <g style={{ fill: 'var(--ink)' }}>
        <circle cx={110} cy={128} r={10} />
        <path d="M110 138 L106 172 L98 174 L104 178 L112 176 L118 172 L122 178 L130 175 L122 170 L116 138 Z" />
      </g>
      {/* rod, bent */}
      <path d="M118 140 Q 175 120 230 90" stroke="var(--ink)" strokeWidth={4} fill="none" strokeLinecap="round" style={{ filter: 'url(#rough)' }} />
      {/* line to fish */}
      <path d="M228 91 Q 300 130 360 148" stroke="var(--ink)" strokeWidth={1.5} fill="none" />
      {/* jumping fish */}
      <g style={{ fill: 'var(--rust)' }} transform="translate(360,140) rotate(-18)">
        <path d="M0 0 C 20 -14, 46 -14, 60 0 C 46 10, 20 10, 0 0 Z" />
        <path d="M58 -2 L 74 -12 L 72 2 L 74 12 Z" />
      </g>
      {/* splash */}
      <g stroke="var(--cream)" strokeWidth={2.5} strokeLinecap="round" style={{ filter: 'url(#rough)' }}>
        <path d="M340 172 L 332 162" />
        <path d="M352 176 L 350 164" />
        <path d="M366 174 L 372 162" />
      </g>
      <path d="M560 200 Q 610 170 660 200 L 660 280 L 560 280 Z" style={{ fill: 'var(--parchment-dim)' }} opacity={0.6} />
    </>
  );
}

function GearScene() {
  return (
    <>
      <rect x={0} y={0} width={800} height={280} style={{ fill: 'var(--parchment)' }} />
      <rect x={0} y={0} width={800} height={280} fill="none" stroke="var(--ink)" strokeWidth={3} strokeDasharray="2 10" opacity={0.25} />
      {/* crankbait */}
      <g transform="translate(160,110) rotate(-8)">
        <path d="M-70 0 L -20 -34 L 60 -18 Q 90 0 60 18 L -20 34 Z" stroke="var(--ink)" strokeWidth={3} style={{ fill: 'var(--mustard)', filter: 'url(#rough)' }} />
        <circle cx={30} cy={-2} r={5} style={{ fill: 'var(--ink)' }} />
        <path d="M-70 0 L -110 -14 L -104 0 L -110 14 Z" style={{ fill: 'var(--cream)' }} stroke="var(--ink)" strokeWidth={2} />
      </g>
      {/* worm */}
      <g transform="translate(430,150) rotate(6)">
        <path d="M-120 0 C -80 -30, -40 30, 0 0 C 40 -30, 80 30, 120 0" stroke="var(--forest)" strokeWidth={16} fill="none" strokeLinecap="round" style={{ filter: 'url(#rough)' }} />
      </g>
      {/* hook */}
      <g transform="translate(640,90) scale(1.1)">
        <path d="M0 -50 L 4 10 Q 6 40 -20 40 Q -42 40 -38 18" stroke="var(--ink)" strokeWidth={6} fill="none" strokeLinecap="round" style={{ filter: 'url(#rough)' }} />
        <circle cx={0} cy={-52} r={6} fill="none" stroke="var(--ink)" strokeWidth={5} />
      </g>
    </>
  );
}

function TechniqueScene() {
  return (
    <>
      <rect x={0} y={0} width={800} height={280} style={{ fill: 'var(--hero-band)' }} />
      {/* rod + reel */}
      <g style={{ fill: 'var(--ink)' }}>
        <rect x={90} y={168} width={220} height={8} rx={4} transform="rotate(-10 90 168)" />
        <circle cx={150} cy={190} r={22} fill="none" stroke="var(--ink)" strokeWidth={6} />
        <circle cx={150} cy={190} r={6} style={{ fill: 'var(--ink)' }} />
      </g>
      {/* line out to lure */}
      <path d="M300 145 Q 430 120 560 140" stroke="var(--ink)" strokeWidth={1.5} fill="none" />
      <g transform="translate(560,140) rotate(6)">
        <path d="M-40 0 L -10 -18 L 34 -10 Q 52 0 34 10 L -10 18 Z" stroke="var(--ink)" strokeWidth={3} style={{ fill: 'var(--rust)', filter: 'url(#rough)' }} />
      </g>
      {/* motion / speed lines */}
      <g stroke="var(--rust)" strokeWidth={4} strokeLinecap="round" opacity={0.75} style={{ filter: 'url(#rough)' }}>
        <path d="M360 100 L 410 92" />
        <path d="M370 122 L 430 116" />
        <path d="M355 145 L 400 142" />
      </g>
      {/* vibration waves near the lure */}
      <g stroke="var(--forest)" strokeWidth={3} fill="none" opacity={0.6}>
        <path d="M600 120 Q 615 140 600 160" />
        <path d="M620 115 Q 640 140 620 165" />
      </g>
    </>
  );
}

function WhereScene() {
  return (
    <>
      <SkyAndWater waterY={150} />
      {/* dock */}
      <g style={{ fill: 'var(--ink)' }}>
        <rect x={420} y={140} width={280} height={14} />
        <rect x={440} y={154} width={10} height={70} />
        <rect x={560} y={154} width={10} height={70} />
        <rect x={670} y={154} width={10} height={70} />
      </g>
      {/* weed edge */}
      <g stroke="var(--forest)" strokeWidth={4} strokeLinecap="round" style={{ filter: 'url(#rough)' }}>
        <path d="M40 175 L 34 148" />
        <path d="M58 178 L 50 142" />
        <path d="M76 176 L 72 152" />
        <path d="M94 178 L 90 146" />
        <path d="M112 175 L 106 150" />
      </g>
      {/* depth change hint */}
      <path d="M180 165 Q 260 158 340 168" stroke="var(--cream)" strokeWidth={2} strokeDasharray="6 6" fill="none" opacity={0.5} />
    </>
  );
}
