const PYRAMIDE_STATIONEN = {
    version: "1.0",
    total: 128,
    levels: [],
    hardware: [],
    operators: [],
    ready: false,

    init() {
        console.log("PYRAMIDE-STATIONEN: Initialisiert");
        this.ready = true;
    },

    addLevel(level) {
        this.levels.push(level);
    },

    addHardware(hw) {
        this.hardware.push(hw);
    },

    addOperator(op) {
        this.operators.push(op);
    },

    buildStation(index) {
        return {
            id: index,
            level: this.levels[index] || null,
            hardware: this.hardware[index] || null,
            operator: this.operators[index] || null,
            orbit: `O${(index % 9) + 1}`,
            geometry: this.hardware[index]?.form || "UNKNOWN",
            raw: this.levels[index]?.raw || "RAW",
            status: "ACTIVE"
        };
    },

    buildAll() {
        const stations = [];
        for (let i = 0; i < this.total; i++) {
            stations.push(this.buildStation(i));
        }
        return stations;
    }
};

PYRAMIDE_STATIONEN.init();
