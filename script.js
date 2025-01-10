function generateFractal() {
    const biometricValue = parseInt(document.getElementById('biometricInput').value) || 60;

    const canvas = document.getElementById('fractalCanvas');
    const ctx = canvas.getContext('2d');

    const zoom = 1 + (biometricValue - 60) / 40;
    const iterations = Math.floor(50 + (biometricValue - 60) * 2);

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);

    const xMin = -2.0 / zoom;
    const xMax = 1.0 / zoom;
    const yMin = -1.5 / zoom;
    const yMax = 1.5 / zoom;

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