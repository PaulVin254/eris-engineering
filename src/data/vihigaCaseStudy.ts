export interface VihigaSpec {
  label: string;
  value: string;
}

export interface VihigaStage {
  code: string;
  title: string;
  dateLabel: string;
  image: string;
  caption: string;
}

export interface VihigaConstraint {
  index: string;
  title: string;
  summary: string;
}

export interface ConsultationStep {
  step: string;
  dateLabel: string;
  title: string;
  detail: string;
}

export interface ConsultationSnapshot {
  title: string;
  caption: string;
  image: string;
}

export interface VihigaBoqRow {
  section: string;
  scope: string;
  amountKes: string;
}

export interface VihigaAuditFinding {
  milestone: string;
  statusTag: string;
  title: string;
  image: string;
  imageAlt: string;
  checksCaught: string[];
  outcome: string;
}

/**
 * Consultation video screenshots slot:
 * To display screenshots from your design review calls on the live website:
 * 1. Save your JPG/PNG screenshots inside `public/vihiga/` (e.g., `consult-1.jpg`, `consult-2.jpg`).
 * 2. Add entries to `CONSULTATION_SNAPSHOTS` below and run `npm run build`.
 * The Consultation Journey gallery on `/projects/vihiga-residence/` will render them automatically.
 */
export const CONSULTATION_SNAPSHOTS: ConsultationSnapshot[] = [];

export const VIHIGA_OVERVIEW = {
  slug: "vihiga-residence",
  title: "The Vihiga Residence",
  subtitle: "2-Bedroom Family Bungalow — Design, BOQ & Independent Engineering Supervision",
  location: "Vihiga County, Western Kenya",
  clientProfile:
    "A Nairobi-based family building a permanent home for their parents, using their own local fundis under 5-milestone FIDIC engineering supervision.",
  heroImage: "/vihiga/milestone-3-superstructure.jpg",
  heroHeadline:
    "Built by the family’s local fundis for KES 2.86M—protected at every concrete pour by independent engineering audits.",
  specs: [
    { label: "Floor Area", value: "140 m²" },
    { label: "Official BOQ", value: "KES 2.86M" },
    { label: "Design-to-BOQ", value: "4 Weeks" },
    { label: "Supervision Fee", value: "5% of Net Works" },
  ] satisfies VihigaSpec[],
};

export const VIHIGA_PROGRESSION_STAGES: VihigaStage[] = [
  {
    code: "01 Setting-Out",
    title: "Lime Grid, Profile Boards & Borehole Protection",
    dateLabel: "05 Oct 2026",
    image: "/vihiga/milestone-1-setting-out.jpg",
    caption:
      "Profile boards, squareness diagonals, and boundary setbacks checked on site—while preserving the existing 42 ft borehole safely beside the front porch.",
  },
  {
    code: "02 Slab Pour",
    title: "Substructure Check, DPM & 150mm Ground Slab Casting",
    dateLabel: "13 Oct 2026",
    image: "/vihiga/milestone-2-slab-casting.jpg",
    caption:
      "Hardcore compaction, 1000-gauge polythene DPM, BRC A142 mesh, and concrete placement audited on site alongside the family’s local construction crew.",
  },
  {
    code: "03 Superstructure",
    title: "200mm Load-Bearing Stone Walling & 200×300mm Ring Beam",
    dateLabel: "24 Oct – 05 Nov 2026",
    image: "/vihiga/milestone-3-superstructure.jpg",
    caption:
      "Full room layout walls, Class 25 lintels, columns, and perimeter ring beam completed—with treated roofing timber stacked and inspected prior to truss erection.",
  },
  {
    code: "04 3D Vision",
    title: "Target Compound Layout with Retained Outdoor Kitchen",
    dateLabel: "Design Target",
    image: "/vihiga/render-aerial.jpg",
    caption:
      "Approved 3D compound render integrating the new 2-bedroom pitched-roof bungalow with the retained structural outdoor kitchen, cabro forecourt, and water tower.",
  },
];

export const VIHIGA_CONSTRAINTS: VihigaConstraint[] = [
  {
    index: "01",
    title: "TikTok Inquiry to Nairobi Brief & Trial Pits in 5 Days",
    summary:
      "Two brothers working in Nairobi reached out via TikTok to build a retirement home for their parents on a strict KES 2.5M–3.0M budget and tight deadline. Within 5 days of the first office meeting, Eris visited Vihiga, dug hand trial pits, and found solid murram at just 0.50m—avoiding oversized foundations that drain family budgets.",
  },
  {
    index: "02",
    title: "Honoring Maragoli Homestead Customs on a Sloping Plot",
    summary:
      "Room positions, parental quarters, and entrance orientation followed Maragoli cultural principles while fitting neatly between an existing sibling’s home, a cow shed, overhead KPLC lines, and a 42 ft borehole positioned just 0.90m off the new western wall line.",
  },
  {
    index: "03",
    title: "Demolish What Failed, Keep What Still Stands Strong",
    summary:
      "Site inspection confirmed the old house had failed waterproofing, wall dampness, and a sinking foundation—so it had to go. The 6.55m × 4.65m outdoor kitchen next to it was structurally sound. Keeping it saved the family full kitchen reconstruction cost, with a repair detail issued for its cracked veranda apron.",
  },
  {
    index: "04",
    title: "Fast Drawing Updates When Conditions Changed on Site",
    summary:
      "Real rural builds evolve. As the family refined room layouts during construction, Eris issued updated county-ready architectural drawings, revised 30-degree timber roof truss details, and reinforced concrete septic tank shop drawings so the fundis never worked from guesswork.",
  },
];

export const VIHIGA_CONDITION_PLATES = [
  {
    title: "Why the Old Structure Was Demolished",
    caption:
      "Absent damp-proof coursing, skirt-level moisture rot, and foundation distress along the boundary slope made rehabilitation unsafe and uneconomical.",
    image: "/vihiga/site-existing-house.jpg",
  },
  {
    title: "Saving the Sound Outdoor Kitchen + Veranda Fix",
    caption:
      "The main 6.55m × 4.65m outdoor kitchen passed structural inspection; dowel-tied slab repair and cut-off drainage details were issued for its settled apron.",
    image: "/vihiga/site-kitchen-crack.jpg",
  },
];

export const VIHIGA_CONSULTATION_JOURNEY: ConsultationStep[] = [
  {
    step: "Step 01",
    dateLabel: "19 – 21 Aug 2026",
    title: "Nairobi Briefing & Budget Lock",
    detail:
      "Initial scoping session with the client in Nairobi: aligned architectural inspirations, parents’ accessibility needs, and the KES 2.5M–3.0M ceiling.",
  },
  {
    step: "Step 02",
    dateLabel: "24 – 25 Aug 2026",
    title: "Vihiga Soil Pits & Existing Structure Audit",
    detail:
      "On-site topographical walk, 0.50m murram bearing confirmation, borehole mapping, and 14-page geotechnical condition report delivered the next day.",
  },
  {
    step: "Step 03",
    dateLabel: "26 Aug – 08 Sep 2026",
    title: "Layout Options, Cultural Alignment & 3D Review",
    detail:
      "Iterated floor plans with the family across structured review sessions to satisfy Maragoli room orientation, culminating in signed-off 3D visuals.",
  },
  {
    step: "Step 04",
    dateLabel: "10 – 19 Oct 2026",
    title: "Stamped Drawings, BOQ (KES 2.86M) & Live Revisions",
    detail:
      "Delivered County-stamped architectural sheets, load-bearing + RC structural details, full procurement BOQ, and revised roof/septic shop drawings.",
  },
];

export const VIHIGA_RENDERS = [
  {
    title: "Compound Bird’s-Eye Render",
    caption:
      "Full plot planning linking the new 2-bedroom home with the existing outdoor kitchen, elevated tank tower, and shaded cabro forecourt.",
    image: "/vihiga/render-aerial.jpg",
  },
  {
    title: "Front Gable Porch Elevation",
    caption:
      "Step-up grilled entry porch protected from hillside runoff, flanking a 5.3m × 4.95m lounge and generous steel casement glazing.",
    image: "/vihiga/render-front.jpg",
  },
  {
    title: "Rear Bedroom & Utility Elevation",
    caption:
      "Protected rear access corridor leading toward the laundry terrace, elevated water storage, and retained family kitchen.",
    image: "/vihiga/render-rear.jpg",
  },
];

export const VIHIGA_BOQ_ROWS: VihigaBoqRow[] = [
  {
    section: "01. Preliminaries & Site Setup",
    scope: "Mobilization, hoarding, demolition of unsound house, and water supply",
    amountKes: "80,000",
  },
  {
    section: "02. Substructure Works",
    scope: "Excavation to murram, strip footings, foundation stone walling, DPM, BRC A142 & 150mm slab",
    amountKes: "889,365",
  },
  {
    section: "03. RC Superstructure",
    scope: "Class 25 reinforced concrete columns (250×250mm) and 200×300mm perimeter ring beam",
    amountKes: "89,380",
  },
  {
    section: "04. Walling (Load-Bearing Masonry)",
    scope: "200mm & 150mm hand/machine-cut stone walls with 1:3 mortar & galvanized hoop iron",
    amountKes: "399,190",
  },
  {
    section: "05. Doors & Windows",
    scope: "Hardwood/flush internal doors, steel security entry grille, and standard steel casement windows",
    amountKes: "377,740",
  },
  {
    section: "06. Internal & External Finishes",
    scope: "Cement-sand screed, ceramic floor/wet-wall tiling, smooth plaster, and weatherguard paintwork",
    amountKes: "384,980",
  },
  {
    section: "07. Provisional Sums",
    scope: "30° Decra timber-truss roof (KES 350k), kitchen fixtures (50k), plumbing & electrical (80k), drainage (20k)",
    amountKes: "500,000",
  },
  {
    section: "08. Project Contingency (5%)",
    scope: "Protected reserve held for unforeseen rock pockets or material price adjustments",
    amountKes: "136,033",
  },
];

export const VIHIGA_AUDIT_FINDINGS: VihigaAuditFinding[] = [
  {
    milestone: "Milestone 2 · 17-Page Substructure Report",
    statusTag: "Rectified Before Casting",
    title: "Hidden Foundation & Ground Slab Faults Caught in Time",
    image: "/vihiga/audit-slab-mesh.jpg",
    imageAlt: "Ground slab BRC A142 reinforcement and concrete pour inspection in Vihiga",
    checksCaught: [
      "Foundation column starter bars were resting directly against timber shuttering with zero concrete cover—exposing steel to ground moisture.",
      "Column stirrup spacing measured 230mm against the 200mm structural detail, weakening shear confinement.",
      "Section of the rear foundation wall showed unmortared dry vertical joints and slight outward bulging.",
      "BRC A142 mesh was resting flat on the polythene DPM without spacer blocks, and slab depth dropped to 105–115mm against the 150mm specification when the poker vibrator failed mid-pour.",
    ],
    outcome:
      "Documented grid by grid in a timestamped 17-page report so spacers, full mortar grouting, cover adjustments, and remediation steps were enforced immediately.",
  },
  {
    milestone: "Milestone 3 · Critical Stop Work Order",
    statusTag: "Structural Safety Protected",
    title: "Out-of-Plumb Columns & Missing Steel Halted Before Roof Loading",
    image: "/vihiga/audit-ring-beam.jpg",
    imageAlt: "Ring beam concrete laitance and masonry bond inspection before roofing",
    checksCaught: [
      "Two rear perimeter columns were cast out of plumb after outer Y12 main bars were omitted and replaced with loose bars bent straight out of the floor slab without engineer sign-off.",
      "Adjacent fence-line masonry began leaning outward, pulling the compromised column cage with it.",
      "Honeycombing and exposed reinforcement pockets appeared along edge zones of the cast ring beam prior to timber wall-plate fixing.",
    ],
    outcome:
      "Issued an immediate Stop Work notice and step-by-step dismantle-and-recast instructions BEFORE 30-degree timber roof trusses loaded the walls—preventing long-term roof settlement or partial wall failure.",
  },
];
