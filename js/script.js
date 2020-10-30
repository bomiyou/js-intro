//LAB_1
//EXERCISE 1: The Fortune Teller

let jobtitle = "Developer";
let geographiclocation = "Toronto";
let annualsalary = "$60,189";
let companyname = "GBC"

console.log("You will be " + jobtitle + " in " + geographiclocation + ", making " + annualsalary + " for " + companyname);

//EXERCISE 2: The Age Calculator

  let birthYear = 1997;
  let currentYear = 2020;
  var age = currentYear - birthYear;
  console.log("They are " + age + " years old. ");


//EXERCISE 3: The Lifetime Supply Calculator

  var age = 24;
  let maxAge = 80;
  let numPerDay = 3;
  let totalNeeded = (numPerDay * 365) * (maxAge - age);
  console.log("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge);




//EXERCISE 4: The Geometrizer

let radius = 5
let pie = Math.PI
var circumference = Math.PI * 2*radius;
var area = Math.PI * radius*radius;


//2 * pi * r
console.log("The circumference is " + circumference);
// pi * radius ** 2
console.log("The area is " + area);


//EXERCISE 5: The Temperature Converter

let celsius = 30;
let celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
let fahrenheit = 20;
let fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

//LAB_2
//EXERCISE 1

function squareNumber(num) {
  
  console.log(`The result of squaring the number ${num} is: ${num ** 2}`);
  return num ** 2
}

squareNumber(3);
let ele = document.querySelector('.ex6')


//EXERCISE 2

function halfOf(num) {
  let half = num / 2;
  console.log(`Half of ${num} is ${num / 2}`);
  return half;
}

halfOf(5);

//EXERCISE 3

function percentOf(num1, num2) {
  let percent = (num1/num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percent;
}

percentOf(2, 4);

//EXERCISE 4

function areaOfCircle(radius) {
  let area = Math.PI * squareNumber(radius);
  console.log(`The area for a circle with radius ${radius} is ${area}`);
  return area;
}

areaOfCircle(2);

//EXERCISE 5

function runAll(num) {
  let half    = halfOf(num);
  let squared = squareNumber(half);
  let area    = areaOfCircle(squared);
  let result  = percentOf(squared, area);
}

runAll(5);



