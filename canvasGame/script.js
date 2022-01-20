import Rectangle from './Actors/Rectangle.js';
import ControllableRectangle from './Actors/ControllableRectangle.js';
import Circle from './Actors/Circle.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const actors = [];

actors.push(new Rectangle(canvas.width / 2, canvas.height / 2));
actors.push(new ControllableRectangle());
actors.push(new Circle());

setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    actors.forEach((actor) => {
        actor.update();
        actor.render(context);
    });
}, 10);