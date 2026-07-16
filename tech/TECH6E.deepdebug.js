const TECH6E_DEEPDEBUG = {
    report() {
        return {
            core: this.check("ULTRA-CORE", ULTRA_CORE),
            engine: this.check("ULTRA-ENGINE", ULTRA_ENGINE),
            fusion: this.check("NC-FUSION-ENGINE", NC_FUSION_ENGINE),

            shell: this.check("ULTRA-SHELL", ULTRA_SHELL),
            field: this.check("ULTRA-FIELD", ULTRA_FIELD),
            signal: this.check("ULTRA-SIGNAL", ULTRA_SIGNAL),

            all6D: this.check("ALLxALL-6D", ALLxALL_6D),
            all6E: this.check("ALLxALL-6E", ALLxALL_6E),
            in: this.check("ALLxALL-IN", ALLxALL_in),
            out: this.check("ALLxALL-OUT", ALLxALL_out),

            rawChain: this.check("RAW-Chain.raw", RAW_Chain),
            energyChain: this.check("Energie-Chain.raw", Energie_Chain),
            score6E: this.check("ULTRA-Score-6E", ULTRA_Score_6E),
            edit6D: this.check("6D.edit", EDIT_6D),

            orbit: this.check("ORBIT", ORBIT),
            stations: this.check("STATIONEN", PYRAMIDE_STATIONEN),
            operator: this.check("OPERATOR-VISUAL", OPERATOR_VISUAL),
            hardware: this.check("HARDWARE-VISUAL", HARDWARE_VISUAL),

            meta: this.check("META", META),
            ghostError: META.GhostError.includes("Instabilität"),

            ai: this.check("PYRAMIDE-AI", PYRAMIDE_AI),
            aiTrain: this.check("PYRAMIDE-AI-TRAIN", PYRAMIDE_AI_TRAIN),
            aiAutopilot: this.check("PYRAMIDE-AI-AUTOPILOT", PYRAMIDE_AI_AUTOPILOT),

            tech6E: this.check("TECH.6E", TECH_6E)
        };
    },

    check(name, variable) {
        return variable ? `${name}: OK` : `${name}: FEHLT`;
    }
};
