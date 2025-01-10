let zoomLevel = 1;
let xCenter = 0;
let yCenter = 0;

const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('wheel', handleZoom);
canvas.addEventListener('mousedown', handlePanStart);
canvas.addEventListener('mousemove', handlePan);
canvas.addEventListener('mouseup', handlePanEnd);

let isPanning = false;
let startPan = { x: 0, y: 0 };

function generateFractal() {
    const biometricValue = parseInt(document.getElementById('biometricInput').value) || 60;

    const zoom = zoomLevel + (biometricValue - 60) / 40;
    const iterations = Math.floor(50 + (biometricValue - 60) * 2);

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);

    const xRange = 3.0 / zoom;
    const yRange = 3.0 / zoom;
    const xMin = xCenter - xRange / 2;
    const xMax = xCenter + xRange / 2;
    const yMin = yCenter - yRange / 2;
    const yMax = yCenter + yRange / 2;

    const xStep = (xMax - xMin) / width;
    const yStep = (yMax - yMin) / height;

    const baseColor = { r: 30, g: 30, b: 46 };

    for (let py = 0; py < height; py++) {
        for (let px = 0; px < width; px++) {
            const x0 = xMin + px * xStep;
            const y0 = yMin + py * yStep;

            let x = 0;
            let y = 0;
            let iteration = 0;

            while (x * x + y * y <= 4 && iteration < iterations) {
                const xTemp = x * x - y * y + x0;
                y = 2 * x * y + y0;
                x = xTemp;
                iteration++;
            }

            const colorIntensity = iteration === iterations ? 0 : (iteration * 255 / iterations);

            const pixelIndex = (py * width + px) * 4;

            imgData.data[pixelIndex] = baseColor.r + colorIntensity;
            imgData.data[pixelIndex + 1] = baseColor.g + colorIntensity;
            imgData.data[pixelIndex + 2] = baseColor.b + colorIntensity;
            imgData.data[pixelIndex + 3] = 200;
        }
    }

    ctx.putImageData(imgData, 0, 0);
}

function handleZoom(event) {
    event.preventDefault();

    const mouseX = event.offsetX / canvas.width;
    const mouseY = event.offsetY / canvas.height;

    const zoomFactor = event.deltaY < 0 ? 1.2 : 0.8;
    zoomLevel *= zoomFactor;

    const xRange = 3.0 / zoomLevel;
    const yRange = 3.0 / zoomLevel;

    xCenter += (mouseX - 0.5) * xRange * (1 - 1 / zoomFactor);
    yCenter += (mouseY - 0.5) * yRange * (1 - 1 / zoomFactor);

    generateFractal();
}

function handlePanStart(event) {
    isPanning = true;
    startPan.x = event.offsetX;
    startPan.y = event.offsetY;
}

function handlePan(event) {
    if (!isPanning) return;

    const dx = (startPan.x - event.offsetX) / canvas.width * 3.0 / zoomLevel;
    const dy = (startPan.y - event.offsetY) / canvas.height * 3.0 / zoomLevel;

    xCenter += dx;
    yCenter -= dy;

    startPan.x = event.offsetX;
    startPan.y = event.offsetY;

    generateFractal();
}

function handlePanEnd() {
    isPanning = false;
}
