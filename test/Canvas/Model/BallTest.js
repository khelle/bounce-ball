import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Ball } from '../../../src/Canvas/Model/Ball';

chai.use(spies);

describe('Ball', () => {

    describe('update()', () => {
        it('updates params of passed data', (done) => {
            var data = {
                posX: 10, posY: 5, angle: 45, speed: 10, gravity: 0.1, elasticity: 0.4, friction: 0.01
            };

            var ball = new Ball(data);
            var canvas = {
                width: 100, height: 100
            };

            ball.update(canvas);
            expect(ball.getState()).to.deep.equal(data);

            done();
        });
    });
});
