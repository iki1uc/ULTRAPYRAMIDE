const ErrorScannerVisual = {
    canvas: null,
    ctx: null,

    init() {
        this.canvas = document.getElementById("errorCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.draw();
    },

    draw() {
        const ctx = this.ctx;
        const errors = PYRAMIDE_ErrorScanner.scan();

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = "20px monospace";
        ctx.fillText("PYRAMIDE Fehler-Scanner", 20, 40);

        let y = 80;

        errors.forEach(err => {
            const level = ErrorClassifier.classify(err);

            ctx.fillStyle =
                level.includes("FATAL") ? "#f33" :
                level.includes("CRITICAL") ? "#f90" :
                level.includes("WARNING") ? "#ff0" :
                "#6cf";

            ctx.fillText(`${level} – ${err.module}: ${err.message}`, 20, y);
            y += 25;
        });
    }
};

window.addEventListener("load", () => ErrorScannerVisual.init());
