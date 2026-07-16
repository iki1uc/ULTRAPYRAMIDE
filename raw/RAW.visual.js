const RAW_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("rawCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawRaw();
        console.log("RAW-VISUAL: Aktiv");
    },

    drawRaw() {
        const ctx = this.ctx;

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("RAW-Chain.raw", 20, 40);

        ctx.fillStyle = "#6cf";
        ctx.fillText(RAW_Chain.raw || "RAW", 20, 70);

        ctx.fillStyle = "#0f0";
        ctx.fillText("RAW Stationen", 20, 120);

        ctx.fillStyle = "#6cf";
        ctx.fillText(`${PYRAMIDE_STATIONEN.levels.length} Level`, 20, 150);
    }
};

window.addEventListener("load", () => RAW_VISUAL.init());
