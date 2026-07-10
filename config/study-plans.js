// Sci-Map — per-field study plans
// Extracted from index.html — edit this file to reconfigure the atlas.
// Loaded via <script src> BEFORE the main script, so these top-level consts
// are available as globals to the renderer.

const STUDY_PLANS = {
  'cell-molecular-bio': {
    meta: 'Follows the actual flow of molecular biology outward from the gene: how information is stored and copied, how it gets switched on and off, what the proteins it specifies actually are and do, how those proteins assemble into cellular machinery and communication systems, how all of it coordinates cell division, and finally how humans learned to read and rewrite the whole system deliberately.',
    modules: [
      {
        title: '1 — Founders & the Field',
        rationale: 'Molecular biology has an unusually dense founding cast within a few decades: Watson, Crick, and Franklin on DNA structure; Avery and Hershey/Chase on DNA as the genetic material; Nirenberg on the genetic code; McClintock, Sanger, and Kornberg each opening a distinct sub-field. Knowing them first turns every later module into a continuation of a real, ongoing argument rather than a list of isolated facts.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Research Methods',
        rationale: 'Gel electrophoresis, Sanger sequencing, restriction cloning, Western blotting, X-ray crystallography, site-directed mutagenesis, and CRISPR editing are the instruments that generated every finding in the modules that follow — know how the evidence was made before evaluating what it shows.',
        cats: ['method']
      },
      {
        title: '3 — DNA, RNA & the Central Dogma',
        rationale: 'Everything else in this folio depends on the basic claim that genetic information flows DNA to RNA to protein. Start with the structure, the replication mechanism, and the code itself before anything built on top of it makes sense.',
        groups: ['DNA, RNA & the Central Dogma']
      },
      {
        title: '4 — Gene Expression & Regulation',
        rationale: 'A cell doesn\'t express every gene it carries all the time — operons, chromatin structure, X-inactivation, imprinting, and microRNAs are the different layers of control that decide which genes actually get read, and when.',
        groups: ['Gene Expression & Regulation']
      },
      {
        title: '5 — Protein Structure, Folding & Enzymology',
        rationale: 'Genes are only instructions; proteins do the actual work. This module covers what a protein needs to become functional — correct folding, chaperone assistance, enzyme kinetics — the biochemistry underlying every molecular machine covered next.',
        groups: ['Protein Structure, Folding & Enzymology']
      },
      {
        title: '6 — Molecular Machinery',
        rationale: 'Individual proteins assemble into larger working systems: ribosomes translating RNA, ATP synthase powering the cell, signal sequences routing proteins to the right destination, mitochondria and chloroplasts running as semi-autonomous bacterial descendants.',
        groups: ['Molecular Machinery']
      },
      {
        title: '7 — Molecular Signal Transduction',
        rationale: 'Cells don\'t operate in isolation — receptor tyrosine kinases, G-protein coupled receptors, and reversible phosphorylation are how a signal outside the cell gets converted into a coordinated response inside it.',
        groups: ['Molecular Signal Transduction']
      },
      {
        title: '8 — Cell Cycle & Molecular Control',
        rationale: 'Bringing the previous modules together: the cell cycle is where gene regulation, protein machinery, and signalling all have to cooperate under strict surveillance, and where the Hayflick limit, telomerase, and stem cell potency determine how many times — and how faithfully — a cell can do it again.',
        groups: ['Cell Cycle & Molecular Control']
      },
      {
        title: '9 — Genetic Engineering & Molecular Techniques',
        rationale: 'Once the natural system is understood, this module covers how it has been deliberately rewritten: recombinant DNA, PCR, and CRISPR turned molecular biology from a purely observational science into one that edits its own subject matter.',
        groups: ['Genetic Engineering & Molecular Techniques']
      },
      {
        title: '10 — Debates & Open Questions',
        rationale: 'With the full mechanistic picture in place, the genuinely unresolved and contested questions — Franklin\'s credit, junk DNA, CRISPR germline ethics, gene patenting — can be evaluated against real evidence rather than encountered cold.',
        cats: ['debate']
      },
      {
        title: '11 — Applications',
        rationale: 'Where the science leaves the lab: CRISPR therapeutics, recombinant insulin, DNA fingerprinting, precision oncology, GMO crops, gene therapy, and cloning are the concrete payoff of everything in the preceding modules.',
        cats: ['application']
      }
    ]
  },
  'pathology-immunology': {
    meta: 'Moves inside-out: how a single cell is injured, then how the immune system is built from the ground up (innate before adaptive), then the three ways that system goes wrong — attacking the body itself, losing to an external pathogen, or losing to a malignant cell from within — then how immunity is deliberately engineered as therapy, closing with open debates and real-world application.',
    modules: [
      {
        title: '1 — Founders & the Field',
        rationale: 'Pathology and immunology were built by a small set of 19th- and 20th-century figures whose single discoveries still organise the field: Virchow founded cellular pathology, Koch proved germ theory, Jenner founded vaccination, Metchnikoff and Ehrlich founded cellular and humoral immunity respectively. Knowing them first makes every later module a continuation of a real argument, not an isolated fact.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Research Methods',
        rationale: 'ELISA, flow cytometry, PCR, histopathological staining, hybridoma production, knockout mice, and xenograft models are the instruments that generated every finding in the modules that follow — know how the evidence was made before evaluating what it shows.',
        cats: ['method']
      },
      {
        title: '3 — Cell Injury & Inflammation',
        rationale: 'Disease begins at the cellular level. Necrosis, apoptosis dysregulation, and the inflammatory response are the foundational mechanisms every other module in this folio builds on — immunology is, at bottom, a specialised system for managing cell injury and infection.',
        groups: ['Cell Injury & Inflammation']
      },
      {
        title: '4 — Innate Immunity',
        rationale: 'The body’s fast, non-specific first line of defence — phagocytosis, pattern recognition, complement — evolved long before adaptive immunity and still does most of the day-to-day work of keeping pathogens out.',
        groups: ['Innate Immunity']
      },
      {
        title: '5 — Adaptive Immunity',
        rationale: 'Clonal selection, MHC restriction, and immunological memory explain how the body builds a precise, learned defence against a specific threat — and remembers it for decades. This module is the conceptual hinge for nearly everything that follows: autoimmunity, transplant rejection, and immunotherapy are all adaptive immunity misfiring, blocking, or being deliberately redirected.',
        groups: ['Adaptive Immunity']
      },
      {
        title: '6 — Autoimmunity & Hypersensitivity',
        rationale: 'What happens when the self/non-self discrimination established in Module 5 breaks down — allergy, autoimmune disease, and the genuinely contested question of what in modern life is driving both to rise.',
        groups: ['Autoimmunity & Hypersensitivity']
      },
      {
        title: '7 — Infectious Disease & Host-Pathogen Interaction',
        rationale: 'The external threats adaptive and innate immunity evolved to fight — and the ways pathogens evolve right back, from antigenic drift to antibiotic resistance, in a running arms race that never actually ends.',
        groups: ['Infectious Disease & Host-Pathogen Interaction']
      },
      {
        title: '8 — Neoplasia & Cancer Biology',
        rationale: 'The internal threat: a cell that stops obeying the rules governing growth, death, and cooperation with its neighbours. This is where the Warburg effect belongs — not as an isolated biochemical curiosity, but as one specific capability inside the broader hallmarks-of-cancer framework.',
        groups: ['Neoplasia & Cancer Biology']
      },
      {
        title: '9 — Immunodeficiency & Immunotherapy',
        rationale: 'Having covered how immunity normally works and how it normally fails, this module covers what happens when immunity is deliberately engineered — checkpoint inhibitors, CAR-T cells, transplant immunosuppression — the most active area of the whole field right now.',
        groups: ['Immunodeficiency & Immunotherapy']
      },
      {
        title: '10 — Debates & Open Questions',
        rationale: 'Now that the full mechanistic picture is in place, the genuinely unresolved questions — is the Warburg effect cause or consequence, does screening help or overdiagnose, can cell therapy ever beat solid tumours — can be evaluated against real evidence rather than encountered cold.',
        cats: ['debate']
      },
      {
        title: '11 — Applications',
        rationale: 'Where the science leaves the lab: vaccines, checkpoint inhibitors, CAR-T therapy, antibiotic stewardship, and transplant medicine are the concrete, high-stakes payoff of everything in the preceding ten modules.',
        cats: ['application']
      }
    ]
  },
  'social-psychology': {
    meta: 'Follows the standard arc of introductory social psychology courses: establish the scientific toolkit first, then move from the individual self outward through social perception, attitudes, influence, group dynamics, intergroup relations, and close relationships, finishing with prosocial/antisocial behaviour. Debates close the arc so they can be evaluated against the full empirical base rather than encountered cold.',
    modules: [
      {
        title: '1 — Scientific Toolkit & Hall of Fame',
        rationale: 'Know how the evidence was gathered before you trust it. Research paradigms and measurement scales inoculate against naive acceptance of any single finding. The key figures are front-loaded here as a reference Hall of Fame — each entry links to their defining work, so you can return to them in context as the modules unfold.',
        cats: ['method', 'figure']
      },
      {
        title: '2 — The Social Self',
        rationale: 'Social psychology begins with the individual in context. Self-concept, social comparison, and self-serving bias are the perceptual ground on which every subsequent phenomenon rests. Students who skip this section often misread influence effects as purely situational.',
        groups: ['The Self & Cognition']
      },
      {
        title: '3 — Perceiving Others',
        rationale: 'We construct mental models of people through attribution, impression formation, and stereotyping. The fundamental attribution error — overweighting disposition, underweighting situation — is a prerequisite concept for everything from prejudice to bystander effects. Heuristics and biases sit here too: they explain the specific mechanics of how the cognitive miser actually errs.',
        groups: ['Perceiving Others', 'Judgment & Decision']
      },
      {
        title: '4 — Attitudes & Persuasion',
        rationale: 'Begin with the definition of attitude itself before tackling how attitudes change. Cognitive dissonance, elaboration likelihood, and dual-process models explain when and why people change their minds — foundational for understanding both influence and intervention design.',
        groups: ['Attitudes & Persuasion', 'Attitudes']
      },
      {
        title: '5 — Social Influence',
        rationale: 'The classical heart of the field. Conformity (Asch), obedience (Milgram), compliance principles (Cialdini), and the SPE demonstrate how powerfully the social situation overrides individual judgment. The definitional framework for conformity, compliance and obedience is placed at the top of this module so the classic experiments can be read against it immediately.',
        groups: ['Conformity & Obedience', 'Learning & Influence', 'Roles & Situations', 'Influence']
      },
      {
        title: '6 — Group Dynamics',
        rationale: 'Individuals embedded in groups behave differently than alone. Social facilitation, loafing, groupthink, and deindividuation show how group membership shapes performance and decision-making — essential for applied settings from organisations to juries.',
        groups: ['Groups & Performance']
      },
      {
        title: '7 — Intergroup Relations',
        rationale: 'Stereotyping, prejudice, and discrimination are not character flaws — they emerge predictably from normal cognitive and motivational systems. Social identity theory, realistic conflict, and contact theory provide the main explanatory and remedial frameworks.',
        groups: ['Intergroup Relations']
      },
      {
        title: '8 — Interpersonal Attraction & Close Relationships',
        rationale: 'A chapter missing from the first draft but present in virtually every introductory course. Proximity, the love triangle, and adult attachment bring the field back to its most personally relevant territory — and show that the same situational forces shaping prejudice and influence also shape who we fall in love with.',
        groups: ['Interpersonal Attraction']
      },
      {
        title: '9 — Prosocial & Antisocial Behaviour',
        rationale: 'When do people help, and when do they harm? Bystander diffusion and the Good Samaritan study cover the prosocial half; the Frustration-Aggression hypothesis and Bobo Doll cover the antisocial half. Both require attribution, norm, and role concepts from earlier modules — which is why this section comes late.',
        groups: ['Helping & Harm']
      },
      {
        title: '10 — Debates & Open Questions',
        rationale: 'Audit what you have learned. The replication crisis has substantially revised the field: ego depletion is contested, priming effects have shrunk or disappeared, and classic demonstrations relied on deceptive WEIRD samples. Finishing here, rather than opening with doubt, gives you something to evaluate critically rather than a void to fill.',
        cats: ['debate']
      },
      {
        title: '11 — Applications',
        rationale: 'Consolidate by seeing where the science is deployed: law and eyewitness testimony, health communication, education, and technology design. Applications reveal both the power and the limits of translating laboratory findings to the world outside the experiment.',
        cats: ['application']
      }
    ]
  },
  'general-cognitive-psych': {
    meta: 'Follows the arc of introductory cognitive psychology courses: found the field and its methods first, then work through each core domain in the order most courses use — perception before memory, models before phenomena — before closing with higher-order processes, replication debates, and real-world applications.',
    modules: [
      {
        title: '1 — Founding the Field',
        rationale: 'Start with the five figures who created or catalysed the scientific study of mind: James (the questions), Ebbinghaus (the method), Neisser (the name), Broadbent (the information-processing metaphor), and Chomsky (who demolished behaviourism and made the cognitive revolution inevitable).',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Research Methods',
        rationale: 'Before studying what cognitive psychology found, understand how it found it: the logic of mental chronometry, verbal protocols, eye-tracking, priming, neuroimaging, and the neuropsychological case study — including where each method can mislead.',
        cats: ['method']
      },
      {
        title: '3 — Attention & Perception',
        rationale: 'Attention is the gateway to all higher cognition. Establish selective attention, feature binding, and the limits of awareness (inattentional and change blindness) before approaching memory, which depends on attentive encoding.',
        groups: ['Attention & Perception']
      },
      {
        title: '4 — Memory: Systems & Models',
        rationale: 'The largest module because memory is the largest subdomain. Move from structural models (multi-store, working memory) through encoding (levels of processing, reconstructive memory) to landmark studies that each reveal a different way memory fails or succeeds.',
        groups: ['Memory Systems']
      },
      {
        title: '5 — Encoding, Forgetting & Learning',
        rationale: 'The applied science of memory: how spacing, testing, and generating content produce durable learning — and how cognitive load determines whether instruction builds knowledge or wastes working memory.',
        groups: ['Memory & Learning']
      },
      {
        title: '6 — Thinking, Reasoning & Decision',
        rationale: 'Logical failure (Wason task), the two-speed architecture of thought (dual-process theory), mental simulation (mental models), confirmation bias, and the automaticity that makes skilled thought effortless but irrepressible.',
        groups: ['Thinking & Reasoning']
      },
      {
        title: '7 — Language, Concepts & Representation',
        rationale: 'How the mind organises meaning: semantic networks, prototype categories, and the conceptual structure that makes words, objects and ideas recognisable. The bridge between cognition and communication.',
        groups: ['Language & Concepts']
      },
      {
        title: '8 — Consciousness, Metacognition & Intelligence',
        rationale: 'Higher-order topics best understood after the core domains: when does processing reach awareness (global workspace), how do we monitor our own knowledge (metacognition, tip-of-the-tongue, executive function), and what does it mean to be intelligent?',
        groups: ['Consciousness & Metacognition']
      },
      {
        title: '9 — Debates & Open Questions',
        rationale: 'The replication landscape, the repressed-memory wars, the limits of brain imaging, the hard problem of consciousness, and the g-factor debate — best confronted once the empirical foundation is in place to evaluate them.',
        cats: ['debate']
      },
      {
        title: '10 — Applications',
        rationale: 'Close by seeing the science at work: eyewitness reform, evidence-based study strategies, CBT, ergonomic design, cognitive rehabilitation, and multimedia learning — each a direct translation of a theory or effect from earlier modules.',
        cats: ['application']
      }
    ]
  },
  'neuroscience': {
    meta: 'Builds from the cell up to the system: start with the pioneers and the tools that made neuroscience possible, then progress from neurons and synapses through circuits and architecture, sensory/motor systems, memory and plasticity, sleep and rhythms, and emotion and motivation — before closing with active debates and clinical applications.',
    modules: [
      {
        title: '1 — Pioneers & Theorists',
        rationale: 'Ground the field in the people who built it. Cajal, Sherrington, Hebb, Penfield, Sperry and the others each represent a methodological era; knowing their landmark contributions makes every later entry legible.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Methods & Tools',
        rationale: 'Neuroscience is shaped by its instruments. Lesion studies, electrophysiology, EEG, fMRI, patch-clamp, TMS and optogenetics each reveal a different aspect of brain function — and each carries specific limitations that determine how confidently we can interpret what follows.',
        cats: ['method']
      },
      {
        title: '3 — Neurons & Synapses',
        rationale: 'The action potential and synaptic transmission are the alphabet of the brain. Every higher-level finding rests on this cellular foundation: lateral inhibition, ion channels, chemical neurotransmission, and the Hodgkin–Huxley model.',
        groups: ['Neurons & Synapses']
      },
      {
        title: '4 — Brain Architecture',
        rationale: 'From the cortical homunculus to the default mode network, this module covers how the brain is spatially organised: neural circuits, the connectome, cortical maps, predictive coding, and the distributed-vs-localised debate that has animated the field since Broca.',
        groups: ['Brain Architecture']
      },
      {
        title: '5 — Sensory & Motor Systems',
        rationale: 'The visual system is the best-understood cortical pathway. Simple and complex cells, critical periods, opponent-process colour, and the contested mirror neuron story illustrate both the power of the systems approach and where it can overreach.',
        groups: ['Sensory & Motor Systems']
      },
      {
        title: '6 — Memory & Plasticity',
        rationale: 'H.M., LTP, place cells, synaptic tagging and adult neuroplasticity form a coherent story about how experience modifies the brain at the cellular, circuit and structural level — from Hebb\'s prediction in 1949 to the taxi-driver\'s expanding hippocampus in 2000.',
        groups: ['Memory & Plasticity']
      },
      {
        title: '7 — Sleep & Rhythms',
        rationale: 'Sleep is not downtime but an active consolidation state. Neural oscillations, EEG sleep stages, memory replay and the cumulative cost of sleep debt together show why sleep hygiene is a neuroscience issue, not merely a lifestyle one.',
        groups: ['Sleep & Rhythms']
      },
      {
        title: '8 — Emotion & Motivation',
        rationale: 'The limbic system, stress and the HPA axis, reward prediction error, allostasis and the somatic marker hypothesis reveal how the brain balances survival demands against hedonic goals — and why stress, addiction and depression are, at root, disorders of this system.',
        groups: ['Emotion & Motivation']
      },
      {
        title: '9 — Debates & Open Questions',
        rationale: 'Adult neurogenesis, the free-will question, mirror-neuron hype, the triune brain myth, fMRI cluster failure, and polyvagal theory are best evaluated now, against the full empirical base built in modules 3–8.',
        cats: ['debate']
      },
      {
        title: '10 — Clinical & Educational Applications',
        rationale: 'Close by seeing the neuroscience at work: deep brain stimulation, SSRIs and neuroplasticity, cognitive rehabilitation, neurofeedback, sleep hygiene in schools, and the first optogenetic vision-restoration trial in a human patient.',
        cats: ['application']
      }
    ]
  },
  'anatomy-histology': {
    meta: 'Follows the classic medical-school anatomy sequence: begin with the pioneers and tools that made the discipline, establish the common language (nomenclature, planes), then work organ system by organ system from the smallest scale (histology) outward through musculoskeletal, cardiovascular, nervous system, and embryonic origins. Debates and applications close the arc so they can be evaluated against the full structural knowledge base.',
    modules: [
      {
        title: '1 — Pioneers & Anatomists',
        rationale: 'Vesalius, Harvey, Malpighi, Virchow, Cajal, Gray, and Netter founded the discipline and its visual language. Meet them first — their historical debates and methods frame everything that follows.',
        groups: ['Pioneers & Anatomists']
      },
      {
        title: '2 — Methods & Imaging',
        rationale: 'Cadaveric dissection, H&E staining, X-ray, electron microscopy, CT/MRI, IHC, and plastination are the instruments through which anatomical knowledge is produced and applied. Understanding the method clarifies the evidence.',
        cats: ['method']
      },
      {
        title: '3 — Gross Anatomy & Nomenclature',
        rationale: 'Anatomical position, body planes, regional terminology, and the Terminologia Anatomica provide the shared coordinate system. Vesalius\'s Fabrica, Gray\'s Anatomy, and the Visible Human Project are the landmark texts that codified gross anatomy.',
        groups: ['Gross Anatomy']
      },
      {
        title: '4 — Development & Embryology',
        rationale: 'Germ layer theory explains where every organ comes from and predicts patterns of congenital malformation. Learning developmental origin before tissue types anchors the histological variation that follows: why gut epithelium is endodermal, skin is ectodermal, and connective tissue is mesodermal.',
        groups: ['Development & Embryology']
      },
      {
        title: '5 — Histology & Cells',
        rationale: 'Cell theory, the four tissue types, mitosis, apoptosis, skin layers, extracellular matrix, and the Human Protein Atlas operate at the microscale. This module establishes the cellular foundation for all organ-system anatomy.',
        groups: ['Histology & Cells']
      },
      {
        title: '6 — Musculoskeletal System',
        rationale: 'Bone structure, Wolff\'s law, joint types, sarcomere mechanics, disuse atrophy, and the RANK/RANKL axis — the body\'s load-bearing architecture and its capacity to adapt, degenerate, and be repaired.',
        groups: ['Musculoskeletal']
      },
      {
        title: '7 — Cardiovascular & Viscera',
        rationale: 'Harvey\'s circulation, capillaries, heart chambers and valves, coronary anatomy, GI wall architecture, pulmonary alveoli, nephron filtration barriers, and the lymphatic system — the transport and exchange infrastructure every other organ depends on.',
        groups: ['Cardiovascular & Viscera']
      },
      {
        title: '8 — Nervous System Anatomy',
        rationale: 'Cajal\'s neuroanatomy, spinal nerve organisation, the Bell-Magendie Law, dermatomes and myotomes, and referred pain patterns. The structural substrate of sensation, movement, and autonomic control.',
        groups: ['Nervous System & Senses']
      },
      {
        title: '9 — Debates & Open Questions',
        rationale: 'Galenic vs Harvey, neuron doctrine vs reticular theory, cardiac regeneration fraud, fascia classification, atlas variation, the glymphatic system, dermatome map disagreements, and the mesentery-as-organ controversy — best evaluated after the full structural knowledge base is in place.',
        cats: ['debate']
      },
      {
        title: '10 — Clinical & Educational Applications',
        rationale: 'Surgical anatomy, histopathology, joint replacement biomechanics, radiological anatomy, plastination-based education, and tissue engineering show how structural knowledge translates directly into diagnosis, operative planning, and regenerative medicine.',
        cats: ['application']
      }
    ]
  },
  'physiology-organ-systems': {
    meta: 'Builds from the smallest physiological unit outward: establish the cellular machinery of electrical signalling first, then progress through neuromuscular, cardiovascular, respiratory, renal, and endocrine systems before converging on the overarching principle of homeostasis. Pioneers and methods are front-loaded so the landmark experiments are fully legible when the systems modules arrive. Debates and applications close the arc, so they can be evaluated against the complete functional picture rather than encountered before the mechanisms are understood.',
    modules: [
      {
        title: '1 — Pioneers & Methods',
        rationale: 'Physiology is one of the most historically rich of the sciences: Harvey proved circulation in 1628, Banting extracted insulin in 1922, Hodgkin and Huxley cracked the action potential in 1952. Meeting the pioneers before the content makes every subsequent entry legible as part of a human story. The methods module placed here establishes the experimental tools — voltage clamp, cardiac catheterisation, spirometry, clearance studies, RIA, micropuncture — so the landmark studies are not black boxes.',
        cats: ['figure', 'method']
      },
      {
        title: '2 — The Cell Membrane: Electricity & Signalling',
        rationale: 'Every organ-system discovery rests on membrane biophysics. The resting potential, action potential, Hodgkin-Huxley model, Gibbs-Donnan equilibrium, and second messenger cascade are the molecular vocabulary of all physiology. Starting here means that when you encounter the sliding filament, the pacemaker cell, or the adrenal cortex later, you already understand the ionic and signalling machinery driving them.',
        groups: ['Cell & Membrane Physiology']
      },
      {
        title: '3 — Neuromuscular Physiology',
        rationale: 'From action potential to power stroke: sliding filament theory, cross-bridge cycling, and the neuromuscular junction translate electrical excitation into mechanical force. The Bowditch staircase (frequency-dependent potentiation) and the NMJ safety factor connect directly to the cardiac and clinical pharmacology content that follows.',
        groups: ['Neuromuscular Physiology']
      },
      {
        title: '4 — Cardiovascular & Blood Physiology',
        rationale: 'The largest module — Harvey to Guyton — covering circulation of blood, cardiac output and its determinants, Frank-Starling law, Starling-Landis capillary forces, vascular resistance (Poiseuille), autoregulation (Bayliss), and the Fåhraeus-Lindqvist microvascular correction. The Guyton cardiovascular-renal model is the conceptual payoff: it shows how cardiac output, venous return, and renal volume regulation are one integrated system.',
        groups: ['Cardiovascular & Blood Physiology']
      },
      {
        title: '5 — Respiratory Physiology',
        rationale: 'Gas exchange from lung to capillary: the chemoreceptor theory of ventilatory control (Haldane), the Bohr and Haldane effects on haemoglobin, lung compliance and resistance, ventilation-perfusion matching, and hypoxic pulmonary vasoconstriction. The Hering-Breuer reflex and Valsalva manoeuvre introduce reflex and autonomic links to the cardiovascular module.',
        groups: ['Respiratory Physiology']
      },
      {
        title: '6 — Renal & Acid-Base Physiology',
        rationale: 'The kidney as quantitative filter: glomerular filtration, tubular reabsorption and secretion, renal clearance (Smith), and the countercurrent multiplier for urine concentration. The Henderson-Hasselbalch framework for acid-base regulation provides a clinical diagnostic tool and links back to the bicarbonate buffer explored in respiratory physiology.',
        groups: ['Renal & Acid-Base Physiology']
      },
      {
        title: '7 — Gastrointestinal Physiology',
        rationale: 'The GI tract is the body\'s interface with the external nutritional environment and houses a nervous system of its own. Pavlov\'s three-phase gastric secretion model, the enteric nervous system as an autonomous integrator, and the proton pump physiology that underlies one of the most widely prescribed drug classes (PPIs) are the core entries. GI physiology connects to the endocrine module (gut hormones: gastrin, CCK, GLP-1) and to the homeostasis module (energy balance, fluid balance, nutrient absorption).',
        groups: ['Gastrointestinal Physiology']
      },
      {
        title: '8 — Endocrine & Reproductive Physiology',
        rationale: 'Chemical signalling from hormone to cell: the neuroendocrine hypothesis (Harris), second messenger cascades (Sutherland), hypothalamic-pituitary-organ axes and their negative feedback logic, insulin and the discovery that transformed diabetes, the stress HPA axis (Selye), the menstrual cycle and HPG axis dynamics, and fetal circulation and neonatal transition. The hormonal feedback framework introduced here is the template for diagnosing primary, secondary, and tertiary endocrine failure clinically.',
        groups: ['Endocrine & Reproductive Physiology']
      },
      {
        title: '9 — Homeostasis & Integration',
        rationale: 'The grand synthesis: Bernard\'s milieu intérieur, Cannon\'s homeostasis, the fight-or-flight response, the Cushing reflex, body fluid compartment physiology, and the allostasis debate. This module revisits concepts from every previous module — the autonomic nervous system driving cardiovascular, respiratory, and endocrine responses; the kidney enforcing long-term blood pressure; the brain as the predictive integrator of all systems. It is most rewarding after all eight organ-system modules.',
        groups: ['Homeostasis & Integration']
      },
      {
        title: '10 — Debates & Open Questions',
        rationale: 'Audit your certainties: the glycocalyx revision of Starling forces, the homeostasis/allostasis controversy, the periphery-vs-heart debate in cardiac output, the inner medullary concentration mystery, O₂ therapy in COPD, insulin resistance mechanisms, volutrauma vs barotrauma, and biological sex differences in physiology. These debates make most sense after you can evaluate them against the full mechanistic base.',
        cats: ['debate']
      },
      {
        title: '11 — Clinical Applications',
        rationale: 'Where the physiology leaves the lab: lung-protective mechanical ventilation (ARDSNet), RAAS inhibition in hypertension and heart failure, dialysis and renal replacement, SGLT2 inhibitors (from micropuncture to EMPA-REG), cardiac pacemakers and defibrillators, hormonal contraception, and proton pump inhibitors. Each application is a direct translation of a mechanism from the preceding modules.',
        cats: ['application']
      }
    ]
  },
  'zoology-animal-behavior': {
    meta: 'From Tinbergen\'s four questions to Hamilton\'s rule: the ethological and evolutionary foundations of animal behaviour. Begins with the founders and their methods, builds through evolutionary theory and animal diversity, then works outward through communication, social behaviour, reproduction and foraging, closing with live debates and real-world applications.',
    modules: [
      {
        title: '1 — Founders of Ethology',
        rationale: 'Lorenz, Tinbergen, von Frisch, Goodall, and Griffin defined the field\'s questions, methods and vocabulary. Meeting them first frames every subsequent concept against the historical context in which it was contested.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Methods in Field Behaviour',
        rationale: 'Ethograms, focal sampling, radio telemetry, playback experiments, mark-recapture, phylogenetic comparative methods and game-theoretic modelling are the instruments through which behavioural knowledge is produced. Understanding the method clarifies what claims are actually supported.',
        cats: ['method']
      },
      {
        title: '3 — Evolutionary Foundations',
        rationale: 'Natural selection, kin selection, reciprocal altruism, Tinbergen\'s four questions, the Red Queen, and ESS theory supply the theoretical skeleton that every subsequent module hangs on. These are the ideas that transformed observation of animal behaviour into an evolutionary science.',
        groups: ['Evolutionary Foundations']
      },
      {
        title: '4 — Animal Diversity & Phylogeny',
        rationale: 'The species-area relationship, Müllerian and Batesian mimicry, and phylogenetic comparative methods reveal how diversity is generated, measured and structured. These entries provide the macroecological context for behavioural variation across taxa.',
        groups: ['Animal Diversity & Phylogeny']
      },
      {
        title: '5 — Communication & Signalling',
        rationale: 'The waggle dance, vervet alarm calls, the handicap principle, the dear enemy effect and the honest-vs-conventional debate reveal the logic of information exchange between animals. This module builds the vocabulary for evaluating signal reliability and evolution.',
        groups: ['Communication & Signalling']
      },
      {
        title: '6 — Social Behaviour & Cooperation',
        rationale: 'Kin discrimination, alarm calling in ground squirrels, tit-for-tat and eusociality show how cooperation is maintained by natural selection — through relatedness, reciprocity or mutualism. Hamilton\'s rule is applied to real populations here.',
        groups: ['Social Behaviour & Cooperation']
      },
      {
        title: '7 — Reproduction & Sexual Selection',
        rationale: 'Sexual selection theory, parental investment, Bateman\'s principle, the Bruce effect and Endler\'s guppy experiment trace the evolutionary logic of mating systems from first principles to contested empirical claims. Sexual dimorphism and mate choice are explained.',
        groups: ['Reproduction & Sexual Selection']
      },
      {
        title: '8 — Foraging, Ecology & Cognition',
        rationale: 'Optimal foraging theory, the marginal value theorem, crow tool manufacture, the star compass and GPS migratory tracking connect energetics, ecology and cognitive sophistication. These entries show behaviour operating across multiple timescales — within a patch, across a season, across a lifetime.',
        groups: ['Foraging & Ecology', 'Migration & Cognition']
      },
      {
        title: '9 — Debates & Open Questions',
        rationale: 'Group selection, the sociobiology controversy, units of selection, animal consciousness, Bateman\'s replication failure, cultural transmission and the instinct-vs-learning debate are best evaluated now, against the full empirical base built in modules 3–8.',
        cats: ['debate']
      },
      {
        title: '10 — Applications',
        rationale: 'Conservation genetics, biological pest control, pollinator conservation, animal-assisted interventions, GPS tracking for migratory conservation, and invasive species management show where the evolutionary science of behaviour translates into real-world decision-making.',
        cats: ['application']
      }
    ]
  },

  'quantum-nuclear-relativity': {
    meta: 'From Planck\'s quantum hypothesis to LIGO\'s gravitational waves: the physics of the very small, the very fast, and the structure of spacetime. Begins with the founding figures and instruments, then works through quantum origins, wave mechanics, nuclear physics and relativity, before tackling particle physics, cosmological frontiers, and the live debates that define the field\'s open questions.',
    modules: [
      {
        title: '1 — Pioneers of Modern Physics',
        rationale: 'Planck, Einstein, Bohr, Heisenberg, Schrödinger, Curie, Rutherford, Feynman, Dirac, Fermi, Meitner and Chadwick — meeting the architects first provides human anchors for every subsequent concept and experiment.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Methods & Instruments',
        rationale: 'Spectroscopy, particle detectors, accelerators, NMR, Feynman diagrams and radiocarbon dating are the instruments that made modern physics legible. Understanding what the tools can and cannot measure clarifies what experimental claims actually assert.',
        cats: ['method']
      },
      {
        title: '3 — Quantum Origins',
        rationale: 'Blackbody radiation, the photoelectric effect, Compton scattering, the Bohr model, wave-particle duality and quantisation mark the transition from classical to quantum physics. These are the founding phenomena that forced a new framework.',
        groups: ['Quantum Origins']
      },
      {
        title: '4 — Wave Mechanics & Uncertainty',
        rationale: 'The Schrödinger equation, matrix mechanics, the uncertainty principle, superposition, entanglement, tunnelling and the Aspect Bell test form the mathematical and experimental core of quantum mechanics — from its formulation to its strangest confirmed predictions.',
        groups: ['Wave Mechanics & Uncertainty']
      },
      {
        title: '5 — Nuclear Physics',
        rationale: 'Radioactive decay, nuclear binding energy, neutron discovery, fission, the shell model, particle detectors and radiocarbon dating constitute the physics of the nucleus — connecting to both fundamental structure and applied technology.',
        groups: ['Nuclear Physics']
      },
      {
        title: '6 — Relativity & Spacetime',
        rationale: 'Special and General Relativity, E=mc², gravitational time dilation and lensing, the Pound-Rebka test and LIGO\'s gravitational wave detection trace the geometry of spacetime from postulate to precision measurement.',
        groups: ['Relativity & Spacetime']
      },
      {
        title: '7 — Particle Physics & QFT',
        rationale: 'QED, QCD, the Standard Model, the Lamb Shift, antimatter, Wu\'s parity violation and Feynman diagrams reveal the quantum field-theoretic structure underlying all matter and three of the four forces.',
        groups: ['Particle Physics & QFT']
      },
      {
        title: '8 — Cosmological Frontiers',
        rationale: 'Big Bang cosmology, gravitational lensing, LIGO and the open questions of dark matter, dark energy, black hole information and quantum gravity connect particle physics to the largest scales in the universe.',
        groups: ['Cosmological Frontiers']
      },
      {
        title: '9 — Interpretations & Debates',
        rationale: 'Copenhagen vs hidden variables, many-worlds, the measurement problem, beyond the Standard Model, nuclear ethics and the quantum gravity problem are best evaluated now, with the full empirical base of the previous eight modules in view.',
        cats: ['debate']
      },
      {
        title: '10 — Applications',
        rationale: 'Nuclear reactors, MRI, lasers, transistors, nuclear medicine, GPS corrections — the technologies that emerged from quantum and relativistic physics now underpin modern civilisation. Understanding the physics clarifies both their power and their limits.',
        cats: ['application']
      }
    ]
  }
  ,
  'computer-science': {
    meta: 'Opens with the pioneers and the foundational mathematical results that define what computation is and is not, then moves through algorithms, systems, networks, AI, and cryptography before closing with live debates and real-world applications.',
    modules: [
      {
        title: '1 — Founders & the Field',
        rationale: 'Lovelace, Turing, Shannon, von Neumann, Hopper, Dijkstra, Thompson & Ritchie, Codd, Hamilton, Berners-Lee, Goldwasser, and Hinton together span every major branch: computability, information theory, hardware design, programming languages, software engineering, networking, databases, HCI, and AI. Meeting the people first gives subsequent technical material a human anchor.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Methods & Paradigms',
        rationale: 'Formal verification, algorithm analysis, object-oriented programming, usability testing, cross-validation, and penetration testing are the methodological toolkit the field uses to generate and validate results — establishing these before diving into content makes the evidence in later modules interpretable.',
        cats: ['method']
      },
      {
        title: '3 — Foundations & Computability',
        rationale: 'The Church-Turing thesis, von Neumann architecture, Shannon information theory, ENIAC, Landauer\'s Principle (erasing a bit costs energy — information has thermodynamic weight), and the undecidability/completeness results define the mathematical and physical ground on which all computing rests. Without these, the limits and possibilities of everything else are mysterious.',
        groups: ['Foundations & Computability']
      },
      {
        title: '4 — Algorithms & Data Structures',
        rationale: 'Big-O complexity, Cook\'s theorem, Quicksort, PageRank, and the P vs NP debate form the core of algorithmic thinking. This module answers: how do we measure efficiency, what are the hard limits, and how do landmark algorithms work?',
        groups: ['Algorithms & Data Structures']
      },
      {
        title: '5 — Systems & Software Engineering',
        rationale: 'Structured programming, the relational model, Unix/C, ADTs, semaphores, Brooks\'s Law, OOP, and the software crisis debate are the building blocks of large-scale software — the layer between theory and deployed product.',
        groups: ['Systems & Software Engineering']
      },
      {
        title: '6 — Networks & Distributed Computing',
        rationale: 'Packet Switching Theory (Baran & Davies), ARPANET, TCP/IP, the WWW, CAP theorem, Metcalfe\'s Law, GPS, cloud computing, and net neutrality trace the internet from a research curiosity to global infrastructure and the governance questions it raises.',
        groups: ['Networks & Distributed Computing']
      },
      {
        title: '7 — AI: Symbolic & HCI',
        rationale: 'The Turing Test, the Physical Symbol System Hypothesis, MYCIN expert system, Deep Blue, Fitts\'s Law, usability testing, and the Chinese Room debate map the symbolic/classical AI tradition and its HCI applications — the foundation for understanding what the deep learning revolution changed.',
        groups: ['AI: Symbolic & HCI']
      },
      {
        title: '8 — Machine Learning & Neural Networks',
        rationale: 'PAC learning, backpropagation, the No Free Lunch theorem, AlphaGo, GPT-3, the Transformer architecture, cross-validation, the reproducibility crisis, AI safety, and the 2024–25 reasoning-models debate are the landscape of contemporary ML — its theoretical foundations, landmark demonstrations, and open problems.',
        groups: ['Machine Learning & Neural Networks']
      },
      {
        title: '9 — Cryptography & Security',
        rationale: 'Public-key cryptography, RSA, zero-knowledge proofs, the Haber–Stornetta chain-of-blocks, perfect secrecy, penetration testing, secure e-commerce, Ethereum, and the Crypto Wars debate form the security layer that makes digital commerce and private communication possible — and contested.',
        groups: ['Cryptography & Security']
      },
      {
        title: '10 — Debates & Open Questions',
        rationale: 'P vs NP, AI safety, the Chinese Room, Crypto Wars, open vs proprietary software, net neutrality, the software crisis, ML reproducibility, and the reasoning-models inflection of 2024–25 are the live controversies where the field has not yet reached consensus — the most important lens for a critical reader.',
        cats: ['debate']
      },
      {
        title: '11 — Applications',
        rationale: 'GPS, SSL/e-commerce, recommendation systems, search engines, cloud computing, Ethereum, and LLMs in production show where the theory left the lab and entered daily life — and what new questions that created.',
        cats: ['application']
      }
    ]
  },
  'epistemology': {
    meta: 'Opens with the twelve figures who shaped the field — from Plato to Williamson, Al-Ghazālī to Nāgārjuna — so that every theory and debate has a human face. The curriculum then moves through the three foundational questions of epistemology: what is knowledge (and can the JTB analysis survive Gettier?), how is belief justified (foundationalism, coherentism, reliabilism, virtue epistemology), and where does knowledge come from (a priori, a posteriori, the pramāṇa tradition, and Moore\'s common-sense response to scepticism). Science is treated as epistemology\'s hardest test case: paradigm shifts, naturalisation, underdetermination, and the realism debate. The final section socialises the inquiry — showing that knowledge is not a solitary achievement but a communal one shaped by power and standpoint, and that who is believed, whose concepts count, who owns knowledge, and whether there can be a standpoint-independent view from nowhere are irreducibly political questions.',
    modules: [
      {
        title: '1 — Pioneers & Theorists',
        rationale: 'Twelve figures from Plato and Nāgārjuna to Gettier and Fricker are front-loaded so their names anchor every theory and debate that follows. Return to this module at any point — each entry links directly to the landmark work or counterexample that made the figure historically significant.',
        cats: ['figure']
      },
      {
        title: '2 — What Is Knowledge?',
        rationale: 'The JTB analysis — justified true belief — organised epistemology for two millennia; Gettier\'s three-page paper (1963) demolished it. This module covers the six main theories of truth that compete for the T-slot, the analysis project itself, and the post-Gettier landscape: epistemic luck, the knowledge-first inversion, the extended-mind challenge, and the philosophical methods (thought experiment, conceptual analysis, experimental philosophy) that generate and test these accounts.',
        groups: ['The Nature of Knowledge & Truth']
      },
      {
        title: '3 — Justification, Foundationalism & Virtue',
        rationale: 'Four architectures for epistemic justification: foundationalism anchors belief in incorrigible basic beliefs; coherentism weaves a web in which beliefs support each other; reliabilism evaluates processes by their truth-tracking record; virtue epistemology locates justification in stable intellectual character. The internalism/externalism fault line runs through all four — and is the deepest unresolved debate in the theory of justification. Agrippa\'s trilemma (regress, circularity, dogmatism) is the pressure that forces the choice between them.',
        groups: ['Justification & Rationality']
      },
      {
        title: '4 — Scepticism, Doubt & the Sources of Knowledge',
        rationale: 'From Descartes\'s method of doubt to Putnam\'s brain in a vat, sceptical thought experiments expose the gap between appearance and reality. Hume\'s problem of induction and the problem of epistemic circularity show that the gap cannot be closed by reason alone. Contextualism deflates sceptical conclusions by relativising knowledge-attributions to context. The sources of knowledge — a priori vs. a posteriori, the pramāṇa tradition of valid epistemic instruments, and the problem of the criterion — complete the picture: how much can we know, and about what?',
        groups: ['Scepticism & The External World', 'Sources of Knowledge']
      },
      {
        title: '5 — Science, Inference & Formal Epistemology',
        rationale: 'Science is the most institutionalised form of knowledge production, and philosophy of science is applied epistemology. Kuhn\'s paradigm shifts challenge the cumulative image of science; Quine\'s naturalisation programme dissolves the boundary between epistemology and cognitive science; Bayesian epistemology provides a formal calculus for updating beliefs on evidence. Underdetermination (Duhem-Quine), the preface paradox, and the scientific realism vs. anti-realism debate are the three sharpest challenges to the idea that science gives us knowledge of an observer-independent world.',
        groups: ['Science, Inference & Formal Epistemology']
      },
      {
        title: '6 — Social Epistemology & Epistemic Justice',
        rationale: 'The final module socialises epistemology: knowledge is not assembled in solitary minds but produced, transmitted, and certified through communities, institutions, and power structures. Testimony, peer disagreement, and echo chambers show how social facts shape individual belief. Fricker\'s epistemic injustice reveals that the same credibility-assessment processes that generate knowledge can simultaneously constitute a wrong done to a person as a knower. Epistemic relativism, and the global questions of who owns knowledge, close the arc — returning to the field\'s starting questions with an awareness of whose voices have historically counted.',
        groups: ['Social Epistemology', 'Epistemic Justice & Situated Knowledge']
      }
    ]
  },
  'oceanography': {
    meta: 'Opens with the twelve pioneers who transformed ocean science from a maritime curiosity into a rigorous discipline — from Maury\'s wind charts to Shackleton\'s sediment cores. The curriculum then follows the structure of the ocean itself: physical circulation, chemical cycling, marine biology, the deep seafloor, and climate connections. Methods and observation tools are treated as a module in their own right, because the history of oceanography is largely the history of getting instruments into the sea. The course closes with the conservation, policy and open-question frontier where the science meets its most urgent social stakes.',
    modules: [
      {
        title: '1 — Pioneers & Theorists',
        rationale: 'The twelve figures front-loaded here span 170 years of ocean science: from Maury and Thomson founding the discipline to Munk publishing peer-reviewed papers into his 90s. Their careers are road-maps to the major intellectual transitions — descriptive surveys (Maury, Thomson, Nansen) to dynamical theory (Sverdrup, Stommel, Munk), laboratory chemistry to planetary carbon accounting (Revelle, Keeling), physical oceanography to ecological advocacy (Earle, Tharp, Shackleton). Return here to anchor any theory or measurement to a person.',
        cats: ['figure']
      },
      {
        title: '2 — The Physical Ocean: Circulation & Dynamics',
        rationale: 'The ocean moves on timescales from seconds (internal waves) to millennia (thermohaline conveyor). This module builds the physical picture in sequence: Ekman transport explains why surface water moves 90° to the wind and why coasts upwell; the Sverdrup balance explains the existence of subtropical gyres; Stommel\'s β-effect explains western boundary current intensification; and thermohaline circulation connects all basins in a single planetary overturning. Methods, effects and applications that belong to the physical ocean — ADCP surveys, Langmuir cells, offshore wind — are captured here.',
        groups: ['Physical Oceanography']
      },
      {
        title: '3 — Ocean Chemistry & the Carbon Cycle',
        rationale: 'The ocean is both a vast chemical reactor and the dominant long-term regulator of atmospheric CO₂. This module covers the two pumps that move carbon from surface to depth — the solubility pump and the biological pump — and the Redfield ratio\'s proof that life controls ocean chemistry rather than the other way round. Revelle\'s buffer factor, GEOSECS tracer surveys, ocean acidification, and the debates over pump efficiency and iron fertilisation fill out the picture. Ocean-based CDR proposals are assessed against this chemical foundation.',
        groups: ['Chemical Oceanography']
      },
      {
        title: '4 — The Living Ocean: Biology & Ecology',
        rationale: 'From phytoplankton in the photic zone to apex predators and the deep scattering layer, this module covers the ecological architecture of the ocean. Darwin\'s coral atoll theory introduces how biology and geology intertwine over geological time. Trophic cascade theory explains why removing apex predators restructures entire ecosystems. Harmful algal blooms, blue carbon sequestration, fisheries MSY and the debates over coral reef fate and mesopelagic biomass complete the biological arc from production to conservation.',
        groups: ['Marine Biology & Ecology']
      },
      {
        title: '5 — The Deep Sea & Seafloor',
        rationale: 'Below 200 m the ocean is dark, cold, and — until the 20th century — almost completely unknown. Plate tectonics and seafloor spreading explain why the ocean floor is young and geologically active. Hydrothermal vent discovery overturned the assumption that sunlight is the basis of all life. Tharp\'s mapping gave the deep sea a geography. Sediment cores encode hundreds of thousands of years of climate history in foram shells. Turbidity currents, the deep scattering layer, the mesopelagic biomass debate and the deep-sea mining controversy populate the zones between the surface and the abyss.',
        groups: ['Deep Sea & Seafloor']
      },
      {
        title: '6 — Ocean, Climate & Paleoclimate',
        rationale: 'The ocean both drives and records climate. ENSO is the largest source of interannual climate variability; the thermohaline conveyor distributes heat across hemispheres on millennial timescales; the sea-ice albedo feedback amplifies Arctic warming three to four times the global rate. Deep-sea sediment cores confirmed Milanković orbital forcing as the pacemaker of ice ages. This module includes the two most consequential open debates in ocean-climate science: whether the AMOC is approaching a tipping point, and how fast marine ice sheets will drive sea-level rise.',
        groups: ['Climate & Ocean Interaction']
      },
      {
        title: '7 — Observing the Ocean: Tools & Methods',
        rationale: 'Oceanography has always been tool-limited: knowledge is sparse until you can get instruments into the sea reliably, cheaply and repeatedly. This module traces the methodological revolution from piston corers and Nansen bottles (sampling one cast at a time) through electronic CTDs, ADCPs and sediment traps (systematic depth profiling) to Argo floats and ocean-colour satellites (global, near-real-time monitoring). Ocean tracers — CFCs, radiocarbon, tritium — convert T-S snapshots into circulation rate estimates. Operational forecasting closes the loop from measurement to applied prediction.',
        groups: ['Ocean Observation & Methods']
      },
      {
        title: '8 — Conservation, Policy & Open Frontiers',
        rationale: 'The final module takes ocean science to its social stakes: fisheries management (is MSY working?), marine protected areas and the BBNJ high-seas treaty (how much protection exists and is it effective?), and tsunami early warning (the clearest example of ocean science saving lives). The Great Pacific Garbage Patch and Gulf of Mexico dead zone surveys show what global-scale pollution looks like as data. Remaining debates and application entries are captured here as a safety net.',
        groups: ['Marine Conservation & Policy'],
        cats: ['debate', 'application']
      }
    ]
  },
  'systems-and-complexity': {
    meta: 'Traces the lineage from cybernetics (1948) through general systems theory, chaos, network science, and complex adaptive systems to the modern science of emergence — showing how a single cluster of questions about self-organisation and feedback gave rise to five distinct research traditions, now converging on complexity as a unified but contested programme.',
    modules: [
      {
        title: '1 — Founders & the Field',
        rationale: 'Eight pioneers define the intellectual genealogy: Wiener and Ashby (cybernetics), von Foerster (second-order), Bertalanffy and Forrester (systems), Lorenz and Feigenbaum (chaos), Prigogine (dissipative structures), Kauffman and Holland (complexity), and Barabási (networks). Meeting them first gives students anchoring names and dates before the ideas become abstract.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Tools of the Trade',
        rationale: 'Agent-based modelling, phase-space analysis, network centrality, bifurcation analysis, system dynamics, and time-series reconstruction are the six primary methods. Understanding which tool answers which question is prerequisite to evaluating any empirical claim in the field.',
        groups: ['Methods & Modelling'],
        cats: ['method']
      },
      {
        title: '3 — Cybernetics & Control',
        rationale: 'Cybernetics is the historical root of everything that follows. The feedback loop, the Law of Requisite Variety, and the observer-in-the-system turn are the foundational moves — without them, emergence, adaptation, and self-organisation remain intuitive metaphors rather than analysable mechanisms.',
        groups: ['Cybernetics & Control']
      },
      {
        title: '4 — Systems Theory',
        rationale: 'General Systems Theory and system dynamics show how stocks, flows, and feedback loops generate counterintuitive behaviour in organisations, cities, and the global economy. The Limits to Growth case study demonstrates the practical stakes of getting system structure right.',
        groups: ['Systems Theory']
      },
      {
        title: '5 — Chaos & Nonlinear Dynamics',
        rationale: 'Lorenz\'s discovery reframed prediction: not a question of computing power but of fundamental mathematical limits. Period-doubling cascades, strange attractors, and the butterfly effect are the conceptual core; the debate about chaos vs. noise in real data shows what rigorous empirical testing looks like in this field.',
        groups: ['Chaos & Nonlinear Dynamics']
      },
      {
        title: '6 — Network Science',
        rationale: 'Small-world topology, scale-free degree distributions, and cascading failures form the structural toolkit for understanding any large network — social, biological, financial, or infrastructural. The ongoing power-law debate is an excellent case study in statistical rigour and contested universality claims.',
        groups: ['Network Science']
      },
      {
        title: '7 — Complex Adaptive Systems',
        rationale: 'Evolution of cooperation, segregation dynamics, and the edge of chaos show how individual-level adaptation produces surprising collective outcomes. The ABM calibration debate is one of the field\'s most important open methodological questions — introduced here where students have enough context to evaluate it.',
        groups: ['Complex Adaptive Systems']
      },
      {
        title: '8 — Emergence & Self-Organisation',
        rationale: 'Prigogine\'s dissipative structures, Kauffman\'s NK landscapes, Bak\'s self-organized criticality, Turing patterns, and the BZ reaction converge on a single claim: local rules plus energy throughput plus the right network structure generate global order without a designer. The strong-emergence debate closes the module with the deepest philosophical question in the field.',
        groups: ['Emergence & Self-Organisation']
      }
    ]
  },
  'cultural-anthropology': {
    meta: 'Follows a standard introductory cultural anthropology arc: meet the discipline\'s founders and method first, absorb its foundational stance on relativism and its internal arguments about what kind of science (if any) it is, then move outward through kinship, ritual, language, exchange and the colonial entanglements that shaped the field itself, closing with open debates and real-world applications.',
    modules: [
      {
        title: '1 — Founders of Anthropology',
        rationale: 'Boas, Malinowski, Mead, Evans-Pritchard, Radcliffe-Brown, Lévi-Strauss, Geertz, Mauss, Harris, Wolf, Chagnon and Hurston each represent a distinct methodological or theoretical era. Meeting them first makes every later theory and study legible as part of an ongoing argument between real people, not an abstract timeline.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Research Methods',
        rationale: 'Anthropological claims are only as strong as the method that produced them. Participant observation, the genealogical method, salvage ethnography, cross-cultural survey coding, linguistic elicitation and life history all carry their own blind spots — know the tool before trusting the finding.',
        cats: ['method']
      },
      {
        title: '3 — Foundations: Culture, Relativism & the Discipline\'s Big Arguments',
        rationale: 'Before studying any specific culture, absorb the stance that defines the whole discipline: judge no culture by another\'s standard. This module also gathers anthropology\'s most foundational internal disputes — is it a science, can relativism coexist with human rights, are there true cultural universals — so later group-specific debates can be read against this baseline.',
        groups: ['Fieldwork, Culture & Relativism']
      },
      {
        title: '4 — Kinship, Gender & the Body',
        rationale: 'Family, marriage and gender are where anthropological theory meets everyday life most directly. Unilineal descent, alliance theory, the Nayar marriage debate and cross-cultural gender variation show how differently societies can organise the most basic human relationships.',
        groups: ['Kinship & Family Systems', 'Identity, Gender & the Body']
      },
      {
        title: '5 — Ritual, Religion & Symbolism',
        rationale: 'Rites of passage, totemism, witchcraft accusation and the Sahlins-Obeyesekere dispute over Captain Cook show how anthropology reads ceremony and belief as internally coherent systems of meaning, not superstition to be explained away.',
        groups: ['Ritual, Religion & Symbolism']
      },
      {
        title: '6 — Language, Meaning & Worldview',
        rationale: 'Does the grammar of your language shape how you think? This module traces linguistic relativity from Whorf\'s strong original claim through its rejection and partial empirical revival, alongside the elicitation methods that make testing it possible.',
        groups: ['Language, Meaning & Worldview']
      },
      {
        title: '7 — Exchange, Subsistence & Economy',
        rationale: 'The Kula ring, the potlatch, Mauss\'s gift theory and the \'original affluent society\' debate show that economic life in small-scale societies runs on obligation and reciprocity as much as, or more than, market calculation.',
        groups: ['Exchange, Subsistence & Economy']
      },
      {
        title: '8 — Power, Colonialism & Cultural Contact',
        rationale: 'No society anthropologists studied was ever truly isolated. Cargo cults, the Malinowski diary controversy, the Chagnon-Ferguson dispute over Yanomami violence, and applied/forensic anthropology all show the discipline directly entangled with colonial power, contact and its own research ethics.',
        groups: ['Power, Colonialism & Cultural Contact']
      },
      {
        title: '9 — Feminist & Decolonial Anthropology',
        rationale: 'Ortner and Rubin extended structuralist and exchange theory (module 6, 7) directly into a critique of gender inequality itself, while Tuhiwai Smith\'s decolonizing methodologies pushed the discipline to reckon with its own colonial-era research practices — the theoretical and the institutional halves of the same reckoning.',
        groups: ['Feminist & Decolonial Anthropology']
      },
      {
        title: '10 — Ontology, Multispecies & Digital Anthropology',
        rationale: 'The newest frontier of the discipline extends ethnographic seriousness to non-human actors (Kohn, Latour, Haraway) and to entirely virtual field sites (Boellstorff), while the accompanying debate asks whether this expansion risks repeating old exoticising habits in new philosophical language.',
        groups: ['Ontology, Multispecies & Digital Anthropology']
      },
      {
        title: '11 — Debates & Open Questions',
        rationale: 'Most of anthropology\'s sharpest disputes are already folded into their relevant content module above, so this module catches anything left over — treat it as a final check that no open question has been skipped.',
        cats: ['debate']
      },
      {
        title: '12 — Applications',
        rationale: 'Close by seeing anthropology at work outside the university: development consulting, forensic human rights investigation, corporate design research, language revitalisation, museum repatriation and global health all directly repurpose the discipline\'s methods and findings.',
        cats: ['application']
      }
    ]
  },
  'sociology': {
    meta: 'Follows a standard introductory sociology arc: meet the discipline\'s founders and its quantitative and qualitative toolkit first, then work through its classical paradigms before moving out into stratification, inequality, institutions, urban life and deviance, closing with the field\'s live debates and its direct policy applications.',
    modules: [
      {
        title: '1 — Founders of Sociology',
        rationale: 'Durkheim, Weber, Marx, Parsons, Merton, Mead, Goffman, Bourdieu, Du Bois, Martineau and Patricia Hill Collins each anchor a distinct theoretical tradition explored in later modules. Meeting them first, including figures long under-credited in the discipline\'s own standard canon, makes every later theory legible as part of a real intellectual lineage.',
        groups: ['Pioneers & Theorists']
      },
      {
        title: '2 — Research Methods',
        rationale: 'Sociological claims rest on how the data was gathered: the sample survey, urban ethnography, audit studies, social network analysis, content analysis and the historical-comparative method each reveal some things and hide others. Know the tool before trusting the finding.',
        cats: ['method']
      },
      {
        title: '3 — Classical Theoretical Traditions',
        rationale: 'Structural functionalism, conflict theory, symbolic interactionism and Weberian social action are sociology\'s founding paradigms, and the discipline still argues over whether it is closer to a positivist science or an interpretive humanities discipline — a tension introduced here and revisited throughout.',
        groups: ['Classical Theoretical Traditions']
      },
      {
        title: '4 — Social Stratification & Class',
        rationale: 'The Matthew effect, cultural capital, conspicuous consumption and educational assortative mating show how advantage compounds and reproduces itself across generations, often through mechanisms far subtler than direct inheritance of wealth.',
        groups: ['Social Stratification & Class']
      },
      {
        title: '5 — Race, Gender & Inequality',
        rationale: 'Intersectionality, doing gender, white flight and Pager\'s hiring-discrimination audit study show how race and gender inequality operate simultaneously as individual interaction, institutional pattern and measurable statistical effect.',
        groups: ['Race, Gender & Inequality']
      },
      {
        title: '6 — Institutions & Organizations',
        rationale: 'Bureaucracy, institutional isomorphism and secularization theory show how formal organisations and taken-for-granted institutions — workplaces, schools, religions — both constrain individual action and get reproduced, resisted or revised by the people inside them.',
        groups: ['Institutions: Family, Education & Religion', 'Bureaucracy, Organizations & Work']
      },
      {
        title: '7 — Urbanization & Social Change',
        rationale: 'From the Chicago School\'s concentric zones through Milgram\'s small-world experiment to Putnam\'s social capital and Christakis & Fowler\'s network-contagion claims, this module traces how sociologists have tried to map the structure of mass, networked society itself.',
        groups: ['Urbanization & Social Change']
      },
      {
        title: '8 — Deviance, Norms & Social Control',
        rationale: 'Anomie, labeling theory and moral panic reframe deviance as a product of social structure and reaction rather than individual pathology — a lens that directly shapes the restorative-justice application explored later.',
        groups: ['Deviance, Norms & Social Control']
      },
      {
        title: '9 — Late Modernity & Global Theory',
        rationale: 'Foucault, Giddens, Bauman and Beck bridge classical sociology (module 3) to the present, while Connell\'s Southern theory directly challenges the almost entirely Euro-American cast of figures met so far — a deliberate corrective placed here rather than left implicit.',
        groups: ['Late Modernity & Global Theory']
      },
      {
        title: '10 — Digital Society & Environment',
        rationale: 'Zuboff\'s surveillance capitalism and the Gender Shades algorithmic-bias audit extend the discipline into platforms and code; Schnaiberg\'s treadmill of production does the same for the environment — three areas barely visible in sociology\'s classical canon but central to its contemporary research agenda.',
        groups: ['Digital Society & Environment']
      },
      {
        title: '11 — Debates & Open Questions',
        rationale: 'Most of sociology\'s sharpest live disputes are already folded into their relevant content module above; this module catches anything left over as a final audit of open questions.',
        cats: ['debate']
      },
      {
        title: '12 — Applications',
        rationale: 'Close by seeing sociology at work in policy and practice: Ban the Box hiring reform, civic-engagement initiatives, corporate HR consulting, school desegregation policy, restorative justice and consumer marketing all directly repurpose the discipline\'s theories and findings.',
        cats: ['application']
      }
    ]
  }
};
