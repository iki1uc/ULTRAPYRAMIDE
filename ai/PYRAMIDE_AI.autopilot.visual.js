const PYRAMIDE_AI_AUTOPILOT_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("aiAutopilotCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawAutopilot();
        console.log("PYRAMIDE-AI-AUTOPILOT-VISUAL: Aktiv");
    },

    drawAutopilot() {
        const ctx = this.ctx;
        const state = PYRAMIDE_AI_AUTOPILOT.autopilotState;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("PYRAMIDE KI – Autopilot", 20, 40);

        ctx.fillStyle = "#6cf";
        ctx.font = "14px monospace";
        ctx.fillText(`Orbit: ${state.orbit}`, 20, 80);
        ctx.fillText(`Station: ${state.station?.id}`, 20, 110);
        ctx.fillText(`Operator: ${state.operator}`, 20, 140);
        ctx.fillText(`Energy Score: ${state.energyScore}`, 20, 170);

        ctx.fillStyle = state.ghostError ? "#f33" : "#0f0";
        ctx.fillText(`GhostError: ${state.ghostError}`, 20, 200);
    }
};

window.addEventListener("load", () => PYRAMIDE_AI_AUTOPILOT_VISUAL.init());
