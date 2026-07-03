// Sci-Map — category & tag visual taxonomy
// Extracted from index.html — edit this file to reconfigure the atlas.
// Loaded via <script src> BEFORE the main script, so these top-level consts
// are available as globals to the renderer.

const CAT_ICONS = {
  theory:      "📐",
  study:       "🧪",
  effect:      "📊",
  concept:     "🧩",
  method:      "🔬",
  figure:      "👤",
  debate:      "⚖️",
  application: "🔗",
};

const TAG_COLORS = {
  THEORY:"#2471A3", MODEL:"#2C81C0", FRAMEWORK:"#2471A3",
  EXPERIMENT:"#7D3C98", "FIELD STUDY":"#884EA0", "NATURAL EXPERIMENT":"#9B59B6",
  EFFECT:"#117A65", PHENOMENON:"#16A085", BIAS:"#C0392B",
  "META-ANALYSIS":"#1E8449", REPLICATION:"#1E8449", "FAILED REPLICATION":"#922B21",
  CONCEPT:"#566573", CONSTRUCT:"#566573", SCALE:"#8B5E00", MEASURE:"#8B5E00",
  FIGURE:"#6D4C41", APPLICATION:"#2E7D52", DEBATE:"#B7770D", REVISION:"#B7770D",
  PRINCIPLE:"#2471A3", LAW:"#1A5276", DISCOVERY:"#7B4FA6",
};
