export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The True Cost of Building in Kenya in 2025",
    slug: "true-cost-building-kenya-2025",
    excerpt:
      "Forget the outdated estimates your relatives gave you. Here's a data-driven breakdown of what it actually costs to build a 3-bedroom house in Kenya today.",
    content: `
## The Reality Check Every Diaspora Builder Needs

If you're planning to build in Kenya from abroad, you've probably heard wildly different cost estimates. Your cousin says KES 3 million, your uncle insists on KES 8 million, and that contractor you found online quoted KES 5.5 million. Who's right?

The truth is, construction costs in Kenya have changed dramatically over the past few years. Inflation, supply chain disruptions, and increased demand for quality materials have all played a role. Let's break down the real numbers.

## Breaking Down the Costs

### Foundation (15-20% of Total Cost)
A solid foundation is non-negotiable. For a standard 3-bedroom house (approximately 150 sqm), expect to spend:
- **Basic strip foundation:** KES 350,000 - 450,000
- **Raft foundation (recommended for black cotton soil):** KES 500,000 - 700,000

### Walling (20-25% of Total Cost)
The type of wall you choose significantly impacts your budget:
- **Machine-cut stone:** KES 550,000 - 750,000
- **Concrete blocks:** KES 400,000 - 550,000
- **Brick:** KES 600,000 - 800,000

### Roofing (15-20% of Total Cost)
Roofing costs depend heavily on your design choice:
- **Mabati (iron sheets):** KES 300,000 - 450,000
- **Clay tiles:** KES 500,000 - 700,000
- **Stone-coated steel:** KES 450,000 - 600,000

### Finishing (30-40% of Total Cost)
This is where costs can spiral if you're not careful:
- **Basic finish:** KES 800,000 - 1,200,000
- **Standard finish:** KES 1,200,000 - 1,800,000
- **Premium finish:** KES 2,000,000+

## The Hidden Costs No One Tells You About

1. **Permits and approvals:** KES 50,000 - 150,000
2. **Professional fees (architect, engineer):** 8-12% of construction cost
3. **Site preparation:** KES 100,000 - 300,000
4. **Compound works (fence, gate, driveway):** KES 300,000 - 600,000
5. **Contingency (always budget 10-15%):** Essential for unexpected costs

## Our Verdict

For a decent 3-bedroom house in Kenya in 2025, budget between **KES 4.5 million to KES 7 million** for construction alone. Add another **KES 1-2 million** for land (depending on location), professional fees, and finishing touches.

The key to staying on budget? Work with professionals who provide transparent, itemized quotes—and never pay everything upfront.

---

*Need a precise estimate for your specific project? Try our [AI Cost Calculator](/calculator) to get a detailed breakdown in minutes.*
    `,
    author: "Eng. Paul Wakoli",
    authorImage: "/engineer-paul-headshot.png",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Cost Guide",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Diaspora Guide: How to Avoid the 'Fundi' Trap",
    slug: "diaspora-guide-avoid-fundi-trap",
    excerpt:
      "6 out of 10 Kenyans abroad have been cheated during construction. Learn the warning signs and how to protect your investment from common contractor scams.",
    content: `
## Why Diaspora Builders Are Prime Targets

Let's be honest: if you're building from abroad, you have a target on your back. Contractors know you can't visit the site regularly, you're probably unfamiliar with current material prices, and you're trusting relatives or friends to oversee work they may not understand.

This isn't pessimism—it's reality. A 2024 survey found that **61% of diaspora Kenyans** reported experiencing fraud or significant cost overruns during construction projects.

## The Most Common Scams

### 1. The "Materials Price Inflation" Scheme
**How it works:** Your contractor quotes you KES 2,500 per bag of cement when the actual market price is KES 800. They pocket the difference on every single material.

**How to protect yourself:** 
- Get quotes from hardware stores directly
- Use our [Cost Calculator](/calculator) to verify market rates
- Require receipts for all purchases

### 2. The "Ghost Workers" Trick
**How it works:** You're paying for 10 workers, but only 5 show up. The rest are "ghosts" on the payroll.

**How to protect yourself:**
- Request daily site photos with workers visible
- Hire an independent site supervisor
- Use biometric attendance tracking (yes, this exists!)

### 3. The "Substandard Substitution" Swap
**How it works:** You pay for Grade 32.5 cement, but they use Grade 22.5. You specify 12mm rebar, they use 10mm. The building looks fine... until it doesn't.

**How to protect yourself:**
- Hire a structural engineer for periodic inspections
- Request material certificates and delivery notes
- Don't pay the final installment until an independent inspection is complete

### 4. The "Progress Payment" Disappearance
**How it works:** You send KES 500,000 for the foundation. They complete 30% of it, claim they need more money for "unforeseen circumstances," and eventually disappear.

**How to protect yourself:**
- Never pay more than 30% upfront
- Structure payments around verified milestones
- Use escrow services when possible

## Red Flags to Watch For

🚩 **Contractor refuses to sign a detailed contract**
🚩 **Requests large upfront payments (more than 30%)**
🚩 **Can't provide references from completed projects**
🚩 **Gives vague quotes without itemized breakdowns**
🚩 **Pressures you to start immediately**
🚩 **Communicates poorly or inconsistently**

## The Eris Engineering Approach

At Eris, we've built our entire business model around diaspora trust issues:

1. **Transparent pricing:** Every shilling is accounted for in our quotes
2. **Photo & video updates:** Weekly progress reports sent directly to you
3. **Independent verification:** We encourage third-party inspections
4. **Milestone-based payments:** You pay for what's completed, not promises
5. **Guaranteed pricing:** Our quotes don't change mid-project

---

*Ready to build with confidence? [Contact us](/contact) for a free consultation, or use our [AI Calculator](/calculator) to start planning your project.*
    `,
    author: "Eng. Paul Wakoli",
    authorImage: "/engineer-paul-headshot.png",
    date: "2025-01-08",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Diaspora Tips",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Flat Roof vs. Pitched Roof: What Works Best in Nairobi?",
    slug: "flat-roof-vs-pitched-roof-nairobi",
    excerpt:
      "The great Kenyan roofing debate, settled. We break down costs, maintenance, durability, and aesthetics to help you make the right choice for your climate.",
    content: `
## The Roofing Decision That Can Make or Break Your Home

Your roof isn't just a hat for your house—it's your first line of defense against Nairobi's unpredictable weather. From the scorching Limuru sun to the torrential April rains, your roofing choice will determine your comfort, maintenance costs, and even your home's resale value.

Let's settle this debate once and for all.

## Flat Roofs: The Modern Choice

### Pros
✅ **Contemporary aesthetic:** Perfect for that modern, minimalist look
✅ **Usable space:** Create a rooftop garden, entertainment area, or even add solar panels
✅ **Lower initial cost:** Less material and labor required
✅ **Easier to construct:** Faster completion time

### Cons
❌ **Waterproofing challenges:** Nairobi's heavy rains can be brutal
❌ **Higher maintenance:** Requires regular inspection and resealing
❌ **Shorter lifespan:** Typically 15-20 years vs. 30+ for pitched roofs
❌ **Heat absorption:** Can make upper floors uncomfortably hot

### Best For
- Urban plots with height restrictions
- Homeowners who want rooftop amenities
- Budget-conscious builds (short-term savings)
- Modern architectural designs

### Cost Estimate (150 sqm house)
- **Basic flat roof:** KES 350,000 - 450,000
- **With waterproofing membrane:** KES 450,000 - 600,000
- **Annual maintenance:** KES 30,000 - 50,000

## Pitched Roofs: The Traditional Favorite

### Pros
✅ **Superior drainage:** Rain runs off naturally, reducing leakage risk
✅ **Better insulation:** Attic space creates a thermal buffer
✅ **Longer lifespan:** 30-50 years with proper maintenance
✅ **Lower maintenance:** Less frequent repairs needed
✅ **Aesthetic versatility:** Works with various architectural styles

### Cons
❌ **Higher initial cost:** More materials and complex construction
❌ **Wasted space:** Unless you convert the attic
❌ **Longer construction time:** Adds 2-3 weeks to your project
❌ **Limited rooftop use:** No garden or entertainment space

### Best For
- Areas with heavy rainfall (Nairobi highlands, Limuru)
- Traditional or colonial-style homes
- Long-term homeowners
- Energy-conscious builds

### Cost Estimate (150 sqm house)
- **Mabati (iron sheets):** KES 400,000 - 550,000
- **Clay tiles:** KES 600,000 - 800,000
- **Stone-coated steel:** KES 550,000 - 700,000
- **Annual maintenance:** KES 10,000 - 25,000

## Our Recommendation for Nairobi

For most Nairobi homeowners, we recommend a **pitched roof with stone-coated steel tiles**. Here's why:

1. **Nairobi's rainfall:** The long rains can be intense, and pitched roofs handle drainage better
2. **Temperature regulation:** The air gap under a pitched roof keeps your home cooler
3. **Long-term value:** Higher upfront cost, but lower lifetime cost
4. **Resale appeal:** Pitched roofs are generally more attractive to buyers

### The Hybrid Solution

Can't decide? Consider a **hybrid design**: flat roof over the main living areas (for that modern look and potential rooftop use) with a pitched roof over bedrooms (for better insulation and longevity).

---

*Still unsure? Our engineers can assess your specific plot and climate conditions to recommend the best roofing solution. [Get in touch](/contact) for a free consultation.*
    `,
    author: "Eng. Annelise Nyanga",
    authorImage: "/engineer-annelise-photo.png",
    date: "2024-12-20",
    image:
      "https://images.unsplash.com/photo-1632759145275-f59ee23a0df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Technical Guide",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "5 Things to Know Before Buying Land in Kenya from Abroad",
    slug: "buying-land-kenya-abroad",
    excerpt:
      "Land fraud is rampant. Before you send that deposit, learn how to verify ownership, avoid fake title deeds, and protect your investment.",
    content: `
## The Land Minefield: Navigate It Safely

Buying land in Kenya while living abroad is fraught with risk. Stories of diaspora Kenyans losing millions to land scams are all too common. But with the right knowledge and precautions, you can protect yourself.

## 1. Always Conduct a Title Search

**What it is:** An official search at the Ministry of Lands to verify:
- The seller is the registered owner
- The land isn't under dispute or caveat
- There are no encumbrances (loans, unpaid rates)

**How to do it:**
- Visit the Lands Registry (or hire a lawyer to do this)
- Pay the search fee (approximately KES 500-1,000)
- Get an official search certificate

**Red flag:** If the seller discourages you from doing a search, walk away immediately.

## 2. Verify the Title Deed

Fake title deeds are sophisticated. Here's how to spot them:

✅ **Check the watermark:** Hold it up to light
✅ **Verify the serial number:** Each title has a unique number that can be verified at the Lands Registry
✅ **Examine the paper quality:** Genuine titles use specific security paper
✅ **Cross-reference with survey maps:** Ensure plot boundaries match

**Pro tip:** Always get a lawyer to verify the title. It costs KES 15,000-30,000 but can save you millions.

## 3. Understand the Different Types of Land Tenure

### Freehold
- **What it means:** You own the land forever
- **Best for:** Residential and commercial development
- **Risk level:** Lower (if properly verified)

### Leasehold
- **What it means:** You own the land for a fixed period (usually 99 years)
- **Best for:** Urban properties
- **Risk level:** Medium (check remaining lease period)

### Community Land
- **What it means:** Land owned collectively by a community
- **Best for:** Avoid unless you're part of the community
- **Risk level:** High for outsiders

## 4. Be Wary of "Family Land"

Land that belongs to a family (rather than an individual) is particularly risky because:

- Multiple family members may have claims
- The person selling may not have authority to sell
- Other family members can challenge the sale years later

**What to do:**
- Demand a consent letter signed by all family members
- Verify the seller's authority through the family structure
- Consider title insurance if available

## 5. Never Pay Without a Sale Agreement

Before paying a single shilling:

1. **Hire a lawyer** to draft a sale agreement
2. **Include key clauses:**
   - Purchase price and payment schedule
   - Consequences of breach
   - Timeline for transfer
   - Verification conditions
3. **Pay through a lawyer's escrow account**, not directly to the seller
4. **Get receipts** for every payment

## Bonus: The Transfer Process

Once you've agreed on the sale:

1. **Land control board consent** (for agricultural land)
2. **Stamp duty payment** (4% of land value)
3. **Transfer documents** signed by both parties
4. **Registration** at the Lands Registry
5. **New title deed** issued in your name

**Timeline:** 2-6 months depending on the registry's backlog

---

*Planning to build? We can recommend trusted lawyers and surveyors, and help you verify land before you buy. [Contact us](/contact) to discuss your project.*
    `,
    author: "Eng. Paul Wakoli",
    authorImage: "/engineer-paul-headshot.png",
    date: "2024-12-10",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    category: "Legal Guide",
    readTime: "9 min read",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (
  currentSlug: string,
  limit: number = 3
): BlogPost[] => {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
};
