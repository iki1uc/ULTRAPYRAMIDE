const ENERGY_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("energyCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawEnergy();
        console.log("ENERGY-VISUAL: Aktiv");
    },

    drawEnergy() {
        const ctx = this.ctx;

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("Energie-Chain.raw", 20, 40);

        ctx.fillStyle = "#6cf";
        ctx.fillText(Energie_Chain.raw || "RAW", 20, 70);

        ctx.fillStyle = "#0f0";
        ctx.fillText("RAW-Chain.raw", 20, 120);

        ctx.fillStyle = "#6cf";
        ctx.fillText(RAW_Chain.raw || "RAW", 20, 150);

        ctx.fillStyle = "#0f0";
        ctx.fillText("ULTRA-Score-6E", 20, 200);

        ctx.fillStyle = "#6cf";
        ctx.fillText(ULTRA_Score_6E.score || "0", 20, 230);
    }
};

window.addEventListener("load", () => ENERGY_VISUAL.init());
