const TECH6E_DEEPDEBUG_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("tech6eDeepCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw();
    },

    draw() {
        const ctx = this.ctx;
        const report = TECH6E_DEEPDEBUG.report();

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("TECH.6E Deep Debug", 20, 40);

        let y = 80;
        Object.entries(report).forEach(([key, value]) => {
            ctx.fillStyle = value.includes("FEHLT") ? "#f33" : "#6cf";
            ctx.fillText(`${key}: ${value}`, 20, y);
            y += 25;
        });
    }
};

window.addEventListener("load", () => TECH6E_DEEPDEBUG_VISUAL.init());
