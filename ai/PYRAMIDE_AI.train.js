const PYRAMIDE_AI_TRAIN = {
    version: "1.0",
    status: "READY",
    samples: [],

    collectOrbitSamples() {
        ORBIT.list.forEach(o => {
            this.samples.push({
                type: "orbit",
                id: o.id,
                geometry: o.geometry,
                energy: o.energy,
                raw: o.raw,
                station: o.station.id
            });
        });
    },

    collectStationSamples() {
        PYRAMIDE_STATIONEN.buildAll().forEach(s => {
            this.samples.push({
                type: "station",
                id: s.id,
                geometry: s.geometry,
                operator: s.operator?.NCOperator || "?",
                raw: s.raw,
                energy: s.energy
            });
        });
    },

    collectOperatorSamples() {
        PYRAMIDE_STATIONEN.operators.forEach(op => {
            this.samples.push({
                type: "operator",
                operator: op.NCOperator,
                form: op.HardwareForm
            });
        });
    },

    collectEnergySamples() {
        this.samples.push({
            type: "energy",
            raw: RAW_Chain.raw,
            energy: Energie_Chain.raw,
            score: ULTRA_Score_6E.score
        });
    },

    collectMetaSamples() {
        this.samples.push({
            type: "meta",
            xARG: META.xARG,
            GhostError: META.GhostError,
            SINN7: META.SINN7
        });
    },

    collectAll() {
        this.samples = [];
        this.collectOrbitSamples();
        this.collectStationSamples();
        this.collectOperatorSamples();
        this.collectEnergySamples();
        this.collectMetaSamples();
        console.log("PYRAMIDE KI: Trainingsdaten gesammelt:", this.samples.length);
    }
};
