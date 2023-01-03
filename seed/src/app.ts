import P5 from "p5";

type WindowSize = {
	height: number,
	width: number;
};

document.title = "Seed";

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
	p5.background("white");
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
	};

	// The sketch draw method
	p5.draw = () => {

		p5.background(200);

		if (p5.mouseIsPressed) {
			p5.fill(0);
		} else {
			p5.fill(255);
		}

		p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);

	};
};

new P5(sketch);