### TODO 1 : Declare Our Variables

````javascript
// other code...

// TODO 1: Declare our varialbes //
var i, radius, color, circle, circles, cross;

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

### TODO 3 : Stub Out The While Loop

````javascript
// other code...

// TOOD 3 : // TOOD 3 : Stub out the while loop //
while (i < 100) {
    // YOUR CODE STARTS HERE //
    
    
    
    // YOUR CODE ENDS HERE //
    // increment our counter - leave this as the last statement in the while loop //
    i++;
}

// other code...
````

### TODO 4 : Generate a Radomized Circle

````javascript
// other code...

// TOOD 4 : Create a radomized circle within the area of the canvas //
circle = draw.randomCircleInArea(canvas, true, true, '#999');

// other code...
````

### TODO 5 : Add a Blur Filter to Some Circles
````javascript
// other code...

// TODO 5 : Add a blur filter to circles with alpha less than .2 //
if (circle.alpha < .2) {
	draw.blurFilterOn(circle);
}

// other code...
````

### TODO 6 : Add the Circle to the View

````javascript
// other code...

// TODO 6 : Add the circle to the view //
view.addChild(circle);

// other code...
````

#### TODO 7 : Push the Circle into the Circles Array

````javascript
// other code...

// TODO 7 : Push the circle into the circles Array //
circles.push(circle);

// other code...
````

#### TODO 8 : Add Random Velocity to the Circle

````javascript
// other code...

// TODO 7 : Add random velocity to the circle within the area of the canvas //
physikz.addRandomVelocity(circle, canvas);

// other code...
````


### Manually Radomizing the Circle 

// TODO A: Initialize a randomly generated radius and color //
radius = num.randomIntBetween(5, 20);
color = draw.randomColor(255, 255, 255);

// TODO B : Create a cross shape //
cross = draw.line(-radius, 0, radius, 0, '#999', 2);
draw.line(0, -radius, 0, radius, '#999', 2, cross);

// TODO C : Draw a circle using the radius and color //
circle = draw.circle(radius, color, '#999', 1, null, null, cross);

// TODO D : Randomly place the circle within the area of the canvas //
circle.x = num.randomIntBetween(0, canvas.width);
circle.y = num.randomIntBetween(0, canvas.height);