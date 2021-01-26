let input = document.getElementById("input");
let buttons = document.querySelectorAll(".btn");
let calculations = document.getElementById("calculation");
let result = document.getElementById("result");

let i = buttons.length;
while (i--) {
    buttons[i].addEventListener("click", main);
}

// function main(e){
//     let inputValue = input.value;
//     let targetName = e.target.name;
//     if(targetName == "+" || targetName == "-" || targetName == "*" || targetName == "/"|| targetName == "%"|| targetName == "//" || targetName == "pow" || targetName == "sqrt" ){
//         if(input.value){
//             if(first_item){
     
//                 if(targetName == "pow" || targetName == "sqrt"){
//                     calculations.value = targetName + " " + String(inputValue)
//                     results.value = (targetName == "pow" )? Math.pow(Number(inputValue), 2) : Math.sqrt(Number(inputValue))
//                 }
//                 else{
//                     calculations.value = String(inputValue)
//                     results.value = inputValue
//                     }
//                 input.value = ""
//                 first_item = false
//             }
//             else{
//                 if(targetName == "pow" || targetName == "sqrt"){
//                     calculations.value = targetName + " " + String(inputValue)
//                 }
//                 else{
//                     calculations.value = calculations.value + targetName + String(inputValue)
//                 }
//                 input.value = ""
            
//                 switch(targetName){
//                     case "+":
//                         results.value = add([results.value, inputValue])
//                         break;
//                     case "-":
//                         results.value = sub(results.value, inputValue)
//                         break;
//                     case "*":
//                         results.value = mult([results.value, inputValue])
//                         break;
//                     case "/":
//                         results.value = div(results.value, inputValue)
//                         break;
//                     case "%":
//                         results.value = mod(results.value, inputValue)
//                         break;
//                     case "//":
//                         results.value = int_div(results.value, inputValue)
//                         break;
//                     case "pow":
//                         results.value = Math.pow(Number(results.value), 2)
//                         break;
//                     case "sqrt":
//                         results.value = Math.sqrt(Number(results.value))
//                         break;
//                 }
//             }
//         }
//     }
//     else{
//         if(targetName == "c"){
//             first_item = true;
//             calculations.value = "";
//             results.value = "";
//         }
//         else{
//             if(first_item){
//                 calculations.value = String(inputValue)
//                 results.value = inputValue
//                 first_item = false
//             }
//             else{
//                 alert("Your result is shown below or you haven't chosen operation")
//             }
//         }
//         input.value = ""
//     }

// }

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