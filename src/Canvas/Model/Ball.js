import { Shape } from './Shape';

export class Ball extends Shape
{
    /**
     * @override
     */
    constructor(data)
    {
        super(data);
    }

    /**
     * @override
     */
    init(data)
    {
        // translate angle to vector
        var radians = data.angle * Math.PI / 180;
        data.velX = Math.cos(radians) * data.speed;
        data.velY = Math.sin(radians) * data.speed;
    }

    /**
     * @override
     */
    update(canvas)
    {
        // get the current state of the ball
        var { posX, posY, velX, velY, gravity, elasticity, friction } = this.getState();

        // apply friction and gravity
        velX -= velX*friction;
        velY += gravity;

        // make sure the friction won't start pushing the ball in reverse direction
        if (velX < friction && velX > -friction) {
            velX = 0;
        }

        // check vertical borders restrictions
        if (posX+6 >= canvas.width) {
            posX = canvas.width - 6;
            velX = -velX;
        }
        else if (posX <= 0) {
            posX = 0;
            velX = -velX;
        }

        // check horizontal borders restrictions
        if (posY+6 >= canvas.height) {
            posY = canvas.height - 6;
            velY = -velY * elasticity;
        }
        else if (posY <= 0) {
            posY = 0;
            velY = -velY * elasticity;
        }

        // set the new velocity
        this.setParam('velX', velX);
        this.setParam('velY', velY);

        // calculate new position
        posX += velX;
        posY += velY;

        // persist new position
        this.setParam('posX', posX);
        this.setParam('posY', posY);
    }

    /**
     * @override
     */
    draw(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.getParam('posX'), this.getParam('posY'), 3, 0, Math.PI*2, false);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }
}
