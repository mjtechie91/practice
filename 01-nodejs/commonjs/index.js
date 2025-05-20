// node will finds js extension for common js so, we don't need to specify .js extension here for math.js file
const math = require('./math'); 

console.log("Common JS module practice");

console.log("Addition of two numbers 2, 3 is ", math.add(2,3));

console.log("Subtraction of two numbers 2, 3 is ", math.sub(2, 3));

console.log("Multiplication of two numbers 2, 3 is ", math.multiply(2, 3));

console.log("Modulus of two numbers 2, 3 is ", math.modulus(2, 3));
