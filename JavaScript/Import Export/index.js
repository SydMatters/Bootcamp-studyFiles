// Import and Export in ES6
// import [defaultExport] from "module-name";
import {
  SECRET_NUMBER as num1,
  add as sumar,
  subtract,
  divide,
} from "./math.js";

function add(a, b) {
  return a + b;
}
console.log(num1);
console.log(add(1, 2));
console.log(sumar(1, 2));
console.log(subtract(1, 2));
console.log(divide(1, 2));
