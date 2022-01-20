import Actor from './Actor.js';

export default class Circle extends Actor {
	constructor(x = canvas.width / 2, y = 0) {
		super();
		this.x = x;
		this.y = y;
	}

	render(context) {
		context.beginPath();
		context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
		context.fill();
	}
	update() {
		if (this.y > 410) {
			this.y = -10;
		}
		this.y++;
	}
}
