// ------------------------------------------------------
// CSV Loader
// ------------------------------------------------------
async function loadCSV(path) {
    const response = await fetch(path);
    const text = await response.text();
    const lines = text.trim().split("\n");
    const headers = lines.shift().split(",");

    return lines.map(line => {
        const values = line.split(",");
        const obj = {};
        headers.forEach((h, i) => obj[h.trim()] = values[i].trim());
        return obj;
    });
}

// ------------------------------------------------------
// Station Data Loader
// ------------------------------------------------------
async function loadStationData() {
    const levels = await loadCSV("station/level-pyramiden-7.csv");
    const hardware = await loadCSV("station/hardware-form-9.csv");
    const operators = await loadCSV("station/nc-modul-aufgabe-8.csv");

    levels.forEach(l => PYRAMIDE_STATIONEN.addLevel(l));
    hardware.forEach(h => PYRAMIDE_STATIONEN.addHardware(h));
    operators.forEach(o => PYRAMIDE_STATIONEN.addOperator(o));

    console.log("PYRAMIDE-STATIONEN: Daten geladen");

    // Konflikte berechnen → Radar bekommt echte Werte
    PYRAMIDE_STATIONEN.calculateConflicts();
}

// Start
loadStationData();
