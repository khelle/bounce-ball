import { Loop } from './Loop/Loop';
import { Canvas } from './Canvas/Canvas';
import { Ball } from './Canvas/Model/Ball';

class App
{
    /**
     * @param {Array} args
     */
    constructor(args)
    {
        var loop = new Loop();
        var canvas = new Canvas(args, loop);
        var context = canvas.getContext();

        canvas.getCanvas().addEventListener(
            'click',
            (e) => {
                canvas.addElement.call(canvas, new Ball({
                    posX: e.pageX,
                    posY: e.pageY,
                    angle: Math.floor(-Math.random()*140-20),
                    speed: Math.floor(2+Math.random()*8),
                    gravity: 0.1,
                    elasticity: 0.4,
                    friction: 0.01
                }));
            },
            false
        );

        loop.start();
    }
}

/**
 * Run application after everything is loaded.
 */
window.addEventListener('load', () => {

    var canvas = document.getElementById('playground');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    window.app = new App(canvas);

}, false);
