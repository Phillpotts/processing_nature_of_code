import P5 from "p5";

import { Walker } from './walker';

type WindowSize = {
	height: number,
	width: number;
};

document.title = "Walker";

let w: Walker;

function getWindowSize(): WindowSize {
	const canvasDiv = document.getElementById('app');
	const width = canvasDiv.clientWidth;
	const height = canvasDiv.clientHeight;
	return { width, height };
}

function setCanvasFullSize(p5: P5) {
	const canvasDiv = document.getElementById('app');
	const width = canvasDiv.clientWidth;
	const height = canvasDiv.clientHeight;
	p5.resizeCanvas(width, height);
	p5.background(255);
}

// Creating the sketch itself
const sketch = (p5: P5) => {

	p5.windowResized = () => {
		setCanvasFullSize(p5);
	};

	// The sketch setup method 
	p5.setup = () => {
		const ws = getWindowSize();
		// Creating and positioning the canvas
		const canvas = p5.createCanvas(100, 100);
		canvas.parent("app");

		// Set canvas size
		setCanvasFullSize(p5);

		// Create walker object
		w = new Walker(p5);
	};

	// The sketch draw method
	p5.draw = () => {
		w.step();
		w.display();
	};
};

new P5(sketch);