const PYRAMIDE_StabilityMonitor = {
    version: "1.0",
    score: 0,
    status: "UNKNOWN",
    report: {},

    collect() {
        this.report = {
            orbit: ORBIT ? "OK" : "FAIL",
            stations: PYRAMIDE_STATIONEN ? "OK" : "FAIL",
            operator: OPERATOR_VISUAL ? "OK" : "FAIL",
            hardware: HARDWARE_VISUAL ? "OK" : "FAIL",
            raw: RAW_Chain.raw ? "OK" : "FAIL",
            energy: Energie_Chain.raw ? "OK" : "FAIL",
            meta: META.GhostError.includes("Instabilität") ? "FAIL" : "OK",
            tech6e: TECH_6E ? "OK" : "FAIL",
            autopilot: PYRAMIDE_AI_AUTOPILOT ? "OK" : "FAIL"
        };
    },

    analyze() {
        let value = 0;

        Object.values(this.report).forEach(v => {
            value += (v === "OK") ? 10 : -10;
        });

        this.score = Math.max(0, Math.min(100, value));
        this.status =
            this.score > 80 ? "STABLE" :
            this.score > 50 ? "UNSTABLE" :
            this.score > 20 ? "CRITICAL" :
            "FATAL";
    },

    update() {
        this.collect();
        this.analyze();
    },

    loop(interval = 2000) {
        setInterval(() => this.update(), interval);
    }
};
