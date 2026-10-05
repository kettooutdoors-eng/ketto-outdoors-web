import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    "id": "deep-six",
    "name": "Deep Six",
    "displayNameFull": "Deep Six Squarebill Crankbait",
    "price": 14.5,
    "category": "Crankbait (Squarebill)",
    "kicker": "Squarebill / 2.5 in / 1/2 oz",
    "metaTitle": "Deep Six Squarebill Crankbait | Ketto Outdoors",
    "metaDescription": "A crankbait that dives about 6 feet and bounces off rocks and logs instead of getting stuck. Cast it out and reel it back steady. $14.50.",
    "difficulty": null,
    "targetSpecies": "Largemouth & smallmouth bass",
    "shortDescription": "A crankbait that dives about 6 feet and bounces off rocks and logs instead of getting stuck. Cast it out and reel it back steady.",
    "longDescription": "A crankbait with a squared-off front that dives about 6 feet and bounces off rocks and wood instead of snagging. Reel steady, about 1.5 turns of the handle per second, and it keeps a steady wobble and depth.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "10-12 lb monofilament line",
        "Pliers for hook removal"
      ],
      "steps": [
        {
          "title": "Tie it on",
          "detail": "Thread your line through the eyelet on the nose of the bill and tie an improved clinch knot. Give it a firm tug. If it holds, you're set."
        },
        {
          "title": "Cast past your target",
          "detail": "Cast a few feet beyond where you think a fish is holding (a dock edge, a rock pile, a laydown log) so the lure is already swimming by the time it reaches that spot."
        },
        {
          "title": "Reel at a steady, brisk pace",
          "detail": "Close the bail and reel immediately at a steady clip, about 1.5 turns of the handle per second, no pausing. You should feel a light, rhythmic thump-thump-thump through the rod as the bill kicks side to side."
        },
        {
          "title": "Let it bump, don’t fight it",
          "detail": "When it ticks a rock or piece of wood, keep reeling at the same pace. The square bill deflects off cover instead of digging in, so a bump usually means it just changed direction, not that it’s stuck."
        },
        {
          "title": "Set the hook on the thump",
          "detail": "A strike feels like the steady thump suddenly turns into a solid, heavy pull. Don't yank. Just keep reeling and let the rod bend; the hook does the work."
        }
      ],
      "biteFeel": "A hard, sudden weight that interrupts the steady thump-thump of the retrieve, like the lure got heavier, not like a tap.",
      "commonMistakes": [
        "Reeling too slow, which lets the bill dig into the bottom instead of deflecting",
        "Yanking the rod on a bump before confirming it’s actually a fish",
        "Stopping the retrieve mid-cast. A steady pace is what makes this lure forgiving"
      ],
      "confidenceTip": "This is the lure we'd hand a total beginner on their first-ever trip: cast it out, reel steady, and it does almost everything else itself."
    },
    "specs": {
      "diveDepth": "6 ft",
      "weight": "1/2 oz",
      "length": "2.5 in",
      "hooks": "#4 treble x2",
      "pattern": "Sexy Shad",
      "bill": "Square, 45 degrees",
      "body": "Balsa core",
      "rattle": "Single tungsten knocker ball"
    },
    "buildDetails": [
      {
        "part": "01: Bill",
        "title": "Square, 45 degrees",
        "description": "The corner catches the rock and kicks the body sideways, so contact reads as a direction change rather than a snag."
      },
      {
        "part": "02: Body",
        "title": "Balsa core",
        "description": "Buoyant enough to back out of cover on the pause, dense enough to hold the wobble at speed."
      },
      {
        "part": "03: Rattle",
        "title": "Single knocker",
        "description": "One tungsten ball, low and irregular. A thud that carries in stained water instead of a rasp."
      }
    ],
    "depthChart": [
      {
        "depth": "0 ft",
        "note": "surface"
      },
      {
        "depth": "4 ft",
        "note": "light cover"
      },
      {
        "depth": "6 ft",
        "note": "Deep Six runs here",
        "highlight": true
      },
      {
        "depth": "8 ft",
        "note": "rock & timber"
      },
      {
        "depth": "12 ft",
        "note": "past its range"
      }
    ],
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Deep Six squarebill crankbait",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Replacement trebles sized right for a squarebill this size.",
        "price": 4.25
      },
      {
        "id": "ratlin",
        "name": "Ratlin",
        "blurb": "A lipless crankbait to cover water fast before you slow down with Deep Six.",
        "price": 10.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "driftworm",
    "name": "Driftworm",
    "displayNameFull": "Driftworm Soft Plastic",
    "price": 6.5,
    "category": "Soft Plastic (Worm)",
    "kicker": "Soft plastic worm",
    "metaTitle": "Driftworm Soft Plastic | Ketto Outdoors",
    "metaDescription": "A soft worm you drag slowly along the bottom. One of the easiest lures to fish, and a good first one. $6.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "A soft worm you drag slowly along the bottom. One of the easiest lures to fish, and a good first one.",
    "longDescription": "Best for slow fishing along the bottom near logs, rocks, and weeds. A good first lure for learning to feel what's happening on your line.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "1/0 worm hook (see Baithooks)",
        "8-10 lb monofilament line",
        "Small split shot weight (optional, for deeper water)"
      ],
      "steps": [
        {
          "title": "Rig it",
          "detail": "Thread the hook point into the nose of the worm about a quarter-inch, bring it out the side, then bury the hook point shallowly back into the plastic so it's weedless."
        },
        {
          "title": "Cast near cover",
          "detail": "Cast past a likely spot, a weed edge, a dock post, a drop-off, and let it sink all the way to the bottom on a slack line. Watch your line; if it twitches or moves sideways on the fall, a fish already has it."
        },
        {
          "title": "Drag, don’t reel",
          "detail": "Once it hits bottom, point your rod tip at the water and slowly drag it a foot or two by reeling just enough to take up slack, then pause for 3-5 seconds. Repeat: drag, pause, drag, pause."
        },
        {
          "title": "Watch for the pause bite",
          "detail": "Most bites happen during the pause, not the drag. If your line twitches, comes tight, or just feels different, reel down to take up slack and set the hook with a firm upward sweep."
        },
        {
          "title": "Be patient",
          "detail": "This is a confidence-builder because it's forgiving. There's no wrong retrieve speed, just slow and slower."
        }
      ],
      "biteFeel": "A soft \"tap-tap\" or the line just going slightly heavy and moving off to one side during the pause. Subtle compared to a crankbait strike.",
      "commonMistakes": [
        "Reeling it in like a crankbait instead of dragging it slowly along bottom",
        "Not pausing long enough. Most bites come in the dead-still moments",
        "Setting the hook too gently on a soft-plastic bite; use a firm upward sweep, not a light twitch"
      ],
      "confidenceTip": "There's no way to fish this wrong at a slow pace. If you're moving it slower than feels natural, you're probably doing it right."
    },
    "specs": {
      "length": "6 in",
      "material": "Soft plastic",
      "rigging": "1/0 worm hook (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Driftworm soft plastic",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
      {
        "id": "ribtail",
        "name": "Ribtail",
        "blurb": "A curl-tail worm that covers different water.",
        "price": 5.25
      }
    ],
    "reviewsSectionPresent": true,
    "reviewsSectionLabel": "What anglers say"
  },
  {
    "id": "baithooks",
    "name": "Baithooks",
    "displayNameFull": "Baithooks",
    "price": 4.25,
    "category": "Terminal Tackle (Hooks)",
    "kicker": "Hooks",
    "metaTitle": "Baithooks | Ketto Outdoors",
    "metaDescription": "A basic pack of hooks for soft plastic worms and live bait. Start here if you need hooks for the Driftworm. $4.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Any species. Pick a size to match your bait",
    "shortDescription": "A basic pack of hooks for soft plastic worms and live bait. Start here if you need hooks for the Driftworm.",
    "longDescription": "For rigging soft plastic worms like the Driftworm, or adding a live worm.",
    "guide": {
      "gearNeeded": [
        "Whatever soft plastic or live bait you’re rigging",
        "Rod and reel",
        "Line matched to your target species (8-12 lb covers most freshwater)"
      ],
      "steps": [
        {
          "title": "Match the size to your bait",
          "detail": "Use a smaller hook (1/0) for thin baits like the Driftworm, and size up (3/0-4/0) for bulkier soft plastics or live bait."
        },
        {
          "title": "Rig it weedless (soft plastics)",
          "detail": "Insert the hook point into the nose of the bait about a quarter-inch, bring it out the side, then tuck the point back into the plastic so it doesn't snag cover."
        },
        {
          "title": "Or rig it exposed (live bait)",
          "detail": "For live or cut bait, thread the hook straight through so the point rides free. That's what gets a solid hookset on a soft bite."
        },
        {
          "title": "Check it after every fish or snag",
          "detail": "A hook point dulls fast against rock and teeth. Drag the point across your thumbnail. If it doesn’t catch, it’s time to retie on a fresh one."
        }
      ],
      "biteFeel": "Depends entirely on what you rig it with, but a sharp hook is what turns a mushy tap into a solid hookset either way.",
      "commonMistakes": [
        "Using a hook too big for the bait, which kills its natural action",
        "Rigging a soft plastic crooked, which makes it spin and look unnatural in the water",
        "Fishing a dulled-out hook after it’s bounced off a few rocks"
      ],
      "confidenceTip": "Hooks are the one piece of gear that's genuinely hard to mess up. Match the size to your bait and you're set."
    },
    "specs": {
      "sizes": "#6 - 4/0",
      "packaging": "sold in packs of 10"
    },
    "colorOptions": null,
    "sizeOptions": [
      "#6",
      "#8",
      "#10",
      "1/0",
      "2/0",
      "3/0",
      "4/0"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Baithooks",
    "relatedProducts": [
      {
        "id": "driftworm",
        "name": "Driftworm",
        "blurb": "Another slow, forgiving bottom bait.",
        "price": 6.5
      },
      {
        "id": "ribtail",
        "name": "Ribtail",
        "blurb": "A curl-tail worm that covers different water.",
        "price": 5.25
      },
    ],
    "reviewsSectionPresent": true,
    "reviewsSectionLabel": "What anglers say"
  },
  {
    "id": "longshot",
    "name": "Longshot",
    "displayNameFull": "Longshot",
    "price": 11,
    "category": "Spinnerbait",
    "kicker": "Spinnerbait",
    "metaTitle": "Longshot | Ketto Outdoors",
    "metaDescription": "A lure with two metal blades that flash and vibrate, so fish can find it in murky or cloudy water. Just reel it in steady. $11.00.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "A lure with two metal blades that flash and vibrate, so fish can find it in murky or cloudy water. Just reel it in steady.",
    "longDescription": "Good in murky or muddy water, in low light, and for covering a lot of water to find active fish.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "10-14 lb line",
        "Pliers for hook removal"
      ],
      "steps": [
        {
          "title": "Cast past the target",
          "detail": "Cast beyond where you think fish are holding. This bait shines in open water and along stained-water edges where fish are hunting by feel and vibration."
        },
        {
          "title": "Close the bail and reel immediately",
          "detail": "Start reeling the moment it hits the water at a steady, moderate pace. The spinning blades do all the work, no rod action needed."
        },
        {
          "title": "Keep it steady",
          "detail": "Resist the urge to jerk or twitch the rod. A consistent, boring retrieve is exactly what makes the blades flash and thump correctly."
        },
        {
          "title": "Slow down near cover",
          "detail": "As it approaches a stump, dock post, or weed edge, slow your retrieve slightly so it doesn't shoot past the strike zone too fast."
        },
        {
          "title": "Set the hook on the pull",
          "detail": "A bite feels like a solid thump or the line going heavy. Reel down to remove slack and sweep the rod up firmly."
        }
      ],
      "biteFeel": "A sharp thump or sudden heaviness, sometimes preceded by the blade vibration stopping for a split second as a fish grabs it.",
      "commonMistakes": [
        "Reeling too fast and burning it through the strike zone",
        "Fishing it on clear, calm days when a subtler bait would work better. This one shines in murky or low-light conditions",
        "Setting the hook too hard on light spinning tackle"
      ],
      "confidenceTip": "No technique required here. If you can turn a reel handle at a steady pace, you can fish this correctly."
    },
    "specs": {
      "weight": "3/8 oz",
      "blades": "single Colorado + willow blade combo",
      "hook": "#2"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Longshot spinnerbait",
    "relatedProducts": [
      {
        "id": "chugger",
        "name": "Chugger",
        "blurb": "A topwater change-up for calmer water.",
        "price": 12.75
      },
      {
        "id": "ratlin",
        "name": "Ratlin",
        "blurb": "Covers water fast between casts with this.",
        "price": 10.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "chugger",
    "name": "Chugger",
    "displayNameFull": "Chugger",
    "price": 12.75,
    "category": "Topwater (Popper)",
    "kicker": "Topwater",
    "metaTitle": "Chugger | Ketto Outdoors",
    "metaDescription": "A topwater lure that splashes and pops on the surface when you twitch your rod. Fun to watch, but better once you have the basics down. $12.75.",
    "difficulty": {
      "label": "Intermediate",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "A topwater lure that splashes and pops on the surface when you twitch your rod. Fun to watch, but better once you have the basics down.",
    "longDescription": "Best on calm mornings and evenings, when fish are looking up near the surface.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "12-17 lb line",
        "Calm early morning or evening conditions"
      ],
      "steps": [
        {
          "title": "Fish it early or late",
          "detail": "Topwater bites best in low light, dawn, dusk, or overcast days, when fish are looking up toward the surface."
        },
        {
          "title": "Cast past cover and let it sit",
          "detail": "Cast near a target and let the ripples fully die out before your first twitch. A fish is often already looking at it."
        },
        {
          "title": "Twitch, don’t reel",
          "detail": "Snap the rod tip down sharply to make the concave face \"chug\" and spit water, then pause 2-3 seconds. Repeat: twitch, pause, twitch, pause."
        },
        {
          "title": "Find the rhythm",
          "detail": "Vary the pause length between casts until you get a reaction. Some days fish want a fast walk, other days a long pause between pops."
        },
        {
          "title": "Wait a beat before setting the hook",
          "detail": "When a fish blows up on it, resist the instinct to set immediately, pause half a second to feel the weight of the fish, then sweep the rod up."
        }
      ],
      "biteFeel": "Impossible to miss. A visible surface explosion, often before you feel anything through the rod.",
      "commonMistakes": [
        "Setting the hook the instant you see the splash instead of feeling the weight first, which pulls it away from the fish",
        "Fishing it in bright midday sun when fish aren't looking up",
        "Reeling it steadily instead of twitch-pausing it"
      ],
      "confidenceTip": "The takedown is the whole appeal, even if you miss a few at first, watching a fish blow up on the surface is what hooks most anglers on topwater for life."
    },
    "specs": {
      "weight": "1/2 oz",
      "face": "concave",
      "hooks": "#4 treble x2"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Chugger topwater",
    "relatedProducts": [
      {
        "id": "padhopper",
        "name": "Padhopper",
        "blurb": "For working thicker cover in the same trip.",
        "price": 11.5
      },
      {
        "id": "buzzrunner",
        "name": "Buzzrunner",
        "blurb": "Loud surface option for low-light hours.",
        "price": 12
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "displayNameFull": "Ripple",
    "price": 13.25,
    "category": "Jerkbait",
    "kicker": "Jerkbait",
    "metaTitle": "Ripple | Ketto Outdoors",
    "metaDescription": "A lure you twitch, pause, and twitch again. It's a little harder to learn, but it works well on cold, slow fish. $13.25.",
    "difficulty": {
      "label": "Intermediate",
      "number": 5,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & trout",
    "shortDescription": "A lure you twitch, pause, and twitch again. It's a little harder to learn, but it works well on cold, slow fish.",
    "longDescription": "Best in cold water, when fish are slow and won't chase a fast lure.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "8-10 lb monofilament line"
      ],
      "steps": [
        {
          "title": "Fish it in cold or clear water",
          "detail": "This suspending bait is built for cold-water conditions or clear water when fish are sluggish and won't chase something fast."
        },
        {
          "title": "Cast and let it settle",
          "detail": "Cast out and let it sit for a few seconds after it lands so it settles to its suspend depth before you start working it."
        },
        {
          "title": "Twitch-twitch-pause",
          "detail": "Give the rod tip two short, sharp twitches to make it dart side to side, then pause 3-5 full seconds and let it hang motionless."
        },
        {
          "title": "Resist reeling during the pause",
          "detail": "The suspending action means it stays right at that depth without sinking or rising. This dead-still pause is what triggers a following fish."
        },
        {
          "title": "Watch your line, not just your rod",
          "detail": "Most bites happen on the pause and show up as your line twitching or moving sideways rather than a felt tug."
        }
      ],
      "biteFeel": "Often more visual than physical at first. Watch for the line twitching during the pause, then feel a solid weight when you reel down.",
      "commonMistakes": [
        "Fishing it with a fast, continuous retrieve instead of twitch-pause",
        "Pausing for only a second when 3-5 seconds is what triggers a following, hesitant fish",
        "Using heavy, visible line in the clear water this bait is made for"
      ],
      "confidenceTip": "The pause feels unnaturally long the first few times, trust it. That stillness is exactly what separates this bait from a fast-moving crankbait on tough, cold days."
    },
    "specs": {
      "weight": "3/8 oz",
      "buoyancy": "suspending",
      "hooks": "#6 treble x3"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Ripple jerkbait",
    "relatedProducts": [
      {
        "id": "flutterspoon",
        "name": "Flutterspoon",
        "blurb": "Simple flash for suspended fish.",
        "price": 7.25
      },
      {
        "id": "tubehead",
        "name": "Tubehead",
        "blurb": "A bottom-hugging option for rocky structure.",
        "price": 4.95
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "bottomjig",
    "name": "Bottomjig",
    "displayNameFull": "Bottomjig",
    "price": 5.75,
    "category": "Jig",
    "kicker": "Jig",
    "metaTitle": "Bottomjig | Ketto Outdoors",
    "metaDescription": "A weighted lure you hop along the bottom. It takes some practice to feel the bites. $5.75.",
    "difficulty": {
      "label": "Intermediate",
      "number": 5,
      "outOf": 10
    },
    "targetSpecies": "Bass & walleye",
    "shortDescription": "A weighted lure you hop along the bottom. It takes some practice to feel the bites.",
    "longDescription": "Best around rocky bottoms and drop-offs, where fish stay low near structure.",
    "guide": {
      "gearNeeded": [
        "Soft plastic trailer (Crawdaddy pairs well)",
        "Rod and reel",
        "8-12 lb line"
      ],
      "steps": [
        {
          "title": "Add a trailer",
          "detail": "Thread a soft plastic, the Crawdaddy is a natural match, onto the jighead before casting."
        },
        {
          "title": "Cast and let it sink fully",
          "detail": "Cast past your target and let it sink all the way to the bottom on a slack line. Count the seconds it takes to feel the line stop. That tells you the depth."
        },
        {
          "title": "Hop it in short lifts",
          "detail": "Lift the rod tip 6-12 inches to hop the jig off bottom, then let it fall back on a controlled line. Don’t just reel, actually lift with the rod."
        },
        {
          "title": "Follow it down",
          "detail": "Reel up slack as it falls so you stay in contact, but don’t pull it. Most bites come as it’s sinking back to bottom."
        },
        {
          "title": "Learn to read the tap",
          "detail": "A bite often just feels like extra weight or a light tap when the jig should be falling freely. If it feels different than the last hop, set the hook."
        }
      ],
      "biteFeel": "A light tap, a \"mushy\" extra weight on the fall, or your line simply not falling as far as it should. Subtle and easy to miss at first.",
      "commonMistakes": [
        "Reeling instead of hopping with the rod tip, which drags the jig instead of bouncing it naturally",
        "Not staying in contact with slack line on the fall, missing the tap",
        "Setting the hook on every bump of rock or wood instead of learning the difference. It takes a few trips to tell them apart"
      ],
      "confidenceTip": "Reading bottom bites is a real skill that takes a few trips to click. Don't get discouraged if the first outing is mostly rocks and snags. It gets obvious fast once you feel a real one."
    },
    "specs": {
      "weight": "1/4 oz jighead",
      "pairing": "soft plastic trailer (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Bottomjig jighead",
    "relatedProducts": [
      {
        "id": "crawdaddy",
        "name": "Crawdaddy",
        "blurb": "Pair on a jighead for bottom crawling.",
        "price": 6.75
      },
      {
        "id": "tubehead",
        "name": "Tubehead",
        "blurb": "A bottom-hugging option for rocky structure.",
        "price": 4.95
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "buzzrunner",
    "name": "Buzzrunner",
    "displayNameFull": "Buzzrunner",
    "price": 12,
    "category": "Topwater (Buzzbait)",
    "kicker": "Buzzbait",
    "metaTitle": "Buzzrunner | Ketto Outdoors",
    "metaDescription": "A lure that churns across the surface and makes a lot of noise. Fish hit it hard. It takes some practice to find the right reeling speed. $12.00.",
    "difficulty": {
      "label": "Intermediate",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "A lure that churns across the surface and makes a lot of noise. Fish hit it hard. It takes some practice to find the right reeling speed.",
    "longDescription": "Best in low light, around cover, and in open water near the surface where fish are aggressive.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "14-20 lb line",
        "Low light, dawn, dusk, or overcast"
      ],
      "steps": [
        {
          "title": "Cast past your target",
          "detail": "Cast beyond cover, docks, weed edges, laydowns, where aggressive fish are likely holding near the surface."
        },
        {
          "title": "Start reeling the instant it lands",
          "detail": "Close the bail and begin reeling immediately and fast enough that the blade stays churning on top. If it starts to sink, speed up."
        },
        {
          "title": "Keep a constant, brisk pace",
          "detail": "Don't slow down or pause. A buzzbait is a reaction bait, and a steady disturbance is what draws a reaction strike."
        },
        {
          "title": "Brace for a blow-up",
          "detail": "Strikes are often violent and close to the boat or bank. Keep a firm grip and be ready."
        },
        {
          "title": "Set the hook on the pull, not the splash",
          "detail": "Like other topwaters, wait to feel weight before setting. A premature hookset often pulls it away from the fish."
        }
      ],
      "biteFeel": "A loud surface explosion and then a hard, immediate pull. One of the most obvious strikes in fishing.",
      "commonMistakes": [
        "Reeling too slowly and letting the blade sink, which kills the whole presentation",
        "Setting the hook on the splash instead of the felt weight",
        "Fishing it in calm, clear, bright conditions where a subtler bait usually out-fishes it"
      ],
      "confidenceTip": "Finding the right reel speed takes one or two casts, not a whole trip, as soon as you feel the blade staying up and churning, you've got it."
    },
    "specs": {
      "weight": "3/8 oz",
      "blade": "single spinning blade",
      "hook": "#3/0"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Buzzrunner buzzbait",
    "relatedProducts": [
      {
        "id": "chugger",
        "name": "Chugger",
        "blurb": "A topwater change-up for calmer water.",
        "price": 12.75
      },
      {
        "id": "padhopper",
        "name": "Padhopper",
        "blurb": "For working thicker cover in the same trip.",
        "price": 11.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "swimshad",
    "name": "Swimshad",
    "displayNameFull": "Swimshad",
    "price": 9.5,
    "category": "Swimbait",
    "kicker": "Swimbait",
    "metaTitle": "Swimshad | Ketto Outdoors",
    "metaDescription": "A soft lure with a paddle tail that swims on its own. Cast it out and reel it back steady. $9.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & striped bass",
    "shortDescription": "A soft lure with a paddle tail that swims on its own. Cast it out and reel it back steady.",
    "longDescription": "Best in open water, where it looks like a small baitfish swimming at a natural pace.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "8-10 lb line"
      ],
      "steps": [
        {
          "title": "Cast into open water",
          "detail": "This bait shines swimming through open water and along drop-offs, imitating baitfish cruising in the open."
        },
        {
          "title": "Reel at a steady, moderate pace",
          "detail": "Close the bail and reel immediately at a consistent, unhurried speed. No twitching or pausing needed."
        },
        {
          "title": "Let the tail do the work",
          "detail": "The paddle tail kicks automatically at any steady retrieve speed, so focus on keeping your pace even rather than adding action."
        },
        {
          "title": "Vary depth by reel speed",
          "detail": "Reel faster to keep it higher in the water column, slower to let it swim deeper. Small speed changes are all it takes to find where fish are holding."
        },
        {
          "title": "Set the hook on solid contact",
          "detail": "A bite feels like a firm, sustained pull rather than a tap. Reel down and sweep the rod up when you feel it."
        }
      ],
      "biteFeel": "A firm, steady pull that interrupts the wobble of the tail, feels more like a solid grab than a light tap.",
      "commonMistakes": [
        "Adding unnecessary twitches. A steady retrieve is what sells the swimming action",
        "Fishing it too shallow or too deep for the water you're in without adjusting reel speed",
        "Retrieving too fast, which can make the tail spin instead of kick"
      ],
      "confidenceTip": "This is close to the simplest retrieve in the lineup. Cast it out, reel steady, and let the built-in tail action do the selling."
    },
    "specs": {
      "length": "4.5 in soft body",
      "hook": "internal weighted hook",
      "tail": "paddle tail"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Swimshad",
    "relatedProducts": [
      {
        "id": "deep-six",
        "name": "Deep Six",
        "blurb": "A go-to squarebill to alternate retrieves with.",
        "price": 14.5
      },
      {
        "id": "flukeshad",
        "name": "Flukeshad",
        "blurb": "A weightless option for the same water.",
        "price": 5.95
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "ratlin",
    "name": "Ratlin",
    "displayNameFull": "Ratlin",
    "price": 10.25,
    "category": "Crankbait (Lipless)",
    "kicker": "Lipless crankbait",
    "metaTitle": "Ratlin | Ketto Outdoors",
    "metaDescription": "A lure with a loud rattle inside. Cast it far and reel steady to find where the fish are. $10.25.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Bass & crappie",
    "shortDescription": "A lure with a loud rattle inside. Cast it far and reel steady to find where the fish are.",
    "longDescription": "Best for covering open water fast to find schools of active fish.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "10-14 lb line"
      ],
      "steps": [
        {
          "title": "Cast far",
          "detail": "This is a search bait built to cover open water fast. Make long casts to fan out and locate active fish."
        },
        {
          "title": "Let it sink to your target depth",
          "detail": "Count it down after the cast (roughly 1 second per foot of fall) so you know how deep it's running."
        },
        {
          "title": "Reel at a steady, moderate-to-fast pace",
          "detail": "Close the bail and reel immediately. The internal rattle and tight wobble do the attracting, so a consistent pace is what matters most."
        },
        {
          "title": "Vary retrieve speed to find the depth fish want",
          "detail": "Reel faster to run it shallower, slower to let it run deeper. Change speed between casts until you get bit."
        },
        {
          "title": "Set the hook on the thump",
          "detail": "A strike interrupts the steady vibration with a hard, sudden weight. Keep reeling and let the rod load up."
        }
      ],
      "biteFeel": "A hard, rattling thump that cuts off the bait’s vibration. Usually unmistakable.",
      "commonMistakes": [
        "Fishing it at one depth all day instead of varying reel speed to search the water column",
        "Casting short instead of using its long-casting design to cover water efficiently",
        "Setting the hook too softly. A firmer sweep helps drive trebles home on a fast-moving bait"
      ],
      "confidenceTip": "Its whole job is to help you find fish fast. A handful of long casts at different speeds will usually tell you where they're holding for the day."
    },
    "specs": {
      "weight": "1/2 oz",
      "rattle": "internal rattle chamber",
      "hooks": "#4 treble x2"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Ratlin lipless crank",
    "relatedProducts": [
      {
        "id": "deep-six",
        "name": "Deep Six",
        "blurb": "A go-to squarebill to alternate retrieves with.",
        "price": 14.5
      },
      {
        "id": "longshot",
        "name": "Longshot",
        "blurb": "Good backup for murky water days.",
        "price": 11
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "padhopper",
    "name": "Padhopper",
    "displayNameFull": "Padhopper",
    "price": 11.5,
    "category": "Topwater (Frog)",
    "kicker": "Topwater frog",
    "metaTitle": "Padhopper | Ketto Outdoors",
    "metaDescription": "A frog lure that slides over lily pads and thick weeds without snagging. It takes practice to know when to set the hook. $11.50.",
    "difficulty": {
      "label": "Advanced",
      "number": 7,
      "outOf": 10
    },
    "targetSpecies": "Largemouth bass",
    "shortDescription": "A frog lure that slides over lily pads and thick weeds without snagging. It takes practice to know when to set the hook.",
    "longDescription": "Best over lily pads, mats of weeds, and thick cover where other lures would snag right away.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "40-50 lb braided line (cuts through vegetation)"
      ],
      "steps": [
        {
          "title": "Target heavy cover",
          "detail": "Cast directly onto lily pads, matted vegetation, or slop where other lures would snag immediately. This frog is built to walk right over it."
        },
        {
          "title": "Walk it steadily",
          "detail": "Twitch the rod tip side to side in a steady rhythm to make it \"walk\" across the surface and through gaps in the cover."
        },
        {
          "title": "Pause over holes",
          "detail": "When you reach an opening in the vegetation, let it sit still for a couple seconds before continuing. That pause is often when a strike happens."
        },
        {
          "title": "Wait a full beat after the blow-up",
          "detail": "This is the one exception to setting fast: after a strike through heavy cover, pause about one full second to let the fish fully close its mouth around the bait before you set."
        },
        {
          "title": "Set hard and pull up and out",
          "detail": "Sweep the rod up and toward open water immediately to get the fish’s head turned and moving out of the cover before it can wrap you around a stem."
        }
      ],
      "biteFeel": "A visible blow-up through the vegetation, sometimes just a swirl or the pads themselves moving before you feel weight.",
      "commonMistakes": [
        "Setting the hook the instant you see the strike instead of waiting a beat for the fish to close its mouth",
        "Fishing light line that can't handle pulling a fish out of heavy cover",
        "Working it too fast through gaps instead of pausing to give fish a chance to react"
      ],
      "confidenceTip": "This one takes practice timing the hookset. Expect to miss a few blow-ups before it clicks. Every angler does; it's the price of fishing the thickest cover on the lake."
    },
    "specs": {
      "weight": "1/2 oz",
      "hook": "weedless double hook",
      "body": "hollow body"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Padhopper hollow frog",
    "relatedProducts": [
      {
        "id": "buzzrunner",
        "name": "Buzzrunner",
        "blurb": "Loud surface option for low-light hours.",
        "price": 12
      },
      {
        "id": "chugger",
        "name": "Chugger",
        "blurb": "A topwater change-up for calmer water.",
        "price": 12.75
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "flutterspoon",
    "name": "Flutterspoon",
    "displayNameFull": "Flutterspoon",
    "price": 7.25,
    "category": "Spoon",
    "kicker": "Spoon",
    "metaTitle": "Flutterspoon | Ketto Outdoors",
    "metaDescription": "A metal spoon that wobbles and flashes as it sinks and as you reel it back. Cast, let it sink, and reel in. $7.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Trout, walleye & crappie",
    "shortDescription": "A metal spoon that wobbles and flashes as it sinks and as you reel it back. Cast, let it sink, and reel in.",
    "longDescription": "Best in deep, clear water near schools of baitfish. Drop it straight down and lift it up and down.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "8-10 lb line",
        "Electronics or a known deep hole (helpful but not required)"
      ],
      "steps": [
        {
          "title": "Cast and count it down",
          "detail": "Cast out and let it sink on a semi-slack line, counting seconds as it falls so you know roughly what depth you're fishing."
        },
        {
          "title": "Reel steady for simple flash",
          "detail": "The easiest approach: once it's at depth, reel back at a slow, steady pace and let the metal wobble and flash on its own."
        },
        {
          "title": "Or lift-and-drop for extra flutter",
          "detail": "For more action, lift the rod tip sharply and let it flutter back down on a controlled line. Most bites hit on the fall."
        },
        {
          "title": "Stay in contact on the fall",
          "detail": "Reel up slack as it drops so you can feel a bite, but don't pull against it. Let it flutter freely."
        },
        {
          "title": "Set on any change",
          "detail": "If the line jumps, goes slack unexpectedly, or you feel a tap, reel down and set firmly."
        }
      ],
      "biteFeel": "Often a sharp tap on the fall, or the line suddenly going slack because a fish grabbed it on the way down.",
      "commonMistakes": [
        "Not counting the fall, so you lose track of what depth you're actually fishing",
        "Reeling too fast and skipping the flutter that makes this bait work",
        "Missing fall bites because of too much slack line"
      ],
      "confidenceTip": "Cast it, let it sink, reel it back. This is one of the most literal 'point and catch' lures in the lineup once you find the right depth."
    },
    "specs": {
      "weight": "3/4 oz",
      "material": "stamped metal",
      "hook": "single hook"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Flutterspoon",
    "relatedProducts": [
      {
        "id": "ribtail",
        "name": "Ribtail",
        "blurb": "A curl-tail worm that covers different water.",
        "price": 5.25
      },
      {
        "id": "ripple",
        "name": "Ripple",
        "blurb": "A jerkbait for suspended, sluggish fish.",
        "price": 13.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "finessedrop",
    "name": "Finesse Drop",
    "displayNameFull": "Finesse Drop",
    "price": 8,
    "category": "Terminal Tackle (Drop-shot Rig)",
    "kicker": "Drop-shot rig",
    "metaTitle": "Finesse Drop | Ketto Outdoors",
    "metaDescription": "A light setup that lets you keep your bait at an exact depth. It takes more practice, but it works when fish are hard to catch. $8.00.",
    "difficulty": {
      "label": "Advanced",
      "number": 7,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & walleye",
    "shortDescription": "A light setup that lets you keep your bait at an exact depth. It takes more practice, but it works when fish are hard to catch.",
    "longDescription": "Best when fish are hard to catch or have seen a lot of lures. It keeps your bait at an exact depth just off the bottom.",
    "guide": {
      "gearNeeded": [
        "4-in soft plastic (sold separately)",
        "Rod and reel",
        "6-8 lb monofilament line",
        "Sensitive rod tip recommended"
      ],
      "steps": [
        {
          "title": "Rig the soft plastic",
          "detail": "Tie the hook about 12-18 inches above the weight using a Palomar knot, then thread on a 4-inch soft plastic through the nose."
        },
        {
          "title": "Drop straight down",
          "detail": "Lower it straight down along a dock, ledge, or drop-off until the weight touches bottom. Keep the line as vertical as possible."
        },
        {
          "title": "Keep the weight anchored",
          "detail": "Hold the rod tip low and let the weight rest on the bottom. It acts as an anchor while the bait hovers just above it."
        },
        {
          "title": "Shake, don’t reel",
          "detail": "Gently shake the rod tip in small, quick movements to make the bait quiver in place without moving the weight. This subtle action is the whole technique."
        },
        {
          "title": "Feel for the light tick",
          "detail": "Bites here are subtle. A light tick or the line going slightly heavy. Reel down to remove slack before setting."
        }
      ],
      "biteFeel": "Subtle. A light tick, a slight tap, or the line feeling just a little heavier than a moment ago. Pressured fish bite soft.",
      "commonMistakes": [
        "Shaking too hard, which looks unnatural to wary fish this rig is meant to fool",
        "Losing bottom contact by not keeping the weight anchored",
        "Setting the hook on every twitch of the line instead of learning the specific light tick of a real bite"
      ],
      "confidenceTip": "This is genuinely the most technical bait in the lineup. Expect it to take longer to click than anything else here, and that's completely normal. It rewards patience over power."
    },
    "specs": {
      "includes": "weight + hook",
      "pairing": "4-in soft plastic (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Finesse drop-shot rig",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
      {
        "id": "ribtail",
        "name": "Ribtail",
        "blurb": "A curl-tail worm that covers different water.",
        "price": 5.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "ribtail",
    "name": "Ribtail",
    "displayNameFull": "Ribtail",
    "price": 5.25,
    "category": "Soft Plastic (Curl-tail Worm)",
    "kicker": "Soft plastic: curl-tail worm",
    "metaTitle": "Ribtail | Ketto Outdoors",
    "metaDescription": "A soft lure with a curled tail that kicks as it falls and as you reel. Easy to use, and you can rig it many ways as you learn. $5.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "A soft lure with a curled tail that kicks as it falls and as you reel. Easy to use, and you can rig it many ways as you learn.",
    "longDescription": "Works in almost any water. A reliable everyday bait once you've picked how to rig it.",
    "guide": {
      "gearNeeded": [
        "Worm hook or light jighead (sold separately)",
        "Rod and reel",
        "8-10 lb line"
      ],
      "steps": [
        {
          "title": "Pick a rig",
          "detail": "Rig it weightless on a worm hook for shallow cover, or thread it onto a light jighead to fish it slightly deeper. Both are beginner-friendly."
        },
        {
          "title": "Cast near cover",
          "detail": "Cast past docks, weed edges, or laydowns and let it sink on a slack line."
        },
        {
          "title": "Reel slow with pauses",
          "detail": "Reel it back slowly, pausing every few feet to let the curl tail kick and flutter on its own. The tail does most of the work."
        },
        {
          "title": "Watch the fall",
          "detail": "This bait also draws strikes just sinking. Watch your line on the initial drop and after every pause."
        },
        {
          "title": "Set with a firm sweep",
          "detail": "Soft plastic bites can feel mushy. Set the hook with a confident upward sweep rather than a light twitch."
        }
      ],
      "biteFeel": "A soft tap or the line moving off to the side, often during a pause rather than the retrieve itself.",
      "commonMistakes": [
        "Reeling too fast and not letting the tail flutter naturally",
        "Skipping the pauses, which is when most bites happen",
        "Under-setting the hook on a soft, subtle bite"
      ],
      "confidenceTip": "This bait forgives almost any rig or retrieve mistake. Slow it down and it will still catch fish even on an imperfect presentation."
    },
    "specs": {
      "length": "6 in soft plastic",
      "pairing": "worm hook or jighead (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Ribtail curl-tail worm",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
      {
        "id": "driftworm",
        "name": "Driftworm",
        "blurb": "Another slow, forgiving bottom bait.",
        "price": 6.5
      },
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "crawdaddy",
    "name": "Crawdaddy",
    "displayNameFull": "Crawdaddy",
    "price": 6.75,
    "category": "Soft Plastic (Creature Bait)",
    "kicker": "Soft plastic: creature bait",
    "metaTitle": "Crawdaddy | Ketto Outdoors",
    "metaDescription": "A soft lure with claws that flap like a crawfish on the bottom. A good partner for a jig once you're ready to feel bites on the bottom. $6.75.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Bass & smallmouth bass",
    "shortDescription": "A soft lure with claws that flap like a crawfish on the bottom. A good partner for a jig once you're ready to feel bites on the bottom.",
    "longDescription": "Best on rocky or gravel bottoms where real crawfish live.",
    "guide": {
      "gearNeeded": [
        "Jighead (Bottomjig pairs well)",
        "Rod and reel",
        "10-12 lb line"
      ],
      "steps": [
        {
          "title": "Pair it with a jighead",
          "detail": "Thread it onto a jighead, the Bottomjig is a natural match, with the claws facing up for the most natural fall."
        },
        {
          "title": "Cast to rock or gravel bottom",
          "detail": "Target rocky or gravel-bottom areas where real crawfish live. That's where this bait earns its keep."
        },
        {
          "title": "Let it sink fully",
          "detail": "Let it hit bottom on a slack line before doing anything else."
        },
        {
          "title": "Hop it slowly along bottom",
          "detail": "Lift the rod tip a few inches to hop it, then let it settle back. The claws flap open on the fall, imitating a fleeing crawfish."
        },
        {
          "title": "Feel for the heavy tap",
          "detail": "Bites often feel like a distinct, heavier tap than a rock bump. If in doubt, reel down and set."
        }
      ],
      "biteFeel": "A heavy, deliberate tap, noticeably different from the light click of bouncing off a rock once you’ve felt both a few times.",
      "commonMistakes": [
        "Fishing it over sand or mud instead of the rock/gravel bottom it's designed to imitate",
        "Hopping it too high or too far, which looks unnatural for a bottom-dwelling bait",
        "Setting the hook on every rock tap instead of learning to tell the difference"
      ],
      "confidenceTip": "Pair it with the Bottomjig and fish rocky bottom. That combination alone does most of the work for you."
    },
    "specs": {
      "length": "4 in soft plastic",
      "pairing": "jighead (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Crawdaddy creature bait",
    "relatedProducts": [
      {
        "id": "bottomjig",
        "name": "Bottomjig",
        "blurb": "Classic jighead pairing for bottom presentation.",
        "price": 5.75
      },
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "flukeshad",
    "name": "Flukeshad",
    "displayNameFull": "Flukeshad",
    "price": 5.95,
    "category": "Soft Plastic (Weightless Jerkbait)",
    "kicker": "Soft plastic: weightless jerkbait",
    "metaTitle": "Flukeshad | Ketto Outdoors",
    "metaDescription": "A soft lure that darts side to side just under the surface. Twitch it, pause, and repeat. $5.95.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "A soft lure that darts side to side just under the surface. Twitch it, pause, and repeat.",
    "longDescription": "Best around docks, weed edges, and other cover where a weighted lure would snag.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "8-10 lb line",
        "Weedless hook (included)"
      ],
      "steps": [
        {
          "title": "Rig it weedless",
          "detail": "Thread the included weedless hook through the nose and out the top so the point tucks against the body, letting it skip past cover."
        },
        {
          "title": "Cast tight to cover",
          "detail": "Cast right up against docks, weed edges, and laydowns, being weightless and weedless means you can fish spots other baits would snag."
        },
        {
          "title": "Twitch and pause",
          "detail": "Twitch the rod tip to make it dart side to side just under the surface, then pause a couple seconds and let it sit."
        },
        {
          "title": "Let it flutter down on the pause",
          "detail": "Being weightless, it sinks very slowly during the pause. That slow flutter is often exactly what triggers a strike."
        },
        {
          "title": "Set on the pull",
          "detail": "A bite usually feels like sudden resistance or the line coming tight. Reel down and sweep the rod up."
        }
      ],
      "biteFeel": "Sudden resistance or the line coming tight, sometimes with a visible swirl near the surface first.",
      "commonMistakes": [
        "Reeling it steadily instead of twitch-pausing, which loses the darting action",
        "Fishing it too far from cover. It's built to be worked tight to docks and weed lines",
        "Setting the hook too early before the fish has it fully"
      ],
      "confidenceTip": "Being weedless means you can cast into spots that would snag almost anything else. Don't be afraid to put it right on top of the cover."
    },
    "specs": {
      "length": "5 in soft plastic",
      "hook": "weightless weedless hook included"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Flukeshad soft jerkbait",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
      {
        "id": "swimshad",
        "name": "Swimshad",
        "blurb": "Steady swimming action as a change-up.",
        "price": 9.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "tubehead",
    "name": "Tubehead",
    "displayNameFull": "Tubehead",
    "price": 4.95,
    "category": "Soft Plastic (Tube Bait)",
    "kicker": "Soft plastic: tube bait",
    "metaTitle": "Tubehead | Ketto Outdoors",
    "metaDescription": "A tube lure with a skirt that flares open as it sinks. A classic for rocky bottoms. $4.95.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & walleye",
    "shortDescription": "A tube lure with a skirt that flares open as it sinks. A classic for rocky bottoms.",
    "longDescription": "Best around rock piles and other bottom structure where fish tuck in tight.",
    "guide": {
      "gearNeeded": [
        "Tube jighead (sold separately)",
        "Rod and reel",
        "6-8 lb line"
      ],
      "steps": [
        {
          "title": "Insert the jighead",
          "detail": "Push a tube jighead up inside the hollow body so the hook point exits through the top, hook eye sitting right at the nose."
        },
        {
          "title": "Cast to rocky structure",
          "detail": "Target rock piles, riprap, or other hard bottom structure where fish tuck in tight."
        },
        {
          "title": "Let it sink to bottom",
          "detail": "Let it fall on a slack line all the way down. Most strikes happen on this initial fall, so pay attention right away."
        },
        {
          "title": "Hop it slowly",
          "detail": "Once on bottom, hop it gently a few inches at a time. The tentacle skirt flares open on every pause, which is what triggers bites."
        },
        {
          "title": "Set on the tick",
          "detail": "Bites are often a light tick during the fall or a hop. Reel down to remove slack before setting."
        }
      ],
      "biteFeel": "A light tick, frequently right as it's sinking rather than while sitting still on bottom.",
      "commonMistakes": [
        "Missing the fall bite by not paying attention right after the cast",
        "Fishing it over open mud or sand instead of the rocky structure it's made for",
        "Hopping it too aggressively instead of small, subtle lifts"
      ],
      "confidenceTip": "Most of the bites happen on the fall, so the easiest way to catch fish on this one is simply to pay close attention right after your bait hits the water."
    },
    "specs": {
      "length": "3.5 in hollow body",
      "pairing": "tube jighead (sold separately)"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Tubehead tube bait",
    "relatedProducts": [
      {
        "id": "bottomjig",
        "name": "Bottomjig",
        "blurb": "Classic jighead pairing for bottom presentation.",
        "price": 5.75
      },
      {
        "id": "ripple",
        "name": "Ripple",
        "blurb": "A jerkbait for suspended, sluggish fish.",
        "price": 13.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "flipping-jig",
    "name": "Flipping Jig",
    "displayNameFull": "Flipping Jig",
    "price": 5.5,
    "category": "Jig",
    "kicker": "Jig",
    "metaTitle": "Flipping Jig | Ketto Outdoors",
    "metaDescription": "The jig to tie on when you don’t know what else to throw. It works almost anywhere near cover. $5.50.",
    "difficulty": {
      "label": "Intermediate",
      "number": 5,
      "outOf": 10
    },
    "targetSpecies": "Largemouth & smallmouth bass",
    "shortDescription": "The jig to tie on when you don’t know what else to throw. It works almost anywhere near cover.",
    "longDescription": "Drop it next to docks, fallen trees, and weed edges, let it sink, then hop it back slowly. The painted head with eyes and a strong 3/0 hook make it a safe choice almost anywhere.",
    "guide": {
      "gearNeeded": [
        "Soft plastic trailer (a craw or creature bait pairs well)",
        "Rod and reel"
      ],
      "steps": [
        {
          "title": "Add a trailer",
          "detail": "Thread a soft plastic craw or creature bait onto the hook for extra bulk and action. The jig alone works, but a trailer usually outfishes it."
        },
        {
          "title": "Flip or pitch it into cover",
          "detail": "Underhand-flip it tight against docks, laydowns, or weed edges rather than casting overhand, accuracy matters more than distance here."
        },
        {
          "title": "Let it fall on a controlled line",
          "detail": "Keep light contact with the line as it sinks. Most bites happen on the fall, and a fully slack line means you won't feel it."
        },
        {
          "title": "Hop it back slowly",
          "detail": "Lift the rod tip a few inches to hop it, then let it fall again, working it back toward you."
        },
        {
          "title": "Set the hook hard",
          "detail": "Jig bites often feel like a sudden, heavy weight. Reel down and set with a firm upward sweep."
        }
      ],
      "biteFeel": "A heavy, sudden weight on the fall, or the line simply stops sinking when it should still be dropping.",
      "commonMistakes": [
        "Casting it into open water instead of flipping it tight to cover, where it earns its keep",
        "Losing contact with the line on the fall and missing the bite entirely",
        "Setting the hook too softly. This hook can take a firm sweep"
      ],
      "confidenceTip": "When nothing else in the box is working, this is the one to tie back on. It's built to be the default, not the specialist."
    },
    "specs": {
      "weight": "3/8 oz",
      "head": "painted, with eyes",
      "hook": "3/0",
      "skirt": "silicone"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Flipping jig",
    "relatedProducts": [
      {
        "id": "crawdaddy",
        "name": "Crawdaddy",
        "blurb": "A natural trailer for this jig.",
        "price": 6.75
      },
      {
        "id": "bottomjig",
        "name": "Bottomjig",
        "blurb": "A lighter jig for open bottom instead of heavy cover.",
        "price": 5.75
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "medium-crankbait",
    "name": "Medium Crankbait",
    "displayNameFull": "Medium Crankbait",
    "price": 8.5,
    "category": "Crankbait",
    "kicker": "Crankbait",
    "metaTitle": "Medium Crankbait | Ketto Outdoors",
    "metaDescription": "Cast it out and reel it back steady. The rattle and wobble get a bass’s attention. $8.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Largemouth & smallmouth bass",
    "shortDescription": "Cast it out and reel it back steady. The rattle and wobble get a bass’s attention.",
    "longDescription": "A medium-diving crankbait, 66mm and 14g (about 100mm long with the hook). It runs at a steady depth when you reel steady, and the rattle carries in cloudy water.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "10-12 lb line"
      ],
      "steps": [
        {
          "title": "Cast past your target",
          "detail": "Cast a few feet beyond docks, points, or rock so the bait is already swimming by the time it reaches the spot."
        },
        {
          "title": "Reel at a steady pace",
          "detail": "Close the bail and reel immediately at a consistent, moderate speed. No pausing."
        },
        {
          "title": "Feel for the wobble",
          "detail": "You should feel a light, rhythmic thump through the rod the whole retrieve. If you feel nothing, speed up slightly."
        },
        {
          "title": "Let it bump cover",
          "detail": "A deflection off rock or wood reads as a direction change, not a snag. Keep reeling through it."
        }
      ],
      "biteFeel": "A hard, sudden weight that interrupts the steady thump of the retrieve.",
      "commonMistakes": [
        "Reeling too slowly, which lets it dig into the bottom instead of deflecting off cover",
        "Stopping the retrieve mid-cast. A steady pace is what makes it forgiving"
      ],
      "confidenceTip": "Cast, reel steady, repeat. This is one of the simplest lures in the kit to fish correctly on the very first cast."
    },
    "specs": {
      "diveDepth": "5-6 ft",
      "weight": "14g / 1/2 oz",
      "length": "~100mm with hook",
      "rattle": "internal"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C",
      "Color D"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Medium diving crankbait",
    "relatedProducts": [
      {
        "id": "deep-six",
        "name": "Deep Six",
        "blurb": "A squarebill crankbait for shallower, snaggier water.",
        "price": 14.5
      },
      {
        "id": "ratlin",
        "name": "Ratlin",
        "blurb": "A lipless crankbait for covering water fast.",
        "price": 10.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "wacky-worm",
    "name": "Wacky Worm",
    "displayNameFull": "Wacky Worm",
    "price": 6.25,
    "category": "Soft Plastic (Wacky Worm)",
    "kicker": "Soft plastic: wacky-rigged worm",
    "metaTitle": "Wacky Worm | Ketto Outdoors",
    "metaDescription": "Rig it, cast it, and let it sink. One of the easiest soft plastics to fish. $6.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "Rig it, cast it, and let it sink. One of the easiest soft plastics to fish.",
    "longDescription": "13.5cm / 5in, 7.5g, in green pumpkin and watermelon. Hook it through the middle so both ends flutter as it sinks. This 'wacky rig' is one of the easiest ways to rig a worm.",
    "guide": {
      "gearNeeded": [
        "1/0 wacky hook + O-ring (included)",
        "Rod and reel",
        "8-10 lb monofilament line"
      ],
      "steps": [
        {
          "title": "Ring it and hook it",
          "detail": "Roll the O-ring onto the middle of the worm, then hook through the ring so the worm hangs horizontally off the hook."
        },
        {
          "title": "Cast near cover",
          "detail": "Cast past docks, laydowns, or weed edges and let it sink on a slack line."
        },
        {
          "title": "Watch it fall",
          "detail": "Both ends of the worm flutter independently as it sinks. Most bites happen right here, before you do anything."
        },
        {
          "title": "Twitch and pause",
          "detail": "Once it's near bottom, twitch the rod tip gently and let it sit for several seconds before twitching again."
        }
      ],
      "biteFeel": "The line jumping sideways or going slack unexpectedly during the fall, or a soft tap once it settles.",
      "commonMistakes": [
        "Skipping the O-ring, which tears the worm in half on the first cast",
        "Not pausing long enough. The fall is doing most of the work here"
      ],
      "confidenceTip": "If you only fish one soft plastic all day, this is the one that's hardest to fish wrong."
    },
    "specs": {
      "length": "13.5cm / 5in",
      "weight": "7.5g",
      "colors": "green pumpkin & watermelon"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Wacky-rigged worm",
    "relatedProducts": [
      {
        "id": "ribtail",
        "name": "Ribtail",
        "blurb": "A curl-tail worm for a different presentation.",
        "price": 5.25
      },
      {
        "id": "driftworm",
        "name": "Driftworm",
        "blurb": "A slower, drag-along-bottom worm.",
        "price": 6.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "chatterbait",
    "name": "Chatterbait",
    "displayNameFull": "Chatterbait",
    "price": 7.75,
    "category": "Bladed Jig",
    "kicker": "Chatterbait / bladed jig",
    "metaTitle": "Chatterbait | Ketto Outdoors",
    "metaDescription": "It vibrates as you reel, so fish can find it in cloudy water. $7.75.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Largemouth bass",
    "shortDescription": "It vibrates as you reel, so fish can find it in cloudy water.",
    "longDescription": "3/8 oz, in green pumpkin and chartreuse/white. A small metal blade on the front makes it shimmy and thump at any steady reeling speed. It sits between a jig and a spinnerbait.",
    "guide": {
      "gearNeeded": [
        "Soft plastic trailer (a paddle tail or craw works well)",
        "Rod and reel",
        "12-15 lb line"
      ],
      "steps": [
        {
          "title": "Add a trailer",
          "detail": "Thread on a paddle tail swimbait or craw trailer for extra bulk and thump."
        },
        {
          "title": "Cast past your target",
          "detail": "Cast beyond grass lines, docks, or stained-water banks."
        },
        {
          "title": "Reel at a steady pace",
          "detail": "Close the bail and reel immediately at a consistent speed. The blade does the vibrating on its own."
        },
        {
          "title": "Slow down through grass",
          "detail": "If it's dragging through vegetation, slow down slightly to keep it from fouling on weeds."
        }
      ],
      "biteFeel": "A hard, thumping strike that cuts the bait’s vibration off mid-retrieve. Usually unmistakable.",
      "commonMistakes": [
        "Reeling too fast through heavy grass, which fouls the blade with weeds",
        "Fishing it on gin-clear water where a more subtle bait usually works better"
      ],
      "confidenceTip": "Cast it, reel steady, and trust the blade to do the attracting. No twitching or special technique required."
    },
    "specs": {
      "weight": "3/8 oz",
      "blade": "stamped metal",
      "colors": "green pumpkin & chartreuse/white"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Chatterbait / bladed jig",
    "relatedProducts": [
      {
        "id": "longshot",
        "name": "Longshot",
        "blurb": "A spinnerbait for a similar murky-water search.",
        "price": 11
      },
      {
        "id": "ratlin",
        "name": "Ratlin",
        "blurb": "A lipless crankbait for covering more water.",
        "price": 10.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "urchin-finesse-bait",
    "name": "Urchin Finesse Bait",
    "displayNameFull": "Urchin Finesse Bait",
    "price": 4.95,
    "category": "Soft Plastic (Finesse)",
    "kicker": "Soft plastic: finesse",
    "metaTitle": "Urchin Finesse Bait | Ketto Outdoors",
    "metaDescription": "A small, subtle bait for the days other lures don’t get bit. Easy to drop next to cover. $4.95.",
    "difficulty": {
      "label": "Advanced",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": "Largemouth & smallmouth bass",
    "shortDescription": "A small, subtle bait for the days other lures don’t get bit. Easy to drop next to cover.",
    "longDescription": "17mm, in green pumpkin, watermelon seed, and chartreuse, with a 1/16 oz or 3/32 oz nail or push weight. It sinks slowly right next to cover, where bigger lures can spook wary fish.",
    "guide": {
      "gearNeeded": [
        "Rod and reel",
        "6-8 lb monofilament line"
      ],
      "steps": [
        {
          "title": "Insert the weight",
          "detail": "Push the nail/push weight into the nose of the bait, 1/16 oz for a slower fall, 3/32 oz to get down faster."
        },
        {
          "title": "Rig it weedless",
          "detail": "Texas-rig it on a small hook so it can be dropped right into cover without snagging."
        },
        {
          "title": "Drop it next to cover",
          "detail": "Pitch it right up against a dock post, laydown, or weed edge rather than casting it into open water."
        },
        {
          "title": "Shake it in place",
          "detail": "Let it settle, then shake the rod tip gently without moving it far. This is a finesse bait, not a search bait."
        }
      ],
      "biteFeel": "Subtle. A light tick or the line feeling slightly heavier than a moment ago.",
      "commonMistakes": [
        "Fishing it fast like a search bait instead of slow and subtle right next to cover",
        "Skipping this bait on tough days when it’s exactly the one built for them"
      ],
      "confidenceTip": "Save this one for when the other seven baits in the kit go quiet. That’s exactly the day it’s built for."
    },
    "specs": {
      "size": "17mm",
      "weight": "1/16 oz or 3/32 oz nail/push weight",
      "colors": "green pumpkin, watermelon seed, chartreuse"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Small finesse soft plastic bait",
    "relatedProducts": [
      {
        "id": "finessedrop",
        "name": "Finesse Drop",
        "blurb": "A drop-shot rig for the same tough, pressured bites.",
        "price": 8
      },
      {
        "id": "flukeshad",
        "name": "Flukeshad",
        "blurb": "A weightless option for cover this bait can’t reach.",
        "price": 5.95
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "bulk-sinkers",
    "name": "Bulk Sinkers",
    "displayNameFull": "Bulk Fishing Weights",
    "price": 4.5,
    "category": "Terminal Tackle (Weights)",
    "kicker": "Weights",
    "metaTitle": "Bulk Sinkers | Ketto Outdoors",
    "metaDescription": "Basic weights that get your bait down to where the fish are. $4.50.",
    "difficulty": null,
    "targetSpecies": "Any species",
    "shortDescription": "Basic weights that get your bait down to where the fish are.",
    "longDescription": "A mixed 10-pack of split-shot and slip weights in the sizes most freshwater rigs use. No guessing which size to grab.",
    "guide": {
      "gearNeeded": [],
      "steps": [
        {
          "title": "Match the weight to the rig",
          "detail": "Use just enough weight to get your bait to depth without killing its natural action. Start light and add more only if you need to."
        },
        {
          "title": "Pinch or thread it on",
          "detail": "Split shot pinches directly onto the line; slip weights thread on above a swivel or bead."
        }
      ],
      "biteFeel": "Depends entirely on what you rig it with. The weight itself has no feel, it just gets your bait to the fish.",
      "commonMistakes": [
        "Using more weight than the rig actually needs, which makes the bait sink unnaturally fast"
      ],
      "confidenceTip": "A pack of weights is hard to get wrong. When in doubt, start with the lightest one that still gets your bait down."
    },
    "specs": {
      "packaging": "assorted, 10-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Assorted bulk sinkers",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Pair these weights with a hook for any bait rig.",
        "price": 4.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "bobbers",
    "name": "Bobbers",
    "displayNameFull": "Snap-On Bobbers",
    "price": 4.75,
    "category": "Terminal Tackle (Float)",
    "kicker": "Float",
    "metaTitle": "Bobbers | Ketto Outdoors",
    "metaDescription": "A bobber going under is the easiest bite to read. You can tell it’s a fish. $4.75.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Panfish & bass",
    "shortDescription": "A bobber going under is the easiest bite to read. You can tell it’s a fish.",
    "longDescription": "Round snap-on floats in mixed sizes. Clip one onto your line above the hook and weight. It holds your bait at one depth and dips under when a fish bites.",
    "guide": {
      "gearNeeded": [
        "Hook and split shot weight",
        "Bait (live worm or a scented soft bait)"
      ],
      "steps": [
        {
          "title": "Set your depth",
          "detail": "Clip the bobber onto your line above the hook. The distance between bobber and hook is roughly how deep your bait will hang."
        },
        {
          "title": "Cast it out",
          "detail": "Cast near a dock, weed edge, or drop-off and let it settle."
        },
        {
          "title": "Watch, don’t reel",
          "detail": "Leave the bail open or the line slack and just watch the bobber sit."
        },
        {
          "title": "Set the hook when it goes under",
          "detail": "When the bobber dips or slides sideways and stays down, reel down to remove slack and set the hook."
        }
      ],
      "biteFeel": "Visual, not physical. The bobber twitches, dips, or disappears under the surface.",
      "commonMistakes": [
        "Setting the hook on every little bobber wiggle instead of waiting for it to actually go under and stay",
        "Using a bobber too big for the bait, which lets fish feel resistance and drop it"
      ],
      "confidenceTip": "This is the most forgiving way to fish that exists. You genuinely just watch and wait."
    },
    "specs": {
      "style": "round, snap-on",
      "packaging": "assorted sizes, 5-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Snap-on bobbers",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Small hooks sized for a bobber rig.",
        "price": 4.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "split-shot-weights",
    "name": "Split Shot Weights",
    "displayNameFull": "Split Shot Weights",
    "price": 3.95,
    "category": "Terminal Tackle (Weights)",
    "kicker": "Weights",
    "metaTitle": "Split Shot Weights | Ketto Outdoors",
    "metaDescription": "Pinch one on above the hook so your bait sinks and hangs under the bobber. $3.95.",
    "difficulty": null,
    "targetSpecies": "Any species",
    "shortDescription": "Pinch one on above the hook so your bait sinks and hangs under the bobber.",
    "longDescription": "Reusable split shot in mixed sizes. Pinch them on with your fingers or pliers, and pinch them off to adjust.",
    "guide": {
      "gearNeeded": [
        "A bobber rig or any light line rig"
      ],
      "steps": [
        {
          "title": "Pick a size",
          "detail": "Start with the smallest shot. Just enough to sink the bait without dragging your bobber under."
        },
        {
          "title": "Pinch it onto the line",
          "detail": "Squeeze it closed onto the line 6-12 inches above the hook."
        },
        {
          "title": "Adjust as needed",
          "detail": "If your bait is floating up too much, add another; if your bobber is sitting too low, remove one."
        }
      ],
      "biteFeel": "No feel of its own. It just gets your bait to hang at the right depth.",
      "commonMistakes": [
        "Using one size for every rig instead of adjusting to how the bobber is sitting"
      ],
      "confidenceTip": "You can’t really get this wrong. Add or remove one until your bobber floats the way you want."
    },
    "specs": {
      "style": "reusable, removable",
      "packaging": "assorted sizes, pack of 20"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Split shot weights",
    "relatedProducts": [
      {
        "id": "bobbers",
        "name": "Bobbers",
        "blurb": "Pair these weights with a float rig.",
        "price": 4.75
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "scented-soft-bait",
    "name": "Scented Soft Bait",
    "displayNameFull": "Scented Soft Bait",
    "price": 5.25,
    "category": "Soft Plastic (Scented)",
    "kicker": "Scented bait: no live bait needed",
    "metaTitle": "Scented Soft Bait | Ketto Outdoors",
    "metaDescription": "Works like a real worm without digging for one. Thread it on and go. $5.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Panfish, trout & bass",
    "shortDescription": "Works like a real worm without digging for one. Thread it on and go.",
    "longDescription": "A pre-scented soft bait shaped like a trout worm. Fish find it by smell as well as sight. Thread it on a small hook under a bobber, or fish it plain on the bottom.",
    "guide": {
      "gearNeeded": [
        "Small hook (size 6-10)",
        "Bobber and split shot, or fish it plain on the bottom"
      ],
      "steps": [
        {
          "title": "Thread it onto the hook",
          "detail": "Push the hook through the head of the bait and out the side, leaving most of the body free to move."
        },
        {
          "title": "Fish it under a bobber or on the bottom",
          "detail": "Under a bobber near cover for panfish, or let it sink and sit on the bottom for anything cruising along it."
        },
        {
          "title": "Be patient",
          "detail": "The scent does a lot of the work. Let it sit in one spot for a while before recasting."
        }
      ],
      "biteFeel": "Same as fishing live bait. A bobber dipping under, or a steady pull if fished on the bottom.",
      "commonMistakes": [
        "Recasting too often instead of letting the scent sit and work an area"
      ],
      "confidenceTip": "If you're not ready to dig up worms or visit a bait shop, this is the honest substitute. It works."
    },
    "specs": {
      "style": "trout-worm, pre-scented"
    },
    "colorOptions": [
      "Color A",
      "Color B",
      "Color C"
    ],
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Scented soft bait",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Small hooks sized for this bait.",
        "price": 4.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "bobber-stops",
    "name": "Bobber Stops & Beads",
    "displayNameFull": "Bobber Stops & Beads",
    "price": 3.5,
    "category": "Terminal Tackle (Rigging)",
    "kicker": "Rigging",
    "metaTitle": "Bobber Stops & Beads | Ketto Outdoors",
    "metaDescription": "Set how deep your bait hangs, and move it up or down as you find the fish. $3.50.",
    "difficulty": null,
    "targetSpecies": "Any species",
    "shortDescription": "Set how deep your bait hangs, and move it up or down as you find the fish.",
    "longDescription": "Small adjustable stops with beads. Thread the stop onto your line above the bobber. The bead keeps it from sliding through the bobber’s hole.",
    "guide": {
      "gearNeeded": [
        "A slip-bobber rig"
      ],
      "steps": [
        {
          "title": "Thread the stop onto the line",
          "detail": "Slide it on before you tie on anything else, then snug the knot down."
        },
        {
          "title": "Add the bead",
          "detail": "Thread a bead on after the stop so it can’t slip through your bobber."
        },
        {
          "title": "Slide it to set depth",
          "detail": "Slide the whole stop up or down the line to change how deep your bait hangs, then reel in. The stop passes through the rod guides fine."
        }
      ],
      "biteFeel": "No feel of its own. It just controls how deep your bait sits below the bobber.",
      "commonMistakes": [
        "Setting it too tight to slide, making it impossible to adjust depth on the water"
      ],
      "confidenceTip": "Once it’s on the line, changing depth takes five seconds, experiment until you find where the fish are."
    },
    "specs": {
      "packaging": "adjustable stops with beads, pack of 20"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Bobber stops and beads",
    "relatedProducts": [
      {
        "id": "bobbers",
        "name": "Bobbers",
        "blurb": "Pair these stops with a slip-bobber rig.",
        "price": 4.75
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "circle-hooks",
    "name": "Circle Hooks",
    "displayNameFull": "Circle Hooks",
    "price": 5.95,
    "category": "Terminal Tackle (Hooks)",
    "kicker": "Hooks: circle style",
    "metaTitle": "Circle Hooks | Ketto Outdoors",
    "metaDescription": "Circle hooks catch catfish in the corner of the mouth on their own, so you aren’t gut-hooking fish while you learn the bite. $5.95.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Catfish",
    "shortDescription": "Circle hooks catch catfish in the corner of the mouth on their own, so you aren’t gut-hooking fish while you learn the bite.",
    "longDescription": "Sizes 5/0 to 7/0, mixed. Bait the hook and let the fish hook itself as it swims off. Don’t jerk the rod back like you would with a normal hook, because that pulls a circle hook out of the fish’s mouth.",
    "guide": {
      "gearNeeded": [
        "Cut bait or live/prepared bait",
        "Egg or bank sinker rig"
      ],
      "steps": [
        {
          "title": "Bait it through the point",
          "detail": "Thread cut bait onto the hook so the point stays mostly exposed."
        },
        {
          "title": "Cast and let it sit",
          "detail": "Cast near structure and place the rod in a holder or against something stable. This is a wait-and-watch bait."
        },
        {
          "title": "Don’t set the hook the normal way",
          "detail": "When the rod bends or line starts steadily peeling out, just start reeling. Don’t yank back."
        },
        {
          "title": "Let the reel do the hooking",
          "detail": "As the fish turns and swims off, the circle shape slides into the corner of the jaw and hooks itself."
        }
      ],
      "biteFeel": "The rod tip bending steadily or line peeling off the reel, not a sharp tap.",
      "commonMistakes": [
        "Setting the hook hard like you would with a normal hook, which usually pulls it right out of the fish’s mouth",
        "Using a hook too small for the bait, which hides the point"
      ],
      "confidenceTip": "The whole point of a circle hook is that you have to do less, not more. Resist the instinct to set hard and just start reeling."
    },
    "specs": {
      "sizes": "5/0-7/0",
      "packaging": "assorted, 10-pack"
    },
    "sizeOptions": [
      "5/0",
      "6/0",
      "7/0"
    ],
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Circle hooks",
    "relatedProducts": [
      {
        "id": "sliding-egg-sinkers",
        "name": "Sliding Egg Sinkers",
        "blurb": "The standard rig weight to pair with these hooks.",
        "price": 4.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "dip-bait-treble-hooks",
    "name": "Dip Bait Treble Hooks",
    "displayNameFull": "Dip Bait Treble Hooks",
    "price": 5.5,
    "category": "Terminal Tackle (Hooks)",
    "kicker": "Hooks: treble, bait-holder spring",
    "metaTitle": "Dip Bait Treble Hooks | Ketto Outdoors",
    "metaDescription": "Stink bait needs a hook that holds paste. A regular hook lets it slide off when you cast. $5.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Catfish",
    "shortDescription": "Stink bait needs a hook that holds paste. A regular hook lets it slide off when you cast.",
    "longDescription": "A small treble hook with a spring around the shank that holds dip bait. Twist the bait into the spring and it stays on through the cast and the sink instead of washing off.",
    "guide": {
      "gearNeeded": [
        "Prepared catfish stink/dip bait"
      ],
      "steps": [
        {
          "title": "Load the spring",
          "detail": "Pack a wad of dip bait around the spring, twisting it in so it holds together."
        },
        {
          "title": "Cast gently",
          "detail": "A smooth, controlled cast keeps the bait from flying off the spring. No need to cast hard."
        },
        {
          "title": "Let it sit",
          "detail": "This is a wait-and-watch bait. Leave it in one spot and let the scent do the work."
        },
        {
          "title": "Reload as needed",
          "detail": "Dip bait washes off over time. Check and reload every so often, especially in current."
        }
      ],
      "biteFeel": "A steady pull or the rod tip bending down. Set the hook firmly once you feel real weight.",
      "commonMistakes": [
        "Casting hard, which flings the bait off the spring before it even hits the water",
        "Leaving it too long without checking. The bait washes off eventually"
      ],
      "confidenceTip": "No cut bait or chicken liver required to start. Just dip the hook in and cast."
    },
    "specs": {
      "style": "treble, bait-holder spring",
      "packaging": "10-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Dip bait treble hooks",
    "relatedProducts": [
      {
        "id": "catfish-stink-bait",
        "name": "Catfish Stink Bait",
        "blurb": "The prepared bait these hooks are built for.",
        "price": 6.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "sliding-egg-sinkers",
    "name": "Sliding Egg Sinkers",
    "displayNameFull": "Sliding Egg Sinkers",
    "price": 4.5,
    "category": "Terminal Tackle (Weights)",
    "kicker": "Weights: slip-sinker rig",
    "metaTitle": "Sliding Egg Sinkers | Ketto Outdoors",
    "metaDescription": "Lets a catfish take the bait and swim off without feeling the weight. Best in calm water. $4.50.",
    "difficulty": null,
    "targetSpecies": "Catfish",
    "shortDescription": "Lets a catfish take the bait and swim off without feeling the weight. Best in calm water.",
    "longDescription": "1 oz, egg-shaped with a hole through the middle so your line slides through it. A swivel above your leader stops it.",
    "guide": {
      "gearNeeded": [
        "Barrel swivel",
        "Leader line and circle hook"
      ],
      "steps": [
        {
          "title": "Thread it onto the main line",
          "detail": "Slide the sinker onto your main line before tying on anything else."
        },
        {
          "title": "Tie a swivel below it",
          "detail": "Tie a barrel swivel to the main line below the sinker so it can’t slide down to the hook."
        },
        {
          "title": "Add leader and hook",
          "detail": "Tie your leader line and circle hook to the other end of the swivel."
        }
      ],
      "biteFeel": "No feel of its own by design. A fish can pick up the bait and the line slides freely through the sinker instead of feeling resistance.",
      "commonMistakes": [
        "Using a bank sinker instead in current, where it won’t hold bottom as well as a flatter no-roll sinker"
      ],
      "confidenceTip": "Still water, calm bank, slower current. This is the right sinker. For moving water, reach for the no-roll sinkers instead."
    },
    "specs": {
      "weight": "1 oz",
      "style": "sliding egg",
      "packaging": "10-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Sliding egg sinkers",
    "relatedProducts": [
      {
        "id": "no-roll-bank-sinkers",
        "name": "No-Roll Bank Sinkers",
        "blurb": "The current-water alternative to this rig weight.",
        "price": 4.75
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "no-roll-bank-sinkers",
    "name": "No-Roll Bank Sinkers",
    "displayNameFull": "No-Roll Bank Sinkers",
    "price": 4.75,
    "category": "Terminal Tackle (Weights)",
    "kicker": "Weights: current fishing",
    "metaTitle": "No-Roll Bank Sinkers | Ketto Outdoors",
    "metaDescription": "Flat sinkers that stay put in current. Use these on a river bank. $4.75.",
    "difficulty": null,
    "targetSpecies": "Catfish",
    "shortDescription": "Flat sinkers that stay put in current. Use these on a river bank.",
    "longDescription": "2 oz, flat-sided so the current pushes them into the bottom instead of rolling them downstream. Use with a swivel and leader, the same way as the egg sinker rig.",
    "guide": {
      "gearNeeded": [
        "Barrel swivel",
        "Leader line and circle hook"
      ],
      "steps": [
        {
          "title": "Rig it above a swivel",
          "detail": "Same rig as the egg sinker. Thread it on the main line, then tie a swivel below it, then your leader and hook."
        },
        {
          "title": "Cast upstream of your target",
          "detail": "In current, cast slightly upstream so the rig settles where you actually want it."
        },
        {
          "title": "Check that it’s holding",
          "detail": "Feel for steady resistance. If the rig keeps sliding downstream, go up a size."
        }
      ],
      "biteFeel": "A steady pull or the rod tip loading up, current fishing tends to feel more constant than still water.",
      "commonMistakes": [
        "Using a round egg sinker in real current, where it rolls downstream instead of holding"
      ],
      "confidenceTip": "Moving water, river banks, current seams. This is the sinker built for exactly that, where the egg sinker would just roll away."
    },
    "specs": {
      "weight": "2 oz",
      "style": "no-roll, flat",
      "packaging": "10-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "No-roll bank sinkers",
    "relatedProducts": [
      {
        "id": "sliding-egg-sinkers",
        "name": "Sliding Egg Sinkers",
        "blurb": "The still-water alternative to this rig weight.",
        "price": 4.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "barrel-swivels",
    "name": "Barrel Swivels",
    "displayNameFull": "Heavy-Duty Barrel Swivels",
    "price": 4.25,
    "category": "Terminal Tackle (Rigging)",
    "kicker": "Rigging",
    "metaTitle": "Barrel Swivels | Ketto Outdoors",
    "metaDescription": "Stops your leader from twisting and joins the rig without a bulky knot. $4.25.",
    "difficulty": null,
    "targetSpecies": "Catfish",
    "shortDescription": "Stops your leader from twisting and joins the rig without a bulky knot.",
    "longDescription": "Heavy-duty barrel swivels sized for catfish rigs. Tie your main line to one end and your leader to the other.",
    "guide": {
      "gearNeeded": [
        "Main line and leader line"
      ],
      "steps": [
        {
          "title": "Tie main line to one end",
          "detail": "Use a simple clinch knot to attach your main line (with sinker already threaded on) to one eye of the swivel."
        },
        {
          "title": "Tie leader to the other end",
          "detail": "Attach your leader line and hook to the opposite eye."
        },
        {
          "title": "Check it spins freely",
          "detail": "A good connection lets the swivel spin on its own. That’s what stops line twist during the fight."
        }
      ],
      "biteFeel": "No feel of its own. It’s a connector, not a bait or weight.",
      "commonMistakes": [
        "Skipping the swivel entirely and tying the sinker directly to the leader, which twists line up fast"
      ],
      "confidenceTip": "A small, easy-to-overlook piece that quietly prevents a very common, very annoying problem, tangled, twisted line."
    },
    "specs": {
      "style": "heavy-duty barrel",
      "packaging": "10-pack"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Heavy-duty barrel swivels",
    "relatedProducts": [
      {
        "id": "fluorocarbon-leader",
        "name": "Fluorocarbon Leader Line",
        "blurb": "Pair with these swivels for a full catfish rig.",
        "price": 8.5
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "fluorocarbon-leader",
    "name": "Fluorocarbon Leader Line",
    "displayNameFull": "Fluorocarbon Leader Line",
    "price": 8.5,
    "category": "Terminal Tackle (Line)",
    "kicker": "Line: 30 lb leader",
    "metaTitle": "Fluorocarbon Leader Line | Ketto Outdoors",
    "metaDescription": "Tough enough to survive being dragged over rocks on the bottom. $8.50.",
    "difficulty": null,
    "targetSpecies": "Catfish",
    "shortDescription": "Tough enough to survive being dragged over rocks on the bottom.",
    "longDescription": "30 lb test fluorocarbon line to cut leader lengths from. Tie it between your swivel and hook so the rig can take being dragged over rocks.",
    "guide": {
      "gearNeeded": [
        "Barrel swivel and circle hook"
      ],
      "steps": [
        {
          "title": "Cut a leader length",
          "detail": "Cut roughly 12-18 inches for a standard bottom rig, longer in clearer water, shorter in murkier water."
        },
        {
          "title": "Tie to the swivel",
          "detail": "Attach one end to your swivel with a clinch knot."
        },
        {
          "title": "Tie on your hook",
          "detail": "Attach a circle hook or dip-bait treble to the other end."
        }
      ],
      "biteFeel": "No feel of its own. It’s there to survive the fight, not signal the bite.",
      "commonMistakes": [
        "Using your regular main line as the leader instead, which frays and breaks on rock and structure much faster"
      ],
      "confidenceTip": "This is the piece that keeps a good fish from breaking off on the one rock you didn’t see. Cheap insurance."
    },
    "specs": {
      "test": "30 lb",
      "material": "fluorocarbon"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Fluorocarbon leader line spool",
    "relatedProducts": [
      {
        "id": "barrel-swivels",
        "name": "Barrel Swivels",
        "blurb": "Connects this leader to your main line.",
        "price": 4.25
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "catfish-stink-bait",
    "name": "Catfish Stink Bait",
    "displayNameFull": "Prepared Catfish Dip Bait",
    "price": 6.5,
    "category": "Natural Bait / Prepared Bait",
    "kicker": "Bait: prepared dip/paste",
    "metaTitle": "Catfish Stink Bait | Ketto Outdoors",
    "metaDescription": "No cut bait or chicken liver needed. Dip the hook and cast. $6.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Catfish",
    "shortDescription": "No cut bait or chicken liver needed. Dip the hook and cast.",
    "longDescription": "A ready-to-use dip bait made for a hook with a spring. Catfish find it by smell, so it works even in murky water.",
    "guide": {
      "gearNeeded": [
        "Dip bait treble hook (spring style)"
      ],
      "steps": [
        {
          "title": "Load the spring hook",
          "detail": "Dip and pack the spring on your treble hook with bait until it holds a solid wad."
        },
        {
          "title": "Cast gently",
          "detail": "A smooth cast keeps the bait on the hook. No need to power through the cast."
        },
        {
          "title": "Let it sit and work",
          "detail": "Leave it in place. The scent spreads through the water and draws fish in over time."
        },
        {
          "title": "Reload periodically",
          "detail": "Check every 20-30 minutes and reload if the bait has washed off."
        }
      ],
      "biteFeel": "A steady pull or the rod tip loading down. This is a wait-and-watch bait.",
      "commonMistakes": [
        "Recasting too often instead of letting one spot build scent over time"
      ],
      "confidenceTip": "This is genuinely the simplest way to start catfishing. No bait prep, no cutting, just dip and cast."
    },
    "specs": {
      "style": "prepared dip/paste bait"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Prepared catfish dip bait",
    "relatedProducts": [
      {
        "id": "dip-bait-treble-hooks",
        "name": "Dip Bait Treble Hooks",
        "blurb": "The hook this bait is built for.",
        "price": 5.5
      }
    ],
    "reviewsSectionPresent": false
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
