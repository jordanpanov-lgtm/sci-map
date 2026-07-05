// Sci-Map — field & domain registry (per-project config)
// Extracted from index.html — edit this file to reconfigure the atlas.
// Loaded via <script src> BEFORE the main script, so these top-level consts
// are available as globals to the renderer.

const FIELDS = [
  // ── HUMAN BIOLOGY & MEDICINE ─────────────────────────────────────────────────
  { id:"genetics-development",       domain:"human-biology",     label:"Genetics, Development & Embryology",        sub:"Heredity, molecular genetics, development & human embryology",          status:"planned" },
  { id:"anatomy-histology",          domain:"human-biology",     label:"Human Anatomy & Histology",                 sub:"Gross anatomy, tissue structures, musculoskeletal geography & histology", status:"ready", file:"modules/anatomy-histology.json" },
  { id:"physiology-organ-systems",   domain:"human-biology",     label:"Physiology & Organ Systems",                sub:"Systemic physiology, cardiovascular, renal, respiratory & endocrine",    status:"ready", file:"modules/physiology-organ-systems.json" },
  { id:"pathology-immunology",       domain:"human-biology",     label:"Pathology, Immunology & Infectious Disease",sub:"Pathology, immune defence, infectious agents & mechanisms of disease",   status:"planned" },
  { id:"pharmacology-therapeutics",  domain:"human-biology",     label:"Pharmacology & Clinical Therapeutics",      sub:"Drug mechanisms, pharmacokinetics, clinical interventions & healing",    status:"planned" },
  // ── LIFE & ECOLOGICAL SCIENCES ───────────────────────────────────────────────
  { id:"cell-molecular-bio",         domain:"life-sciences",     label:"Cellular & Molecular Biology",              sub:"Cell structure, biochemistry & the molecular basis of life",            status:"planned" },
  { id:"microbiology-virology",      domain:"life-sciences",     label:"Microbiology & Virology",                   sub:"Bacteria, viruses & the microbial world",                               status:"planned" },
  { id:"botany",                     domain:"life-sciences",     label:"Botany & Plant Sciences",                   sub:"Plant structure, physiology, diversity & ecology",                      status:"planned" },
  { id:"zoology-animal-behavior",    domain:"life-sciences",     label:"Zoology & Animal Behavior",                 sub:"Animal diversity, ecology & the evolution of behaviour",                status:"ready",   file:"modules/zoology-animal-behavior.json" },
  // ── PHYSICAL SCIENCES & CHEMISTRY ────────────────────────────────────────────
  { id:"classical-physics",          domain:"physical-sciences", label:"Physics: Classical Mechanics & Thermodynamics", sub:"Force, motion, energy & heat",                                   status:"planned" },
  { id:"em-optics",                  domain:"physical-sciences", label:"Physics: Electromagnetism & Optics",        sub:"Fields, waves, light & the electromagnetic spectrum",                   status:"planned" },
  { id:"quantum-nuclear-relativity", domain:"physical-sciences", label:"Physics: Quantum, Nuclear & Relativity",    sub:"The very small, the very fast & the structure of spacetime",            status:"ready",   file:"modules/quantum-nuclear-relativity.json" },
  { id:"inorganic-analytical-chem",  domain:"physical-sciences", label:"Chemistry: Inorganic & Analytical",         sub:"Elements, compounds & the methods of chemical measurement",             status:"planned" },
  { id:"organic-polymer-chem",       domain:"physical-sciences", label:"Chemistry: Organic & Polymer",              sub:"Carbon chemistry, reactions & macromolecular structures",               status:"planned" },
  // ── EARTH, SPACE & ENVIRONMENTAL ─────────────────────────────────────────────
  { id:"astronomy-cosmology",        domain:"earth-space",       label:"Astronomy, Astrophysics & Cosmology",       sub:"Stars, galaxies & the origin and fate of the universe",                 status:"planned" },
  { id:"geology",                    domain:"earth-space",       label:"Geology & Solid Earth Systems",             sub:"Rocks, tectonics, deep time & Earth's interior",                        status:"planned" },
  { id:"meteorology",                domain:"earth-space",       label:"Meteorology & Atmospheric Sciences",        sub:"Weather, climate & the physics of the atmosphere",                      status:"planned" },
  { id:"oceanography",               domain:"earth-space",       label:"Oceanography & Marine Sciences",            sub:"Ocean circulation, marine ecosystems & the deep sea",                   status:"ready",   file:"modules/oceanography.json" },
  { id:"environmental-science",      domain:"earth-space",       label:"Environmental Science & Sustainability",    sub:"Earth systems under human pressure — ecology & climate change",          status:"planned" },
  // ── FORMAL SCIENCES & COMPUTING ──────────────────────────────────────────────
  { id:"logic-math-foundations",     domain:"formal-computing",  label:"Logic & Foundations of Mathematics",        sub:"Proof, sets, model theory, computability & the philosophical roots of formal reasoning",  status:"planned" },
  { id:"pure-mathematics",           domain:"formal-computing",  label:"Pure Math: Algebra, Analysis, Geometry & Topology", sub:"Algebra, number theory, topology, real & complex analysis",          status:"planned" },
  { id:"applied-math-statistics",    domain:"formal-computing",  label:"Applied Math & Statistics",                 sub:"Probability, statistics, optimisation, operations research & cryptography", status:"planned" },
  { id:"computer-science",           domain:"formal-computing",  label:"Computer & Information Sciences",           sub:"Algorithms, information theory, programming languages, distributed systems & AI", status:"ready", file:"modules/computer-science.json" },
  { id:"systems-and-complexity",     domain:"formal-computing",  label:"Systems Theory & Complexity",               sub:"Cybernetics, chaos, dynamical systems, network theory & emergence",       status:"ready",   file:"modules/systems-and-complexity.json" },
  // ── PSYCHOLOGY & THE MIND ─────────────────────────────────────────────────────
  { id:"neuroscience",               domain:"psychology",        label:"Neuroscience & Behavior",                   sub:"Brain, neuron, circuit & the biological basis of mind",                 status:"ready", file:"modules/neuroscience.json" },
  { id:"general-cognitive-psych",    domain:"psychology",        label:"General & Cognitive Psychology",            sub:"Attention, memory, reasoning & the architecture of mind",               status:"ready", file:"modules/general-cognitive-psych.json" },
  { id:"developmental-psych",        domain:"psychology",        label:"Developmental & Educational Psychology",    sub:"How the mind grows across the lifespan & how we learn",                 status:"planned" },
  { id:"social-psychology",          domain:"psychology",        label:"Social Psychology",                         sub:"How people think about, influence & relate to others",                  status:"ready", file:"modules/social-psychology.json" },
  { id:"clinical-psych",             domain:"psychology",        label:"Clinical & Abnormal Psychology",            sub:"Mental disorder, diagnosis, therapy & the limits of the normal",        status:"planned" },
  // ── SOCIETY & CULTURE ────────────────────────────────────────────────────────
  { id:"biological-anthropology",    domain:"society",           label:"Biological & Evolutionary Anthropology",    sub:"Human origins, fossil record & comparative primatology",                status:"planned" },
  { id:"cultural-anthropology",      domain:"society",           label:"Cultural & Social Anthropology",            sub:"Kinship, ritual, meaning & the diversity of human cultures",            status:"ready",   file:"modules/cultural-anthropology.json" },
  { id:"sociology",                  domain:"society",           label:"Sociology & Social Structures",             sub:"Institutions, stratification & collective life",                        status:"ready",   file:"modules/sociology.json" },
  { id:"demography",                 domain:"society",           label:"Demography & Population Studies",           sub:"Birth, death, migration & the structure of human populations",          status:"planned" },
  // ── CIVICS, SYSTEMS & GOVERNANCE ─────────────────────────────────────────────
  { id:"economics",                  domain:"civics",            label:"Economics (Micro & Macro)",                 sub:"Production, exchange, markets & the allocation of resources",           status:"planned" },
  { id:"political-science",          domain:"civics",            label:"Political Science & Government",            sub:"Power, institutions, democracy & comparative politics",                 status:"planned" },
  { id:"law-jurisprudence",          domain:"civics",            label:"Law & Jurisprudence",                       sub:"Legal theory, rights, obligation & the foundations of justice",         status:"planned" },
  { id:"international-relations",    domain:"civics",            label:"International Relations & Geopolitics",     sub:"States, conflict, cooperation & global order",                          status:"planned" },
  // ── PHILOSOPHY ────────────────────────────────────────────────────────────────
  { id:"epistemology",               domain:"philosophy",        label:"Epistemology & Theory of Knowledge",        sub:"What we can know, how we know it & the limits of certainty",            status:"ready", file:"modules/epistemology.json" },
  { id:"ethics",                     domain:"philosophy",        label:"Ethics & Moral Philosophy",                 sub:"Value, obligation, virtue & how to reason about right action",          status:"planned" },
  { id:"political-economic-philosophy",domain:"philosophy",      label:"Political & Economic Philosophy",           sub:"Justice, liberty, equality & the foundations of social order",          status:"planned" },
  { id:"philosophy-of-science",      domain:"philosophy",        label:"Philosophy of Science & Logic",             sub:"Explanation, causation, reduction & what science actually does",        status:"planned" },
  // ── LANGUAGE & COMMUNICATION ──────────────────────────────────────────────────
  { id:"linguistics",                domain:"language",          label:"Linguistics: Phonetics, Syntax & Semantics",sub:"Structure, meaning & the grammar of human language",                   status:"planned" },
  { id:"cognitive-linguistics",      domain:"language",          label:"Cognitive Linguistics & Psycholinguistics", sub:"How the mind represents and processes language",                        status:"planned" },
  { id:"communication-theory",       domain:"language",          label:"Communication Theory & Media Studies",      sub:"Information, persuasion, media & communication systems",                status:"planned" },
];

const TRUNKS = [
  { id:'science', icon:'🧬', label:'Science',  detail:'Natural & Formal Sciences' },
  { id:'social',  icon:'🏛️', label:'Social',   detail:'Social & Behavioural Sciences' },
];

const DOMAINS = [
  { id:"formal-computing",  trunk:"science", label:"Formal Sciences & Computing",      detail:"logic · mathematics · computation · complexity" },
  { id:"physical-sciences", trunk:"science", label:"Physical Sciences & Chemistry",    detail:"matter, energy & chemical bonds" },
  { id:"earth-space",       trunk:"science", label:"Earth, Space & Environmental",     detail:"planet, cosmos & climate systems" },
  { id:"life-sciences",     trunk:"science", label:"Life & Ecological Sciences",       detail:"cell to ecosystem · molecular biology · zoology" },
  { id:"human-biology",     trunk:"science", label:"Human Biology & Medicine",        detail:"body systems · anatomy · genetics · immunity" },
  { id:"psychology",        trunk:"social",  label:"Psychology & The Mind",            detail:"mind & behaviour · cognition · emotion · social" },
  { id:"language",          trunk:"social",  label:"Language & Communication",         detail:"linguistics · meaning · cognitive language · media" },
  { id:"society",           trunk:"social",  label:"Society & Culture",                detail:"human collectives · sociology · anthropology" },
  { id:"civics",            trunk:"social",  label:"Civics, Systems & Governance",     detail:"institutions · economics · politics · law" },
  { id:"philosophy",        trunk:"social",  label:"Philosophy: Foundations",          detail:"knowledge · ethics · philosophy of science" },
];
