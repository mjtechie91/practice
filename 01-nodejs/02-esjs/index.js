// In the ESJS .js(math.js) extension is mandatory for importing js filed as node will not guess the file extension like it does in commonJS
// If you want to skip the extension for esjs module you need to configure it using bundlers or typescript 
import { add, sub, multiply, modulus } from "./math.js";


console.log("ES JS module practice");

console.log("Addition of two numbers 2, 3 is ", add(2,3));

console.log("Subtraction of two numbers 2, 3 is ", sub(2, 3));

console.log("Multiplication of two numbers 2, 3 is ", multiply(2, 3));

console.log("Modulus of two numbers 2, 3 is ", modulus(2, 3));
