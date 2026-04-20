// AI Data Center Map - Comprehensive Data
// Last updated: April 2026 (Added: Meta El Paso, Crusoe Abilene 900MW, Nscale WV Monarch, Penzance WV, Google Wilbarger TX, Google Putnam WV, Deutsche Telekom Munich, Mistral AI Sweden)

const DATA_CENTERS = [
  // ═══════════════════════════════════════
  // HYPERSCALERS
  // ═══════════════════════════════════════
  
  // AWS
  { id: "aws-indiana", name: "AWS Project Rainier", company: "Amazon Web Services", category: "hyperscaler",
    lat: 41.7003, lng: -86.1981, location: "New Carlisle, Indiana, USA",
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
    lat: 32.02, lng: -91.88, location: "Richland Parish, Louisiana, USA",
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
    lat: 39.0836, lng: -94.3543, location: "Independence, Missouri, USA",
    powerMW: 1200, powerGW: 1.2, status: "construction", onlineDate: "2028-01",
    description: "Nebius's largest US AI factory. City Council approved Mar 2026. Up to 1.2 GW capacity across 400 acres, 10+ buildings. $6.6B investment. New 250 MW power plant expanding to 1,100 MW by 2029. Construction starts summer 2026, completion expected 2028.",
    chips: "NVIDIA GB200/GB300" },

  { id: "nebius-kc", name: "Nebius Kansas City", company: "Nebius", category: "neocloud",
    lat: 39.0997, lng: -94.5786, location: "Kansas City, Missouri, USA",
    powerMW: 40, powerGW: 0.04, status: "operational", onlineDate: "2025-01",
    description: "US gateway facility. 5 MW live (Q1 2025), expanding to 40 MW. Anchor tenant at Patmos AI Campus. Supports enterprise inference workloads.",
    chips: "NVIDIA Blackwell" },

  { id: "nebius-vineland", name: "Nebius New Jersey (Vineland)", company: "Nebius", category: "neocloud",
    lat: 39.4863, lng: -75.026, location: "Vineland, New Jersey, USA",
    powerMW: 300, powerGW: 0.3, status: "operational", onlineDate: "2025-06",
    description: "First major US AI data center. ~2.6M sqft. Built by DataOne with Nebius-designed infrastructure. Behind-the-meter islanded microgrid. 300-400 MW capacity. $17B Microsoft contract. 3+ data rooms operational. Liquid-cooled, 100+ kW/rack.",
    chips: "NVIDIA Blackwell", partner: "DataOne, Microsoft" },

  { id: "nebius-birmingham", name: "Nebius Birmingham BHM01", company: "Nebius", category: "neocloud",
    lat: 33.5207, lng: -86.8025, location: "Birmingham, Alabama, USA",
    powerMW: 300, powerGW: 0.3, status: "planned", onlineDate: "2027-01",
    description: "Southeast US anchor site. Phased development toward ~300 MW total campus capacity on 80-acre site in Oxmoor area. Brownfield-to-AI-factory conversion. Permitting underway.",
    chips: "NVIDIA Blackwell" },

  { id: "nebius-minnesota", name: "Nebius Minnesota", company: "Nebius", category: "neocloud",
    lat: 44.9778, lng: -93.265, location: "Minneapolis, Minnesota, USA",
    powerMW: 100, powerGW: 0.1, status: "planned", onlineDate: "2027-01",
    description: "Planned US expansion site in Minneapolis area. Part of Nebius's goal to reach 16 global data center locations by end of 2026.",
    chips: "NVIDIA GPU" },

  { id: "nebius-oklahoma", name: "Nebius Oklahoma", company: "Nebius", category: "neocloud",
    lat: 35.4676, lng: -97.5164, location: "Oklahoma, USA",
    powerMW: 100, powerGW: 0.1, status: "planned", onlineDate: "2027-01",
    description: "Planned US expansion site. Part of Nebius's strategy to establish 16 global data center locations by end of 2026.",
    chips: "NVIDIA GPU" },

  { id: "nebius-mantsala", name: "Nebius Mäntsälä", company: "Nebius", category: "neocloud",
    lat: 60.6358, lng: 25.5181, location: "Mäntsälä, Finland",
    powerMW: 75, powerGW: 0.075, status: "operational", onlineDate: "2014-01",
    description: "Nebius's flagship European data center since 2014. Tripled to 75 MW capacity. Hosts ISEG supercomputer (16th on Top500). Exports heat to local district heating. Up to 60,000 GPUs. Part of Meta contract. 100% renewable energy.",
    chips: "NVIDIA H100/H200/Blackwell" },

  { id: "nebius-lappeenranta", name: "Nebius Lappeenranta", company: "Nebius", category: "neocloud",
    lat: 61.0587, lng: 28.1887, location: "Lappeenranta, Finland",
    powerMW: 310, powerGW: 0.31, status: "construction", onlineDate: "2027-01",
    description: "Nebius's largest facility outside the US. 310 MW AI data center campus. $10B+ estimated value. Built by Polarnode. Covers ~10% of Nebius's contracted capacity. One of Europe's largest AI-dedicated facilities. Phased delivery from 2027.",
    chips: "NVIDIA GPU" },

  { id: "nebius-bethune", name: "Nebius Béthune (Lille)", company: "Nebius", category: "neocloud",
    lat: 50.5299, lng: 2.6408, location: "Béthune, Pas-de-Calais, France",
    powerMW: 240, powerGW: 0.24, status: "construction", onlineDate: "2026-12",
    description: "One of Europe's largest AI factories. 240 MW on former Bridgestone tyre plant site. 26,000 sqm. Phase 1 late summer 2026, ~120 MW by end 2026, full 240 MW by end 2027. 132-142 kW/rack, Blackwell NVL72 optimized. Colocation with Azur Datacenter.",
    chips: "NVIDIA Blackwell" },

  { id: "nebius-paris", name: "Nebius Paris (Equinix PA10)", company: "Nebius", category: "neocloud",
    lat: 48.9362, lng: 2.3574, location: "Saint-Denis, Paris, France",
    powerMW: 10, powerGW: 0.01, status: "operational", onlineDate: "2024-11",
    description: "Colocation at Equinix PA10 campus in Saint-Denis. First European site with NVIDIA H200 Tensor Core GPUs. First facility equipped solely with Nebius-designed servers.",
    chips: "NVIDIA H200" },

  { id: "nebius-longcross", name: "Nebius UK (Longcross)", company: "Nebius", category: "neocloud",
    lat: 51.3838, lng: -0.5786, location: "Longcross Park, Surrey, UK",
    powerMW: 16, powerGW: 0.016, status: "operational", onlineDate: "2025-11",
    description: "Nebius's first UK data center at Ark Data Centres' Longcross Park. 3 data halls, 126 racks, 16 MW. 11 PB storage. NVIDIA Blackwell Ultra GPUs. Advanced liquid cooling, low-latency InfiniBand Q-X800 networking.",
    chips: "NVIDIA Blackwell Ultra", partner: "Ark Data Centres" },

  { id: "nebius-keflavik", name: "Nebius Keflavik (Iceland)", company: "Nebius", category: "neocloud",
    lat: 63.9993, lng: -22.5558, location: "Keflavik, Iceland",
    powerMW: 10, powerGW: 0.01, status: "operational", onlineDate: "2025-06",
    description: "Colocation with Verne in Keflavik. 10 MW compute cluster. 100% renewable hydroelectric and geothermal energy. Natural cooling advantages in subarctic climate.",
    chips: "NVIDIA GPU", partner: "Verne" },

  { id: "nebius-modiin", name: "Nebius Modi'in (Israel)", company: "Nebius", category: "neocloud",
    lat: 31.8928, lng: 34.8713, location: "Modi'in, Israel",
    powerMW: 8, powerGW: 0.008, status: "operational", onlineDate: "2025-09",
    description: "8 MW colocation at Mega Or/Mega DC facility. Deployed 4,000 NVIDIA GPUs. Hosts part of Israel's national supercomputer via Israel Innovation Authority. Expanding with 80 MW across Masmiyya (22 MW) and Beit Shemesh (58 MW).",
    chips: "NVIDIA B200", partner: "Mega Or/Mega DC" },

  { id: "nebius-israel-expansion", name: "Nebius Israel Expansion", company: "Nebius", category: "neocloud",
    lat: 31.7167, lng: 34.9875, location: "Masmiyya & Beit Shemesh, Israel",
    powerMW: 80, powerGW: 0.08, status: "construction", onlineDate: "2026-09",
    description: "Major 80 MW expansion across two Mega Or sites: 22 MW in Masmiyya, 58 MW in Beit Shemesh. $880M investment. 5-year lease. Expandable to 64 MW (Masmiyya) and 222 MW (Beit Shemesh). Delivery Q3 2026 through Q1 2027.",
    chips: "NVIDIA GPU", partner: "Mega Or/Mega DC" },

  // CoreWeave
  { id: "coreweave-us", name: "CoreWeave US Network", company: "CoreWeave", category: "neocloud",
    lat: 40.7128, lng: -74.006, location: "Multiple US locations",
    powerMW: 850, powerGW: 0.85, status: "operational", onlineDate: "2025-12",
    description: "43 data centers with 850 MW active power (end 2025). Added 250 MW in Q4 2025 alone. Targeting 5 GW additional by 2030. Over 3 GW contracted.",
    chips: "NVIDIA H100/GB200" },

  { id: "coreweave-hammond", name: "CoreWeave Hammond", company: "CoreWeave", category: "neocloud",
    lat: 41.6142, lng: -87.4973, location: "Hammond, Indiana, USA",
    powerMW: 180, powerGW: 0.18, status: "planned", onlineDate: "2027-12",
    description: "180 MW AI data center at the Digital Crossroads campus (301 Digital Crossroads Dr). 450,000 sq ft on 25-acre site at former State Line Generating Plant. Developed with Decennial Group under a 20-year lease. Announced Jun 2025, operational target 2027 pending NIPSCO power agreement.",
    chips: "NVIDIA GPU" },

  { id: "coreweave-kenilworth", name: "CoreWeave Kenilworth", company: "CoreWeave", category: "neocloud",
    lat: 40.6798, lng: -74.2946, location: "Kenilworth, New Jersey, USA",
    powerMW: 100, powerGW: 0.1, status: "planned", onlineDate: "2026-12",
    description: "AI data center at Northeast Science & Technology Center (2000 Galloping Hill Rd). 280,000 sq ft with over $1.2 billion committed. PSE&G upgrading local electrical infrastructure to support facility. Planned status per datacentermap.",
    chips: "NVIDIA GPU" },

  { id: "coreweave-lancaster", name: "CoreWeave Lancaster", company: "CoreWeave", category: "neocloud",
    lat: 40.0379, lng: -76.3055, location: "Lancaster, Pennsylvania, USA",
    powerMW: 400, powerGW: 0.4, status: "planned", onlineDate: "2027-12",
    description: "$6 billion AI data center campus at 216 Greenfield Rd. Former printing press facilities totaling 2M+ sq ft across 144 acres being converted by Machine Investment Group. Co-funded by Blue Owl Capital and Chirisa Technology Parks. Announced Jul 2025 as one of CoreWeave's largest campus developments.",
    chips: "NVIDIA GPU" },

  { id: "coreweave-plano", name: "CoreWeave Plano", company: "CoreWeave", category: "neocloud",
    lat: 33.0635, lng: -96.7495, location: "Plano, Texas, USA",
    powerMW: 30, powerGW: 0.03, status: "operational", onlineDate: "2023-12",
    description: "30 MW AI data center at Lincoln Rackhouse's 1000 Coit Rd building. 454,421 sq ft on 23.8-acre campus. $1.6 billion investment with 6-year Master Services Agreement. Four 14,000 sq ft data halls plus 50,000 sq ft powered shell space. Operational since end of 2023.",
    chips: "NVIDIA GPU" },

  // IREN
  { id: "iren-childress", name: "IREN Horizon 1 (Childress)", company: "IREN", category: "neocloud",
    lat: 34.4265, lng: -100.204, location: "Childress, Texas, USA",
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

  { id: "iren-prince-george", name: "IREN Prince George", company: "IREN", category: "neocloud",
    lat: 53.917, lng: -122.7497, location: "Prince George, British Columbia, Canada",
    powerMW: 50, powerGW: 0.05, status: "operational", onlineDate: "2023-01",
    description: "50 MW operational data center on a 12-acre freehold site (1144 Crocker Road). Powered entirely by BC Hydro renewable hydroelectricity. Supports 20+ full-time local jobs. Largest city in northern BC.",
    chips: "NVIDIA GPU" },

  { id: "iren-mackenzie", name: "IREN Mackenzie", company: "IREN", category: "neocloud",
    lat: 55.2978, lng: -123.0915, location: "Mackenzie, British Columbia, Canada",
    powerMW: 80, powerGW: 0.08, status: "operational", onlineDate: "2022-01",
    description: "80 MW operational data center on an 11-acre freehold site (4900 Coquawaldy Rd). Powered by BC Hydro renewable hydroelectricity. Supports ~15 full-time jobs in a community historically impacted by mill closures.",
    chips: "NVIDIA GPU" },

  { id: "iren-canal-flats", name: "IREN Canal Flats", company: "IREN", category: "neocloud",
    lat: 50.15, lng: -115.77, location: "Canal Flats, British Columbia, Canada",
    powerMW: 30, powerGW: 0.03, status: "operational", onlineDate: "2021-01",
    description: "30 MW operational data center on a 10-acre freehold site in the Canadian Rockies (9018 Grainger Rd). Connected to BC Hydro via IREN-owned 69kV substation. Dual fiber paths. Fabrication workshop supporting other IREN facilities.",
    chips: "NVIDIA GPU" },

  // Applied Digital
  { id: "apld-deltaforge", name: "Applied Digital Delta Forge 1", company: "Applied Digital", category: "neocloud",
    lat: 32.5, lng: -90.0, location: "Southern US",
    powerMW: 430, powerGW: 0.43, status: "construction", onlineDate: "2027-06",
    description: "430 MW AI Factory campus. Broke ground Jan 2026. Two 150 MW facilities across 500+ acres. Named Best Data Center in Americas 2025.",
    chips: "NVIDIA GPU" },

  { id: "apld-polaris-forge1", name: "Applied Digital Polaris Forge 1", company: "Applied Digital", category: "neocloud",
    lat: 46.0006, lng: -98.525, location: "Ellendale, North Dakota, USA",
    powerMW: 180, powerGW: 0.18, status: "operational", onlineDate: "2025-12",
    description: "Ellendale AI/HPC campus listing (Site Code ELN). 180 MW capacity with liquid-cooling design. Datacentermap timeline notes first building reached operational stage in Dec 2025.",
    chips: "NVIDIA GPU", partner: "CoreWeave" },

  { id: "apld-polaris-forge2", name: "Applied Digital Polaris Forge 2", company: "Applied Digital", category: "neocloud",
    lat: 46.983, lng: -96.889, location: "Harwood (Fargo area), North Dakota, USA",
    powerMW: 280, powerGW: 0.28, status: "planned", onlineDate: "2026-12",
    description: "Planned AI-focused campus near Harwood in Cass County. Datacentermap lists up to 280 MW with phased launch and full buildout expected by early 2027.",
    chips: "NVIDIA GPU" },

// Crusoe Energy
  { id: "crusoe-texas", name: "Crusoe AI Data Center", company: "Crusoe Energy", category: "neocloud",
    lat: 32.0, lng: -100.5, location: "West Texas, USA",
    powerMW: 200, powerGW: 0.2, status: "construction", onlineDate: "2026-06",
    description: "AI cloud powered by stranded energy. Stargate partner. Uses flared natural gas and renewable sources for carbon-reduced AI compute.",
    chips: "NVIDIA H100/GB200" },

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

  { id: "lambda-kansascity", name: "Lambda Kansas City", company: "Lambda Labs", category: "neocloud",
    lat: 39.3045, lng: -94.7136, location: "Kansas City, Missouri, USA",
    powerMW: 24, powerGW: 0.024, status: "planned", onlineDate: "2026-03",
    description: "Lambda facility at 11155 N Airworld Dr. Datacentermap notes first phase announced at 24 MW with launch targeted for early 2026.",
    chips: "NVIDIA GPU" },

  // Nscale
  { id: "nscale-glomfjord", name: "Nscale Glomfjord", company: "Nscale", category: "neocloud",
    lat: 66.81, lng: 14.1, location: "Glomfjord, Norway",
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

  { id: "nscale-loughton", name: "Nscale Loughton", company: "Nscale", category: "neocloud",
    lat: 51.647, lng: 0.055, location: "Loughton, Essex, UK",
    powerMW: 50, powerGW: 0.05, status: "planned", onlineDate: "2026-10",
    description: "Nscale's first UK site at Langston Road. Datacentermap describes 50 MW initial AI/HPC capacity with expansion potential to 90 MW and go-live target in Q4 2026.",
    chips: "NVIDIA GB200" },

  // ═══════════════════════════════════════
  // AI INDEPENDENT POWER DATA CENTERS
  // ═══════════════════════════════════════

  // xAI
  { id: "xai-colossus", name: "xAI Colossus", company: "xAI", category: "ai-independent",
    lat: 35.1495, lng: -90.049, location: "Memphis, Tennessee, USA",
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

  // ═══════════════════════════════════════
  // NEW ENTRIES — April 2026
  // ═══════════════════════════════════════

  { id: "meta-elpaso", name: "Meta El Paso AI Campus", company: "Meta Platforms", category: "hyperscaler",
    lat: 31.8776, lng: -106.3744, location: "El Paso, Texas, USA",
    powerMW: 1000, powerGW: 1.0, status: "construction", onlineDate: "2028-01",
    description: "Meta's 29th data center, 3rd in Texas. Broke ground Oct 2025 on 1,000+ acres. Investment scaled from $1.5B to $10B in Mar 2026. Up to 5 phases of ~800,000 sqft. Closed-loop liquid cooling, near-zero operational water use. 300+ permanent jobs at full operation.",
    chips: "NVIDIA Blackwell / Meta MTIA", partner: "El Paso Electric" },

  { id: "crusoe-abilene", name: "Crusoe Abilene AI Campus", company: "Crusoe Energy", category: "neocloud",
    lat: 32.4487, lng: -99.7331, location: "Abilene, Texas, USA",
    powerMW: 900, powerGW: 0.9, status: "construction", onlineDate: "2027-06",
    description: "900 MW AI campus at Lancium Clean Campus. Announced Apr 2026 for Microsoft AI workloads. Expands Stargate Site 1 (200 MW operational on same site). Direct-to-chip liquid cooling, up to 100,000 GPUs on unified fabric. 100% renewable via Lancium Smart Response.",
    chips: "NVIDIA GB200+", partner: "Microsoft, Lancium" },

  { id: "nscale-westvirginia", name: "Nscale Monarch AI Campus", company: "Nscale", category: "neocloud",
    lat: 38.7704, lng: -82.0026, location: "Mason County, West Virginia, USA",
    powerMW: 1350, powerGW: 1.35, status: "planned", onlineDate: "2028-01",
    description: "Nscale's US flagship AI factory on 2,250 acres. Microsoft LOI for 1.35 GW of NVIDIA Vera Rubin NVL72 compute signed at GTC Mar 2026. US-first certified AI microgrid, scalable to 8 GW. Site acquired via AIPCorp/Fidelis New Energy. Carbon sequestration planned.",
    chips: "NVIDIA Vera Rubin NVL72", partner: "Microsoft, NVIDIA, Caterpillar" },

  { id: "penzance-wv", name: "Penzance Bedington Campus", company: "Penzance Management", category: "hyperscaler",
    lat: 39.5512, lng: -77.9947, location: "Falling Waters, Berkeley County, West Virginia, USA",
    powerMW: 600, powerGW: 0.6, status: "planned", onlineDate: "2028-06",
    description: "West Virginia's first certified High Impact Intelligence Center. 548 acres, 1.9M sqft at full build-out. $4B investment. Hyperscaler leasing model. Announced Feb 2026. Adjacent to Northern Virginia Data Center Alley, ~1 hour from Ashburn." },

  { id: "gcp-westvirginia", name: "Google Putnam County", company: "Google Cloud", category: "hyperscaler",
    lat: 38.6112, lng: -81.9793, location: "Buffalo, Putnam County, West Virginia, USA",
    powerMW: 300, powerGW: 0.3, status: "planned", onlineDate: "2028-01",
    description: "Google's first West Virginia campus in Buffalo, Putnam County. Certified High Impact Intelligence Center Mar 2026. 100% renewable electricity. Water replenishment target 120% by 2030. Part of Google's Appalachian corridor expansion.",
    chips: "Google TPU v6" },

  { id: "gcp-wilbarger", name: "Google Wilbarger County", company: "Google Cloud", category: "hyperscaler",
    lat: 33.9137, lng: -99.1804, location: "Wilbarger County, Texas, USA",
    powerMW: 300, powerGW: 0.3, status: "construction", onlineDate: "2027-06",
    description: "Announced Feb 2026, part of Google's $40B Texas investment. Co-located with AES clean generation — 'power-first' design. Air-cooled to eliminate operational water use. Part of 7,800+ MW of net-new Texas grid capacity contracted by Google.",
    chips: "Google TPU v6", partner: "AES Corporation" },

  { id: "telekom-munich", name: "Deutsche Telekom AI DC Munich", company: "Deutsche Telekom", category: "sovereign",
    lat: 48.1351, lng: 11.582, location: "Munich, Germany",
    powerMW: 50, powerGW: 0.05, status: "operational", onlineDate: "2026-03",
    description: "€1B AI data center opened Q1 2026. 1,000+ NVIDIA DGX B200 systems, 10,000 Blackwell GPUs, 500 petaflops. Boosts Germany's national AI compute by ~50%. SAP Business Technology Platform integrated. Co-developed with NVIDIA and SAP.",
    chips: "NVIDIA DGX B200 / Blackwell", partner: "NVIDIA, SAP" },

  { id: "mistral-ecodc-sweden", name: "Mistral AI EcoDataCenter Sweden", company: "Mistral AI", category: "ai-independent",
    lat: 62.3908, lng: 17.3069, location: "Sundsvall, Sweden",
    powerMW: 200, powerGW: 0.2, status: "planned", onlineDate: "2027-06",
    description: "$1.4B AI data center announced Mar 2026. NVIDIA Vera Rubin GPUs for European sovereign LLM training and inference. 100% renewable hydropower. Largest dedicated AI training facility in Europe independent of US hyperscaler infrastructure.",
    chips: "NVIDIA Vera Rubin", partner: "EcoDataCenter" },
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

  { date: "2026-03-22", title: "Meta-Nebius $27B Infrastructure Deal", category: "neocloud",
    description: "Meta commits $27B to Nebius for AI infrastructure over 5 years. Includes $12B of NVIDIA Vera Rubin chip capacity from 2027. Deal value exceeds Nebius's prior market valuation. Cements Nebius as leading neocloud alongside CoreWeave.",
    impact: "high", companies: ["Meta Platforms", "Nebius", "NVIDIA"] },

  { date: "2026-03-31", title: "Nebius 310 MW Finland AI Factory", category: "neocloud",
    description: "Nebius announces 310 MW AI data center in Lappeenranta, Finland — its largest outside the US. $10B+ estimated value. Built by Polarnode. One of Europe's largest AI-dedicated facilities. Covers ~10% of Nebius's 3 GW target.",
    impact: "high", companies: ["Nebius", "Polarnode"] },

  { date: "2026-03-25", title: "23 GW Under Construction Globally", category: "hyperscaler",
    description: "BloombergNEF reports 23+ GW of data center capacity under construction at 831 sites. 75% in the US. Top 14 operators' CapEx nears $750B in 2026.",
    impact: "high", companies: ["Multiple"] },

  { date: "2026-03-27", title: "Meta Orders 10 Power Plants", category: "hyperscaler",
    description: "Meta orders 10 gas power plants (7.5 GW) from Entergy for Hyperion campus in Louisiana. Plus 2.5 GW renewables. 30%+ increase to Louisiana's entire grid capacity.",
    impact: "high", companies: ["Meta Platforms", "Entergy"] },

  { date: "2026-03-26", title: "Meta El Paso Scaled to $10B / 1 GW", category: "hyperscaler",
    description: "Meta confirms El Paso campus grows from $1.5B to $10B investment and scales to 1 GW capacity by 2028. Meta's 29th DC globally. Closed-loop liquid cooling, zero operational water use. Part of Meta's ~30-DC global expansion wave.",
    impact: "high", companies: ["Meta Platforms"] },

  { date: "2026-03-16", title: "Nscale West Virginia 1.35 GW Microsoft Deal", category: "neocloud",
    description: "At NVIDIA GTC 2026, Nscale signs Microsoft LOI for 1.35 GW of NVIDIA Vera Rubin NVL72 compute at Monarch Campus, Mason County, West Virginia. Site scalable to 8 GW. US-first AI microgrid certification. Nscale acquires AIPCorp for site control.",
    impact: "high", companies: ["Nscale", "Microsoft", "NVIDIA"] },

  { date: "2026-03-01", title: "Deutsche Telekom / NVIDIA Munich AI DC Opens", category: "sovereign",
    description: "Deutsche Telekom and NVIDIA open €1B AI data center in Munich — one of Europe's largest at launch. 10,000 Blackwell GPUs, 500 petaflops. Boosts Germany's national AI compute by ~50%. SAP Business Technology Platform integrated.",
    impact: "high", companies: ["Deutsche Telekom", "NVIDIA", "SAP"] },

  { date: "2026-02-26", title: "Penzance $4B West Virginia AI Campus", category: "hyperscaler",
    description: "Penzance Management announces 548-acre, 600 MW Bedington Campus in Berkeley County, WV — state's first certified High Impact Intelligence Center. $4B investment. Hyperscaler leasing model. Close to Northern Virginia Data Center Alley.",
    impact: "medium", companies: ["Penzance Management"] },

  { date: "2026-02-24", title: "Google Wilbarger County TX — Power-First AI DC", category: "hyperscaler",
    description: "Google announces AI data center in Wilbarger County, Texas, co-located with AES clean generation. Air-cooled design eliminates operational water use. Part of Google's $40B Texas investment through 2027, covering 7,800+ MW of new grid capacity.",
    impact: "medium", companies: ["Google Cloud", "AES Corporation"] },

  { date: "2026-03-27", title: "Google West Virginia AI Campus (Putnam County)", category: "hyperscaler",
    description: "Governor Morrisey confirms Google will build a data center in Buffalo, Putnam County, WV — state's second certified High Impact Intelligence Center. 100% renewable. Part of Google's Appalachian corridor expansion alongside Texas and Midwest sites.",
    impact: "medium", companies: ["Google Cloud"] },

  { date: "2026-04-01", title: "Crusoe Abilene 900 MW Microsoft Campus", category: "neocloud",
    description: "Crusoe announces 900 MW AI data center campus at Lancium Clean Campus, Abilene TX for Microsoft workloads. Expands Stargate Site 1 footprint. Direct-to-chip liquid cooling, 100,000 GPUs on unified fabric. 100% renewable via Lancium Smart Response.",
    impact: "high", companies: ["Crusoe Energy", "Microsoft", "Lancium"] },

  { date: "2026-03-01", title: "Mistral AI / EcoDataCenter $1.4B Sweden AI Factory", category: "ai-independent",
    description: "Mistral AI and EcoDataCenter announce $1.4B AI data center in Sundsvall, Sweden, using NVIDIA Vera Rubin GPUs. 100% renewable hydropower. Largest sovereign European AI training facility; targets LLM training independent of US hyperscaler infrastructure.",
    impact: "medium", companies: ["Mistral AI", "EcoDataCenter", "NVIDIA"] },
];

// Company metadata for color coding and display
const COMPANY_CATEGORIES = {
  hyperscaler: { label: "Hyperscalers", color: "#3b82f6", companies: ["Amazon Web Services", "Microsoft Azure", "Google Cloud", "Meta Platforms", "Oracle Cloud", "Alibaba Cloud", "IBM Cloud", "Huawei", "Penzance Management", "Cologix"] },
  neocloud: { label: "Neoclouds", color: "#f59e0b", companies: ["Nebius", "CoreWeave", "IREN", "Applied Digital", "Lambda Labs", "Nscale", "Mega Or/Mega DC", "Crusoe Energy", "Civo", "Vultr"] },
  "ai-independent": { label: "AI Independent", color: "#8b5cf6", companies: ["xAI", "Celestica", "Palantir", "Lumentum", "DataVolt", "Anthropic", "Scale AI", "Inflection AI", "Mistral AI"] },
  sovereign: { label: "Sovereign/Gov", color: "#10b981", companies: ["HUMAIN", "UK Government", "AdaniConneX", "Reliance Jio", "DAMAC Digital", "Government of Canada", "G42", "SAKURA Internet", "Scaleway", "China Mobile", "Deutsche Telekom"] },
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
