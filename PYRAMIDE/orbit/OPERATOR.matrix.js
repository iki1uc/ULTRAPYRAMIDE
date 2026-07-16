const OPERATOR_MATRIX = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("operatorMatrixCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawMatrix();
        console.log("OPERATOR-MATRIX: Aktiv");
    },

    drawMatrix() {
        const ctx = this.ctx;
        const size = 40;
        let index = 0;

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const station = PYRAMIDE_STATIONEN.buildStation(index);
                const op = station.operator?.NCOperator || "?";

                ctx.fillStyle = "#222";
                ctx.fillRect(col * size, row * size, size, size);

                ctx.fillStyle = "#0f0";
                ctx.font = "20px monospace";
                ctx.fillText(op, col * size + 10, row * size + 25);

                index++;
            }
        }
    }
};

window.addEventListener("load", () => OPERATOR_MATRIX.init());
