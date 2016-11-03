import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Shape } from '../../../src/Canvas/Model/Shape';

chai.use(spies);

describe('Shape', () => {

    describe('constructor()', () => {
        it('passes data to init() and setState()', (done) => {
            var data = {
                posX: 5, posY: 0, angle: 25, speed: 10, gravity: 0.1, elasticity: 0.4, friction: 0.01

            };
            var calls = 0;

            new class extends Shape {
                constructor() {
                    super(data);
                }
                init(funcData) {
                    calls++;
                    expect(funcData).to.deep.equal(data);
                }
                setState(funcData) {
                    calls++;
                    expect(funcData).to.deep.equal(data);
                }
            };

            expect(calls).to.be.equal(2);
            done();
        });
    });

    describe('getState()', () => {
        it('returns shape state', (done) => {
            var data = {
                posX: 5, posY: 0, angle: 25, speed: 10, gravity: 0.1, elasticity: 0.4, friction: 0.01

            };
            var shape = new Shape(data);

            expect(shape.getState()).to.deep.equal(data);
            done();
        });
    });

    describe('setState()', () => {
        it('sets shape state', (done) => {
            var data = {
                posX: 5, posY: 0, angle: 25, speed: 10, gravity: 0.1, elasticity: 0.4, friction: 0.01

            };
            var shape = new Shape();

            expect(shape.getState()).to.not.equal(data);
            shape.setState(data);
            expect(shape.getState()).to.deep.equal(data);

            done();
        });
    });

    describe('getParam()', () => {
        it('returns value of param', (done) => {
            var data = {
                posX: 5, posY: 0, angle: 25, speed: 10, gravity: 0.1, elasticity: 0.4, friction: 0.01

            };
            var shape = new Shape(data);

            for (let key in data) {
                expect(shape.getParam(key)).to.be.equal(data[key]);
            }

            done();
        });
    });

    describe('setParam()', () => {
        it('sets value of param', (done) => {
            var shape = new Shape();
            var key = 'key';
            var val = 'val';

            shape.setParam(key, val);
            expect(shape.getParam(key)).to.be.equal(val);

            done();
        });
    });
});
