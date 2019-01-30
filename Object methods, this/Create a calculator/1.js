window.onload = function() {
/*
Create a calculator

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

function Calculator () {
   
  this.read = function() {
   this.num1 = parseInt(prompt('Type first number'));
  this.num2 = parseInt(prompt('Type two number'));
  };
 this.sum = function() {
      return this.num1 + this.num2;
  };
  this.mul = function() {
    return this.num1 * this.num2;
  }
}

let i = new Calculator();
i.read();
i.result = i.sum();
i.multipl = i.mul();
console.log(i);
}
