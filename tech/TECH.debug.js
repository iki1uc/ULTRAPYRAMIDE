const TECH_DEBUG = {
    check(name, variable) {
        return variable
            ? `${name}: OK`
            : `${name}: FEHLT`;
    },

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
            energy: this.check("Energie-Chain.raw", Energie_Chain),
            raw: this.check("RAW-Chain.raw", RAW_Chain),
            score: this.check("ULTRA-Score-6E", ULTRA_Score_6E),
            edit: this.check("6D.edit", EDIT_6D),
            tech: this.check("TECH.6E", TECH_6E)
        };
    }
};
