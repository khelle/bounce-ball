export class Loop
{
    /**
     *
     */
    constructor()
    {
        this.loopTimer = null;
        this.loopFuncs = [];
    }

    /**
     * Add function to execute per tick.
     *
     * @param {Function} func
     */
    onTick(func)
    {
        this.loopFuncs.push(func.bind(this));
    }

    /**
     * Perform one iteration of the loop.
     */
    tick()
    {
        this.loopTimer = setTimeout(this.tick.bind(this), 20);
        this.loopFuncs.forEach(function(func) {
            func();
        });
    }

    /**
     * Start the loop.
     */
    start()
    {
        if (this.loopTimer === null) {
            this.loopTimer = setTimeout(this.tick.bind(this), 20);
        }
    }

    /**
     * Stop the loop.
     */
    stop()
    {
        if (this.loopTimer !== null) {
            clearTimeout(this.loopTimer);
        }
    }
}
