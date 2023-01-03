import P5 from "p5";

export class Walker {

    private p5: P5;
    y: number;
    x: number;

    constructor(p5: P5) {
        this.p5 = p5;
        this.x = p5.width / 2;
        this.y = p5.height / 2;
    }

    display() {
        this.p5.stroke(0);
        this.p5.point(this.x, this.y);
    }

    step() {
        const step_x = this.p5.random(-1, 1) + .1; // adding .1 to make the walker more likely to move right.
        const step_y = this.p5.random(-1, 1) + .1; // adding .1 to make the walker more likely to move down.
        this.x += step_x > 1.0 ? 1.0 : step_x; // make sure the move is never more than plus 1.
        this.y += step_y > 1.0 ? 1.0 : step_y; // make sure the move is never more than plus 1.
    }
}