Circularity
===

A motion poem using random number generation and velocity applied to circles...

**Table of Contents**

- [Circularity](#circularity)
  - [Installation](#installation)
  - [Overview](#overview)
    - [Specs](#specs)
    - [Take Away](#take-away)
    - [Entering Code](#entering-code)
    - [Type of App : Web](#type-of-app--web)
  - [Lesson Steps](#lesson-steps)
    - [Initializing Our App](#initializing-our-app)
    - [Variable Declaration](#variable-declaration)
      - [TODO 1 : Declare Our Variables](#todo-1--declare-our-variables)
    - [Variable Initialization](#variable-initialization)
      - [TODO 2 : Initialize The Counter and Circles Array](#todo-2--initialize-the-counter-and-circles-array)
      - [TODO 3 : Stub Out The While Loop](#todo-3--stub-out-the-while-loop)
    - [Figure It Out](#figure-it-out)
      - [TODO 4 : Initialize Random Radius and Color Every Loop](#todo-4--initialize-random-radius-and-color-every-loop)
    - [TODO 5 : Draw A Circle](#todo-5--draw-a-circle)
    - [Figure It Out](#figure-it-out-1)
      - [TODO 6 : Randomly Position the Circle Within the Canvas](#todo-6--randomly-position-the-circle-within-the-canvas)
      - [TODO 7 : Push the Circle Into The Circles Array and Add It To The View](#todo-7--push-the-circle-into-the-circles-array-and-add-it-to-the-view)

## Installation

Create a new Cloud9 workspace and clone the project from github.com:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace" > "Clone From URL":

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/clone-new-workspace.png">

2. In the "Source URL" form input, copy and paste in the following URL (see A):
    
        https://github.com/OperationSpark/circularity.git
    
    Then, in the environment selection box, select "HTML5" (see B).  Finally, click the green button "Create" (see C).
    
    <img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/clone-workspace.png">

3. Wait for the workspace to finish spooling (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar), and once the workspace is completed, click the green button, "START EDITING".

    <img src="https://raw.githubusercontent.com/OperationSpark/line-crawler/master/img/start-editing.png">

4. Now, when the workspace is loaded, select the command-line in the bottom window pane, and enter the command `bower install`, then press `Enter`, like this:

    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/motion-poem-install-bower.png">

    You'll see some test flying by on the command-line as some required files are installed... 

    and when complete, you'll see something like this:
    
    <img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/bower-done.png">

Nice, you're in business...

***

## Overview

### Specs

The portrait of the programmer as a young artist continues, using random number generation, color, and velocity applied to circles in this little motion poem.  As usual, we're going to be drawing to an HTML5 Canvas element using the drawing API of the CreateJS module, EaselJS, and our helper library, draw, that simplifies the drawing process somewhat.

### Take Away

Using the draw line API to create a cool randomized piece of art.

Some concepts you'll learn are:


* Drawing with CreateJS and our draw utility.
* RGB color.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* The While loop.
* Conditional statements - making decisions in code.
* Random number generation.
* Pair programming.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/todo-done.png">

Sweet!

### Type of App : Web

Note that **this app will run _in a web browser_**, preferably Chrome.

***

## Lesson Steps

All of our coding will happen in the and write your code in the `<script id="motion-poem">` tag located at the bottom of the `index.html` file.

So, open the file at:

    index.html

***

### Initializing Our App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Declaring and initializing some variables for use in our app.

We've setup the app a little bit already, importing some libraries and initializing the basic plumbing in the background, and we won't be loading any external data in our app, so let's move on to declaring, initializing and using our variables.

Our motion poem will contain 100 randomly drawn circles, arranged randomly within the area of our canvas.  The big take-away in this project is **DRY**: Don't repeat yourself!

We want to draw 100 circles, but we don't want to write the code to do so 100 times.  That would be a silly waste of time and effort, making the code very difficult to maintain.

#### Loops To The Rescue

Every programming language comes with features built-in to help you implement repetative processes, like looping over a list of data, or drawing a circle 100 times.  If we want to do anything more than once, we can use a _loop_, and is most often best practice to do so.

JavaScript comes with a number of built in loops, like `for` `for-in` and `while`, and many 3rd party libraries, like _lodash_, have implementations of other types of loops.

We're going to use the `while` loop to accomplish our task.  It works like this:

````javascript
var i = 0;

while (i < 100) {
    console.log(i);
    i++;
}
````

The while loops checks first if a condition is `true`: `while (i < 100)`.  So while `i` is _less than_ `100`, the code block between the braces `{ //... }` will execute.

After executing the code block, the while loop loops-back to check the condition again, and will continue to loop until that condition is `false`.

To break out of the loop, we need the condition to return `false`, and by _incrementing_ our `i` counter on each loop using `i++;`, the value of `i` increases by one on each loop.  `i++;` is shorthand for `i = i + 1;`, and you'll see the `++` or `--` opporators used often in code to accomplish this type of pattern.

In fact, most loops use this exact same pattern: some counter checked against the length of a collection (an Array or Object), and incremented or decremented on each loop, depending on if you want to loop forward or backwards through a collection.

So then, looking at the above snippet of code, what would be the result of running that code?

Great stuff, we're going to use the `while` loop to draw our cirles.  Before we get there, let's first declare our app's required variables.

***

### Variable Declaration

#### TODO 1 : Declare Our Variables

For our app, the things we'll need are:

* `i`: a counter for our while loop.
* `radius`: from the `num` library, this will hold a randomly generated value used as the _radius_ of circle we will draw
* `color`: this will hold a color randomly generated by our `draw` library.
* `circle`: we will use this variable to hold the circle shape we create using the `draw` library.
* `circles`: we'll need an Array to hold all of our circles.
* `cross`: later, we'll use this variable to update the look of our circles.

Ok, we can take care of declaring our varialbes all in one statement > find **TODO 1** and declare our varialbes like so:

````javascript
// other code...

// TODO 1: Declare our varialbes //
var i, radius, color, circle, circles, cross;

// other code...
````

### Variable Initialization

#### TODO 2 : Initialize The Counter and Circles Array

Sweet, next let's _initialize_ our counter and the circles Array.  Find **TODO 2** and initialize our counter `i` to `0` and the circles variable to `[]`, an empty Array:

````javascript
// other code...

// TODO 2: Initialize i to 0 //
i = 0;
circles = [];

// other code...
````

We know we want to draw 100 circles, and that the `while` loop is the way go, so let's go ahead and put the while loop in place.  Once we've got that done, we'll _circle back_ to draw our circles and add each of them as children of our `view`, positioned somewhere randomly within the area of our canvas, all within the `while` loop code block.

#### TODO 3 : Stub Out The While Loop

We'll get you started, then it's your mission to figure out the rest.  Here's the template code for your `while` statement, find **TODO 3** and put the while loop in place:

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

### Figure It Out

#### TODO 4 : Initialize Random Radius and Color Every Loop

Now, within our `while` loop, we first want to generate a random radius within a limited range, say, between `5` and `15` pixels.  Then we need generate a random color for our circle.

To generate a random integer between to values, we can use the `randomIntBetween()` API of `num` library, like so:

````javascript
var myRandomInt = num.randomIntBetween(10, 20);
````

This statement would assign a random integer between the range of `10` and `20` to the variable called `myRandomInt`.

To generate a random color value, we use the API `randomColor` API of our `draw` library like so:

````javascript
var myRandomColor = draw.randomColor(255, 255, 255);
````

So, within the body of the `while` loop, start by initializing random values for our `radius` and `color` variables.  Find **TODO 4** and:

<ol style="list-style-type: upper-alpha;">
    <li>using the API `num.randomIntBetween(min, max)` assign a random integer between `5` and `15` to the `radius`</li>
    <li>using the API `draw.randomColor(255, 255, 255)`, assign a random color to the variable `color`</li>
</ol>

### TODO 5 : Draw A Circle

Sweet!  Next we need to draw a cirle using the `radius` and `color` we just initialized in the last step.  We'll also pass in the `line` variable we declared - it presently has a value of `null`, but that's ok, we'll come back to it later...

So, find **TODO 5**, draw a circle using the `draw.cirle(radius, color, strokeColor, strokeStyle, xOffset, yOffset, onShape)` API, assigning to our `cirle` variable. like so:

````javascript
// other code...

circle = draw.circle(radius, color, '#999', 1, null, null, line);

// other code...
````

Above, we've assigned our newly drawn a circular shape to our `circle` variable, passing in the radomized radius and color.  We also used the color `#999` for the stroke of the cirle - stroke is the border around the shape - with a thickness of `1` pixel.

Finally, we passed in `null` twice to skip the offset values, and then our `line` variable.

### Figure It Out

#### TODO 6 : Randomly Position the Circle Within the Canvas

The circle has an `x` and `y` property that represent its position within its parent display object.  We'll add the `circle` variable to the `view` using `view.addChild(circle)`, but before doing so, we'll need to generate a random `x` and `y` value for the `circle`.  

Say we wanted the circle to be to positioned at coordinate of `10` pixels within the `view`.  To do that, we'd assign its `x` and `y` values like so:

````javascript
circle.x = 10;
circle.y = 10;
````

To measure the width and height of the canvas, the canvas exposes the properties `canvas.width` and `canvas.height`.

Next, you know the API for generating a random integer.  Now, use that API to generate a random `x` and `y` value within the area of the canvas.  So, find **TODO 6** and randomly place the circle within the area of the canvas....

Once you've got that in place, move on to **TODO 7**


#### TODO 7 : Push to Circles and Add to View

````javascript
// other code...

// TODO 7 : Push the circle into the circles Array and add it to the view //
circles.push(circle);
view.addChild(circle);

// other code...
````