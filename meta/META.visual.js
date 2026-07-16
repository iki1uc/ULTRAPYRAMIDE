const META_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("metaCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawMeta();
        console.log("META-VISUAL: Aktiv");
    },

    drawMeta() {
        const ctx = this.ctx;

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("xARG", 20, 40);
        ctx.fillStyle = "#6cf";
        ctx.fillText(META.xARG, 20, 70);

        ctx.fillStyle = "#0f0";
        ctx.fillText("GhostError", 20, 120);
        ctx.fillStyle = "#f33";
        ctx.fillText(META.GhostError, 20, 150);

        ctx.fillStyle = "#0f0";
        ctx.fillText("7SINN", 20, 200);
        ctx.fillStyle = "#6cf";
        ctx.fillText(META.SINN7, 20, 230);
    }
};

window.addEventListener("load", () => META_VISUAL.init());
