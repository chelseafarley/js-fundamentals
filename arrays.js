// Code pen here: https://codepen.io/chelseafarley/pen/BawrygW

// declaring an array
const fruit = ["apples", "oranges", "lemon"];
//console.log(fruit);

// accessing by index
//console.log(fruit[0]);

// length
//console.log(fruit.length);

// push
fruit.push("Peach");
//console.log(fruit);

// pop
const poppedFruit = fruit.pop();
//console.log(fruit);
//console.log(poppedFruit);

// shift
const shift = fruit.shift();
//console.log(shift);
//console.log(fruit);

// unshift
fruit.unshift("Lychee");
//console.log(fruit);

// indexOf
//console.log(fruit.indexOf("apples"));
//console.log(fruit.indexOf("lemons"));

// splice
//console.log(fruit.splice(1, 1));

// copy using spread operator
//console.log([...fruit]);

// copy using slice
//console.log(fruit.slice());

// copy using Array.from
//console.log(Array.from(fruit));

// concat
//console.log(fruit.concat(["mandarin", "strawberry"]));

// every
// const fruitNotEmpty = fruit.every((fruit) => {
//   return fruit.length > 0;
// });
// console.log(fruitNotEmpty);

// filter
//console.log(fruit);
//const fruitStartingWithL = fruit.filter((fruit) => {
//  return fruit.toLowerCase()[0] === "l";
//});
//console.log(fruitStartingWithL);

// find
//const fruitStartingWithL = fruit.find((fruit) => {
//  return fruit.toLowerCase()[0] === "l";
//});
//console.log(fruitStartingWithL);

// map
//const fruitObjects = fruit.map((item, index) => {
//  return {
//    index: index,
//    name: item
//  };
//});
//console.log(fruitObjects);

// sort
//console.log(fruit.sort());