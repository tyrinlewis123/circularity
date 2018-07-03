Circularity
===

A motion poem using random number generation and velocity applied to circles...

Also at: http://bit.ly/op-spark-circularity

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
      - [Loops To The Rescue](#loops-to-the-rescue)
      - [Code Blocks](#code-blocks)
    - [TODOs](#todos)
      - [TODO 1 : Declare Our Variables](#todo-1--declare-our-variables)
      - [TODO 2 : Draw a circle](#todo-2--draw-a-circle)
      - [TODO 3 : Draw many circles](#todo-3--draw-many-circles)
      - [TODO 4 : Push each circle into the circles array](#todo-4--push-each-circle-into-the-circles-array)
    - [Animate Our Circles](#animate-our-circles)
      - [TODO 5 : Pull out one circle at a time from our array](#todo-5--pull-out-one-circle-at-a-time-from-our-array)
      - [TODO 6 : Update the Position of the Circle](#todo-6--update-the-position-of-the-circle)
      - [TODO 7 : Keep The Current Circle Within the Bounds of the Canvas](#todo-7--keep-the-current-circle-within-the-bounds-of-the-canvas)

## Installation
* Make sure your github and cloud9 accounts are linked to Greenlight
* Open your first website workspace
* go to your bash terminal (located at the bottom of the cloud9 workspace) and type in the command `os install`. Hit enter.

NOTE: If you receive an error that says, `os install command not found` the opspark CLI is not installed. To install it, enter the command `npm intall -g opspark` in your bash terminal. When the installation is complete try `os install` again.

* If prompted, login with your github credentials
* Use your arrow keys to highlight your course and hit enter. hit enter again to confirm.
* Use your arrow keys to highlight `circularity` and hit enter. hit enter again to confirm.
* open up the index.html file and press Run at the top of your workspace. You will be editing this file.

***

## Overview

### Specs

The portrait of the programmer as a young artist continues, using random number generation, color, and velocity applied to circles in this little motion poem.  As usual, we're going to be drawing to an HTML5 Canvas element using the drawing API of the CreateJS module, EaselJS, and our helper library, draw, that simplifies the drawing process somewhat.

### Take Away

Using the draw line API to create a cool randomized piece of art.

Some concepts you'll learn are:


* Drawing with CreateJS and our draw utility.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* The for loop.
* Conditional statements - making decisions in code.
* Recognizing code blocks.
* Calculating coordinates in a cartesian system.
* Calculating boundaries.
* Animating.
* Pair programming.

### Entering Code

As we work through the app, you'll find `// TODO //` notes in our `app.js` file, and _under_ these `TODO` lines is where you'll enter the code we need to type.  It's important you enter the code you need to type for the step under these `TODO` place markers, because code is executed in a particular order.

So, to complete a lesson step, _find_ the `TODO` place marker in the appropriate JavaScript file:

**EXAMPLE**

<img src="https://raw.githubusercontent.com/OperationSpark/using-c9/master/img/find-todo.png">

...then put your cursor on the line below the `TODO`, and enter the code from the current lesson step:

**EXAMPLE**

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

Our motion poem will contain 100 randomly drawn circles, arranged randomly within the area of our canvas.  The big takeaway in this project is **DRY**: Don't repeat yourself!

We want to draw 100 circles, but we don't want to write the code to do so 100 times.  That would be a silly waste of time and effort, making the code very difficult to maintain.

#### Loops To The Rescue

Every programming language comes with features built-in to help you implement repetative processes, like looping over a list of data, or drawing a circle 100 times.  If we want to do anything more than once, we can use a _loop_, and is most often best practice to do so. 

Loops are a great tool to repeat a `{ code block }` a specific number of times and JavaScript comes with a number of built in loops, like `for`, `for-in`, and `while`. Additionally, many 3rd party libraries, like <a href="https://lodash.com/">_lodash_</a>, have implementations of other types of loops. We're going to use the `while` and `for` loops to accomplish our tasks for this project. 

### While Loops
Let's start with a `while` loop. To get a while loop to run 100 times we may write something like this:

````javascript
var count = 0;
while(count < 100) {
    // code you want repeated
    count++;
}
````

A `while` loop runs as long as a **condition** is `true`, stopping once the condition becomes `false`. In the example above, 
the loop runs while `count < 100`. This loops make use of a **counter variable** which keeps track of the number of loops that have been completed. When using a counter variable we must first *instantiate* it before the loop: `var count = 0;` and then *update* it within the loop: `count++;`. On each repitition of the loop, the counter variable will increment (increase by 1) until it reaches 100 at which point the condition will evaluate to `false` and the loop will stop!

Failing to update a counter variable within a loop results in an **infinite loop** - a loop whose condition is forever `true` and therefore never stops. Creating an infinite loop consumes all available memory as the program runs and ultimately will crash the program. **This is bad**. 

### For Loops
Another kind of loop we will use is the `for` loop. The for loops takes the counting pattern used in the previous example and condenses it into one line. To create a for loop that runs 100 times we may write something like this:

````javascript
for (var i = 0; i < 100; i++) {
    console.log(i);
}
````

After the keyword `for` are parentheses where you setup your for loop. Here is where you define how the loops starts, when it ends, and how you want to move on from one loop to the next. There are three parts to it:

* **initialization** : `var i = 0;`
	* a variable `i` is initialized to act as a counter to keep track of how many times we have run our loop. We start at 0.
* **stop condition** : `i < 100;`
	* This statement is the condition against which we check on each loop. If `i` is less than 100, the code block for the loop will execute.
* **post condition** : `i++;`
	* This statement _increments_ (adds 1 to) the `i` variable and is executed after each run of the loop.
	* NOTE: `i++;` is shorthand for `i = i + 1;`, and you'll see the `++` or `--` operators used often in code to accomplish this type of pattern.

Finally, we have our code block within the braces `{ }`.

When all of these are put together our for loop will execute the code block as long as the `i` variable is less than 100. The `i` variable starts at 0 and, because we increment it after each loop, will increase until the stop condition is no longer true - at which point the loop will stop. 

So then, looking at the above snippet of code, what would be the result of running that code? How is the for loop similar and/or different from a while loop?

### Iterating over an Array

For-loops also provide a convenient way to access elements of an Array one at a time. Arrays are *zero-indexed* lists of data. Basically, an Array acts as a container, into which we can throw objects, like strings, numbers, or circles. We call the things we throw into Arrays, _items_ or _elements_, as in, the _elements_ of our Array. Arrays are contained within square brackets `[ ]` and are stored in variables.

````javascript
var friends = ['John', 'Max', 'George', 'Ben', 'Steve', 'Brian'];
````

To retrieve an individual _element_ from an Array, we can use *Bracket Notation*, which uses the name of the Array, followed by square brackets that enclose a number representing the position of the element.

So, we can access the elements of the `friends` Array like so:

````javascript
var name = friends[1];
console.log(name); // prints Max
````

So, above, we used *Bracket Notation* to access the second element of the `friends` Array, `friends[1]`, which equates to `Max` and then log that value to the console. Because Arrays are zero-indexed, the first element is at index 0, the second element is at index 1, and so on.

When we want to access _every_ value within an array, this is called *iterating*. Iterating is the process of accessing each value of an Array using a for loop. This works by using the counter variable of a for loop (often named `i` - short for index) as a placeholder for the numbered index we want to access like so: 

````javascript
for (var i = 0; i < friends.length; i++) {
    var name = friends[i]. 
    console.log(name); // prints a different friend's name on each loop
}
````

As the value of `i` changes within the loop, so too will the value of `name` as it gets assigned to a new element within the Array `friends`. Notice that the stop condition of our loop has changed as well. We want to access every value of our array whose indexes range from `0` to `friends.length - 1`. Study the way that the for loop above has been set up to understand how we accomplish this.

### Cartesian Coordinates

A computer screen is nothing more than a cartesian graph with an *x-axis* and a *y-axis* measured in units of *pixels*. A computer screen may be composed of millions of pixels so understanding this coordinate system is vital to accurately place animations on the screen. 

The *origin*, where the x-axis and y-axis intersect at 0, is always located in the top left corner of the browser window. As you move accross the screen from left to right, x values of pixels increase. As you move down the screen from top to bottom, the y values of pixels increases. 

<img src="img/screenBounds.png" height="300px">

Imagine you had two images: Image-A is located at x/y position (100, 500) and Image-B is located at x/y position (300, 200). Where are they positioned relative to each other? Image-A has a smaller x-value so it would be to the left of Image-B. However, it has the larger y-value, therefore it will be below Image-B. 

Good! Now that we understand how the coordinates of the screen work we have to understand one more concept: where the window ends! It wouldn't be particularly interesting if we perfectly set up our images relative to each other but half of them aren't even in view. However, since the size of a browser window can be resized this value will never be the same. Therefore, we must use a *variable*! In our program we have done this for you by providing the values: 
 
    canvas.width    // The the width of our canvas.
    canvas.height   // The height of our canvas.

The `canvas` is a data type known as an Object (we'll learn more about this later) which represents the blank screen and allows us to add drawings to it. The canvas has 2 very important *properties* `.width` and `.height` that provide us with the coordinates for where the window ends. Using this data, along with the knowing where our origin is, we can easily tell whether or not an image is in view by checking the image's x/y position to see if it contained within the box (0, 0) -> (canvas.width, canvas.height). 

***

### TODOs

#### TODO 1 : Declare Our Variables

The goal of this project is to create 100 animated circles. Before we get ahead of ourselves, let's create one circle. Declare a variable to hold that circle (we will deal with initializing it later). Also we want to create an empty array to hold our circles, more on that later:

Find **TODO 1** and declare our variables like so:

````javascript
// other code...

// TODO 1: Declare our variables //
var circle;
var circles = [];

// other code...
````

#### TODO 2 : Draw a circle

We will want to draw many circles in this project so putting the code to draw one circle inside a **function** will make the code much more re-usable! We've created the outline of a function for you called `drawCircle`. Add the following code under **TODO: 2**:

````javascript
function drawCircle() {
    // TODO 2: Draw a circle //
    circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
    physikz.addRandomVelocity(circle, canvas);
    view.addChild(circle);
    
    // other code...
}
````
`draw` is a library of functions that allow us to draw various shapes on our `canvas`. This method, `draw.randomCircleInArea` will draw a circle of random size, color, and location within the screen along with a few other settings. Check out the API:

    randomCircleInArea(area, randomizeAlpha, addCross, borderColor, borderThickness, randomRadialProps)
    
We temporarily store the output of the function in `circle`. We then use the `physikz` library, a library of functions that provide motion to canvas drawings, to add a random velocity and direction to our circle.

Finally, to get it to appear on the screen we add the circle as a *child* of `view` (Think of the parent <-> child relationship of HTML elements!).

#### TODO 3 : Draw many circles

Now, Call this function 3 times to see 3 circles appear on the screen - pretty, right? But we want to draw 100 circles! If we were to call this function 100 times in our code, it would violate the **DRY Rule: D**ont **R**epeat **Y**ourself.

A for loop should do the job! Below **TODO 3** create a for loop that will loop 100 times and call the `drawCircle` function. Here is the basic outline of a for loop:


````javascript
for (var counter = 0; counter < 100; counter++) {
    // do something
}
````
    
#### TODO 4 : Push each circle into the circles array

In order to keep our circles together, we can keep them stored in an array. To save each array we create in the `circles` array, we can use the `.push()` method.

Find **TODO 4** in the `drawCircle` function and add the following code:

    circles.push(circle);
    
Now, every time a new circle is made, it will be automatically added to the array of circles!

### Animate Our Circles

Awesome, let's do some fun stuff with our circles now.  Remember that our `update()` method is called 60 times per second, so it gives us the perfect place to update properties of our display objects in order to create the illusion of motion, otherwise known as, _animation_!

Given this, much of the work will take place within the `update()` function.  Right now, it's stubbed out like this:

````javascript
function update() {
    for (var i = 0; i < circles.length; i++) {
        // TODO 5 : Access one circle at time from the circles Array //
        
        // TODO 6 : Update the circles position //
        
        // TODO 7 : YOUR CODE STARTS HERE //////////////////////
        
        if ( / * test for right-side * / ) {
            // your code to place circle exactly off the stage at the left-side //
        } else if ( / * test for left-side * / ) {
            // your code to place circle exactly off the stage at the right-side //
        } if ( / * test for top * / ) {
            // code to place circle exactly off the stage at the bottom //
        } else if ( / * test for bottom * / ) {
            // your code to place circle exactly off the stage at the top //
        }
        
        // YOUR TODO 8 CODE ENDS HERE //////////////////////////
    }
}
````

The thing to notice here is that we are again using the `for` loop but in a different way. Instead of incrementing the value of i until it is less than 100 we are doing so until it is less than circles.length... It's time to do a little problem solving: 

#### TODO 5 : Pull out one circle at a time from our array

Use the Array syntax to pull out the circle at index `i`.

Arrays are _zero-indexed_ lists of objects.  Basically, an Array acts as a container, into which we can throw objects, like strings, numbers, or circles. We call the things we throw into Arrays, _items_ or _elements_, as in, the _elements_ of our Array.

To retrieve an individual _element_ from an Array, we can use _Array syntax_, which uses the name of the Array, followed by square brackets that enclose a number representing the position of the element.

So, if we literally created an Array like this:

````javascript
var friends = ['John', 'Max', 'George', 'Ben', 'Steve', 'Brian'];
````

Then we can access the elements of the `friends` Array like so:

````javascript
var name = friends[1];
console.log(name); // prints Max
````

So, above, we used _Array syntax_ to access the second element of the `friends` Array, `friends[1]`, which equates to `Max`.  Because Arrays are _zero-indexed_, the first element is at index 0, the second element is at index 1, and so on.

So, we know our that when we created our circles, each `circle` was pushed into our Array of `circles`, and we know that our `for-loop` is incrementing an index, `i` on each loop, once for each element in the `circles` Array. So, using the Array syntax we discussed earlier in the lesson, what do we need to do to pull-out and assign an individual `circle` as we loop over the Array of `circles`?

````javascript
// other code...


// TODO 5 : Access one circle at time from the circles Array //
circle = ???

// other code...
````

#### TODO 6 : Update the Position of the Circle

Okay, now we have our circle, let's use the `updatePosition()` API of the `physikz` library to update the position of the circle:

````javascript
// other code...

// TODO 6 : Update the circle's position //
physikz.updatePosition(circle)

// other code...
````

#### TODO 7 : Keep The Current Circle Within the Bounds of the Canvas

We need to check each circle's position as we loop through the Array of `circles` to keep the circles coming back onto the `canvas`.

So, if a circle leaves the `canvas` along the _bottom_ border, we need to place the circle fully off the `canvas` at the top border.

So, write a test for each border of the canvas that checks if the circle has fully exited the canvas by _that_ border. Using a chain of `if`, `else-if` statements, you'll need one test for each border, right-side, left-side, top, and bottom. If a circle leaves the canvas by one of its borders, you need to place the circle fully off the canvas at the opposite border.  Dig?

The best way to start this is to hack away, testing one border at a time!

To do this, you'll have to lean on what you know:

    canvas.width    // The the width of our canvas.
    canvas.height   // The height of our canvas.
    circle.x        // The circle's position along the x-axis, good for testing the right and left side borders.
    circle.y        // The circle's position along the y-axis, good for testing the top and bottom borders.
    circle.radius   // Each circle is of a different size, so the radius will provide this information to you. ALSO, the circle is centered around its own x and y position, so we can find where its outer edges are located within the canvas by adding or subtracting its radius from its own x or y value.  But you'll see this as you hack away to acheive the expected results.

We've _stubbed_ a chain of `if`, `else-if` statements for you, all you need to do is replace the comments between the `()` parentheses with your check for that particular border:

So, for example, replace:

    / * test for right-side * /
    
With:

    circle.x > canvas.width + circle.radius

So that your `if` statement looks like:

````javascript
if (circle.x > canvas.width + circle.radius) {
    // your code to place circle exactly off the stage at the left-side //
}
````

The full stub code for our `if`, `else-if` statements is here:

````javascript
// TODO 7 : YOUR CODE STARTS HERE //////////////////////

if ( / * test for right-side * / ) {
    // your code to place circle exactly off the stage at the left-side //
} else if ( / * test for left-side * / ) {
    // your code to place circle exactly off the stage at the right-side //
}

if ( / * test for top * / ) {
    // code to place circle exactly off the stage at the bottom //
} else if ( / * test for bottom * / ) {
    // your code to place circle exactly off the stage at the top //
}

// YOUR TODO 7 CODE ENDS HERE //////////////////////////
````

&copy; Operation Spark 2015
