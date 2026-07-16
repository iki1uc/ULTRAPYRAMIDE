const PYRAMIDE_AI_AUTOPILOT_STRATEGY = {
    level: 9, // ULTRA-Pilot

    chooseStrategy() {
        switch(this.level) {
            case 1: return "RAW-Stabilisierung";
            case 2: return "Energie-Optimierung";
            case 3: return "Orbit-Navigation";
            case 4: return "Operator-Matching";
            case 5: return "Stationen-Routing";
            case 6: return "GhostError-Block";
            case 7: return "TECH6E-Reparatur";
            case 8: return "KI-Analyse";
            case 9: return "ULTRA-Autopilot";
        }
    }
};
