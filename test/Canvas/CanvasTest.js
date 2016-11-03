import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { Loop } from '../../src/Loop/Loop';
import { Canvas } from '../../src/Canvas/Canvas';

chai.use(spies);

describe('Canvas', () => {

    describe('constructor()', () => {
        it('throws exception when element passed is not canvas', (done) => {
            var el = {};
            var loop = new Loop();

            expect(function() {
                new Canvas(el, loop);
            }).to.throw(Error, 'Passed element which is not canvas.');

            done();
        });

        it('applies tick listener to loop', (done) => {
            var el = {
                nodeName: 'CANVAS', getContext: () => {}
            };
            var loop = new Loop();
            var spy  = chai.spy.on(loop, 'onTick');

            new Canvas(el, loop);

            expect(spy).to.have.been.called.once();

            done();
        });
    });

    describe('getCanvas()', () => {
        it('returns passed canvas', (done) => {
            var el = {
                nodeName: 'CANVAS', getContext: () => {}
            };
            var loop = new Loop();
            var canvas = new Canvas(el, loop);

            expect(canvas.getCanvas()).to.deep.equal(el);

            done();
        });
    });

    describe('getContext()', () => {
        it('returns context of passed canvas', (done) => {
            var context = { someOption: 'someValue' };
            var el = {
                nodeName: 'CANVAS', getContext: () => { return context; }
            };
            var loop = new Loop();
            var canvas = new Canvas(el, loop);

            expect(canvas.getContext()).to.deep.equal(context);

            done();
        });
    });

    describe('draw()', () => {
        it('calls update() and draw() for each shape passed', (done) => {
            var el = {
                nodeName: 'CANVAS', getContext: () => { return new class { clearRect() {} }; }, width: 0, height: 0
            };

            var loop = new Loop();
            var canvas = new Canvas(el, loop);

            var updateSpy = chai.spy();
            var drawSpy = chai.spy();

            canvas.addElement({
                update: updateSpy, draw: drawSpy
            });

            canvas.draw();

            expect(updateSpy).to.have.been.called.once();
            expect(drawSpy).to.have.been.called.once();

            done();
        });
    });

});
