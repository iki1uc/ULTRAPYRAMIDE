PYRAMIDE_STATIONEN.calculateConflicts = function() {
    let totalConflict = 0;

    this.levels.forEach((lvl) => {
        const conflict = parseInt(lvl.conflict || 0);
        totalConflict += conflict;
    });

    const fractalLevel = Math.min(100, totalConflict / this.levels.length);

    window.FRACTAL = { LEVEL: fractalLevel };

    console.log("Fraktal-Level:", fractalLevel);
};
