import { Ball } from './Model/Ball';

export class Canvas
{
    /**
     * @param {Element} canvas
     * @param {Loop} loop
     */
    constructor(canvas, loop)
    {
        if (canvas.nodeName !== 'CANVAS') {
            throw new Error('Passed element which is not canvas.');
        }

        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.objs = [];

        loop.onTick(this.draw.bind(this));
    }

    /**
     * Return canvas element.
     *
     * @returns {Element}
     */
    getCanvas()
    {
        return this.canvas;
    }

    /**
     * Return canvas' context.
     *
     * @returns {Element}
     */
    getContext()
    {
        return this.context;
    }

    /**
     * @param {*} shape
     */
    addElement(shape)
    {
        this.objs.push(shape);
    }

    /**
     *
     */
    draw()
    {
        var canvas = this.canvas;
        var ctx = this.context;
        var w = canvas.width;
        var h = canvas.height;

        // Clean
        ctx.clearRect(0, 0, w, h);

        // Update Shapes
        this.objs.forEach((shape) => {
            shape.update(canvas);
        });

        // Draw Shapes
        this.objs.forEach((shape) => {
            shape.draw(ctx);
        });
    }
}
