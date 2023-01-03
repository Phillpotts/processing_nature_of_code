import P5 from "p5";

type WindowSize = {
	height: number,
	width: number;
};

document.title = "Seed";

let randomCounts: number[];

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

		// Create an number array of size 10 with default values of 0
		randomCounts = new Array<number>(10).fill(0);
	};

	// The sketch draw method
	p5.draw = () => {

		p5.background(255);
		let index: number = parseInt(p5.random(randomCounts.length) + '');
		randomCounts[index]++;

		p5.stroke(0);
		p5.fill(175);
		let w: number = p5.width / randomCounts.length;
		for (let x = 0; x < randomCounts.length; x++) {
			p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
		}
	};
};

new P5(sketch);