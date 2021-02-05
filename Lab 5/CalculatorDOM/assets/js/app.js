const firstDisp = document.querySelector(".first-display");
const secondDisp = document.querySelector(".second-display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-clear");
let firstNum = "";
let secondNum = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    secondNum += e.target.innerText;
    secondDisp.innerText = secondNum;
  });
});

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!secondNum) return;
    const currentOp = e.target.innerText;
    if (firstNum && secondNum && lastOperation) {
      evaluate();
    } else {
      result = Number(secondNum);
    }
    clearThis(currentOp);
    lastOperation = currentOp;
    console.log(result);
  });
});

function clearThis(name = "") {
  firstNum += secondNum + " " + name + " ";
  firstDisp.innerText = firstNum;
  secondDisp.innerText = "";
  secondNum = "";
}

function evaluate() {
  if (lastOperation === "x") {
    result = Number(result) * Number(secondNum);
  } 
  else if (lastOperation === "+") {
    result = Number(result) + Number(secondNum);
  } 
  else if (lastOperation === "-") {
    result = Number(result) - Number(secondNum);
  } 
  else if (lastOperation === "/") {
    if (secondNum === '0') {
      alert("Can not divide by 0!");
      secondNum = "";
    }
    else {
      result = Number(result) / Number(secondNum);
    }
  } 
  else if (lastOperation === "%") {
    result = Number(result) % Number(secondNum);
  }
  
}

equalBtn.addEventListener("click", () => {
  if (!secondNum || !firstNum) return;
  haveDot = false;
  evaluate();
  clearThis();
  secondDisp.innerText = result;
  secondNum = result;
  firstNum = "";
});

clearAll.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  firstDisp.innerText = "0";
  secondDisp.innerText = "0";
  result = "";
});

clearLast.addEventListener("click", () => {
  secondDisp.innerText = "0";
  secondNum = "";
});