/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Region } from "../types";

export const MALAYSIA_REGIONS: Region[] = [
  {
    id: "kl-selangor",
    name: "Kuala Lumpur & Selangor",
    alternateName: "The Sovereign Center",
    description: "The crown jewel of metropolitan luxury, featuring soaring skyscrapers, grand modern ballrooms, and prestigious world-class five-star hotels.",
    markerX: 25, // Positioning on the SVG map
    markerY: 72,
    venues: [
      {
        id: "st-regis",
        name: "The St. Regis Grand Ballroom",
        regionId: "kl-selangor",
        tagline: "Opulence Redefined Under Swarovski Chandeliers",
        description: "An grand masterpiece located in the prestigious KL Sentral precinct, featuring astronomical hand-polished crystal chandeliers, 9-meter high ceilings, and an exclusive private bridal suite.",
        capacity: "300 - 800 Guests",
        vibe: "Regal, Majestic, Uncompromised Elegance",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 550,
          minPax: 400,
          maxPaxCount: 800,
          menuTitle: "Empress Royal Imperial Selection",
          menuCourses: [
            {
              courseName: "Amuse-Bouche & Appetizer",
              dishName: "Imperial Lobster Trio & Caviar",
              description: "Poached Maine lobster medallions with Ossetra caviar, 24K edible gold leaf, and ginger-infused white soy reduction."
            },
            {
              courseName: "Celestial Broth",
              dishName: "Double-Boiled Royal Consommé",
              description: "Slow-simmered organic black chicken broth with wild mountain ginseng, sea conch, and premium whole fish maw."
            },
            {
              courseName: "Ocean Splendor",
              dishName: "Slow-Braised South African Abalone",
              description: "Steamed intact whole abalone served over imported Japanese shiitake mushrooms and broccolini in a rich golden superior reduction."
            },
            {
              courseName: "The Masterpiece",
              dishName: "Symphony of A5 Wagyu & Black Winter Truffle",
              description: "Melt-in-your-mouth charcoal-kissed Wagyu tenderloin accompanied by fresh shaved black truffles and organic parsnip silk."
            },
            {
              courseName: "Grand Finale",
              dishName: "Valrhona Guanaja Dome & Bird's Nest",
              description: "70% dark single-origin chocolate dome, gold dust, complemented by chilled premium coconut and double-boiled bird's nest elixir."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "The Atelier by Prof. Jimmy Choo & Bernard Chandran Haute Couture",
          attireDetails: [
            "Bespoke consult with a master designer",
            "Premium choice of 2 custom hand-embroidered lace bridal gowns",
            "2 tailored luxury wool/silk tuxedos made to measure",
            "In-house dedicated dresser for the entire wedding duration"
          ],
          decorHighlights: [
            "Over 15,000 fresh white roses, orchids, and hydrangeas in sculptural installations",
            "Bespoke 3D mapping Projection technology customized to your love story",
            "Mirrored runway and glass stage over a bed of baby's breath",
            "Custom dramatic intelligent lighting with crystal wash effects"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours of seamless luxury coverage by 3 international-award master photographers",
            "Handcrafted custom wedding photo book produced in Florence, Italy",
            "Same-day edit highlight cinematic film (4K ultra-high definition)",
            "Exclusive pre-wedding portrait editorial at selected heritage monuments"
          ]
        }
      },
      {
        id: "klcc-sky-pavilion",
        name: "The Sky Pavilion at Grand Hyatt",
        regionId: "kl-selangor",
        tagline: "Vows Suspended Among the Skyline Stars",
        description: "A breathtaking glass sanctuary floating above the city, offering uncompromised 360-degree views of the iconic Petronas Twin Towers.",
        capacity: "200 - 450 Guests",
        vibe: "Sleek, Contemporary, Cosmic Glamour",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 480,
          minPax: 250,
          maxPaxCount: 450,
          menuTitle: "High-Society Cosmopolitan Gastronomy",
          menuCourses: [
            {
              courseName: "Prelude",
              dishName: "Seared Hokkaido Scallop & Truffle Foam",
              description: "Jumbo hand-dived scallops on sunchoke puree with fresh winter truffle foam and micro-basil."
            },
            {
              courseName: "Nourish",
              dishName: "Velvet Saffron Seafood Nectar",
              description: "Rich infusion of saffron, local mud crab, and hand-shucked clams, topped with sourdough gold croutons."
            },
            {
              courseName: "Sea",
              dishName: "Atlantic Halibut with Champagne Beurre Blanc",
              description: "Poached halibut fillet, young leeks, sea grapes, finished with rich vintage champagne emulsion."
            },
            {
              courseName: "Land",
              dishName: "Slow-Roasted Black Angus Short Rib",
              description: "36-hour slow-cooked short rib, sweet potato mousseline, fermented black garlic jus."
            },
            {
              courseName: "Confection",
              dishName: "Pistachio Raspberry Jewel",
              description: "Sicilian pistachio biscuit, delicate raspberry coulis insert, white chocolate velvet, gold petal."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "Alia Bastamam Haute Couture & Innai Red",
          attireDetails: [
            "2 modern high-fashion fluid bridal creations customized to size",
            "2 bespoke velvet or ultra-fine wool tuxedos with customized monograms",
            "Exclusive access to luxury veil and diamond hair accessory rental library"
          ],
          decorHighlights: [
            "Geometric metallic gold frames wrapped in ivory cascading orchids",
            "Reflective water-feature pathway creating a walking-on-water illusion",
            "Stardust ceiling projection using 5,000 fiber optic twinkle lights",
            "Gilded minimalist sweetheart table styled with white calla lilies"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours coverage by 2 elite cinematic photographers and 2 videographers",
            "Dynamic drone sky cinematography capturing the Petronas Twin Towers backdrop",
            "Premium high-gloss fine art album (50 pages)",
            "Private digital gallery with cloud access for guests"
          ]
        }
      }
    ]
  },
  {
    id: "penang-prai",
    name: "Penang & Seberang Perai",
    alternateName: "The Straits Majesty",
    description: "The romance of the orient meets oceanfront grandeur. Elegant colonial mansions, sunset beach sanctuaries, and rich culture.",
    markerX: 14,
    markerY: 35,
    venues: [
      {
        id: "eo-hotel",
        name: "Eastern & Oriental (E&O) Grand Ballroom",
        regionId: "penang-prai",
        tagline: "Colonial Grandeur by the Andaman Coast",
        description: "The legendary heritage jewel of George Town. Merging early 20th-century colonial architectural romance with coastal elegance and sea breezes.",
        capacity: "200 - 500 Guests",
        vibe: "Timeless Colonial, Seafront Heritage, Vintage Romance",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 450,
          minPax: 250,
          maxPaxCount: 500,
          menuTitle: "Straits Elite Heritage Gastronomy",
          menuCourses: [
            {
              courseName: "Opening",
              dishName: "Penang Blue Swimmer Crab Medley",
              description: "Premium hand-picked blue swimmer crab meat tian with organic salted egg custard, local wild herb gel, and edible flower petals."
            },
            {
              courseName: "Ocean Infusion",
              dishName: "Nyonya Jewel Seafood Bisque",
              description: "Spiced seafood nectar, steamed local lobster dumpling, kaffir lime foam."
            },
            {
              courseName: "The Reef",
              dishName: "Sake-Infused Wild Atlantic Cod",
              description: "Pan-roasted cod fish over lemongrass-scented organic grains, caramelized soy-mirin lacquer."
            },
            {
              courseName: "The Range",
              dishName: "Herb-Crusted Rack of Lamb",
              description: "Roasted tender lamb rack, local nutmeg-scented jus, caramelized sweet potatoes."
            },
            {
              courseName: "Sweet End",
              dishName: "Deconstructed Pandan Kaya Soufflé",
              description: "Baked organic pandan-infused light soufflé with gold-infused coconut ice cream and palm sugar cloud."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "Rizalman Haute Couture Heritage Line",
          attireDetails: [
            "Exclusive bespoke consultation with the design house",
            "2 masterfully draped colonial-inspired lace wedding gowns",
            "2 tailored classic double-breasted tuxedos from elite fabrics",
            "Custom gold traditional tiara and matching jewelry accessories"
          ],
          decorHighlights: [
            "Colonial vintage architectural archways wrapped in white English roses and eucalyptus",
            "Floating outdoor coastal floral canopy overlooking the Andaman Sea",
            "Antique brass candelabras with ivory candles creating a warm, historic glow",
            "Classic customized wax-sealed linen guest menus and cards"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours coverage with 2 heritage-certified visual master artists",
            "Dramatic drone oceanfront aerial wedding cinematography",
            "Classic film-graded cinematic documentary of the celebration",
            "Elegant vintage canvas print framed in solid teakwood"
          ]
        }
      }
    ]
  },
  {
    id: "johor-bahru",
    name: "Johor Bahru",
    alternateName: "The Southern Gateway",
    description: "Sleek waterfront prestige facing the Singapore Straits, featuring modern architectural masterpieces and exclusive luxury yacht club retreats.",
    markerX: 42,
    markerY: 92,
    venues: [
      {
        id: "ritz-johor",
        name: "The Ritz-Carlton Waterfront Pavilion",
        regionId: "johor-bahru",
        tagline: "Floor-to-Ceiling Coastal Magnificence",
        description: "A prestigious contemporary haven overlooking the Johor Straits. Features majestic glass walls, a sunset floating boardwalk, and impeccable hospitality.",
        capacity: "250 - 600 Guests",
        vibe: "Waterfront Chic, Contemporary Grandeur, Sunset Splendor",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 480,
          minPax: 300,
          maxPaxCount: 600,
          menuTitle: "Modernist Straits Culinary Signature",
          menuCourses: [
            {
              courseName: "Amuse-Bouche",
              dishName: "Hokkaido Scallop & Osetra Caviar",
              description: "Chilled hand-dived scallop carpaccio, Royal Osetra caviar, citrus gold-leaf jelly."
            },
            {
              courseName: "Harvest",
              dishName: "Double-Boiled Forest Mushroom Consommé",
              description: "Clarified slow-simmered organic mushrooms, gold flakes, fresh mountain thyme."
            },
            {
              courseName: "Estuary",
              dishName: "Sabah Giant King Prawn",
              description: "Baked local giant prawn with a rich garlic herb crust, sea urchin emulsion, and sea grapes."
            },
            {
              courseName: "Pasture",
              dishName: "Deconstructed Beef Wellington",
              description: "Prime Angus beef tenderloin, sautéed wild porcini, buttery puff pastry lattice, port reduction."
            },
            {
              courseName: "Sweetness",
              dishName: "Modernist Musang King Durian Mousse",
              description: "Ethereal cream of premium Musang King durian, salted dark chocolate soil, gold dust."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "Innai Red & Alia Bastamam Bespoke",
          attireDetails: [
            "2 custom-designed flowing modern gowns from premium French silk",
            "2 tailored bespoke modern tuxedos in deep navy or classic black wool-mohair",
            "Dedicated styling sessions and multiple fitting appointments"
          ],
          decorHighlights: [
            "Overhead hanging floral forest floating from the ceiling with crystal drops",
            "Mirror-finish grand bridal runway that reflects the majestic sunset",
            "Golden geometric modern stage structures and backdrops",
            "Dramatic state-of-the-art dynamic uplighting and customized laser monogram projection"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours coverage by 3 master wedding photojournalists",
            "Bespoke pre-wedding portrait editorial at Johor's royal waterfront palace grounds",
            "Cinematic 4K storybook highlight film with sound design",
            "Genuine leather-bound physical album and high-res digital gallery archive"
          ]
        }
      }
    ]
  },
  {
    id: "melaka",
    name: "Melaka Historic State",
    alternateName: "The Heritage Cradle",
    description: "An evocative journey back in time. Intimate courtyards, Peranakan tile artistry, and historic luxury estates.",
    markerX: 32,
    markerY: 84,
    venues: [
      {
        id: "majestic-melaka",
        name: "The Majestic Melaka Courtyard",
        regionId: "melaka",
        tagline: "Classic Peranakan Royalty & Romance",
        description: "An award-winning vintage mansion highlighting colonial and traditional Peranakan architecture, featuring hand-painted tiles, crystal fixtures, and timber woodwork.",
        capacity: "150 - 350 Guests",
        vibe: "Intimate Heritage, Cultural Majesty, Artisan Splendor",
        image: "https://images.unsplash.com/photo-1507504038482-7621ae312d93?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 400,
          minPax: 150,
          maxPaxCount: 350,
          menuTitle: "Majestic Nyonya Royal Banquet",
          menuCourses: [
            {
              courseName: "Introductory",
              dishName: "Imperial Kueh Pie Tee & Itik Sio",
              description: "Chic crispy pastry cups with hand-shredded sea crab, sweet turnips, and slow-braised aromatic duck breast."
            },
            {
              courseName: "Elixir",
              dishName: "Bakwan Kepiting Heritage Soup",
              description: "Double-boiled clear bone marrow and crab dumpling soup with organic bamboo shoots."
            },
            {
              courseName: "Ocean",
              dishName: "Steamed Golden Red Snapper",
              description: "Topped with sliced wild ginger flower, lemongrass, and light sweet-sour tamarind reduction."
            },
            {
              courseName: "Land",
              dishName: "36-Hour Wagyu Rendang Tok",
              description: "Extremely tender Australian Wagyu beef short ribs slow-cooked with fresh shredded toasted coconut and custom Melakan royal spices."
            },
            {
              courseName: "Dessert",
              dishName: "Pure Gula Melaka Lava Cake",
              description: "Warm molten cake with high-grade local palm sugar core, organic coconut snow, and pandan leaf tuile."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "Innai Red Heritage Line",
          attireDetails: [
            "2 premium hand-designed heritage lace bridal gowns or classic Kebaya-inspired custom gown",
            "2 customized premium wool tuxedos or traditional royal grooms wear",
            "Handcrafted traditional Peranakan silver/gold beaded shoe pair"
          ],
          decorHighlights: [
            "Hanging orchid clusters and lush crimson hibiscus floral arrangements",
            "Bespoke traditional Peranakan lanterns and warm glowing brass candleholders",
            "Vintage-styled solid wood sweethearts pavilion with intricate carvings",
            "Authentic local batik-inspired linen accents and tableware"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours coverage by 2 elite cultural-heritage photographers",
            "Exclusive cinematic retro-themed vintage pre-wedding shoot in Melaka old-town",
            "Premium handmade linen wedding album book",
            "Cinematic wedding day recap documentary with traditional instrumental soundscapes"
          ]
        }
      }
    ]
  },
  {
    id: "ipoh",
    name: "Ipoh & Perak Valleys",
    alternateName: "The Limestone Sanctuary",
    description: "Surreal natural wonderlands. Millions-of-years-old limestone valleys, mystical misty lagoons, and natural hot spring retreats.",
    markerX: 19,
    markerY: 48,
    venues: [
      {
        id: "banjaran-sanctuary",
        name: "The Banjaran Rainforest Sanctuary",
        regionId: "ipoh",
        tagline: "Ethereal Sacred Vows in an Ancient Valley",
        description: "An globally renowned natural sanctuary enveloped by towering limestone hills, geothermal misty hot springs, and a pristine emerald rainforest canopy.",
        capacity: "100 - 250 Guests",
        vibe: "Mystical, Organic Luxury, Ethereal Nature",
        image: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=1200",
        fixedPackage: {
          pricePerPax: 600,
          minPax: 100,
          maxPaxCount: 250,
          menuTitle: "Sacred Forest Botanical Masterpiece",
          menuCourses: [
            {
              courseName: "First Touch",
              dishName: "Ipoh Geothermal Steam Tartlet",
              description: "Local microgreens, organic highland goat cheese, rainforest wild honey drizzle, and edible gold flakes."
            },
            {
              courseName: "Broth",
              dishName: "Double-Boiled Herbal Bamboo Elixir",
              description: "Ipoh mineral spring water boiled for 12 hours with black goji berries, delicate bamboo pith, and fresh ginseng."
            },
            {
              courseName: "Water",
              dishName: "Baked Sea Bass in Fragrant Pandan",
              description: "Wild sea bass fillet wrapped in pandan, baked with fresh galangal, wild ginger flower, and cold-pressed coconut essence."
            },
            {
              courseName: "Earth",
              dishName: "Sous-Vide Royal Venison Tenderloin",
              description: "Extremely tender venison loin, wild local berry glaze, velvety parsnip mousse, fresh truffle shavings."
            },
            {
              courseName: "Epilogue",
              dishName: "Ipoh Gourmet White Coffee Gold Soufflé",
              description: "Light baked soufflé made with artisanal local white coffee beans, organic cocoa-nib soil, and premium gold leaf sheet."
            }
          ],
          attireGownsCount: 2,
          attireTuxedosCount: 2,
          attireBridalHouse: "Khoon Hooi Luxury Bridal Couture",
          attireDetails: [
            "2 spectacular avant-garde botanical-lace gowns with custom floral appliques",
            "2 bespoke lightweight premium Italian silk-wool tuxedos tailored perfectly for the valley weather",
            "Personal fittings at the designer's flagship atelier in Kuala Lumpur"
          ],
          decorHighlights: [
            "Ethereal hanging canopy of 10,000 warm-toned fairy lights reflecting off the limestone cliffs",
            "Floating glass stage over the natural geothermal hot springs mist",
            "Exotic white and deep-green orchid cascades with local jungle ferns",
            "Aromatic ambient scenting with local pandan and jasmine essential oils"
          ],
          photographyHours: 10,
          photographyDetails: [
            "10 hours coverage by 3 elite landscape-wedding master photographers",
            "Bespoke drone videography capturing breathtaking vertical limestone cliffs",
            "Full 4K Ultra-HD cinematic master documentary feature",
            "Bespoke solid wood and silk-wrapped physical photo album handcrafted in Perak"
          ]
        }
      }
    ]
  }
];
