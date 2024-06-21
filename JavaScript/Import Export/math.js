// export const SECRET_NUMBER = 42;
// export const name = 'myMathModule';
// export let x = 30 , y = 100;

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }

// export function multiply(a, b) {
//     return a * b;
// }   

// export function divide(a, b) {
//     return a / b;
// }

// export class Math{
//     double (x){
//         return x*x;
//     }
// }

const SECRET_NUMBER = 42;
const name = 'myMathModule';
let x = 30 , y = 100;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}   

function divide(a, b) {
    return a / b;
}

class Math{
    double (x){
        return x*x;
    }
}

export default{
    add,
    subtract,
    multiply,
    divide,
    SECRET_NUMBER,
    name,
    x,
    y,
    Math
};
