export interface LegalSection {
  heading: string;
  body: string;
}

export const ABOUT_CONTENT = {
  meta: { title: 'About Us — Ketto Outdoors', description: 'Beginner-friendly fishing kits, matched and explained so you’re never guessing. Learn what Ketto Outdoors is about.' },
  eyebrow: 'One answer, not fifty opinions',
  heading: 'About Us',
  intro: [
    "Ketto Outdoors started with a simple frustration: ask what gear to buy in any fishing forum and you'll get fifty replies and forty conflicting opinions. Most tackle shops aren't much better — they sell gear to people who already know what they're doing, and leave everyone else to figure it out alone.",
    "So we built something different: complete kits matched by scenario — what you're targeting, where you're fishing, how much you already know — so you get one confident answer instead of a shopping list of guesses. Every piece inside is chosen and labeled for exactly who it's for, with a real difficulty score and a full beginner's guide behind it. No jargon, no gatekeeping, no forty-dollar box of gear you'll never use.",
  ],
  sections: [
    { heading: 'One confident answer', body: "We'd rather hand you a kit that's already matched — rod, line, hooks, bait — than a wall of options and a difficulty score you have to decode yourself. Buy the kit, follow the rigging guide, go fishing. That's the whole idea." },
    { heading: 'How we pick what goes in the box', body: "Every kit mixes trusted name-brand gear with pieces we source and label ourselves — always disclosed, never dressed up as something it's not. The goal isn't to sell you the most expensive rod on the wall; it's to sell you the one that actually works for what you're doing." },
    { heading: 'Freshwater first', body: "Right now we're all in on lakes, streams, and freshwater fishing — bass, catfish, panfish, and the water most beginners actually start on. We'd rather do freshwater right than do everything halfway." },
    { heading: 'Who we are', body: "We're a small team of anglers who got tired of watching new fishermen get overwhelmed at the tackle counter. Ketto Outdoors is our answer — gear that works, explained plainly." },
  ] as LegalSection[],
  ctaBanner: {
    heading: 'Ready to stop guessing?',
    body: "Pick the kit that matches what you're after — every piece inside is already chosen to work together.",
    buttonLabel: 'Shop kits →',
    href: '/kits',
  },
};

export const CONTACT_CONTENT = {
  meta: { title: 'Contact Us — Ketto Outdoors', description: 'Questions about gear, an order, or a lure request — send it our way.' },
  eyebrow: 'We read every message',
  heading: 'Get in Touch',
  subheading: 'Questions about gear, an order, or a lure request — send it our way.',
  validationErrorMessage: 'Please fill in your name, email, and a message.',
  success: {
    heading: 'Message sent.',
    body: (email: string) => `Thanks for reaching out — we'll get back to you at ${email}.`,
  },
  email: 'KettoOutdoors@gmail.com',
  responseTime: 'Within 1-2 business days',
  socialLinks: [
    { platform: 'YouTube', url: 'https://www.youtube.com/@KettoOutdoors' },
    { platform: 'Instagram', url: 'https://www.instagram.com/kettooutdoors/' },
    { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61592438567565' },
  ],
};

export interface FaqEntry {
  question: string;
  answer: string;
  links: { text: string; target: string }[];
}

export const FAQ_ENTRIES: FaqEntry[] = [
  { question: 'How long does shipping take?', answer: 'Orders ship within 1-2 business days, and typically arrive in 4-7 business days within the continental US. See our Shipping & Returns page for full details.', links: [{ text: 'Shipping & Returns', target: '/shipping-returns' }] },
  { question: "Can I return a lure I didn't like?", answer: "Unused, unopened gear can be returned within 30 days. Once a lure's been in the water, it's yours — but we're happy to help you pick something better suited next time.", links: [] },
  { question: "I'm brand new to fishing — where do I start?", answer: 'Start with a kit — pick the one that matches what you want to fish for, and every piece inside is already matched to work together. Our New to Fishing guide covers the basics if you want the background too.', links: [{ text: 'Shop kits', target: '/kits' }, { text: 'New to Fishing guide', target: '/new-to-fishing' }] },
  { question: "What's the difference between the three kits?", answer: 'First Bass Kit is a full lure-casting setup for bass. Never Fished Before Starter Kit is the simplest possible entry point — bait and a bobber, no casting technique or live bait required. First Catfish Kit uses genuinely different gear (circle hooks, heavier sinkers, prepared bait) built specifically for catfish. Pick the one that matches what you’re actually after.', links: [{ text: 'Shop kits', target: '/kits' }] },
  { question: 'Can I customize what’s inside a kit?', answer: 'Not at checkout — each kit is priced and matched as a set. But every piece inside is also sold on its own, so you can swap something out, buy a replacement, or top off a kit after the fact without buying a whole second one.', links: [{ text: 'Shop all gear', target: '/shop' }] },
  { question: 'I already have a rod and reel — do I still need the one in a kit?', answer: 'No — if you’ve already got a combo you like, buy the terminal tackle and lures from a kit’s page individually instead of the whole bundle. The kit price reflects the combo being included.', links: [] },
  { question: 'How do I know which lure to buy?', answer: 'Every lure page lists the target species, a difficulty score, and how to fish it — retrieve speed, technique, and what a strike feels like. Not sure where to start? Ask us directly.', links: [{ text: 'Ask us directly', target: '/contact' }] },
  { question: 'Do you ship internationally?', answer: "Right now we only ship within the continental US. If that changes, we'll post it here.", links: [] },
  { question: 'How do I track my order?', answer: 'Check My Orders for order history saved on this device, or email us your order number.', links: [{ text: 'My Orders', target: '/orders' }] },
  { question: 'Still have a question?', answer: 'Reach out through our Contact page or email KettoOutdoors@gmail.com — we read every message.', links: [{ text: 'Contact page', target: '/contact' }, { text: 'KettoOutdoors@gmail.com', target: 'mailto:KettoOutdoors@gmail.com' }] },
];

export const FAQ_META = { title: 'FAQ — Ketto Outdoors', description: 'Shipping, returns, and getting started — answered.' };

export const PRIVACY_CONTENT = {
  meta: { title: 'Privacy Policy — Ketto Outdoors', description: 'How Ketto Outdoors collects and uses your information.' },
  eyebrow: 'Your data, handled plainly',
  heading: 'Privacy Policy',
  lastUpdated: 'Last updated August 2026',
  sections: [
    { heading: 'What we collect', body: 'When you shop with Ketto Outdoors, we collect the information you give us directly — your name, email, shipping address, and order details. If you sign up for our newsletter, we keep your email on file until you unsubscribe.' },
    { heading: 'How we use it', body: "We use your information to process orders, respond to support requests, and — only if you've opted in — send occasional emails about new gear and fishing tips. We do not sell or rent your personal information to third parties." },
    { heading: 'Cookies & local storage', body: "This site uses your browser's local storage to remember your cart, saved orders, and preferences on this device. No third-party tracking cookies are used." },
    { heading: 'Your choices', body: "You can unsubscribe from emails at any time using the link in any newsletter, or by contacting us directly. You can clear your cart and saved orders at any time by clearing your browser's site data." },
    { heading: 'Contact us', body: 'Questions about this policy? Reach us at KettoOutdoors@gmail.com.' },
  ] as LegalSection[],
};

export const TERMS_CONTENT = {
  meta: { title: 'Terms of Service — Ketto Outdoors', description: 'The terms that apply when you shop with Ketto Outdoors.' },
  eyebrow: 'The fine print',
  heading: 'Terms of Service',
  lastUpdated: 'Last updated August 2026',
  sections: [
    { heading: 'Using this site', body: 'By browsing or ordering from Ketto Outdoors, you agree to use this site for lawful purposes only and to provide accurate information when placing an order.' },
    { heading: 'Orders & pricing', body: 'All prices are listed in USD and are subject to change without notice. We reserve the right to limit quantities, refuse an order, or correct pricing errors.' },
    { heading: 'Product information', body: 'We do our best to describe each lure and its performance accurately, but actual results depend on conditions, technique, and a little luck. Difficulty scores and depth ratings are estimates, not guarantees.' },
    { heading: 'Intellectual property', body: 'All content on this site — text, photos, and branding — belongs to Ketto Outdoors and may not be reproduced without permission.' },
    { heading: 'Limitation of liability', body: 'Ketto Outdoors is not liable for any damages arising from the use of our products, including but not limited to snagged hooks, lost lures, or the one that got away.' },
    { heading: 'Contact us', body: 'Questions about these terms? Reach us at KettoOutdoors@gmail.com.' },
  ] as LegalSection[],
};

export const SHIPPING_RETURNS_CONTENT = {
  meta: { title: 'Shipping & Returns — Ketto Outdoors', description: 'Shipping timelines, costs, and our return policy.' },
  eyebrow: 'Getting gear to your door',
  heading: 'Shipping & Returns',
  lastUpdated: 'Last updated August 2026',
  sections: [
    { heading: 'Shipping', body: "Orders ship within 1-2 business days. Standard shipping typically arrives in 4-7 business days within the continental US. You'll receive a confirmation once your order ships." },
    { heading: 'Shipping costs', body: 'Shipping is calculated by weight, package size, and distance from our Provo, UT warehouse. Orders of $35 or more ship free.' },
    { heading: 'Returns', body: "Unused, unopened gear can be returned within 30 days of delivery for a full refund. Lures that show signs of use (scuffs, hook damage, missing packaging) aren't eligible for return — we get it, sometimes a lure just doesn't match your water, but once it's wet it's yours." },
    { heading: 'How to start a return', body: "Email KettoOutdoors@gmail.com with your order number and we'll send return instructions within 1-2 business days." },
    { heading: 'Damaged or incorrect items', body: "If your order arrives damaged or you received the wrong item, contact us right away with a photo and we'll send a replacement at no cost." },
  ] as LegalSection[],
};

export const NOT_FOUND_CONTENT = {
  meta: { title: 'Page Not Found — Ketto Outdoors', description: "This page doesn't exist, moved, or never got hooked in the first place." },
  heading: 'This one got away.',
  body: "The page you're looking for doesn't exist, moved, or never got hooked in the first place.",
  searchPlaceholder: 'Search for gear...',
  searchButtonLabel: 'Go',
};
