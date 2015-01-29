### TODO 1 : Declare Our Variables

````javascript
// other code...

// TODO 1: Declare our variables //
var i, circle, circles;

// other code...
````

### TODO 2 : Initialize The Counter and Circles Array

````javascript
// other code...

// TODO 2: Initialize i to 0 //
i = 0;
circles = [];

// other code...
````

#### TODO 3 : Generate a Radomized Circle

Implement the following code such that your `while` loop now looks like this:

````javascript
// other code...
while (i < 100) {
    // TODO 3 : YOUR CODE STARTS HERE //////////////////////////
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
					
    if (circle.alpha < .2) {
    	draw.blurFilterOn(circle);
    }
    
    physikz.addRandomVelocity(circle, canvas);
    circles.push(circle);
    view.addChild(circle);
    
    // TODO 3 : YOUR CODE ENDS HERE ////////////////////////////
					
	/*
	 * IMPORTANT NOTE: 
	 * The statement i++; increments our counter by 1 on each loop.
	 * If we did not do this, the conditional check of while (i < 100)
	 * would never return false, and we would loop forever!
	 *
	 * Leave this as the last statement in the while loop
	 */
    i++;
}

// other code...
````

TODO 4 and 5 are up to you!