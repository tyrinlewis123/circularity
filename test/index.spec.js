"use strict"

mocha.setup('bdd');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new jsdom(``, {
  
});
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
        should.exist(i);
        should.exist(circle);
        should.exist(circles);
        should.exist(update);       
      });
    
      it('variables should have the correct values', function(){
        expect(i).to.eql(0);
        expect(cirles).to.be.an('array').that.is.empty;
        expect(circle).to.eql(draw.randomCircleInArea(canvas,true,true,'#999', 2));
        expect(update).to.be.function;
      });
    
      it('circles should move across screen', function(){
        var 
            tempX = circle.x,
            tempY = circle.y,
            width = canvas.width,
            height = canvas.height,
            radius = circle.radius;     
        expect(update).to.be.a('function');
        update();
       
        expect(tempX).to.satisfy(function(tempX){
            if ((tempX === -radius) || (tempX === width + radius)){
                return true;
            } else {
                return false;
            }
        });
        expect(tempY).to.satisfy(function(tempY){
            if((tempY === -radius) || (tempY === height + radius )){
                return true;
            } else {
                return false;
            }
        });
     });
 });
    