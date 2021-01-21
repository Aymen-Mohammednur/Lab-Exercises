// Using Object
class accountHolder {
    constructor (firstName, lastName, accNum, totalAmount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accNum = accNum;
        this.totalAmount = totalAmount;
    }
    deposit(amount) {
        this.totalAmount += amount;
        return "Successfully Deposited!";  
    }
    balance(){
        return this.totalAmount;
    }
    withdraw(amount){
        let bal = this.balance();
        if (bal < 100 || bal > 1000000) {
            return "Can not Withdraw!";
        }
        else if (bal < amount) {
            return "Insuccifient Balance!";
        }
        else {
            this.totalAmount -= amount;
            return "Successfully Withdrawn!";
        }
    }
    transfer(amount, receiverAcc) {
        let bal = this.balance();
        if (bal < amount) {
            return "Insuccifient Balance!";
        }
        else {
            this.totalAmount -= amount;
            receiverAcc.deposit(amount);
            return "Successfully Transferred";
        }
    }
}

let accAymen = new accountHolder("Aymen", "Moh", 1111, 0);
let accMeti = new accountHolder("Meti", "Legesse", 2222, 500);
let accSemere = new accountHolder("Semere", "Habtu", 3333, 1000);
let accounts = [accAymen, accMeti, accSemere];

(function main() {
    let accChoice = prompt("Choose the account you want: \n '1' for Aymen \n '2' for Meti \n '3' for Semere \n '4' to Quit");
    let chosenAcc = accounts[parseInt(accChoice) - 1];

    if (accChoice == "1" || accChoice == "2" || accChoice == "3") {
        let choice = prompt(chosenAcc.firstName + " what do you want to do \n '1' for Deposit \n '2' for Withdrawal \n '3' to Check Balance \n '4' to Transfer Money ");
        if (choice == "1") {
            let amount = Number(prompt("Amount to Deposit "));
            if(typeof(amount) == NaN) {
                console.log("Please enter numbers only...");
                main();
            }
            console.log(chosenAcc.deposit(amount));
            main();
        }
        else if (choice == "2") {
            let amount = Number(prompt("Amount to Withdraw "));
            console.log(chosenAcc.withdraw(amount));
            main();
        }
        else if (choice == "3") {
            console.log(chosenAcc.firstName + " Your balance is " + chosenAcc.balance());
            main();
        }
        else if (choice == "4") {
            let amount = Number(prompt("Amount to Transfer "));
            let receiver = parseInt(prompt("Account to Transfer to \n 1 for Aymen, 2 for Meti, 3 for Semere"));
            if ((accounts.indexOf(chosenAcc)) + 1 == receiver) {
                console.log("Can not transfer to yourself!");
                main();
            }
            else {
                console.log(chosenAcc.transfer(amount, accounts[receiver - 1]));
                main();
            }
            
        }
        else {
            console.log("Goodbye");
        }
    }
    else if (accChoice == "4") {
        console.log("Goodbye");
    }
    else {
        console.log("Goodbye");
    }
    
})();