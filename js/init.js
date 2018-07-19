var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp({update: update}),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    ////////////////////////////////////////////////////////////////
    // ALL CODE GOES BELOW HERE                                   //
    ////////////////////////////////////////////////////////////////
    
    // TODO 1 : Declare and initialize our variables //
    
    // TODO 2 : Create a function that draws a circle  //
    var drawCircle;
    
    
    // TODO 3 : Call the drawCircle function 3 times //

    // TODO 7 : Create a Loop to call drawCircle 100 times


    view.addChild(fps);
    app.addUpdateable(fps);

    function checkCircleBounds(circle) {
        // TODO 5 : YOUR CODE STARTS HERE //////////////////////
        if ( circle.x > canvas.width + circle.radius ) {
            circle.x = 0 - circle.radius;
        } else if ( / * test for left-side * / ) {
            // your code to place circle exactly off the stage at the right-side //
        } if ( / * test for top * / ) {
            // code to place circle exactly off the stage at the bottom //
        } else if ( / * test for bottom * / ) {
            // your code to place circle exactly off the stage at the top //
        }
        // YOUR TODO 5 CODE ENDS HERE //////////////////////////
    }

    function update() {
        // TODO 4 : Update the circle's position //

        // TODO 6 : Call checkCircleBounds on your circles.

        // TODO 8 : Iterate over the array
    }
        
    ////////////////////////////////////////////////////////////////////
    // NO CODE BELOW HERE                                             //
    ////////////////////////////////////////////////////////////////////

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}