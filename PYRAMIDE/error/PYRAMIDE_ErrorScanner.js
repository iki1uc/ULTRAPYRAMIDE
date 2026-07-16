const PYRAMIDE_ErrorScanner = {
    version: "1.0",
    errors: [],

    scan() {
        this.errors = [];

        this.check("ULTRA-CORE", ULTRA_CORE);
        this.check("ULTRA-ENGINE", ULTRA_ENGINE);
        this.check("NC-FUSION-ENGINE", NC_FUSION_ENGINE);

        this.check("ULTRA-SHELL", ULTRA_SHELL);
        this.check("ULTRA-FIELD", ULTRA_FIELD);
        this.check("ULTRA-SIGNAL", ULTRA_SIGNAL);

        this.check("ALLxALL-6D", ALLxALL_6D);
        this.check("ALLxALL-6E", ALLxALL_6E);
        this.check("ALLxALL-IN", ALLxALL_in);
        this.check("ALLxALL-OUT", ALLxALL_out);

        this.check("RAW-Chain.raw", RAW_Chain);
        this.check("Energie-Chain.raw", Energie_Chain);
        this.check("ULTRA-Score-6E", ULTRA_Score_6E);
        this.check("6D.edit", EDIT_6D);

        this.check("ORBIT", ORBIT);
        this.check("STATIONEN", PYRAMIDE_STATIONEN);
        this.check("OPERATOR-VISUAL", OPERATOR_VISUAL);
        this.check("HARDWARE-VISUAL", HARDWARE_VISUAL);

        this.check("META", META);
        this.check("GhostError", !META.GhostError.includes("Instabilität"));

        this.check("PYRAMIDE-AI", PYRAMIDE_AI);
        this.check("PYRAMIDE-AI-TRAIN", PYRAMIDE_AI_TRAIN);
        this.check("PYRAMIDE-AI-AUTOPILOT", PYRAMIDE_AI_AUTOPILOT);

        this.check("TECH.6E", TECH_6E);

        return this.errors;
    },

    check(name, variable) {
        if (!variable) {
            this.errors.push({
                module: name,
                level: "FATAL",
                message: `${name} fehlt`
            });
        }
    }
};
