// Code Pen here: https://codepen.io/chelseafarley/pen/YzryJgm

// const demo - uncomment commented code to see errors
// uncomment console.log to see values at each point in code
const myConst = "hi";
// const myConst = "hi again";
// myConst = "hi there";

// What happens when you use the const keyword and use the const 
function myConstFunction() {
  const myConst = "hi there";
  // console.log(myConst);
}

// What happens when you don't use the const keyword and try assignment within a block
function myConstFunction2() {
  //myConst = "hi there";
  //console.log(myConst);
}

// console.log(myConst);
myConstFunction();
myConstFunction2();

// What happens when const declared inside another block of code
if (true) {
  const myConst = "this is my const";
  // console.log(myConst);
}

// What happens when we are back outside the block of code
// console.log(myConst);

const constObject = {
  myProperty: 5
};
// console.log(constObject);

// Can update a constObject
constObject["myProperty"] = 10;
constObject["newProperty"] = 5;

// console.log(constObject);

// Trying to assign new value to constObject fails
// constObject = {};

// An example of how const is hoisted
function hoistingConst() {
  // console.log(myHoistedConst);
}
// hoistingConst();

const myHoistedConst = "Hoisted Const";
hoistingConst();

// let demo - uncomment commented code to see errors.
let myLet = "hi";
// console.log(myLet);

//let myLet = "hi again";
myLet = "hi there";
// console.log(myLet);

// What happens when you use the let keyword inside a block 
function myLetFunction() {
  let myLet = "hi there new";
  // console.log(myLet);
}

// What happens when you don't use the let keyword and try assignment within a block
function myLetFunction2() {
  myLet = "hi there new 2";
  // console.log(myLet);
}

// console.log(myLet);
myLetFunction();
// console.log(myLet);
myLetFunction2();
// console.log(myLet);

// What happens when let declared inside another block of code
if (true) {
  let myLet = "this is my let";
  // console.log(myLet);
}

// console.log(myLet);

if (true) {
  myLet = "Setting let inside if block";
  // console.log(myLet);
}

// What happens when we are back outside the block of code
// console.log(myLet);

let letObject = {
  myProperty: 5
};
// console.log(letObject);

// Can update a letObject
letObject["myProperty"] = 10;
letObject["newProperty"] = 5;

// console.log(letObject);

// Trying to assign new value to letObject succeeds
letObject = {};
// console.log(letObject);

// An example of how let is hoisted
function hoistingLet() {
  // console.log(myHoistedLet);
}
//hoistingLet();

let myHoistedLet = "Hoisted Let";
hoistingLet();

// var examples
// uncomment console.log to see values at each point in code
var myVar = "hi";
// console.log(myVar);

var myVar = "hi again";
// console.log(myVar);

myVar = "hi there";
// console.log(myVar);

// Can't create let variable with same name due to let restrictions
// let myVar = "hi";

// What happens when you use the var keyword inside a block 
function myVarFunction() {
  var myVar = "hi there new";
  // console.log(myVar);
}

// What happens when you don't use the var keyword and try assignment within a block
function myVarFunction2() {
  myVar = "hi there new 2";
  // console.log(myVar);
}

// console.log(myVar);
myVarFunction();
// console.log(myVar);
myVarFunction2();
// console.log(myVar);

// What happens when var declared inside another block of code
if (true) {
  var myVar = "this is my var";
  // console.log(myVar);
}

// console.log(myVar);

if (true) {
  myVar = "Setting var inside if block";
  // console.log(myVar);
}

// What happens when we are back outside the block of code
// console.log(myVar);

var varObject = {
  myProperty: 5
};
// console.log(varObject);

// Can update a letObject
varObject["myProperty"] = 10;
varObject["newProperty"] = 5;

// console.log(varObject);

// Trying to assign new value to varObject succeeds
varObject = {};
// console.log(varObject);

// An example of how var is hoisted
function hoistingVar() {
  // console.log(myHoistedVar);
}
hoistingVar();

var myHoistedVar = "Hoisted Var";
hoistingVar();
