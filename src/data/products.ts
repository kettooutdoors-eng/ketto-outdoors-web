import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    "id": "deep-six",
    "name": "Deep Six",
    "displayNameFull": "Deep Six Squarebill Crankbait",
    "price": 14.5,
    "category": "Crankbait (Squarebill)",
    "kicker": "Squarebill / 2.5 in / 1/2 oz",
    "metaTitle": "Deep Six Squarebill Crankbait — Ketto Outdoors",
    "metaDescription": "A wide-hunting squarebill that runs six feet and deflects instead of hanging. $14.50.",
    "difficulty": null,
    "targetSpecies": "Largemouth & smallmouth bass",
    "shortDescription": "A wide-hunting squarebill that runs six feet and deflects instead of hanging. Balanced on the pause, hard on the strike.",
    "longDescription": "Squarebills dive shallower on a slack line, deeper on a tight one. Deep Six holds a tight +/-1 ft band around 6 ft on a steady retrieve — tighter than most squarebills in its class. Retrieve notes: on a steady retrieve the bill loads, the body rolls six degrees each side, and the tail throws water off the back. At a brisk, steady reel speed of about 2.4 mph (roughly 90 handle turns per minute, about 1.5 cranks every second, no pausing), it holds its wobble and depth band consistently.",
    "howToFish": [
      "Cast out and retrieve at a steady, brisk pace (about 2.4 mph / 1.5 handle turns per second, no pausing) to hold the 6 ft depth band",
      "Let the squared bill deflect off rock and timber contact — it reads as a direction change rather than a snag",
      "On the pause, the balsa core keeps it buoyant enough to back out of cover"
    ],
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
        "part": "01 — Bill",
        "title": "Square, 45 degrees",
        "description": "The corner catches the rock and kicks the body sideways, so contact reads as a direction change rather than a snag."
      },
      {
        "part": "02 — Body",
        "title": "Balsa core",
        "description": "Buoyant enough to back out of cover on the pause, dense enough to hold the wobble at speed."
      },
      {
        "part": "03 — Rattle",
        "title": "Single knocker",
        "description": "One tungsten ball, low and irregular — a thud that carries in stained water instead of a rasp."
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light enough to feel the bill ticking bottom on every retrieve.",
        "price": 54.99
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
    "metaTitle": "Driftworm Soft Plastic — Ketto Outdoors",
    "metaDescription": "Rig it and drag it slowly along the bottom. About as simple as fishing gets. $6.50.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "Rig it and drag it slowly along the bottom. About as simple and forgiving as fishing gets — a great confidence-builder.",
    "longDescription": "Slow, patient fishing along the bottom near cover — a great first lure to learn feel with.",
    "howToFish": [
      "Rig on a simple hook",
      "Cast out and let it sink",
      "Drag it back slowly with long pauses"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
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
    "metaTitle": "Baithooks — Ketto Outdoors",
    "metaDescription": "A basic assortment of sized hooks for rigging soft plastics and live bait. $4.25.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Any species — pick a size to match your bait",
    "shortDescription": "A basic assortment of sized hooks for rigging soft plastics and live bait. Start here if you need hooks for the Driftworm.",
    "longDescription": "Rigging soft plastics like the Driftworm, or tipping with live bait.",
    "howToFish": [
      "Match hook size to bait size — a hook that's too big kills the action, too small won't set"
    ],
    "specs": {
      "sizes": "1/0 - 4/0",
      "packaging": "sold in packs of 10"
    },
    "colorOptions": null,
    "sizeOptions": [
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
      {
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      }
    ],
    "reviewsSectionPresent": true,
    "reviewsSectionLabel": "What anglers say"
  },
  {
    "id": "spinning-combo",
    "name": "Spinning Combo",
    "displayNameFull": "Spinning Rod & Reel Combo (5'6\")",
    "price": 54.99,
    "category": "Combo / Rod & Reel",
    "kicker": "Combo — 5'6\" Rod + Spinning Reel",
    "metaTitle": "Spinning Rod & Reel Combo — Ketto Outdoors",
    "metaDescription": "A matched rod and reel, spooled and ready to cast out of the box. $54.99.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": null,
    "bestFor": "First-time casters, lighter lures",
    "shortDescription": "A matched rod and reel, spooled and ready to cast out of the box — the easiest way to start. The rod loads easily on the cast, and the spinning reel's bail flips open and shut with no backlash to untangle.",
    "longDescription": "Pre-matched so there's no guessing which reel fits which rod — just spool line and cast. Medium power and a fast tip load easily on the cast, and the fixed-spool reel can't overrun and tangle.",
    "howToFish": null,
    "whyItsEasy": "Medium power and a fast tip load easily on the cast, and the fixed-spool reel can't overrun and tangle.",
    "specs": {
      "rodLength": "5'6\"",
      "rodPower": "medium/fast",
      "reelSize": "2500-size",
      "gearRatio": "5.2:1"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Spinning Rod & Reel Combo",
    "relatedProducts": [
      {
        "id": "driftworm",
        "name": "Driftworm",
        "blurb": "Another slow, forgiving bottom bait.",
        "price": 6.5
      },
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging soft plastics.",
        "price": 4.25
      },
      {
        "id": "longshot",
        "name": "Longshot",
        "blurb": "Good backup for murky water days.",
        "price": 11
      }
    ],
    "reviewsSectionPresent": true,
    "reviewsSectionLabel": "What anglers say"
  },
  {
    "id": "baitcaster",
    "name": "Baitcaster",
    "displayNameFull": "Baitcaster Combo",
    "price": 72.99,
    "category": "Combo / Rod & Reel",
    "kicker": "Combo — 6'6\" Medium-Heavy Rod + Baitcaster Reel",
    "metaTitle": "Baitcaster Combo — Ketto Outdoors",
    "metaDescription": "A matched rod and baitcaster reel for more accuracy and power. $72.99.",
    "difficulty": {
      "label": "Intermediate",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": null,
    "bestFor": "Heavier lures, pinpoint casts",
    "shortDescription": "A matched rod and baitcaster reel, spooled and ready to go — more accurate and more power once you've got the thumb control down. A step up once the spinning combo feels easy.",
    "longDescription": "Pairs well with crankbaits like the Deep Six once you're comfortable with the thumb-bar.",
    "howToFish": null,
    "learningCurve": "The spool spins with the cast — feather it with your thumb or you'll get a backlash. Takes practice.",
    "specs": {
      "rodLength": "6'6\"",
      "rodPower": "medium-heavy",
      "gearRatio": "7.1:1",
      "ballBearings": "6",
      "brake": "adjustable"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Baitcaster",
    "relatedProducts": [
      {
        "id": "deep-six",
        "name": "Deep Six",
        "blurb": "A go-to squarebill to alternate retrieves with.",
        "price": 14.5
      },
      {
        "id": "ratlin",
        "name": "Ratlin",
        "blurb": "Covers water fast between casts.",
        "price": 10.25
      },
      {
        "id": "padhopper",
        "name": "Padhopper",
        "blurb": "For working thicker cover in the same trip.",
        "price": 11.5
      }
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
    "metaTitle": "Longshot — Ketto Outdoors",
    "metaDescription": "A long-casting spoon built to cover open water fast.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "Tandem willow blades flash and vibrate so fish can find it even when they can't see far. Reel it steady, no technique needed — good for murky or cloudy water.",
    "longDescription": "Stained or muddy water, low light, and covering water fast to find active fish.",
    "howToFish": [
      "Cast out and close the bail",
      "Reel back at a steady pace — the spinning blades do the work, no jerking needed"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      },
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
    "metaTitle": "Chugger — Ketto Outdoors",
    "metaDescription": "A topwater popper that chugs and spits on the pause.",
    "difficulty": {
      "label": "Intermediate",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "A concave face throws a hard splash on the twitch and walks clean between pops. Exciting to watch, fun once you're ready to level up.",
    "longDescription": "Calm mornings and evenings when fish are looking up near the surface.",
    "howToFish": [
      "Twitch the rod tip to make it \"chug\" and pause between pops",
      "Takes a little practice to find a rhythm fish like"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
      },
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
    "metaTitle": "Ripple — Ketto Outdoors",
    "metaDescription": "A paddle-tail swimbait for a steady, thumping retrieve.",
    "difficulty": {
      "label": "Intermediate",
      "number": 5,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & trout",
    "shortDescription": "Twitch-pause-twitch gives it a darting, suspended action. A slight learning curve, but deadly on cold, sluggish fish.",
    "longDescription": "Cold water and slow, suspended fish that won't chase a fast retrieve.",
    "howToFish": [
      "Twitch the rod, then pause several seconds to let it hang suspended",
      "Most bites come on the pause"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
      },
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
    "metaTitle": "Bottomjig — Ketto Outdoors",
    "metaDescription": "Feel for the bottom and hop it back. $5.75.",
    "difficulty": {
      "label": "Intermediate",
      "number": 5,
      "outOf": 10
    },
    "targetSpecies": "Bass & walleye",
    "shortDescription": "Feel for the bottom and hop it back. Versatile and bottom-hugging — takes a little practice to read the bites.",
    "longDescription": "Rocky bottoms and drop-offs where fish sit low and hug structure.",
    "howToFish": [
      "Let it sink to the bottom",
      "Hop it back in short lifts",
      "Bites often feel like a light tap or extra weight"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
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
    "metaTitle": "Buzzrunner — Ketto Outdoors",
    "metaDescription": "A topwater buzzbait for explosive surface strikes.",
    "difficulty": {
      "label": "Intermediate",
      "number": 6,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "Loud surface commotion that draws explosive strikes. Reel fast enough to keep it churning — takes a bit of practice to find the pace.",
    "longDescription": "Low light, aggressive fish, and open surface water near cover.",
    "howToFish": [
      "Reel immediately and fast enough to keep the blade churning on top without sinking"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
      },
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
    "metaTitle": "Swimshad — Ketto Outdoors",
    "metaDescription": "A swimbait built to imitate baitfish at any retrieve speed.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & striped bass",
    "shortDescription": "Realistic, steady swimming action. Cast and reel at a steady pace — its paddle tail does the swimming for you.",
    "longDescription": "Open water and imitating baitfish at a natural, steady pace.",
    "howToFish": [
      "Cast out and reel at a consistent, moderate speed",
      "The paddle tail wobbles automatically"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      },
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
    "metaTitle": "Ratlin — Ketto Outdoors",
    "metaDescription": "A lipless crankbait with a loud internal rattle. $10.25.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Bass & crappie",
    "shortDescription": "Cast far, reel steady. A loud internal rattle helps you cover water fast to find active fish.",
    "longDescription": "Covering open water fast to locate schools of active fish.",
    "howToFish": [
      "Cast far and reel at a steady, moderate pace",
      "Vary depth by reeling faster or slower"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
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
    "metaTitle": "Padhopper — Ketto Outdoors",
    "metaDescription": "A weedless frog for skipping across lily pads and slop.",
    "difficulty": {
      "label": "Advanced",
      "number": 7,
      "outOf": 10
    },
    "targetSpecies": "Largemouth bass",
    "shortDescription": "Weedless and built for heavy cover. Walks over lily pads and slop — takes practice timing the hookset through cover.",
    "longDescription": "Lily pads, mats, and slop where other lures would snag immediately.",
    "howToFish": [
      "Walk it steadily over cover",
      "Wait a beat after a blow-up before setting the hook hard"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
      },
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
    "metaTitle": "Flutterspoon — Ketto Outdoors",
    "metaDescription": "A flutter spoon for vertical jigging and reaction strikes.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Trout, walleye & crappie",
    "shortDescription": "Simple flash and flutter. Cast, let it sink, reel it back — one simple wobbling flash of metal.",
    "longDescription": "Deep, clear water and vertical jigging near schools of baitfish.",
    "howToFish": [
      "Let it sink to depth",
      "Reel steadily or lift-and-drop for extra flutter"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      },
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
    "metaTitle": "Finesse Drop — Ketto Outdoors",
    "metaDescription": "A finesse drop-shot rig for finicky, pressured fish.",
    "difficulty": {
      "label": "Advanced",
      "number": 7,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & walleye",
    "shortDescription": "Precise depth control and a subtle shake. More technique, but more control over tough, pressured bites.",
    "longDescription": "Tough bites, pressured fish, and precise depth control off the bottom.",
    "howToFish": [
      "Drop to depth, keeping the weight on bottom",
      "Shake the rod tip gently to make the bait quiver in place"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      },
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
    "kicker": "Soft plastic — curl-tail worm",
    "metaTitle": "Ribtail — Ketto Outdoors",
    "metaDescription": "A ribbed soft-plastic worm with extra tail vibration.",
    "difficulty": {
      "label": "Beginner",
      "number": 2,
      "outOf": 10
    },
    "targetSpecies": "Bass & panfish",
    "shortDescription": "A curling tail kicks on the fall and the retrieve. Forgiving and versatile — rig it a dozen ways as you learn.",
    "longDescription": "Nearly any water — a reliable everyday bait once you've picked a rig.",
    "howToFish": [
      "Rig weightless or on a light jighead",
      "Cast out and reel slowly with occasional pauses to let the tail flutter"
    ],
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
      {
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "crawdaddy",
    "name": "Crawdaddy",
    "displayNameFull": "Crawdaddy",
    "price": 6.75,
    "category": "Soft Plastic (Creature Bait)",
    "kicker": "Soft plastic — creature bait",
    "metaTitle": "Crawdaddy — Ketto Outdoors",
    "metaDescription": "A crawfish-imitating lure for bottom-hugging bites.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Bass & smallmouth bass",
    "shortDescription": "Flapping claws imitate a crawfish scooting along the bottom. A great pairing with a jig once you're ready to read bottom bites.",
    "longDescription": "Rocky or gravel bottoms where real crawfish live.",
    "howToFish": [
      "Pair with the Bottomjig",
      "Let it sink and hop it slowly along the bottom",
      "Feel for a heavy tap"
    ],
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
      {
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      }
    ],
    "reviewsSectionPresent": false
  },
  {
    "id": "flukeshad",
    "name": "Flukeshad",
    "displayNameFull": "Flukeshad",
    "price": 5.95,
    "category": "Soft Plastic (Weightless Jerkbait)",
    "kicker": "Soft plastic — weightless jerkbait",
    "metaTitle": "Flukeshad — Ketto Outdoors",
    "metaDescription": "A soft-plastic fluke for a darting, baitfish-like action.",
    "difficulty": {
      "label": "Beginner",
      "number": 3,
      "outOf": 10
    },
    "targetSpecies": "Bass & pike",
    "shortDescription": "Rigged weedless and weightless, it darts side to side just under the surface. Simple twitch-and-pause retrieve.",
    "longDescription": "Around docks, weed edges, and other cover a weighted lure would snag on.",
    "howToFish": [
      "Rig weedless",
      "Cast near cover",
      "Twitch the rod tip with pauses to make it dart"
    ],
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
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
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
    "kicker": "Soft plastic — tube bait",
    "metaTitle": "Tubehead — Ketto Outdoors",
    "metaDescription": "A tube jig for finesse presentations around structure.",
    "difficulty": {
      "label": "Intermediate",
      "number": 4,
      "outOf": 10
    },
    "targetSpecies": "Smallmouth bass & walleye",
    "shortDescription": "Its tentacle skirt flares on the fall and pause — a classic bottom bait for rocky structure.",
    "longDescription": "Rock piles, riprap, and bottom structure where fish tuck in tight.",
    "howToFish": [
      "Insert a tube jighead",
      "Let it sink to bottom",
      "Hop it slowly — most bites hit on the fall"
    ],
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
        "id": "baitcaster",
        "name": "Baitcaster Combo",
        "blurb": "More accuracy and power once you're ready.",
        "price": 72.99
      },
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
    "id": "urchin-bait",
    "name": "Urchin Bait",
    "displayNameFull": "Urchin Bait",
    "price": 5.5,
    "category": "Terminal Tackle / Natural Bait",
    "kicker": "Natural bait — Cut urchin",
    "metaTitle": "Urchin Bait — Ketto Outdoors",
    "metaDescription": "Dried, cut urchin bait for sheepshead, tautog, and black drum around structure.",
    "difficulty": {
      "label": "Beginner",
      "number": 1,
      "outOf": 10
    },
    "targetSpecies": "Sheepshead, tautog & black drum",
    "shortDescription": "Dried, cut chunks of urchin — no rigging tricks required. Just hook a piece and drop it near structure where bottom feeders hold.",
    "longDescription": "Docks, jetties, pilings, and rocky structure where these fish graze.",
    "howToFish": [
      "Thread a small chunk onto a hook",
      "Drop straight down next to structure",
      "Hold tight for a light tap-tap bite"
    ],
    "specs": {
      "packaging": "resealable pack of dried, cut urchin",
      "storage": "keeps refrigerated for weeks"
    },
    "colorOptions": null,
    "trustBadges": [
      "Ships in 1-2 business days",
      "30-day returns on unused gear"
    ],
    "imagePlaceholderAlt": "Urchin Bait",
    "relatedProducts": [
      {
        "id": "baithooks",
        "name": "Baithooks",
        "blurb": "Sized right for rigging this bait.",
        "price": 4.25
      },
      {
        "id": "spinning-combo",
        "name": "Spinning Rod & Reel Combo",
        "blurb": "Light, beginner-friendly rod to fish this with.",
        "price": 54.99
      },
      {
        "id": "driftworm",
        "name": "Driftworm",
        "blurb": "Another slow, forgiving bottom bait.",
        "price": 6.5
      }
    ],
    "reviewsSectionPresent": false
  }
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
