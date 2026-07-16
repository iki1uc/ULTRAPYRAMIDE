const META = {
    xARG: "Fehleranalyse(D12)",
    GhostError: "Instabilität(E∞)",
    SINN7: "MetaRegeln(7)",

    status: "ACTIVE",

    info() {
        return {
            xARG: this.xARG,
            GhostError: this.GhostError,
            SINN7: this.SINN7
        };
    }
};
