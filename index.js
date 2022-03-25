let x;
let y;
let operator;
const numbers = [];

let onScreen = document.querySelector(".numbersDisplay")
let allClear = document.querySelector("#AC");
let deleteLast = document.querySelector("#C");
let squareNumber = document.querySelector("#square");
let memoryRecall = document.querySelector("#MR");
let memoryPlus = document.querySelector("#Mplus");
let memoryMinus = document.querySelector("#Mminus");
let divideNumbers = document.querySelector("#divide");
let multiplyNumbers = document.querySelector("#multiply");
let substractNumbers = document.querySelector("#substract");
let addNumbers = document.querySelector("#add");
let dot = document.querySelector("#dots");
let equal = document.querySelector("#equal");
let one = document.querySelector("#number1");
let two = document.querySelector("#number2");
let three = document.querySelector("#number3");
let four = document.querySelector("#number4");
let five = document.querySelector("#number5");
let six = document.querySelector("#number6");
let seven = document.querySelector("#number7");
let eight = document.querySelector("#number8");
let nine = document.querySelector("#number9");
let zero = document.querySelector("#zero");

const oneClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "1" : onScreen.innerText = onScreen.innerText + "1"
};
const twoClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "2" : onScreen.innerText = onScreen.innerText + "2"
};
const threeClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "3" : onScreen.innerText = onScreen.innerText + "3"
};
const fourClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "4" : onScreen.innerText = onScreen.innerText + "4"
};
const fiveClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "5" : onScreen.innerText = onScreen.innerText + "5"
};
const sixClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "6" : onScreen.innerText = onScreen.innerText + "6"
};
const sevenClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "7" : onScreen.innerText = onScreen.innerText + "7"
};
const eightClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "8" : onScreen.innerText = onScreen.innerText + "8"
};
const nineClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "9" : onScreen.innerText = onScreen.innerText + "9"
};
const zeroClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "0" : onScreen.innerText = onScreen.innerText + "0"
};
const dotClick = () => {
  (onScreen.innerText === "0") ? onScreen.innerText = "0." : onScreen.innerText = onScreen.innerText + "."
};
one.addEventListener("click", oneClick);
two.addEventListener("click", twoClick);
three.addEventListener("click", threeClick);
four.addEventListener("click", fourClick);
five.addEventListener("click", fiveClick);
six.addEventListener("click", sixClick);
seven.addEventListener("click", sevenClick);
eight.addEventListener("click", eightClick);
nine.addEventListener("click", nineClick);
zero.addEventListener("click", zeroClick);
dot.addEventListener("click", dotClick);

const memPlus = () => {
  x = onScreen.innerText;
  x = parseFloat(x);
  numbers.push(x);
  clear();
};
const memMinus = () => {
  x = onScreen.innerText;
  x = parseFloat(x);
  x *= -1;
  numbers.push(x);
  clear();
};
const memoRecall = () => {
  memorized = numbers.reduce((a, b) => a + b);
  memorized = Math.floor(memorized * 1000);
  memorized /= 1000;
  allCleared();
  onScreen.innerText = memorized;
};
const sq = () => {
  x = onScreen.innerText
  numX = parseFloat(x);
  clear();
  let rooted = Math.sqrt(numX);
  let roots = Math.floor(rooted * 1000);
  roots /= 1000;
  onScreen.innerText = roots;
};
const div = () => {
  x = onScreen.innerText;
  operator = "/";
  clear();
};
const mult = () => {
  x = onScreen.innerText;
  operator = "x";
  clear()
};
const minus = () => {
  if (onScreen.innerText === "") {
    onScreen.innerText = "-";
    return;
  }
  x = onScreen.innerText;
  operator = "-";
  clear()
};
const plus = () => {
  x = onScreen.innerText;
  operator = "+";
  clear()
};
const clear = () => {
  onScreen.innerText = "";
};
const clearLastNumber = () => {
  onScreen.innerText = onScreen.innerText.slice(0, -1);
};
const allCleared = () => {
  onScreen.innerText = "";
  x = 0;
  y = 0;
  operator = "";
  numbers.length = 0;
};
const result = () => {
  let res = 0;
  y = onScreen.innerText;
  switch (operator) {
    case "+":
      res = parseFloat(x) + parseFloat(y);
      break;
    case "-":
      res = parseFloat(x) - parseFloat(y);
      break;
    case "x":
      res = parseFloat(x) * parseFloat(y);
      break;
    case "/":
      res = parseFloat(x) / parseFloat(y);
      break;
    default:
      "Error!!!!";
      break;
  };
  allCleared();
  res = Math.floor(res * 1000);
  res /= 1000;
  onScreen.innerText = res;
};


allClear.addEventListener("click", allCleared);
deleteLast.addEventListener("click", clearLastNumber);
squareNumber.addEventListener("click", sq);
memoryRecall.addEventListener("click", memoRecall);
memoryPlus.addEventListener("click", memPlus);
memoryMinus.addEventListener("click", memMinus);
divideNumbers.addEventListener("click", div);
multiplyNumbers.addEventListener("click", mult);
substractNumbers.addEventListener("click", minus);
addNumbers.addEventListener("click", plus);
equal.addEventListener("click", result);