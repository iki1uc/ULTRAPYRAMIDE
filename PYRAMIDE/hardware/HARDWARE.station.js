const HARDWARE_STATION = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("hardwareStationCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawStations();
        console.log("HARDWARE-STATION: Aktiv");
    },

    drawStations() {
        const ctx = this.ctx;
        const size = 40;
        let index = 0;

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 16; col++) {
                const station = PYRAMIDE_STATIONEN.buildStation(index);
                const symbol = station.operator?.NCOperator || "?";

                ctx.fillStyle = "#222";
                ctx.fillRect(col * size, row * size, size, size);

                ctx.fillStyle = "#0f0";
                ctx.font = "20px monospace";
                ctx.fillText(symbol, col * size + 10, row * size + 25);

                index++;
            }
        }
    }
};

window.addEventListener("load", () => HARDWARE_STATION.init());
