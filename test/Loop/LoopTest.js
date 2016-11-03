import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Loop } from '../../src/Loop/Loop';

chai.use(spies);

describe('Loop', () => {

    describe('start()', () => {
        it('should start the loop', (done) => {
            var loop = new Loop();
            var spy = chai.spy.on(loop, 'tick');

            loop.start();

            setTimeout(() => {
                expect(spy).to.have.been.called.min(1);
                done();
            }, 30);
        });
    });

    describe('stop()', () => {
        it('should stop the loop', (done) => {
            var loop = new Loop();
            var spy = chai.spy.on(loop, 'tick');

            loop.start();
            loop.stop();

            setTimeout(() => {
                expect(spy).to.have.been.called.exactly(0);
                done();
            }, 30);
        });
    });

    describe('tick()', () => {
        it('should execute each callback once per tick', (done) => {
            var loop = new Loop();
            var spy = chai.spy();

            loop.onTick(spy);

            loop.tick();
            loop.tick();

            expect(spy).to.have.been.called.exactly(2);
            done();
        });
    });

    describe('onTick()', () => {
        it('should add function to be executed on tick', (done) => {
            var loop = new Loop();
            var spy = chai.spy();

            loop.onTick(spy);
            loop.tick();

            expect(spy).to.have.been.called.exactly(1);
            done();
        });
    });
});
