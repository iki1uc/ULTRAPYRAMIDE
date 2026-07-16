const PYRAMIDE_StabilityMonitorVisual = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("stabilityCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw();
    },

    draw() {
        const ctx = this.ctx;
        const score = PYRAMIDE_StabilityMonitor.score;
        const status = PYRAMIDE_StabilityMonitor.status;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("PYRAMIDE Stabilitäts-Monitor", 20, 40);

        ctx.fillStyle =
            status === "STABLE" ? "#0f0" :
            status === "UNSTABLE" ? "#ff0" :
            status === "CRITICAL" ? "#f90" :
            "#f33";

        ctx.font = "18px monospace";
        ctx.fillText(`Status: ${status}`, 20, 80);
        ctx.fillText(`Score: ${score}`, 20, 110);

        let y = 160;
        Object.entries(PYRAMIDE_StabilityMonitor.report).forEach(([key, value]) => {
            ctx.fillStyle = value === "OK" ? "#6cf" : "#f33";
            ctx.fillText(`${key}: ${value}`, 20, y);
            y += 25;
        });
    }
};

window.addEventListener("load", () => PYRAMIDE_StabilityMonitorVisual.init());
