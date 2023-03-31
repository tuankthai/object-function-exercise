// Create a variable called myName and assign it your name as a string.
const myName = "tuna"

// Create an array called numbers and add five numbers to it.
// let numbers[] = {1, 2, 3, 4, 5}

// Create a variable called myAge and assign it your age as a number.
let myAge = 40

// Create an object called person with properties name, age, and gender.
const person = {
    // name: "tuan thai",
    name: myName,
    age: myAge,
    gender: "Female"
}

// Create a variable called isRaining and assign it a boolean value based on whether it is currently raining or not.
let isRaining = false

// Create a function called greet that takes a name as a parameter and returns a greeting message using template literals.
function greet(name) {
    return `Hello ${name}`
}

// Create a function called multiply that takes two numbers as parameters and returns their product.
function multiply(num1, num2 ) {
    return (num1 * num2)
}
// Create a function called divide that takes two numbers as parameters and returns their quotient.
function divide(num1, num2) {
    return num1/ num2
}

// BONUS
// Create a function called isEven that takes a number as a parameter and returns true if the number is even, false otherwise.
function isEven(number) {
    return (number % 2 == 0)
}

console.log(isEven(18))
console.log(isEven(1))
console.log(divide(18, 2))
console.log(multiply(4, 3))
console.log(greet("tammy"))
console.log(greet(myName))
console.log(person)


