// AI Data Center Map - Comprehensive Data
// Last updated: March 2026

const DATA_CENTERS = [
  // ═══════════════════════════════════════
  // HYPERSCALERS
  // ═══════════════════════════════════════
  
  // AWS
  { id: "aws-indiana", name: "AWS Project Rainier", company: "Amazon Web Services", category: "hyperscaler",
    lat: 41.7002, lng: -86.1981, location: "New Carlisle, Indiana, USA",
    powerMW: 2250, powerGW: 2.25, status: "operational", onlineDate: "2025-10",
    description: "Amazon's largest AI data center, 1,200 acres, 30 buildings planned. Dedicated to Anthropic AI training with 500,000+ AWS Trainium 2 chips. Operational since Oct 2025.",
    chips: "AWS Trainium 2", partner: "Anthropic" },
  
  { id: "aws-virginia", name: "AWS US East", company: "Amazon Web Services", category: "hyperscaler",
    lat: 39.0438, lng: -77.4874, location: "Northern Virginia, USA",
    powerMW: 800, powerGW: 0.8, status: "operational", onlineDate: "2020-01",
    description: "AWS's largest existing region, powering the majority of US East cloud and AI workloads. Continuously expanding.",
    chips: "Mixed GPU/Trainium" },

  // Microsoft Azure
  { id: "ms-fairwater1", name: "Microsoft Fairwater 1", company: "Microsoft Azure", category: "hyperscaler",
    lat: 42.7261, lng: -87.7828, location: "Mount Pleasant, Wisconsin, USA",
    powerMW: 1000, powerGW: 1.0, status: "operational", onlineDate: "2025-09",
    description: "World's most powerful AI datacenter. Uses closed-loop liquid cooling. Connected via AI Wide Area Network. Part of $7.3B investment.",
    chips: "NVIDIA GB200/GB300" },

  { id: "ms-fairwater2", name: "Microsoft Fairwater 2", company: "Microsoft Azure", category: "hyperscaler",
    lat: 33.749, lng: -84.388, location: "Atlanta, Georgia, USA",
    powerMW: 1000, powerGW: 1.0, status: "operational", onlineDate: "2025-11",
    description: "Second Fairwater site, connected to Wisconsin via dedicated fiber. Currently the world's most powerful AI facility online.",
    chips: "NVIDIA GB200/GB300" },

  { id: "ms-fairwater4", name: "Microsoft Fairwater 4", company: "Microsoft Azure", category: "hyperscaler",
    lat: 33.85, lng: -84.35, location: "Atlanta, Georgia, USA",
    powerMW: 1300, powerGW: 1.3, status: "construction", onlineDate: "2027-06",
    description: "Under construction near Fairwater 2. When complete, total Fairwater network exceeds 3.3 GW by end 2027.",
    chips: "NVIDIA GB300+" },

  // Google Cloud
  { id: "gcp-detroit", name: "Google Detroit AI Campus", company: "Google Cloud", category: "hyperscaler",
    lat: 42.3314, lng: -83.0458, location: "Detroit, Michigan, USA",
    powerMW: 2700, powerGW: 2.7, status: "construction", onlineDate: "2027-01",
    description: "Massive new campus powered by 2.7 GW of new resources via Xcel Energy partnership. Includes 1.6 GW solar, 400 MW storage.",
    chips: "Google TPU v6" },

  { id: "gcp-iowa", name: "Google Council Bluffs", company: "Google Cloud", category: "hyperscaler",
    lat: 41.2619, lng: -95.8608, location: "Council Bluffs, Iowa, USA",
    powerMW: 400, powerGW: 0.4, status: "operational", onlineDate: "2009-01",
    description: "One of Google's largest and longest-running data centers. Over $5.5B invested. 100+ MW with continuous expansions.",
    chips: "Google TPU v5/v6" },

  { id: "gcp-nevada", name: "Google Nevada Campus", company: "Google Cloud", category: "hyperscaler",
    lat: 36.1699, lng: -115.1398, location: "Nevada, USA",
    powerMW: 500, powerGW: 0.5, status: "construction", onlineDate: "2026-06",
    description: "New AI campus with clean energy partnership through AES. Part of Google's strategy to bring 9+ GW of new electricity capacity.",
    chips: "Google TPU v6" },

  // Meta
  { id: "meta-hyperion", name: "Meta Hyperion", company: "Meta Platforms", category: "hyperscaler",
    lat: 32.37, lng: -91.73, location: "Richland Parish, Louisiana, USA",
    powerMW: 5000, powerGW: 5.0, status: "construction", onlineDate: "2026-05",
    description: "Largest planned data center in the Western Hemisphere. 3,650 acres. 10 gas power plants (7.5 GW) + 2.5 GW renewables. $27B total via Blue Owl Capital JV. Phase 1: 2 GW.",
    chips: "NVIDIA GB200/GB300", partner: "Entergy, Blue Owl Capital" },

  // Oracle Cloud
  { id: "oci-abilene", name: "Oracle Stargate Abilene", company: "Oracle Cloud", category: "hyperscaler",
    lat: 32.4487, lng: -99.7331, location: "Abilene, Texas, USA",
    powerMW: 1200, powerGW: 1.2, status: "operational", onlineDate: "2025-06",
    description: "Flagship Stargate campus, operational on Oracle Cloud Infrastructure. First NVIDIA GB200 racks delivered June 2025. Scaling from 200 MW to 1.2 GW.",
    chips: "NVIDIA GB200", partner: "OpenAI, SoftBank" },

  { id: "oci-shackelford", name: "Oracle Stargate Shackelford", company: "Oracle Cloud", category: "hyperscaler",
    lat: 32.72, lng: -99.35, location: "Shackelford County, Texas, USA",
    powerMW: 2000, powerGW: 2.0, status: "construction", onlineDate: "2027-01",
    description: "New Stargate site developed by Oracle. Part of 5.5 GW Oracle-OpenAI expansion. Multiple gigawatts planned.",
    chips: "NVIDIA GB200+", partner: "OpenAI" },

  { id: "oci-newmexico", name: "Oracle Stargate New Mexico", company: "Oracle Cloud", category: "hyperscaler",
    lat: 32.35, lng: -106.75, location: "Doña Ana County, New Mexico, USA",
    powerMW: 1500, powerGW: 1.5, status: "construction", onlineDate: "2027-06",
    description: "New Stargate data center site. Part of the $300B+ Oracle-OpenAI partnership over five years.",
    chips: "NVIDIA GB200+", partner: "OpenAI" },

  { id: "oci-wisconsin", name: "Oracle Stargate Wisconsin", company: "Oracle Cloud", category: "hyperscaler",
    lat: 43.0389, lng: -87.9065, location: "Wisconsin, USA",
    powerMW: 800, powerGW: 0.8, status: "construction", onlineDate: "2027-03",
    description: "Midwest Stargate site, developed by Oracle in partnership with Vantage.",
    chips: "NVIDIA GB200+", partner: "OpenAI, Vantage" },

  // Alibaba Cloud
  { id: "alibaba-zhangbei", name: "Alibaba Cloud Zhangbei", company: "Alibaba Cloud", category: "hyperscaler",
    lat: 41.15, lng: 114.7, location: "Zhangbei County, Hebei, China",
    powerMW: 150, powerGW: 0.15, status: "operational", onlineDate: "2018-01",
    description: "One of Asia's largest data center campuses. 667,972 sqm, 52 buildings, 50,000 data racks. Over $2.9B invested.",
    chips: "Mixed" },

  // IBM Cloud
  { id: "ibm-langfang", name: "IBM/Range Information Hub", company: "IBM Cloud", category: "hyperscaler",
    lat: 39.5, lng: 116.68, location: "Langfang, Hebei, China",
    powerMW: 150, powerGW: 0.15, status: "operational", onlineDate: "2016-01",
    description: "Range International Information Hub built with IBM. 585,000 sqm. $3B investment. Supports government & enterprise AI/cloud.",
    chips: "Mixed" },

  // Huawei
  { id: "huawei-guian", name: "Huawei Gui'an Cloud DC", company: "Huawei", category: "hyperscaler",
    lat: 26.42, lng: 106.65, location: "Gui'an New Area, Guizhou, China",
    powerMW: 200, powerGW: 0.2, status: "operational", onlineDate: "2021-01",
    description: "Huawei's major cloud data center in southwestern China. Supports Huawei Cloud AI and enterprise services across Asia-Pacific.",
    chips: "Huawei Ascend" },

  // ═══════════════════════════════════════
  // NEOCLOUDS
  // ═══════════════════════════════════════

  // Nebius
  { id: "nebius-independence", name: "Nebius Independence AI Factory", company: "Nebius", category: "neocloud",
    lat: 39.0911, lng: -94.4155, location: "Independence, Missouri, USA",
    powerMW: 1200, powerGW: 1.2, status: "construction", onlineDate: "2027-01",
    description: "Nebius's first gigawatt-scale AI factory. City Council approved Mar 2026. Up to 1.2 GW capacity. Connected to Independence Power & Light municipal utility.",
    chips: "NVIDIA GB200/GB300" },

  { id: "nebius-kc", name: "Nebius Kansas City", company: "Nebius", category: "neocloud",
    lat: 39.0997, lng: -94.5786, location: "Kansas City, Missouri, USA",
    powerMW: 40, powerGW: 0.04, status: "operational", onlineDate: "2025-01",
    description: "US gateway facility. 5 MW live (Q1 2025), expanding to 40 MW. Anchor tenant at Patmos AI Campus. Supports enterprise inference workloads.",
    chips: "NVIDIA Blackwell" },

  // CoreWeave
  { id: "coreweave-us", name: "CoreWeave US Network", company: "CoreWeave", category: "neocloud",
    lat: 40.7128, lng: -74.006, location: "Multiple US locations",
    powerMW: 850, powerGW: 0.85, status: "operational", onlineDate: "2025-12",
    description: "43 data centers with 850 MW active power (end 2025). Added 250 MW in Q4 2025 alone. Targeting 5 GW additional by 2030. Over 3 GW contracted.",
    chips: "NVIDIA H100/GB200" },

  // IREN
  { id: "iren-childress", name: "IREN Horizon 1 (Childress)", company: "IREN", category: "neocloud",
    lat: 34.4265, lng: -100.2040, location: "Childress, Texas, USA",
    powerMW: 75, powerGW: 0.075, status: "operational", onlineDate: "2025-12",
    description: "75 MW liquid-cooled AI/HPC data center. 200kW per rack via direct-to-chip cooling for NVIDIA Blackwell. Part of 750 MW Childress campus.",
    chips: "NVIDIA Blackwell" },

  { id: "iren-sweetwater1", name: "IREN Sweetwater 1", company: "IREN", category: "neocloud",
    lat: 32.47, lng: -100.4, location: "Fisher County, Texas, USA",
    powerMW: 1400, powerGW: 1.4, status: "construction", onlineDate: "2026-04",
    description: "1.4 GW site on track for energization April 2026. Combined with Sweetwater 2, totals 2 GW. 100% renewable energy.",
    chips: "NVIDIA Blackwell/Next-gen" },

  { id: "iren-sweetwater2", name: "IREN Sweetwater 2", company: "IREN", category: "neocloud",
    lat: 32.5, lng: -100.45, location: "Fisher County, Texas, USA",
    powerMW: 600, powerGW: 0.6, status: "planned", onlineDate: "2028-01",
    description: "600 MW expansion site. Energization expected 2028. Direct fiber loop to Sweetwater 1. Total portfolio: 4.5 GW.",
    chips: "Next-gen" },

  // Applied Digital
  { id: "apld-deltaforge", name: "Applied Digital Delta Forge 1", company: "Applied Digital", category: "neocloud",
    lat: 32.5, lng: -90.0, location: "Southern US",
    powerMW: 430, powerGW: 0.43, status: "construction", onlineDate: "2027-06",
    description: "430 MW AI Factory campus. Broke ground Jan 2026. Two 150 MW facilities across 500+ acres. Named Best Data Center in Americas 2025.",
    chips: "NVIDIA GPU" },

  // Lambda Labs
  { id: "lambda-chicago", name: "Lambda AI Factory Chicago", company: "Lambda Labs", category: "neocloud",
    lat: 41.8781, lng: -87.6298, location: "Chicago, Illinois, USA",
    powerMW: 23, powerGW: 0.023, status: "construction", onlineDate: "2026-06",
    description: "23 MW single-tenant AI factory built with EdgeConneX. Hybrid cooling for AI training and inference. Part of 30+ MW dual-city expansion.",
    chips: "NVIDIA GB200" },

  { id: "lambda-dallas", name: "Lambda Cloud Dallas", company: "Lambda Labs", category: "neocloud",
    lat: 33.0198, lng: -96.6989, location: "Plano, Texas, USA",
    powerMW: 50, powerGW: 0.05, status: "construction", onlineDate: "2026-10",
    description: "Taking capacity at Aligned Data Center DFW-04. 425,500 sqft. DeltaFlow liquid cooling up to 300 kW/rack. Vision: 3 GW+ total.",
    chips: "NVIDIA GB200" },

  // Nscale
  { id: "nscale-glomfjord", name: "Nscale Glomfjord", company: "Nscale", category: "neocloud",
    lat: 66.81, lng: 14.10, location: "Glomfjord, Norway",
    powerMW: 60, powerGW: 0.06, status: "operational", onlineDate: "2024-06",
    description: "Located in Norway's Arctic Circle. 100% renewable energy. 30 MW operational, expandable to 60 MW. Best-in-class efficiency.",
    chips: "NVIDIA H100/Blackwell" },

  { id: "nscale-narvik", name: "Nscale Stargate Norway (Narvik)", company: "Nscale", category: "neocloud",
    lat: 68.42, lng: 17.43, location: "Narvik, Norway",
    powerMW: 520, powerGW: 0.52, status: "construction", onlineDate: "2026-12",
    description: "Stargate Norway - AI Gigafactory. 230 MW initial + 290 MW expansion. Partnership with Aker ASA & OpenAI. $6.2B Microsoft agreement. 100,000 NVIDIA GPUs by end 2026. Powered by renewable hydropower.",
    chips: "NVIDIA GB200", partner: "Aker ASA, OpenAI, Microsoft" },

  { id: "nscale-sines", name: "Nscale Sines", company: "Nscale", category: "neocloud",
    lat: 37.9568, lng: -8.8677, location: "Sines, Portugal",
    powerMW: 1000, powerGW: 1.0, status: "construction", onlineDate: "2027-06",
    description: "Hyperscale site at Start Campus. GW-scale AI deployments. Seawater cooling. Trans-Atlantic low-latency hub. 100% renewable energy.",
    chips: "NVIDIA GPU" },

  { id: "nscale-wardcounty", name: "Nscale Ward County", company: "Nscale", category: "neocloud",
    lat: 31.5, lng: -103.1, location: "Ward County, Texas, USA",
    powerMW: 1200, powerGW: 1.2, status: "construction", onlineDate: "2027-01",
    description: "240 MW initial, expanding to 1.2 GW. Partnership with Ionic Digital. Direct-liquid cooling and rear-door heat-exchangers.",
    chips: "NVIDIA GPU", partner: "Ionic Digital" },

  // ═══════════════════════════════════════
  // AI INDEPENDENT POWER DATA CENTERS
  // ═══════════════════════════════════════

  // xAI
  { id: "xai-colossus", name: "xAI Colossus", company: "xAI", category: "ai-independent",
    lat: 35.1495, lng: -90.0490, location: "Memphis, Tennessee, USA",
    powerMW: 2000, powerGW: 2.0, status: "operational", onlineDate: "2025-12",
    description: "World's largest single-site AI training installation. 555,000+ NVIDIA GPUs ($18B). 3 buildings: Colossus 1 (500 MW), Colossus 2 (1 GW), Building 3 'MACROHARDRR' (500 MW). On-site gas power plant in Mississippi.",
    chips: "NVIDIA GB200/GB300" },

  // Celestica
  { id: "celestica-hq", name: "Celestica AI Manufacturing HQ", company: "Celestica", category: "ai-independent",
    lat: 43.7, lng: -79.4, location: "Toronto, Ontario, Canada",
    powerMW: 50, powerGW: 0.05, status: "operational", onlineDate: "2025-01",
    description: "Major AI data center hardware manufacturer. Expanding manufacturing capacity for AI-focused data center technologies. Record 2025 performance.",
    chips: "Manufacturing" },

  // Palantir
  { id: "palantir-dc", name: "Palantir AI Operations Center", company: "Palantir", category: "ai-independent",
    lat: 38.8977, lng: -77.0365, location: "Washington, D.C., USA",
    powerMW: 30, powerGW: 0.03, status: "operational", onlineDate: "2024-01",
    description: "AI operations infrastructure supporting government and enterprise AI deployments. Focus on sovereign AI and defense applications. Nuclear energy partnerships.",
    chips: "Mixed GPU" },

  // Lumentum
  { id: "lumentum-hq", name: "Lumentum Optical AI Hub", company: "Lumentum", category: "ai-independent",
    lat: 37.3861, lng: -122.0839, location: "San Jose, California, USA",
    powerMW: 20, powerGW: 0.02, status: "operational", onlineDate: "2024-06",
    description: "Critical optical networking infrastructure for AI data center interconnects. Shares up 300% in 2025 driven by AI demand.",
    chips: "Optical transceivers" },

  // Crusoe Energy
  { id: "crusoe-texas", name: "Crusoe AI Data Center", company: "Crusoe Energy", category: "ai-independent",
    lat: 32.0, lng: -100.5, location: "West Texas, USA",
    powerMW: 200, powerGW: 0.2, status: "construction", onlineDate: "2026-06",
    description: "AI cloud powered by stranded energy. Stargate partner. Uses flared natural gas and renewable sources for carbon-reduced AI compute.",
    chips: "NVIDIA H100/GB200" },

  // DataVolt (Saudi)
  { id: "datavolt-oxagon", name: "DataVolt AI Factory Campus", company: "DataVolt", category: "ai-independent",
    lat: 28.0, lng: 35.0, location: "NEOM Oxagon, Saudi Arabia",
    powerMW: 1500, powerGW: 1.5, status: "construction", onlineDate: "2027-01",
    description: "$5B investment. 1.5 GW AI factory campus at NEOM Oxagon. One of the largest compute sites globally. Part of Project Transcendence.",
    chips: "NVIDIA Blackwell" },

  // Anthropic (via AWS)
  { id: "anthropic-rainier", name: "Anthropic Training Cluster", company: "Anthropic", category: "ai-independent",
    lat: 41.69, lng: -86.2, location: "New Carlisle, Indiana, USA",
    powerMW: 1000, powerGW: 1.0, status: "operational", onlineDate: "2025-10",
    description: "Dedicated cluster within AWS Project Rainier. 1M+ Trainium 2 chips for training Claude models. First 500K chips installed Oct 2025.",
    chips: "AWS Trainium 2" },

  // Scale AI
  { id: "scale-dc", name: "Scale AI Compute Hub", company: "Scale AI", category: "ai-independent",
    lat: 37.7749, lng: -122.4194, location: "San Francisco, California, USA",
    powerMW: 30, powerGW: 0.03, status: "operational", onlineDate: "2025-06",
    description: "AI data infrastructure for training data and model evaluation. Government contracts for defense AI applications.",
    chips: "NVIDIA GPU" },

  // Inflection AI / Microsoft
  { id: "inflection-hub", name: "Inflection AI Hub", company: "Inflection AI", category: "ai-independent",
    lat: 37.4419, lng: -122.143, location: "Palo Alto, California, USA",
    powerMW: 50, powerGW: 0.05, status: "operational", onlineDate: "2025-01",
    description: "AI compute infrastructure operated by Inflection AI (now closely aligned with Microsoft). Focused on enterprise AI deployment.",
    chips: "NVIDIA H100" },

  // ═══════════════════════════════════════
  // SOVEREIGN / GOVERNMENT DATA CENTERS
  // ═══════════════════════════════════════

  // Saudi Arabia HUMAIN
  { id: "humain-riyadh", name: "HUMAIN Sovereign AI Campus", company: "HUMAIN (Saudi Arabia)", category: "sovereign",
    lat: 24.7136, lng: 46.6753, location: "Riyadh, Saudi Arabia",
    powerMW: 1900, powerGW: 1.9, status: "construction", onlineDate: "2026-09",
    description: "Saudi sovereign AI initiative. 1.9 GW by 2030, scaling to 6.6 GW by 2034. $77B total build cost. First 100 MW live Q2 2026. 18,000 NVIDIA Blackwell GPUs initial tranche.",
    chips: "NVIDIA Blackwell", partner: "PIF, NVIDIA, AMD" },

  // UK AI Growth Zone
  { id: "uk-aigz", name: "UK AI Growth Zone", company: "UK Government", category: "sovereign",
    lat: 51.5074, lng: -0.1278, location: "London & Multiple UK Sites",
    powerMW: 6000, powerGW: 6.0, status: "planned", onlineDate: "2030-01",
    description: "UK targets 6 GW AI-capable DC capacity by 2030 (3x current). AI Growth Zones with 500 MW+ each, at least one exceeding 1 GW. £31B UK-US tech partnership.",
    chips: "Mixed" },

  // India
  { id: "india-adaniconnex", name: "AdaniConneX AI Mega Campus", company: "AdaniConneX (India)", category: "sovereign",
    lat: 17.385, lng: 78.4867, location: "Hyderabad, India",
    powerMW: 500, powerGW: 0.5, status: "construction", onlineDate: "2026-06",
    description: "India's push for sovereign AI compute. Advanced liquid cooling. Part of India's $27.2B data center market by 2032. Supports government AI initiatives.",
    chips: "NVIDIA GPU" },

  { id: "india-jio", name: "Reliance Jio AI Data Centers", company: "Reliance Jio (India)", category: "sovereign",
    lat: 19.076, lng: 72.8777, location: "Mumbai, India",
    powerMW: 300, powerGW: 0.3, status: "construction", onlineDate: "2026-03",
    description: "GPU-as-a-Service infrastructure using NVIDIA GH200 Grace Hopper Superchip and DGX Cloud. India's first large-scale generative AI platform.",
    chips: "NVIDIA GH200", partner: "NVIDIA" },

  // Indonesia
  { id: "indo-damac", name: "DAMAC Digital Jakarta", company: "DAMAC Digital (Indonesia)", category: "sovereign",
    lat: -6.2088, lng: 106.8456, location: "Jakarta, Indonesia",
    powerMW: 300, powerGW: 0.3, status: "construction", onlineDate: "2026-06",
    description: "$2.3B AI-ready data center. Part of DAMAC's 300 MW capacity across Asia by 2026. Supporting Indonesia's AI sovereignty goals.",
    chips: "Mixed GPU" },

  // Canada
  { id: "canada-sovereign", name: "Canada Sovereign AI DC", company: "Government of Canada", category: "sovereign",
    lat: 45.4215, lng: -75.6972, location: "Ottawa Region, Canada",
    powerMW: 200, powerGW: 0.2, status: "planned", onlineDate: "2027-06",
    description: "Call for proposals closed Feb 2026 for sovereign AI DCs >100 MW. Preference for renewable energy, Indigenous participation, Canadian supply chains.",
    chips: "Mixed" },

  // UAE
  { id: "uae-g42", name: "G42 AI Compute Campus", company: "G42 (UAE)", category: "sovereign",
    lat: 24.4539, lng: 54.3773, location: "Abu Dhabi, UAE",
    powerMW: 500, powerGW: 0.5, status: "construction", onlineDate: "2026-09",
    description: "UAE's flagship sovereign AI infrastructure. Partnership with Microsoft. Powers Falcon LLMs and regional AI services.",
    chips: "NVIDIA Blackwell", partner: "Microsoft, NVIDIA" },

  // Japan
  { id: "japan-sakura", name: "SAKURA Internet AI DC", company: "SAKURA Internet (Japan)", category: "sovereign",
    lat: 34.6937, lng: 135.5023, location: "Osaka, Japan",
    powerMW: 200, powerGW: 0.2, status: "construction", onlineDate: "2026-06",
    description: "Japan's sovereign AI cloud initiative. NVIDIA DGX SuperPOD deployment. Part of Japan's national AI infrastructure strategy.",
    chips: "NVIDIA DGX" },

  // France
  { id: "france-scaleway", name: "Scaleway AI Datacenter", company: "Scaleway (France)", category: "sovereign",
    lat: 48.8566, lng: 2.3522, location: "Paris, France",
    powerMW: 100, powerGW: 0.1, status: "operational", onlineDate: "2025-03",
    description: "European sovereign cloud. Hosts Mistral AI workloads. Part of France's €2.5B national AI strategy.",
    chips: "NVIDIA H100/Blackwell" },

  // China
  { id: "china-mobile-harbin", name: "China Mobile Harbin DC", company: "China Mobile (China)", category: "sovereign",
    lat: 45.7, lng: 126.65, location: "Harbin, Heilongjiang, China",
    powerMW: 200, powerGW: 0.2, status: "operational", onlineDate: "2022-01",
    description: "One of the world's largest DCs by area (663,000 sqm). 200 MW. Part of China's national AI compute infrastructure.",
    chips: "Mixed" },

  // ═══════════════════════════════════════
  // STARGATE PROJECT
  // ═══════════════════════════════════════

  { id: "stargate-lordstown", name: "Stargate Lordstown", company: "Stargate (SoftBank/OpenAI)", category: "stargate",
    lat: 41.1667, lng: -80.8573, location: "Lordstown, Ohio, USA",
    powerMW: 750, powerGW: 0.75, status: "construction", onlineDate: "2026-06",
    description: "SoftBank-OpenAI advanced data center design. Broke ground 2025. On track to be operational 2026. Part of 1.5 GW SoftBank-OpenAI sites.",
    chips: "NVIDIA GB200", partner: "SoftBank, OpenAI" },

  { id: "stargate-milam", name: "Stargate Milam County", company: "Stargate (SB Energy)", category: "stargate",
    lat: 30.77, lng: -96.87, location: "Milam County, Texas, USA",
    powerMW: 750, powerGW: 0.75, status: "construction", onlineDate: "2026-09",
    description: "Fast-build data center by SB Energy (SoftBank). Powered infrastructure for rapid deployment. Part of Stargate initiative.",
    chips: "NVIDIA GB200", partner: "SB Energy, OpenAI" },
];

// Timeline events with annotations
const TIMELINE_EVENTS = [
  { date: "2025-01-21", title: "Stargate Project Announced", category: "stargate",
    description: "OpenAI, SoftBank, Oracle, and MGX announce $500B Stargate AI infrastructure project at the White House with President Trump. Arm, Microsoft, and NVIDIA as technology partners.",
    impact: "high", companies: ["OpenAI", "SoftBank", "Oracle", "MGX", "NVIDIA", "Arm", "Microsoft"] },

  { date: "2025-06-01", title: "Stargate Abilene Goes Live", category: "stargate",
    description: "First NVIDIA GB200 racks delivered at flagship Stargate campus in Abilene, Texas on Oracle Cloud Infrastructure.",
    impact: "high", companies: ["Oracle", "OpenAI", "NVIDIA"] },

  { date: "2025-07-01", title: "Oracle-OpenAI 4.5 GW Agreement", category: "stargate",
    description: "Oracle and OpenAI enter agreement to develop up to 4.5 GW of additional Stargate capacity. Partnership exceeds $300B over five years.",
    impact: "high", companies: ["Oracle", "OpenAI"] },

  { date: "2025-07-31", title: "Stargate Norway Announced", category: "stargate",
    description: "Nscale, Aker ASA, and OpenAI launch Stargate Norway in Narvik. OpenAI's first data centre in Europe. 230 MW initial, 290 MW expansion. 100,000 NVIDIA GPUs by end 2026.",
    impact: "high", companies: ["Nscale", "Aker ASA", "OpenAI", "NVIDIA"] },

  { date: "2025-08-21", title: "Lambda AI Factory Chicago", category: "neocloud",
    description: "Lambda and EdgeConneX announce 30+ MW AI factory infrastructure in Chicago and Atlanta. Hybrid cooling supporting 600+ kW/rack densities.",
    impact: "medium", companies: ["Lambda Labs", "EdgeConneX"] },

  { date: "2025-09-17", title: "Nscale-Aker $6.2B Microsoft Deal", category: "neocloud",
    description: "Nscale and Aker sign binding $6.2B five-year agreement with Microsoft for AI compute capacity at Narvik, Norway. One of the largest GPU deployments globally.",
    impact: "high", companies: ["Nscale", "Aker ASA", "Microsoft"] },

  { date: "2025-09-18", title: "Microsoft Fairwater 1 Opens", category: "hyperscaler",
    description: "Microsoft opens Fairwater in Mount Pleasant, Wisconsin — billed as the world's most powerful AI datacenter. $7.3B investment. Fiber cable to circle Earth 4 times.",
    impact: "high", companies: ["Microsoft Azure"] },

  { date: "2025-09-23", title: "Stargate Expands to 7 GW", category: "stargate",
    description: "OpenAI, Oracle, and SoftBank unveil 5 new Stargate sites (Texas, New Mexico, Ohio, Midwest). Nearly 7 GW planned capacity, $400B+ investment. Ahead of schedule.",
    impact: "high", companies: ["OpenAI", "Oracle", "SoftBank"] },

  { date: "2025-10-01", title: "Stargate Partners Confirmed", category: "stargate",
    description: "Reuters confirms key Stargate stakeholders: OpenAI, SoftBank, Oracle, Arm Holdings, MGX, Crusoe, Nscale Global Holdings, and Aker ASA.",
    impact: "medium", companies: ["OpenAI", "SoftBank", "Oracle", "Arm Holdings", "Crusoe", "Nscale", "Aker ASA"] },

  { date: "2025-10-29", title: "AWS Project Rainier Opens", category: "hyperscaler",
    description: "Amazon opens $11B AI data center in Indiana dedicated to Anthropic. 1,200 acres, 7 buildings operational. Will scale to 30 buildings and 2.25 GW.",
    impact: "high", companies: ["Amazon Web Services", "Anthropic"] },

  { date: "2025-11-16", title: "Microsoft Fairwater 2 Atlanta", category: "hyperscaler",
    description: "Microsoft Fairwater 2 opens in Atlanta, Georgia. Connected to Wisconsin via AI Wide Area Network. Combined network exceeds 2 GW. World's most powerful AI facility.",
    impact: "high", companies: ["Microsoft Azure"] },

  { date: "2025-12-11", title: "Big Tech Power Strategy Shift", category: "hyperscaler",
    description: "Reuters reports Big Tech adopts 'all of the above' power strategy. US data center power supply reaches 61.8 GW, projected 134.4 GW by 2030. Gas + nuclear + renewables.",
    impact: "medium", companies: ["Meta", "Google", "Microsoft", "Amazon"] },

  { date: "2025-12-24", title: "AI Infra Stocks Outperform NVIDIA", category: "semiconductor",
    description: "CNBC reports Celestica, Lumentum, and Seagate AI infrastructure stocks beat NVIDIA returns in 2025. Celestica up ~300%. Data center buildout beneficiaries surge.",
    impact: "medium", companies: ["Celestica", "Lumentum"] },

  { date: "2025-12-30", title: "xAI Colossus Hits 2 GW", category: "ai-independent",
    description: "Elon Musk announces xAI purchases third building 'MACROHARDRR', expanding Colossus to 2 GW. 555,000+ NVIDIA GPUs ($18B). World's largest single-site AI installation.",
    impact: "high", companies: ["xAI", "NVIDIA"] },

  { date: "2026-01-12", title: "Nebius Plans 1.1 GW Kansas City Campus", category: "neocloud",
    description: "Nebius announces plans for 800MW+ data center campus outside Kansas City. Expansion to ~1.1 GW by December 2029. Construction starts 2026.",
    impact: "high", companies: ["Nebius"] },

  { date: "2026-01-22", title: "Applied Digital Delta Forge Groundbreaking", category: "neocloud",
    description: "Applied Digital breaks ground on Delta Forge 1, a 430 MW AI Factory campus. Two 150 MW buildings across 500+ acres. Operations expected mid-2027.",
    impact: "medium", companies: ["Applied Digital"] },

  { date: "2026-02-03", title: "Saudi HUMAIN Targets 6.6 GW", category: "sovereign",
    description: "Saudi Arabia's HUMAIN plans 1.9 GW by 2030, scaling to 6.6 GW by 2034. $77B build cost. NEOM potentially redesignated as data center hub. DataVolt $5B campus.",
    impact: "high", companies: ["HUMAIN", "DataVolt", "NVIDIA", "AMD"] },

  { date: "2026-03-03", title: "Nebius Gigawatt Factory Approved", category: "neocloud",
    description: "Independence, Missouri City Council approves Nebius's 1.2 GW AI factory. Largest US AI factory for Nebius. Connected to municipal utility. No residential rate impact.",
    impact: "high", companies: ["Nebius"] },

  { date: "2026-03-03", title: "CoreWeave Targets 5 GW More", category: "neocloud",
    description: "CoreWeave announces plans to add 5 GW more capacity by 2030. Ended 2025 with 850 MW across 43 DCs. CapEx expected to double in 2026. Over 3 GW contracted.",
    impact: "high", companies: ["CoreWeave"] },

  { date: "2026-03-17", title: "Google 2.7 GW Detroit Campus", category: "hyperscaler",
    description: "Google partners with DTE Energy for 2.7 GW of new resources in suburban Detroit. Includes 1.6 GW solar, 400 MW storage, 300 MW clean resources, 50 MW long-duration storage.",
    impact: "high", companies: ["Google Cloud"] },

  { date: "2026-03-22", title: "Meta-Nebius $27B Infrastructure Deal", category: "hyperscaler",
    description: "Meta commits $27B to Nebius for AI infrastructure. Major deal reshaping data center market dynamics.",
    impact: "high", companies: ["Meta Platforms", "Nebius"] },

  { date: "2026-03-25", title: "23 GW Under Construction Globally", category: "hyperscaler",
    description: "BloombergNEF reports 23+ GW of data center capacity under construction at 831 sites. 75% in the US. Top 14 operators' CapEx nears $750B in 2026.",
    impact: "high", companies: ["Multiple"] },

  { date: "2026-03-27", title: "Meta Orders 10 Power Plants", category: "hyperscaler",
    description: "Meta orders 10 gas power plants (7.5 GW) from Entergy for Hyperion campus in Louisiana. Plus 2.5 GW renewables. 30%+ increase to Louisiana's entire grid capacity.",
    impact: "high", companies: ["Meta Platforms", "Entergy"] },
];

// Company metadata for color coding and display
const COMPANY_CATEGORIES = {
  hyperscaler: { label: "Hyperscalers", color: "#3b82f6", companies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Meta Platforms", "Oracle Cloud", "Alibaba Cloud", "IBM Cloud", "Huawei"] },
  neocloud: { label: "Neoclouds", color: "#8b5cf6", companies: ["Nebius", "CoreWeave", "IREN", "Applied Digital", "Lambda Labs", "Nscale"] },
  "ai-independent": { label: "AI Independent", color: "#f59e0b", companies: ["xAI", "Celestica", "Palantir", "Lumentum", "Crusoe Energy", "DataVolt", "Anthropic", "Scale AI", "Inflection AI"] },
  sovereign: { label: "Sovereign/Gov", color: "#10b981", companies: ["HUMAIN", "UK Government", "AdaniConneX", "Reliance Jio", "DAMAC Digital", "Government of Canada", "G42", "SAKURA Internet", "Scaleway", "China Mobile"] },
  stargate: { label: "Stargate Project", color: "#ef4444", companies: ["Stargate", "OpenAI", "SoftBank", "Oracle"] },
};

// Status colors
const STATUS_CONFIG = {
  operational: { label: "Operational", color: "#22c55e", icon: "●" },
  construction: { label: "Under Construction", color: "#f59e0b", icon: "◐" },
  planned: { label: "Planned", color: "#6366f1", icon: "○" },
};

// Semiconductor companies (for info display, not mapped as DCs)
const SEMICONDUCTOR_COMPANIES = [
  { name: "NVIDIA", ticker: "NVDA", role: "GPU design & AI accelerators. Powers 90%+ of AI training worldwide." },
  { name: "TSMC", ticker: "TSM", role: "Fabricates chips for NVIDIA, AMD, Apple, and most AI hardware." },
  { name: "ASML Holding", ticker: "ASML", role: "Sole supplier of EUV lithography machines. Enables advanced chip manufacturing." },
  { name: "Broadcom", ticker: "AVGO", role: "Custom AI accelerators, networking chips, and data center connectivity." },
  { name: "AMD", ticker: "AMD", role: "MI300X/MI400 AI GPUs. Growing data center AI market share. $10B Saudi deal." },
  { name: "Micron Technology", ticker: "MU", role: "HBM3E memory for AI GPUs. Critical component in every AI accelerator." },
  { name: "Applied Materials", ticker: "AMAT", role: "Semiconductor manufacturing equipment for AI chip fabs." },
  { name: "Arm Holdings", ticker: "ARM", role: "CPU architecture licensing. Stargate technology partner. Powers efficient AI inference." },
  { name: "Marvell", ticker: "MRVL", role: "Custom AI silicon, data center networking, and storage accelerators." },
  { name: "SK Hynix", ticker: "000660.KS", role: "HBM memory leader alongside Micron. Primary supplier to NVIDIA." },
  { name: "Samsung Electronics", ticker: "005930.KS", role: "Memory (HBM, DRAM) and advanced chip foundry services." },
  { name: "Intel Corporation", ticker: "INTC", role: "Gaudi AI accelerators and foundry services. Restructuring for AI era." },
];
