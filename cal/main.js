var canvas = document.getElementById("myCanvas");
let input = "";
let value = "";
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');


// set canvas dimensions
canvas.width = 600;
canvas.height = 700;

// get 2D context for the canvas
var ctx = canvas.getContext("2d");

  // creating a rounded rectangle
ctx.beginPath();
ctx.roundRect(100, 30, 375, 545, 15);
ctx.stroke();
ctx.fillStyle = '#4c4f51';
ctx.fill();
 
// creating red dot 

ctx.beginPath();
ctx.arc(120, 50, 10, 0, 2 * Math.PI);
 ctx.fillStyle = "#ff5f58";
 ctx.fill();

 // creating yellow dot 

ctx.beginPath();
ctx.arc(150, 50, 10, 0, 2 * Math.PI);
 ctx.fillStyle = "#febc2e";
ctx.fill();
// creating green  dot 
ctx.beginPath();
ctx.arc(180, 50, 10, 0, 2 * Math.PI);
 ctx.fillStyle = "#29c83f";
ctx.fill();

// creating keys for calculator
ctx.beginPath();
ctx.rect(100, 100, 375, 100);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#505053";
ctx.fill();


ctx.beginPath();
ctx.rect(100, 200, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#5e6065";
ctx.fill();

ctx.beginPath();
ctx.rect(175, 200, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#5e6065";
ctx.fill();

ctx.beginPath();
ctx.rect(250, 200, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#5e6065";
ctx.fill();




ctx.beginPath();
ctx.rect(325, 200, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#5e6065";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('%',345 ,250 );
ctx.fill();




ctx.beginPath();
ctx.rect(400, 200, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#ff9f0c";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('/',430 ,250 );
ctx.fill();







ctx.beginPath();
ctx.rect(100, 275, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('(',130 ,320 );
ctx.fill();




ctx.beginPath();
ctx.rect(175, 275, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('7',200,320);
ctx.fill();

ctx.beginPath();
ctx.rect(250, 275, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('8',280,320);
ctx.fill();

ctx.beginPath();
ctx.rect(325, 275, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('9',360,320);
ctx.fill();


ctx.beginPath();
ctx.rect(400, 275, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#ff9f0c";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('X',420,320);
ctx.fill();


ctx.beginPath();
ctx.rect(175, 350, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();


ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('4',200,400);
ctx.fill();




ctx.beginPath();
ctx.rect(250, 350, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";

ctx.fillStyle = "#787a7e";
ctx.fill();

 ctx.beginPath();
 ctx.font = '30px Arial';
 ctx.fillStyle = "white";
 ctx.fillText('5',280,400);
 ctx.fill();


ctx.beginPath();
ctx.rect(325, 350, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();


ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('6',360,400);
ctx.fill();


ctx.beginPath();
ctx.rect(400, 350, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
// ctx.fillStyle = "black";
ctx.fillStyle = "#ff9f0c";
ctx.fill();


ctx.beginPath();
ctx.font = '50px Arial';
ctx.fillStyle = "white";
ctx.fillText('-',430,400);
ctx.fill();




ctx.beginPath();
ctx.rect(100, 350, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

 ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText(')',130,400);
 ctx.fill();


ctx.beginPath();
ctx.rect(100, 425, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
//ctx.fillStyle = "black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('Back',100,470);
ctx.fill();



ctx.beginPath();
ctx.rect(175, 425, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
//ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('1',200,470);
ctx.fill();





ctx.beginPath();
ctx.rect(250, 425, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
//ctx.fillStyle = "black";
ctx.fill();



ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('2',280,470);
ctx.fill();



ctx.beginPath();
ctx.rect(325, 425, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
//ctx.fillStyle = "black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('3',360,470);
ctx.fill();


ctx.beginPath();
ctx.rect(400, 425, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#ff9f0c";
ctx.fill();

ctx.beginPath();
ctx.font = '40px Arial';
ctx.fillStyle = "white";
ctx.fillText('+',420,470);
ctx.fill();





ctx.beginPath();
ctx.roundRect(100, 500, 225, 75, [0,0,0,15]);
// ctx.rect(100, 500, 225, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('0',200,550);
ctx.fill();



ctx.beginPath();
ctx.rect(325, 500, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#787a7e";
ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('.',350,540);
ctx.fill();



ctx.beginPath();
ctx.roundRect(400, 500, 75, 75, [0,0,15,0]);
// ctx.rect(400, 500, 75, 75);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle = "#ff9f0c";

ctx.fill();

ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = "white";
ctx.fillText('=',420,550);
ctx.fill();


canvas.addEventListener("click", (event) => {
    // Get the clicked coordinates
    const x = event.offsetX;
    const y = event.offsetY;
  
    // Check which button was clicked
    if (x > 325 && x < 400 && y > 200 && y < 275) {
      // '%' button clicked
       value = "%";
     
    } else if (x > 400 && x < 475 && y > 200 && y < 275) {
      // '/' button clicked
      value = "/";
   
    }
      else if(x >= 100 && x <= 175 && y >= 200 && y <= 275) {
             value= "clear";
      }
     else if (x > 100 && x < 175 && y > 275 && y < 350) {
      // '(' button clicked
      value= "brackets";
   
    } else if (x > 175 && x < 250 && y > 275 && y < 350) {
      // '7' button clicked
      value = 7;
      
    } else if (x > 250 && x < 325 && y > 275 && y < 350) {
      // '8' button clicked
      value = 8;
    
    } else if (x > 325 && x < 400 && y > 275 && y < 350) {
      // '9' button clicked
      value = 9;
     
    } else if (x > 400 && x < 475 && y > 275 && y < 350) {
      // 'X' button clicked
      value = "*";
     
    } else if (x > 175 && x < 250 && y > 350 && y < 425) {
      // '4' button clicked
      value = 4;
      
    } else if (x > 250 && x < 325 && y > 350 && y < 425) {
      // '5' button clicked
      value = 5;
  
    } else if (x > 325 && x < 400 && y > 350 && y < 425) {
      // '6' button clicked
      value = 6;
      
    } else if (x > 400 && x < 475 && y > 350 && y < 425) {
      // '-' button clicked
      value = "-";
      
    } else if (x > 100 && x < 175 && y > 350 && y < 425) {
      // ')' button clicked
      value = "brackets";
      
    } else if (x > 100 && x < 175 && y > 425 && y < 500) {
      // 'Back' button clicked
      value = "back";
      
    } 

    else if (x >= 325 && x <= 400 && y >= 500 && y <= 575)
    {
      value = '.';
    }
    else if (x > 175 && x < 250 && y > 425 && y < 500) {
      // '1' button clicked
      value = 1;
      // Do something
    } else if (x > 250 && x < 325 && y > 425 && y < 500) {
      // '2' button clicked
      value = 2;
     
    } else if (x > 325 && x < 400 && y > 425 && y < 500) {
      // '3' button clicked
      value = 3;
      
    } else if (x > 400 && x < 475 && y > 425 && y < 500) {
      // '+' button clicked
      value = "+";
   
      
    }
    else if (x > 400 && x < 475 && y > 500 && y < 575) {
     value = "=";
    }

    else if(x > 100 && x < 325 && y > 500 && y < 575)
    {
        value = 0 ;
    }
    //console.log(value);

    if (value == "clear") {
        input = "";
        display_input.innerHTML = "";
        display_output.innerHTML = "";
    }
    else if (value == "back") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input);


    }
  
    else if (value == "=") {
			let result = evaluateExpression(PerpareInput(input));

			display_output.innerHTML = CleanOutput(result);
		}
    else if (value == "brackets") {
			if (
				input.indexOf("(") == -1 || 
				input.indexOf("(") != -1 && 
				input.indexOf(")") != -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")")
			) {
				input += "(";
			} else if (
				input.indexOf("(") != -1 && 
				input.indexOf(")") == -1 || 
				input.indexOf("(") != -1 &&
				input.indexOf(")") != -1 &&
				input.lastIndexOf("(") > input.lastIndexOf(")")
			) {
				input += ")";
			}

			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input += value;
				display_input.innerHTML = CleanInput(input);
			}
		}

  });
  // cleaning input
  function CleanInput(input) {
    let input_array = input.split("");
    let input_array_length = input_array.length;
  
    for (let i = 0; i < input_array_length; i++) {
      if (input_array[i] == "*") {
        input_array[i] = ` <span class="operator">x</span> `;
      } else if (input_array[i] == "/") {
        input_array[i] = ` <span class="operator">/</span> `;
      } else if (input_array[i] == "+") {
        input_array[i] = ` <span class="operator">+</span> `;
      } else if (input_array[i] == "-") {
        input_array[i] = ` <span class="operator">-</span> `;
      } else if (input_array[i] == "(") {
        input_array[i] = `<span class="brackets">(</span>`;
      } else if (input_array[i] == ")") {
        input_array[i] = `<span class="brackets">)</span>`;
      } else if (input_array[i] == "%") {
        input_array[i] = `<span class="percent">%</span>`;
      }
    }
  
    return input_array.join("");
  }
  
  // function for evaluating the expression
  function evaluateExpression(expression) {
      let tokens = expression.match(/(\d+(\.\d+)?)|([+\-*\/%()])/g);
    
      if (!tokens) {
        // Invalid expression
        return null;
      }
    
      let operatorStack = [];
      let outputQueue = [];
    
      const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
      };
    
      tokens.forEach(token => {
        if (!isNaN(token)) {
          // If token is a number, push to the output queue
          outputQueue.push(parseFloat(token));
        } else if (token.match(/[+\-*\/%]/)) {
          // If token is an operator
          let precedence1 = precedence[token];
          let precedence2 = precedence[operatorStack[operatorStack.length - 1]];
          while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(' && precedence1 <= precedence2) {
            outputQueue.push(operatorStack.pop());
            precedence2 = precedence[operatorStack[operatorStack.length - 1]];
          }
          operatorStack.push(token);
        } else if (token === '(') {
          // If token is left parenthesis, push to operator stack
          operatorStack.push(token);
        } else if (token === ')') {
          // If token is right parenthesis, pop all operators until matching left parenthesis
          while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
            outputQueue.push(operatorStack.pop());
          }
          if (operatorStack[operatorStack.length - 1] === '(') {
            operatorStack.pop();
          }
        }
      });
    
      // Push remaining operators to output queue
      while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
      }
    
      // Evaluate the postfix expression
      let valueStack = [];
      outputQueue.forEach(token => {
        if (!isNaN(token)) {
          valueStack.push(token);
        } else {
          let b = valueStack.pop();
          let a = valueStack.pop();
          switch (token) {
            case '+':
              valueStack.push(a + b);
              break;
            case '-':
              valueStack.push(a - b);
              break;
            case '*':
              valueStack.push(a * b);
              break;
            case '/':
              valueStack.push(a / b);
              break;
            case '%':
              valueStack.push(a % b);
              break;
          }
        }
      });
    
      // The final result is the last item on the value stack
      return valueStack[0];
  }
  
// for cleaning output
  function CleanOutput (output) {
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];
  
    let output_array = output_string.split("");
    
    if (output_array.length > 3) {
      for (let i = output_array.length - 3; i > 0; i -= 3) {
        output_array.splice(i, 0);
      }
    }
  
    if (decimal) {
      output_array.push(".");
      output_array.push(decimal);
    }
  
    return output_array.join("");
  }
  // function for validating input
  function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"];
  
    if (value == "." && last_input == ".") {
      return false;
    }
  
    if (operators.includes(value)) {
      if (operators.includes(last_input)) {
        return false;
      } else {
        return true;
      }
    }
  
    return true;
  }
  // output
  function PerpareInput (input) {
    let input_array = input.split("");
  
    for (let i = 0; i < input_array.length; i++) {
      if (input_array[i] == "%") {
        input_array[i] = "/100";
      }
    }
  
    return input_array.join("");
  }
  
// console.log(value);


