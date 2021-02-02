let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn");
let calculations = document.getElementById("calculation");
let result = document.getElementById("result");

let i = buttons.length;
while (i--) {
    buttons[i].addEventListener("click", main);
}

function main(e) {
    let inputValue = input.value;
    let operation = e.target.name;
    if (operation == '+' || operation == '-' || operation == '*' || operation == '/' || operation == 'pow' || operation == 'sqrt' || operation == '%') {
        if (operation == "pow") {
            result.value = square(inputValue);
            //input.value = "";
        }
        else if (operation == "sqrt") {
            result.value = Math.sqrt(Number(inputValue));
            //input.value = "";
        }
        else if (operation == "+") {
            result.value = add([result.value, inputValue]);
            //input.value = "";
        }
        else if (operation == "*") {
            result.value = mul([result.value, inputValue]);
            //input.value = "";
        }
        else if (operation == "-") {
            result.value = sub(result.value, inputValue);
            //input.value = "";
        }
        else if (operation == "/") {
            result.value = div(result.value, inputValue);
            //input.value = "";
        }
        else if (operation == "%") {
            result.value = modulous(result.value, inputValue);
            //input.value = "";
        }
        else {
            result.value = inputValue;
        }
    }
    else if (operation == 'ac') {
        result.value = "";
        input.value = "";
    }
    else if (operation == 'equals') {
        result.value = inputValue;
    }
}

function add(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += Number(arr[i]);
    }
    return result;
}

function sub(num1, num2) {
    let result = 0;
    result = Number(num1) - Number(num2);
    return result;
}

function mul(arr) {
    let result = 1;
    for( var i = 0; i < arr.length; i++) {
        result *= Number(arr[i]);
    }
    return result;
}

function div(num1, num2) {
    let result = 0;
    if (num2 != 0) {
        result = Number(num1) / Number(num2);
        return result;
    }
    else {
        return "Can't divide by 0!";
    }
}

square = (num) => {
    return num * num;
}

let modulous = (num1, num2) => {
    if (num2 == 0) {
        return "Can't divide by 0!";
    }
    else {
        let result = (Number(num1)) % (Number(num2));
        return result;
    }
}