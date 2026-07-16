
const TECH6E_AUTOREPAIR_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("autorepairCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw();
    },

    draw() {
        const ctx = this.ctx;
        const log = TECH6E_AUTOREPAIR.log.slice(-10);

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("TECH6E Autorepair Log", 20, 40);

        let y = 80;

        log.forEach(entry => {
            ctx.fillStyle = "#6cf";
            ctx.fillText(`${entry.module}: ${entry.fix}`, 20, y);
            y += 25;
        });
    }
};

window.addEventListener("load", () => TECH6E_AUTOREPAIR_VISUAL.init());
