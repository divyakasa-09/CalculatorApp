
##  _Project Description_ ##

CALCULATOR APP  USING CANVAS API

- The calculator is built using canvas API
- HTML page is main.html which has
- - Then, a link tag is used to embed a CSS file, which styles the calculator interface.

- - The body section of the HTML file includes a canvas element with an ID of "myCanvas", which could potentially be used for additional graphical elements or animations.
- - Finally, a script tag is used to embed a JavaScript file, which provides the functionality for the calculator. 
<br>
<br>

- the css file has the stylings for body.

<br>

- the js file has the following:
- - For circles i used the below method. 

 `ctx.beginPath();

ctx.arc(120, 50, 10, 0, 2 * Math.PI);

 ctx.fillStyle = "#ff5f58";

 ctx.fill();`

-  - This JavaScript code draws a filled circle on a canvas element using the HTML5 Canvas API.

-  - The first line ctx.beginPath(); starts a new path for the canvas element, which is necessary before drawing any shapes.

-  - The second line ctx.arc(120, 50, 10, 0, 2 * Math.PI); draws a circle on the canvas. The arc method takes five parameters:

-  - x: the x-coordinate of the center of the circle, which is set to 120 in this case
- - - y: the y-coordinate of the center of - the circle, which is set to 50 in this case
-  - radius: the radius of the circle, which is set to 10 in this case
-  - startAngle: the starting angle of the circle, measured in radians from the positive x-axis. This is set to 0 in this case, which corresponds to the right side of the circle.
-  - endAngle: the ending angle of the circle, also measured in radians from the positive x-axis. This is set to 2 * Math.PI, which corresponds to a full circle.
-  - The third line ctx.fillStyle = "#ff5f58"; sets the fill color of the circle to a bright red color specified by the hexadecimal code "#ff5f58".
- For rounded rectangle I used the below method. 

`ctx.beginPath();

ctx.roundRect(100, 30, 375, 545, 15);

ctx.stroke();

ctx.fillStyle = '#4c4f51';

ctx.fill();`
<br>
- - The first line ctx.beginPath(); starts a new path for the canvas element, which is necessary before drawing any shapes.

-  - The second line ctx.roundRect(100, 30, 375, 545, 15);; draws a circle on the canvas. The arc method takes five parameters:

- - the x-coordinate of the center of the circle
- - - y: the y-coordinate of the center of - the circle, 


- - width: its takes width of the rectangle
- - height : it takes height;
- - Angle:  it takes how much angle of curve is needed.


- To create a rectangle for the keys i used the below method:

`ctx.beginPath();

ctx.rect(325, 200, 75, 75);

ctx.stroke();
ctx.strokeStyle="black";

ctx.fillStyle = "#5e6065";

ctx.fill();


ctx.beginPath();

ctx.font = '30px Arial';

ctx.fillStyle = "white";

ctx.fillText('%',345 ,250 );

ctx.fill();`

- - The beginPath() method is called to start a new drawing path.

- - The rect() method is used to define a rectangle with the following parameters: x = 325, y = 200, width = 75, height = 75. This creates a rectangle with its top left corner at (325, 200), a width of 75 pixels and a height of 75 pixels.

- - The stroke() method is called  to stroke the outline of the rectangle. This creates a rectangular border around the shape.

- - The strokeStyle property is set to "black", which sets the color of the stroke to black.

- - The fillStyle property is set to "#5e6065", which sets the fill color of the rectangle to a grayish tone.

- - The fill() method is called to fill the rectangle with the fill color.

- - Another beginPath() method is called to start a new drawing path.

- - The font property is set to '30px Arial', which sets the font family and size for the text that will be added to the canvas.

- - The fillStyle property is set to "white", which sets the color of the text to white.

 - - The fillText() method is called to add the percentage sign (%) inside the rectangle. The parameters passed to the method are: the text to be added ("%"), the x-coordinate of the starting point of the text (345), and the y-coordinate of the starting point of the text (250).

- - The fill() method is called to fill the text with the fill color.
<br>

- the js file has evaluateExpression() function which evaluates the arthematic expression.
- The validateInput() method validates the input.
-  Event Listener is added to each button on click.