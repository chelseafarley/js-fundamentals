// Codepen here: https://codepen.io/chelseafarley/pen/NWaYKrX

// For full equality table of what to expect when comparing JavaScript values https://dorey.github.io/JavaScript-Equality-Table/

const oneString = "1";
const one = 1;
if (one == oneString) {
  console.log("one == oneString");
}

if (!(one === oneString)) { // simplified would be !== but wanted to show === for beginners
  console.log("one !== oneString")
}

const falseBool = false;
if (!falseBool) {
  console.log("falseBool is false")
}

const nullObject = null;
if (!nullObject) {
  console.log("nullObject is false");
}

const undefinedObject = undefined;
if (!undefined) {
  console.log("undefinedObject is false");
}

const falseInt = 0;
if (!falseInt) {
  console.log("falseInt is false");
}

if (falseInt == falseBool) {
  console.log("falseInt == falseBool")
}

if (falseBool != undefinedObject) {
  console.log("falseBool != undefinedObject");
}

if (falseBool != nullObject) {
  console.log("falseBool != nullObject");
}

const trueInt = 1;
if (trueInt) {
  console.log("trueInt is true")
}

const object = {};
if (object) {
  console.log("object is true");
}

if (undefined == null) {
  console.log("undefined == null");
}

if (undefined !== null) {
  console.log("undefined !== null");
}