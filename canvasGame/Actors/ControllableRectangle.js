import Actor from './Actor.js';

export default class ControllableRectangle extends Actor {
    constructor() {
        super();
        this.x = 185;
        this.y = 185;
        let that = this;
        document.addEventListener('keypress', (key) => {
            if (key.key === 'w') {
                that.y -= 20;
                if (that.y < 0) {
                    that.y = 0;
                }
            } else if (key.key === 's') {
                that.y += 20;
                if (that.y > 370) {
                    that.y = 370;
                }
            } else if (key.key === 'a') {
                that.x -= 20;
                if (that.x < 0) {
                    that.x = 0;
                }
            } else if (key.key === 'd') {
                that.x += 20;
                if (that.x > 370) {
                    that.x = 370;
                }
            }

        });
    }

    render(context) {
        context.fillRect(this.x, this.y, 30, 30);
    }
    update() {}
}