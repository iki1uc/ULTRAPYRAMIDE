PYRAMIDE_STATIONEN.calculateConflicts = function() {
    let totalConflict = 0;

    this.levels.forEach((lvl) => {
        const conflict = parseInt(lvl.conflict || 0);
        totalConflict += conflict;
    });

    // Normierung auf 0–100
    const fractalLevel = Math.min(100, totalConflict / this.levels.length);

    // Radar‑Engine.fit liest diesen Wert
    window.FRACTAL = { LEVEL: fractalLevel };

    console.log("Fraktal-Level gesetzt:", fractalLevel);
};
