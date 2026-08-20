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
    images: ["08.webp", "exterior-aerial.jpg", "exterior-front.jpg", "02.webp", "06.webp", "03.webp", "07.webp", "04.webp", "09.webp", "10.webp", "11.webp", "05.webp"],
    stages: ["Completed exterior", "Aerial exterior", "Street frontage", "Before", "Original frontage", "Storefront demolition", "New storefronts", "Apartment before", "Window restoration", "Kitchen installation", "Renovated kitchenette", "Apartment after"],
    captions: ["The completed Magnolia exterior shows the full restored façade, continuous storefront system, awnings, windows, and renewed entrance.", "A real aerial photograph shows the entire Magnolia Building, its corner setting, parking, and surrounding Albany Avenue neighborhood.", "A straight-on photograph captures the complete restored frontage and storefronts without obstructions.", "The original frontage shows boarded openings and the starting condition of the rehabilitation.", "A full pre-renovation view records the mismatched storefronts and weathered street-level façade.", "Workers rebuild the storefront bays with the framing, masonry, and construction access fully exposed.", "New storefront openings, doors, and glazing begin to replace the boarded and enclosed bays.", "An apartment interior records the dated finishes and room condition before unit-level improvements.", "New window installation and unfinished trim document active work inside an apartment.", "Cabinets are set while counters, fixtures, and finish work are still in progress.", "A renovated kitchenette shows new counters, cabinetry, flooring, paint, and restored natural light.", "A completed apartment room shows renewed walls, trim, flooring, and a brighter residential interior."],
    story: ["Magnolia is shown as a true before-and-after project, beginning with the distressed storefront and dated residential conditions behind it.", "The sequence moves through active storefront construction and into the apartments, then returns to the finished building. Together, the images show that the work was more than a façade update: it renewed both the public face of the property and the spaces tenants use every day."]
  },
  "weaver-building": {
    images: ["01.webp", "02.webp", "03.webp", "06.webp", "07.webp", "04.webp", "08.webp", "09.webp", "10.webp", "11.webp", "05.webp"],
    stages: ["Street view", "Kitchen rough-in", "Corridor rebuild", "Walls and trim", "Flooring installation", "Cabinet installation", "Kitchen finishing", "Restored entry", "Finished bedroom", "Finished kitchen", "Completed apartment"],
    captions: ["The Weaver Building's long mixed-use façade establishes the scale of the property on Albany Avenue.", "Opened walls and exposed utility connections document the kitchen rough-in stage.", "A residential corridor is rebuilt with new drywall while floor and finish work remain underway.", "Freshly repaired walls and new trim show the apartment taking shape before final electrical work.", "Crews install new flooring through the hall while the doorways and fixtures remain unfinished.", "New cabinets and counters are installed while construction materials are still visible.", "The kitchen advances with finished cabinetry, counters, tile flooring, and final connections still underway.", "The restored common entry preserves the patterned floor and arched doorway while renewing lighting and finishes.", "A finished bedroom shows new carpet, paint, trim, doors, and lighting.", "The completed kitchen adds appliances and a clean, durable finish throughout.", "The completed apartment brings together the kitchen, appliances, flooring, and living area."],
    story: ["Weaver's story continues past its street presence and into the residential units. The gallery follows actual interior work from utility rough-in and corridor reconstruction through cabinet installation.", "The final apartment view makes the progression clear: worn and opened-up interiors were rebuilt into functional, finished homes while the large mixed-use building remained an anchor on the corridor."]
  },
  "governors-building": {
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "07.webp"],
    stages: ["Signature view", "West approach", "Main Street corner", "Full frontage", "Neighborhood context", "Rear and roof", "Downtown connection"],
    captions: ["The Governor's Building seen from its defining three-quarter corner.", "Aerial photography shows the building's scale, parking, and surrounding street network.", "The rounded corner entrance establishes a clear Main Street presence.", "The full commercial frontage creates a continuous edge along the block.", "A wider view places the property within downtown East Hartford.", "A high rear view documents the roof, service access, parking, and full depth of the property.", "The final aerial connects the building's Main Street frontage to the Hartford skyline beyond."],
    story: ["At the Governor's Building, the architecture already tells the story: a substantial commercial property with a memorable corner entrance and a long, visible Main Street frontage.", "The aerial sequence shows how the building meets the intersection, connects to parking, and contributes to the surrounding downtown fabric. Its value comes from both the spaces inside and the strong civic presence it holds at street level."]
  },
  "restaurant-building": {
    images: ["01.webp", "06.webp", "02.webp", "07.webp", "08.webp", "03.webp", "04.webp", "05.webp", "09.webp"],
    stages: ["Before", "Pre-construction", "Design direction", "Proposed storefront", "Envelope work", "Building work", "Completed storefront", "Street context", "Finished sidewalk"],
    captions: ["The original frontage was boarded, enclosed, and disconnected from the activity along Albany Avenue.", "A side-angle view records the building and street frontage before the new commercial façade was installed.", "The project design study establishes the intended glazing, entrances, and awning rhythm before construction.", "A closer rendering defines the proposed storefront proportions and entrance placement.", "Work along the side wall and roof edge documents repairs to the exterior envelope.", "A construction-period view records additional work on the rear wall, roof edge, and masonry.", "The completed storefront replaces the boarded bays with broad glazing, new entrances, brickwork, and metal awnings.", "A wider completed view shows how the renewed storefront now participates in the surrounding commercial corridor.", "The finished glazing and storefront frame are seen from the rebuilt sidewalk edge looking down Albany Avenue."],
    story: ["The Restaurant Building gallery starts with the boarded storefront, then shows the design intent and a less polished construction-period view of the building envelope.", "The completed photographs return to the same property with transparent storefront bays and a clearer entrance sequence. No interior construction photographs were available in this folder, so the story stays focused on the exterior work that is actually documented."]
  },
  "winton-building": {
    images: ["01.webp", "06.webp", "02.webp", "09.webp", "03.webp", "07.webp", "08.webp", "04.webp", "10.webp", "05.webp", "11.webp"],
    stages: ["Exterior", "Full property", "Vacant suite", "Existing office", "Common areas", "Elevator", "Shared restroom", "Renovated suite", "Second renovated suite", "Occupied office", "Office in use"],
    captions: ["An elevated exterior view establishes Winton's broad footprint and wooded commercial setting.", "A second aerial shows the complete front elevation, entrance walk, parking, and surrounding site.", "A vacant office suite records the interior condition before tenant improvements and furnishing.", "An existing office documents the darker flooring, ceiling, and finishes found in an unimproved suite.", "The renewed lobby and elevator approach show the work carried into shared circulation spaces.", "The updated elevator and tiled landing provide a clean arrival between floors.", "A refreshed shared restroom extends the flooring and paint improvements into support spaces.", "A completed office suite presents updated walls, flooring, lighting, and a flexible professional layout.", "A second renovated suite shows the new resilient flooring and brighter neutral finish palette.", "An occupied office shows the finished space in daily use rather than as an empty real-estate shell.", "A furnished private office completes the sequence with a practical example of the building in use."],
    story: ["Winton's gallery now moves from the full property into the spaces where tenants work. A vacant suite provides the starting point, followed by improved common areas and completed offices.", "The final occupied interior makes the result tangible: the project is not only a building viewed from above, but a functioning workplace with renewed shared areas and usable private suites."]
  },
  "uptown-building": {
    images: ["01.webp", "06.webp", "02.webp", "07.webp", "03.webp", "08.webp", "04.webp", "05.webp"],
    stages: ["Latest exterior", "Interior demolition", "Remediation", "Stripped structure", "Interior framing", "Systems rough-in", "Storefront reconstruction", "New glazing"],
    captions: ["The latest full exterior shows the masonry building and the current state of the corner renovation.", "Removed plaster and lath document the difficult demolition work required to reach the original structure.", "A remediation worker inside the stripped building records the preparation needed before rebuilding could begin.", "The opened floor reveals the original studs, lath, and accumulated demolition debris before reconstruction.", "New interior framing is built within the exposed brick shell as rooms and building systems take shape.", "Open ceilings, structural members, piping, and new framing show the rough-in phase before finishes.", "The street-level openings remain boarded while the storefront structure is actively rebuilt.", "Green exterior sheathing and new black storefront frames mark visible progress toward a more open commercial frontage."],
    story: ["Uptown remains an active renovation, so the gallery does not present a false finished reveal. It begins with the latest exterior, then moves back inside to remediation and structural framing.", "The last two views return to the street as boarded openings give way to new sheathing and glazing frames. The sequence shows measurable progress while making clear that the project is still underway."]
  },
  "ten-mill-pond-lane": {
    images: ["01.webp", "02.webp", "06.webp", "07.webp", "03.webp", "08.webp", "09.webp", "04.webp", "10.webp", "05.webp", "11.webp"],
    stages: ["Exterior", "Reception", "Workstation office", "Conference room", "Private office", "Open office", "Fireplace workspace", "Workroom", "Executive office", "Team office", "Office corridor"],
    captions: ["Aerial photography shows the building's full office footprint in its wooded Simsbury setting.", "The reception area creates a warm, professional arrival with wood detailing and natural light.", "A long workstation office demonstrates the built-in furniture and window line available to a small team.", "The conference room combines a full meeting table, perimeter storage, and broad wooded views.", "A finished private office demonstrates the scale, windows, and move-in-ready condition of individual suites.", "An open office area shows the exposed timber roof structure and flexible workstation layout.", "A stone fireplace and timber ceiling give one collaborative workspace a distinctive focal point.", "A bright workroom shows flexible space for production, meetings, or collaborative work.", "A finished executive office adds built-in storage, a whiteboard wall, and natural light.", "An occupied team office shows how the workplace functions in daily use.", "The final interior view follows the glass-lined corridor connecting the individual offices."],
    story: ["The available Mill Pond photography documents a completed workplace rather than a construction sequence. The gallery therefore moves honestly from the exterior into reception, private offices, and shared work areas.", "Together, the images show the range of finished interior environments inside the property and give prospective tenants a much clearer sense of the building than the exterior image alone."]
  }
};

const matterport = (id) => `https://my.matterport.com/show/?m=${id}`;
const propertyTours = {
  "winton-building": [{ url: matterport("mH5hYotLX5g"), label: "45 Wintonbury Avenue" }],
  "governors-building": [{ url: matterport("QNHb3YJgz9b"), label: "Governor's Building – 2S, 3S & 3N" }],
  "restaurant-building": [{ url: matterport("8gjwUoJLbjs"), label: "1113 Albany Avenue Apartments" }],
  "post-office-building": [{ url: matterport("de3418jP7nD"), label: "651 Maple Avenue" }],
  "696-714-albany-avenue": [
    { url: matterport("wbcW1dwiRF9"), label: "696 Albany Avenue" },
    { url: matterport("zpVzNzVDmJd"), label: "696-714 Albany Avenue" },
    { url: matterport("kZyHrRwJw53"), label: "696-714 Albany Avenue" }
  ],
  "690-albany-avenue": [{ url: matterport("HMrCvfeczma"), label: "690 Albany Avenue – Boost Mobile Store" }],
  "sullivan-avenue-portfolio": [
    { url: matterport("feg82K1GjHi"), label: "942-946 Sullivan Avenue" },
    { url: matterport("oA4sunQQfeA"), label: "950-952 Sullivan Avenue" },
    { url: matterport("GBLJ5CcjAM6"), label: "948 Sullivan Avenue" },
    { url: matterport("WWywACQGSME"), label: "972 Sullivan Avenue" },
    { url: matterport("8xJnG4eL8Q5"), label: "982-984 Sullivan Avenue" },
    { url: matterport("f7hNYAJLTf2"), label: "978-980 Sullivan Avenue" },
    { url: matterport("dccKtqzm1V6"), label: "960 Sullivan Avenue" },
    { url: matterport("mfHoUcT6foB"), label: "950-954 Sullivan Avenue – B&G Lounge and Upstairs" }
  ],
  "magnolia-building": [{ url: matterport("x9sEh7Cz3kV"), label: "635 Albany Avenue" }],
  "907-albany-avenue": [
    { url: matterport("3J3TEuW94sM"), label: "907-909 Albany Avenue – First Floor" },
    { url: matterport("yCe1oneqjN9"), label: "907-909 Albany Avenue – Second and Third Floors" }
  ],
  "boat-club-building": [
    { url: matterport("v5Z8XKWyp2K"), label: "3 East Main Street, Unit 1" },
    { url: matterport("H9MjMyB9oe1"), label: "3 East Main Street, Unit 1" }
  ],
  "five-seven-east-main": [{ url: matterport("CjUp2xGgvA4"), label: "5 East Main Street" }]
};

const propertyPrimaryImages = {
  "690-albany-avenue": "assets/images/properties/690-albany-avenue/01.jpg",
  "895-albany-avenue": "assets/images/properties/895-albany-avenue/01.jpg",
  "907-albany-avenue": "assets/images/properties/907-albany-avenue/01-no-cars.jpg",
  "919-albany-avenue": "assets/images/properties/919-albany-avenue/01.jpg",
  "tinker-building": "assets/images/properties/tinker-building/01.jpg",
  "post-office-building": "assets/images/properties/post-office-building/01.jpg",
  "sullivan-avenue-portfolio": "assets/images/properties/sullivan-avenue-portfolio/01.webp",
  "boat-club-building": "assets/images/properties/boat-club-building/01.jpg",
  "five-seven-east-main": "assets/images/properties/five-seven-east-main/01.jpg",
  "143-edgewood-street": "assets/images/properties/143-edgewood-street/01.jpg",
  "65-beelzebub-road": "assets/images/properties/65-beelzebub-road/01.jpg",
  "20-highland-park": "assets/images/properties/20-highland-park/01.jpg",
  "258-farmington-avenue": "assets/images/properties/258-farmington-avenue/01.jpg",
  "455-farmington-avenue": "assets/images/properties/455-farmington-avenue/01.jpg",
  "affleck-building": "assets/images/properties/affleck-building/01-no-cars.jpg",
  "eternity-building": "assets/images/properties/eternity-building/01-no-cars.jpg",
  "696-714-albany-avenue": "assets/images/properties/696-714-albany-avenue/01.jpg",
  "terry-square-plaza": "assets/images/properties/terry-square-plaza/01.jpg",
  "merchant-association": "assets/images/properties/merchant-association/01.jpg",
  "885-albany-avenue": "assets/images/properties/885-albany-avenue/01.jpg",
  "ten-mill-pond-lane": "assets/images/home/10-mill-pond-lane.jpg"
};

const propertyMeasurements = {
  "690-albany-avenue": { siteAcres: 0.28, grossSqFt: 2858, netSqFt: 2858 },
  "907-albany-avenue": { siteAcres: 0.19, grossSqFt: 6940, netSqFt: 6150 },
  "919-albany-avenue": { siteAcres: 0.21, grossSqFt: 6528, netSqFt: 6528 },
  "143-edgewood-street": { siteAcres: 0.17, grossSqFt: 6416, netSqFt: 6056 },
  "65-beelzebub-road": { siteAcres: 0.72, grossSqFt: 3235, netSqFt: 1344 },
  "20-highland-park": { siteAcres: 0.12, grossSqFt: 3162, netSqFt: 1425 },
  "258-farmington-avenue": { grossSqFt: 3300, netSqFt: 1650 },
  "696-714-albany-avenue": { siteAcres: 0.14, grossSqFt: 15123, netSqFt: 10572 },
  "885-albany-avenue": { siteAcres: 0.21, grossSqFt: 2420, netSqFt: 2420 }
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
    ["magnolia-building", "635-651 Albany Avenue, Hartford, CT 06112", "Magnolia Building LLC", "635-651 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "15", 2000000, "100%", "Stabilized"],
    ["690-albany-avenue", "690 Albany Avenue, Hartford, CT 06112", "Ahmed Kavita Trustee", "690 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "3", 500000, "100%", "Stabilized"],
    ["895-albany-avenue", "895 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "895 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 35000, "100%", "Stabilized"],
    ["907-albany-avenue", "907 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "907 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "3", 400000, "100%", "Stabilized"],
    ["919-albany-avenue", "919 Albany Avenue, Hartford, CT 06112", "919 Albany Avenue LLC", "919 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "3", 900000, "100%", "Stabilized"],
    ["tinker-building", "1136-1150 Albany Avenue, Hartford, CT 06112", "Tinker building LLC", "1136-1150 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "10", 1500000, "100%", "Stabilized"],
    ["weaver-building", "1154-1170 Albany Avenue, Hartford, CT 06112", "Weaver Building LLC", "1154-1170 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "24", 3000000, "100%", "Stabilized"],
    ["winton-building", "45 Wintonbury Avenue, Bloomfield, CT 06002", "Winton building LLC", "45 Wintonbury Avenue", "Bloomfield, CT", "Commercial · Office Space", "29", 2000000, "100%", "Stabilized"],
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
    ["affleck-building", "741-749 Park Street, Hartford, CT 06106", "Affleck Building LLC", "741-749 Park Street", "Hartford, CT", "Res/Com Mixed use", "12", 1400000, "100%", "Stabilized"],
    ["eternity-building", "692-700 Park Street, Hartford, CT 06106", "Eternity Building LLC", "692-700 Park Street", "Hartford, CT", "Res/Com Mixed use", "8", 800000, "100%", "Stabilized"],
    ["uptown-building", "1468-1470 Albany Avenue, Hartford, CT 06112", "Uptown Building LLC", "1468-1470 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "8", 1200000, "100%", "Under renovation"],
    ["696-714-albany-avenue", "696-714 Albany Avenue, Hartford, CT 06112", "Andaleeb Enterprises LLC", "696-714 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "11", 1500000, "100%", "Under renovation"],
    ["restaurant-building", "1113-1115 Albany Avenue, Hartford, CT 06112", "Restaurant Building LLC", "1113-1115 Albany Avenue", "Hartford, CT", "Res/Com Mixed use", "9", 500000, "100%", "Stabilized"],
    ["terry-square-plaza", "2739 Main Street, Hartford, CT", "Terry Square plaza", "2739 Main Street", "Hartford, CT", "Commercial · Retail Space", "7", 750000, "100%", "Stabilized"],
    ["merchant-association", "1108 Albany Avenue, Hartford, CT 06112", "The Merchant Association LLC", "1108 Albany Avenue", "Hartford, CT", "Commercial · Office Space", "1", 365000, "100%", "Stabilized"],
    ["885-albany-avenue", "885 Albany Avenue, Hartford, CT 06112", "885 Albany Avenue LLC", "885 Albany Avenue", "Hartford, CT", "Commercial · Retail Space", "1", 350000, "100%", "Stabilized"],
    ["ten-mill-pond-lane", "10 Mill Pond Lane, Simsbury, CT 06070", "Ten Mill Pond Lane LLC", "10 Mill Pond Lane", "Simsbury, CT", "Commercial · Office Space", "TBD", 0, "100%", "Closing in progress"]
  ].map((p, index) => {
    const typeKey = p[5].includes("Residential") ? "residential" : p[5].includes("Mixed") ? "mixed" : "commercial";
    const commercialType = typeKey === "commercial" ? (p[5].includes("Office") ? "office" : "retail") : null;
    const media = propertyMedia[p[0]];
    const imgSet = media
      ? media.images.map(file => file.startsWith("assets/") ? file : `assets/images/properties/${p[0]}/${file}`)
      : propertyPrimaryImages[p[0]]
        ? [propertyPrimaryImages[p[0]]]
        : [images[typeKey], images.street, images.restoration, images.lobby, images.brick];
    return {
      id: index + 1,
      slug: p[0],
      name: p[1],
      entity: p[2],
      address: p[3],
      city: p[4],
      type: p[5],
      category: typeKey,
      commercialType,
      units: p[6],
      value: p[7],
      owned: p[8],
      status: p[9],
      ...propertyMeasurements[p[0]],
      images: imgSet,
      stages: media?.stages || [],
      captions: media?.captions || [],
      story: media?.story || [],
      tours: propertyTours[p[0]] || [],
      heroVideo: p[0] === "sullivan-avenue-portfolio" ? "assets/video/drone-buildings-hero.mp4" : null,
      featured: ["post-office-building", "ten-mill-pond-lane", "magnolia-building"].includes(p[0])
    };
  }),
  news: [
    ["south-windsor-colony-complex-sale", "Five-Building Retail-Office Complex in South Windsor Fetches $2M", "August 27, 2024", "Hartford Business Journal", "The Kavita Ahmed Family Trust purchased the five-building Colony Shopping Complex at 942 Sullivan Avenue in South Windsor for $2 million, adding to the family's portfolio of Hartford-area retail and apartment properties.", "https://hartfordbusiness.com/article/five-building-retail-office-complex-in-south-windsor-fetches-2m/"],
    ["albany-avenue-vacant-storefronts-zoning", "Eager to Fill Vacant Storefronts, Hartford Seeks to Allow Office Space in First-Floor Mixed-Use Properties", "March 5, 2024", "Hartford Business Journal", "A proposed Hartford zoning change would allow first-floor office use in mixed-use buildings along key commercial corridors, including Andaleeb's own property at 919 Albany Avenue, to help fill vacant storefronts.", "https://hartfordbusiness.com/article/eager-to-fill-vacant-storefronts-hartford-seeks-to-allow-office-space-in-first-floor-mixed/"],
    ["governors-building-acquisition", "Prominent Downtown East Hartford Mixed-Use Office Building Sells to Realty Investor Active in Neighboring Hartford", "January 4, 2024", "Hartford Business Journal", "Governor's Building LLC, an entity tied to Andaleeb principal Kavita Ahmed, acquired the 18,527-square-foot “Governor's Corner” building in downtown East Hartford for $750,000.", "https://hartfordbusiness.com/article/prominent-downtown-east-hartford-mixed-use-office-building-sells-to-realty-investor-active/"],
    ["courant-albany-avenue", "On One of This CT City’s Busiest Thoroughfares, a Developer Snaps Up Properties. Here’s the Plan", "September 11, 2023", "Hartford Courant", "A Connecticut real estate company is acquiring aging mixed-use buildings, renovating upper-floor apartments, and improving façades and storefronts along Albany Avenue.", "https://www.courant.com/2023/09/11/on-one-of-this-ct-citys-busiest-thoroughfares-a-developer-snaps-up-properties-heres-the-plan/"],
    ["amber-ace-andaleeb", "2023 Power 25 Real Estate: Amber “Ace” Andaleeb", "June 12, 2023", "Hartford Business Journal", "Hartford Business Journal profiles Amber “Ace” Andaleeb and the family-owned real estate company’s active investment and revitalization work in the capital city.", "https://hartfordbusiness.com/honoree/amber-ace-andaleeb/"],
    ["albany-avenue-40-apartments", "Hartford Seeks to Transform Blighted Albany Avenue Site Into 40 Apartments With Retail", "December 14, 2022", "Hartford Business Journal", "The city of Hartford selected Andaleeb Enterprises to redevelop a long-vacant, fire-damaged site on Albany Avenue into 40 apartments and 3,000 square feet of retail space.", "https://hartfordbusiness.com/article/hartford-seeks-to-transform-blighted-albany-avenue-site-into-40-apartments-with-retail/"]
  ],
  caseStudies: [
    ["magnolia-building", "635-651 Albany Avenue, Hartford, CT 06112", "Vacancy to mixed-use momentum", "A distressed Albany Avenue building repositioned with practical improvements and a tenant-first affordability strategy."],
    ["696-714-albany-avenue", "696-714 Albany Avenue, Hartford, CT 06112", "Under renovation", "A large mixed-use asset being stabilized through exterior repair, unit upgrades, and a phased commercial leasing plan."],
    ["weaver-building", "1154-1170 Albany Avenue, Hartford, CT 06112", "Scale on the corridor", "A 24-unit mixed-use property that anchors a broader revitalization thesis for Albany Avenue."]
  ],
  tenants: [
    { name: "Metro Wireless", logo: "metro-wireless.svg" },
    { name: "Cricket Wireless", logo: "cricket-wireless.svg" },
    { name: "Total Wireless", logo: "total-wireless.png" },
    { name: "Bank of America", logo: "bank-of-america.svg" },
    { name: "USPS", logo: "usps.svg" },
    { name: "H&R Block", logo: "hr-block.svg" },
    { name: "Liberty Tax", logo: "liberty-tax.png" },
    { name: "Bloomfield Housing Authority", logo: "bloomfield-housing-authority.png" },
    { name: "Carefree Boat Club", logo: "carefree-boat-club.webp", dark: true },
    { name: "Golden Crust", logo: "golden-krust.png" },
    { name: "Angela of Edgewood", logo: "angel-of-edgewood.png" },
    { name: "JN Money Service", logo: "jn-money.png" },
    { name: "Wicked Cafe", logo: null },
    { name: "Go Net Speed", logo: "gonetspeed.svg" }
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
