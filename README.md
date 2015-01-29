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
* `circle`: we will use this variable to hold the circle shape we create using the `draw` library.
* `circles`: we'll need an Array to hold all of our circles so we can loop through them all and update each.

Ok, we can take care of declaring our varialbes all in one statement > find **TODO 1** and declare our varialbes like so:

````javascript
// other code...

// TODO 1: Declare our varialbes //
var i, circle, circles;

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

Here's the template code for your `while` statement, find **TODO 3** and put the while loop in place:

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

### TODO 4 : Generate a radomized circle

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

### Figure It Out

Alrighty, your turn!