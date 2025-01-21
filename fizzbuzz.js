
let message = "";

// Function to append Fizz and Buzz for numbers divisible by 3 and 5
function appendForThreeFiveSeven(number) {   

        if(number%3 == 0)
            message += "Fizz";

        if(number%5 == 0)
            message += "Buzz";

        if(number%7 == 0)
            message += "Bang";
        
}

// Function to append Fizz and Buzz for numbers divisible by 3 and 5
function reverseAppendForThreeFiveSeven(number) {   

    if(number%7 == 0)
        message += "Bang";
    if(number%5 == 0)
        message += "Buzz";
    if(number%3 == 0)
        message += "Fizz";
    
}

// Here, we create our main function.
function fizzbuzz() {    
    console.log('Welcome to FizzBuzz!');
    
    // Print numbers 1 - 100
    for(let i = 1; i<=255; i++) {
        let appended = false;
        message = "";

        if(i%11 == 0) {
            message+="Bong";
            appended = true;
        }

        if(i%13 ==0) {
            message = "Fezz" + message;  
            appendForThreeFiveSeven(i);
            if(message.includes("FizzBuzz")) {
                message = message.replace("FezzFizzBuzz","FizzFezzBuzz") ;
            }
            appended = true;
        }

        if(i%17 == 0){
            reverseAppendForThreeFiveSeven(i);
            appended = true;
        }

        if(!appended)
            appendForThreeFiveSeven(i);
        
       
        if(message != "")
            console.log(message);
        else
            console.log(i);
    }    
}

// Now we run the main function...
fizzbuzz();
