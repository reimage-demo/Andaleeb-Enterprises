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
    ["magnolia-building", "Magnolia Building", "Magnolia Building LLC", "635-651 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "15", 2000000, "100%", "Stabilized"],
    ["690-albany-avenue", "690 Albany Avenue", "Ahmed Kavita Trustee", "690 Albany Avenue", "Hartford, CT", "Commercial", "3", 500000, "100%", "Stabilized"],
    ["895-albany-avenue", "895 Albany Avenue", "919 Albany Avenue LLC", "895 Albany Avenue", "Hartford, CT", "Commercial", "1", 35000, "100%", "Stabilized"],
    ["907-albany-avenue", "907 Albany Avenue", "919 Albany Avenue LLC", "907 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "3", 400000, "100%", "Stabilized"],
    ["919-albany-avenue", "919 Albany Avenue", "919 Albany Avenue LLC", "919 Albany Avenue", "Hartford, CT", "Commercial", "3", 900000, "100%", "Stabilized"],
    ["tinker-building", "Tinker Building", "Tinker building LLC", "1136-1150 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "10", 1500000, "100%", "Stabilized"],
    ["weaver-building", "Weaver Building", "Weaver Building LLC", "1154-1170 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "24", 3000000, "100%", "Stabilized"],
    ["winton-building", "Winton Building", "Winton building LLC", "45 Wintonbury Avenue", "Bloomfield, CT", "Commercial", "29", 2000000, "100%", "Stabilized"],
    ["governors-building", "Governor's Building", "Governor's Building LLC", "987-1003 Main Street", "East Hartford, CT", "Commercial", "12", 1400000, "100%", "Stabilized"],
    ["post-office-building", "Post Office Building", "Post Office Building LLC", "641-651 Maple Avenue", "Hartford, CT", "Commercial", "5", 2000000, "50%", "Stabilized"],
    ["sullivan-avenue-portfolio", "Sullivan Avenue Portfolio", "Kavita Ahmed Family trust", "942-986 Sullivan Avenue", "South Windsor, CT", "Commercial", "14", 3000000, "100%", "Stabilized"],
    ["boat-club-building", "Boat Club Building", "Boat Club Building LLC", "1-3 East Main Street", "Clinton, CT", "Commercial", "8", 1000000, "100%", "Stabilized"],
    ["five-seven-east-main", "5-7 East Main", "Five seven LLC", "5-7 East Main Street", "Clinton, CT", "Commercial", "5", 500000, "100%", "Stabilized"],
    ["143-edgewood-street", "143 Edgewood Street", "143 Edgewood St LLC", "143 Edgewood Street", "Hartford, CT", "Residential", "3", 450000, "33%", "Stabilized"],
    ["65-beelzebub-road", "65 Beelzebub Road", "Ahmed Kavita Trustee", "65 Beelzebub Road", "South Windsor, CT", "Residential", "1", 400000, "100%", "Stabilized"],
    ["20-highland-park", "20 Highland Park", "20 Highland park LLC", "20 Highland Park", "Enfield, CT", "Residential", "1", 300000, "100%", "Stabilized"],
    ["258-farmington-avenue", "258 Farmington Avenue", "258 Farmington Ave. LLC", "258 Farmington Avenue", "Hartford, CT", "Commercial", "1", 250000, "100%", "Stabilized"],
    ["455-farmington-avenue", "455 Farmington Avenue", "Check cashing store LLC", "455 Farmington Avenue", "Hartford, CT", "Commercial", "1", 450000, "100%", "Stabilized"],
    ["affleck-building", "Affleck Building", "Affleck Building LLC", "741-749 Park Street", "Hartford, CT", "Res/Com Multi use", "12", 1400000, "100%", "Stabilized"],
    ["eternity-building", "Eternity Building", "Eternity Building LLC", "692-700 Park Street", "Hartford, CT", "Res/Com Multi use", "8", 800000, "100%", "Stabilized"],
    ["uptown-building", "Uptown Building", "Uptown Building LLC", "1468-1470 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "8", 1200000, "100%", "Under renovation"],
    ["696-714-albany-avenue", "696-714 Albany Avenue", "Andaleeb Enterprises LLC", "696-714 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "11", 1500000, "100%", "Under renovation"],
    ["restaurant-building", "Restaurant Building", "Restaurant Building LLC", "1113-1115 Albany Avenue", "Hartford, CT", "Res/Com Multi use", "9", 500000, "100%", "Stabilized"],
    ["terry-square-plaza", "Terry Square Plaza", "Terry Square plaza", "2739 Main Street", "Hartford, CT", "Commercial", "7", 750000, "100%", "Stabilized"],
    ["merchant-association", "The Merchant Association", "The Merchant Association LLC", "1108 Albany Avenue", "Hartford, CT", "Commercial", "1", 365000, "100%", "Stabilized"],
    ["885-albany-avenue", "885 Albany Avenue", "885 Albany Avenue LLC", "885 Albany Avenue", "Hartford, CT", "Commercial", "1", 350000, "100%", "Stabilized"],
    ["ten-mill-pond-lane", "10 Mill Pond Lane", "Ten Mill Pond Lane LLC", "10 Mill Pond Lane", "Simsbury, CT", "Commercial", "TBD", 0, "100%", "Closing in progress"]
  ].map((p, index) => {
    const typeKey = p[5].includes("Residential") ? "residential" : p[5].includes("Multi") ? "mixed" : "commercial";
    const imgSet = [images[typeKey], images.street, images.restoration, images.lobby, images.brick];
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
      featured: ["magnolia-building", "weaver-building", "696-714-albany-avenue", "governors-building"].includes(p[0])
    };
  }),
  news: [
    ["albany-avenue-revitalization", "Andaleeb Advances Albany Avenue Revitalization Strategy", "May 29, 2026", "Portfolio Update", "A coordinated program of facade repair, tenant improvements, and residential upgrades is bringing long-vacant space back into daily use."],
    ["affordable-rent-commercial-corridors", "Affordable Commercial Rents Help Local Operators Expand", "April 18, 2026", "Community Impact", "Andaleeb properties continue to support neighborhood businesses with flexible spaces, visible storefronts, and practical build-out support."],
    ["under-renovation-portfolio", "Two Mixed-Use Assets Move Into Active Renovation", "March 6, 2026", "Construction", "The Uptown Building and 696-714 Albany Avenue are being repositioned for safer housing, stronger curb appeal, and street-level activity."],
    ["hartford-tax-base-growth", "Reactivated Buildings Strengthen Hartford's Tax Base", "January 22, 2026", "Economic Development", "The company's rehabilitation model targets distressed assets that can return value to municipalities, lenders, tenants, and surrounding blocks."],
    ["new-tenant-openings", "New Tenant Openings Planned Across Hartford Portfolio", "November 12, 2025", "Leasing", "Several commercial spaces are being prepared for service businesses, food operators, and neighborhood-facing retail uses."]
  ],
  caseStudies: [
    ["magnolia-building", "Magnolia Building", "Vacancy to mixed-use momentum", "A distressed Albany Avenue building repositioned with practical improvements and a tenant-first affordability strategy."],
    ["696-714-albany-avenue", "696-714 Albany Avenue", "Under renovation", "A large mixed-use asset being stabilized through exterior repair, unit upgrades, and a phased commercial leasing plan."],
    ["weaver-building", "Weaver Building", "Scale on the corridor", "A 24-unit mixed-use property that anchors a broader revitalization thesis for Albany Avenue."]
  ]
};

if (typeof module !== "undefined") module.exports = AE;
