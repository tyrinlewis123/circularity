"use strict"

// mocha.setup('bdd');
const window = require('../test/windowMock.js');
const draw = window.opspark.draw;
const physikz = window.opspark.racket.physikz;
const view = window.opspark.view;

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();


describe('Circularity', function(){
       it('circularity variables and functions should exist', function(){
        should.exist(draw);
        should.exist(physikz);
        should.exist(app);
        should.exist(canvas);
        should.exist(view);
        should.exist(fps);
        should.exist(circle);
        should.exist(circles);
        should.exist(update);   
        should.exist(drawCircle);
        should.exist(checkCircleBounds);    
      });

      it('TODO 2: should create a function to draw a circle', function() {
        expect(drawCircle).to.be.a('function', 'drawCircle should be a function');
        sinon.spy(draw, 'randomCircleInArea');
        sinon.spy(physikz, 'addRandomVelocity');
        sinon.spy(view, 'addChild');

        var currentCircleID = window.getCircleID();
        drawCircle();

        expect(draw.randomCircleInArea.calledOnce, "should call draw.randomCircleInArea to create a circle object").to.be.true;
        randomCircleArgs = draw.randomCircleInArea.firstCall.args;
        expect(randomCircleArgs[0].name).to.be('canvas', 'the first argument of randomCircleInArea should be the canvas');

        expect(physikz.addRandomVelocity.calledOnce, "should call physikz.addRandomVelocity").to.be.true;
        addRandomVelocityArgs = physikz.addRandomVelocity.firstCall.args;
        expect(addRandomVelocityArgs[0].id === currentCircleID &&
                addRandomVelocityArgs[0].name === 'circle' &&
                addRandomVelocityArgs[1].name === 'canvas', 'should call addRandomVelocity with the correct arguments').to.be.true;
        
        expect(view.addChild.calledOnce, 'should call view.addChild').to.be.true;
        addChildArgs = view.addChild.firstCall.args;
        expect(addChildArgs[0].id === currentCircleID &&
            addChildArgs[0].name === 'circle', 'should call addChild with the correct arguments').to.be.true;
        
        expect(circles[circles.length-1].id === currentCircleID, 'should push the new circle into the circles Array').to.be.true;
    
        draw.randomCircleInArea.restore();
        physikz.addRandomVelocity.restore();
        view.addChild.restore();

      });
    
    //   it('circles should move across screen', function(){
    //     var 
    //         tempX = circle.x,
    //         tempY = circle.y,
    //         width = canvas.width,
    //         height = canvas.height,
    //         radius = circle.radius;     
    //     expect(update).to.be.a('function');
    //     update();
       
    //     expect(tempX).to.satisfy(function(tempX){
    //         if ((tempX === -radius) || (tempX === width + radius)){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     expect(tempY).to.satisfy(function(tempY){
    //         if((tempY === -radius) || (tempY === height + radius )){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //  });
 });
    