export class Shape {

    /**
     * @param {{ posX: Number, posY: Number, angle: Number, speed: Number, gravity: Number, elasticity: Number, friction: Number }} data
     */
    constructor(data = { posX: 0, posY: 0, angle: 0, speed: 0, gravity: 0, elasticity: 0, friction: 0 })
    {
        this.init(data);
        this.setState(data);
    }

    /**
     * Get the state of the shape.
     *
     * @returns {{
     *      posX: Number,
     *      posY: Number,
     *      velX: Number,
     *      velY: Number,
     *      speed: Number,
     *      gravity: Number,
     *      elasticity: Number,
     *      friction: Number
     * }}
     */
    getState()
    {
        return this.state;
    }

    /**
     * Set the state of the shape.
     *
     * @param {{
     *      posX: Number,
     *      posY: Number,
     *      velX: Number,
     *      velY: Number,
     *      speed: Number,
     *      gravity: Number,
     *      elasticity: Number,
     *      friction: Number
     * }} state
     */
    setState(state)
    {
        this.state = state;
    }

    /**
     * Get the specified param by key.
     *
     * @param {String} param
     * @returns {*}
     */
    getParam(param)
    {
        return this.state[param];
    }

    /**
     * Set a value of specified param by key.
     *
     * @param param
     * @param value
     */
    setParam(param, value)
    {
        this.state[param] = value;
    }

    /**
     * Init shape data.
     *
     * @param {*} data
     */
    init(data)
    {
        // to be inherited
    }

    /**
     * Update shape position.
     *
     * @param {Element} canvas
     */
    update(canvas)
    {
        // to be inherited
    }

    /**
     * Draw shape.
     *
     * @param {Element} ctx
     */
    draw(ctx)
    {
        // to be inherited
    }
}
