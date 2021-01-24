var num1;
var num2;

function add(arr) {
    var result = 0;
    for(let i = 0; i < arr.length; i++) {
        result = result + parseInt(arr[i]);
    }
    return result;
}

function sub(num1, num2) {
    var result = 0;
    result = num1 - num2;
    return result;
}

function mul(arr) {
    var result = 1;
    for( var i = 0; i < arr.length; i++) {
        result = result * parseInt(arr[i]);
    }
    return result;
}

function div(num1, num2) {
    var result = 0;
    if (num2 != 0) {
        result = num1 / num2;
        return result;
    }
    else {
        return "Can't divide by 0!";
    }
}

average = (arr) => {
    var sum = add(arr);
    result = sum / parseInt(arr.length);
    return result;
}

square = (num) => {
    return num * num;
}

MinMax = (arr) => {
    let min = arr[0], max = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      let value = arr[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
  
    return [min, max]
}

(function main() {
    let arr = new Array(); 
    let operand = prompt("Enter Your Operation \n '1' for Addition \n '2' for Subtraction \n '3' for Multiplicaton \n '4' for Division \n '5' for Average \n '6' for Square \n '7' for Min and Max \n '8' to Quit ");
    if (isNaN(Number(operand))) {
        console.log("Invalid, Try Again!")
        main();
    }
    else {
        if (operand == "1" || operand == "3" || operand == "5" || operand == "7") {
            var amountOfNum = prompt("How many numbers do you want to operate on: ");
            if (isNaN(Number(amountOfNum))) {
                console.log("Input numbers only!");
                main();
            }
            else {
                for (let i = 0; i < Number(amountOfNum); i++) {
                    arr[i] = prompt("Your Number " + (i + 1));
                    if (isNaN(Number(arr[i]))) {
                        console.log("Input numbers only!");
                        main();
                    }
                }
                if (operand == "1") {
                    result = add(arr);
                    console.log(result);
                    main();
                }
                else if (operand == "3") {
                    result = mul(arr);
                    console.log(result);
                    main();
                }
                else if (operand == "5") {
                    result = average(arr);
                    console.log("Average is " + result);
                    main();
                }
                else if (operand == "7") {
                    let [min, max] = MinMax(arr);
                    console.log(`Minimum: ${min}, Maximum: ${max}`);
                    main();
                }
                else {
                    console.log("Invalid");
                    main();
                }
            }
        }
        else if (operand == "2" || operand == "4") {
            if (operand == "2") {
                var num1 = prompt("Enter first number ");
                var num2 = prompt("Enter second number ");
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Input numbers only!")
                    main();
                }
                else {
                    result = sub(Number(num1), Number(num2));
                    console.log(result);
                    main();
                }        
            }
            else if (operand == "4") {
                var num1 = prompt("Enter first number ");
                var num2 = prompt("Enter second number ");
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Input numbers only!")
                    main();
                }
                else {
                    result = div(Number(num1), Number(num2));
                    console.log(result);
                    main();
                }
                
            }
        }
        else if (operand == "6") {
            var num = prompt("Enter the number ");
            if (isNaN(num)) {
                console.log("Input numbers only!")
                main();
            }
            else {
                console.log("The square of " + num + " is " + square(num));
                main();
            }
        }
        else if (operand == "8") {
            console.log("Goodbye");
        }
        else {
            console.log("Try Again");
            main();
        }
    }

})();