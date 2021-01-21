// We don't add script in the head because the browser will load the 
// from top to bottom and it will not load the body of the html unless
// finishes loading the script. We don't want that. We want the website to load 
// its visual parts while loading the script file

var firstName; 
var lastName; 
var age; 
var job;

// Receive the values from input
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");

// Display  the result on console from input 
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

//Age variable for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

tempAge = parseInt(age);

// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}
console.log("Is Eligible to Vote : " + isEligibleToVote);




//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

numberOfFamily = prompt("Number of Family? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family Members " + (i + 1));
}

console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member, index) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});




var birthYear;
let tempoAge = ageCalc(birthYear);
birthYear = prompt("Enter Your Birth Year ");

console.log("Age: " + tempoAge + " " + "years old");

// Age calculator function
function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;
}


// BMI calculator function
var weight;
var height;

let calcBmi = function(weight, height) {
    let bmi = weight / (height*height);
    bmi = Number(bmi.toFixed(1));

    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi > 18.5 && bmi < 25) {
        console.log("Normal");
    }
    else if (bmi >= 25 && bmi < 30) {
        console.log("Overweight");
    }
    else {
        console.log("Obese");
    }
}



// Addind Self Invoking Function Experession
(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call to bmi calculator 
    calcBmi(weight, height);

})();   