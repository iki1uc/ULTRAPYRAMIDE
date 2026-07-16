// NC² AUTO‑REPAIR‑ENGINE – Version ARE‑2.0
// ---------------------------------------------

const ARE_LOG = [];
const MODULE_MAP = {
  orbit: ["ORBIT.js", "ORBIT.visual.js"],
  tech: ["TECH.debug.js", "TECH6E.deepdebug.js", "TECH6E.autorepair.js"],
  ai: ["PYRAMIDE_AI.autopilot.js", "PYRAMIDE_AI.train.js"],
  raw: ["RAW.visual.js", "RAW-Chain.raw.js"],
  meta: ["META.js", "META.visual.js"],
  station: ["STATIONEN.js", "station-loader.js"],
  energy: ["ENERGY.visual.js"]
};

// --- NAME NORMALIZER ---
function normalizeName(name){
  return name
    .replace(/[^a-zA-Z0-9._-]/g, "")   // Entfernt Unicode, Symbole, Sonderzeichen
    .replace(/\.js$/, "") + ".js";     // Erzwingt .js Endung
}

// --- AUTO‑REPAIR ---
function repairName(name){
  const fixed = normalizeName(name);
  if(fixed !== name){
    ARE_LOG.push(`Name repariert: ${name} → ${fixed}`);
  }
  return fixed;
}

// --- SCRIPT LOADER ---
async function loadScript(path){
  return new Promise(resolve=>{
    const s = document.createElement("script");
    s.src = path;
    s.onload = ()=>resolve({ok:true, path});
    s.onerror = ()=>resolve({ok:false, path});
    document.body.appendChild(s);
  });
}

// --- NC² PIPELINE VERIFIER ---
function verifyNC2(){
  const required = [
    "NC2_DUAL",
    "NC2_MERGE",
    "NC2_ALIGN",
    "NC2_FUSION",
    "NC2_SUPERFUSION"
  ];

  required.forEach(mod=>{
    if(typeof window[mod] === "undefined"){
      ARE_LOG.push(`NC² Modul fehlt: ${mod}`);
    } else {
      ARE_LOG.push(`NC² Modul OK: ${mod}`);
    }
  });
}

// --- AUTO‑REPAIR MAIN ---
async function NC2_AutoRepairEngine(){
  ARE_LOG.push("NC² Auto‑Repair‑Engine gestartet…");

  for(const folder of Object.keys(MODULE_MAP)){
    ARE_LOG.push(`Scanne Ordner: ${folder}`);

    for(let file of MODULE_MAP[folder]){
      const repaired = repairName(file);
      const path = `${folder}/${repaired}`;

      const res = await loadScript(path);

      if(!res.ok){
        ARE_LOG.push(`✖ FEHLT: ${path}`);
      } else {
        ARE_LOG.push(`✔ OK: ${path}`);
      }
    }
  }

  verifyNC2();

  ARE_LOG.push("NC² Auto‑Repair‑Engine abgeschlossen.");
  console.log("=== NC² AUTO‑REPAIR LOG ===");
  ARE_LOG.forEach(x => console.log(x));
}

// Start
NC2_AutoRepairEngine();
