
let number = prompt("Введи число");
let result = number * 0.1; 
console.log(result); 


let num1 = prompt("Введи первое число"); 
let num2 = prompt("Введите второе число"); 
if (num1 < num2) {
  console.log("мен.число" + num1);
} else {
  console.log("мен.число" + num2);
}


let number = prompt("Введи число"); 
if (number < 100) {
  console.log("меньше 100");
} else if (number > 100) {
  console.log("больше 100");
} else {
  console.log("равно 100");
}


const name = prompt("Введи имя");
const age = parseInt(prompt("Введи возраст"));
if (age >= 18) {
  console.log(`Hello, ${name}!`); 
} 
else {
  console.log(`Hi, ${name}!`); 
} 
