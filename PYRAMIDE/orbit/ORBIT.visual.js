const ORBIT_VISUAL = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("orbitCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawAll();
        console.log("ORBIT-VISUAL: Aktiv");
    },

    drawOrbit(n, x, y) {
        const ctx = this.ctx;

        // Orbit-Kreis
        ctx.beginPath();
        ctx.arc(x, y, 40 + n * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `hsl(${n * 40}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Orbit-ID
        ctx.fillStyle = "#0f0";
        ctx.fillText(`O${n}`, x - 10, y + 5);

        // Orbit-Station
        const station = ORBIT.list[n - 1];
        ctx.fillStyle = "#6cf";
        ctx.fillText(station.geometry, x - 20, y + 20);
    },

    drawAll() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let x = 100;
        let y = 100;

        for (let n = 1; n <= 9; n++) {
            this.drawOrbit(n, x, y);
            x += 120;
            if (x > 900) {
                x = 100;
                y += 150;
            }
        }
    }
};

window.addEventListener("load", () => ORBIT_VISUAL.init());
