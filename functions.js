//---------------------------------------------------- Functions ----------------------------------------------------------------//


// There are many types of functions in javascript but two most used functions are basic syntax function and arrow functions
// both functions takes parameters and arguements to return a value
// arrow functions are also called fet arrow functions which are introduced in es6

// basic structure of a function 👇

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// sum(5, 8)

// here num1 and num2 in line 10 are taken as parameters and 5, 8 are taken as arguements in line 13
// we have to call a functions to make it work as we did in line 13

// arrow function 👇

// const sum = (a, b) => {
//     console.log(a + b);
// }
// sum(5, 8)

// here if the parameter is only one then there is no need to add parantheses

// const mul = a => a * a;
// console.log(mul(5));



//-------------------------------------- Block vs Local vs Global Scope ----------------------------------//



// Block Scope : When we declare a variable inside { } then that variable becomes a block scope i.e it has no connection outside
//               that scope { }.

// Local Scope : When we declare a variable inside a function then that variable becomes a local scope i.e it has no
//               connection outside that function.

// Global Scope : When we declare a variable anywhere inside our javascript code then it becomes global scope i.e it can be accessed
//                anywhere inside that code.

// Note - Const and Let are used for Block Scope but Var does not work in Block Scope that's why we can't use Var nowdays.