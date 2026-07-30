const images = {
  hartford: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=76",
  street: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=76",
  restoration: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=76",
  brick: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=76",
  lobby: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=76",
  storefront: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=76",
  residential: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=76",
  commercial: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=76",
  mixed: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=76",
  renovation: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=76"
};

const propertyMedia = {
  "magnolia-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Today", "Before", "Early work", "Reactivated", "Stabilized"],
    captions: ["The Magnolia Building presents a renewed mixed-use frontage on Albany Avenue.", "The 2020 street view records the building before the multi-year improvement program.", "Storefront and façade work begins to reset the street-level experience.", "New glazing and active commercial bays bring transparency and activity back to the sidewalk.", "A consistent storefront line and occupied upper floors complete the block-scale transformation."],
    story: ["Magnolia is a long-view revitalization story. Photos beginning in 2020 document an aging mixed-use building whose scale and location still made it important to Albany Avenue.", "The work progressed in practical phases—storefront openings, façade repairs, safer residential space, and renewed commercial visibility. Later images show a building that once read as tired and fragmented becoming a more coherent, active part of the corridor."]
  },
  "weaver-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Street view", "Before", "Exterior renewal", "After", "Residential work"],
    captions: ["Weaver's long façade anchors a prominent stretch of Albany Avenue.", "An earlier view preserves the starting condition of the mixed-use frontage.", "A brighter, unified façade makes the full building read as one address.", "Completed storefront and exterior work restores a strong rhythm along the sidewalk.", "Interior improvements extend the renewal from the street into the residential units."],
    story: ["The Weaver Building is a corridor-scale project: 24 mixed-use spaces arranged behind one of the portfolio's longest Albany Avenue façades.", "The photo record follows the building from an uneven earlier presentation to a brighter, unified storefront line, then inside to residential improvements. The result is not one cosmetic moment, but a sustained program of exterior, common-area, and unit-level work." ]
  },
  "governors-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Signature view", "West approach", "Main Street corner", "Full frontage", "Neighborhood context"],
    captions: ["The Governor's Building seen from its defining three-quarter corner.", "Aerial photography shows the building's scale, parking, and surrounding street network.", "The rounded corner entrance establishes a clear Main Street presence.", "The full commercial frontage creates a continuous edge along the block.", "A wider view places the property within downtown East Hartford."],
    story: ["At the Governor's Building, the architecture already tells the story: a substantial commercial property with a memorable corner entrance and a long, visible Main Street frontage.", "The aerial sequence shows how the building meets the intersection, connects to parking, and contributes to the surrounding downtown fabric. Its value comes from both the spaces inside and the strong civic presence it holds at street level."]
  },
  "restaurant-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Today", "Before", "Improvement phase", "New storefront", "Finished frontage"],
    captions: ["The Restaurant Building now presents a crisp, transparent storefront to Albany Avenue.", "The earlier condition shows a more enclosed and visually uneven street frontage.", "A transitional view records repairs and preparation around the commercial bays.", "New glazing opens the interior to the sidewalk and strengthens the entrance sequence.", "The completed frontage reads as one welcoming neighborhood-facing commercial space."],
    story: ["This compact building shows how targeted storefront work can change the way a property meets its neighborhood. The earlier façade was more enclosed and visually uneven.", "Later photos show a clearer entrance, broad new glazing, and a more consistent commercial frontage. Those changes make the space easier to see, easier to approach, and better suited to a neighborhood restaurant or service tenant." ]
  },
  "winton-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Signature view", "Front approach", "Campus context", "Main entrance", "Full site"],
    captions: ["Winton's three-wing composition is clearest from this elevated three-quarter view.", "The front approach shows the building's balanced façade and central entrance.", "A wider aerial establishes the property's landscaped commercial setting.", "The entrance court gives tenants and visitors a clear point of arrival.", "The full-site view documents circulation, parking, and the building's generous footprint."],
    story: ["Winton is a different kind of asset from the urban storefront buildings in the portfolio. Its broad, three-wing plan sits in a landscaped commercial setting in Bloomfield.", "The aerial series is used deliberately here: each view explains arrival, parking, circulation, and the building's substantial footprint while keeping the same architectural orientation. Interior images can support leasing, but the exterior sequence best communicates the property as a complete place." ]
  },
  "uptown-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    stages: ["Current exterior", "Starting point", "Selective demolition", "Rebuilt openings", "Active renovation"],
    captions: ["Uptown's masonry shell and corner storefront define the project from the street.", "The 2024 exterior records the building before the current renovation sequence.", "Interior demolition exposes the original structure and makes room for new building systems.", "Later work reframes the storefront and prepares a more open street-level frontage.", "The latest view keeps the transformation visible while construction continues."],
    story: ["Uptown is presented as work in progress, not a finished reveal. The 2024 images establish a solid masonry shell with a prominent corner storefront and significant deferred interior work.", "The sequence then moves through selective demolition, exposed framing, system rough-ins, and reconstructed street-level openings. Keeping those stages visible makes the story honest: this is the careful middle of a transformation, with the building's original character retained while its next use is built inside." ]
  }
};

const AE = {
  company: {
    name: "Andaleeb Enterprises",
    shortName: "Andaleeb",
    phone: "(860) 555-0188",
    email: "info@adaleebenterprises.com",
    address: "Hartford, CT",
    totalValue: 26950000,
    totalUnits: 175,
    totalAssets: 27,
    investedEquity: 8200000
  },
  images,
  properties: [
    ["magnolia-building", "635-651 Albany Avenue, Hartford, CT 06112", "Magnolia Building LLC", "635-651 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "15", 2000000, "100%", "Stabilized"],
    ["690-albany-avenue", "690 Albany Avenue, Hartford, CT 06112", "Ahmed Kavita Trustee", "690 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "3", 500000, "100%", "Stabilized"],
    ["895-albany-avenue", "895 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "895 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 35000, "100%", "Stabilized"],
    ["907-albany-avenue", "907 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "907 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "3", 400000, "100%", "Stabilized"],
    ["919-albany-avenue", "919 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "919 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "3", 900000, "100%", "Stabilized"],
    ["tinker-building", "1136-1150 Albany Avenue, Hartford, CT 06112", "Tinker building LLC", "1136-1150 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "10", 1500000, "100%", "Stabilized"],
    ["weaver-building", "1154-1170 Albany Avenue, Hartford, CT 06112", "Weaver Building LLC", "1154-1170 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "24", 3000000, "100%", "Stabilized"],
    ["winton-building", "45 Wintonbury Avenue, Bloomfield, CT 06002", "Winton building LLC", "45 Wintonbury Avenue", "Bloomfield, CT", "Commercial · Retail Space", "29", 2000000, "100%", "Stabilized"],
    ["governors-building", "987-1003 Main Street, East Hartford, CT 06108", "Governor's Building LLC", "987-1003 Main Street", "East Hartford, CT", "Commercial · Retail Space", "12", 1400000, "100%", "Stabilized"],
    ["post-office-building", "641-651 Maple Avenue, Hartford, CT 06114", "Post Office Building LLC", "641-651 Maple Avenue", "Hartford, CT", "Commercial · Retail Space", "5", 2000000, "50%", "Stabilized"],
    ["sullivan-avenue-portfolio", "942-986 Sullivan Avenue, South Windsor, CT 06074", "Kavita Ahmed Family trust", "942-986 Sullivan Avenue", "South Windsor, CT", "Commercial · Retail Space", "14", 3000000, "100%", "Stabilized"],
    ["boat-club-building", "1-3 East Main Street, Clinton, CT 06413", "Boat Club Building LLC", "1-3 East Main Street", "Clinton, CT", "Commercial · Retail Space", "8", 1000000, "100%", "Stabilized"],
    ["five-seven-east-main", "5-7 East Main Street, Clinton, CT 06413", "Five seven LLC", "5-7 East Main Street", "Clinton, CT", "Commercial · Retail Space", "5", 500000, "100%", "Stabilized"],
    ["143-edgewood-street", "143 Edgewood Street, Hartford, CT 06112", "143 Edgewood St LLC", "143 Edgewood Street", "Hartford, CT", "Residential", "3", 450000, "33%", "Stabilized"],
    ["65-beelzebub-road", "65 Beelzebub Road, South Windsor, CT 06074", "Ahmed Kavita Trustee", "65 Beelzebub Road", "South Windsor, CT", "Residential", "1", 400000, "100%", "Stabilized"],
    ["20-highland-park", "20 Highland Park, Enfield, CT 06082", "20 Highland park LLC", "20 Highland Park", "Enfield, CT", "Residential", "1", 300000, "100%", "Stabilized"],
    ["258-farmington-avenue", "258 Farmington Avenue, Hartford, CT 06105", "258 Farmington Ave. LLC", "258 Farmington Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 250000, "100%", "Stabilized"],
    ["455-farmington-avenue", "455 Farmington Avenue, Hartford, CT 06105", "Check cashing store LLC", "455 Farmington Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 450000, "100%", "Stabilized"],
    ["affleck-building", "741-749 Park Street, Hartford, CT 06106", "Affleck Building LLC", "741-749 Park Street", "Hartford, CT", "Res/Com Multi use", "12", 1400000, "100%", "Stabilized"],
    ["eternity-building", "692-700 Park Street, Hartford, CT 06106", "Eternity Building LLC", "692-700 Park Street", "Hartford, CT", "Res/Com Multi use", "8", 800000, "100%", "Stabilized"],
    ["uptown-building", "1468-1470 Albany Avenue, Hartford, CT 06112", "Uptown Building LLC", "1468-1470 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "8", 1200000, "100%", "Under renovation"],
    ["696-714-albany-avenue", "696-714 Albany Avenue, Hartford, CT 06112", "Andaleeb Enterprises LLC", "696-714 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "11", 1500000, "100%", "Under renovation"],
    ["restaurant-building", "1113-1115 Albany Avenue, Hartford, CT 06112", "Restaurant Building LLC", "1113-1115 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "9", 500000, "100%", "Stabilized"],
    ["terry-square-plaza", "2739 Main Street, Hartford, CT", "Terry Square plaza", "2739 Main Street", "Hartford, CT", "Commercial · Retail Space", "7", 750000, "100%", "Stabilized"],
    ["merchant-association", "1108 Albany Avenue, Hartford, CT 06112", "The Merchant Association LLC", "1108 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 365000, "100%", "Stabilized"],
    ["885-albany-avenue", "885 Albany Avenue, Hartford, CT 06112", "885 Albany Avenue LLC", "885 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 350000, "100%", "Stabilized"],
    ["ten-mill-pond-lane", "10 Mill Pond Lane, Simsbury, CT 06070", "Ten Mill Pond Lane LLC", "10 Mill Pond Lane", "Simsbury, CT", "Commercial · Retail Space", "TBD", 0, "100%", "Closing in progress"]
  ].map((p, index) => {
    const typeKey = p[5].includes("Residential") ? "residential" : p[5].includes("Multi") ? "mixed" : "commercial";
    const media = propertyMedia[p[0]];
    const imgSet = media ? media.images.map(file => `assets/images/properties/${p[0]}/${file}`) : [images[typeKey], images.street, images.restoration, images.lobby, images.brick];
    return {
      id: index + 1,
      slug: p[0],
      name: p[1],
      entity: p[2],
      address: p[3],
      city: p[4],
      type: p[5],
      units: p[6],
      value: p[7],
      owned: p[8],
      status: p[9],
      images: imgSet,
      stages: media?.stages || [],
      captions: media?.captions || [],
      story: media?.story || [],
      featured: ["magnolia-building", "weaver-building", "696-714-albany-avenue", "governors-building"].includes(p[0])
    };
  }),
  news: [
    ["hartford-courant-albany-avenue", "On One of This CT City's Busiest Thoroughfares, a Developer Snaps Up Properties. Here's the Plan", "September 11, 2023", "Hartford Courant", "The Hartford Courant examines Andaleeb's growing presence and revitalization plans along Hartford's Albany Avenue corridor.", "https://www.courant.com/2023/09/11/on-one-of-this-ct-citys-busiest-thoroughfares-a-developer-snaps-up-properties-heres-the-plan/"],
    ["albany-avenue-revitalization", "Andaleeb Advances Albany Avenue Revitalization Strategy", "May 29, 2026", "Portfolio Update", "A coordinated program of facade repair, tenant improvements, and residential upgrades is bringing long-vacant space back into daily use."],
    ["affordable-rent-commercial-corridors", "Affordable Commercial Rents Help Local Operators Expand", "April 18, 2026", "Community Impact", "Andaleeb properties continue to support neighborhood businesses with flexible spaces, visible storefronts, and practical build-out support."],
    ["under-renovation-portfolio", "Two Mixed-Use Assets Move Into Active Renovation", "March 6, 2026", "Construction", "The Uptown Building and 696-714 Albany Avenue are being repositioned for safer housing, stronger curb appeal, and street-level activity."],
    ["hartford-tax-base-growth", "Reactivated Buildings Strengthen Hartford's Tax Base", "January 22, 2026", "Economic Development", "The company's rehabilitation model targets distressed assets that can return value to municipalities, lenders, tenants, and surrounding blocks."],
    ["new-tenant-openings", "New Tenant Openings Planned Across Hartford Portfolio", "November 12, 2025", "Leasing", "Several commercial spaces are being prepared for service businesses, food operators, and neighborhood-facing retail uses."]
  ],
  caseStudies: [
    ["magnolia-building", "635-651 Albany Avenue, Hartford, CT 06112", "Vacancy to mixed-use momentum", "A distressed Albany Avenue building repositioned with practical improvements and a tenant-first affordability strategy."],
    ["696-714-albany-avenue", "696-714 Albany Avenue, Hartford, CT 06112", "Under renovation", "A large mixed-use asset being stabilized through exterior repair, unit upgrades, and a phased commercial leasing plan."],
    ["weaver-building", "1154-1170 Albany Avenue, Hartford, CT 06112", "Scale on the corridor", "A 24-unit mixed-use property that anchors a broader revitalization thesis for Albany Avenue."]
  ],
  womenEmpowered: [
    { name: "Angela", business: "Edgewood Street tenant", slug: "143-edgewood-street", description: "Angela is a longtime tenant at Andaleeb's Edgewood Street property, part of the everyday fabric of the Edgewood neighborhood in Hartford." },
    { name: "High Maintenance", business: "Fashion store, Weaver Building", slug: "weaver-building", description: "High Maintenance brings fashion retail to Albany Avenue, operating out of Andaleeb's Weaver Building." },
    { name: "Wicked Cafe", business: "Cafe", description: "Wicked Cafe serves the neighborhood as one of the food and beverage tenants across the Andaleeb portfolio." },
    { name: "Patricia", business: "Medical services, Winton Building", slug: "winton-building", description: "Patricia runs a medical operation focused on serving people with disabilities out of the Winton Building in Bloomfield." },
    { name: "Neha Andaleeb", business: "Cell phone stores", description: "Neha Andaleeb owns and operates cell phone stores across the Andaleeb portfolio, bringing accessible retail and service to the community." },
    { name: "Jenilee", business: "Partner, Carefree Boat Club", slug: "boat-club-building", description: "Jenilee is a partner in Carefree Boat Club, operating out of Andaleeb's Boat Club Building in Clinton." },
    { name: "Patrice", business: "Passions, Tinker Building", slug: "tinker-building", description: "Patrice runs Passions, a business based in the Tinker Building on Albany Avenue." },
    { name: "Kerryane", business: "Parlor", description: "Kerryane runs a parlor located above a Bank of America branch, one of the small businesses in Andaleeb's tenant community." }
  ]
};

if (typeof module !== "undefined") module.exports = AE;
