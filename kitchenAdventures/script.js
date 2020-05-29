// Variables

// variable are declared with the var, let and const key words

var name = "john";
// console.log(name);

name = "frank";

// console.log(name);

let phone = "Galaxy S5";
// console.log(phone);

// const is used for values that should not change

const pi = 3.14;
// console.log(pi);

// Strings

var breakfast = "cereal";
var lunch = "chicken salad";
var dinner = "baked chicken with sweet potoatos";

var menu =
  "Today's meals: Breakfast: " +
  breakfast +
  " Lunch: " +
  lunch +
  " Dinner: " +
  dinner;

// console.log(menu);

// console.log(menu.toUpperCase())

// menu = menu.split(" ");

console.log(menu.length);

console.log();

// for (var i = 0; i < menu.length; i++) {
//   console.log(menu[i].toUpperCase());
// }

// console.log(menu)

// var arr = [1,2,3,4,5, 'the cat in the hat'].join(" ")

// Arguments / Paramenters

// Zeroeth, First, Second ...

console.log(menu.substring(0, 2));
console.log(menu.substring(0));
console.log(menu.slice(0, 2));

console.log(menu.replace("B", "Z"));
console.log(menu.replace("ea", "th"));

var fullName = "  ramon vazquez   ";
console.log(fullName.trim());
// Arrays

//  var array = [(1,
//   2,
//   "car",
//   "ball",
//   function add(a, b) {
//     return a + b;
//   },
//   { a: 1, b: 1 })
// ];

const person = {
  name: "ramon",
  age: 40,
};

var greeting = "hello my name is ramon".split(" ");

console.log(greeting);

greeting.push("vazquez");
console.log(greeting);

greeting.pop();
console.log(greeting);

greeting.shift();
console.log(greeting);

greeting.unshift("banana");

console.log(greeting);
