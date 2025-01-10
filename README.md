# Biometric Fractal Generator

The **Biometric Fractal Generator** is an interactive web application that visualizes stunning fractals based on biometric-inspired inputs. It uses HTML, CSS, and JavaScript to generate dynamic fractal patterns, creating a mesmerizing experience.

## Features
- **Dynamic Fractal Generation**: Users can input biometric values (e.g., heart rate), which dynamically influence the zoom and iteration of the fractals.
- **Responsive Design**: The interface is styled with Tailwind CSS and optimized for seamless interaction.
- **Glassmorphism UI**: The design features a modern glassmorphic aesthetic with smooth animations and an engaging user experience.
- **Customizable Colors**: Fractals are rendered with a unique base color scheme to match the theme.

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling with a custom **Catppuccin Mocha** theme for visual aesthetics.
- **JavaScript**: Logic for generating fractals based on user input.
- **Tailwind CSS**: Utility-first framework for responsive design and styling.

## Installation and Setup
1. Clone the repository or download the code.
2. Either download the live server extension and start one
3. No additional dependencies or setup are required.

## Usage
1. Enter a biometric value (e.g., heart rate) in the input field. Recommended range: **60 - 120**.
2. Click the **"Generate Fractal"** button.
3. View the dynamically generated fractal on the canvas.

## How It Works
- The user’s biometric value determines:
  - **Zoom level**: Higher biometric values zoom in on the fractal.
  - **Iterations**: More iterations result in more complex and detailed fractal patterns.
- The **Mandelbrot set** is used to calculate and render the fractal on an HTML5 `<canvas>`.


## Customization
To modify the fractal generation parameters:
- Adjust the `zoom` and `iterations` calculations in the `generateFractal()` function.
- Modify the base color in the `baseColor` object for a different color palette.

## Acknowledgements
- **Catppuccin Theme**: Inspiration for the visual style.
- **Glassmorphism**: Another modern like visual style that I took inspiration from.
- **Mandelbrot Algorithm**: Basis for fractal generation.
- **Tailwind CSS**: For rapid styling and responsiveness.
