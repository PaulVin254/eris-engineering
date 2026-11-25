export interface EngineeringNote {
  index: string;
  title: string;
  detail: string;
}

export interface VisualPlate {
  title: string;
  description: string;
  image: string;
}

export interface SignatureResidence {
  slug: string;
  title: string;
  subtitle: string;
  areaSqm: string;
  bedrooms: number;
  roofSystem: string;
  idealZones: string;
  estimateRange: string;
  heroImage: string;
  courtyardImage: string;
  architecturalThesis: string;
  narrativeTitle: string;
  narrativeParagraphs: string[];
  engineeringNotes: EngineeringNote[];
  plates: VisualPlate[];
}

export const SIGNATURE_RESIDENCES: SignatureResidence[] = [
  {
    slug: "cedar-horizon",
    title: "The Cedar Horizon",
    subtitle: "Private Courtyard Pavilion",
    areaSqm: "420 m²",
    bedrooms: 4,
    roofSystem: "Flat Concealed Slab",
    idealZones: "Karen, Runda, Tigoni, Western Highlands",
    estimateRange: "KES 22M to 28M",
    heroImage: "/cedar-hero.jpg",
    courtyardImage: "/cedar-living.jpg",
    architecturalThesis:
      "Continuous timber soffits and long-span structural steel glazing that dissolve the boundary between interior living and landscape.",
    narrativeTitle: "Continuous Volume and Landscape Alignment",
    narrativeParagraphs: [
      "The Cedar Horizon extends its timber ceiling plane uninterrupted from the main living hall onto deep covered terraces, framing mature foliage and natural light across generous residential plots.",
      "Floor-to-ceiling structural glazing meets flush stone thresholds, keeping wind loads, acoustic dampening, and thermal comfort strictly engineered for East African highland climates.",
    ],
    engineeringNotes: [
      {
        index: "01",
        title: "Concealed Structural Steel Frame",
        detail:
          "Integrated steel portal members hidden inside window mullions carry roof loads cleanly across wide spans without heavy intermediate columns.",
      },
      {
        index: "02",
        title: "Ventilated Rainscreen Cladding",
        detail:
          "Kiln-treated timber cladding mounted over a breathable moisture membrane on an aluminum cavity grid to prevent seasonal warping.",
      },
      {
        index: "03",
        title: "Thermally Insulated Flat Roof",
        detail:
          "Precision screeded gradients paired with high-density rigid insulation and multi-layer waterproofing for quiet interior temperatures.",
      },
    ],
    plates: [
      {
        title: "Timber Rainscreen Envelope",
        description:
          "Vertical timber cladding engineered on a ventilated facade assembly.",
        image: "/cedar-hero.jpg",
      },
      {
        title: "Monolithic Stone Kitchen",
        description:
          "Open culinary volume anchored by concealed floor-slab services.",
        image: "/cedar-kitchen.jpg",
      },
      {
        title: "Sunken Slab Wet Room",
        description:
          "Curbless stone shower detailing with triple-stage tanking.",
        image: "/cedar-bath.jpg",
      },
    ],
  },
  {
    slug: "teak-geometric",
    title: "The Teak Geometric",
    subtitle: "Cantilevered Masonry Residence",
    areaSqm: "400 m²",
    bedrooms: 4,
    roofSystem: "Cantilevered Concrete Roof",
    idealZones: "Karen, Nyari, Tigoni, Runda",
    estimateRange: "KES 20M to 26M",
    heroImage: "/teak-hero.jpg",
    courtyardImage: "/teak-courtyard.jpg",
    architecturalThesis:
      "Textural dialogue between hand-dressed stone masonry and a cantilevered upper timber sleeping volume.",
    narrativeTitle: "Grounded Masonry Below, Elevated Sanctuary Above",
    narrativeParagraphs: [
      "The Teak Geometric separates entertaining and private quarters by anchoring the ground pavilion in heavy local stone while projecting the upper bedroom suite outward over the garden.",
      "Every material transition between timber and masonry is sealed with custom galvanized flashing and drip grooves so decades of seasonal rainfall leave the facade clean.",
    ],
    engineeringNotes: [
      {
        index: "01",
        title: "High-Tensile Cantilever Beams",
        detail:
          "Reinforced concrete transfer beams engineered to carry the overhanging upper sleeping volume with zero long-term deflection.",
      },
      {
        index: "02",
        title: "Engineered Material Flashing",
        detail:
          "Galvanized metal expansion joints at every timber-to-stone interface to eliminate capillary moisture ingress and staining.",
      },
      {
        index: "03",
        title: "Concealed Glazing Headers",
        detail:
          "Heavy-gauge steel lintels recessed within the structural soffit to maintain clean corner glass openings.",
      },
    ],
    plates: [
      {
        title: "Courtyard Elevation",
        description:
          "Balanced stone plinth supporting the cantilevered upper timber level.",
        image: "/teak-courtyard.jpg",
      },
      {
        title: "Floor-to-Ceiling Glazing",
        description:
          "Thermally broken aluminum frames set flush into concrete reveals.",
        image: "/teak-living.jpg",
      },
      {
        title: "Fabricated Steel Balustrade",
        description:
          "Custom vertical steel screening acting as structural guard and light filter.",
        image: "/teak-staircase.jpg",
      },
    ],
  },
  {
    slug: "quartz-linear",
    title: "The Quartz Linear",
    subtitle: "Inward Courtyard Residence",
    areaSqm: "380 m²",
    bedrooms: 4,
    roofSystem: "Flat Screeded Slab",
    idealZones: "Kilimani, Lavington, Runda, Urban Enclaves",
    estimateRange: "KES 18M to 24M",
    heroImage: "/quartz-exterior.jpg",
    courtyardImage: "/quartz-kitchen-patio.jpg",
    architecturalThesis:
      "An inward-facing urban sanctuary organized around private light wells, linear brickwork, and zero-step thresholds.",
    narrativeTitle: "Complete Privacy Without Compromising Daylight",
    narrativeParagraphs: [
      "Designed for denser urban plots, The Quartz Linear turns its living spaces inward toward a landscaped central courtyard and sheltered dining loggia.",
      "Deep light wells draw daylight down into every wing of the plan while acoustic boundary masonry shields the residence from surrounding street activity.",
    ],
    engineeringNotes: [
      {
        index: "01",
        title: "Tied Linear Masonry",
        detail:
          "Precision brickwork anchored to the reinforced frame with stainless steel wall ties every 450mm for crack-free longevity.",
      },
      {
        index: "02",
        title: "Flush Slot-Drain Thresholds",
        detail:
          "Recessed drainage channels concealed beneath sliding door tracks allow zero-step indoor-outdoor transitions.",
      },
      {
        index: "03",
        title: "Class 30 Concrete Canopy",
        detail:
          "Post-tensioned overhang shading the primary courtyard terrace without perimeter support columns.",
      },
    ],
    plates: [
      {
        title: "Linear Brickwork Facade",
        description:
          "Textured masonry massing calibrated for acoustic privacy and thermal stability.",
        image: "/quartz-exterior.jpg",
      },
      {
        title: "Courtyard Dining Loggia",
        description:
          "Retractable glazing unifying the kitchen and sheltered outdoor terrace.",
        image: "/quartz-kitchen-patio.jpg",
      },
      {
        title: "Primary Bath Sanctuary",
        description:
          "High-pressure concealed plumbing supporting monolithic stone soaking fixtures.",
        image: "/quartz-master-bath.jpg",
      },
    ],
  },
  {
    slug: "bronze-vertical",
    title: "The Bronze Vertical",
    subtitle: "Multi-Level Urban Residence",
    areaSqm: "450 m²",
    bedrooms: 4,
    roofSystem: "Structural Rooftop Deck",
    idealZones: "Kileleshwa, Westlands, Kilimani, Lavington",
    estimateRange: "KES 28M to 35M",
    heroImage: "/bronze-hero.jpg",
    courtyardImage: "/bronze-living.jpg",
    architecturalThesis:
      "Three stacked architectural volumes maximizing floor area, rooftop leisure, and natural cross-ventilation on compact urban parcels.",
    narrativeTitle: "Vertical Efficiency on High-Value Land",
    narrativeParagraphs: [
      "Where land footprints are tight, The Bronze Vertical stacks four functional levels of living, wellness, and entertaining with a private landscaped roof terrace.",
      "A clean moment-resisting reinforced concrete grid removes bulky internal load-bearing walls, leaving expansive open-plan interiors bathed in upper-level daylight.",
    ],
    engineeringNotes: [
      {
        index: "01",
        title: "Moment-Resisting Frame",
        detail:
          "Reinforced concrete column-grid structure carrying multi-story vertical loads while keeping interior floor plates column-free.",
      },
      {
        index: "02",
        title: "Anodized Bronze Cladding",
        detail:
          "Architectural composite panels fixed to a secondary steel subframe with calibrated thermal expansion joints.",
      },
      {
        index: "03",
        title: "Triple-Layer Roof Tanking",
        detail:
          "Heavy-duty waterproof membrane system protecting the structural concrete rooftop lounge and plunge deck.",
      },
    ],
    plates: [
      {
        title: "Three-Story Massing",
        description:
          "Compact structural footprint delivering generous interior square meterage.",
        image: "/bronze-aerial.jpg",
      },
      {
        title: "Elevated Sky Terrace",
        description:
          "Reinforced rooftop deck engineered for outdoor entertaining.",
        image: "/bronze-rooftop.jpg",
      },
      {
        title: "Private Wellness Suite",
        description:
          "Dedicated upper-level fitness and studio floor with panoramic glazing.",
        image: "/bronze-gym.jpg",
      },
    ],
  },
  {
    slug: "onyx-villa",
    title: "The Onyx Villa",
    subtitle: "Double-Volume Atrium Home",
    areaSqm: "350 m²",
    bedrooms: 4,
    roofSystem: "Bituminous Flat Roof",
    idealZones: "Langata, Ruiru, Syokimau, Karen Border",
    estimateRange: "KES 17M to 23M",
    heroImage: "/onyx-exterior.jpg",
    courtyardImage: "/onyx-living.jpg",
    architecturalThesis:
      "A disciplined double-volume residence pairing dark mineral stonework with expansive vertical glazing.",
    narrativeTitle: "Sculptural Volume for Narrow Residential Plots",
    narrativeParagraphs: [
      "The Onyx Villa organizes daily life around a two-story sunlit atrium and floating timber-and-steel stair, bringing architectural drama to standard quarter-acre and eighth-acre parcels.",
      "Deep solar overhangs and cross-ventilation louvers regulate midday heat naturally, reducing mechanical cooling loads throughout the year.",
    ],
    engineeringNotes: [
      {
        index: "01",
        title: "Double-Volume Atrium Steel",
        detail:
          "Reinforced perimeter ring beams and concealed steel headers stabilizing tall curtain-wall glazing spans.",
      },
      {
        index: "02",
        title: "Bituminous Roof Membrane",
        detail:
          "Double-layer torch-on waterproofing over precision-screeded falls rated for heavy seasonal storms.",
      },
      {
        index: "03",
        title: "Passive Solar Orientation",
        detail:
          "Calculated overhang depths and recessed glazing lines balancing daylight penetration against solar heat gain.",
      },
    ],
    plates: [
      {
        title: "Garden Elevation",
        description:
          "Dark mineral stone base contrasted against clean cantilevered terrace slabs.",
        image: "/onyx-exterior.jpg",
      },
      {
        title: "Double-Height Living Hall",
        description:
          "Long-span structural framing opening the primary entertaining volume.",
        image: "/onyx-living.jpg",
      },
      {
        title: "Stone & Timber Bath",
        description:
          "Precision tile alignment and concealed cistern engineering throughout.",
        image: "/onyx-bath.jpg",
      },
    ],
  },
];

export const getResidenceBySlug = (slug: string): SignatureResidence | undefined =>
  SIGNATURE_RESIDENCES.find((item) => item.slug === slug);
