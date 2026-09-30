/* ===== Portfolio content & links ===== */
const portfolioConfig = {
  resume: "assets/documents/Tanu_Pawar_Resume.pdf",
  github: "https://github.com/tanu-pawar",
  repo: "https://github.com/tanu-pawar/Eportfolio",
  linkedin: "https://www.linkedin.com/in/tanu-pawar-502b4737b",
  email: "tanupawar0401@gmail.com",
  lastUpdated: "30 September 2026"
};

const GITHUB_USERNAME = "tanu-pawar";
const SITE = "https://sites.google.com/view/tanupawar-journey/";
const q = "?authuser=0";

const projects = [
  {title:"WebGIS Project", cats:["webgis","gis"], objective:"Developed an interactive WebGIS platform to visualize and share spatial data.",
   data:"Spatial layers prepared for web visualization", method:"Web mapping and layer publishing in ArcGIS Online", contribution:"Prepared and organized spatial information for interactive visualization and explored web-based GIS workflows.", output:"Interactive WebGIS platform", learning:"Web Mapping, Layer Publishing, Interactive GIS", tech:"ArcGIS Online", links:[{label:"Open Dashboard", url:"https://www.arcgis.com/apps/dashboards/df4abf5dc0f048118835a0e8c36ab764"}]},
  {title:"LULC Mapping", cats:["rs","gis"], objective:"Prepared a Land Use/Land Cover map using satellite imagery.",
   data:"Satellite imagery and GIS layers used for land-cover interpretation", method:"Image classification, field interpretation and accuracy assessment", contribution:"Worked on land-cover interpretation, map preparation and evaluation of classification outputs.", output:"Land Use/Land Cover map", learning:"Image Classification, Accuracy Assessment, Map Preparation", tech:"Remote Sensing", links:[{label:"Open GEE Work", url:"https://tanu-p-483509.projects.earthengine.app/view/modis-vegetation-cover--india"}]},
  {title:"Konkan Wetlands StoryMap", cats:["webgis","viz"], objective:"Created an interactive StoryMap highlighting the ecological importance of Konkan wetlands.",
   data:"Wetland locations, maps and supporting multimedia", method:"Map integration and digital storytelling with GIS", contribution:"Organized geospatial information and multimedia into an accessible story-based web experience.", output:"Interactive StoryMap", learning:"Storytelling with GIS, Map Integration, Public Awareness", tech:"ArcGIS StoryMaps", links:[{label:"Open StoryMap", url:"https://storymaps.arcgis.com/stories/447dffdabfaa4b26b1168f2edac04d42"}]},
  {title:"Tree Tagging & GIS Inventory", cats:["field","gis"], objective:"Created a GIS inventory of campus trees using field-collected locations and attributes.",
   data:"Campus tree locations and attributes collected in the field", method:"GPS survey, attribute collection and database organization", contribution:"Mapped and tagged trees and organized the observations for spatial analysis and visualization.", output:"GIS tree inventory and dashboard", learning:"GPS Survey, Attribute Collection, Database Management", tech:"GPS · GIS Database", links:[{label:"Open Dashboard", url:"https://www.arcgis.com/apps/dashboards/edb35ba610a4412087ed6d47de555e04#"}]},
  {title:"Kondethar & Adarwadi 3D Village Study", cats:["field","gis","viz"], objective:"Developed 3D village models from primary field data, with rooftop solar suitability and rainfall vulnerability analysis.",
   data:"GPS observations, building heights, rooftop characteristics, satellite imagery and DEM", method:"Rooftop digitization, DEM terrain analysis, solar radiation modelling and Weighted Vulnerability Index (WVI)", contribution:"Collected/validated field observations and supported their integration with GIS layers for 3D settlement and thematic analysis.", output:"3D settlement models, solar suitability and rainfall vulnerability maps", learning:"Field observations strengthen the reliability and interpretation of spatial models.", tech:"ArcGIS Pro", links:[{label:"Explore project", url:"https://barnalibhowmick0-dot.github.io/kondethar-vulna/"}]}
];
const filters = [["all","All"],["gis","GIS"],["rs","Remote Sensing"],["webgis","WebGIS"],["field","Field / Survey"],["viz","Data Visualization"]];

const interactiveMaps = [
  {title:"Urban Cooling Equity Index — Pune Metropolitan Region", url:"https://tanu-p-483509.projects.earthengine.app/view/urban-cooling-equity-index--pune-metropolitan-region", category:"Google Earth Engine", description:"Interactive geospatial analysis focused on urban cooling equity in the Pune Metropolitan Region."},
  {title:"Assam Flood Map", url:"https://tanu-p-483509.projects.earthengine.app/view/assam-flood-map-2022", category:"Google Earth Engine", description:"Interactive flood-mapping work using satellite-based spatial analysis."},
  {title:"MODIS Vegetation Cover — India", url:"https://tanu-p-483509.projects.earthengine.app/view/modis-vegetation-cover--india", category:"Google Earth Engine", description:"Interactive vegetation-cover visualization using MODIS-derived information."},
  {title:"Interactive ArcGIS Dashboard", url:"https://www.arcgis.com/apps/dashboards/be3801bf46394d3eb7dfea4b5fd2ca65", category:"ArcGIS Online", description:"Interactive dashboard for exploring spatial information and indicators."},
  {title:"Hyderabad Land Cover Explorer", url:"https://tanu-pawar.github.io/hyderabad-land-cover-explorer/", category:"WebGIS", description:"Web-based land-cover exploration interface."},
  {title:"Global Earthquake Geospatial Analysis", url:"https://tanu-pawar.github.io/earthquake-geospatial-analysis/", category:"WebGIS", description:"Interactive geospatial visualization of earthquake information."}
];

const skillGroups = [
  {name:"GIS & Mapping", icon:"M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15", items:["Geographic Information Systems (GIS)","Cartography","Spatial Analysis","Land Use/Land Cover (LULC) Mapping","Spatial Database Management","Geospatial Data Visualization"]},
  {name:"Remote Sensing", icon:"M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18", items:["Remote Sensing","Digital Image Processing","Satellite Image Processing","ERDAS Imagine","Google Earth Engine"]},
  {name:"Programming & Web GIS", icon:"M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14", items:["Geospatial Programming (Python)","Web GIS","ArcGIS Online","Interactive Mapping","Geospatial Data Visualization"]},
  {name:"GIS Software", icon:"M4 5h16v11H4zM8 20h8M12 16v4", items:["ArcGIS Pro","ArcMap","QGIS","ERDAS Imagine","Google Earth Pro","Microsoft Excel"]},
  {name:"Field Techniques", icon:"M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z", items:["GPS/GNSS Survey","Survey123","Epicollect5","Field Maps","Ground Truthing","Field Photography","Data Collection"]},
  {name:"Research Skills", icon:"M4 4h12l4 4v12H4zM8 12h8M8 16h8", items:["Data Collection","Spatial Data Analysis","Technical Report Writing","Research Methodology","Scientific Presentation","Data Interpretation","Decision Support Systems"]},
  {name:"Professional Skills", icon:"M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0", items:["Problem Solving","Analytical Thinking","Communication","Teamwork","Time Management","Adaptability","Attention to Detail","Leadership","Critical Thinking","Continuous Learning"]}
];

const education = [
  {yr:"2025 – 2027", lvl:"Postgraduate · current", now:true, t:"Master of Science (Geoinformatics)", i:"Bharati Vidyapeeth Institute of Environment Education and Research, Pune", h:"Current postgraduate study covering GIS, Remote Sensing, Cartography, Spatial Analysis, GPS, Web GIS, Python, Image Processing, Environmental Applications and Geospatial Decision Support."},
  {yr:"2022 – 2025", lvl:"Undergraduate", t:"Bachelor of Arts (Geography)", i:"C. K. T. ACS College, New Panvel (Autonomous) · Mumbai University", h:"CGPA 9.64 / 10.00. Developed a foundation in physical geography, human geography, environmental studies, cartography and spatial thinking."},
  {yr:"Higher Secondary", lvl:"School education", t:"Higher Secondary Education — Arts", i:"Previous education", h:"75%. Built a foundation in humanities and geography before undergraduate study."},
  {yr:"Secondary", lvl:"School education", t:"Secondary School Education", i:"Previous education", h:"82%."}
];

const achievements = [
  {t:"First Rank in B.A. Geography", o:"C. K. T. ACS College / Mumbai University", n:"Achievement"},
  {t:"TYBA CGPA: 9.61 (A+)", o:"C. K. T. ACS College", n:"Achievement"},
  {t:"Aavishkar Research Convention — Zonal Round", o:"Research participation", n:"Achievement"},
  {t:"GIS for Climate Action", o:"Esri MOOC", n:"Certification"},
  {t:"Intro to Pandas", o:"Kaggle", n:"Certification"},
  {t:"Intro to Machine Learning", o:"Kaggle", n:"Certification"},
  {t:"Intermediate Machine Learning", o:"Kaggle", n:"Certification"},
  {t:"Research Methodology", o:"NPTEL / SWAYAM", n:"Certification"},
  {t:"Project Management", o:"IIMB / SWAYAM", n:"Certification"},
  {t:"ISPRS Participation", o:"ISPRS", n:"Participation"},
  {t:"Basics of QGIS", o:"QGIS certificate", n:"Certification"}
];
const beyond = [
  {t:"Bharatanatyam Performer", o:"7 years", n:"Extracurricular"},
  {t:"Dance Instructor & Choreographer", o:"Creative practice", n:"Extracurricular"},
  {t:"Video Editing", o:"Creative and digital skill", n:"Extracurricular"},
  {t:"NSS Volunteer", o:"2 years, including a 7-day camp", n:"Volunteering"},
  {t:"Personal interests", o:"GIS Mapping · Cartography · Geovisualization · Remote Sensing · Spatial Data Visualization", n:"Interests"}
];

// Five map points are intentionally kept separate even though Kondethar + Adarwadi are shown as one fieldwork section.
const fieldSites = [
  {id:"pashan", name:"Pashan Lake", short:"Biodiversity study", date:"12 August 2025", lat:18.5362, lng:73.7887,
   loc:"Pashan Lake, Pune, Maharashtra", purpose:"Observe wetland ecosystems and understand urban biodiversity.",
   did:"Collected data on water-quality parameters (pH and turbidity), vegetation cover and avifaunal species. GPS Essentials was used to mark sampling points, and photographs documented vegetation and litter distribution.",
   gis:"Linked physical field observations with ecological observations and considered how GIS can represent field findings spatially.",
   obs:"Water-quality parameters, vegetation cover, avifaunal observations, GPS-marked sampling points and photographs.", skills:["GPS-based location marking","Quadrat sampling","Bird identification","Photo documentation"], learn:"Urban wetlands can act as biodiversity hotspots despite anthropogenic pressures."},
  {id:"supe", name:"Supe Village · Mayureshwar Sanctuary", short:"Soil & land-use survey", date:"6 September 2025", lat:18.4787, lng:74.4516,
   loc:"Supe Village, Maharashtra", purpose:"Study rural land use and soil properties in the Supe landscape.",
   did:"Collected soil samples from agricultural plots, observed land-use patterns through visual interpretation and interacted with local farmers for ground-truthing.",
   gis:"Used base maps and field observations to support land-use/land-cover mapping and field validation.",
   obs:"Soil samples, texture tests, GPS coordinates and observed land-use patterns.", skills:["Soil sampling","GPS marking","LULC mapping","Ground-truthing"], learn:"Land and soil characteristics influence crop patterns, and field validation is essential for GIS-based mapping.", photo:"Mayureshwar.jpeg", photoAlt:"Field group at Mayureshwar Sanctuary, Supe"},
  {id:"mulshi", name:"Mulshi", short:"Watershed & topography", date:"20 September 2025", lat:18.5229, lng:73.5140,
   loc:"Mulshi, Maharashtra", purpose:"Study topographical features and watershed characteristics of a hilly ecosystem.",
   did:"Mapped drainage patterns, observed land-use changes and used contour maps to understand slope gradients.",
   gis:"Applied watershed delineation concepts using DEM data and identified slope and drainage patterns.",
   obs:"Landform observations, drainage pattern, slope and field photographs.", skills:["GPS & compass orientation","DEM watershed delineation","Terrain analysis","Landform observation"], learn:"On-site terrain analysis connected classroom GIS theory to real landscapes.", photo:"Mulshi.jpeg", photoAlt:"Field exposure at Mulshi"},
  {id:"kondethar", name:"Kondethar", short:"Geospatial survey", date:"2 & 3 February 2026", lat:18.2353, lng:73.2329,
   loc:"Kondethar Village, Raigad District, Maharashtra · approx. 120–180 m elevation", purpose:"Understand rural settlement characteristics and collect primary data for a 3D village model.",
   did:"Recorded GPS coordinates, building heights, rooftop types and structural conditions. The observations were later integrated with satellite imagery and DEM data in ArcGIS Pro.",
   gis:"Rooftop digitization, DEM terrain analysis, solar-radiation modelling and Weighted Vulnerability Index (WVI) analysis.",
   obs:"Mud, brick, tin, clay-tile and concrete houses; signs of weathering; scattered settlements; limited electricity access in several households.", skills:["GPS survey","Building-height measurement","Ground truthing","ArcGIS Pro"], learn:"Accurate field data helps validate spatial datasets and improves the reliability of geospatial models.", photo:"Kondethar.jpeg", photoAlt:"Field survey group at Kondethar"},
  {id:"adarwadi", name:"Adarwadi", short:"Geospatial survey", date:"2 & 3 February 2026", lat:18.2600, lng:73.2400,
   loc:"Adarwadi Village, Pune District, Maharashtra · approx. 620–680 m elevation", purpose:"Understand rural settlement characteristics and collect primary data for a 3D village model.",
   did:"Documented building coordinates, heights, rooftop materials and environmental conditions as part of the village geospatial survey.",
   gis:"Supported 3D settlement modelling, rooftop solar-suitability analysis and rainfall-vulnerability mapping in ArcGIS Pro.",
   obs:"Comparatively clustered settlements; terrain and building materials influenced rainfall vulnerability and solar potential.", skills:["GPS survey","Field photography","Rooftop digitization","Solar-radiation modelling"], learn:"The survey strengthened understanding of rural planning, renewable-energy assessment and disaster-risk analysis.", photo:"Aadarwadi.jpeg", photoAlt:"Field survey at Adarwadi village"}
];

const fieldGroups = [
  {id:"pashan", title:"Pashan Lake", subtitle:"Biodiversity Study · 12 August 2025", siteIds:["pashan"], photo:null,
   summary:"Wetland fieldwork focused on urban biodiversity, water quality, vegetation and avifauna.", bullets:["Recorded pH and turbidity observations","Marked sampling points with GPS Essentials","Used quadrat sampling for vegetation study","Identified bird species and documented litter/vegetation"]},
  {id:"supe", title:"Supe Village · Mayureshwar Sanctuary", subtitle:"Soil & Land Use Survey · 6 September 2025", siteIds:["supe"], photos:["Mayureshwar.jpeg"],
   summary:"Rural field exposure connecting soil characteristics, land-use patterns and GIS ground-truthing.", bullets:["Collected soil samples from agricultural plots","Performed soil texture testing","Marked GPS coordinates","Observed LULC patterns and interacted with farmers for ground-truthing"]},
  {id:"mulshi", title:"Mulshi", subtitle:"Watershed & Topography Study · 20 September 2025", siteIds:["mulshi"], photos:["Mulshi.jpeg"],
   summary:"Hilly-landscape fieldwork linking terrain observation with watershed and GIS analysis.", bullets:["Observed drainage patterns and land-use change","Used GPS and compass for site orientation","Used contour information to understand slope gradients","Applied DEM-based watershed and terrain-analysis concepts"]},
  {id:"villages", title:"Kondethar & Adarwadi Village Geospatial Survey", subtitle:"2–3 February 2026 · Two mapped field locations", siteIds:["kondethar","adarwadi"], photos:["Kondethar.jpeg","Aadarwadi.jpeg"],
   summary:"Primary geospatial survey of rural settlements. The five-point globe keeps both villages as separate locations while this section presents the survey as one field exposure.", bullets:["Recorded building coordinates and heights","Identified rooftop materials and structural conditions","Performed ground-truth verification and field photography","Integrated observations with satellite imagery and DEM in ArcGIS Pro","Supported 3D settlement, solar-suitability and rainfall-vulnerability analysis"]}
];
