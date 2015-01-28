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

### TODO 4 : Initialize Random Radius and Color Every Loop

````javascript
// other code...

radius = num.randomIntBetween(5, 20);
color = draw.randomColor(255, 255, 255);

// other code...
````

### TODO 5 : Draw A Circle

````javascript
// other code...

// TODO 5 : Draw a circle using the radius and color //
circle = draw.circle(radius, color, '#999', 1, null, null, cross);

// other code...
````

#### TODO 6 : Randomly Position the Circle Within the Canvas

````javascript
// other code...

circle.x = num.randomIntBetween(0, canvas.width);
circle.y = num.randomIntBetween(0, canvas.height);

// other code...
````

#### TODO 7 : Push to Circles and Add to View

````javascript
// other code...

// TODO 7 : Push the circle into the circles Array and add it to the view //
circles.push(circle);
view.addChild(circle);

// other code...
````