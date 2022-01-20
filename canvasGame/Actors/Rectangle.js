import Actor from './Actor.js';

export default class Rectangle extends Actor {
	constructor(x = 10, y = 10) {
		super();
		this.x = x;
		this.y = y;
	}

	render(context) {
		context.fillRect(this.x, this.y, 10, 10);
	}
	update() {
		if (this.direction === -1) {
			this.x++;
		} else {
			this.x--;
		}

		if (this.x > 390) {
			this.direction = 1;
			this.x = 390;
		} else if (this.x < 0) {
			this.direction = -1;
			this.x = 0;
		}
	}
}
